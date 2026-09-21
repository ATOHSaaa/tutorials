import fs from 'fs'
import path from 'path'

const SRC = path.resolve('src')

const tutorials = [
  {
    slug: 'tailwind',
    name: 'Tailwind CSS',
    shortName: 'Tailwind',
    icon: 'TW',
    subtitle: 'ユーティリティで速く作る',
    heroDesc: 'ユーティリティクラスで素早く UI を組み立てる Tailwind CSS を10レッスンでマスター。',
    feature1: 'クラスを組み合わせて、リアルタイムにデザインを確認できます。',
    sidebarTitle: 'Tailwind チュートリアル',
    base: '/tailwind',
    storageKey: 'tailwind-tutorial-progress',
    themeClass: 'tutorial-theme-tailwind',
    accent: '#38bdf8',
    accent2: '#06b6d4',
    lessons: [
      { id: 'intro', title: 'Tailwind とは？', description: 'ユーティリティファースト CSS の考え方を学びます' },
      { id: 'setup', title: 'セットアップ', description: 'Vite や Next.js への導入方法を学びます' },
      { id: 'utility', title: 'ユーティリティクラス', description: 'クラス名の命名規則と基本を学びます' },
      { id: 'layout', title: 'レイアウト', description: 'Flexbox と Grid の Tailwind クラスを学びます' },
      { id: 'spacing', title: '余白とサイズ', description: 'padding、margin、width の指定を学びます' },
      { id: 'typography', title: '文字と色', description: 'フォント、色、テキストスタイルを学びます' },
      { id: 'responsive', title: 'レスポンシブ', description: 'ブレークポイントで画面サイズに応じたデザインを学びます' },
      { id: 'states', title: '状態バリアント', description: 'hover、focus、active などの状態を学びます' },
      { id: 'dark-mode', title: 'ダークモード', description: 'dark: プレフィックスでテーマ切り替えを学びます' },
      { id: 'next-steps', title: '次のステップ', description: 'Tailwind の学習を続けるためのヒント' },
    ],
  },
  {
    slug: 'git',
    name: 'Git 入門',
    shortName: 'Git',
    icon: '⎇',
    subtitle: 'バージョン管理',
    heroDesc: 'commit、branch、PR まで。コードの変更履歴を管理する Git を10レッスンで学びます。',
    feature1: 'コミット履歴やブランチの流れをインタラクティブに体験できます。',
    sidebarTitle: 'Git チュートリアル',
    base: '/git',
    storageKey: 'git-tutorial-progress',
    themeClass: 'tutorial-theme-git',
    accent: '#f97316',
    accent2: '#ef4444',
    lessons: [
      { id: 'intro', title: 'Git とは？', description: 'バージョン管理の基本概念を学びます' },
      { id: 'install', title: 'インストールと設定', description: 'Git のセットアップと初期設定を学びます' },
      { id: 'basics', title: '基本操作', description: 'add、commit、status の使い方を学びます' },
      { id: 'history', title: '履歴の確認', description: 'log と diff で変更を追跡する方法を学びます' },
      { id: 'branch', title: 'ブランチ', description: 'ブランチの作成と切り替えを学びます' },
      { id: 'merge', title: 'マージ', description: 'ブランチを統合する方法を学びます' },
      { id: 'remote', title: 'リモート操作', description: 'push、pull、clone を学びます' },
      { id: 'pr', title: 'Pull Request', description: 'GitHub でコードレビューの流れを学びます' },
      { id: 'conflict', title: 'コンフリクト解消', description: 'マージ時の競合を解決する方法を学びます' },
      { id: 'next-steps', title: '次のステップ', description: 'Git の学習を続けるためのヒント' },
    ],
  },
  {
    slug: 'a11y',
    name: 'アクセシビリティ',
    shortName: 'a11y',
    icon: '♿',
    subtitle: 'みんなが使える Web',
    heroDesc: 'キーボード操作、ARIA、コントラストなど、誰もが使える Web を作る a11y を10レッスンで学びます。',
    feature1: '良い例・悪い例を比較して、アクセシビリティの違いを体感できます。',
    sidebarTitle: 'a11y チュートリアル',
    base: '/a11y',
    storageKey: 'a11y-tutorial-progress',
    themeClass: 'tutorial-theme-a11y',
    accent: '#3b82f6',
    accent2: '#22c55e',
    lessons: [
      { id: 'intro', title: 'a11y とは？', description: 'アクセシビリティの重要性を学びます' },
      { id: 'semantic', title: 'セマンティック HTML', description: '意味のある HTML タグの使い方を学びます' },
      { id: 'keyboard', title: 'キーボード操作', description: 'Tab キーで操作できる UI を学びます' },
      { id: 'focus', title: 'フォーカス管理', description: 'フォーカスリングとフォーカストラップを学びます' },
      { id: 'aria', title: 'ARIA', description: 'スクリーンリーダー向けの属性を学びます' },
      { id: 'images', title: '画像の代替テキスト', description: 'alt 属性の適切な使い方を学びます' },
      { id: 'color', title: '色とコントラスト', description: '視認性を確保する色の選び方を学びます' },
      { id: 'forms', title: 'フォームの a11y', description: 'label とエラー表示のベストプラクティスを学びます' },
      { id: 'testing', title: 'テスト方法', description: 'axe や Lighthouse でチェックする方法を学びます' },
      { id: 'next-steps', title: '次のステップ', description: 'a11y の学習を続けるためのヒント' },
    ],
  },
  {
    slug: 'devtools',
    name: 'DevTools',
    shortName: 'DevTools',
    icon: '🔧',
    subtitle: 'デバッグの武器',
    heroDesc: 'Elements、Console、Network など、ブラウザ開発者ツールを10レッスンでマスターします。',
    feature1: '各パネルの役割をデモで体験し、実際のデバッグに活かせます。',
    sidebarTitle: 'DevTools チュートリアル',
    base: '/devtools',
    storageKey: 'devtools-tutorial-progress',
    themeClass: 'tutorial-theme-devtools',
    accent: '#eab308',
    accent2: '#f59e0b',
    lessons: [
      { id: 'intro', title: 'DevTools とは？', description: '開発者ツールの概要を学びます' },
      { id: 'elements', title: 'Elements パネル', description: 'HTML と CSS の検査・編集を学びます' },
      { id: 'console', title: 'Console', description: 'ログ出力と JavaScript の実行を学びます' },
      { id: 'network', title: 'Network', description: 'API リクエストの確認方法を学びます' },
      { id: 'sources', title: 'Sources / デバッガ', description: 'ブレークポイントでデバッグする方法を学びます' },
      { id: 'performance', title: 'Performance', description: 'パフォーマンスの計測方法を学びます' },
      { id: 'responsive', title: 'レスポンシブモード', description: 'デバイスサイズのエミュレーションを学びます' },
      { id: 'storage', title: 'Application / Storage', description: 'localStorage や Cookie の確認を学びます' },
      { id: 'tips', title: '便利なショートカット', description: '効率的に使うための Tips を学びます' },
      { id: 'next-steps', title: '次のステップ', description: 'DevTools の学習を続けるためのヒント' },
    ],
  },
  {
    slug: 'testing',
    name: 'テスト入門',
    shortName: 'テスト',
    icon: '✓',
    subtitle: '壊れないコード',
    heroDesc: 'Vitest と React Testing Library で、フロントエンドのテストを10レッスンで学びます。',
    feature1: 'テストの考え方と、実際のテストコード例をインタラクティブに確認できます。',
    sidebarTitle: 'テスト チュートリアル',
    base: '/testing',
    storageKey: 'testing-tutorial-progress',
    themeClass: 'tutorial-theme-testing',
    accent: '#22c55e',
    accent2: '#16a34a',
    lessons: [
      { id: 'intro', title: 'テストとは？', description: 'テストの目的と種類を学びます' },
      { id: 'vitest', title: 'Vitest セットアップ', description: 'テスト環境の構築方法を学びます' },
      { id: 'unit', title: 'ユニットテスト', description: '関数やロジックのテストを学びます' },
      { id: 'rtl', title: 'React Testing Library', description: 'コンポーネントテストの基本を学びます' },
      { id: 'render', title: '描画テスト', description: 'コンポーネントが正しく表示されるかテストします' },
      { id: 'interaction', title: '操作テスト', description: 'クリックや入力のテストを学びます' },
      { id: 'mock', title: 'モック', description: 'API や関数のモック方法を学びます' },
      { id: 'async', title: '非同期テスト', description: 'async/await を使ったテストを学びます' },
      { id: 'coverage', title: 'カバレッジ', description: 'テストカバレッジの確認方法を学びます' },
      { id: 'next-steps', title: '次のステップ', description: 'テストの学習を続けるためのヒント' },
    ],
  },
  {
    slug: 'state',
    name: '状態管理',
    shortName: '状態管理',
    icon: '🔄',
    subtitle: 'データの流れ',
    heroDesc: 'Context、Zustand、TanStack Query など React の状態管理を10レッスンで学びます。',
    feature1: '状態の流れをビジュアルで追い、各ライブラリの違いを理解できます。',
    sidebarTitle: '状態管理 チュートリアル',
    base: '/state',
    storageKey: 'state-tutorial-progress',
    themeClass: 'tutorial-theme-state',
    accent: '#a855f7',
    accent2: '#7c3aed',
    lessons: [
      { id: 'intro', title: '状態管理とは？', description: 'アプリの状態とその管理方法を学びます' },
      { id: 'lifting', title: '状態のリフトアップ', description: 'Props で状態を共有する方法を学びます' },
      { id: 'context', title: 'Context API', description: 'グローバルな状態の共有を学びます' },
      { id: 'zustand', title: 'Zustand 入門', description: 'シンプルな状態管理ライブラリを学びます' },
      { id: 'selectors', title: 'セレクタと派生状態', description: '計算された状態の管理を学びます' },
      { id: 'async', title: 'サーバー状態', description: 'API からのデータ取得と状態を学びます' },
      { id: 'tanstack', title: 'TanStack Query', description: 'サーバー状態管理ライブラリを学びます' },
      { id: 'patterns', title: 'よくあるパターン', description: '実務で使う状態管理パターンを学びます' },
      { id: 'comparison', title: '比較と選び方', description: '各手法の使い分けを学びます' },
      { id: 'next-steps', title: '次のステップ', description: '状態管理の学習を続けるためのヒント' },
    ],
  },
  {
    slug: 'forms',
    name: 'フォーム',
    shortName: 'フォーム',
    icon: '📝',
    subtitle: '入力とバリデーション',
    heroDesc: 'React Hook Form と Zod で、実務レベルのフォームを10レッスンで学びます。',
    feature1: 'バリデーションやエラー表示をリアルタイムで体験できます。',
    sidebarTitle: 'フォーム チュートリアル',
    base: '/forms',
    storageKey: 'forms-tutorial-progress',
    themeClass: 'tutorial-theme-forms',
    accent: '#ec4899',
    accent2: '#f472b6',
    lessons: [
      { id: 'intro', title: 'フォームの基礎', description: 'HTML フォームと React の関係を学びます' },
      { id: 'controlled', title: '制御コンポーネント', description: 'useState でフォームを管理する方法を学びます' },
      { id: 'validation', title: 'バリデーション', description: '入力値の検証方法を学びます' },
      { id: 'zod', title: 'Zod スキーマ', description: '型安全なスキーマ定義を学びます' },
      { id: 'rhf', title: 'React Hook Form', description: 'パフォーマンスの良いフォーム管理を学びます' },
      { id: 'errors', title: 'エラー表示', description: 'ユーザーフレンドリーなエラー UI を学びます' },
      { id: 'complex', title: '複雑なフォーム', description: '配列フィールドや条件付き入力を学びます' },
      { id: 'submit', title: '送信処理', description: 'API へのデータ送信を学びます' },
      { id: 'accessibility', title: 'フォームの a11y', description: 'アクセシブルなフォーム設計を学びます' },
      { id: 'next-steps', title: '次のステップ', description: 'フォームの学習を続けるためのヒント' },
    ],
  },
  {
    slug: 'vue',
    name: 'Vue.js',
    shortName: 'Vue',
    icon: 'V',
    subtitle: '別の選択肢',
    heroDesc: 'テンプレート構文、リアクティビティ、Composables など Vue.js を10レッスンで学びます。',
    feature1: 'Vue のリアクティブな動きをデモで体験し、React との違いも理解できます。',
    sidebarTitle: 'Vue チュートリアル',
    base: '/vue',
    storageKey: 'vue-tutorial-progress',
    themeClass: 'tutorial-theme-vue',
    accent: '#42b883',
    accent2: '#35495e',
    lessons: [
      { id: 'intro', title: 'Vue とは？', description: 'Vue.js の特徴と React との違いを学びます' },
      { id: 'setup', title: 'プロジェクト作成', description: 'create-vue でプロジェクトを作る方法を学びます' },
      { id: 'template', title: 'テンプレート構文', description: 'v-if、v-for、v-bind を学びます' },
      { id: 'reactivity', title: 'リアクティビティ', description: 'ref と reactive の使い方を学びます' },
      { id: 'components', title: 'コンポーネント', description: 'コンポーネントの作成と構成を学びます' },
      { id: 'props', title: 'Props と Emit', description: '親子間のデータ通信を学びます' },
      { id: 'computed', title: 'computed / watch', description: '派生状態と監視を学びます' },
      { id: 'lifecycle', title: 'ライフサイクル', description: 'onMounted などのフックを学びます' },
      { id: 'composables', title: 'Composables', description: 'ロジックの再利用パターンを学びます' },
      { id: 'next-steps', title: '次のステップ', description: 'Vue の学習を続けるためのヒント' },
    ],
  },
  {
    slug: 'pwa',
    name: 'PWA',
    shortName: 'PWA',
    icon: '📱',
    subtitle: 'アプリのような Web',
    heroDesc: 'Service Worker、Manifest、オフライン対応など PWA を10レッスンで学びます。',
    feature1: 'PWA の仕組みをステップごとに体験し、実装の流れを理解できます。',
    sidebarTitle: 'PWA チュートリアル',
    base: '/pwa',
    storageKey: 'pwa-tutorial-progress',
    themeClass: 'tutorial-theme-pwa',
    accent: '#6366f1',
    accent2: '#818cf8',
    lessons: [
      { id: 'intro', title: 'PWA とは？', description: 'Progressive Web App の概要を学びます' },
      { id: 'manifest', title: 'Web App Manifest', description: 'アプリのメタデータ設定を学びます' },
      { id: 'service-worker', title: 'Service Worker', description: 'バックグラウンド処理の基礎を学びます' },
      { id: 'cache', title: 'キャッシュ戦略', description: 'Cache First などの戦略を学びます' },
      { id: 'offline', title: 'オフライン対応', description: 'ネットワークなしでも動く仕組みを学びます' },
      { id: 'install', title: 'インストール', description: 'ホーム画面への追加を学びます' },
      { id: 'push', title: 'プッシュ通知', description: '通知の概要と実装の流れを学びます' },
      { id: 'workbox', title: 'Workbox', description: 'Google の PWA ライブラリを学びます' },
      { id: 'lighthouse', title: 'Lighthouse チェック', description: 'PWA の品質を測定する方法を学びます' },
      { id: 'next-steps', title: '次のステップ', description: 'PWA の学習を続けるためのヒント' },
    ],
  },
  {
    slug: 'perf',
    name: 'Web パフォーマンス',
    shortName: 'パフォーマンス',
    icon: '⚡',
    subtitle: '速い Web を作る',
    heroDesc: 'Core Web Vitals、画像最適化、バンドルサイズなど Web の高速化を10レッスンで学びます。',
    feature1: 'パフォーマンス指標をビジュアルで確認し、改善のポイントを学べます。',
    sidebarTitle: 'パフォーマンス チュートリアル',
    base: '/perf',
    storageKey: 'perf-tutorial-progress',
    themeClass: 'tutorial-theme-perf',
    accent: '#f59e0b',
    accent2: '#d97706',
    lessons: [
      { id: 'intro', title: 'パフォーマンスとは？', description: 'Web パフォーマンスの重要性を学びます' },
      { id: 'metrics', title: 'Core Web Vitals', description: 'LCP、FID、CLS の指標を学びます' },
      { id: 'images', title: '画像最適化', description: 'WebP、lazy loading を学びます' },
      { id: 'lazy', title: '遅延読み込み', description: 'コード分割と dynamic import を学びます' },
      { id: 'bundle', title: 'バンドルサイズ', description: '不要なコードの削減方法を学びます' },
      { id: 'caching', title: 'キャッシュ', description: 'HTTP キャッシュと CDN を学びます' },
      { id: 'fonts', title: 'フォント最適化', description: 'font-display とサブセット化を学びます' },
      { id: 'rendering', title: 'レンダリング最適化', description: 'CLS や reflow の回避を学びます' },
      { id: 'monitoring', title: 'モニタリング', description: '本番環境でのパフォーマンス監視を学びます' },
      { id: 'next-steps', title: '次のステップ', description: 'パフォーマンスの学習を続けるためのヒント' },
    ],
  },
]

