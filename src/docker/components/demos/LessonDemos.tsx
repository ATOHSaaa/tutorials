import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

export function IntroDemo() {
  const [step, setStep] = useState(0)
  const steps = ["コンテナとは","VM との違い","Docker の構成要素"]
  return (
    <DemoPanel title="Docker とは？">
      <p className="demo-note">コンテナ技術の概念と仮想化との違いを理解します</p>
      <code className="selector-code">{"Docker とは？"}</code>
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

export function ImagesDemo() {
  const [step, setStep] = useState(0)
  const steps = ["イメージの構造","イメージの操作","タグとバージョン"]
  return (
    <DemoPanel title="イメージ">
      <p className="demo-note">Docker イメージの概念と操作を学びます</p>
      <code className="selector-code">{"docker pull node:20-alpine"}</code>
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

export function ContainersDemo() {
  const [step, setStep] = useState(0)
  const steps = ["基本操作","ポートマッピング","コンテナ内の操作"]
  return (
    <DemoPanel title="コンテナ">
      <p className="demo-note">コンテナのライフサイクル管理を学びます</p>
      <code className="selector-code">{"docker run -d --name my-nginx -p 8080:80 nginx"}</code>
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

export function DockerfileDemo() {
  const [step, setStep] = useState(0)
  const steps = ["Dockerfile の基本","レイヤーキャッシュ","マルチステージビルド"]
  return (
    <DemoPanel title="Dockerfile">
      <p className="demo-note">独自イメージの作成を学びます</p>
      <code className="selector-code">{"FROM node:20-alpine"}</code>
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

export function ComposeDemo() {
  const [step, setStep] = useState(0)
  const steps = ["Compose の役割","Compose コマンド","開発ワークフロー"]
  return (
    <DemoPanel title="Docker Compose">
      <p className="demo-note">複数コンテナの管理を学びます</p>
      <code className="selector-code">{"# docker-compose.yml"}</code>
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

export function VolumesDemo() {
  const [step, setStep] = useState(0)
  const steps = ["ボリューム","Docker ネットワーク",".dockerignore"]
  return (
    <DemoPanel title="ボリュームとネットワーク">
      <p className="demo-note">データ永続化とコンテナ間通信を学びます</p>
      <code className="selector-code">{"# 名前付きボリューム"}</code>
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

export function ProductionDemo() {
  const [step, setStep] = useState(0)
  const steps = ["本番イメージのベストプラクティス","コンテナオーケストレーション","CI/CD 統合"]
  return (
    <DemoPanel title="本番デプロイ">
      <p className="demo-note">コンテナの本番運用を学びます</p>
      <code className="selector-code">{"HEALTHCHECK --interval=30s --timeout=3s CMD curl -f http://localhost:3000/health || exit 1"}</code>
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

export function DebuggingDemo() {
  const [step, setStep] = useState(0)
  const steps = ["ログと inspect","よくある問題","ビルドのデバッグ"]
  return (
    <DemoPanel title="デバッグとトラブルシューティング">
      <p className="demo-note">コンテナの問題解決を学びます</p>
      <code className="selector-code">{"docker logs --tail 100 -f my-app"}</code>
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

export function DevWorkflowDemo() {
  const [step, setStep] = useState(0)
  const steps = ["devcontainer","DB のコンテナ化","ホットリロード"]
  return (
    <DemoPanel title="開発ワークフロー">
      <p className="demo-note">Docker を日常開発に組み込む方法を学びます</p>
      <code className="selector-code">{"開発ワークフロー"}</code>
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
      <p className="demo-note">Docker の学習を続けるための道筋を確認します</p>
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
  'images': ImagesDemo,
  'containers': ContainersDemo,
  'dockerfile': DockerfileDemo,
  'compose': ComposeDemo,
  'volumes': VolumesDemo,
  'production': ProductionDemo,
  'debugging': DebuggingDemo,
  'dev-workflow': DevWorkflowDemo,
  'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
