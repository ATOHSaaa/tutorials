import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

export function IntroDemo() {
  return (
    <DemoPanel title="HTML フォームの基本">
      <form className="form-demo" onSubmit={(e) => e.preventDefault()}>
        <label>名前<input className="pseudo-input" type="text" placeholder="山田太郎" /></label>
        <button className="btn-primary" type="submit">送信</button>
      </form>
      <p className="demo-note">フォームはユーザー入力をサーバーに送るための仕組みです。</p>
    </DemoPanel>
  )
}

export function ControlledDemo() {
  const [name, setName] = useState('')
  return (
    <DemoPanel title="制御コンポーネント">
      <input className="pseudo-input" value={name} onChange={(e) => setName(e.target.value)} placeholder="名前を入力" />
      <p style={{ marginTop: '0.75rem', fontSize: '0.9rem' }}>入力値: <strong style={{ color: 'var(--accent)' }}>{name || '（空）'}</strong></p>
      <code className="selector-code">useState で value を管理</code>
    </DemoPanel>
  )
}

export function ValidationDemo() {
  const [email, setEmail] = useState('')
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  return (
    <DemoPanel title="バリデーション">
      <input className="pseudo-input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@example.com" style={{ borderColor: email && !valid ? 'var(--danger)' : undefined }} />
      {email && !valid && <p style={{ color: 'var(--danger)', fontSize: '0.85rem', marginTop: '0.5rem' }}>有効なメールアドレスを入力してください</p>}
      {valid && <p style={{ color: 'var(--success)', fontSize: '0.85rem', marginTop: '0.5rem' }}>✓ 有効なメールアドレス</p>}
    </DemoPanel>
  )
}

export function ZodDemo() {
  const schema = `z.object({
  email: z.string().email(),
  age: z.number().min(18),
})`
  return (
    <DemoPanel title="Zod スキーマ">
      <code className="selector-code" style={{ whiteSpace: 'pre' }}>{schema}</code>
      <p className="demo-note">スキーマを定義するだけで、型とバリデーションが自動生成されます。</p>
    </DemoPanel>
  )
}

export function RhfDemo() {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  return (
    <DemoPanel title="React Hook Form のイメージ">
      <input className="pseudo-input" value={name} onChange={(e) => setName(e.target.value)} placeholder="ユーザー名" />
      <button className="btn-primary" style={{ marginTop: '0.75rem', width: '100%' }} onClick={() => name && setSubmitted(true)} disabled={!name}>
        {submitted ? '送信完了 ✓' : 'handleSubmit'}
      </button>
      <p className="demo-note">RHF は再レンダリングを最小化し、パフォーマンスが良いです。</p>
    </DemoPanel>
  )
}

export function ErrorsDemo() {
  const errors = { name: '名前は必須です', email: 'メール形式が不正です' }
  const [show, setShow] = useState(true)
  return (
    <DemoPanel title="エラー表示">
      <div className="toggle-row">
        <button className={show ? 'active' : ''} onClick={() => setShow(true)}>エラー表示</button>
        <button className={!show ? 'active' : ''} onClick={() => setShow(false)}>正常</button>
      </div>
      {show && Object.entries(errors).map(([k, v]) => (
        <p key={k} style={{ color: 'var(--danger)', fontSize: '0.85rem', marginBottom: '0.35rem' }}>{k}: {v}</p>
      ))}
    </DemoPanel>
  )
}

export function ComplexDemo() {
  const [tags, setTags] = useState(['React', 'TypeScript'])
  const [input, setInput] = useState('')
  const add = () => { if (input && !tags.includes(input)) { setTags([...tags, input]); setInput('') } }
  return (
    <DemoPanel title="配列フィールド">
      <div className="toggle-row wrap">
        {tags.map((t) => <span key={t} className="form-tag">{t}</span>)}
      </div>
      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem' }}>
        <input className="pseudo-input" value={input} onChange={(e) => setInput(e.target.value)} placeholder="タグを追加" />
        <button className="nav-btn" onClick={add}>追加</button>
      </div>
    </DemoPanel>
  )
}

export function SubmitDemo() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle')
  const submit = () => { setStatus('loading'); setTimeout(() => setStatus('done'), 1500) }
  return (
    <DemoPanel title="送信処理">
      <button className="btn-primary" style={{ width: '100%' }} onClick={submit} disabled={status !== 'idle'}>
        {status === 'idle' ? '送信する' : status === 'loading' ? '送信中...' : '送信完了 ✓'}
      </button>
      {status === 'loading' && <p className="demo-note">await fetch('/api/submit', ...)</p>}
    </DemoPanel>
  )
}

export function AccessibilityDemo() {
  return (
    <DemoPanel title="アクセシブルなフォーム">
      <label style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.85rem' }}>
        パスワード
        <input className="pseudo-input" type="password" aria-describedby="pw-hint" />
        <span id="pw-hint" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>8文字以上、英数字を含む</span>
      </label>
    </DemoPanel>
  )
}

export function NextStepsDemo() {
  return (
    <DemoPanel title="フォームの次のステップ">
      <div className="selector-preview">
        {['Formik', 'サーバーサイドバリデーション', 'ファイルアップロード', 'マルチステップフォーム'].map((t) => (
          <div key={t} className="selector-item">{t}</div>
        ))}
      </div>
    </DemoPanel>
  )
}

const demoMap: Record<string, React.ComponentType> = {
  intro: IntroDemo, controlled: ControlledDemo, validation: ValidationDemo, zod: ZodDemo,
  rhf: RhfDemo, errors: ErrorsDemo, complex: ComplexDemo, submit: SubmitDemo,
  accessibility: AccessibilityDemo, 'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
