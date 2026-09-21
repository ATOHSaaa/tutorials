import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

export function IntroDemo() {
  return (
    <DemoPanel title="状態管理の全体像">
      <div className="state-flow">
        <div className="state-box">UI</div>
        <span>↕</span>
        <div className="state-box accent">State</div>
        <span>↕</span>
        <div className="state-box">API</div>
      </div>
      <p className="demo-note">アプリの「状態」は UI とデータの橋渡しです。</p>
    </DemoPanel>
  )
}

export function LiftingDemo() {
  const [count, setCount] = useState(0)
  return (
    <DemoPanel title="状態のリフトアップ">
      <p style={{ fontSize: '0.85rem', marginBottom: '0.75rem' }}>親コンポーネントが count を管理し、子に渡す</p>
      <div className="state-parent">
        <div className="state-box accent">Parent: count = {count}</div>
        <div className="state-children">
          <button className="nav-btn" onClick={() => setCount((c) => c - 1)}>Child A: -1</button>
          <button className="nav-btn" onClick={() => setCount((c) => c + 1)}>Child B: +1</button>
        </div>
      </div>
    </DemoPanel>
  )
}

export function ContextDemo() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  return (
    <DemoPanel title="Context API">
      <div className="toggle-row">
        <button className={theme === 'light' ? 'active' : ''} onClick={() => setTheme('light')}>Light</button>
        <button className={theme === 'dark' ? 'active' : ''} onClick={() => setTheme('dark')}>Dark</button>
      </div>
      <div className="state-context-tree">
        <div className="state-box">Provider (theme: {theme})</div>
        <div className="state-children">
          <div className="state-box" style={{ background: theme === 'dark' ? '#1a1a2e' : '#f1f5f9', color: theme === 'dark' ? '#e2e8f0' : '#1e293b' }}>Header</div>
          <div className="state-box" style={{ background: theme === 'dark' ? '#1a1a2e' : '#f1f5f9', color: theme === 'dark' ? '#e2e8f0' : '#1e293b' }}>Sidebar</div>
        </div>
      </div>
    </DemoPanel>
  )
}

export function ZustandDemo() {
  const [count, setCount] = useState(0)
  return (
    <DemoPanel title="Zustand ストア">
      <div className="state-store">
        <code className="selector-code">{`useStore((s) => s.count) = ${count}`}</code>
        <div className="toggle-row">
          <button className="nav-btn" onClick={() => setCount((c) => c - 1)}>decrement()</button>
          <button className="nav-btn" onClick={() => setCount((c) => c + 1)}>increment()</button>
        </div>
      </div>
      <p className="demo-note">Zustand はボイラープレートが少なく、シンプルにグローバル state を管理できます。</p>
    </DemoPanel>
  )
}

export function SelectorsDemo() {
  const items = [1, 2, 3, 4, 5]
  const [filter, setFilter] = useState<'all' | 'even'>('all')
  const filtered = filter === 'even' ? items.filter((n) => n % 2 === 0) : items
  return (
    <DemoPanel title="派生状態 (セレクタ)">
      <div className="toggle-row">
        <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>全件</button>
        <button className={filter === 'even' ? 'active' : ''} onClick={() => setFilter('even')}>偶数のみ</button>
      </div>
      <p>結果: [{filtered.join(', ')}]</p>
      <code className="selector-code">const even = items.filter(n =&gt; n % 2 === 0)</code>
    </DemoPanel>
  )
}

export function AsyncDemo() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle')
  const fetchData = () => { setStatus('loading'); setTimeout(() => setStatus('done'), 1200) }
  return (
    <DemoPanel title="サーバー状態">
      <div className="state-box accent">{status === 'idle' ? 'データなし' : status === 'loading' ? '読み込み中...' : 'データ取得完了 ✓'}</div>
      <button className="btn-primary" style={{ marginTop: '0.75rem', width: '100%' }} onClick={fetchData} disabled={status === 'loading'}>fetchUsers()</button>
    </DemoPanel>
  )
}

export function TanstackDemo() {
  const features = ['自動キャッシュ', '再取得', 'ローディング状態', 'エラーハンドリング']
  return (
    <DemoPanel title="TanStack Query">
      <div className="selector-preview">
        {features.map((f) => <div key={f} className="selector-item">{f}</div>)}
      </div>
      <code className="selector-code">const {`{ data }`} = useQuery({`{ queryKey: ['users'], queryFn: fetchUsers }`})</code>
    </DemoPanel>
  )
}

export function PatternsDemo() {
  const patterns = ['単一ストア', 'スライス分割', 'カスタムフック', '状態マシン']
  return (
    <DemoPanel title="よくあるパターン">
      <div className="selector-preview">
        {patterns.map((p) => <div key={p} className="selector-item">{p}</div>)}
      </div>
    </DemoPanel>
  )
}

export function ComparisonDemo() {
  const libs = [
    { name: 'useState', use: 'ローカル state' },
    { name: 'Context', use: 'テーマ、認証' },
    { name: 'Zustand', use: 'グローバル UI state' },
    { name: 'TanStack Query', use: 'サーバーデータ' },
  ]
  return (
    <DemoPanel title="使い分け">
      {libs.map((l) => (
        <div key={l.name} className="selector-item" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <strong>{l.name}</strong><span style={{ color: 'var(--text-muted)' }}>{l.use}</span>
        </div>
      ))}
    </DemoPanel>
  )
}

export function NextStepsDemo() {
  return (
    <DemoPanel title="状態管理の次のステップ">
      <div className="selector-preview">
        {['Redux Toolkit', 'Jotai', 'XState', 'tRPC'].map((t) => <div key={t} className="selector-item">{t}</div>)}
      </div>
    </DemoPanel>
  )
}

const demoMap: Record<string, React.ComponentType> = {
  intro: IntroDemo, lifting: LiftingDemo, context: ContextDemo, zustand: ZustandDemo,
  selectors: SelectorsDemo, async: AsyncDemo, tanstack: TanstackDemo, patterns: PatternsDemo,
  comparison: ComparisonDemo, 'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
