import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

export function IntroDemo() {
  const [step, setStep] = useState(0)
  const steps = ["Canvas とは","SVG との違い","WebGL との関係"]
  return (
    <DemoPanel title="Canvas とは？">
      <p className="demo-note">Canvas の役割と SVG・CSS との違いを学びます</p>
      <code className="selector-code">{"Canvas とは？"}</code>
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
  const steps = ["HTML とコンテキスト","Retina 対応","描画の流れ"]
  return (
    <DemoPanel title="基本セットアップ">
      <p className="demo-note">canvas 要素と 2D コンテキストの取得方法を学びます</p>
      <code className="selector-code">{"<canvas id=\"myCanvas\" width=\"400\" height=\"300\"></canvas>"}</code>
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

export function ShapesDemo() {
  const [step, setStep] = useState(0)
  const steps = ["矩形","円と弧","線"]
  return (
    <DemoPanel title="図形の描画">
      <p className="demo-note">矩形・円・線の基本メソッドを学びます</p>
      <code className="selector-code">{"ctx.fillStyle = \"#a855f7\";"}</code>
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

export function PathsDemo() {
  const [step, setStep] = useState(0)
  const steps = ["パスの基本","ベジェ曲線","複合パス"]
  return (
    <DemoPanel title="パスと曲線">
      <p className="demo-note">複雑な形状をパスで描く方法を学びます</p>
      <code className="selector-code">{"ctx.beginPath();"}</code>
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

export function ColorsDemo() {
  const [step, setStep] = useState(0)
  const steps = ["色の指定","グラデーション","globalAlpha"]
  return (
    <DemoPanel title="色とスタイル">
      <p className="demo-note">fillStyle、gradient、透明度を学びます</p>
      <code className="selector-code">{"ctx.fillStyle = \"rgba(168, 85, 247, 0.6)\";"}</code>
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

export function TextDemo() {
  const [step, setStep] = useState(0)
  const steps = ["テキストの描画","配置","measureText"]
  return (
    <DemoPanel title="テキスト描画">
      <p className="demo-note">フォント、配置、メトリクスを学びます</p>
      <code className="selector-code">{"ctx.font = \"bold 32px sans-serif\";"}</code>
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
  const steps = ["画像の読み込み","切り抜きとスケール","パフォーマンス"]
  return (
    <DemoPanel title="画像の描画">
      <p className="demo-note">drawImage で画像・スプライトを描く方法を学びます</p>
      <code className="selector-code">{"const img = new Image();"}</code>
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

export function TransformDemo() {
  const [step, setStep] = useState(0)
  const steps = ["変換の基本","save / restore","実用例"]
  return (
    <DemoPanel title="座標変換">
      <p className="demo-note">translate、rotate、scale を学びます</p>
      <code className="selector-code">{"ctx.save();"}</code>
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

export function AnimationDemo() {
  const [step, setStep] = useState(0)
  const steps = ["アニメーションループ","clearRect","デルタタイム"]
  return (
    <DemoPanel title="アニメーション">
      <p className="demo-note">requestAnimationFrame で動かす方法を学びます</p>
      <code className="selector-code">{"function loop(timestamp) {"}</code>
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
      <p className="demo-note">Canvas の学習を続ける道筋を確認します</p>
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
  'shapes': ShapesDemo,
  'paths': PathsDemo,
  'colors': ColorsDemo,
  'text': TextDemo,
  'images': ImagesDemo,
  'transform': TransformDemo,
  'animation': AnimationDemo,
  'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
