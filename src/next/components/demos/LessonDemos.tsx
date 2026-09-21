import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

export function IntroDemo() {
  const [stack, setStack] = useState<'react' | 'next'>('react')

  const reactFeatures = ['コンポーネント', 'State / Hooks', 'UI の構築']
  const nextFeatures = ['コンポーネント', 'State / Hooks', 'UI の構築', 'ルーティング', 'データ取得', 'API', 'SEO / SSR']

  const features = stack === 'react' ? reactFeatures : nextFeatures

  return (
    <DemoPanel title="React vs Next.js">
      <div className="toggle-row">
        <button className={stack === 'react' ? 'active' : ''} onClick={() => setStack('react')}>React 単体</button>
        <button className={stack === 'next' ? 'active' : ''} onClick={() => setStack('next')}>Next.js</button>
      </div>
      <div className="stack-visual">
        {features.map((f, i) => (
          <div key={f} className={`stack-item ${i >= 3 ? 'next-only' : ''}`}>
            {f}
            {i >= 3 && <span className="next-badge">Next.js</span>}
          </div>
        ))}
      </div>
      <p className="demo-note">
        {stack === 'react' ? 'UI の構築に集中。ルーティング等は別途設定が必要' : 'React + フルスタック機能が最初から揃っている'}
      </p>
    </DemoPanel>
  )
}

export function SetupDemo() {
  const structure = [
    { path: 'app/layout.tsx', label: '共通レイアウト', url: '—' },
    { path: 'app/page.tsx', label: 'トップページ', url: '/' },
    { path: 'app/about/page.tsx', label: 'About', url: '/about' },
    { path: 'app/api/hello/route.ts', label: 'API', url: '/api/hello' },
    { path: 'public/favicon.ico', label: '静的ファイル', url: '/favicon.ico' },
  ]

  return (
    <DemoPanel title="プロジェクトの構造">
      <div className="file-tree">
        {structure.map((item) => (
          <div key={item.path} className="file-tree-item">
            <code className="file-path">{item.path}</code>
            <span className="file-label">{item.label}</span>
            {item.url !== '—' && <span className="file-url">→ {item.url}</span>}
          </div>
        ))}
      </div>
    </DemoPanel>
  )
}

export function RoutingDemo() {
  const [activePage, setActivePage] = useState('page')

  const pages: Record<string, { path: string; title: string }> = {
    page: { path: 'app/page.tsx', title: 'ホーム' },
    about: { path: 'app/about/page.tsx', title: 'About' },
    blog: { path: 'app/blog/page.tsx', title: 'Blog' },
    'blog-id': { path: 'app/blog/[id]/page.tsx', title: '記事詳細' },
  }

  const urls: Record<string, string> = {
    page: '/',
    about: '/about',
    blog: '/blog',
    'blog-id': '/blog/123',
  }

  return (
    <DemoPanel title="App Router">
      <div className="toggle-row wrap">
        {Object.keys(pages).map((key) => (
          <button key={key} className={activePage === key ? 'active' : ''} onClick={() => setActivePage(key)}>
            {pages[key].path.split('/').pop()}
          </button>
        ))}
      </div>
      <div className="page-preview">
        <div className="browser-bar">
          <span className="browser-url">localhost:3000{urls[activePage]}</span>
        </div>
        <div className="page-content">
          <code className="file-path">{pages[activePage].path}</code>
          <h3>{pages[activePage].title}</h3>
        </div>
      </div>
    </DemoPanel>
  )
}

export function LayoutsDemo() {
  return (
    <DemoPanel title="レイアウトの入れ子">
      <div className="layout-demo">
        <div className="layout-header">app/layout.tsx（全ページ共通）</div>
        <div className="layout-slot">
          <div className="layout-nested">
            <div className="layout-sub-header">app/blog/layout.tsx</div>
            <div className="layout-page-content">
              <code>app/blog/page.tsx</code>
              <p>ブログ一覧</p>
            </div>
          </div>
        </div>
        <div className="layout-footer">footer</div>
      </div>
    </DemoPanel>
  )
}

export function ComponentsDemo() {
  const [mode, setMode] = useState<'server' | 'client'>('server')
  const [count, setCount] = useState(0)

  return (
    <DemoPanel title="Server vs Client Component">
      <div className="toggle-row">
        <button className={mode === 'server' ? 'active' : ''} onClick={() => setMode('server')}>Server</button>
        <button className={mode === 'client' ? 'active' : ''} onClick={() => setMode('client')}>Client</button>
      </div>
      <code className="type-code">{mode === 'server' ? '// デフォルト（"use client" 不要）' : '"use client";'}</code>
      {mode === 'server' ? (
        <div className="server-demo">
          <div className="server-badge">🖥 サーバーで実行</div>
          <p>データベースから取得した記事一覧</p>
          <ul>
            <li>記事1: Next.js 入門</li>
            <li>記事2: App Router 解説</li>
            <li>記事3: デプロイ手順</li>
          </ul>
          <span className="demo-tag">JS はブラウザに送られない</span>
        </div>
      ) : (
        <div className="client-demo">
          <div className="client-badge">⚡ ブラウザで実行</div>
          <button className="btn-primary" onClick={() => setCount((c) => c + 1)}>
            カウント: {count}
          </button>
          <span className="demo-tag">useState / onClick が使える</span>
        </div>
      )}
    </DemoPanel>
  )
}

