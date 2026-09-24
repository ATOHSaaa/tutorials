import fs from 'fs'
import path from 'path'
import { HONO_NOVEL_APP_COURSE } from './hono-novel-app-course-data.mjs'

const SRC = path.resolve('src')
const TEMPLATE = path.join(SRC, 'cloudflare')
const PROPOSED_COURSES = [HONO_NOVEL_APP_COURSE]

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

function generateLessonsTs(course) {
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

export const lessons: Lesson[] = ${JSON.stringify(course.lessons, null, 2).replace(/"([^"]+)":/g, '$1:')}
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

function generateLessonDemos(course) {
  const demos = course.lessons.map((l) => {
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

  const demoMap = course.lessons.map((l) => `  '${l.id}': ${toPascal(l.id)}Demo`).join(',\n')

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

function generateAppTsx(course) {
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

const BASE = '/${course.slug}'

export default function ${course.componentName}() {
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
    if (lessonId && lessonId !== 'quiz' && !lessons.find((l) => l.id === lessonId)) {
      navigate(BASE, { replace: true })
    }
  }, [lessonId, navigate])

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
          courseTitle="${course.courseTitle}"
          storageKey="${course.slug}-tutorial-quiz"
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

function generateHomeTsx(course) {
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
        <div className="hero-badge">実践プロジェクト · 手を動かして学ぶ</div>
        <h1>
          <span className="hero-accent">${course.heroAccent}</span>
        </h1>
        <p className="hero-sub">${course.heroSub}</p>
        <button className="btn-primary btn-large" onClick={onStart}>
          {progressPercent > 0 ? '学習を続ける' : '学習を始める'} →
        </button>
        {progressPercent > 0 && (
          <p className="hero-progress">進捗: {progressPercent}% 完了</p>
        )}
      </div>

      <div className="home-features">
        <div className="feature-card">
          <span className="feature-icon">📖</span>
          <h3>作品と章</h3>
          <p>novels / chapters の2層構造で、連載小説を管理する設計を学べます。</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">🔍</span>
          <h3>検索・タグ</h3>
          <p>ジャンル・キーワード・タグで作品を探す API と UI を実装できます。</p>
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

function generateSidebarTsx(course) {
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
          <span className="logo-icon course-logo">${course.logoIcon}</span>
          <div>
            <strong>${course.sidebarTitle}</strong>
            <span>実践プロジェクト</span>
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

function generateUseProgress(course) {
  return `import { lessons } from '../data/lessons'
import { createUseProgress } from '../../hooks/useTutorialProgress'

export const useProgress = createUseProgress('${course.slug}-tutorial-progress', lessons.length, '${course.slug}')
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
.hna-arch { display: flex; align-items: center; justify-content: center; gap: 0.5rem; flex-wrap: wrap; padding: 1rem; background: var(--bg-3); border-radius: var(--radius-sm); margin: 0.75rem 0; }
.hna-box { padding: 0.5rem 1rem; border: 2px solid var(--border); border-radius: var(--radius-sm); font-size: 0.85rem; font-weight: 600; }
.hna-box.active { border-color: var(--accent); background: var(--accent-bg); color: var(--accent); }
.hna-arrow { color: var(--text-muted); }
.hna-novel-card { padding: 0.85rem 1rem; background: var(--bg-3); border: 1px solid var(--border); border-radius: var(--radius-sm); margin-bottom: 0.5rem; font-size: 0.85rem; }
.hna-novel-card .genre { font-size: 0.72rem; color: var(--accent); margin: 0.25rem 0; }
.hna-novel-card .synopsis { font-size: 0.8rem; color: var(--text-muted); }
.hna-reader { padding: 1rem; background: var(--bg-3); border-radius: var(--radius-sm); max-width: 28rem; margin: 0 auto; line-height: 1.8; font-size: 0.9rem; }
.hna-toc { list-style: none; padding: 0; margin: 0; }
.hna-toc li { padding: 0.4rem 0.65rem; border-bottom: 1px solid var(--border); font-size: 0.82rem; cursor: pointer; }
.hna-toc li.active { color: var(--accent); font-weight: 600; }
.hna-route-list { display: flex; flex-direction: column; gap: 0.35rem; }
.hna-route { font-family: var(--mono); font-size: 0.78rem; padding: 0.4rem 0.65rem; background: var(--bg-3); border-radius: var(--radius-sm); }
.hna-route.get { border-left: 3px solid #22c55e; }
.hna-route.post { border-left: 3px solid #3b82f6; }
.hna-tag { display: inline-block; padding: 0.2rem 0.5rem; background: var(--accent-bg); border: 1px solid var(--border); border-radius: 999px; font-size: 0.72rem; margin: 0.15rem; cursor: pointer; }
.hna-tag.active { border-color: var(--accent); color: var(--accent); }
.hna-bookmark { padding: 0.5rem 0.75rem; background: var(--bg-3); border-radius: var(--radius-sm); font-size: 0.82rem; margin-bottom: 0.35rem; display: flex; justify-content: space-between; }
`

for (const course of PROPOSED_COURSES) {
  const dir = path.join(SRC, course.slug)
  if (fs.existsSync(dir)) {
    console.log(`Skip ${course.slug}: already exists`)
    continue
  }

  copyDir(TEMPLATE, dir)

  let appCss = fs.readFileSync(path.join(dir, 'App.css'), 'utf8')
  appCss = appCss.replace(/\.cf-/g, '.hna-legacy-')
  appCss += DEMO_CSS
  fs.writeFileSync(path.join(dir, 'App.css'), appCss)

  fs.writeFileSync(path.join(dir, 'App.tsx'), generateAppTsx(course))
  fs.writeFileSync(path.join(dir, 'data/lessons.ts'), generateLessonsTs(course))
  fs.writeFileSync(path.join(dir, 'hooks/useProgress.ts'), generateUseProgress(course))
  fs.writeFileSync(path.join(dir, 'components/Home.tsx'), generateHomeTsx(course))
  fs.writeFileSync(path.join(dir, 'components/Sidebar.tsx'), generateSidebarTsx(course))

  console.log(`✓ Generated ${course.slug}`)
}

// Patch tutorials.ts
const tutorialsPath = path.join(SRC, 'data/tutorials.ts')
let tutorialsContent = fs.readFileSync(tutorialsPath, 'utf8')
const course = HONO_NOVEL_APP_COURSE
const entry = `  { id: '${course.slug}', path: '/${course.slug}', title: '${course.courseTitle}', subtitle: '${course.subtitle}', description: '${course.description}', icon: '${course.icon}', lessons: ${course.lessons.length}, storageKey: '${course.slug}-tutorial-progress', gradient: '${course.gradient}', section: '${course.section}' },`

if (!tutorialsContent.includes(`id: '${course.slug}'`)) {
  tutorialsContent = tutorialsContent.replace(
    '\n]\n\nexport const totalLessons',
    `\n${entry}\n]\n\nexport const totalLessons`,
  )
  fs.writeFileSync(tutorialsPath, tutorialsContent)
}

// Patch App.tsx
const appPath = path.join(SRC, 'App.tsx')
let appContent = fs.readFileSync(appPath, 'utf8')
const importLine = `import ${course.componentName} from './${course.slug}/App'`
if (!appContent.includes(importLine)) {
  appContent = appContent.replace(
    "import HonoPostAppTutorial from './hono-post-app/App'",
    `import HonoPostAppTutorial from './hono-post-app/App'\n${importLine}`,
  )
}
const routeBlock = `        <Route path="/${course.slug}" element={<${course.componentName} />} />\n        <Route path="/${course.slug}/:lessonId" element={<${course.componentName} />} />`
if (!appContent.includes(`path="/${course.slug}"`)) {
  appContent = appContent.replace(
    '        <Route path="*" element={<Navigate to="/" replace />} />',
    `${routeBlock}\n        <Route path="*" element={<Navigate to="/" replace />} />`,
  )
}
fs.writeFileSync(appPath, appContent)

// Patch generate-quizzes.mjs
const quizScriptPath = path.resolve('scripts/generate-quizzes.mjs')
let quizScript = fs.readFileSync(quizScriptPath, 'utf8')
const line = `  '${course.slug}': '${course.quizTitle}',`
if (!quizScript.includes(`'${course.slug}':`)) {
  quizScript = quizScript.replace(
    "  'hono-post-app': 'Hono 投稿サイト',",
    `  'hono-post-app': 'Hono 投稿サイト',\n${line}`,
  )
  fs.writeFileSync(quizScriptPath, quizScript)
}

console.log('Done! Run: node scripts/generate-quizzes.mjs && npm run build')
