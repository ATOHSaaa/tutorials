import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

export function IntroDemo() {
  const [withCss, setWithCss] = useState(true)

  return (
    <DemoPanel title="CSS あり vs CSS なし">
      <div className="toggle-row">
        <button className={withCss ? 'active' : ''} onClick={() => setWithCss(true)}>CSS あり</button>
        <button className={!withCss ? 'active' : ''} onClick={() => setWithCss(false)}>CSS なし</button>
      </div>
      <div className="compare-preview">
        {withCss ? (
          <div className="styled-card">
            <h3>こんにちは！</h3>
            <p>CSS で色・余白・角丸を設定しています。</p>
          </div>
        ) : (
          <div>
            <h3>こんにちは！</h3>
            <p>CSS なしの素の HTML です。</p>
          </div>
        )}
      </div>
      <p className="demo-note">同じ HTML、見た目がまったく違います。</p>
    </DemoPanel>
  )
}

export function SelectorsDemo() {
  const [selector, setSelector] = useState<'element' | 'class' | 'id'>('class')

  const items = [
    { id: 'hero', className: 'item-card highlight', tag: 'div', text: 'id="hero"' },
    { id: '', className: 'item-card', tag: 'div', text: 'class="item-card"' },
    { id: '', className: 'item-card', tag: 'p', text: '<p> 要素' },
    { id: '', className: 'item-card highlight', tag: 'div', text: 'class="highlight"' },
  ]

  const isSelected = (item: typeof items[0]) => {
    if (selector === 'element') return item.tag === 'p'
    if (selector === 'class') return item.className.includes('highlight')
    return item.id === 'hero'
  }

  const selectorLabel = { element: 'p { }', class: '.highlight { }', id: '#hero { }' }

  return (
    <DemoPanel title="セレクタで要素を選ぶ">
      <div className="toggle-row">
        {(['element', 'class', 'id'] as const).map((s) => (
          <button key={s} className={selector === s ? 'active' : ''} onClick={() => setSelector(s)}>
            {s === 'element' ? 'p' : s === 'class' ? '.highlight' : '#hero'}
          </button>
        ))}
      </div>
      <code className="selector-code">{selectorLabel[selector]}</code>
      <div className="selector-preview">
        {items.map((item, i) => (
          <div
            key={i}
            className={`selector-item ${isSelected(item) ? 'selected' : ''}`}
          >
            {item.text}
          </div>
        ))}
      </div>
      <p className="demo-note">オレンジに光っている要素が、選択された要素です。</p>
    </DemoPanel>
  )
}

export function ColorsDemo() {
  const [color, setColor] = useState('#3b82f6')
  const [bg, setBg] = useState('#eff6ff')

  const presets = ['#3b82f6', '#ec4899', '#22c55e', '#f97316', '#8b5cf6']

  return (
    <DemoPanel title="色を変えてみる">
      <div className="color-preview" style={{ color, backgroundColor: bg }}>
        <p>文字色と背景色を変更中</p>
        <span style={{ fontFamily: 'monospace', fontSize: '0.8rem' }}>{color} / {bg}</span>
      </div>
      <div className="slider-group">
        <label>文字色</label>
        <div className="color-presets">
          {presets.map((c) => (
            <button
              key={c}
              className={`color-swatch ${color === c ? 'active' : ''}`}
              style={{ background: c }}
              onClick={() => setColor(c)}
            />
          ))}
        </div>
      </div>
      <div className="slider-group">
        <label>背景色</label>
        <input type="range" min="0" max="360" value={parseInt(bg.slice(1), 16) % 360} onChange={() => {
          const hues = ['#eff6ff', '#fdf2f8', '#f0fdf4', '#fff7ed', '#f5f3ff']
          setBg(hues[Math.floor(Math.random() * hues.length)])
        }} />
        <div className="color-presets">
          {['#eff6ff', '#fdf2f8', '#f0fdf4', '#fff7ed', '#f5f3ff'].map((c) => (
            <button
              key={c}
              className={`color-swatch ${bg === c ? 'active' : ''}`}
              style={{ background: c, border: '1px solid #ccc' }}
              onClick={() => setBg(c)}
            />
          ))}
        </div>
      </div>
    </DemoPanel>
  )
}

