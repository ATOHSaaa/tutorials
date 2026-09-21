import { useEffect, useState } from 'react'
import { DemoPanel } from './DemoPanel'

export function IntroDemo() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [temperature, setTemperature] = useState(26)

  return (
    <div className="intro-demos">
      <DemoPanel title="状態が変わると、画面も変わる">
        <div className="state-demo">
          <div className="state-demo-row">
            <div className="state-box">
              <span className="state-label">状態（データ）</span>
              <code className="state-value">isLoggedIn = {isLoggedIn}</code>
            </div>
            <span className="state-arrow">→</span>
            <div className="state-box state-box-ui">
              <span className="state-label">画面（UI）</span>
              <div className={`state-ui-preview ${isLoggedIn ? 'logged-in' : 'logged-out'}`}>
                {isLoggedIn ? '✓ ようこそ！' : 'ログインしてください'}
              </div>
            </div>
          </div>
          <button
            className="btn-primary"
            onClick={() => setIsLoggedIn(!isLoggedIn)}
          >
            状態を変える（{isLoggedIn ? 'ログアウト' : 'ログイン'}）
          </button>
          <p className="state-demo-note">
            ボタンを押すと <strong>状態</strong> が変わり、React が自動的に <strong>画面</strong> を書き換えます。これが宣言的 UI です。
          </p>
        </div>
      </DemoPanel>

      <DemoPanel title="身近な例：エアコンのリモコン">
        <div className="state-demo">
          <div className="state-demo-row">
            <div className="state-box">
              <span className="state-label">状態</span>
              <code className="state-value">temperature = {temperature}℃</code>
            </div>
            <span className="state-arrow">→</span>
            <div className="state-box state-box-ui">
              <span className="state-label">画面の表示</span>
              <div className="state-ui-preview temp-display">{temperature}℃</div>
            </div>
          </div>
          <div className="temp-controls">
            <button onClick={() => setTemperature((t) => t - 1)}>−</button>
            <span>温度を変更</span>
            <button onClick={() => setTemperature((t) => t + 1)}>＋</button>
          </div>
        </div>
      </DemoPanel>

      <DemoPanel title="コンポーネントの組み合わせ">
        <div className="intro-demo">
          <div className="intro-block intro-header">Header</div>
          <div className="intro-row">
            <div className="intro-block intro-sidebar">Sidebar</div>
            <div className="intro-block intro-main">Main Content</div>
          </div>
          <div className="intro-block intro-footer">Footer</div>
        </div>
      </DemoPanel>
    </div>
  )
}

export function JsxDemo() {
  const name = 'React'
  const items = ['JSX', 'コンポーネント', 'Props']

  return (
    <DemoPanel title="JSX デモ">
      <h3 className="demo-heading">こんにちは、{name}！</h3>
      <p className="demo-text">今日学ぶこと: {items.join(' / ')}</p>

      <div className="style-compare">
        <div className="style-compare-item">
          <span className="style-compare-label">① CSS クラス（className）</span>
          <div className="demo-box demo-box-class">
            CSS ファイルで定義したスタイル
          </div>
          <code className="style-compare-code">className="demo-box-class"</code>
        </div>
        <div className="style-compare-item">
          <span className="style-compare-label">② インラインスタイル（style）</span>
          <div
            style={{
              padding: '1rem',
              borderRadius: '8px',
              textAlign: 'center',
              fontSize: '0.875rem',
              color: '#eef0f7',
              background: 'linear-gradient(135deg, #61dafb33, #a855f733)',
            }}
          >
            タグに直接スタイルを書く
          </div>
          <code className="style-compare-code">style=&#123;&#123; color: &apos;blue&apos; &#125;&#125;</code>
        </div>
      </div>
    </DemoPanel>
  )
}

function WelcomeCard({ name, role }: { name: string; role: string }) {
  return (
    <div className="welcome-card">
      <div className="welcome-avatar">{name[0]}</div>
      <div>
        <strong>{name}</strong>
        <span className="welcome-role">{role}</span>
      </div>
    </div>
  )
}

