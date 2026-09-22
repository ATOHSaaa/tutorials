import fs from 'fs'
import path from 'path'
import { GRAPHICS_COURSES } from './graphics-courses-data.mjs'

const SRC = path.resolve('src')
const TEMPLATE = path.join(SRC, 'edge')

// Re-use generators from add-proposed-courses pattern
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
        <div className="hero-badge">無料 · ブラウザで学べる</div>
        <h1>
          <span className="hero-accent">${course.heroAccent}</span>
          入門
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
          <span className="feature-icon">🎮</span>
          <h3>インタラクティブ</h3>
          <p>${course.feature1}</p>
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
.canvas-demo-wrap { display: flex; justify-content: center; margin: 0.75rem 0; }
.canvas-demo-wrap canvas { border: 1px solid var(--border); border-radius: var(--radius-sm); background: #0f1117; max-width: 100%; }
.three-scene { perspective: 600px; height: 200px; display: flex; align-items: center; justify-content: center; margin: 0.75rem 0; background: radial-gradient(ellipse at center, #1e1b4b 0%, #0f1117 70%); border-radius: var(--radius-sm); border: 1px solid var(--border); }
.three-cube { width: 80px; height: 80px; position: relative; transform-style: preserve-3d; transition: transform 0.4s ease; }
.three-face { position: absolute; width: 80px; height: 80px; border: 2px solid rgba(255,255,255,0.3); display: flex; align-items: center; justify-content: center; font-size: 0.65rem; font-weight: 600; opacity: 0.85; }
.three-face.front { background: rgba(99,102,241,0.7); transform: translateZ(40px); }
.three-face.back { background: rgba(168,85,247,0.7); transform: rotateY(180deg) translateZ(40px); }
.three-face.right { background: rgba(34,211,238,0.7); transform: rotateY(90deg) translateZ(40px); }
.three-face.left { background: rgba(244,63,94,0.7); transform: rotateY(-90deg) translateZ(40px); }
.three-face.top { background: rgba(251,191,36,0.7); transform: rotateX(90deg) translateZ(40px); }
.three-face.bottom { background: rgba(52,211,153,0.7); transform: rotateX(-90deg) translateZ(40px); }
.three-labels { display: flex; flex-wrap: wrap; gap: 0.35rem; justify-content: center; margin-top: 0.5rem; }
.three-labels button { padding: 0.35rem 0.6rem; font-size: 0.72rem; background: var(--bg-3); border: 1px solid var(--border); border-radius: var(--radius-sm); cursor: pointer; }
.three-labels button.active { border-color: var(--accent); color: var(--accent); }
`

for (const course of GRAPHICS_COURSES) {
  const dir = path.join(SRC, course.slug)
  if (fs.existsSync(dir)) {
    console.log(`Skip ${course.slug}: already exists`)
    continue
  }

  copyDir(TEMPLATE, dir)

  let appCss = fs.readFileSync(path.join(dir, 'App.css'), 'utf8')
  if (!appCss.includes('.canvas-demo-wrap')) {
    appCss += DEMO_CSS
    fs.writeFileSync(path.join(dir, 'App.css'), appCss)
  }

  fs.writeFileSync(path.join(dir, 'App.tsx'), generateAppTsx(course))
  fs.writeFileSync(path.join(dir, 'data/lessons.ts'), generateLessonsTs(course))
  fs.writeFileSync(path.join(dir, 'hooks/useProgress.ts'), generateUseProgress(course))
  fs.writeFileSync(path.join(dir, 'components/Home.tsx'), generateHomeTsx(course))
  fs.writeFileSync(path.join(dir, 'components/Sidebar.tsx'), generateSidebarTsx(course))
  fs.writeFileSync(path.join(dir, 'components/demos/LessonDemos.tsx'), generateLessonDemos(course))

  console.log(`✓ Generated ${course.slug}`)
}

// Patch tutorials.ts
const tutorialsPath = path.join(SRC, 'data/tutorials.ts')
let tutorialsContent = fs.readFileSync(tutorialsPath, 'utf8')
for (const c of GRAPHICS_COURSES) {
  const entry = `  { id: '${c.slug}', path: '/${c.slug}', title: '${c.courseTitle}', subtitle: '${c.subtitle}', description: '${c.description}', icon: '${c.icon}', lessons: 10, storageKey: '${c.slug}-tutorial-progress', gradient: '${c.gradient}', section: '${c.section}' },`
  if (!tutorialsContent.includes(`id: '${c.slug}'`)) {
    tutorialsContent = tutorialsContent.replace(
      '  { id: \'tauri\'',
      `  { id: 'canvas', path: '/canvas', title: 'Canvas', subtitle: '2D グラフィックス', description: 'getContext、図形描画、パス、テキスト、画像、座標変換、アニメーションまで。HTML5 Canvas API を10レッスンで学びます。', icon: '▣', lessons: 10, storageKey: 'canvas-tutorial-progress', gradient: 'linear-gradient(135deg, #f43f5e, #fb923c)', section: 'framework' },
  { id: 'three', path: '/three', title: 'Three.js', subtitle: '3D グラフィックス', description: 'シーン、カメラ、ジオメトリ、マテリアル、ライト、OrbitControls、React Three Fiber まで。Three.js を10レッスンで学びます。', icon: '3D', lessons: 10, storageKey: 'three-tutorial-progress', gradient: 'linear-gradient(135deg, #1e1b4b, #6366f1)', section: 'framework' },
  { id: 'tauri'`,
    )
  }
}
fs.writeFileSync(tutorialsPath, tutorialsContent)

// Patch App.tsx
const appPath = path.join(SRC, 'App.tsx')
let appContent = fs.readFileSync(appPath, 'utf8')
for (const c of GRAPHICS_COURSES) {
  const importLine = `import ${c.componentName} from './${c.slug}/App'`
  if (!appContent.includes(importLine)) {
    appContent = appContent.replace(
      "import AnimationTutorial from './animation/App'",
      `import AnimationTutorial from './animation/App'\nimport ${c.componentName} from './${c.slug}/App'`,
    )
  }
  const routeBlock = `        <Route path="/${c.slug}" element={<${c.componentName} />} />\n        <Route path="/${c.slug}/:lessonId" element={<${c.componentName} />} />`
  if (!appContent.includes(`path="/${c.slug}"`)) {
    appContent = appContent.replace(
      '        <Route path="*" element={<Navigate to="/" replace />} />',
      `${routeBlock}\n        <Route path="*" element={<Navigate to="/" replace />} />`,
    )
  }
}
fs.writeFileSync(appPath, appContent)

// Patch generate-quizzes.mjs
const quizScriptPath = path.resolve('scripts/generate-quizzes.mjs')
let quizScript = fs.readFileSync(quizScriptPath, 'utf8')
for (const c of GRAPHICS_COURSES) {
  const line = `  ${c.slug}: '${c.courseTitle}',`
  if (!quizScript.includes(`${c.slug}:`)) {
    quizScript = quizScript.replace("  animation: 'CSSアニメーション',", `  animation: 'CSSアニメーション',\n${line}`)
  }
}
fs.writeFileSync(quizScriptPath, quizScript)

console.log('Done!')
