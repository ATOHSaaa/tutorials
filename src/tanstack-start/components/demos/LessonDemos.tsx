import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

export function IntroDemo() {
  const [stack, setStack] = useState<'next' | 'start'>('next')

  const nextFeatures = ['ルーティング', 'SSR', 'API Routes', 'ファイルベース']
  const startFeatures = ['型安全ルーティング', 'SSR / Selective SSR', 'Server Functions', 'ファイルベース', 'TanStack 統合']

  const features = stack === 'next' ? nextFeatures : startFeatures

  return (
    <DemoPanel title="Next.js vs TanStack Start">
      <div className="toggle-row">
        <button className={stack === 'next' ? 'active' : ''} onClick={() => setStack('next')}>Next.js</button>
        <button className={stack === 'start' ? 'active' : ''} onClick={() => setStack('start')}>TanStack Start</button>
      </div>
      <div className="stack-visual">
        {features.map((f, i) => (
          <div key={f} className={`stack-item ${stack === 'start' && i >= 4 ? 'start-only' : ''}`}>
            {f}
            {stack === 'start' && i === 0 && <span className="start-badge">型安全</span>}
          </div>
        ))}
      </div>
      <p className="demo-note">
        {stack === 'next' ? 'App Router ベース、Vercel との統合が強い' : 'TanStack Router ベース、型安全性とエコシステム統合が強い'}
      </p>
    </DemoPanel>
  )
}

