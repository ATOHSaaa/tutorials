import { Link } from 'react-router-dom'
import './Hub.css'

interface TutorialCard {
  path: string
  title: string
  subtitle: string
  description: string
  icon: string
  lessons: number
  storageKey: string
  gradient: string
}

const coreTutorials: TutorialCard[] = [
  {
    path: '/html',
    title: 'HTML',
    subtitle: '骨組みを作る',
    description: 'Web ページの土台となる HTML を、タグの構造からフォームまで10レッスンで学びます。',
    icon: '</>',
    lessons: 10,
    storageKey: 'html-tutorial-progress',
    gradient: 'linear-gradient(135deg, #f97316, #22c55e)',
  },
  {
    path: '/css',
    title: 'CSS',
    subtitle: '見た目を整える',
    description: '色・余白・レイアウトをマスター。Flexbox や Grid もインタラクティブに学べます。',
    icon: '#',
    lessons: 10,
    storageKey: 'css-tutorial-progress',
    gradient: 'linear-gradient(135deg, #3b82f6, #ec4899)',
  },
  {
    path: '/tailwind',
    title: 'Tailwind CSS',
    subtitle: 'ユーティリティで速く作る',
    description: 'ユーティリティクラスで素早く UI を組み立てる Tailwind CSS を10レッスンで学びます。',
    icon: 'TW',
    lessons: 10,
    storageKey: 'tailwind-tutorial-progress',
    gradient: 'linear-gradient(135deg, #38bdf8, #06b6d4)',
  },
  {
    path: '/js',
    title: 'JavaScript',
    subtitle: '動きを付ける',
    description: '変数・関数・DOM 操作など、Web ページをインタラクティブにする JS を10レッスンで学びます。',
    icon: 'JS',
    lessons: 10,
    storageKey: 'js-tutorial-progress',
    gradient: 'linear-gradient(135deg, #f7df1e, #f59e0b)',
  },
  {
    path: '/ts',
    title: 'TypeScript',
    subtitle: '型で守る',
    description: 'interface・ジェネリクス・型推論など、型安全な JavaScript を10レッスンで学びます。',
    icon: 'TS',
    lessons: 10,
    storageKey: 'ts-tutorial-progress',
    gradient: 'linear-gradient(135deg, #3178c6, #235a97)',
  },
  {
    path: '/git',
    title: 'Git 入門',
    subtitle: 'バージョン管理',
    description: 'commit、branch、PR まで。コードの変更履歴を管理する Git を10レッスンで学びます。',
    icon: '⎇',
    lessons: 10,
    storageKey: 'git-tutorial-progress',
    gradient: 'linear-gradient(135deg, #f97316, #ef4444)',
  },
]

const frameworkTutorials: TutorialCard[] = [
  {
    path: '/react',
    title: 'React',
    subtitle: 'アプリを作る',
    description: 'コンポーネント、State、Hooks など React の基礎を10レッスンでマスターします。',
    icon: '⚛',
    lessons: 10,
    storageKey: 'react-tutorial-progress',
    gradient: 'linear-gradient(135deg, #61dafb, #a855f7)',
  },
  {
    path: '/state',
    title: '状態管理',
    subtitle: 'データの流れ',
    description: 'Context、Zustand、TanStack Query など React の状態管理を10レッスンで学びます。',
    icon: '🔄',
    lessons: 10,
    storageKey: 'state-tutorial-progress',
    gradient: 'linear-gradient(135deg, #a855f7, #7c3aed)',
  },
  {
    path: '/forms',
    title: 'フォーム',
    subtitle: '入力とバリデーション',
    description: 'React Hook Form と Zod で、実務レベルのフォームを10レッスンで学びます。',
    icon: '📝',
    lessons: 10,
    storageKey: 'forms-tutorial-progress',
    gradient: 'linear-gradient(135deg, #ec4899, #f472b6)',
  },
  {
    path: '/testing',
    title: 'テスト入門',
    subtitle: '壊れないコード',
    description: 'Vitest と React Testing Library で、フロントエンドのテストを10レッスンで学びます。',
    icon: '✓',
    lessons: 10,
    storageKey: 'testing-tutorial-progress',
    gradient: 'linear-gradient(135deg, #22c55e, #16a34a)',
  },
  {
    path: '/next',
    title: 'Next.js',
    subtitle: 'フルスタック開発',
    description: 'App Router、Server Component、API など React ベースのフレームワークを10レッスンで学びます。',
    icon: '▲',
    lessons: 10,
    storageKey: 'next-tutorial-progress',
    gradient: 'linear-gradient(135deg, #fafafa, #737373)',
  },
  {
    path: '/tanstack-start',
    title: 'TanStack Start',
    subtitle: '型安全フルスタック',
    description: 'TanStack Router、SSR、Server Functions など型安全なフルスタックフレームワークを10レッスンで学びます。',
    icon: '⬡',
    lessons: 10,
    storageKey: 'tanstack-start-tutorial-progress',
    gradient: 'linear-gradient(135deg, #f97316, #ef4444)',
  },
  {
    path: '/vue',
    title: 'Vue.js',
    subtitle: '別の選択肢',
    description: 'テンプレート構文、リアクティビティ、Composables など Vue.js を10レッスンで学びます。',
    icon: 'V',
    lessons: 10,
    storageKey: 'vue-tutorial-progress',
    gradient: 'linear-gradient(135deg, #42b883, #35495e)',
  },
  {
    path: '/astro',
    title: 'Astro',
    subtitle: '高速なサイトを作る',
    description: 'アイランドアーキテクチャで、ブログやポートフォリオを軽量・高速に構築する方法を学びます。',
    icon: 'A',
    lessons: 10,
    storageKey: 'astro-tutorial-progress',
    gradient: 'linear-gradient(135deg, #ff5d01, #bc52ee)',
  },
]

