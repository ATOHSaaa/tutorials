import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

export function IntroDemo() {
  const [step, setStep] = useState(0)
  const steps = ["BaaS とは","主要機能","Firebase との比較"]
  return (
    <DemoPanel title="Supabase とは？">
      <p className="demo-note">BaaS の概念と Supabase の機能を理解します</p>
      <code className="selector-code">{"Supabase とは？"}</code>
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

export function SetupDemo() {
  const [step, setStep] = useState(0)
  const steps = ["プロジェクト作成","環境変数","ローカル開発"]
  return (
    <DemoPanel title="セットアップ">
      <p className="demo-note">プロジェクト作成とクライアント初期化を学びます</p>
      <code className="selector-code">{"npm install @supabase/supabase-js"}</code>
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

export function DatabaseDemo() {
  const [step, setStep] = useState(0)
  const steps = ["テーブル作成","CRUD 操作","フィルタとページネーション"]
  return (
    <DemoPanel title="データベース操作">
      <p className="demo-note">テーブル作成と CRUD クエリを学びます</p>
      <code className="selector-code">{"create table posts ("}</code>
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

export function AuthDemo() {
  const [step, setStep] = useState(0)
  const steps = ["メール認証","OAuth プロバイダー","セッション管理"]
  return (
    <DemoPanel title="認証">
      <p className="demo-note">メール認証と OAuth ログインを学びます</p>
      <code className="selector-code">{"const { data, error } = await supabase.auth.signUp({"}</code>
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

export function RlsDemo() {
  const [step, setStep] = useState(0)
  const steps = ["RLS の概念","ポリシーの作成","ポリシーのテスト"]
  return (
    <DemoPanel title="Row Level Security">
      <p className="demo-note">データベースレベルのアクセス制御を学びます</p>
      <code className="selector-code">{"create policy \"Users can read own posts\""}</code>
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

export function StorageDemo() {
  const [step, setStep] = useState(0)
  const steps = ["バケット作成","ファイル取得","Storage ポリシー"]
  return (
    <DemoPanel title="ファイルストレージ">
      <p className="demo-note">画像・ファイルのアップロードを学びます</p>
      <code className="selector-code">{"const { data, error } = await supabase.storage"}</code>
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

export function RealtimeDemo() {
  const [step, setStep] = useState(0)
  const steps = ["Realtime の仕組み","Presence","Broadcast"]
  return (
    <DemoPanel title="リアルタイム機能">
      <p className="demo-note">DB 変更の WebSocket 配信を学びます</p>
      <code className="selector-code">{"const channel = supabase"}</code>
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

export function EdgeFunctionsDemo() {
  const [step, setStep] = useState(0)
  const steps = ["Edge Functions とは","関数の実装","Webhook と Cron"]
  return (
    <DemoPanel title="Edge Functions">
      <p className="demo-note">サーバーレス関数の作成を学びます</p>
      <code className="selector-code">{"npx supabase functions new hello-world"}</code>
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

export function DeploymentDemo() {
  const [step, setStep] = useState(0)
  const steps = ["マイグレーション","環境の分離","モニタリング"]
  return (
    <DemoPanel title="デプロイと運用">
      <p className="demo-note">本番環境のセットアップを学びます</p>
      <code className="selector-code">{"npx supabase migration new add_comments_table"}</code>
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
      <p className="demo-note">Supabase の学習を続けるための道筋を確認します</p>
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
  'setup': SetupDemo,
  'database': DatabaseDemo,
  'auth': AuthDemo,
  'rls': RlsDemo,
  'storage': StorageDemo,
  'realtime': RealtimeDemo,
  'edge-functions': EdgeFunctionsDemo,
  'deployment': DeploymentDemo,
  'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
