import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

export function IntroDemo() {
  const [mode, setMode] = useState<'css' | 'tailwind'>('tailwind')
  return (
    <DemoPanel title="CSS vs Tailwind">
      <div className="toggle-row">
        <button className={mode === 'css' ? 'active' : ''} onClick={() => setMode('css')}>通常の CSS</button>
        <button className={mode === 'tailwind' ? 'active' : ''} onClick={() => setMode('tailwind')}>Tailwind</button>
      </div>
      {mode === 'css' ? (
        <code className="selector-code">.card {`{ padding: 1rem; border-radius: 8px; background: #eff6ff; }`}</code>
      ) : (
        <code className="selector-code">class="p-4 rounded-lg bg-blue-50"</code>
      )}
      <div className="tw-preview-card" style={{ padding: '1rem', borderRadius: '8px', background: '#eff6ff', border: '1px solid #bfdbfe' }}>
        <strong style={{ color: '#1e40af' }}>カードコンポーネント</strong>
        <p style={{ color: '#475569', fontSize: '0.9rem', marginTop: '0.5rem' }}>同じ見た目、書き方が違います。</p>
      </div>
      <p className="demo-note">Tailwind は HTML にクラスを直接書くユーティリティファースト CSS です。</p>
    </DemoPanel>
  )
}

