import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

export function IntroDemo() {
  const layers = [
    { name: 'Client', icon: '⚛️', desc: 'Vite + React', color: '#61dafb' },
    { name: 'API', icon: '🔥', desc: 'Hono on Workers', color: '#e11d48' },
    { name: 'D1', icon: '🗄', desc: 'SQLite DB', color: '#3b82f6' },
  ]
  const [active, setActive] = useState(0)

  return (
    <DemoPanel title="3層アーキテクチャ">
      <div className="hpa-arch">
        {layers.map((l, i) => (
          <button
            key={l.name}
            className={`hpa-box ${active === i ? 'active' : ''}`}
            style={{ borderColor: active === i ? l.color : undefined }}
            onClick={() => setActive(i)}
          >
            {l.icon} {l.name}
          </button>
        ))}
      </div>
      <p className="demo-note">{layers[active].desc} — フロントと API を分離した構成です</p>
      <div className="hpa-arch">
        <span className="hpa-box">ユーザー</span>
        <span className="hpa-arrow">→</span>
        <span className="hpa-box active">{layers[active].name}</span>
        <span className="hpa-arrow">→</span>
        <span className="hpa-box">レスポンス</span>
      </div>
    </DemoPanel>
  )
}

export function SetupDemo() {
  const [step, setStep] = useState(0)
  const steps = [
    'mkdir post-app',
    'npm create vite@latest client',
    'npm create cloudflare@latest server',
    'npm install hono',
    'npm run dev ✓',
  ]
  return (
    <DemoPanel title="セットアップの流れ">
      <div className="selector-preview">
        {steps.map((s, i) => (
          <div key={s} className={`selector-item ${i <= step ? 'selected' : ''}`}>
            {i < step ? '✓' : i + 1}. {s}
          </div>
        ))}
      </div>
      <button className="btn-primary" style={{ width: '100%', marginTop: '0.75rem' }} onClick={() => setStep((s) => Math.min(s + 1, steps.length - 1))} disabled={step >= steps.length - 1}>
        次のステップ →
      </button>
    </DemoPanel>
  )
}

export function GithubDemo() {
  const [pushed, setPushed] = useState(false)
  return (
    <DemoPanel title="GitHub push">
      <pre className="interface-code">{`git add .
git commit -m "feat: initial structure"
git push -u origin main`}</pre>
      <button className="btn-primary" style={{ width: '100%' }} onClick={() => setPushed(true)}>
        {pushed ? '✓ GitHub に push 完了' : 'push を実行（デモ）'}
      </button>
      {pushed && <p className="demo-note">リポジトリ: github.com/you/post-app 🎉</p>}
    </DemoPanel>
  )
}

export function FrontendDemo() {
  const [posts, setPosts] = useState([
    { id: 1, user: 'taro', body: 'Hono で API を作り始めました！' },
    { id: 2, user: 'hanako', body: 'React + Vite の開発体験が最高 ✨' },
  ])
  const [body, setBody] = useState('')

  const submit = () => {
    if (!body.trim()) return
    setPosts([{ id: Date.now(), user: 'you', body: body.trim() }, ...posts])
    setBody('')
  }

  return (
    <DemoPanel title="タイムライン UI（デモ）">
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
        <input className="pseudo-input" value={body} onChange={(e) => setBody(e.target.value)} placeholder="いまどうしてる？" style={{ flex: 1 }} />
        <button className="nav-btn" onClick={submit}>投稿</button>
      </div>
      {posts.map((p) => (
        <div key={p.id} className="hpa-post">
          <strong>@{p.user}</strong>
          <p>{p.body}</p>
        </div>
      ))}
    </DemoPanel>
  )
}

