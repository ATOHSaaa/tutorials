import fs from 'fs'
import path from 'path'

const SRC = path.resolve('src')
const TEMPLATE = path.join(SRC, 'tailwind')

const COURSES = [
  {
    slug: 'vite',
    componentName: 'ViteTutorial',
    courseTitle: 'Vite',
    sidebarTitle: 'Vite チュートリアル',
    heroAccent: 'Vite',
    heroSub: '高速な開発サーバーとビルドツール。React や TypeScript プロジェクトの土台として Vite を10レッスンで学びます。',
    feature1: 'HMR の動きやビルド設定をデモで体験できます。',
    icon: '⚡',
    logoIcon: '⚡',
    section: 'framework',
    subtitle: '高速ビルドツール',
    description: '開発サーバー、プラグイン、本番ビルドまで。フロントエンド開発の標準ツール Vite を10レッスンで学びます。',
    gradient: 'linear-gradient(135deg, #646cff, #bd34fe)',
    lessons: [
      { id: 'intro', title: 'Vite とは？', description: 'Vite の特徴と他のビルドツールとの違いを学びます' },
      { id: 'setup', title: 'プロジェクト作成', description: 'create vite でプロジェクトを立ち上げる方法を学びます' },
      { id: 'dev-server', title: '開発サーバー', description: 'HMR と高速な開発体験を学びます' },
      { id: 'modules', title: 'ES Modules', description: 'ネイティブ ESM を活用する Vite の仕組みを学びます' },
      { id: 'plugins', title: 'プラグイン', description: 'React や Tailwind 用プラグインの使い方を学びます' },
      { id: 'env', title: '環境変数', description: 'import.meta.env と .env ファイルを学びます' },
      { id: 'assets', title: '静的アセット', description: '画像・フォントなどの取り込み方法を学びます' },
      { id: 'build', title: '本番ビルド', description: 'vite build とプレビューを学びます' },
      { id: 'config', title: 'vite.config', description: '設定ファイルの書き方とよく使うオプションを学びます' },
      { id: 'next-steps', title: '次のステップ', description: 'Vite の学習を続けるためのヒント' },
    ],
  },
  {
    slug: 'turbo',
    componentName: 'TurboTutorial',
    courseTitle: 'Turborepo',
    sidebarTitle: 'Turborepo チュートリアル',
    heroAccent: 'Turborepo',
    heroSub: 'モノレポのビルドを高速化する Turborepo。タスクのキャッシュと並列実行を10レッスンで学びます。',
    feature1: 'パイプラインとキャッシュの動きをインタラクティブに確認できます。',
    icon: '⊞',
    logoIcon: '⊞',
    section: 'practice',
    subtitle: 'モノレポを速く',
    description: 'Turborepo で複数パッケージをまとめて管理し、ビルドとテストを高速化する方法を10レッスンで学びます。',
    gradient: 'linear-gradient(135deg, #ef4444, #f97316)',
    lessons: [
      { id: 'intro', title: 'Turborepo とは？', description: 'Turborepo の役割とメリットを学びます' },
      { id: 'monorepo', title: 'モノレポとは？', description: 'モノレポとポリレポの違いを学びます' },
      { id: 'setup', title: 'セットアップ', description: 'Turborepo プロジェクトの作成方法を学びます' },
      { id: 'workspaces', title: 'ワークスペース', description: 'apps と packages の構成を学びます' },
      { id: 'tasks', title: 'タスク定義', description: 'turbo.json でタスクを定義する方法を学びます' },
      { id: 'pipeline', title: 'パイプライン', description: 'タスクの依存関係と実行順を学びます' },
      { id: 'cache', title: 'キャッシュ', description: 'ローカル・リモートキャッシュの仕組みを学びます' },
      { id: 'filter', title: '--filter', description: '特定パッケージだけを実行する方法を学びます' },
      { id: 'ci', title: 'CI 連携', description: 'GitHub Actions と組み合わせる方法を学びます' },
      { id: 'next-steps', title: '次のステップ', description: 'Turborepo の学習を続けるためのヒント' },
    ],
  },
  {
    slug: 'webfonts',
    componentName: 'WebfontsTutorial',
    courseTitle: 'Webフォント',
    sidebarTitle: 'Webフォント チュートリアル',
    heroAccent: 'Webフォント',
    heroSub: 'Google Fonts からセルフホスティングまで。美しい文字とパフォーマンスの両立を10レッスンで学びます。',
    feature1: 'font-display や読み込みの違いをデモで比較できます。',
    icon: 'Aa',
    logoIcon: 'Aa',
    section: 'practice',
    subtitle: '美しい文字',
    description: '@font-face、Google Fonts、font-display など Web フォントの基礎と最適化を10レッスンで学びます。',
    gradient: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
    lessons: [
      { id: 'intro', title: 'Webフォントとは？', description: 'Web フォントの基本とシステムフォントとの違いを学びます' },
      { id: 'google-fonts', title: 'Google Fonts', description: 'Google Fonts の導入方法を学びます' },
      { id: 'font-face', title: '@font-face', description: 'フォントファイルを CSS で定義する方法を学びます' },
      { id: 'formats', title: 'フォント形式', description: 'woff2 など形式の違いを学びます' },
      { id: 'font-display', title: 'font-display', description: 'FOIT/FOUT と font-display を学びます' },
      { id: 'preload', title: 'preload', description: 'フォントの先読みで表示を速くする方法を学びます' },
      { id: 'subset', title: 'サブセット化', description: '必要な文字だけ読み込む最適化を学びます' },
      { id: 'variable', title: 'バリアブルフォント', description: '1ファイルで複数の太さを扱う方法を学びます' },
      { id: 'performance', title: 'パフォーマンス', description: 'フォントが表示速度に与える影響を学びます' },
      { id: 'next-steps', title: '次のステップ', description: 'Webフォントの学習を続けるためのヒント' },
    ],
  },
  {
    slug: 'electron',
    componentName: 'ElectronTutorial',
    courseTitle: 'Electron',
    sidebarTitle: 'Electron チュートリアル',
    heroAccent: 'Electron',
    heroSub: 'Web 技術でデスクトップアプリを作る Electron。メインプロセスとレンダラーを10レッスンで学びます。',
    feature1: 'プロセス間通信やウィンドウの動きをデモで体験できます。',
    icon: '⚡',
    logoIcon: 'e',
    section: 'framework',
    subtitle: 'デスクトップアプリ',
    description: 'HTML/CSS/JS で Windows・macOS・Linux 向けアプリを作る Electron を10レッスンで学びます。',
    gradient: 'linear-gradient(135deg, #47848f, #2f3241)',
    lessons: [
      { id: 'intro', title: 'Electron とは？', description: 'Electron の仕組みと代表的なアプリを学びます' },
      { id: 'setup', title: 'セットアップ', description: 'Electron プロジェクトの作成方法を学びます' },
      { id: 'main', title: 'メインプロセス', description: 'Node.js 側のメインプロセスを学びます' },
      { id: 'renderer', title: 'レンダラープロセス', description: '画面を描画するレンダラーを学びます' },
      { id: 'ipc', title: 'IPC 通信', description: 'プロセス間のデータの受け渡しを学びます' },
      { id: 'window', title: 'ウィンドウ管理', description: 'ウィンドウの作成と制御を学びます' },
      { id: 'menus', title: 'メニュー', description: 'アプリメニューとコンテキストメニューを学びます' },
      { id: 'packaging', title: 'パッケージング', description: '配布用アプリのビルド方法を学びます' },
      { id: 'security', title: 'セキュリティ', description: 'contextIsolation など安全な設計を学びます' },
      { id: 'next-steps', title: '次のステップ', description: 'Electron の学習を続けるためのヒント' },
    ],
  },
  {
    slug: 'tauri',
    componentName: 'TauriTutorial',
    courseTitle: 'Tauri',
    sidebarTitle: 'Tauri チュートリアル',
    heroAccent: 'Tauri',
    heroSub: 'Rust バックエンドと Web フロントで軽量なデスクトップアプリを作る Tauri を10レッスンで学びます。',
    feature1: 'Electron との違いやコマンドの流れをデモで確認できます。',
    icon: '◎',
    logoIcon: '◎',
    section: 'framework',
    subtitle: '軽量デスクトップ',
    description: 'Tauri 2 で小さく速いデスクトップアプリを作る方法を10レッスンで学びます。',
    gradient: 'linear-gradient(135deg, #24c8db, #ffc131)',
    lessons: [
      { id: 'intro', title: 'Tauri とは？', description: 'Tauri の特徴と Electron との違いを学びます' },
      { id: 'setup', title: 'セットアップ', description: 'Tauri プロジェクトの作成方法を学びます' },
      { id: 'architecture', title: 'アーキテクチャ', description: 'Rust コアと WebView の構成を学びます' },
      { id: 'commands', title: 'コマンド', description: 'フロントから Rust を呼び出す方法を学びます' },
      { id: 'events', title: 'イベント', description: 'バックエンドからフロントへ通知する方法を学びます' },
      { id: 'permissions', title: '権限', description: 'capabilities とセキュリティ設定を学びます' },
      { id: 'fs', title: 'ファイル操作', description: 'ローカルファイルへの安全なアクセスを学びます' },
      { id: 'build', title: 'ビルドと配布', description: '各 OS 向けアプリのビルドを学びます' },
      { id: 'compare', title: 'Electron との比較', description: 'どちらを選ぶべきかの判断基準を学びます' },
      { id: 'next-steps', title: '次のステップ', description: 'Tauri の学習を続けるためのヒント' },
    ],
  },
  {
    slug: 'linter',
    componentName: 'LinterTutorial',
    courseTitle: 'Linter',
    sidebarTitle: 'Linter チュートリアル',
    heroAccent: 'Linter',
    heroSub: 'ESLint と Prettier でコードの品質を保つ。ルール設定から CI 連携まで10レッスンで学びます。',
    feature1: 'ルールの違いや自動修正の動きをデモで確認できます。',
    icon: '✦',
    logoIcon: '✦',
    section: 'practice',
    subtitle: 'コード品質',
    description: 'ESLint、Prettier、TypeScript ESLint でバグを未然に防ぐ Linter の使い方を10レッスンで学びます。',
    gradient: 'linear-gradient(135deg, #4b32c3, #997dff)',
    lessons: [
      { id: 'intro', title: 'Linter とは？', description: 'Linter と Formatter の役割を学びます' },
      { id: 'eslint', title: 'ESLint 入門', description: 'ESLint のインストールと基本設定を学びます' },
      { id: 'rules', title: 'ルール設定', description: 'ルールの有効化とカスタマイズを学びます' },
      { id: 'prettier', title: 'Prettier', description: 'コードフォーマッターの導入を学びます' },
      { id: 'typescript', title: 'TypeScript ESLint', description: '型チェックと Lint の連携を学びます' },
      { id: 'flat-config', title: 'Flat Config', description: 'ESLint 9 の新しい設定形式を学びます' },
      { id: 'editor', title: 'エディタ連携', description: '保存時の自動修正を設定する方法を学びます' },
      { id: 'ci', title: 'CI での実行', description: 'PR で Lint を必須にする方法を学びます' },
      { id: 'custom', title: 'カスタムルール', description: 'プロジェクト固有のルールを作る方法を学びます' },
      { id: 'next-steps', title: '次のステップ', description: 'Linter の学習を続けるためのヒント' },
    ],
  },
]

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

