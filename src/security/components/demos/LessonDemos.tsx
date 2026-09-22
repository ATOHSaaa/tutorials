import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

export function IntroDemo() {
  const [step, setStep] = useState(0)
  const steps = ["なぜセキュリティが重要か","OWASP Top 10","セキュリティの基本原則"]
  return (
    <DemoPanel title="Webセキュリティとは？">
      <p className="demo-note">セキュリティの重要性と OWASP Top 10 を理解します</p>
      <code className="selector-code">{"Webセキュリティとは？"}</code>
      <div className="course-demo-steps">
        {steps.map((s, i) => (
          <button key={s} className={step === i ? 'active' : ''} onClick={() => setStep(i)}>{s}</button>
        ))}
      </div>
      <div className="course-demo-detail">
        <strong>{steps[step]}</strong>
        <p>{step + 1} / {steps.length} のポイントを表示中です。レッスン本文で詳しく学べます。</p>
      </div>
    </DemoPanel>
  )
}

export function XssDemo() {
  const [step, setStep] = useState(0)
  const steps = ["XSS の仕組み","防御策","React での XSS"]
  return (
    <DemoPanel title="XSS（クロスサイトスクリプティング）">
      <p className="demo-note">反射型・格納型 XSS の攻撃と防御を学びます</p>
      <code className="selector-code">{"// 危険: innerHTML にユーザー入力を直接挿入"}</code>
      <div className="course-demo-steps">
        {steps.map((s, i) => (
          <button key={s} className={step === i ? 'active' : ''} onClick={() => setStep(i)}>{s}</button>
        ))}
      </div>
      <div className="course-demo-detail">
        <strong>{steps[step]}</strong>
        <p>{step + 1} / {steps.length} のポイントを表示中です。レッスン本文で詳しく学べます。</p>
      </div>
    </DemoPanel>
  )
}

export function CsrfDemo() {
  const [step, setStep] = useState(0)
  const steps = ["CSRF の仕組み","防御策","SameSite の設定"]
  return (
    <DemoPanel title="CSRF（クロスサイトリクエストフォージェリ）">
      <p className="demo-note">CSRF 攻撃の仕組みと防御を学びます</p>
      <code className="selector-code">{"// サーバー側: トークン生成"}</code>
      <div className="course-demo-steps">
        {steps.map((s, i) => (
          <button key={s} className={step === i ? 'active' : ''} onClick={() => setStep(i)}>{s}</button>
        ))}
      </div>
      <div className="course-demo-detail">
        <strong>{steps[step]}</strong>
        <p>{step + 1} / {steps.length} のポイントを表示中です。レッスン本文で詳しく学べます。</p>
      </div>
    </DemoPanel>
  )
}

export function SqlInjectionDemo() {
  const [step, setStep] = useState(0)
  const steps = ["SQL インジェクションの仕組み","防御策: パラメータ化クエリ","ORM とバリデーション"]
  return (
    <DemoPanel title="SQL インジェクション">
      <p className="demo-note">SQL インジェクションの攻撃と防御を学びます</p>
      <code className="selector-code">{"// 危険: 文字列連結"}</code>
      <div className="course-demo-steps">
        {steps.map((s, i) => (
          <button key={s} className={step === i ? 'active' : ''} onClick={() => setStep(i)}>{s}</button>
        ))}
      </div>
      <div className="course-demo-detail">
        <strong>{steps[step]}</strong>
        <p>{step + 1} / {steps.length} のポイントを表示中です。レッスン本文で詳しく学べます。</p>
      </div>
    </DemoPanel>
  )
}

export function HttpsDemo() {
  const [step, setStep] = useState(0)
  const steps = ["HTTPS の重要性","TLS ハンドシェイク","HSTS"]
  return (
    <DemoPanel title="HTTPS と暗号化">
      <p className="demo-note">TLS/SSL と通信の暗号化を学びます</p>
      <code className="selector-code">{"Strict-Transport-Security: max-age=31536000; includeSubDomains; preload"}</code>
      <div className="course-demo-steps">
        {steps.map((s, i) => (
          <button key={s} className={step === i ? 'active' : ''} onClick={() => setStep(i)}>{s}</button>
        ))}
      </div>
      <div className="course-demo-detail">
        <strong>{steps[step]}</strong>
        <p>{step + 1} / {steps.length} のポイントを表示中です。レッスン本文で詳しく学べます。</p>
      </div>
    </DemoPanel>
  )
}