export function ComponentDemo() {
  return (
    <div className="component-demos">
      <DemoPanel title="① 部品（関数）を1回書く">
        <div className="component-explain">
          <pre className="component-code-preview">{`function WelcomeCard({ name, role }) {
  return (
    <div className="card">
      <strong>{name}</strong>
      <span>{role}</span>
    </div>
  );
}`}</pre>
          <p className="component-explain-note">
            この関数が「部品の設計図」です。中身を書くだけで OK です。
          </p>
        </div>
      </DemoPanel>

      <DemoPanel title="② タグのように何度でも使える">
        <div className="welcome-list">
          <WelcomeCard name="太郎" role="エンジニア" />
          <WelcomeCard name="花子" role="デザイナー" />
          <WelcomeCard name="次郎" role="PM" />
        </div>
        <p className="component-explain-note">
          <code>&lt;WelcomeCard /&gt;</code> を3回書いただけ。同じ部品をコピペせずに再利用しています。
        </p>
      </DemoPanel>
    </div>
  )
}

function ProfileCard({
  name,
  age,
  hobby,
  color,
}: {
  name: string
  age: number
  hobby: string
  color: string
}) {
  return (
    <div className="profile-card" style={{ borderColor: color }}>
      <div className="profile-avatar" style={{ background: color }}>
        {name[0]}
      </div>
      <h4>{name}</h4>
      <p>{age}歳 · 趣味: {hobby}</p>
    </div>
  )
}

export function PropsDemo() {
  const profiles = [
    { name: 'さくら', age: 22, hobby: '読書', color: '#f472b6' },
    { name: 'けんた', age: 28, hobby: 'キャンプ', color: '#34d399' },
    { name: 'ゆい', age: 25, hobby: '料理', color: '#60a5fa' },
  ]

  return (
    <DemoPanel title="Props でデータを渡す">
      <div className="profile-grid">
        {profiles.map((p) => (
          <ProfileCard key={p.name} {...p} />
        ))}
      </div>
    </DemoPanel>
  )
}

export function StateDemo() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  return (
    <DemoPanel title="useState カウンター">
      <div className="counter-demo">
        <div className="counter-display">{count}</div>
        <div className="counter-controls">
          <button onClick={() => setCount((c) => c - step)}>−{step}</button>
          <button className="btn-primary" onClick={() => setCount((c) => c + step)}>
            +{step}
          </button>
          <button onClick={() => setCount(0)}>リセット</button>
        </div>
        <div className="step-selector">
          <span>ステップ:</span>
          {[1, 5, 10].map((s) => (
            <button
              key={s}
              className={step === s ? 'active' : ''}
              onClick={() => setStep(s)}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </DemoPanel>
  )
}

export function EventDemo() {
  const [message, setMessage] = useState('')
  const [log, setLog] = useState<string[]>([])

  const addLog = (event: string) => {
    setLog((prev) => [`${event} — ${new Date().toLocaleTimeString()}`, ...prev].slice(0, 5))
  }

  return (
    <DemoPanel title="イベントハンドラ">
      <div className="event-demo">
        <input
          type="text"
          placeholder="入力してみてください"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value)
            addLog(`入力: "${e.target.value}"`)
          }}
          onFocus={() => addLog('フォーカス')}
        />
        <div className="event-buttons">
          <button onClick={() => addLog('クリック！')}>クリック</button>
          <button onDoubleClick={() => addLog('ダブルクリック！')}>ダブルクリック</button>
          <button onMouseEnter={() => addLog('マウスオーバー')}>ホバー</button>
        </div>
        <div className="event-log">
          {log.length === 0 ? (
            <span className="event-log-empty">イベントログ（操作してみてください）</span>
          ) : (
            log.map((entry, i) => <div key={i}>{entry}</div>)
          )}
        </div>
      </div>
    </DemoPanel>
  )
}

