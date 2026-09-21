import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

export function IntroDemo() {
  const [clicked, setClicked] = useState(false)
  const [count, setCount] = useState(0)

  return (
    <DemoPanel title="JavaScript で画面を変える">
      <div className="js-preview-box">
        <p className={clicked ? 'js-highlight' : ''}>
          {clicked ? '✨ JavaScript が動きました！' : 'ボタンを押してみてください'}
        </p>
        <button className="btn-primary" onClick={() => { setClicked(true); setCount((c) => c + 1) }}>
          クリック ({count}回)
        </button>
      </div>
      <p className="demo-note">HTML だけではボタンを押しても何も起きません。JavaScript が動きを付けます。</p>
    </DemoPanel>
  )
}

export function VariablesDemo() {
  const [name, setName] = useState('太郎')
  const [age, setAge] = useState(25)

  return (
    <DemoPanel title="変数の中身を変える">
      <div className="var-display">
        <code>const name = "{name}";</code>
        <code>let age = {age};</code>
      </div>
      <div className="js-preview-box">
        <p>こんにちは、<strong>{name}</strong>さん（{age}歳）</p>
      </div>
      <div className="controls-grid">
        <label>
          name を変更
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          age を変更
          <input type="number" value={age} onChange={(e) => setAge(+e.target.value)} />
        </label>
      </div>
    </DemoPanel>
  )
}

export function TypesDemo() {
  const samples = [
    { value: '"こんにちは"', type: 'string', label: '文字列' },
    { value: '42', type: 'number', label: '数値' },
    { value: 'true', type: 'boolean', label: '真偽値' },
    { value: 'undefined', type: 'undefined', label: '未定義' },
    { value: 'null', type: 'object', label: 'null' },
    { value: '["a","b"]', type: 'object', label: '配列' },
  ]
  const [selected, setSelected] = useState(0)

  return (
    <DemoPanel title="typeof で型を調べる">
      <div className="toggle-row wrap">
        {samples.map((s, i) => (
          <button key={s.label} className={selected === i ? 'active' : ''} onClick={() => setSelected(i)}>
            {s.label}
          </button>
        ))}
      </div>
      <div className="type-result">
        <code>typeof {samples[selected].value}</code>
        <span className="type-arrow">→</span>
        <code className="type-value">"{samples[selected].type}"</code>
      </div>
    </DemoPanel>
  )
}

export function OperatorsDemo() {
  const [a, setA] = useState(10)
  const [b, setB] = useState(3)

  const ops = [
    { sym: '+', result: a + b },
    { sym: '-', result: a - b },
    { sym: '×', result: a * b },
    { sym: '÷', result: (a / b).toFixed(2) },
    { sym: '%', result: a % b },
  ]

  return (
    <DemoPanel title="演算子を試す">
      <div className="calc-inputs">
        <input type="number" value={a} onChange={(e) => setA(+e.target.value)} />
        <span>と</span>
        <input type="number" value={b} onChange={(e) => setB(+e.target.value)} />
      </div>
      <div className="calc-results">
        {ops.map((op) => (
          <div key={op.sym} className="calc-row">
            <code>{a} {op.sym} {b}</code>
            <span>=</span>
            <strong>{op.result}</strong>
          </div>
        ))}
      </div>
    </DemoPanel>
  )
}

export function ConditionsDemo() {
  const [score, setScore] = useState(75)

  const getGrade = (s: number) => {
    if (s >= 90) return { label: '優', color: '#22c55e' }
    if (s >= 70) return { label: '良', color: '#3b82f6' }
    if (s >= 60) return { label: '可', color: '#f59e0b' }
    return { label: '要努力', color: '#ef4444' }
  }

  const grade = getGrade(score)

  return (
    <DemoPanel title="if 文で条件分岐">
      <label className="width-slider">
        点数: {score}
        <input type="range" min="0" max="100" value={score} onChange={(e) => setScore(+e.target.value)} />
      </label>
      <div className="grade-display" style={{ color: grade.color, borderColor: grade.color }}>
        {grade.label}
      </div>
      <pre className="condition-code">{`if (score >= 90) → "優"
else if (score >= 70) → "良"
else if (score >= 60) → "可"
else → "要努力"`}</pre>
    </DemoPanel>
  )
}