export function HeadersDemo() {
  const [step, setStep] = useState(0)
  const steps = ["主要ヘッダー一覧","CSP の設定","helmet.js"]
  return (
    <DemoPanel title="セキュリティヘッダー">
      <p className="demo-note">重要な HTTP セキュリティヘッダーを学びます</p>
      <code className="selector-code">{"Content-Security-Policy:"}</code>
      <div className="course-demo-steps">
        {steps.map((s, i) => (
          <button key={s} className={step === i ? 'active' : ''} onClick={() => setStep(i)}>{s}</button>
        ))}
      </div>
      <div className="course-demo-detail">
        <strong>{steps[step]}</strong>
        <p>{step + 1} / {steps.length} のポイントを表示中です。レッスン本文で詳しく学べます。</p>
      </div>
    </DemoPanel>
  )
}

export function AuthSecurityDemo() {
  const [step, setStep] = useState(0)
  const steps = ["よくある認証の脆弱性","セッション固定攻撃","レート制限と MFA"]
  return (
    <DemoPanel title="認証のセキュリティ">
      <p className="demo-note">認証関連の脆弱性と対策を学びます</p>
      <code className="selector-code">{"app.post(\"/login\", async (req, res) => {"}</code>
      <div className="course-demo-steps">
        {steps.map((s, i) => (
          <button key={s} className={step === i ? 'active' : ''} onClick={() => setStep(i)}>{s}</button>
        ))}
      </div>
      <div className="course-demo-detail">
        <strong>{steps[step]}</strong>
        <p>{step + 1} / {steps.length} のポイントを表示中です。レッスン本文で詳しく学べます。</p>
      </div>
    </DemoPanel>
  )
}

export function DependenciesDemo() {
  const [step, setStep] = useState(0)
  const steps = ["npm audit","Dependabot / Renovate","サプライチェーン攻撃"]
  return (
    <DemoPanel title="依存関係のセキュリティ">
      <p className="demo-note">サプライチェーン攻撃と脆弱性管理を学びます</p>
      <code className="selector-code">{"依存関係のセキュリティ"}</code>
      <div className="course-demo-steps">
        {steps.map((s, i) => (
          <button key={s} className={step === i ? 'active' : ''} onClick={() => setStep(i)}>{s}</button>
        ))}
      </div>
      <div className="course-demo-detail">
        <strong>{steps[step]}</strong>
        <p>{step + 1} / {steps.length} のポイントを表示中です。レッスン本文で詳しく学べます。</p>
      </div>
    </DemoPanel>
  )
}

export function OwaspPracticeDemo() {
  const [step, setStep] = useState(0)
  const steps = ["入力検証","アクセス制御","ログとモニタリング"]
  return (
    <DemoPanel title="実践: セキュリティチェックリスト">
      <p className="demo-note">リリース前のセキュリティ確認項目を学びます</p>
      <code className="selector-code">{"実践: セキュリティチェックリスト"}</code>
      <div className="course-demo-steps">
        {steps.map((s, i) => (
          <button key={s} className={step === i ? 'active' : ''} onClick={() => setStep(i)}>{s}</button>
        ))}
      </div>
      <div className="course-demo-detail">
        <strong>{steps[step]}</strong>
        <p>{step + 1} / {steps.length} のポイントを表示中です。レッスン本文で詳しく学べます。</p>
      </div>
    </DemoPanel>
  )
}

export function NextStepsDemo() {
  const [step, setStep] = useState(0)
  const steps = ["次に学ぶこと","学習の道筋","実践チェックリスト"]
  return (
    <DemoPanel title="次のステップ">
      <p className="demo-note">セキュリティの学習を続けるための道筋を確認します</p>
      <code className="selector-code">{"次のステップ"}</code>
      <div className="course-demo-steps">
        {steps.map((s, i) => (
          <button key={s} className={step === i ? 'active' : ''} onClick={() => setStep(i)}>{s}</button>
        ))}
      </div>
      <div className="course-demo-detail">
        <strong>{steps[step]}</strong>
        <p>{step + 1} / {steps.length} のポイントを表示中です。レッスン本文で詳しく学べます。</p>
      </div>
    </DemoPanel>
  )
}

const demoMap: Record<string, React.ComponentType> = {
  'intro': IntroDemo,
  'xss': XssDemo,
  'csrf': CsrfDemo,
  'sql-injection': SqlInjectionDemo,
  'https': HttpsDemo,
  'headers': HeadersDemo,
  'auth-security': AuthSecurityDemo,
  'dependencies': DependenciesDemo,
  'owasp-practice': OwaspPracticeDemo,
  'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