export function DatabaseDemo() {
  const tables = [
    { name: 'users', cols: 'id, username, password_hash, display_name' },
    { name: 'posts', cols: 'id, user_id → users, body' },
    { name: 'likes', cols: 'user_id + post_id (PK)' },
    { name: 'follows', cols: 'follower_id → following_id' },
  ]
  const [active, setActive] = useState(0)

  return (
    <DemoPanel title="D1 テーブル設計">
      <div className="toggle-row wrap">
        {tables.map((t, i) => (
          <button key={t.name} className={active === i ? 'active' : ''} onClick={() => setActive(i)}>{t.name}</button>
        ))}
      </div>
      <code className="selector-code">CREATE TABLE {tables[active].name} ({tables[active].cols})</code>
      <p className="demo-note">マイグレーションで Git 管理できます</p>
    </DemoPanel>
  )
}

export function RoutingDemo() {
  const routes = [
    { method: 'GET', path: '/api/posts', desc: 'タイムライン' },
    { method: 'POST', path: '/api/posts', desc: '投稿作成' },
    { method: 'POST', path: '/api/posts/:id/like', desc: 'いいね' },
    { method: 'POST', path: '/api/users/:id/follow', desc: 'フォロー' },
    { method: 'POST', path: '/api/auth/login', desc: 'ログイン' },
    { method: 'DELETE', path: '/api/posts/:id', desc: '削除' },
  ]

  return (
    <DemoPanel title="API ルート一覧">
      <div className="hpa-route-list">
        {routes.map((r) => (
          <div key={r.path + r.method} className={`hpa-route ${r.method.toLowerCase()}`}>
            <strong>{r.method}</strong> {r.path} — {r.desc}
          </div>
        ))}
      </div>
    </DemoPanel>
  )
}

export function CrudDemo() {
  const [op, setOp] = useState<'create' | 'read' | 'update' | 'delete'>('read')
  const [posts, setPosts] = useState([{ id: 1, body: '最初の投稿' }, { id: 2, body: '2件目の投稿' }])

  const run = () => {
    if (op === 'create') setPosts([...posts, { id: posts.length + 1, body: '新規投稿' }])
    if (op === 'delete' && posts.length > 0) setPosts(posts.slice(0, -1))
    if (op === 'update' && posts.length > 0) {
      setPosts(posts.map((p, i) => (i === 0 ? { ...p, body: '編集済み ✏️' } : p)))
    }
  }

  const labels = { create: 'POST /api/posts', read: 'GET /api/posts', update: 'PATCH /api/posts/:id', delete: 'DELETE /api/posts/:id' }

  return (
    <DemoPanel title="投稿 CRUD">
      <div className="toggle-row">
        {(['create', 'read', 'update', 'delete'] as const).map((o) => (
          <button key={o} className={op === o ? 'active' : ''} onClick={() => setOp(o)}>{o.toUpperCase()}</button>
        ))}
      </div>
      <code className="selector-code">{labels[op]}</code>
      {posts.map((p) => <div key={p.id} className="hpa-post">{p.body}</div>)}
      {op !== 'read' && <button className="btn-primary" style={{ width: '100%', marginTop: '0.75rem' }} onClick={run}>実行</button>}
    </DemoPanel>
  )
}

export function AuthDemo() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [username, setUsername] = useState('')

  const login = () => {
    if (username.trim()) setLoggedIn(true)
  }

  return (
    <DemoPanel title="ログイン（デモ）">
      {!loggedIn ? (
        <>
          <input className="pseudo-input" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" style={{ width: '100%', marginBottom: '0.5rem' }} />
          <input className="pseudo-input" type="password" placeholder="password" style={{ width: '100%', marginBottom: '0.75rem' }} />
          <button className="btn-primary" style={{ width: '100%' }} onClick={login}>ログイン</button>
        </>
      ) : (
        <>
          <div className="hpa-post">✓ ログイン成功！ @{username}</div>
          <code className="selector-code">Set-Cookie: session=abc123; HttpOnly; Secure</code>
          <button className="nav-btn" style={{ marginTop: '0.75rem' }} onClick={() => setLoggedIn(false)}>ログアウト</button>
        </>
      )}
    </DemoPanel>
  )
}

