import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

export function IntroDemo() {
  return (
    <DemoPanel title="アクセシビリティの重要性">
      <div className="a11y-compare">
        <div className="a11y-bad"><span>❌</span> 色だけで情報を伝える</div>
        <div className="a11y-good"><span>✓</span> テキスト + 色 + 構造で伝える</div>
      </div>
      <p className="demo-note">約15%の人が何らかの障害を持っています。a11y は「特別な対応」ではなく基本です。</p>
    </DemoPanel>
  )
}

export function SemanticDemo() {
  const [mode, setMode] = useState<'bad' | 'good'>('bad')
  return (
    <DemoPanel title="セマンティック HTML">
      <div className="toggle-row">
        <button className={mode === 'bad' ? 'active' : ''} onClick={() => setMode('bad')}>div だらけ</button>
        <button className={mode === 'good' ? 'active' : ''} onClick={() => setMode('good')}>適切なタグ</button>
      </div>
      {mode === 'bad' ? (
        <code className="selector-code">&lt;div class="header"&gt;&lt;div class="nav"&gt;...</code>
      ) : (
        <code className="selector-code">&lt;header&gt;&lt;nav&gt;&lt;ul&gt;&lt;li&gt;...</code>
      )}
      <p className="demo-note">{mode === 'good' ? 'スクリーンリーダーが「ナビゲーション」と読み上げます' : '意味が伝わりません'}</p>
    </DemoPanel>
  )
}

export function KeyboardDemo() {
  const [focusIdx, setFocusIdx] = useState(0)
  const items = ['ホーム', 'About', 'Contact']
  return (
    <DemoPanel title="キーボード操作">
      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>Tab キーでフォーカスを移動（クリックでも可）</p>
      <div className="a11y-nav">
        {items.map((item, i) => (
          <button
            key={item}
            className={`a11y-nav-item ${focusIdx === i ? 'focused' : ''}`}
            onClick={() => setFocusIdx(i)}
            onFocus={() => setFocusIdx(i)}
          >
            {item}
          </button>
        ))}
      </div>
      <p className="demo-note">すべての操作がマウスだけでなくキーボードでも可能であるべきです。</p>
    </DemoPanel>
  )
}

export function FocusDemo() {
  const [showRing, setShowRing] = useState(true)
  return (
    <DemoPanel title="フォーカスリング">
      <div className="toggle-row">
        <button className={showRing ? 'active' : ''} onClick={() => setShowRing(true)}>フォーカス表示 ON</button>
        <button className={!showRing ? 'active' : ''} onClick={() => setShowRing(false)}>outline: none（NG）</button>
      </div>
      <button className="pseudo-button" style={{ outline: showRing ? '3px solid var(--accent)' : 'none' }}>フォーカス中のボタン</button>
      <p className="demo-note">{showRing ? 'フォーカス位置がわかります ✓' : 'キーボードユーザーが迷います ✗'}</p>
    </DemoPanel>
  )
}

export function AriaDemo() {
  const [expanded, setExpanded] = useState(false)
  return (
    <DemoPanel title="ARIA 属性">
      <button
        className="nav-btn"
        aria-expanded={expanded}
        aria-controls="menu"
        onClick={() => setExpanded(!expanded)}
      >
        メニュー {expanded ? '▲' : '▼'}
      </button>
      {expanded && (
        <div id="menu" role="menu" className="a11y-menu">
          <div role="menuitem">設定</div>
          <div role="menuitem">ログアウト</div>
        </div>
      )}
      <code className="selector-code">aria-expanded="{expanded}"</code>
    </DemoPanel>
  )
}

export function ImagesDemo() {
  const [hasAlt, setHasAlt] = useState(true)
  return (
    <DemoPanel title="alt 属性">
      <div className="toggle-row">
        <button className={hasAlt ? 'active' : ''} onClick={() => setHasAlt(true)}>alt あり</button>
        <button className={!hasAlt ? 'active' : ''} onClick={() => setHasAlt(false)}>alt なし</button>
      </div>
      <div className="a11y-image-demo">
        <div className="a11y-img-placeholder">🖼</div>
        <p>{hasAlt ? '読み上げ: "チームの集合写真"' : '読み上げ: "画像"（意味不明）'}</p>
      </div>
    </DemoPanel>
  )
}

export function ColorDemo() {
  const ratios = [{ label: '2:1', pass: false }, { label: '4.5:1', pass: true }, { label: '7:1', pass: true }]
  const [idx, setIdx] = useState(0)
  const colors = [{ bg: '#94a3b8', text: '#cbd5e1' }, { bg: '#1e40af', text: '#ffffff' }, { bg: '#0f172a', text: '#f8fafc' }]
  return (
    <DemoPanel title="コントラスト比">
      <div className="toggle-row">
        {ratios.map((r, i) => (
          <button key={r.label} className={idx === i ? 'active' : ''} onClick={() => setIdx(i)}>{r.label}</button>
        ))}
      </div>
      <div style={{ background: colors[idx].bg, color: colors[idx].text, padding: '1.5rem', borderRadius: '8px', textAlign: 'center', fontWeight: 600 }}>
        テキストの視認性
      </div>
      <p className="demo-note">{ratios[idx].pass ? '✓ WCAG AA 合格' : '✗ コントラスト不足'}</p>
    </DemoPanel>
  )
}

export function FormsDemo() {
  const [hasLabel, setHasLabel] = useState(true)
  return (
    <DemoPanel title="フォームの label">
      <div className="toggle-row">
        <button className={hasLabel ? 'active' : ''} onClick={() => setHasLabel(true)}>label あり</button>
        <button className={!hasLabel ? 'active' : ''} onClick={() => setHasLabel(false)}>placeholder だけ</button>
      </div>
      {hasLabel ? (
        <label style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.85rem' }}>
          メールアドレス
          <input className="pseudo-input" type="email" placeholder="you@example.com" />
        </label>
      ) : (
        <input className="pseudo-input" type="email" placeholder="メールアドレス" />
      )}
    </DemoPanel>
  )
}

export function TestingDemo() {
  const tools = ['Lighthouse', 'axe DevTools', 'VoiceOver', 'キーボードのみで操作']
  return (
    <DemoPanel title="a11y チェックツール">
      <div className="selector-preview">
        {tools.map((t) => <div key={t} className="selector-item">{t}</div>)}
      </div>
    </DemoPanel>
  )
}

export function NextStepsDemo() {
  return (
    <DemoPanel title="a11y の学習を続ける">
      <div className="selector-preview">
        {['WCAG 2.2 ガイドライン', 'Inclusive Components', '実際のユーザーにテスト'].map((t) => (
          <div key={t} className="selector-item">{t}</div>
        ))}
      </div>
    </DemoPanel>
  )
}

const demoMap: Record<string, React.ComponentType> = {
  intro: IntroDemo, semantic: SemanticDemo, keyboard: KeyboardDemo, focus: FocusDemo,
  aria: AriaDemo, images: ImagesDemo, color: ColorDemo, forms: FormsDemo,
  testing: TestingDemo, 'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
