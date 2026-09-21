import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

export function IntroDemo() {
  const [mode, setMode] = useState<'js' | 'ts'>('js')
  const [value, setValue] = useState('太郎')
  const [error, setError] = useState<string | null>(null)

  const handleChange = (v: string) => {
    setValue(v)
    if (mode === 'ts' && !isNaN(Number(v)) && v !== '') {
      setError('型エラー: string 型の変数に number を代入できません')
    } else {
      setError(null)
    }
  }

  return (
    <DemoPanel title="JavaScript vs TypeScript">
      <div className="toggle-row">
        <button className={mode === 'js' ? 'active' : ''} onClick={() => { setMode('js'); setError(null) }}>JavaScript</button>
        <button className={mode === 'ts' ? 'active' : ''} onClick={() => setMode('ts')}>TypeScript</button>
      </div>
      <code className="type-code">
        {mode === 'js' ? `const name = "${value}";` : `const name: string = "${value}";`}
      </code>
      <label>
        値を変更してみる
        <input value={value} onChange={(e) => handleChange(e.target.value)} placeholder="文字列を入力" />
      </label>
      {error && <div className="ts-error">✗ {error}</div>}
      {!error && mode === 'ts' && <div className="ts-ok">✓ 型チェック OK</div>}
      <p className="demo-note">
        {mode === 'js' ? 'JS では実行時までエラーに気づけない' : 'TS では代入時にエラーを検出できる'}
      </p>
    </DemoPanel>
  )
}

export function BasicTypesDemo() {
  const [type, setType] = useState<'string' | 'number' | 'boolean'>('string')
  const values = { string: '"こんにちは"', number: '42', boolean: 'true' }

  return (
    <DemoPanel title="基本の型">
      <div className="toggle-row">
        {(['string', 'number', 'boolean'] as const).map((t) => (
          <button key={t} className={type === t ? 'active' : ''} onClick={() => setType(t)}>{t}</button>
        ))}
      </div>
      <div className="type-annotate-demo">
        <code>const value: <span className="type-highlight">{type}</span> = {values[type]};</code>
      </div>
      <div className="type-preview">
        型: <strong>{type}</strong> → 値: <strong>{values[type]}</strong>
      </div>
    </DemoPanel>
  )
}

interface DemoUser {
  name: string
  age: number
  email?: string
}

export function InterfacesDemo() {
  const [user, setUser] = useState<DemoUser>({ name: '太郎', age: 25 })
  const [field, setField] = useState<'name' | 'age' | 'email'>('name')
  const [input, setInput] = useState('')

  const update = () => {
    if (field === 'age') {
      const n = Number(input)
      if (isNaN(n)) return
      setUser({ ...user, age: n })
    } else {
      setUser({ ...user, [field]: input })
    }
    setInput('')
  }

  return (
    <DemoPanel title="interface User">
      <pre className="interface-code">{`interface User {
  name: string;
  age: number;
  email?: string;
}`}</pre>
      <div className="user-card">
        <div><span>name</span><strong>{user.name}</strong></div>
        <div><span>age</span><strong>{user.age}</strong></div>
        <div><span>email</span><strong>{user.email ?? '（未設定）'}</strong></div>
      </div>
      <div className="list-input-row">
        <select value={field} onChange={(e) => setField(e.target.value as typeof field)}>
          <option value="name">name</option>
          <option value="age">age</option>
          <option value="email">email</option>
        </select>
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="新しい値..." />
        <button className="btn-primary" onClick={update}>更新</button>
      </div>
    </DemoPanel>
  )
}

export function FunctionsDemo() {
  const [a, setA] = useState(5)
  const [b, setB] = useState(3)

  const add = (x: number, y: number): number => x + y

  return (
    <DemoPanel title="関数の型">
      <pre className="interface-code">{`function add(a: number, b: number): number {
  return a + b;
}`}</pre>
      <div className="calc-inputs">
        <input type="number" value={a} onChange={(e) => setA(+e.target.value)} />
        <span>+</span>
        <input type="number" value={b} onChange={(e) => setB(+e.target.value)} />
        <span>=</span>
        <strong className="calc-result">{add(a, b)}</strong>
      </div>
      <p className="demo-note">引数・戻り値が number 型と宣言されている</p>
    </DemoPanel>
  )
}

export function ArraysObjectsDemo() {
  const fruits: string[] = ['りんご', 'バナナ', 'みかん']
  const person: { name: string; scores: number[] } = {
    name: '太郎',
    scores: [90, 85, 72],
  }

  return (
    <DemoPanel title="配列とオブジェクトの型">
      <div className="type-blocks">
        <div className="type-block">
          <code>const fruits: string[]</code>
          <ul>{fruits.map((f, i) => <li key={i}>{f}</li>)}</ul>
        </div>
        <div className="type-block">
          <code>const person: &#123; name: string; scores: number[] &#125;</code>
          <div className="person-display">
            <strong>{person.name}</strong>
            <span>scores: [{person.scores.join(', ')}]</span>
          </div>
        </div>
      </div>
    </DemoPanel>
  )
}

