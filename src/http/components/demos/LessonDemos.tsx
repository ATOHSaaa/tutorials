import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

export function IntroDemo() {
  const [step, setStep] = useState(0)
  const steps = ["HTTP の位置づけ","リクエストとレスポンス","HTTP のバージョン"]
  return (
    <DemoPanel title="HTTP とは？">
      <p className="demo-note">HTTP の役割と Web 通信の基本構造を理解します</p>
      <code className="selector-code">{"HTTP とは？"}</code>
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

export function RequestResponseDemo() {
  const [step, setStep] = useState(0)
  const steps = ["リクエストライン","レスポンスの構造","ボディの扱い"]
  return (
    <DemoPanel title="リクエストとレスポンスの構造">
      <p className="demo-note">HTTP メッセージの各部分を分解して理解します</p>
      <code className="selector-code">{"GET /api/articles?tag=javascript&sort=desc HTTP/1.1"}</code>
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

export function MethodsDemo() {
  const [step, setStep] = useState(0)
  const steps = ["主要メソッド一覧","GET と POST の違い","PUT / PATCH / DELETE"]
  return (
    <DemoPanel title="HTTP メソッド">
      <p className="demo-note">GET・POST・PUT・DELETE などメソッドの意味と使い分けを学びます</p>
      <code className="selector-code">{"// PATCH — 名前だけ変更"}</code>
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

export function StatusCodesDemo() {
  const [step, setStep] = useState(0)
  const steps = ["ステータスコードの分類","よく使うコードの実例","エラーハンドリングの設計"]
  return (
    <DemoPanel title="ステータスコード">
      <p className="demo-note">200・404・500 など、レスポンスの意味を読み解きます</p>
      <code className="selector-code">{"if (res.status === 401) {"}</code>
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
  const steps = ["ヘッダーの役割","Content-Type と Accept","Authorization と Cookie"]
  return (
    <DemoPanel title="HTTP ヘッダー">
      <p className="demo-note">Content-Type、Authorization、Cache-Control など重要ヘッダーを学びます</p>
      <code className="selector-code">{"const res = await fetch(\"/api/search\", {"}</code>
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

export function RestDemo() {
  const [step, setStep] = useState(0)
  const steps = ["REST の基本原則","コレクションとリソース","ページネーションとフィルタ"]
  return (
    <DemoPanel title="REST API の設計">
      <p className="demo-note">RESTful な API 設計の原則と実践パターンを学びます</p>
      <code className="selector-code">{"GET    /api/articles          → 一覧"}</code>
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

export function FetchDemo() {
  const [step, setStep] = useState(0)
  const steps = ["fetch の基本","オプションとエラーハンドリング","AbortController"]
  return (
    <DemoPanel title="fetch API">
      <p className="demo-note">ブラウザから HTTP リクエストを送る fetch の実践を学びます</p>
      <code className="selector-code">{"async function loadUsers() {"}</code>
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

export function CorsDemo() {
  const [step, setStep] = useState(0)
  const steps = ["同一オリジンポリシー","プリフライトリクエスト","開発時の対処"]
  return (
    <DemoPanel title="CORS">
      <p className="demo-note">クロスオリジンリクエストの制約と対処法を学びます</p>
      <code className="selector-code">{"// サーバー側（Express の例）"}</code>
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

export function CachingDemo() {
  const [step, setStep] = useState(0)
  const steps = ["キャッシュの仕組み","Cache-Control の主要ディレクティブ","ETag と条件付きリクエスト"]
  return (
    <DemoPanel title="HTTP キャッシュ">
      <p className="demo-note">Cache-Control によるキャッシュ戦略を学びます</p>
      <code className="selector-code">{"# 静的アセット（ビルド時ハッシュ付き）"}</code>
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
      <p className="demo-note">HTTP の学習を続けるための道筋を確認します</p>
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
  'request-response': RequestResponseDemo,
  'methods': MethodsDemo,
  'status-codes': StatusCodesDemo,
  'headers': HeadersDemo,
  'rest': RestDemo,
  'fetch': FetchDemo,
  'cors': CorsDemo,
  'caching': CachingDemo,
  'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