const practiceTutorials: TutorialCard[] = [
  {
    path: '/a11y',
    title: 'アクセシビリティ',
    subtitle: 'みんなが使える Web',
    description: 'キーボード操作、ARIA、コントラストなど、誰もが使える Web を作る a11y を10レッスンで学びます。',
    icon: '♿',
    lessons: 10,
    storageKey: 'a11y-tutorial-progress',
    gradient: 'linear-gradient(135deg, #3b82f6, #22c55e)',
  },
  {
    path: '/devtools',
    title: 'DevTools',
    subtitle: 'デバッグの武器',
    description: 'Elements、Console、Network など、ブラウザ開発者ツールを10レッスンでマスターします。',
    icon: '🔧',
    lessons: 10,
    storageKey: 'devtools-tutorial-progress',
    gradient: 'linear-gradient(135deg, #eab308, #f59e0b)',
  },
  {
    path: '/pwa',
    title: 'PWA',
    subtitle: 'アプリのような Web',
    description: 'Service Worker、Manifest、オフライン対応など PWA を10レッスンで学びます。',
    icon: '📱',
    lessons: 10,
    storageKey: 'pwa-tutorial-progress',
    gradient: 'linear-gradient(135deg, #6366f1, #818cf8)',
  },
  {
    path: '/perf',
    title: 'Web パフォーマンス',
    subtitle: '速い Web を作る',
    description: 'Core Web Vitals、画像最適化、バンドルサイズなど Web の高速化を10レッスンで学びます。',
    icon: '⚡',
    lessons: 10,
    storageKey: 'perf-tutorial-progress',
    gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
  },
]

function getProgress(storageKey: string, total: number): number {
  try {
    const saved = localStorage.getItem(storageKey)
    if (!saved) return 0
    const completed = JSON.parse(saved) as string[]
    return Math.round((completed.length / total) * 100)
  } catch {
    return 0
  }
}

function TutorialCardList({ tutorials }: { tutorials: TutorialCard[] }) {
  return (
    <div className="hub-cards">
      {tutorials.map((t) => {
        const progress = getProgress(t.storageKey, t.lessons)
        return (
          <Link key={t.path} to={t.path} className="hub-card">
            <div className="hub-card-icon" style={{ background: t.gradient }}>
              {t.icon}
            </div>
            <div className="hub-card-body">
              <div className="hub-card-header">
                <h2>{t.title}</h2>
                <span className="hub-card-sub">{t.subtitle}</span>
              </div>
              <p>{t.description}</p>
              <div className="hub-card-footer">
                <span>{t.lessons} レッスン</span>
                {progress > 0 && (
                  <span className="hub-card-progress">{progress}% 完了</span>
                )}
              </div>
              {progress > 0 && (
                <div className="hub-progress-bar">
                  <div className="hub-progress-fill" style={{ width: `${progress}%`, background: t.gradient }} />
                </div>
              )}
            </div>
            <span className="hub-card-arrow">→</span>
          </Link>
        )
      })}
    </div>
  )
}

export function Hub() {
  return (
    <div className="hub">
      <header className="hub-hero">
        <div className="hub-badge">無料 · ブラウザで学べる</div>
        <h1>Web 開発を<br />ゼロから学ぶ</h1>
        <p className="hub-sub">
          基礎からフレームワーク、実践スキルまで。全18コース・180レッスンのインタラクティブなチュートリアル集。
          環境構築不要、今すぐ始められます。
        </p>
      </header>

      <div className="hub-roadmap">
        {['HTML', 'CSS', 'Tailwind', 'JS', 'TS', 'Git', 'React', 'Next', 'Start'].map((step, i, arr) => (
          <span key={step} className="hub-roadmap-item">
            <span className="hub-roadmap-step">{step}</span>
            {i < arr.length - 1 && <span className="hub-roadmap-arrow" aria-hidden="true">→</span>}
          </span>
        ))}
      </div>

      <section className="hub-section">
        <h2 className="hub-section-title">基礎</h2>
        <TutorialCardList tutorials={coreTutorials} />
      </section>

      <section className="hub-section">
        <h2 className="hub-section-title">フレームワーク & React 応用</h2>
        <TutorialCardList tutorials={frameworkTutorials} />
      </section>

      <section className="hub-section">
        <h2 className="hub-section-title">実践スキル</h2>
        <TutorialCardList tutorials={practiceTutorials} />
      </section>

      <footer className="hub-footer">
        <p>おすすめの学習順: HTML → CSS → Tailwind → JS → TS → Git → React → 状態管理 → フォーム → テスト → Next → TanStack Start → Vue → Astro → a11y → DevTools → PWA → パフォーマンス</p>
      </footer>
    </div>
  )
}