export function LikesDemo() {
  const [liked, setLiked] = useState(false)
  const [count, setCount] = useState(3)

  const toggle = () => {
    if (liked) {
      setLiked(false)
      setCount((c) => c - 1)
    } else {
      setLiked(true)
      setCount((c) => c + 1)
    }
  }

  return (
    <DemoPanel title="いいね機能">
      <div className="hpa-post">
        <strong>@taro</strong>
        <p>今日から Hono で SNS を作ります！</p>
        <div className="hpa-post-meta">
          <button className={`hpa-like-btn ${liked ? 'liked' : ''}`} onClick={toggle}>
            {liked ? '❤️' : '🤍'} {count}
          </button>
        </div>
      </div>
      <p className="demo-note">{liked ? 'POST /api/posts/:id/like' : 'DELETE /api/posts/:id/like'}</p>
    </DemoPanel>
  )
}

export function FollowsDemo() {
  const [following, setFollowing] = useState(false)

  return (
    <DemoPanel title="フォロー関係">
      <div className="hpa-follow-graph">
        <div className="hpa-user-node">👤<br /><small>you</small></div>
        <span className="hpa-arrow">{following ? '→ フォロー中 →' : '—'}</span>
        <div className={`hpa-user-node ${following ? 'following' : ''}`}>👤<br /><small>taro</small></div>
      </div>
      <button className="btn-primary" style={{ width: '100%' }} onClick={() => setFollowing(!following)}>
        {following ? 'フォロー解除' : 'フォローする'}
      </button>
    </DemoPanel>
  )
}

export function FrontendIntegrationDemo() {
  const [tab, setTab] = useState<'all' | 'following'>('all')
  const allPosts = ['全体タイムラインの投稿 A', '全体タイムラインの投稿 B']
  const followingPosts = ['フォロー中ユーザーの投稿 X']

  return (
    <DemoPanel title="タイムライン切り替え">
      <div className="toggle-row">
        <button className={tab === 'all' ? 'active' : ''} onClick={() => setTab('all')}>すべて</button>
        <button className={tab === 'following' ? 'active' : ''} onClick={() => setTab('following')}>フォロー中</button>
      </div>
      {(tab === 'all' ? allPosts : followingPosts).map((p) => (
        <div key={p} className="hpa-post">{p}</div>
      ))}
    </DemoPanel>
  )
}

export function CicdDemo() {
  const [step, setStep] = useState(0)
  const steps = ['git push', 'GitHub Actions 起動', 'npm ci & build', 'wrangler deploy', '🌐 本番公開']
  return (
    <DemoPanel title="CI/CD パイプライン">
      <div className="selector-preview">
        {steps.map((s, i) => (
          <div key={s} className={`selector-item ${i <= step ? 'selected' : ''}`}>{i < step ? '✓' : i + 1}. {s}</div>
        ))}
      </div>
      <button className="nav-btn" style={{ marginTop: '0.75rem' }} onClick={() => setStep((s) => Math.min(s + 1, steps.length - 1))} disabled={step >= steps.length - 1}>
        次のステップ →
      </button>
    </DemoPanel>
  )
}

export function DeployDemo() {
  const [deployed, setDeployed] = useState(false)
  return (
    <DemoPanel title="Cloudflare デプロイ">
      <div className="hpa-arch">
        <span className="hpa-box">Worker<br /><small>API</small></span>
        <span className="hpa-arrow">+</span>
        <span className="hpa-box">Pages<br /><small>Client</small></span>
      </div>
      <button className="btn-primary" style={{ width: '100%' }} onClick={() => setDeployed(true)}>
        {deployed ? '✓ デプロイ完了' : 'wrangler deploy（デモ）'}
      </button>
      {deployed && (
        <div className="hpa-post" style={{ marginTop: '0.75rem' }}>
          🎉 https://post-app.pages.dev
        </div>
      )}
    </DemoPanel>
  )
}

const demoMap: Record<string, React.ComponentType> = {
  intro: IntroDemo,
  setup: SetupDemo,
  github: GithubDemo,
  frontend: FrontendDemo,
  database: DatabaseDemo,
  routing: RoutingDemo,
  crud: CrudDemo,
  auth: AuthDemo,
  likes: LikesDemo,
  follows: FollowsDemo,
  'frontend-integration': FrontendIntegrationDemo,
  cicd: CicdDemo,
  deploy: DeployDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
