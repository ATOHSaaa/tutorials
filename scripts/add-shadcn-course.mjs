import fs from 'fs'
import path from 'path'
import { SHADCN_COURSE } from './shadcn-course-data.mjs'

const SRC = path.resolve('src')
const TEMPLATE = path.join(SRC, 'edge')
const course = SHADCN_COURSE

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true })
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name)
    const d = path.join(dest, entry.name)
    if (entry.isDirectory()) copyDir(s, d)
    else fs.copyFileSync(s, d)
  }
}

function toPascal(s) {
  return s.split('-').map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join('')
}

function generateLessonsTs(c) {
  return `export interface Lesson {
  id: string
  title: string
  description: string
  sections: Section[]
}

export interface Section {
  heading: string
  content: string
  code?: string
  tip?: string
}

export const lessons: Lesson[] = ${JSON.stringify(c.lessons, null, 2).replace(/"([^"]+)":/g, '$1:')}
`
}

function getFirstCodeLine(lesson) {
  const raw = lesson.sections.find((s) => s.code)?.code
  if (raw) {
    const line = raw.split('\n').find((l) => l.trim())
    if (line) return line.trim()
  }
  return lesson.title
}

function generateLessonDemos(c) {
  const demos = c.lessons.map((l) => {
    const name = `${toPascal(l.id)}Demo`
    const codeSnippet = JSON.stringify(getFirstCodeLine(l))
    return `export function ${name}() {
  const [step, setStep] = useState(0)
  const steps = ${JSON.stringify(l.sections.map((s) => s.heading))}
  return (
    <DemoPanel title="${l.title}">
      <p className="demo-note">${l.description}</p>
      <code className="selector-code">{${codeSnippet}}</code>
      <div className="course-demo-steps">
        {steps.map((s, i) => (
          <button key={s} className={step === i ? 'active' : ''} onClick={() => setStep(i)}>{s}</button>
        ))}
      </div>
      <div className="course-demo-detail">
        <strong>{steps[step]}</strong>
        <p>{step + 1} / {steps.length} のポイントを表示中です。レッスン本文で詳しく学べます。</p>
      </div>
    </DemoPanel>
  )
}`
  }).join('\n\n')

  const demoMap = c.lessons.map((l) => `  '${l.id}': ${toPascal(l.id)}Demo`).join(',\n')

  return `import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

${demos}

const demoMap: Record<string, React.ComponentType> = {
${demoMap},
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
`
}

