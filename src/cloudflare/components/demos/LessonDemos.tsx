import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

export function IntroDemo() {
  const services = [
    { name: 'Workers', icon: '⚡', desc: 'エッジでコードを実行', color: '#f6821f' },
    { name: 'D1', icon: '🗄', desc: 'サーバーレス SQL DB', color: '#3b82f6' },
    { name: 'R2', icon: '📦', desc: 'オブジェクトストレージ', color: '#8b5cf6' },
  ]
  const [active, setActive] = useState(0)

  return (
    <DemoPanel title="Cloudflare の3大サービス">
      <div className="cf-services">
        {services.map((s, i) => (
          <button
            key={s.name}
            className={`cf-service-card ${active === i ? 'active' : ''}`}
            style={{ '--cf-color': s.color } as React.CSSProperties}
            onClick={() => setActive(i)}
          >
            <span className="cf-service-icon">{s.icon}</span>
            <strong>{s.name}</strong>
            <small>{s.desc}</small>
          </button>
        ))}
      </div>
      <div className="cf-arch">
        <span>ユーザー</span>
        <span className="cf-arrow">→</span>
        <span className="cf-highlight" style={{ borderColor: services[active].color }}>{services[active].name}</span>
        <span className="cf-arrow">→</span>
        <span>レスポンス</span>
      </div>
      <p className="demo-note">世界中のエッジで低レイテンシに動作します</p>
    </DemoPanel>
  )
}

export function WorkersDemo() {
  const [ran, setRan] = useState(false)
  return (
    <DemoPanel title="最小の Worker">
      <pre className="interface-code">{`export default {
  async fetch(request) {
    return new Response('Hello!');
  },
};`}</pre>
      <button className="btn-primary" style={{ width: '100%' }} onClick={() => setRan(true)}>
        {ran ? '✓ レスポンス受信' : 'Worker を実行（デモ）'}
      </button>
      {ran && <div className="cf-response">Hello from Cloudflare Workers!</div>}
    </DemoPanel>
  )
}

export function WorkersRoutingDemo() {
  const [path, setPath] = useState('/api/hello')
  const responses: Record<string, string> = {
    '/api/hello': '{ "message": "Hello!" }',
    '/api/users': '[{ "id": 1, "name": "田中" }]',
    '/other': '404 Not Found',
  }

  return (
    <DemoPanel title="ルーティング">
      <div className="toggle-row wrap">
        {['/api/hello', '/api/users', '/other'].map((p) => (
          <button key={p} className={path === p ? 'active' : ''} onClick={() => setPath(p)}>{p}</button>
        ))}
      </div>
      <div className="cf-flow">
        <span>Request: GET {path}</span>
        <span className="cf-arrow">→</span>
        <span>Worker</span>
        <span className="cf-arrow">→</span>
        <code>{responses[path]}</code>
      </div>
    </DemoPanel>
  )
}