function buildSections(course, lesson) {
  const codeSamples = {
    vite: `npm create vite@latest my-app -- --template react-ts\nnpm install\nnpm run dev`,
    turbo: `npx create-turbo@latest\nnpm run dev --filter=web`,
    webfonts: `@font-face {\n  font-family: 'MyFont';\n  src: url('/fonts/my.woff2') format('woff2');\n  font-display: swap;\n}`,
    electron: `const { app, BrowserWindow } = require('electron')\n\napp.whenReady().then(() => {\n  const win = new BrowserWindow({ width: 800, height: 600 })\n  win.loadFile('index.html')\n})`,
    tauri: `// src-tauri/src/lib.rs\n#[tauri::command]\nfn greet(name: String) -> String {\n  format!("Hello, {}!", name)\n}`,
    linter: `npm install -D eslint @eslint/js\nnpx eslint .`,
  }
  return [
    {
      heading: `${lesson.title}の概要`,
      content: `${course.courseTitle}における「${lesson.title}」について学びます。\n\n${lesson.description}。実務でよく使う考え方を、具体例とデモで理解していきましょう。`,
    },
    {
      heading: '基本の考え方',
      content: `${course.courseTitle} では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。`,
      code: codeSamples[course.slug] ?? `// ${course.courseTitle} の例`,
      tip: 'インタラクティブデモで、概念の流れを確認してみてください。',
    },
    {
      heading: '実践のポイント',
      content: `実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。`,
    },
  ]
}