function generateAppTsx(c) {
  return `import { useEffect, useLayoutEffect, useRef } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { lessons } from './data/lessons'
import { useProgress } from './hooks/useProgress'
import { Home } from './components/Home'
import { Sidebar } from './components/Sidebar'
import { LessonView } from './components/LessonView'
import { QuizPage } from '../components/quiz/QuizPage'
import { quizQuestions } from './data/quiz'
import './App.css'

const BASE = '/${c.slug}'

export default function ${c.componentName}() {
  const { lessonId } = useParams()
  const navigate = useNavigate()
  const { completed, markComplete, resetProgress, progressPercent } = useProgress()

  const isQuizView = lessonId === 'quiz'
  const isLessonView = lessonId !== undefined && !isQuizView
  const currentLessonId = lessonId ?? lessons[0].id
  const currentIndex = lessons.findIndex((l) => l.id === currentLessonId)

  const mainAreaRef = useRef<HTMLDivElement>(null)
  const lessonTopRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (lessonId && lessonId !== 'quiz' && !lessons.find((l) => l.id === currentLessonId)) {
      navigate(BASE, { replace: true })
    }
  }, [lessonId, navigate, currentLessonId])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    mainAreaRef.current?.scrollTo({ top: 0, behavior: 'instant' })
    lessonTopRef.current?.scrollIntoView({ behavior: 'instant', block: 'start' })
  }

  useLayoutEffect(() => {
    if (isLessonView) scrollToTop()
  }, [currentLessonId, isLessonView, isQuizView])

  const goToLesson = (id: string) => navigate(\`\${BASE}/\${id}\`)
  const goHome = () => navigate(BASE)
  const goToQuiz = () => navigate(\`\${BASE}/quiz\`)

  const startLearning = () => {
    const firstIncomplete = lessons.find((l) => !completed.has(l.id))
    goToLesson(firstIncomplete?.id ?? lessons[0].id)
  }

  if (isQuizView) {
    return (
      <div className="tutorial-theme">
        <QuizPage
          courseTitle="${c.courseTitle}"
          storageKey="${c.slug}-tutorial-quiz"
          questions={quizQuestions}
          onBack={goHome}
        />
      </div>
    )
  }

  if (!isLessonView) {
    return (
      <div className="tutorial-theme">
        <Link to="/" className="hub-back-link">← チュートリアル一覧</Link>
        <div className="app app-home">
          <Home
            completed={completed}
            progressPercent={progressPercent}
            onStart={startLearning}
            onSelectLesson={goToLesson}
            onOpenQuiz={goToQuiz}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="tutorial-theme">
      <div className="app">
        <Sidebar
          currentId={currentLessonId}
          completed={completed}
          progressPercent={progressPercent}
          onSelect={goToLesson}
          onReset={resetProgress}
          onOpenQuiz={goToQuiz}
        />
        <div className="main-area" ref={mainAreaRef}>
          <div ref={lessonTopRef} />
          <div className="top-links">
            <button className="home-link" onClick={goHome}>← チュートリアルトップ</button>
            <Link to="/" className="home-link">チュートリアル一覧</Link>
          </div>
          <LessonView
            lessonId={currentLessonId}
            onComplete={() => {
              markComplete(currentLessonId)
              if (currentIndex < lessons.length - 1) {
                goToLesson(lessons[currentIndex + 1].id)
              }
            }}
            onNext={() => goToLesson(lessons[currentIndex + 1].id)}
            onPrev={() => goToLesson(lessons[currentIndex - 1].id)}
            hasNext={currentIndex < lessons.length - 1}
            hasPrev={currentIndex > 0}
            isCompleted={completed.has(currentLessonId)}
          />
        </div>
      </div>
    </div>
  )
}
`
}

function generateHomeTsx(c) {
  return `import { lessons } from '../data/lessons'

interface HomeProps {
  completed: Set<string>
  progressPercent: number
  onStart: () => void
  onSelectLesson: (id: string) => void
  onOpenQuiz: () => void
}

export function Home({ completed, progressPercent, onStart, onSelectLesson, onOpenQuiz }: HomeProps) {
  return (
    <div className="home">
      <div className="home-hero">
        <div className="hero-badge">無料 · ブラウザで学べる</div>
        <h1>
          <span className="hero-accent">${c.heroAccent}</span>
          入門
        </h1>
        <p className="hero-sub">${c.heroSub}</p>
        <button className="btn-primary btn-large" onClick={onStart}>
          {progressPercent > 0 ? '学習を続ける' : '学習を始める'} →
        </button>
        {progressPercent > 0 && (
          <p className="hero-progress">進捗: {progressPercent}% 完了</p>
        )}
      </div>

      <div className="home-features">
        <div className="feature-card">
          <span className="feature-icon">🎮</span>
          <h3>インタラクティブ</h3>
          <p>${c.feature1}</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">📖</span>
          <h3>日本語で解説</h3>
          <p>初心者向けにわかりやすく、コード例も豊富です。</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">💾</span>
          <h3>進捗を保存</h3>
          <p>ブラウザに自動保存。いつでも続きから学べます。</p>
        </div>
      </div>

      <div className="home-lessons">
        <h2>レッスン一覧</h2>
        <div className="lesson-grid">
          {lessons.map((lesson, index) => (
            <button
              key={lesson.id}
              className={\`lesson-card \${completed.has(lesson.id) ? 'done' : ''}\`}
              onClick={() => onSelectLesson(lesson.id)}
            >
              <span className="lesson-card-number">
                {completed.has(lesson.id) ? '✓' : index + 1}
              </span>
              <div>
                <strong>{lesson.title}</strong>
                <p>{lesson.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="home-quiz">
        <div className="home-quiz-card">
          <span className="home-quiz-icon">📝</span>
          <div>
            <h2>理解度チェック</h2>
            <p>レッスンの内容をクイズで確認できます。</p>
          </div>
          <button type="button" className="btn-secondary" onClick={onOpenQuiz}>
            クイズに挑戦 →
          </button>
        </div>
      </div>
    </div>
  )
}
`
}

