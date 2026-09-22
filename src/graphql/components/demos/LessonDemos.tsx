import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

export function IntroDemo() {
  const [step, setStep] = useState(0)
  const steps = ["REST の課題","GraphQL の特徴","REST との使い分け"]
  return (
    <DemoPanel title="GraphQL とは？">
      <p className="demo-note">REST との違いと GraphQL の利点を理解します</p>
      <code className="selector-code">{"GraphQL とは？"}</code>
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
  const steps = ["SDL（Schema Definition Language）","必須と配列","Mutation と Subscription"]
  return (
    <DemoPanel title="スキーマ定義">
      <p className="demo-note">型、Query、Mutation の SDL を学びます</p>
      <code className="selector-code">{"type User {"}</code>
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
  const steps = ["基本クエリ","引数とエイリアス","フラグメント"]
  return (
    <DemoPanel title="クエリの書き方">
      <p className="demo-note">フィールド選択、引数、ネストを学びます</p>
      <code className="selector-code">{"query {"}</code>
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

export function ResolversDemo() {
  const [step, setStep] = useState(0)
  const steps = ["リゾルバの構造","context の活用","N+1 問題と DataLoader"]
  return (
    <DemoPanel title="リゾルバ">
      <p className="demo-note">フィールド解決ロジックの実装を学びます</p>
      <code className="selector-code">{"const resolvers = {"}</code>
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

export function MutationsDemo() {
  const [step, setStep] = useState(0)
  const steps = ["Mutation の設計","バリデーション","楽観的 UI"]
  return (
    <DemoPanel title="ミューテーション">
      <p className="demo-note">データの作成・更新・削除を学びます</p>
      <code className="selector-code">{"mutation {"}</code>
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

export function ApolloServerDemo() {
  const [step, setStep] = useState(0)
  const steps = ["セットアップ","Express 統合","GraphQL Playground"]
  return (
    <DemoPanel title="Apollo Server">
      <p className="demo-note">Node.js で GraphQL サーバーを構築します</p>
      <code className="selector-code">{"import { ApolloServer } from \"@apollo/server\";"}</code>
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

export function ApolloClientDemo() {
  const [step, setStep] = useState(0)
  const steps = ["セットアップ","キャッシュ戦略","エラーハンドリング"]
  return (
    <DemoPanel title="Apollo Client">
      <p className="demo-note">React で GraphQL データを取得します</p>
      <code className="selector-code">{"import { useQuery, gql } from \"@apollo/client\";"}</code>
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

export function PaginationDemo() {
  const [step, setStep] = useState(0)
  const steps = ["Offset ページネーション","Cursor ページネーション","総件数の取得"]
  return (
    <DemoPanel title="ページネーション">
      <p className="demo-note">Cursor ベースと Offset ベースを学びます</p>
      <code className="selector-code">{"type Query {"}</code>
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

export function BestPracticesDemo() {
  const [step, setStep] = useState(0)
  const steps = ["スキーマ設計原則","セキュリティ","パフォーマンス"]
  return (
    <DemoPanel title="ベストプラクティス">
      <p className="demo-note">スキーマ設計と運用の指針を学びます</p>
      <code className="selector-code">{"ベストプラクティス"}</code>
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
      <p className="demo-note">GraphQL の学習を続けるための道筋を確認します</p>
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
  'schema': SchemaDemo,
  'queries': QueriesDemo,
  'resolvers': ResolversDemo,
  'mutations': MutationsDemo,
  'apollo-server': ApolloServerDemo,
  'apollo-client': ApolloClientDemo,
  'pagination': PaginationDemo,
  'best-practices': BestPracticesDemo,
  'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