function generateLessonsTs(course) {
  const lessons = course.lessons.map((l) => ({
    id: l.id,
    title: l.title,
    description: l.description,
    sections: buildSections(course, l),
  }))
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

export const lessons: Lesson[] = ${JSON.stringify(lessons, null, 2).replace(/"([^"]+)":/g, '$1:')}
`
}

function generateLessonDemos(course) {
  const demos = course.lessons.map((l) => {
    const name = `${toPascal(l.id)}Demo`
    return `export function ${name}() {
  const [step, setStep] = useState(0)
  const steps = ['概要', '設定', '実行', '確認']
  return (
    <DemoPanel title="${l.title}">
      <div className="generic-demo-box">
        <strong>${course.courseTitle} · ${l.title}</strong>
        <p>{steps[step]} の段階を表示中です。実際のプロジェクトでは公式ドキュメントの手順を試してみましょう。</p>
        <code className="selector-code">// lesson: ${l.id}</code>
      </div>
      <div className="toggle-row">
        {steps.map((s, i) => (
          <button key={s} className={step === i ? 'active' : ''} onClick={() => setStep(i)}>{s}</button>
        ))}
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
        <div className="hero-badge">無料 · ブラウザで学べる</div>
        <h1>
          <span className="hero-accent">${course.heroAccent}</span> を
          <br />
          ゼロから学ぶ
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
          <span className="logo-icon">${course.logoIcon}</span>
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

for (const course of COURSES) {
  const dir = path.join(SRC, course.slug)
  if (fs.existsSync(dir)) {
    console.log(`Skip ${course.slug}: already exists`)
    continue
  }

  copyDir(TEMPLATE, dir)

  const appCss = fs.readFileSync(path.join(dir, 'App.css'), 'utf8')
  if (!appCss.includes('.home-quiz')) {
    fs.appendFileSync(path.join(dir, 'App.css'), `
.home-quiz { margin-bottom: 2.5rem; }
.home-quiz-card { display: flex; align-items: center; gap: 1rem; padding: 1.25rem 1.5rem; background: var(--bg-2); border: 1px solid var(--border); border-radius: var(--radius); }
.home-quiz-icon { font-size: 1.75rem; flex-shrink: 0; }
.home-quiz-card h2 { font-size: 1rem; color: var(--text-heading); margin-bottom: 0.2rem; }
.home-quiz-card p { font-size: 0.85rem; color: var(--text-muted); }
.home-quiz-card .btn-secondary { margin-left: auto; flex-shrink: 0; padding: 0.55rem 1rem; border: 1px solid var(--border); border-radius: var(--radius-sm); background: var(--bg-3); color: var(--text); font-size: 0.85rem; font-weight: 600; cursor: pointer; }
.quiz-nav-item { margin-top: 0.5rem; border-top: 1px solid var(--border); padding-top: 0.75rem !important; }
`)
  }

  fs.writeFileSync(path.join(dir, 'App.tsx'), generateAppTsx(course))
  fs.writeFileSync(path.join(dir, 'data/lessons.ts'), generateLessonsTs(course))
  fs.writeFileSync(path.join(dir, 'hooks/useProgress.ts'), generateUseProgress(course))
  fs.writeFileSync(path.join(dir, 'components/Home.tsx'), generateHomeTsx(course))
  fs.writeFileSync(path.join(dir, 'components/Sidebar.tsx'), generateSidebarTsx(course))
  fs.writeFileSync(path.join(dir, 'components/demos/LessonDemos.tsx'), generateLessonDemos(course))

  console.log(`✓ Generated ${course.slug}`)
}

console.log('Done!')