export function SetupDemo() {
  return (
    <DemoPanel title="プロジェクト構成">
      <div className="generic-demo-box">
        <code className="selector-code">npm create vite@latest my-app -- --template react-ts</code>
        <code className="selector-code" style={{ marginTop: '0.5rem', display: 'block' }}>npm install -D tailwindcss @tailwindcss/vite</code>
        <p style={{ marginTop: '0.75rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Vite プラグインを追加するだけで、すぐに Tailwind が使えます。
        </p>
      </div>
    </DemoPanel>
  )
}

export function UtilityDemo() {
  const classes = ['p-4', 'text-lg', 'font-bold', 'text-blue-600', 'rounded-lg', 'bg-white']
  const [active, setActive] = useState<string[]>(['p-4', 'rounded-lg', 'bg-white'])
  const toggle = (c: string) => setActive((prev) => prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c])
  const style: React.CSSProperties = {}
  if (active.includes('p-4')) style.padding = '1rem'
  if (active.includes('text-lg')) style.fontSize = '1.125rem'
  if (active.includes('font-bold')) style.fontWeight = 700
  if (active.includes('text-blue-600')) style.color = '#2563eb'
  if (active.includes('rounded-lg')) style.borderRadius = '8px'
  if (active.includes('bg-white')) style.background = '#fff'
  return (
    <DemoPanel title="ユーティリティクラスを組み合わせる">
      <div className="toggle-row wrap">
        {classes.map((c) => (
          <button key={c} className={active.includes(c) ? 'active' : ''} onClick={() => toggle(c)}>{c}</button>
        ))}
      </div>
      <div style={{ ...style, border: '1px solid #e2e8f0', minHeight: '60px' }}>
        プレビュー
      </div>
      <code className="selector-code">class="{active.join(' ')}"</code>
    </DemoPanel>
  )
}

export function LayoutDemo() {
  const [dir, setDir] = useState<'row' | 'col'>('row')
  return (
    <DemoPanel title="Flex レイアウト">
      <div className="toggle-row">
        <button className={dir === 'row' ? 'active' : ''} onClick={() => setDir('row')}>flex-row</button>
        <button className={dir === 'col' ? 'active' : ''} onClick={() => setDir('col')}>flex-col</button>
      </div>
      <div style={{ display: 'flex', flexDirection: dir === 'row' ? 'row' : 'column', gap: '8px' }}>
        {['A', 'B', 'C'].map((l) => (
          <div key={l} style={{ background: 'var(--accent)', color: '#fff', padding: '1rem', borderRadius: '6px', fontWeight: 700, flex: 1, textAlign: 'center' }}>{l}</div>
        ))}
      </div>
      <code className="selector-code">flex {dir === 'row' ? 'flex-row' : 'flex-col'} gap-2</code>
    </DemoPanel>
  )
}

export function SpacingDemo() {
  const [pad, setPad] = useState(16)
  return (
    <DemoPanel title="余白 (padding)">
      <div className="controls-grid">
        <label>padding: p-{pad / 4}<input type="range" min="0" max="48" step="4" value={pad} onChange={(e) => setPad(+e.target.value)} /></label>
      </div>
      <div style={{ background: 'rgba(56,189,248,0.2)', display: 'inline-block' }}>
        <div style={{ padding: `${pad}px`, background: 'var(--accent)', color: '#fff', fontWeight: 600 }}>コンテンツ</div>
      </div>
      <p className="demo-note">Tailwind のスペーシングは 4px 単位（p-4 = 16px）</p>
    </DemoPanel>
  )
}

export function TypographyDemo() {
  const sizes = [{ cls: 'text-sm', size: '0.875rem' }, { cls: 'text-base', size: '1rem' }, { cls: 'text-xl', size: '1.25rem' }, { cls: 'text-3xl', size: '1.875rem' }]
  const [idx, setIdx] = useState(2)
  return (
    <DemoPanel title="文字サイズ">
      <div className="toggle-row">
        {sizes.map((s, i) => (
          <button key={s.cls} className={idx === i ? 'active' : ''} onClick={() => setIdx(i)}>{s.cls}</button>
        ))}
      </div>
      <p style={{ fontSize: sizes[idx].size, color: 'var(--text-heading)', fontWeight: 600 }}>見出しテキスト</p>
    </DemoPanel>
  )
}

export function ResponsiveDemo() {
  const [bp, setBp] = useState<'sm' | 'md' | 'lg'>('md')
  const cols = { sm: 1, md: 2, lg: 3 }
  return (
    <DemoPanel title="レスポンシブ Grid">
      <div className="toggle-row">
        {(['sm', 'md', 'lg'] as const).map((b) => (
          <button key={b} className={bp === b ? 'active' : ''} onClick={() => setBp(b)}>{b}</button>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols[bp]}, 1fr)`, gap: '8px' }}>
        {Array.from({ length: cols[bp] }, (_, i) => (
          <div key={i} style={{ background: 'var(--accent-2)', padding: '1rem', borderRadius: '6px', textAlign: 'center', color: '#fff' }}>Col {i + 1}</div>
        ))}
      </div>
      <code className="selector-code">grid-cols-1 md:grid-cols-2 lg:grid-cols-3</code>
    </DemoPanel>
  )
}

export function StatesDemo() {
  const [hovered, setHovered] = useState(false)
  return (
    <DemoPanel title="hover 状態">
      <button
        className="pseudo-button"
        style={{ background: hovered ? '#2563eb' : 'var(--accent)', transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        ホバーしてみて
      </button>
      <code className="selector-code">hover:bg-blue-700 hover:scale-105</code>
    </DemoPanel>
  )
}

export function DarkModeDemo() {
  const [dark, setDark] = useState(false)
  return (
    <DemoPanel title="ダークモード">
      <div className="toggle-row">
        <button className={!dark ? 'active' : ''} onClick={() => setDark(false)}>Light</button>
        <button className={dark ? 'active' : ''} onClick={() => setDark(true)}>Dark</button>
      </div>
      <div style={{ background: dark ? '#1a1a2e' : '#f8fafc', color: dark ? '#e2e8f0' : '#1e293b', padding: '1.5rem', borderRadius: '8px', transition: 'all 0.2s' }}>
        <strong>テーマ切り替え</strong>
        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>dark: プレフィックスで自動切り替え</p>
      </div>
    </DemoPanel>
  )
}

export function NextStepsDemo() {
  const links = ['公式ドキュメント', 'Tailwind UI', 'Headless UI', 'daisyUI']
  return (
    <DemoPanel title="次に学ぶこと">
      <div className="selector-preview">
        {links.map((l) => (
          <div key={l} className="selector-item">{l}</div>
        ))}
      </div>
      <p className="demo-note">Tailwind の基礎ができました！実プロジェクトで使ってみましょう。</p>
    </DemoPanel>
  )
}

const demoMap: Record<string, React.ComponentType> = {
  intro: IntroDemo,
  setup: SetupDemo,
  utility: UtilityDemo,
  layout: LayoutDemo,
  spacing: SpacingDemo,
  typography: TypographyDemo,
  responsive: ResponsiveDemo,
  states: StatesDemo,
  'dark-mode': DarkModeDemo,
  'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