export function DataFetchingDemo() {
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState<{ id: number; title: string }[]>([])

  const fetchData = () => {
    setLoading(true)
    setPosts([])
    setTimeout(() => {
      setPosts([
        { id: 1, title: 'Next.js 入門ガイド' },
        { id: 2, title: 'Server Component の使い方' },
        { id: 3, title: 'Vercel にデプロイする' },
      ])
      setLoading(false)
    }, 800)
  }

  return (
    <DemoPanel title="Server Component でデータ取得">
      <pre className="interface-code">{`export default async function Page() {
  const posts = await fetch(url);
  return <PostList posts={posts} />;
}`}</pre>
      <button className="btn-primary" onClick={fetchData} disabled={loading}>
        {loading ? '取得中...' : 'データを取得（デモ）'}
      </button>
      <div className="fetch-result">
        {loading && <p className="fetch-loading">🔄 サーバーで fetch 中...</p>}
        {posts.length > 0 && (
          <ul>
            {posts.map((p) => <li key={p.id}>{p.title}</li>)}
          </ul>
        )}
      </div>
    </DemoPanel>
  )
}

export function NavigationDemo() {
  const [current, setCurrent] = useState('/')

  const pages = [
    { href: '/', label: 'ホーム' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
  ]

  return (
    <DemoPanel title="Link コンポーネント">
      <nav className="next-nav">
        {pages.map((p) => (
          <button
            key={p.href}
            className={current === p.href ? 'active' : ''}
            onClick={() => setCurrent(p.href)}
          >
            &lt;Link href="{p.href}"&gt;{p.label}
          </button>
        ))}
      </nav>
      <div className="page-preview">
        <div className="browser-bar">
          <span className="browser-url">localhost:3000{current}</span>
        </div>
        <div className="page-content">
          <h3>{pages.find((p) => p.href === current)?.label} ページ</h3>
          <p>クライアントサイドナビゲーションで高速に切り替わります</p>
        </div>
      </div>
    </DemoPanel>
  )
}

export function StylingDemo() {
  const [method, setMethod] = useState<'modules' | 'tailwind'>('tailwind')

  return (
    <DemoPanel title="スタイリング方法">
      <div className="toggle-row">
        <button className={method === 'modules' ? 'active' : ''} onClick={() => setMethod('modules')}>CSS Modules</button>
        <button className={method === 'tailwind' ? 'active' : ''} onClick={() => setMethod('tailwind')}>Tailwind CSS</button>
      </div>
      {method === 'modules' ? (
        <div className="style-demo-card-modules">
          <code>import styles from "./Card.module.css"</code>
          <div className="modules-preview">Card.module.css で定義したスタイル</div>
        </div>
      ) : (
        <div className="tailwind-preview">
          <code>className="flex gap-4 p-6 bg-white rounded-lg shadow"</code>
          <div className="tailwind-box">Tailwind クラスでスタイリング</div>
        </div>
      )}
    </DemoPanel>
  )
}

export function ApiDemo() {
  const [response, setResponse] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const callApi = () => {
    setLoading(true)
    setResponse(null)
    setTimeout(() => {
      setResponse(JSON.stringify({ message: 'Hello from API!', timestamp: new Date().toISOString() }, null, 2))
      setLoading(false)
    }, 600)
  }

  return (
    <DemoPanel title="Route Handler（API）">
      <pre className="interface-code">{`// app/api/hello/route.ts
export async function GET() {
  return Response.json({ message: "Hello!" });
}`}</pre>
      <div className="api-flow">
        <span className="api-step">ブラウザ</span>
        <span>→ GET /api/hello →</span>
        <span className="api-step">route.ts</span>
        <span>→ JSON →</span>
        <span className="api-step">ブラウザ</span>
      </div>
      <button className="btn-primary" onClick={callApi} disabled={loading}>
        {loading ? 'リクエスト中...' : 'GET /api/hello を実行'}
      </button>
      {response && <pre className="api-response">{response}</pre>}
    </DemoPanel>
  )
}

export function NextStepsDemo() {
  const steps = [
    { title: 'React', done: true, color: '#61dafb' },
    { title: 'Next.js', done: true, color: '#fff' },
    { title: 'デプロイ', done: false, color: '#888' },
    { title: '本番運用', done: false, color: '#888' },
  ]

  return (
    <DemoPanel title="次のステップ — デプロイ">
      <div className="deploy-steps">
        <div className="deploy-step">
          <code>npm run build</code>
          <span>本番用にビルド</span>
        </div>
        <div className="deploy-arrow">↓</div>
        <div className="deploy-step">
          <code>git push</code>
          <span>GitHub にプッシュ</span>
        </div>
        <div className="deploy-arrow">↓</div>
        <div className="deploy-step highlight">
          <strong>Vercel</strong>
          <span>自動デプロイ 🚀</span>
        </div>
      </div>
      <div className="roadmap" style={{ marginTop: '1.5rem' }}>
        {steps.map((step, i) => (
          <div key={step.title} className="roadmap-step">
            <div className="roadmap-circle done" style={{ borderColor: step.color, color: step.done ? step.color : undefined }}>
              {step.done ? '✓' : i + 1}
            </div>
            <div className="roadmap-info">
              <strong style={{ color: step.color }}>{step.title}</strong>
            </div>
            {i < steps.length - 1 && <div className="roadmap-line" />}
          </div>
        ))}
      </div>
    </DemoPanel>
  )
}

const demoMap: Record<string, React.ComponentType> = {
  intro: IntroDemo,
  setup: SetupDemo,
  routing: RoutingDemo,
  layouts: LayoutsDemo,
  components: ComponentsDemo,
  'data-fetching': DataFetchingDemo,
  navigation: NavigationDemo,
  styling: StylingDemo,
  api: ApiDemo,
  'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
