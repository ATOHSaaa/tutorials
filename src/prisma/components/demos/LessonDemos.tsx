import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

export function IntroDemo() {
  const [step, setStep] = useState(0)
  const steps = ["ORM とは","Prisma の3コンポーネント","対応データベース"]
  return (
    <DemoPanel title="Prisma とは？">
      <p className="demo-note">ORM の概念と Prisma の3つのコンポーネントを理解します</p>
      <code className="selector-code">{"Prisma とは？"}</code>
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
  const steps = ["インストール","接続設定","クライアント生成"]
  return (
    <DemoPanel title="セットアップ">
      <p className="demo-note">Prisma のインストールと初期化を学びます</p>
      <code className="selector-code">{"npm install prisma --save-dev"}</code>
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

export function SchemaDemo() {
  const [step, setStep] = useState(0)
  const steps = ["モデルの基本","フィールド型","命名規則"]
  return (
    <DemoPanel title="スキーマ設計">
      <p className="demo-note">モデル、フィールド型、制約の定義を学びます</p>
      <code className="selector-code">{"model User {"}</code>
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

export function CrudDemo() {
  const [step, setStep] = useState(0)
  const steps = ["Create","Read","Update と Delete"]
  return (
    <DemoPanel title="CRUD 操作">
      <p className="demo-note">作成・読取・更新・削除の基本クエリを学びます</p>
      <code className="selector-code">{"const user = await prisma.user.create({"}</code>
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

export function RelationsDemo() {
  const [step, setStep] = useState(0)
  const steps = ["1対多（One-to-Many）","リレーションを含むクエリ","多対多（Many-to-Many）"]
  return (
    <DemoPanel title="リレーション">
      <p className="demo-note">1対多、多対多のモデル関係を学びます</p>
      <code className="selector-code">{"model Post {"}</code>
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

export function MigrationsDemo() {
  const [step, setStep] = useState(0)
  const steps = ["開発フロー","本番デプロイ","マイグレーションのベストプラクティス"]
  return (
    <DemoPanel title="マイグレーション">
      <p className="demo-note">スキーマ変更のバージョン管理を学びます</p>
      <code className="selector-code">{"npx prisma migrate dev --name add_comments"}</code>
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

export function QueriesDemo() {
  const [step, setStep] = useState(0)
  const steps = ["フィルタリング","ページネーション","集計"]
  return (
    <DemoPanel title="高度なクエリ">
      <p className="demo-note">フィルタ、ページネーション、集計を学びます</p>
      <code className="selector-code">{"const results = await prisma.post.findMany({"}</code>
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

export function TransactionsDemo() {
  const [step, setStep] = useState(0)
  const steps = ["interactive transactions","バッチトランザクション","分離レベル"]
  return (
    <DemoPanel title="トランザクション">
      <p className="demo-note">複数操作の原子性を保証する方法を学びます</p>
      <code className="selector-code">{"await prisma.$transaction(async (tx) => {"}</code>
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

export function AdvancedDemo() {
  const [step, setStep] = useState(0)
  const steps = ["Prisma Middleware","生 SQL","シーディング"]
  return (
    <DemoPanel title="応用テクニック">
      <p className="demo-note">ミドルウェア、生 SQL、シーディングを学びます</p>
      <code className="selector-code">{"prisma.$use(async (params, next) => {"}</code>
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
      <p className="demo-note">Prisma の学習を続けるための道筋を確認します</p>
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
  'schema': SchemaDemo,
  'crud': CrudDemo,
  'relations': RelationsDemo,
  'migrations': MigrationsDemo,
  'queries': QueriesDemo,
  'transactions': TransactionsDemo,
  'advanced': AdvancedDemo,
  'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