export function TextDemo() {
  const [fontSize, setFontSize] = useState(16)
  const [fontWeight, setFontWeight] = useState(400)
  const [textAlign, setTextAlign] = useState<'left' | 'center' | 'right'>('left')
  const [lineHeight, setLineHeight] = useState(1.6)

  return (
    <DemoPanel title="テキストスタイルを調整">
      <div
        className="text-preview"
        style={{ fontSize, fontWeight, textAlign, lineHeight }}
      >
        <p>CSS でテキストの見た目を自由に変えられます。フォントサイズ、太さ、配置、行間を調整して、読みやすい文章を作りましょう。</p>
      </div>
      <div className="controls-grid">
        <label>
          font-size: {fontSize}px
          <input type="range" min="12" max="32" value={fontSize} onChange={(e) => setFontSize(+e.target.value)} />
        </label>
        <label>
          font-weight: {fontWeight}
          <input type="range" min="300" max="700" step="100" value={fontWeight} onChange={(e) => setFontWeight(+e.target.value)} />
        </label>
        <label>
          line-height: {lineHeight}
          <input type="range" min="1" max="2.5" step="0.1" value={lineHeight} onChange={(e) => setLineHeight(+e.target.value)} />
        </label>
        <div className="toggle-row">
          {(['left', 'center', 'right'] as const).map((a) => (
            <button key={a} className={textAlign === a ? 'active' : ''} onClick={() => setTextAlign(a)}>
              {a}
            </button>
          ))}
        </div>
      </div>
    </DemoPanel>
  )
}

export function BoxModelDemo() {
  const [padding, setPadding] = useState(16)
  const [margin, setMargin] = useState(16)
  const [border, setBorder] = useState(2)

  return (
    <DemoPanel title="ボックスモデルを体験">
      <div className="box-model-outer" style={{ margin }}>
        <div className="box-model-border" style={{ borderWidth: border }}>
          <div className="box-model-padding" style={{ padding }}>
            <div className="box-model-content">content</div>
          </div>
        </div>
      </div>
      <div className="box-legend">
        <span className="legend-margin">margin</span>
        <span className="legend-border">border</span>
        <span className="legend-padding">padding</span>
        <span className="legend-content">content</span>
      </div>
      <div className="controls-grid">
        <label>padding: {padding}px<input type="range" min="0" max="48" value={padding} onChange={(e) => setPadding(+e.target.value)} /></label>
        <label>margin: {margin}px<input type="range" min="0" max="48" value={margin} onChange={(e) => setMargin(+e.target.value)} /></label>
        <label>border: {border}px<input type="range" min="0" max="8" value={border} onChange={(e) => setBorder(+e.target.value)} /></label>
      </div>
    </DemoPanel>
  )
}

export function FlexboxDemo() {
  const [justify, setJustify] = useState('center')
  const [align, setAlign] = useState('center')
  const [direction, setDirection] = useState<'row' | 'column'>('row')

  const justifyOptions = ['flex-start', 'center', 'flex-end', 'space-between', 'space-around']
  const alignOptions = ['flex-start', 'center', 'flex-end', 'stretch']

  return (
    <DemoPanel title="Flexbox で配置">
      <div
        className="flex-container"
        style={{ justifyContent: justify, alignItems: align, flexDirection: direction }}
      >
        {[1, 2, 3].map((n) => (
          <div key={n} className="flex-item">{n}</div>
        ))}
      </div>
      <div className="controls-grid">
        <label>justify-content</label>
        <div className="toggle-row wrap">
          {justifyOptions.map((j) => (
            <button key={j} className={justify === j ? 'active' : ''} onClick={() => setJustify(j)}>{j}</button>
          ))}
        </div>
        <label>align-items</label>
        <div className="toggle-row wrap">
          {alignOptions.map((a) => (
            <button key={a} className={align === a ? 'active' : ''} onClick={() => setAlign(a)}>{a}</button>
          ))}
        </div>
        <div className="toggle-row">
          <button className={direction === 'row' ? 'active' : ''} onClick={() => setDirection('row')}>row（横）</button>
          <button className={direction === 'column' ? 'active' : ''} onClick={() => setDirection('column')}>column（縦）</button>
        </div>
      </div>
    </DemoPanel>
  )
}

