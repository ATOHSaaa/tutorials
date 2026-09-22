import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

export function IntroDemo() {
  const tree = ['document', '└ html', '  ├ head', '  └ body', '    ├ h1', '    └ p']
  return (
    <DemoPanel title="DOM ツリー">
      <pre className="interface-code">{tree.join('\n')}</pre>
      <p className="demo-note">HTML の各要素がノードとしてツリー構造になります</p>
    </DemoPanel>
  )
}

export function SelectingDemo() {
  const [selector, setSelector] = useState('#title')
  const results: Record<string, string> = {
    '#title': '<h1 id="title">見出し</h1>',
    '.card': '<div class="card">カード1</div>, <div class="card">カード2</div>',
    'button': '<button>送信</button>',
  }
  return (
    <DemoPanel title="要素の取得">
      <div className="toggle-row wrap">
        {Object.keys(results).map((s) => (
          <button key={s} className={selector === s ? 'active' : ''} onClick={() => setSelector(s)}>{s}</button>
        ))}
      </div>
      <code className="selector-code">document.querySelector('{selector}')</code>
      <div className="dom-result">{results[selector]}</div>
    </DemoPanel>
  )
}

export function ModifyingDemo() {
  const [mode, setMode] = useState<'text' | 'html'>('text')
  const [value, setValue] = useState('こんにちは')
  const display = mode === 'text' ? value : <strong>{value}</strong>
  return (
    <DemoPanel title="内容の変更">
      <div className="toggle-row">
        <button className={mode === 'text' ? 'active' : ''} onClick={() => setMode('text')}>textContent</button>
        <button className={mode === 'html' ? 'active' : ''} onClick={() => setMode('html')}>innerHTML</button>
      </div>
      <input className="pseudo-input" value={value} onChange={(e) => setValue(e.target.value)} style={{ width: '100%', marginBottom: '0.75rem' }} />
      <div className="dom-preview">{display}</div>
    </DemoPanel>
  )
}

export function AttributesDemo() {
  const [active, setActive] = useState(false)
  return (
    <DemoPanel title="classList">
      <div className={`dom-box ${active ? 'dom-box-active' : ''}`}>
        {active ? 'active クラス付き' : '通常状態'}
      </div>
      <button className="btn-primary" style={{ width: '100%', marginTop: '0.75rem' }} onClick={() => setActive(!active)}>
        classList.toggle('active')
      </button>
    </DemoPanel>
  )
}

export function StylesDemo() {
  const [useClass, setUseClass] = useState(true)
  return (
    <DemoPanel title="スタイルの変更">
      <div className="toggle-row">
        <button className={useClass ? 'active' : ''} onClick={() => setUseClass(true)}>CSS クラス</button>
        <button className={!useClass ? 'active' : ''} onClick={() => setUseClass(false)}>style プロパティ</button>
      </div>
      <div
        className={useClass ? 'dom-styled-box' : 'dom-box'}
        style={useClass ? undefined : { backgroundColor: '#3b82f6', color: '#fff', padding: '1rem', borderRadius: '8px' }}
      >
        {useClass ? '.dom-styled-box クラス適用' : 'el.style.backgroundColor 適用'}
      </div>
    </DemoPanel>
  )
}

export function EventsDemo() {
  const [count, setCount] = useState(0)
  const [log, setLog] = useState<string[]>([])
  const click = () => {
    setCount((c) => c + 1)
    setLog((l) => [`click イベント発火（${count + 1}回目）`, ...l].slice(0, 4))
  }
  return (
    <DemoPanel title="イベントリスナー">
      <button className="btn-primary" style={{ width: '100%' }} onClick={click}>
        クリック（{count} 回）
      </button>
      <div className="dom-log">
        {log.length === 0 ? <div className="dom-log-empty">クリックしてイベントを発火</div> : log.map((l, i) => <div key={i} className="dom-log-line">{l}</div>)}
      </div>
    </DemoPanel>
  )
}

export function DelegationDemo() {
  const [items, setItems] = useState(['りんご', 'みかん', 'ぶどう'])
  const [selected, setSelected] = useState<string | null>(null)
  return (
    <DemoPanel title="イベント委譲">
      <ul className="dom-list">
        {items.map((item) => (
          <li
            key={item}
            className={`dom-list-item ${selected === item ? 'selected' : ''}`}
            onClick={() => setSelected(item)}
          >
            {item}
          </li>
        ))}
      </ul>
      <button className="nav-btn" style={{ marginTop: '0.5rem' }} onClick={() => setItems([...items, `新規${items.length + 1}`])}>
        項目を追加（委譲で動作）
      </button>
      {selected && <p className="demo-note">選択: {selected}</p>}
    </DemoPanel>
  )
}

export function CreatingDemo() {
  const [items, setItems] = useState(['項目 1', '項目 2'])
  const [input, setInput] = useState('')
  const add = () => {
    if (input.trim()) {
      setItems([...items, input])
      setInput('')
    }
  }
  return (
    <DemoPanel title="要素の作成">
      <ul className="dom-list">
        {items.map((item, i) => (
          <li key={i} className="dom-list-item">
            {item}
            <button className="dom-remove" onClick={() => setItems(items.filter((_, j) => j !== i))}>×</button>
          </li>
        ))}
      </ul>
      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem' }}>
        <input className="pseudo-input" value={input} onChange={(e) => setInput(e.target.value)} placeholder="新しい項目" style={{ flex: 1 }} />
        <button className="btn-primary" onClick={add}>append</button>
      </div>
    </DemoPanel>
  )
}

export function TraversalDemo() {
  const [focus, setFocus] = useState<'parent' | 'child' | 'sibling'>('parent')
  const labels = { parent: 'parentElement → <ul>', child: 'children → <li>×3', sibling: 'nextElementSibling → 次の <li>' }
  return (
    <DemoPanel title="DOM ツリーの走査">
      <div className="toggle-row">
        {(['parent', 'child', 'sibling'] as const).map((k) => (
          <button key={k} className={focus === k ? 'active' : ''} onClick={() => setFocus(k)}>{k}</button>
        ))}
      </div>
      <div className="dom-tree-visual">
        <div className="dom-tree-node">ul {focus === 'parent' && '←'}</div>
        <div className="dom-tree-children">
          <div className="dom-tree-node">li {focus === 'child' && '←'}</div>
          <div className="dom-tree-node">li {focus === 'sibling' && '←'}</div>
          <div className="dom-tree-node">li</div>
        </div>
      </div>
      <code className="selector-code">{labels[focus]}</code>
    </DemoPanel>
  )
}

export function NextStepsDemo() {
  const path = ['HTML', 'CSS', 'JS', 'DOM 操作', 'React']
  return (
    <DemoPanel title="学習の道筋">
      <div className="dom-path">
        {path.map((p, i) => (
          <span key={p} className="dom-path-item">
            <span className={p === 'DOM 操作' ? 'dom-path-current' : ''}>{p}</span>
            {i < path.length - 1 && <span className="dom-path-arrow">→</span>}
          </span>
        ))}
      </div>
      <p className="demo-note">DOM を理解すると React の裏側が見えてきます！</p>
    </DemoPanel>
  )
}

const demoMap: Record<string, React.ComponentType> = {
  intro: IntroDemo,
  selecting: SelectingDemo,
  modifying: ModifyingDemo,
  attributes: AttributesDemo,
  styles: StylesDemo,
  events: EventsDemo,
  delegation: DelegationDemo,
  creating: CreatingDemo,
  traversal: TraversalDemo,
  'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