export function LoopsDemo() {
  const [count, setCount] = useState(5)
  const [running, setRunning] = useState(false)
  const [log, setLog] = useState<number[]>([])

  const runLoop = () => {
    setRunning(true)
    setLog([])
    const results: number[] = []
    for (let i = 0; i < count; i++) {
      results.push(i)
    }
    let step = 0
    const interval = setInterval(() => {
      if (step < results.length) {
        setLog((prev) => [...prev, results[step]])
        step++
      } else {
        clearInterval(interval)
        setRunning(false)
      }
    }, 400)
  }

  return (
    <DemoPanel title="for ループの動き">
      <label className="width-slider">
        繰り返し回数: {count}
        <input type="range" min="1" max="10" value={count} onChange={(e) => setCount(+e.target.value)} disabled={running} />
      </label>
      <button className="btn-primary" onClick={runLoop} disabled={running}>
        {running ? '実行中...' : 'ループを実行'}
      </button>
      <div className="loop-log">
        {log.length === 0 ? (
          <span className="log-empty">console.log の出力</span>
        ) : (
          log.map((n, i) => <div key={i}>i = {n}</div>)
        )}
      </div>
    </DemoPanel>
  )
}

export function FunctionsDemo() {
  const [name, setName] = useState('太郎')
  const greet = (n: string) => `こんにちは、${n}さん！`
  const add = (a: number, b: number) => a + b

  return (
    <DemoPanel title="関数を呼び出す">
      <label>
        name 引数
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <div className="func-results">
        <div className="func-row">
          <code>greet("{name}")</code>
          <span>→</span>
          <strong>"{greet(name)}"</strong>
        </div>
        <div className="func-row">
          <code>add(2, 3)</code>
          <span>→</span>
          <strong>{add(2, 3)}</strong>
        </div>
      </div>
    </DemoPanel>
  )
}

export function ArraysDemo() {
  const [items, setItems] = useState(['りんご', 'バナナ', 'みかん'])
  const [newItem, setNewItem] = useState('')

  return (
    <DemoPanel title="配列の操作">
      <code className="array-code">const fruits = {JSON.stringify(items)}</code>
      <ul className="array-list">
        {items.map((item, i) => (
          <li key={i}>
            <span className="array-index">[{i}]</span> {item}
            <button className="btn-remove" onClick={() => setItems(items.filter((_, j) => j !== i))}>×</button>
          </li>
        ))}
      </ul>
      <div className="list-input-row">
        <input value={newItem} onChange={(e) => setNewItem(e.target.value)} placeholder="追加..." onKeyDown={(e) => {
          if (e.key === 'Enter' && newItem.trim()) {
            setItems([...items, newItem])
            setNewItem('')
          }
        }} />
        <button className="btn-primary" onClick={() => {
          if (newItem.trim()) { setItems([...items, newItem]); setNewItem('') }
        }}>push</button>
      </div>
      <p className="demo-note">length: {items.length}</p>
    </DemoPanel>
  )
}

export function DomDemo() {
  const [text, setText] = useState('こんにちは！')
  const [color, setColor] = useState('#f7df1e')
  const [size, setSize] = useState(18)

  return (
    <DemoPanel title="DOM を JavaScript で変更">
      <div className="dom-preview" id="dom-target" style={{ color, fontSize: size }}>
        {text}
      </div>
      <div className="controls-grid">
        <label>
          textContent
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </label>
        <label>
          color
          <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        </label>
        <label>
          fontSize: {size}px
          <input type="range" min="12" max="36" value={size} onChange={(e) => setSize(+e.target.value)} />
        </label>
      </div>
      <p className="demo-note">JavaScript が HTML 要素のテキスト・色・サイズを変更しています</p>
    </DemoPanel>
  )
}

export function NextStepsDemo() {
  const steps = [
    { title: 'HTML', desc: '骨組み', done: true, color: '#f97316' },
    { title: 'CSS', desc: '見た目', done: true, color: '#3b82f6' },
    { title: 'JavaScript', desc: '動き', done: true, color: '#f7df1e' },
    { title: 'React', desc: 'アプリ開発', done: false, color: '#61dafb' },
    { title: 'Astro', desc: '高速サイト', done: false, color: '#ff5d01' },
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
      <p className="demo-note">JavaScript の基礎ができました！次は React に進みましょう。</p>
    </DemoPanel>
  )
}

const demoMap: Record<string, React.ComponentType> = {
  intro: IntroDemo,
  variables: VariablesDemo,
  types: TypesDemo,
  operators: OperatorsDemo,
  conditions: ConditionsDemo,
  loops: LoopsDemo,
  functions: FunctionsDemo,
  arrays: ArraysDemo,
  dom: DomDemo,
  'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
