import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

const panels = ['Elements', 'Console', 'Network', 'Sources', 'Performance', 'Application']

export function IntroDemo() {
  return (
    <DemoPanel title="DevTools の開き方">
      <div className="selector-preview">
        {['F12 / Cmd+Option+I', '右クリック → 検証', 'Chrome / Firefox / Safari 対応'].map((t) => (
          <div key={t} className="selector-item">{t}</div>
        ))}
      </div>
    </DemoPanel>
  )
}

export function ElementsDemo() {
  const [selected, setSelected] = useState('h1')
  return (
    <DemoPanel title="Elements パネル">
      <div className="devtools-mock">
        <div className="devtools-tree">
          <span onClick={() => setSelected('body')} className={selected === 'body' ? 'selected' : ''}>&lt;body&gt;</span>
          <span onClick={() => setSelected('h1')} className={selected === 'h1' ? 'selected' : ''} style={{ marginLeft: '1rem' }}>&lt;h1&gt;Hello&lt;/h1&gt;</span>
        </div>
        <div className="devtools-styles">
          <code>{selected} {`{ color: #2563eb; font-size: 2rem; }`}</code>
        </div>
      </div>
    </DemoPanel>
  )
}

export function ConsoleDemo() {
  const [logs, setLogs] = useState<string[]>([])
  const run = () => setLogs((l) => [...l, `> console.log("Hello") → "Hello"`, `> 1 + 2 → 3`])
  return (
    <DemoPanel title="Console">
      <div className="devtools-console">
        {logs.length === 0 ? <span style={{ color: 'var(--text-muted)' }}>コンソールは空です</span> : logs.map((l, i) => <div key={i}>{l}</div>)}
      </div>
      <button className="nav-btn" style={{ marginTop: '0.75rem' }} onClick={run}>コードを実行</button>
    </DemoPanel>
  )
}

export function NetworkDemo() {
  const requests = [
    { method: 'GET', url: '/api/users', status: 200, time: '120ms' },
    { method: 'POST', url: '/api/login', status: 201, time: '340ms' },
    { method: 'GET', url: '/assets/logo.png', status: 200, time: '45ms' },
  ]
  return (
    <DemoPanel title="Network パネル">
      <div className="network-table">
        {requests.map((r) => (
          <div key={r.url} className="network-row">
            <span className={`net-method ${r.method}`}>{r.method}</span>
            <span>{r.url}</span>
            <span style={{ color: r.status < 300 ? 'var(--success)' : 'var(--danger)' }}>{r.status}</span>
            <span style={{ color: 'var(--text-muted)' }}>{r.time}</span>
          </div>
        ))}
      </div>
    </DemoPanel>
  )
}

export function SourcesDemo() {
  const [paused, setPaused] = useState(false)
  return (
    <DemoPanel title="ブレークポイント">
      <code className="selector-code" style={{ whiteSpace: 'pre' }}>{`function greet(name) {\n  debugger; // ← ブレークポイント\n  return "Hello " + name;\n}`}</code>
      <button className="btn-primary" style={{ marginTop: '0.75rem', width: '100%' }} onClick={() => setPaused(!paused)}>
        {paused ? '▶ 実行再開' : '⏸ ブレークで停止'}
      </button>
      {paused && <p className="demo-note">ここで変数の値を確認できます</p>}
    </DemoPanel>
  )
}

export function PerformanceDemo() {
  const metrics = [{ label: 'Scripting', pct: 35 }, { label: 'Rendering', pct: 25 }, { label: 'Painting', pct: 15 }, { label: 'Idle', pct: 25 }]
  return (
    <DemoPanel title="Performance プロファイラ">
      <div className="perf-bars">
        {metrics.map((m) => (
          <div key={m.label} className="perf-bar-row">
            <span>{m.label}</span>
            <div className="perf-bar-track"><div className="perf-bar-fill" style={{ width: `${m.pct}%` }} /></div>
            <span>{m.pct}%</span>
          </div>
        ))}
      </div>
    </DemoPanel>
  )
}

export function ResponsiveDemo() {
  const [width, setWidth] = useState(768)
  return (
    <DemoPanel title="レスポンシブモード">
      <div className="width-slider">
        <label>幅: {width}px<input type="range" min="320" max="1200" value={width} onChange={(e) => setWidth(+e.target.value)} /></label>
      </div>
      <div className="responsive-frame" style={{ width: `${Math.min(width, 400)}px` }}>
        <div className="responsive-layout" style={{ flexDirection: width < 600 ? 'column' : 'row' }}>
          <div className="responsive-sidebar">Sidebar</div>
          <div className="responsive-main">Main</div>
        </div>
      </div>
    </DemoPanel>
  )
}

export function StorageDemo() {
  const [key, setKey] = useState('theme')
  const data: Record<string, string> = { theme: 'dark', lang: 'ja', token: 'abc123' }
  return (
    <DemoPanel title="localStorage">
      <div className="toggle-row">
        {Object.keys(data).map((k) => (
          <button key={k} className={key === k ? 'active' : ''} onClick={() => setKey(k)}>{k}</button>
        ))}
      </div>
      <code className="selector-code">{key}: "{data[key]}"</code>
    </DemoPanel>
  )
}

export function TipsDemo() {
  const tips = ['Cmd+Shift+C: 要素を選択', 'Cmd+K: Console クリア', '$0: 選択中の要素', 'Cmd+P: ファイル検索']
  return (
    <DemoPanel title="ショートカット">
      <div className="selector-preview">
        {tips.map((t) => <div key={t} className="selector-item">{t}</div>)}
      </div>
    </DemoPanel>
  )
}

export function NextStepsDemo() {
  return (
    <DemoPanel title="DevTools を使いこなす">
      <div className="selector-preview">
        {panels.map((p) => <div key={p} className="selector-item">{p} パネルを深掘り</div>)}
      </div>
    </DemoPanel>
  )
}

const demoMap: Record<string, React.ComponentType> = {
  intro: IntroDemo, elements: ElementsDemo, console: ConsoleDemo, network: NetworkDemo,
  sources: SourcesDemo, performance: PerformanceDemo, responsive: ResponsiveDemo,
  storage: StorageDemo, tips: TipsDemo, 'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
