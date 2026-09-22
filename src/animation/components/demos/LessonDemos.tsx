import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

export function IntroDemo() {
  const [step, setStep] = useState(0)
  const steps = ["なぜアニメーションか","アニメーションの原則","CSS vs JavaScript"]
  return (
    <DemoPanel title="UI アニメーションとは？">
      <p className="demo-note">モーションの役割と原則を理解します</p>
      <code className="selector-code">{"UI アニメーションとは？"}</code>
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

export function TransitionsDemo() {
  const [step, setStep] = useState(0)
  const steps = ["基本構文","transition プロパティ","複数プロパティの遷移"]
  return (
    <DemoPanel title="CSS Transition">
      <p className="demo-note">プロパティの滑らかな変化を学びます</p>
      <code className="selector-code">{".button {"}</code>
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

export function TransformsDemo() {
  const [step, setStep] = useState(0)
  const steps = ["基本変形","transform-origin","3D Transform"]
  return (
    <DemoPanel title="CSS Transform">
      <p className="demo-note">要素の変形を学びます</p>
      <code className="selector-code">{".card:hover {"}</code>
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

export function KeyframesDemo() {
  const [step, setStep] = useState(0)
  const steps = ["@keyframes の定義","animation プロパティ","実用的なパターン"]
  return (
    <DemoPanel title="@keyframes アニメーション">
      <p className="demo-note">キーフレームによる複雑なアニメーションを学びます</p>
      <code className="selector-code">{"@keyframes fadeInUp {"}</code>
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

export function TimingDemo() {
  const [step, setStep] = useState(0)
  const steps = ["イージングの種類","cubic-bezier","spring アニメーション"]
  return (
    <DemoPanel title="タイミング関数">
      <p className="demo-note">イージングとモーションの自然さを学びます</p>
      <code className="selector-code">{"/* バウンス効果 */"}</code>
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

export function CssVariablesDemo() {
  const [step, setStep] = useState(0)
  const steps = ["CSS 変数のアニメーション","@property","Tailwind CSS"]
  return (
    <DemoPanel title="CSS 変数とアニメーション">
      <p className="demo-note">動的なアニメーション制御を学びます</p>
      <code className="selector-code">{":root {"}</code>
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

export function PerformanceDemo() {
  const [step, setStep] = useState(0)
  const steps = ["GPU アクセラレーション","will-change","フレームレート"]
  return (
    <DemoPanel title="パフォーマンス">
      <p className="demo-note">GPU フレンドリーなアニメーションを学びます</p>
      <code className="selector-code">{"/* 悪い: レイアウト再計算 */"}</code>
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

export function FramerMotionDemo() {
  const [step, setStep] = useState(0)
  const steps = ["基本","layout アニメーション","AnimatePresence"]
  return (
    <DemoPanel title="Framer Motion">
      <p className="demo-note">React 向けアニメーションライブラリを学びます</p>
      <code className="selector-code">{"import { motion } from \"framer-motion\";"}</code>
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

export function AccessibilityDemo() {
  const [step, setStep] = useState(0)
  const steps = ["prefers-reduced-motion","アニメーションの注意点","意味のあるモーション"]
  return (
    <DemoPanel title="アクセシビリティ">
      <p className="demo-note">アニメーションと a11y の両立を学びます</p>
      <code className="selector-code">{"const prefersReduced = window.matchMedia(\"(prefers-reduced-motion: reduce)\").matches;"}</code>
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
      <p className="demo-note">アニメーションの学習を続けるための道筋を確認します</p>
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
  'transitions': TransitionsDemo,
  'transforms': TransformsDemo,
  'keyframes': KeyframesDemo,
  'timing': TimingDemo,
  'css-variables': CssVariablesDemo,
  'performance': PerformanceDemo,
  'framer-motion': FramerMotionDemo,
  'accessibility': AccessibilityDemo,
  'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
