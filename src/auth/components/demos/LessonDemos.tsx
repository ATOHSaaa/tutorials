import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

export function IntroDemo() {
  const [step, setStep] = useState(0)
  const steps = ["認証の基本","ステートレス vs ステートフル","認証の全体像"]
  return (
    <DemoPanel title="認証とは？">
      <p className="demo-note">認証と認可の違い、Web アプリでの役割を理解します</p>
      <code className="selector-code">{"認証とは？"}</code>
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

export function PasswordsDemo() {
  const [step, setStep] = useState(0)
  const steps = ["平文保存は絶対禁止","ソルトの役割","パスワードポリシー"]
  return (
    <DemoPanel title="パスワードの安全な扱い">
      <p className="demo-note">ハッシュ化、ソルト、bcrypt の実践を学びます</p>
      <code className="selector-code">{"import bcrypt from \"bcrypt\";"}</code>
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

export function SessionsDemo() {
  const [step, setStep] = useState(0)
  const steps = ["セッションの流れ","Cookie のセキュリティ属性","セッションストアの選択"]
  return (
    <DemoPanel title="セッションと Cookie">
      <p className="demo-note">サーバー側セッション管理の仕組みを学びます</p>
      <code className="selector-code">{"res.cookie(\"sessionId\", id, {"}</code>
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

export function JwtDemo() {
  const [step, setStep] = useState(0)
  const steps = ["JWT の3部構成","アクセストークンとリフレッシュトークン","JWT の注意点"]
  return (
    <DemoPanel title="JWT（JSON Web Token）">
      <p className="demo-note">JWT の構造と署名検証を学びます</p>
      <code className="selector-code">{"import jwt from \"jsonwebtoken\";"}</code>
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

export function OauthDemo() {
  const [step, setStep] = useState(0)
  const steps = ["OAuth の登場人物","Authorization Code フロー","実装ライブラリ"]
  return (
    <DemoPanel title="OAuth 2.0 とソーシャルログイン">
      <p className="demo-note">Google・GitHub ログインの仕組みを学びます</p>
      <code className="selector-code">{"const { tokens } = await oauth2Client.getToken(code);"}</code>
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

export function MiddlewareDemo() {
  const [step, setStep] = useState(0)
  const steps = ["ミドルウェアの役割","Express の実装例","Next.js の middleware"]
  return (
    <DemoPanel title="認証ミドルウェア">
      <p className="demo-note">API ルートを保護するミドルウェアを学びます</p>
      <code className="selector-code">{"function authMiddleware(req, res, next) {"}</code>
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

export function FrontendAuthDemo() {
  const [step, setStep] = useState(0)
  const steps = ["認証状態の管理","ログインフォームの実装","Protected Route パターン"]
  return (
    <DemoPanel title="フロントエンドの認証 UI">
      <p className="demo-note">ログインフォームと認証状態管理を学びます</p>
      <code className="selector-code">{"const res = await fetch(\"/api/login\", {"}</code>
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

export function SecurityPracticesDemo() {
  const [step, setStep] = useState(0)
  const steps = ["ブルートフォース対策","CSRF 対策","多要素認証（MFA）"]
  return (
    <DemoPanel title="認証のセキュリティ">
      <p className="demo-note">レート制限、CSRF、多要素認証を学びます</p>
      <code className="selector-code">{"import { authenticator } from \"otplib\";"}</code>
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

export function ImplementationDemo() {
  const [step, setStep] = useState(0)
  const steps = ["BFF パターン","Auth.js の概要","テストとデバッグ"]
  return (
    <DemoPanel title="認証の実装パターン">
      <p className="demo-note">実務で使われる認証アーキテクチャを学びます</p>
      <code className="selector-code">{"import NextAuth from \"next-auth\";"}</code>
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
      <p className="demo-note">認証の学習を続けるための道筋を確認します</p>
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
  'passwords': PasswordsDemo,
  'sessions': SessionsDemo,
  'jwt': JwtDemo,
  'oauth': OauthDemo,
  'middleware': MiddlewareDemo,
  'frontend-auth': FrontendAuthDemo,
  'security-practices': SecurityPracticesDemo,
  'implementation': ImplementationDemo,
  'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
