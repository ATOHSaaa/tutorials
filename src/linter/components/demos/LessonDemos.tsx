import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

export function IntroDemo() {
  const [step, setStep] = useState(0)
  const steps = ['概要', '設定', '実行', '確認']
  return (
    <DemoPanel title="Linter とは？">
      <div className="generic-demo-box">
        <strong>Linter · Linter とは？</strong>
        <p>{steps[step]} の段階を表示中です。実際のプロジェクトでは公式ドキュメントの手順を試してみましょう。</p>
        <code className="selector-code">// lesson: intro</code>
      </div>
      <div className="toggle-row">
        {steps.map((s, i) => (
          <button key={s} className={step === i ? 'active' : ''} onClick={() => setStep(i)}>{s}</button>
        ))}
      </div>
    </DemoPanel>
  )
}

export function EslintDemo() {
  const [step, setStep] = useState(0)
  const steps = ['概要', '設定', '実行', '確認']
  return (
    <DemoPanel title="ESLint 入門">
      <div className="generic-demo-box">
        <strong>Linter · ESLint 入門</strong>
        <p>{steps[step]} の段階を表示中です。実際のプロジェクトでは公式ドキュメントの手順を試してみましょう。</p>
        <code className="selector-code">// lesson: eslint</code>
      </div>
      <div className="toggle-row">
        {steps.map((s, i) => (
          <button key={s} className={step === i ? 'active' : ''} onClick={() => setStep(i)}>{s}</button>
        ))}
      </div>
    </DemoPanel>
  )
}

export function RulesDemo() {
  const [step, setStep] = useState(0)
  const steps = ['概要', '設定', '実行', '確認']
  return (
    <DemoPanel title="ルール設定">
      <div className="generic-demo-box">
        <strong>Linter · ルール設定</strong>
        <p>{steps[step]} の段階を表示中です。実際のプロジェクトでは公式ドキュメントの手順を試してみましょう。</p>
        <code className="selector-code">// lesson: rules</code>
      </div>
      <div className="toggle-row">
        {steps.map((s, i) => (
          <button key={s} className={step === i ? 'active' : ''} onClick={() => setStep(i)}>{s}</button>
        ))}
      </div>
    </DemoPanel>
  )
}

export function PrettierDemo() {
  const [step, setStep] = useState(0)
  const steps = ['概要', '設定', '実行', '確認']
  return (
    <DemoPanel title="Prettier">
      <div className="generic-demo-box">
        <strong>Linter · Prettier</strong>
        <p>{steps[step]} の段階を表示中です。実際のプロジェクトでは公式ドキュメントの手順を試してみましょう。</p>
        <code className="selector-code">// lesson: prettier</code>
      </div>
      <div className="toggle-row">
        {steps.map((s, i) => (
          <button key={s} className={step === i ? 'active' : ''} onClick={() => setStep(i)}>{s}</button>
        ))}
      </div>
    </DemoPanel>
  )
}

export function TypescriptDemo() {
  const [step, setStep] = useState(0)
  const steps = ['概要', '設定', '実行', '確認']
  return (
    <DemoPanel title="TypeScript ESLint">
      <div className="generic-demo-box">
        <strong>Linter · TypeScript ESLint</strong>
        <p>{steps[step]} の段階を表示中です。実際のプロジェクトでは公式ドキュメントの手順を試してみましょう。</p>
        <code className="selector-code">// lesson: typescript</code>
      </div>
      <div className="toggle-row">
        {steps.map((s, i) => (
          <button key={s} className={step === i ? 'active' : ''} onClick={() => setStep(i)}>{s}</button>
        ))}
      </div>
    </DemoPanel>
  )
}

export function FlatConfigDemo() {
  const [step, setStep] = useState(0)
  const steps = ['概要', '設定', '実行', '確認']
  return (
    <DemoPanel title="Flat Config">
      <div className="generic-demo-box">
        <strong>Linter · Flat Config</strong>
        <p>{steps[step]} の段階を表示中です。実際のプロジェクトでは公式ドキュメントの手順を試してみましょう。</p>
        <code className="selector-code">// lesson: flat-config</code>
      </div>
      <div className="toggle-row">
        {steps.map((s, i) => (
          <button key={s} className={step === i ? 'active' : ''} onClick={() => setStep(i)}>{s}</button>
        ))}
      </div>
    </DemoPanel>
  )
}

export function EditorDemo() {
  const [step, setStep] = useState(0)
  const steps = ['概要', '設定', '実行', '確認']
  return (
    <DemoPanel title="エディタ連携">
      <div className="generic-demo-box">
        <strong>Linter · エディタ連携</strong>
        <p>{steps[step]} の段階を表示中です。実際のプロジェクトでは公式ドキュメントの手順を試してみましょう。</p>
        <code className="selector-code">// lesson: editor</code>
      </div>
      <div className="toggle-row">
        {steps.map((s, i) => (
          <button key={s} className={step === i ? 'active' : ''} onClick={() => setStep(i)}>{s}</button>
        ))}
      </div>
    </DemoPanel>
  )
}

export function CiDemo() {
  const [step, setStep] = useState(0)
  const steps = ['概要', '設定', '実行', '確認']
  return (
    <DemoPanel title="CI での実行">
      <div className="generic-demo-box">
        <strong>Linter · CI での実行</strong>
        <p>{steps[step]} の段階を表示中です。実際のプロジェクトでは公式ドキュメントの手順を試してみましょう。</p>
        <code className="selector-code">// lesson: ci</code>
      </div>
      <div className="toggle-row">
        {steps.map((s, i) => (
          <button key={s} className={step === i ? 'active' : ''} onClick={() => setStep(i)}>{s}</button>
        ))}
      </div>
    </DemoPanel>
  )
}

export function CustomDemo() {
  const [step, setStep] = useState(0)
  const steps = ['概要', '設定', '実行', '確認']
  return (
    <DemoPanel title="カスタムルール">
      <div className="generic-demo-box">
        <strong>Linter · カスタムルール</strong>
        <p>{steps[step]} の段階を表示中です。実際のプロジェクトでは公式ドキュメントの手順を試してみましょう。</p>
        <code className="selector-code">// lesson: custom</code>
      </div>
      <div className="toggle-row">
        {steps.map((s, i) => (
          <button key={s} className={step === i ? 'active' : ''} onClick={() => setStep(i)}>{s}</button>
        ))}
      </div>
    </DemoPanel>
  )
}

export function NextStepsDemo() {
  const [step, setStep] = useState(0)
  const steps = ['概要', '設定', '実行', '確認']
  return (
    <DemoPanel title="次のステップ">
      <div className="generic-demo-box">
        <strong>Linter · 次のステップ</strong>
        <p>{steps[step]} の段階を表示中です。実際のプロジェクトでは公式ドキュメントの手順を試してみましょう。</p>
        <code className="selector-code">// lesson: next-steps</code>
      </div>
      <div className="toggle-row">
        {steps.map((s, i) => (
          <button key={s} className={step === i ? 'active' : ''} onClick={() => setStep(i)}>{s}</button>
        ))}
      </div>
    </DemoPanel>
  )
}

const demoMap: Record<string, React.ComponentType> = {
  'intro': IntroDemo,
  'eslint': EslintDemo,
  'rules': RulesDemo,
  'prettier': PrettierDemo,
  'typescript': TypescriptDemo,
  'flat-config': FlatConfigDemo,
  'editor': EditorDemo,
  'ci': CiDemo,
  'custom': CustomDemo,
  'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