export function SetupDemo() {
  const structure = [
    { path: 'src/routes/__root.tsx', label: 'ルートレイアウト', url: '—' },
    { path: 'src/routes/index.tsx', label: 'トップページ', url: '/' },
    { path: 'src/routes/about.tsx', label: 'About', url: '/about' },
    { path: 'src/routes/api/hello.ts', label: 'API Route', url: '/api/hello' },
    { path: 'src/routeTree.gen.ts', label: '自動生成', url: '—' },
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
  const [activePage, setActivePage] = useState('index')

  const pages: Record<string, { path: string; title: string }> = {
    index: { path: 'routes/index.tsx', title: 'ホーム' },
    about: { path: 'routes/about.tsx', title: 'About' },
    posts: { path: 'routes/posts/index.tsx', title: '投稿一覧' },
    'post-id': { path: 'routes/posts/$postId.tsx', title: '投稿詳細' },
  }

  const urls: Record<string, string> = {
    index: '/',
    about: '/about',
    posts: '/posts',
    'post-id': '/posts/123',
  }

  return (
    <DemoPanel title="ファイルベースルーティング">
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

export function LoadersDemo() {
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState<{ id: number; title: string }[]>([])

  const runLoader = () => {
    setLoading(true)
    setPosts([])
    setTimeout(() => {
      setPosts([
        { id: 1, title: 'TanStack Start 入門' },
        { id: 2, title: 'Loader の使い方' },
        { id: 3, title: 'Server Functions 解説' },
      ])
      setLoading(false)
    }, 800)
  }

  return (
    <DemoPanel title="Loader でデータ取得">
      <pre className="interface-code">{`loader: async () => {
  const res = await fetch(url)
  return res.json()
}`}</pre>
      <button className="btn-primary" onClick={runLoader} disabled={loading}>
        {loading ? 'Loader 実行中...' : 'Loader を実行（デモ）'}
      </button>
      <div className="fetch-result">
        {loading && <p className="fetch-loading">🔄 サーバーでデータ取得中...</p>}
        {posts.length > 0 && (
          <ul>
            {posts.map((p) => <li key={p.id}>{p.title}</li>)}
          </ul>
        )}
      </div>
    </DemoPanel>
  )
}

export function SsrDemo() {
  const [mode, setMode] = useState<'true' | 'data-only' | 'false'>('true')

  const descriptions = {
    true: { label: 'ssr: true', desc: 'サーバーで Loader + コンポーネントをレンダリング', where: 'サーバー → クライアント' },
    'data-only': { label: 'ssr: "data-only"', desc: 'Loader はサーバー、UI はクライアントで描画', where: 'データ: サーバー / UI: クライアント' },
    false: { label: 'ssr: false', desc: '完全にクライアントのみ（SPA モード）', where: 'クライアントのみ' },
  }

  const current = descriptions[mode]

  return (
    <DemoPanel title="Selective SSR">
      <div className="toggle-row">
        <button className={mode === 'true' ? 'active' : ''} onClick={() => setMode('true')}>ssr: true</button>
        <button className={mode === 'data-only' ? 'active' : ''} onClick={() => setMode('data-only')}>data-only</button>
        <button className={mode === 'false' ? 'active' : ''} onClick={() => setMode('false')}>ssr: false</button>
      </div>
      <code className="type-code">{current.label}</code>
      <p>{current.desc}</p>
      <div className="ssr-flow">
        <span className="api-step">リクエスト</span>
        <span>→</span>
        <span className="api-step">{current.where}</span>
        <span>→</span>
        <span className="api-step">表示</span>
      </div>
    </DemoPanel>
  )
}

export function ServerFunctionsDemo() {
  const [result, setResult] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const callFn = () => {
    setLoading(true)
    setResult(null)
    setTimeout(() => {
      setResult(JSON.stringify({ id: 1, name: 'TanStack User', role: 'admin' }, null, 2))
      setLoading(false)
    }, 600)
  }

  return (
    <DemoPanel title="Server Function（RPC）">
      <pre className="interface-code">{`const getUser = createServerFn({ method: 'GET' })
  .handler(async () => db.user.find())`}</pre>
      <div className="api-flow">
        <span className="api-step">コンポーネント</span>
        <span>→ getUser() →</span>
        <span className="api-step">サーバー</span>
        <span>→ 型安全な結果 →</span>
        <span className="api-step">コンポーネント</span>
      </div>
      <button className="btn-primary" onClick={callFn} disabled={loading}>
        {loading ? '呼び出し中...' : 'getUser() を実行'}
      </button>
      {result && <pre className="api-response">{result}</pre>}
    </DemoPanel>
  )
}

export function ApiRoutesDemo() {
  const [response, setResponse] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const callApi = () => {
    setLoading(true)
    setResponse(null)
    setTimeout(() => {
      setResponse(JSON.stringify({ ok: true, event: 'webhook.received', timestamp: new Date().toISOString() }, null, 2))
      setLoading(false)
    }, 600)
  }

  return (
    <DemoPanel title="Server Route（外部 API）">
      <pre className="interface-code">{`// routes/api/webhook.ts
POST: async ({ request }) => {
  const body = await request.json()
  return json({ ok: true })
}`}</pre>
      <div className="api-flow">
        <span className="api-step">外部サービス</span>
        <span>→ POST /api/webhook →</span>
        <span className="api-step">Server Route</span>
      </div>
      <button className="btn-primary" onClick={callApi} disabled={loading}>
        {loading ? 'リクエスト中...' : 'Webhook を受信（デモ）'}
      </button>
      {response && <pre className="api-response">{response}</pre>}
    </DemoPanel>
  )
}

export function MiddlewareDemo() {
  const [authed, setAuthed] = useState(false)
  const [step, setStep] = useState(0)

  const steps = authed
    ? ['✓ ミドルウェア: 認証 OK', '✓ Loader: データ取得', '✓ コンポーネント: 表示']
    : ['✗ ミドルウェア: 未認証', '→ /login にリダイレクト']

  const run = () => {
    setStep(0)
    const interval = setInterval(() => {
      setStep((s) => {
        if (s >= steps.length - 1) { clearInterval(interval); return s }
        return s + 1
      })
    }, 500)
  }

  return (
    <DemoPanel title="ミドルウェアの流れ">
      <div className="toggle-row">
        <button className={!authed ? 'active' : ''} onClick={() => { setAuthed(false); setStep(0) }}>未ログイン</button>
        <button className={authed ? 'active' : ''} onClick={() => { setAuthed(true); setStep(0) }}>ログイン済み</button>
      </div>
      <div className="selector-preview">
        {steps.map((s, i) => (
          <div key={s} className={`selector-item ${i <= step ? 'selected' : ''}`}>{s}</div>
        ))}
      </div>
      <button className="nav-btn" onClick={run}>リクエストを実行</button>
    </DemoPanel>
  )
}

export function DeploymentDemo() {
  const hosts = ['Vercel', 'Netlify', 'Cloudflare', 'Node.js']
  const [host, setHost] = useState(0)

  return (
    <DemoPanel title="デプロイ先を選ぶ">
      <div className="toggle-row wrap">
        {hosts.map((h, i) => (
          <button key={h} className={host === i ? 'active' : ''} onClick={() => setHost(i)}>{h}</button>
        ))}
      </div>
      <div className="deploy-steps">
        <div className="deploy-step"><code>npm run build</code><span>クライアント + サーバーをビルド</span></div>
        <div className="deploy-arrow">↓</div>
        <div className="deploy-step highlight"><strong>{hosts[host]}</strong><span>にデプロイ 🚀</span></div>
      </div>
      <p className="demo-note">ルートのコードは変更不要。デプロイ設定だけ変えます。</p>
    </DemoPanel>
  )
}

export function NextStepsDemo() {
  const steps = [
    { title: 'React', done: true, color: '#61dafb' },
    { title: 'TanStack Router', done: true, color: '#f97316' },
    { title: 'TanStack Start', done: true, color: '#ef4444' },
    { title: 'TanStack Query', done: false, color: '#888' },
  ]

  return (
    <DemoPanel title="TanStack エコシステム">
      <div className="ts-roadmap">
        {steps.map((step, i) => (
          <div key={step.title} className="ts-roadmap-step">
            <div className="ts-roadmap-circle" style={{ borderColor: step.color, color: step.done ? step.color : undefined }}>
              {step.done ? '✓' : i + 1}
            </div>
            <div className="ts-roadmap-info">
              <strong style={{ color: step.color }}>{step.title}</strong>
            </div>
            {i < steps.length - 1 && <div className="ts-roadmap-line" />}
          </div>
        ))}
      </div>
      <p className="demo-note">TanStack Query でサーバー状態管理を学びましょう！</p>
    </DemoPanel>
  )
}

const demoMap: Record<string, React.ComponentType> = {
  intro: IntroDemo,
  setup: SetupDemo,
  routing: RoutingDemo,
  loaders: LoadersDemo,
  ssr: SsrDemo,
  'server-functions': ServerFunctionsDemo,
  'api-routes': ApiRoutesDemo,
  middleware: MiddlewareDemo,
  deployment: DeploymentDemo,
  'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
