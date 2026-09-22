import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

export function IntroDemo() {
  const [step, setStep] = useState(0)
  const steps = ['概要', '設定', '実行', '確認']
  return (
    <DemoPanel title="Turborepo とは？">
      <div className="generic-demo-box">
        <strong>Turborepo · Turborepo とは？</strong>
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

export function MonorepoDemo() {
  const [step, setStep] = useState(0)
  const steps = ['概要', '設定', '実行', '確認']
  return (
    <DemoPanel title="モノレポとは？">
      <div className="generic-demo-box">
        <strong>Turborepo · モノレポとは？</strong>
        <p>{steps[step]} の段階を表示中です。実際のプロジェクトでは公式ドキュメントの手順を試してみましょう。</p>
        <code className="selector-code">// lesson: monorepo</code>
      </div>
      <div className="toggle-row">
        {steps.map((s, i) => (
          <button key={s} className={step === i ? 'active' : ''} onClick={() => setStep(i)}>{s}</button>
        ))}
      </div>
    </DemoPanel>
  )
}

export function SetupDemo() {
  const [step, setStep] = useState(0)
  const steps = ['概要', '設定', '実行', '確認']
  return (
    <DemoPanel title="セットアップ">
      <div className="generic-demo-box">
        <strong>Turborepo · セットアップ</strong>
        <p>{steps[step]} の段階を表示中です。実際のプロジェクトでは公式ドキュメントの手順を試してみましょう。</p>
        <code className="selector-code">// lesson: setup</code>
      </div>
      <div className="toggle-row">
        {steps.map((s, i) => (
          <button key={s} className={step === i ? 'active' : ''} onClick={() => setStep(i)}>{s}</button>
        ))}
      </div>
    </DemoPanel>
  )
}

export function WorkspacesDemo() {
  const [step, setStep] = useState(0)
  const steps = ['概要', '設定', '実行', '確認']
  return (
    <DemoPanel title="ワークスペース">
      <div className="generic-demo-box">
        <strong>Turborepo · ワークスペース</strong>
        <p>{steps[step]} の段階を表示中です。実際のプロジェクトでは公式ドキュメントの手順を試してみましょう。</p>
        <code className="selector-code">// lesson: workspaces</code>
      </div>
      <div className="toggle-row">
        {steps.map((s, i) => (
          <button key={s} className={step === i ? 'active' : ''} onClick={() => setStep(i)}>{s}</button>
        ))}
      </div>
    </DemoPanel>
  )
}

export function TasksDemo() {
  const [step, setStep] = useState(0)
  const steps = ['概要', '設定', '実行', '確認']
  return (
    <DemoPanel title="タスク定義">
      <div className="generic-demo-box">
        <strong>Turborepo · タスク定義</strong>
        <p>{steps[step]} の段階を表示中です。実際のプロジェクトでは公式ドキュメントの手順を試してみましょう。</p>
        <code className="selector-code">// lesson: tasks</code>
      </div>
      <div className="toggle-row">
        {steps.map((s, i) => (
          <button key={s} className={step === i ? 'active' : ''} onClick={() => setStep(i)}>{s}</button>
        ))}
      </div>
    </DemoPanel>
  )
}

export function PipelineDemo() {
  const [step, setStep] = useState(0)
  const steps = ['概要', '設定', '実行', '確認']
  return (
    <DemoPanel title="パイプライン">
      <div className="generic-demo-box">
        <strong>Turborepo · パイプライン</strong>
        <p>{steps[step]} の段階を表示中です。実際のプロジェクトでは公式ドキュメントの手順を試してみましょう。</p>
        <code className="selector-code">// lesson: pipeline</code>
      </div>
      <div className="toggle-row">
        {steps.map((s, i) => (
          <button key={s} className={step === i ? 'active' : ''} onClick={() => setStep(i)}>{s}</button>
        ))}
      </div>
    </DemoPanel>
  )
}

export function CacheDemo() {
  const [step, setStep] = useState(0)
  const steps = ['概要', '設定', '実行', '確認']
  return (
    <DemoPanel title="キャッシュ">
      <div className="generic-demo-box">
        <strong>Turborepo · キャッシュ</strong>
        <p>{steps[step]} の段階を表示中です。実際のプロジェクトでは公式ドキュメントの手順を試してみましょう。</p>
        <code className="selector-code">// lesson: cache</code>
      </div>
      <div className="toggle-row">
        {steps.map((s, i) => (
          <button key={s} className={step === i ? 'active' : ''} onClick={() => setStep(i)}>{s}</button>
        ))}
      </div>
    </DemoPanel>
  )
}

export function FilterDemo() {
  const [step, setStep] = useState(0)
  const steps = ['概要', '設定', '実行', '確認']
  return (
    <DemoPanel title="--filter">
      <div className="generic-demo-box">
        <strong>Turborepo · --filter</strong>
        <p>{steps[step]} の段階を表示中です。実際のプロジェクトでは公式ドキュメントの手順を試してみましょう。</p>
        <code className="selector-code">// lesson: filter</code>
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
    <DemoPanel title="CI 連携">
      <div className="generic-demo-box">
        <strong>Turborepo · CI 連携</strong>
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

export function NextStepsDemo() {
  const [step, setStep] = useState(0)
  const steps = ['概要', '設定', '実行', '確認']
  return (
    <DemoPanel title="次のステップ">
      <div className="generic-demo-box">
        <strong>Turborepo · 次のステップ</strong>
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
  'monorepo': MonorepoDemo,
  'setup': SetupDemo,
  'workspaces': WorkspacesDemo,
  'tasks': TasksDemo,
  'pipeline': PipelineDemo,
  'cache': CacheDemo,
  'filter': FilterDemo,
  'ci': CiDemo,
  'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