export function GridDemo() {
  const [cols, setCols] = useState(3)

  return (
    <DemoPanel title="Grid で格子配置">
      <div
        className="grid-container"
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
      >
        {Array.from({ length: cols * 2 }, (_, i) => (
          <div key={i} className="grid-item">{i + 1}</div>
        ))}
      </div>
      <div className="toggle-row">
        {[2, 3, 4].map((n) => (
          <button key={n} className={cols === n ? 'active' : ''} onClick={() => setCols(n)}>
            {n} 列
          </button>
        ))}
      </div>
      <code className="selector-code">grid-template-columns: repeat({cols}, 1fr);</code>
    </DemoPanel>
  )
}

export function PseudoDemo() {
  return (
    <DemoPanel title="疑似クラスを体験">
      <div className="pseudo-demo-area">
        <a href="#" className="pseudo-link" onClick={(e) => e.preventDefault()}>
          リンクにホバーしてみて
        </a>
        <button className="pseudo-button">ボタンを押してみて</button>
        <input className="pseudo-input" placeholder="クリックしてフォーカス" />
      </div>
      <ul className="pseudo-list">
        <li>1番目の項目（:first-child）</li>
        <li>2番目の項目</li>
        <li>3番目の項目（:last-child）</li>
      </ul>
      <p className="demo-note">:hover、:active、:focus、:first-child、:last-child の効果を確認してください。</p>
    </DemoPanel>
  )
}

export function ResponsiveDemo() {
  const [width, setWidth] = useState(600)

  const isMobile = width <= 480

  return (
    <DemoPanel title="レスポンシブの切り替え">
      <label className="width-slider">
        画面幅: {width}px {isMobile ? '（スマホ）' : '（PC）'}
        <input type="range" min="280" max="700" value={width} onChange={(e) => setWidth(+e.target.value)} />
      </label>
      <div className="responsive-frame" style={{ width }}>
        <div className="responsive-layout" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
          <div className="responsive-sidebar">Sidebar</div>
          <div className="responsive-main">Main Content</div>
        </div>
      </div>
      <code className="selector-code">
        {isMobile ? '@media (max-width: 480px) { flex-direction: column; }' : '/* PC: 横並び */'}
      </code>
    </DemoPanel>
  )
}

export function NextStepsDemo() {
  const steps = [
    { title: 'HTML', desc: '骨組み', done: true, color: '#f97316' },
    { title: 'CSS', desc: '見た目', done: true, color: '#3b82f6' },
    { title: 'JavaScript', desc: '動き', done: false, color: '#eab308' },
    { title: 'React', desc: 'アプリ開発', done: false, color: '#61dafb' },
  ]

  return (
    <DemoPanel title="学習ロードマップ">
      <div className="roadmap">
        {steps.map((step, i) => (
          <div key={step.title} className="roadmap-step">
            <div className="roadmap-circle done" style={{ borderColor: step.color, color: step.done ? step.color : undefined }}>
              {step.done ? '✓' : i + 1}
            </div>
            <div className="roadmap-info">
              <strong style={{ color: step.color }}>{step.title}</strong>
              <span>{step.desc}</span>
            </div>
            {i < steps.length - 1 && <div className="roadmap-line" />}
          </div>
        ))}
      </div>
      <p className="demo-note">HTML と CSS の基礎ができました！</p>
    </DemoPanel>
  )
}

const demoMap: Record<string, React.ComponentType> = {
  intro: IntroDemo,
  selectors: SelectorsDemo,
  colors: ColorsDemo,
  text: TextDemo,
  'box-model': BoxModelDemo,
  flexbox: FlexboxDemo,
  grid: GridDemo,
  pseudo: PseudoDemo,
  responsive: ResponsiveDemo,
  'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