export function ConditionalDemo() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  return (
    <DemoPanel title="条件付きレンダリング">
      <div className="conditional-demo">
        <div className="status-badge" data-status={isLoggedIn ? 'on' : 'off'}>
          {isLoggedIn ? '✓ ログイン中' : '✗ 未ログイン'}
        </div>

        <button className="btn-primary" onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? 'ログアウト' : 'ログイン'}
        </button>

        {isLoggedIn && (
          <div className="logged-in-panel">
            <p>ようこそ、ユーザーさん！</p>
            <button onClick={() => setShowDetails(!showDetails)}>
              {showDetails ? '詳細を隠す' : '詳細を表示'}
            </button>
            {showDetails && (
              <div className="details-box">
                <p>プラン: 無料</p>
                <p>最終ログイン: 今日</p>
              </div>
            )}
          </div>
        )}
      </div>
    </DemoPanel>
  )
}

export function ListDemo() {
  const [items, setItems] = useState([
    { id: 1, text: 'React を学ぶ', done: true },
    { id: 2, text: 'コンポーネントを作る', done: true },
    { id: 3, text: 'アプリを公開する', done: false },
  ])
  const [newItem, setNewItem] = useState('')

  const toggle = (id: number) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, done: !item.done } : item)),
    )
  }

  const addItem = () => {
    if (!newItem.trim()) return
    setItems((prev) => [...prev, { id: Date.now(), text: newItem, done: false }])
    setNewItem('')
  }

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <DemoPanel title="リストと key">
      <div className="list-demo">
        <div className="list-input-row">
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="新しいタスク..."
            onKeyDown={(e) => e.key === 'Enter' && addItem()}
          />
          <button className="btn-primary" onClick={addItem}>追加</button>
        </div>
        <ul className="todo-list">
          {items.map((item) => (
            <li key={item.id} className={item.done ? 'done' : ''}>
              <input
                type="checkbox"
                checked={item.done}
                onChange={() => toggle(item.id)}
              />
              <span>{item.text}</span>
              <button className="btn-remove" onClick={() => removeItem(item.id)}>×</button>
            </li>
          ))}
        </ul>
      </div>
    </DemoPanel>
  )
}

export function EffectDemo() {
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(true)

  useEffect(() => {
    if (!running) return
    const id = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(id)
  }, [running])

  return (
    <DemoPanel title="useEffect タイマー">
      <div className="effect-demo">
        <div className="timer-display">{seconds}<span>秒</span></div>
        <div className="counter-controls">
          <button className="btn-primary" onClick={() => setRunning(!running)}>
            {running ? '⏸ 停止' : '▶ 再開'}
          </button>
          <button onClick={() => setSeconds(0)}>リセット</button>
        </div>
        <p className="effect-note">
          {running
            ? 'useEffect が 1 秒ごとにカウントを更新中...'
            : 'タイマー停止中（クリーンアップ済み）'}
        </p>
      </div>
    </DemoPanel>
  )
}

export function FormDemo() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const update = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <DemoPanel title="フォーム送信完了">
        <div className="form-success">
          <div className="success-icon">✓</div>
          <h4>送信しました！</h4>
          <pre>{JSON.stringify(form, null, 2)}</pre>
          <button onClick={() => setSubmitted(false)}>もう一度</button>
        </div>
      </DemoPanel>
    )
  }

  return (
    <DemoPanel title="制御コンポーネント フォーム">
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          名前
          <input
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            placeholder="山田 太郎"
            required
          />
        </label>
        <label>
          メール
          <input
            type="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            placeholder="taro@example.com"
            required
          />
        </label>
        <label>
          メッセージ
          <textarea
            value={form.message}
            onChange={(e) => update('message', e.target.value)}
            placeholder="メッセージを入力..."
            rows={3}
          />
        </label>
        <button type="submit" className="btn-primary btn-full">送信する</button>
      </form>
    </DemoPanel>
  )
}

const demoMap: Record<string, React.ComponentType> = {
  intro: IntroDemo,
  jsx: JsxDemo,
  components: ComponentDemo,
  props: PropsDemo,
  state: StateDemo,
  events: EventDemo,
  conditional: ConditionalDemo,
  lists: ListDemo,
  effects: EffectDemo,
  forms: FormDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