function lessonContent(tutorial, lesson) {
  const sections = [
    {
      heading: `${lesson.title}の概要`,
      content: `${tutorial.name}における「${lesson.title}」について学びます。\n\n${lesson.description}。実務でよく使う概念を、具体例とデモで理解していきましょう。`,
    },
    {
      heading: '基本の考え方',
      content: `まずは全体像をつかみます。${tutorial.shortName} では、このテーマが他の機能とどう連携するかを意識することが大切です。\n\n小さな例から始めて、徐々に複雑なケースへ広げていくのがおすすめです。`,
      code: `// ${tutorial.shortName} の例\n// ${lesson.id} に関する基本的なコード`,
      tip: '上のインタラクティブデモで、実際の動きを確認してみてください。',
    },
    {
      heading: '実践のポイント',
      content: `実際のプロジェクトでは、チームのルールや既存コードに合わせて使い方を調整します。\n\n公式ドキュメントも併用しながら、手を動かして試すことが一番の近道です。`,
    },
  ]
  return sections
}

function generateLessonsTs(t) {
  const lessonsArr = t.lessons.map((l) => ({
    id: l.id,
    title: l.title,
    description: l.description,
    sections: lessonContent(t, l),
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

export const lessons: Lesson[] = ${JSON.stringify(lessonsArr, null, 2).replace(/"([^"]+)":/g, '$1:')}
`
}

function generateAppTsx(t) {
  const comp = t.slug === 'a11y' ? 'A11yTutorial' : t.slug === 'devtools' ? 'DevtoolsTutorial' : `${capitalize(t.slug)}Tutorial`
  return `import { useEffect, useLayoutEffect, useRef } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { lessons } from './data/lessons'
import { useProgress } from './hooks/useProgress'
import { Home } from './components/Home'
import { Sidebar } from './components/Sidebar'
import { LessonView } from './components/LessonView'
import './App.css'

const BASE = '${t.base}'

export default function ${comp}() {
  const { lessonId } = useParams()
  const navigate = useNavigate()
  const { completed, markComplete, resetProgress, progressPercent } = useProgress()

  const isLessonView = lessonId !== undefined
  const currentLessonId = lessonId ?? lessons[0].id
  const currentIndex = lessons.findIndex((l) => l.id === currentLessonId)

  const mainAreaRef = useRef<HTMLDivElement>(null)
  const lessonTopRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (lessonId && !lessons.find((l) => l.id === lessonId)) {
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
  }, [currentLessonId, isLessonView])

  const goToLesson = (id: string) => navigate(\`\${BASE}/\${id}\`)
  const goHome = () => navigate(BASE)

  const startLearning = () => {
    const firstIncomplete = lessons.find((l) => !completed.has(l.id))
    goToLesson(firstIncomplete?.id ?? lessons[0].id)
  }

  if (!isLessonView) {
    return (
      <div className="${t.themeClass}">
        <Link to="/" className="hub-back-link">← チュートリアル一覧</Link>
        <div className="app app-home">
          <Home
            completed={completed}
            progressPercent={progressPercent}
            onStart={startLearning}
            onSelectLesson={goToLesson}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="${t.themeClass}">
      <div className="app">
        <Sidebar
          currentId={currentLessonId}
          completed={completed}
          progressPercent={progressPercent}
          onSelect={goToLesson}
          onReset={resetProgress}
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

function generateHomeTsx(t) {
  return `import { lessons } from '../data/lessons'

interface HomeProps {
  completed: Set<string>
  progressPercent: number
  onStart: () => void
  onSelectLesson: (id: string) => void
}

export function Home({ completed, progressPercent, onStart, onSelectLesson }: HomeProps) {
  return (
    <div className="home">
      <div className="home-hero">
        <div className="hero-badge">無料 · ブラウザで学べる</div>
        <h1>
          <span className="hero-accent">${t.shortName}</span> を
          <br />
          ゼロから学ぶ
        </h1>
        <p className="hero-sub">
          ${t.heroDesc}
          環境構築不要、今すぐ始められます。
        </p>
        <button className="btn-primary btn-large" onClick={onStart}>
          {progressPercent > 0 ? '学習を続ける' : '学習を始める'} →
        </button>
        {progressPercent > 0 && (
          <p className="hero-progress">進捗: {progressPercent}% 完了</p>
        )}
      </div>

      <div className="home-features">
        <div className="feature-card">
          <span className="feature-icon">🎯</span>
          <h3>インタラクティブ</h3>
          <p>${t.feature1}</p>
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
    </div>
  )
}
`
}

function generateSidebarTsx(t) {
  return `import { lessons } from '../data/lessons'

interface SidebarProps {
  currentId: string
  completed: Set<string>
  progressPercent: number
  onSelect: (id: string) => void
  onReset: () => void
}

export function Sidebar({
  currentId,
  completed,
  progressPercent,
  onSelect,
  onReset,
}: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <span className="logo-icon">${t.icon}</span>
          <div>
            <strong>${t.sidebarTitle}</strong>
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
      </nav>

      <button className="reset-btn" onClick={onReset}>
        進捗をリセット
      </button>
    </aside>
  )
}
`
}

function generateUseProgress(t) {
  return `import { useCallback, useEffect, useState } from 'react'
import { lessons } from '../data/lessons'

const STORAGE_KEY = '${t.storageKey}'

export function useProgress() {
  const [completed, setCompleted] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? new Set(JSON.parse(saved)) : new Set()
    } catch {
      return new Set()
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...completed]))
  }, [completed])

  const markComplete = useCallback((lessonId: string) => {
    setCompleted((prev) => new Set([...prev, lessonId]))
  }, [])

  const resetProgress = useCallback(() => {
    setCompleted(new Set())
    localStorage.removeItem(STORAGE_KEY)
  }, [])

  const progressPercent = Math.round((completed.size / lessons.length) * 100)

  return { completed, markComplete, resetProgress, progressPercent }
}
`
}

function generateLessonDemos(t) {
  const demos = t.lessons.map((l) => {
    const demoName = toPascal(l.id) + 'Demo'
    return `export function ${demoName}() {
  const [step, setStep] = useState(0)
  const steps = ['基本', '応用', '実践']
  return (
    <DemoPanel title="${l.title} デモ">
      <div className="toggle-row">
        {steps.map((s, i) => (
          <button key={s} className={step === i ? 'active' : ''} onClick={() => setStep(i)}>{s}</button>
        ))}
      </div>
      <div className="generic-demo-box">
        <strong>${t.shortName} · ${l.title}</strong>
        <p>{steps[step]} の例を表示中です。実際のプロジェクトでは公式ドキュメントのコードを試してみましょう。</p>
        <code className="selector-code">// lesson: ${l.id}</code>
      </div>
      <p className="demo-note">ボタンを切り替えて、${l.title}の段階的な理解を深めましょう。</p>
    </DemoPanel>
  )
}`
  }).join('\n\n')

  const demoMap = t.lessons.map((l) => `  '${l.id}': ${toPascal(l.id)}Demo`).join(',\n')

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

function capitalize(s) {
  return s.replace(/-([a-z])/g, (_, c) => c.toUpperCase()).replace(/^./, (c) => c.toUpperCase())
}

function toPascal(s) {
  return s.split('-').map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join('')
}

function writeFile(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  fs.writeFileSync(filePath, content)
}

const templateCss = fs.readFileSync(path.join(SRC, 'css/App.css'), 'utf8')
const lessonView = fs.readFileSync(path.join(SRC, 'css/components/LessonView.tsx'), 'utf8')
const codeBlock = fs.readFileSync(path.join(SRC, 'css/components/CodeBlock.tsx'), 'utf8')
const demoPanel = fs.readFileSync(path.join(SRC, 'css/components/demos/DemoPanel.tsx'), 'utf8')

for (const t of tutorials) {
  const dir = path.join(SRC, t.slug)
  writeFile(path.join(dir, 'App.tsx'), generateAppTsx(t))
  writeFile(path.join(dir, 'App.css'), templateCss + `