function generateSidebarTsx(c) {
  return `import { lessons } from '../data/lessons'

interface SidebarProps {
  currentId: string
  completed: Set<string>
  progressPercent: number
  onSelect: (id: string) => void
  onReset: () => void
  onOpenQuiz: () => void
}

export function Sidebar({
  currentId,
  completed,
  progressPercent,
  onSelect,
  onReset,
  onOpenQuiz,
}: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <span className="logo-icon course-logo">${c.logoIcon}</span>
          <div>
            <strong>${c.sidebarTitle}</strong>
            <span>ブラウザで学ぶ</span>
          </div>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: \`\${progressPercent}%\` }} />
        </div>
        <span className="progress-label">{progressPercent}% 完了</span>
      </div>

      <nav className="lesson-nav">
        {lessons.map((lesson, index) => {
          const isActive = lesson.id === currentId
          const isDone = completed.has(lesson.id)
          return (
            <button
              key={lesson.id}
              className={\`lesson-nav-item \${isActive ? 'active' : ''} \${isDone ? 'done' : ''}\`}
              onClick={() => onSelect(lesson.id)}
            >
              <span className="lesson-number">
                {isDone ? '✓' : index + 1}
              </span>
              <span className="lesson-nav-text">{lesson.title}</span>
            </button>
          )
        })}

      <button type="button" className="lesson-nav-item quiz-nav-item" onClick={onOpenQuiz}>
        <span className="lesson-number">📝</span>
        <span className="lesson-nav-text">クイズ</span>
      </button>
      </nav>

      <button className="reset-btn" onClick={onReset}>
        進捗をリセット
      </button>
    </aside>
  )
}
`
}

function generateUseProgress(c) {
  return `import { lessons } from '../data/lessons'
import { createUseProgress } from '../../hooks/useTutorialProgress'

export const useProgress = createUseProgress('${c.slug}-tutorial-progress', lessons.length, '${c.slug}')
`
}