export function UnionOptionalDemo() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')

  const statusConfig = {
    loading: { label: '読み込み中...', color: '#f59e0b' },
    success: { label: '成功！', color: '#22c55e' },
    error: { label: 'エラー', color: '#ef4444' },
  }

  return (
    <DemoPanel title="ユニオン型 Status">
      <code className="type-code">type Status = "loading" | "success" | "error";</code>
      <div className="toggle-row">
        {(['loading', 'success', 'error'] as const).map((s) => (
          <button key={s} className={status === s ? 'active' : ''} onClick={() => setStatus(s)}>{s}</button>
        ))}
      </div>
      <div className="status-display" style={{ color: statusConfig[status].color, borderColor: statusConfig[status].color }}>
        {statusConfig[status].label}
      </div>
      <p className="demo-note">定義された3つの値以外は代入できません</p>
    </DemoPanel>
  )
}

export function GenericsDemo() {
  const [type, setType] = useState<'string' | 'number'>('string')
  const stringArr = ['りんご', 'バナナ', 'みかん']
  const numberArr = [10, 20, 30]

  const first = <T,>(arr: T[]): T | undefined => arr[0]
  const arr = type === 'string' ? stringArr : numberArr
  const result = first(arr as string[] & number[])

  return (
    <DemoPanel title="ジェネリクス first&lt;T&gt;">
      <pre className="interface-code">{`function first<T>(arr: T[]): T | undefined {
  return arr[0];
}`}</pre>
      <div className="toggle-row">
        <button className={type === 'string' ? 'active' : ''} onClick={() => setType('string')}>string[]</button>
        <button className={type === 'number' ? 'active' : ''} onClick={() => setType('number')}>number[]</button>
      </div>
      <div className="generic-result">
        <code>first&lt;{type}&gt;([{arr.join(', ')}])</code>
        <span>→</span>
        <strong>{String(result)}</strong>
        <span className="return-type">（戻り値: {type}）</span>
      </div>
    </DemoPanel>
  )
}

export function InferenceDemo() {
  const examples = [
    { code: 'const name = "太郎"', inferred: 'string' },
    { code: 'const age = 25', inferred: 'number' },
    { code: 'const items = [1, 2, 3]', inferred: 'number[]' },
    { code: 'const flag = true', inferred: 'boolean' },
  ]
  const [selected, setSelected] = useState(0)

  return (
    <DemoPanel title="型推論">
      <div className="inference-list">
        {examples.map((ex, i) => (
          <button key={i} className={`inference-item ${selected === i ? 'active' : ''}`} onClick={() => setSelected(i)}>
            <code>{ex.code}</code>
          </button>
        ))}
      </div>
      <div className="inference-result">
        TypeScript の推論 → <strong>{examples[selected].inferred}</strong>
      </div>
      <p className="demo-note">型を書かなくても、値から自動的に型が決まります</p>
    </DemoPanel>
  )
}

export function ReactTsDemo() {
  const [label, setLabel] = useState('クリック')
  const [count, setCount] = useState(0)

  return (
    <DemoPanel title="React + TypeScript">
      <pre className="interface-code">{`interface ButtonProps {
  label: string;
  onClick: () => void;
}

function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}`}</pre>
      <div className="react-ts-preview">
        <button className="btn-primary" onClick={() => setCount((c) => c + 1)}>
          {label}（{count}回）
        </button>
      </div>
      <label>
        label prop
        <input value={label} onChange={(e) => setLabel(e.target.value)} />
      </label>
    </DemoPanel>
  )
}

export function NextStepsDemo() {
  const steps = [
    { title: 'HTML', done: true, color: '#f97316' },
    { title: 'CSS', done: true, color: '#3b82f6' },
    { title: 'JavaScript', done: true, color: '#f7df1e' },
    { title: 'TypeScript', done: true, color: '#3178c6' },
    { title: 'React', done: false, color: '#61dafb' },
    { title: 'Astro', done: false, color: '#ff5d01' },
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
            </div>
            {i < steps.length - 1 && <div className="roadmap-line" />}
          </div>
        ))}
      </div>
      <p className="demo-note">TypeScript を学んだら、React を型安全に書けます！</p>
    </DemoPanel>
  )
}

const demoMap: Record<string, React.ComponentType> = {
  intro: IntroDemo,
  'basic-types': BasicTypesDemo,
  interfaces: InterfacesDemo,
  functions: FunctionsDemo,
  'arrays-objects': ArraysObjectsDemo,
  'union-optional': UnionOptionalDemo,
  generics: GenericsDemo,
  inference: InferenceDemo,
  'react-ts': ReactTsDemo,
  'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