export function WranglerDemo() {
  const [step, setStep] = useState(0)
  const steps = ['wrangler dev（localhost:8787）', 'ホットリロードで開発', 'wrangler deploy（本番）', '🌐 世界中に配信']
  return (
    <DemoPanel title="Wrangler デプロイフロー">
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

export function D1IntroDemo() {
  return (
    <DemoPanel title="D1 マイグレーション">
      <pre className="interface-code">{`-- migrations/0001_create_users.sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL
);`}</pre>
      <code className="selector-code">npx wrangler d1 migrations apply my-db --local</code>
      <p className="demo-note">SQLite ベース。学んだ SQL がそのまま使えます</p>
    </DemoPanel>
  )
}

export function D1CrudDemo() {
  const [op, setOp] = useState<'select' | 'insert' | 'delete'>('select')
  const [rows, setRows] = useState([{ id: 1, name: '田中', email: 'taro@ex.com' }, { id: 2, name: '鈴木', email: 'hanako@ex.com' }])

  const queries = {
    select: 'SELECT * FROM users',
    insert: 'INSERT INTO users (name, email) VALUES (?, ?)',
    delete: 'DELETE FROM users WHERE id = ?',
  }

  const run = () => {
    if (op === 'insert') setRows([...rows, { id: rows.length + 1, name: '新規', email: 'new@ex.com' }])
    if (op === 'delete' && rows.length > 1) setRows(rows.slice(0, -1))
  }

  return (
    <DemoPanel title="D1 CRUD">
      <div className="toggle-row">
        <button className={op === 'select' ? 'active' : ''} onClick={() => setOp('select')}>SELECT</button>
        <button className={op === 'insert' ? 'active' : ''} onClick={() => setOp('insert')}>INSERT</button>
        <button className={op === 'delete' ? 'active' : ''} onClick={() => setOp('delete')}>DELETE</button>
      </div>
      <code className="selector-code">{queries[op]}</code>
      <table className="cf-table">
        <thead><tr><th>id</th><th>name</th><th>email</th></tr></thead>
        <tbody>
          {rows.map((r) => <tr key={r.id}><td>{r.id}</td><td>{r.name}</td><td>{r.email}</td></tr>)}
        </tbody>
      </table>
      {op !== 'select' && <button className="btn-primary" style={{ marginTop: '0.75rem', width: '100%' }} onClick={run}>実行</button>}
    </DemoPanel>
  )
}

export function R2IntroDemo() {
  const [files, setFiles] = useState(['images/photo.png', 'docs/report.pdf'])
  const [key, setKey] = useState('')

  const upload = () => {
    if (key && !files.includes(key)) setFiles([...files, key])
    setKey('')
  }

  return (
    <DemoPanel title="R2 バケット">
      <div className="cf-bucket">
        <div className="cf-bucket-header">my-files (R2)</div>
        {files.map((f) => (
          <div key={f} className="cf-bucket-item">📄 {f}</div>
        ))}
        {files.length === 0 && <div className="cf-bucket-empty">（空のバケット）</div>}
      </div>
      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem' }}>
        <input className="pseudo-input" value={key} onChange={(e) => setKey(e.target.value)} placeholder="uploads/file.png" />
        <button className="nav-btn" onClick={upload}>put()</button>
      </div>
      <p className="demo-note">egress（転送料）無料が R2 の強み</p>
    </DemoPanel>
  )
}

export function R2ApiDemo() {
  const [method, setMethod] = useState<'GET' | 'PUT'>('GET')
  const [log, setLog] = useState<string | null>(null)

  const run = () => {
    setLog(method === 'GET'
      ? '200 OK — image/png (R2 から取得)'
      : '201 Created — { ok: true, key: "uploads/photo.png" }')
  }

  return (
    <DemoPanel title="ファイル API">
      <div className="toggle-row">
        <button className={method === 'GET' ? 'active' : ''} onClick={() => setMethod('GET')}>GET /files/*</button>
        <button className={method === 'PUT' ? 'active' : ''} onClick={() => setMethod('PUT')}>PUT /upload/*</button>
      </div>
      <div className="cf-flow">
        <span>{method} request</span>
        <span className="cf-arrow">→</span>
        <span>Worker</span>
        <span className="cf-arrow">→</span>
        <span>R2 BUCKET.{method === 'GET' ? 'get()' : 'put()'}</span>
      </div>
      <button className="btn-primary" style={{ width: '100%', marginTop: '0.75rem' }} onClick={run}>リクエスト送信</button>
      {log && <div className="cf-response">{log}</div>}
    </DemoPanel>
  )
}

export function FullstackDemo() {
  const [step, setStep] = useState(0)
  const steps = [
    { svc: 'Client', action: 'POST /api/files（ファイル送信）' },
    { svc: 'Workers', action: 'リクエストを受信・処理' },
    { svc: 'R2', action: 'BUCKET.put(key, file) で保存' },
    { svc: 'D1', action: 'INSERT INTO files (name, r2_key)' },
    { svc: 'Workers', action: '{ id, name, url } を JSON で返す' },
  ]

  return (
    <DemoPanel title="ファイル共有アプリの流れ">
      <div className="cf-fullstack">
        {steps.map((s, i) => (
          <div key={i} className={`cf-fullstack-step ${i <= step ? 'active' : ''}`}>
            <span className={`cf-svc cf-svc-${s.svc.toLowerCase()}`}>{s.svc}</span>
            <span>{s.action}</span>
            {i < steps.length - 1 && <span className="cf-arrow-down">↓</span>}
          </div>
        ))}
      </div>
      <button className="btn-primary" style={{ width: '100%', marginTop: '0.75rem' }} onClick={() => setStep((s) => (s + 1) % steps.length)}>
        {step >= steps.length - 1 ? '最初から' : '次のステップ →'}
      </button>
    </DemoPanel>
  )
}

export function NextStepsDemo() {
  const more = ['Workers KV', 'Queues', 'Pages', 'Durable Objects', 'Hyperdrive']
  return (
    <DemoPanel title="さらに学ぶ Cloudflare サービス">
      <div className="selector-preview">
        {more.map((m) => <div key={m} className="selector-item">{m}</div>)}
      </div>
      <p className="demo-note">まずは Workers + D1 + R2 でアプリを作ってデプロイしてみましょう！</p>
    </DemoPanel>
  )
}

const demoMap: Record<string, React.ComponentType> = {
  intro: IntroDemo,
  workers: WorkersDemo,
  'workers-routing': WorkersRoutingDemo,
  wrangler: WranglerDemo,
  'd1-intro': D1IntroDemo,
  'd1-crud': D1CrudDemo,
  'r2-intro': R2IntroDemo,
  'r2-api': R2ApiDemo,
  fullstack: FullstackDemo,
  'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