const DEMO_CSS = `
.course-logo { color: var(--accent) !important; font-size: 1.35rem !important; }
.course-demo-steps { display: flex; flex-wrap: wrap; gap: 0.35rem; margin: 0.75rem 0; }
.course-demo-steps button { padding: 0.4rem 0.65rem; background: var(--bg-3); border: 1px solid var(--border); border-radius: var(--radius-sm); font-size: 0.72rem; cursor: pointer; transition: all 0.15s; }
.course-demo-steps button.active { border-color: var(--accent); background: var(--accent-bg); color: var(--accent); }
.course-demo-detail { padding: 0.85rem 1rem; background: var(--bg-3); border-radius: var(--radius-sm); font-size: 0.85rem; }
.course-demo-detail strong { display: block; color: var(--text-heading); margin-bottom: 0.35rem; }
.course-demo-detail p { color: var(--text-muted); margin: 0; }
.shadcn-preview { --sp-bg: #fff; --sp-fg: #0f172a; --sp-primary: #0f172a; --sp-primary-fg: #f8fafc; --sp-muted: #f1f5f9; --sp-border: #e2e8f0; --sp-destructive: #ef4444; --sp-radius: 0.5rem; padding: 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border); background: var(--sp-bg); color: var(--sp-fg); transition: all 0.2s; }
.shadcn-preview.dark { --sp-bg: #0f172a; --sp-fg: #f8fafc; --sp-primary: #f8fafc; --sp-primary-fg: #0f172a; --sp-muted: #1e293b; --sp-border: #334155; }
.shadcn-btn-row { display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 0.5rem 0; }
.shadcn-btn { display: inline-flex; align-items: center; justify-content: center; padding: 0.5rem 1rem; font-size: 0.8rem; font-weight: 500; border-radius: var(--sp-radius); border: none; cursor: pointer; transition: opacity 0.15s; }
.shadcn-btn:hover { opacity: 0.9; }
.shadcn-btn--default { background: var(--sp-primary); color: var(--sp-primary-fg); }
.shadcn-btn--outline { background: transparent; color: var(--sp-fg); border: 1px solid var(--sp-border); }
.shadcn-btn--ghost { background: transparent; color: var(--sp-fg); }
.shadcn-btn--ghost:hover { background: var(--sp-muted); opacity: 1; }
.shadcn-btn--destructive { background: var(--sp-destructive); color: #fff; }
.shadcn-btn--secondary { background: var(--sp-muted); color: var(--sp-fg); }
.shadcn-btn--sm { padding: 0.35rem 0.75rem; font-size: 0.72rem; }
.shadcn-card { border: 1px solid var(--sp-border); border-radius: var(--sp-radius); background: var(--sp-bg); overflow: hidden; }
.shadcn-card-header { padding: 1rem 1rem 0.5rem; }
.shadcn-card-title { font-weight: 600; font-size: 0.95rem; margin: 0; }
.shadcn-card-desc { font-size: 0.75rem; color: #64748b; margin: 0.25rem 0 0; }
.shadcn-preview.dark .shadcn-card-desc { color: #94a3b8; }
.shadcn-card-content { padding: 0.5rem 1rem 1rem; font-size: 0.8rem; }
.shadcn-card-footer { padding: 0.75rem 1rem; border-top: 1px solid var(--sp-border); display: flex; justify-content: flex-end; gap: 0.5rem; }
.shadcn-input { width: 100%; padding: 0.5rem 0.75rem; font-size: 0.8rem; border: 1px solid var(--sp-border); border-radius: var(--sp-radius); background: var(--sp-bg); color: var(--sp-fg); box-sizing: border-box; }
.shadcn-input.error { border-color: var(--sp-destructive); }
.shadcn-label { display: block; font-size: 0.75rem; font-weight: 500; margin-bottom: 0.35rem; }
.shadcn-error { font-size: 0.7rem; color: var(--sp-destructive); margin-top: 0.25rem; }
.shadcn-field { margin-bottom: 0.75rem; }
.shadcn-dialog-overlay { position: relative; }
.shadcn-dialog-backdrop { position: absolute; inset: 0; background: rgba(0,0,0,0.5); border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; min-height: 180px; }
.shadcn-dialog { background: var(--sp-bg); border: 1px solid var(--sp-border); border-radius: var(--sp-radius); padding: 1.25rem; width: 85%; max-width: 280px; box-shadow: 0 8px 32px rgba(0,0,0,0.2); }
.shadcn-dialog h4 { margin: 0 0 0.35rem; font-size: 0.9rem; }
.shadcn-dialog p { margin: 0 0 1rem; font-size: 0.75rem; color: #64748b; }
.shadcn-preview.dark .shadcn-dialog p { color: #94a3b8; }
.shadcn-dropdown { position: relative; display: inline-block; }
.shadcn-dropdown-menu { position: absolute; top: 100%; left: 0; margin-top: 0.35rem; min-width: 140px; background: var(--sp-bg); border: 1px solid var(--sp-border); border-radius: var(--sp-radius); box-shadow: 0 4px 16px rgba(0,0,0,0.12); z-index: 10; overflow: hidden; }
.shadcn-dropdown-item { display: block; width: 100%; padding: 0.5rem 0.75rem; font-size: 0.75rem; text-align: left; background: none; border: none; color: var(--sp-fg); cursor: pointer; }
.shadcn-dropdown-item:hover { background: var(--sp-muted); }
.shadcn-dropdown-sep { height: 1px; background: var(--sp-border); margin: 0.25rem 0; }
.shadcn-code-tree { font-family: monospace; font-size: 0.72rem; line-height: 1.6; padding: 0.75rem; background: var(--sp-muted); border-radius: var(--sp-radius); }
`