/* ── Generic Demo ── */
.generic-demo-box { background: var(--bg-3); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 1.25rem; }
.generic-demo-box strong { display: block; color: var(--text-heading); margin-bottom: 0.5rem; }
.generic-demo-box p { font-size: 0.9rem; color: var(--text-muted); margin-bottom: 0.75rem; }
`)
  writeFile(path.join(dir, 'data/lessons.ts'), generateLessonsTs(t))
  writeFile(path.join(dir, 'hooks/useProgress.ts'), generateUseProgress(t))
  writeFile(path.join(dir, 'components/Home.tsx'), generateHomeTsx(t))
  writeFile(path.join(dir, 'components/Sidebar.tsx'), generateSidebarTsx(t))
  writeFile(path.join(dir, 'components/LessonView.tsx'), lessonView)
  writeFile(path.join(dir, 'components/CodeBlock.tsx'), codeBlock)
  writeFile(path.join(dir, 'components/demos/DemoPanel.tsx'), demoPanel)
  writeFile(path.join(dir, 'components/demos/LessonDemos.tsx'), generateLessonDemos(t))
  console.log('Generated:', t.slug)
}

// Generate theme CSS
const themes = tutorials.map((t) => `
.${t.themeClass} {
  --bg: #0f1117;
  --bg-2: #1a1d27;
  --bg-3: #242836;
  --border: #2e3348;
  --text: #c9d1e0;
  --text-muted: #7a8499;
  --text-heading: #eef0f7;
  --accent: ${t.accent};
  --accent-2: ${t.accent2};
  --accent-bg: ${t.accent}22;
  --success: #34d399;
  --danger: #f87171;
  --radius: 12px;
  --radius-sm: 8px;
  --shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
  --font: 'Inter', system-ui, sans-serif;
  --mono: 'JetBrains Mono', ui-monospace, monospace;
  --sidebar-width: 280px;
  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
}`).join('\n')

writeFile(path.join(SRC, '_generated-themes.css'), themes)
console.log('Done!')