const dir = path.join(SRC, course.slug)
if (fs.existsSync(dir)) {
  console.log(`Skip ${course.slug}: already exists`)
} else {
  copyDir(TEMPLATE, dir)
  let appCss = fs.readFileSync(path.join(dir, 'App.css'), 'utf8')
  appCss += DEMO_CSS
  fs.writeFileSync(path.join(dir, 'App.css'), appCss)
  fs.writeFileSync(path.join(dir, 'App.tsx'), generateAppTsx(course))
  fs.writeFileSync(path.join(dir, 'data/lessons.ts'), generateLessonsTs(course))
  fs.writeFileSync(path.join(dir, 'hooks/useProgress.ts'), generateUseProgress(course))
  fs.writeFileSync(path.join(dir, 'components/Home.tsx'), generateHomeTsx(course))
  fs.writeFileSync(path.join(dir, 'components/Sidebar.tsx'), generateSidebarTsx(course))
  fs.writeFileSync(path.join(dir, 'components/demos/LessonDemos.tsx'), generateLessonDemos(course))
  console.log(`✓ Generated ${course.slug}`)
}

const tutorialsPath = path.join(SRC, 'data/tutorials.ts')
let tutorialsContent = fs.readFileSync(tutorialsPath, 'utf8')
if (!tutorialsContent.includes("id: 'shadcn'")) {
  tutorialsContent = tutorialsContent.replace(
    "  { id: 'storybook'",
    `  { id: 'shadcn', path: '/shadcn', title: 'shadcn/ui', subtitle: 'UI コンポーネント', description: 'セットアップ、Button、Form、Dialog、テーマ、カスタマイズまで。shadcn/ui を10レッスンで学びます。', icon: '◇', lessons: 10, storageKey: 'shadcn-tutorial-progress', gradient: 'linear-gradient(135deg, #0f172a, #6366f1)', section: 'framework' },
  { id: 'storybook'`,
  )
  fs.writeFileSync(tutorialsPath, tutorialsContent)
}

const appPath = path.join(SRC, 'App.tsx')
let appContent = fs.readFileSync(appPath, 'utf8')
if (!appContent.includes('ShadcnTutorial')) {
  appContent = appContent.replace(
    "import StorybookTutorial from './storybook/App'",
    "import StorybookTutorial from './storybook/App'\nimport ShadcnTutorial from './shadcn/App'",
  )
  appContent = appContent.replace(
    '        <Route path="*" element={<Navigate to="/" replace />} />',
    `        <Route path="/shadcn" element={<ShadcnTutorial />} />\n        <Route path="/shadcn/:lessonId" element={<ShadcnTutorial />} />\n        <Route path="*" element={<Navigate to="/" replace />} />`,
  )
  fs.writeFileSync(appPath, appContent)
}

const quizScriptPath = path.resolve('scripts/generate-quizzes.mjs')
let quizScript = fs.readFileSync(quizScriptPath, 'utf8')
if (!quizScript.includes('shadcn:')) {
  quizScript = quizScript.replace("  storybook: 'Storybook',", "  storybook: 'Storybook',\n  shadcn: 'shadcn/ui',")
  fs.writeFileSync(quizScriptPath, quizScript)
}

console.log('Done!')
