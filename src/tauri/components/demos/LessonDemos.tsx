import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

export function IntroDemo() {
  const [step, setStep] = useState(0)
  const steps = ['概要', '設定', '実行', '確認']
  return (
    <DemoPanel title="Tauri とは？">
      <div className="generic-demo-box">
        <strong>Tauri · Tauri とは？</strong>
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

export function SetupDemo() {
  const [step, setStep] = useState(0)
  const steps = ['概要', '設定', '実行', '確認']
  return (
    <DemoPanel title="セットアップ">
      <div className="generic-demo-box">
        <strong>Tauri · セットアップ</strong>
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

export function ArchitectureDemo() {
  const [step, setStep] = useState(0)
  const steps = ['概要', '設定', '実行', '確認']
  return (
    <DemoPanel title="アーキテクチャ">
      <div className="generic-demo-box">
        <strong>Tauri · アーキテクチャ</strong>
        <p>{steps[step]} の段階を表示中です。実際のプロジェクトでは公式ドキュメントの手順を試してみましょう。</p>
        <code className="selector-code">// lesson: architecture</code>
      </div>
      <div className="toggle-row">
        {steps.map((s, i) => (
          <button key={s} className={step === i ? 'active' : ''} onClick={() => setStep(i)}>{s}</button>
        ))}
      </div>
    </DemoPanel>
  )
}

export function CommandsDemo() {
  const [step, setStep] = useState(0)
  const steps = ['概要', '設定', '実行', '確認']
  return (
    <DemoPanel title="コマンド">
      <div className="generic-demo-box">
        <strong>Tauri · コマンド</strong>
        <p>{steps[step]} の段階を表示中です。実際のプロジェクトでは公式ドキュメントの手順を試してみましょう。</p>
        <code className="selector-code">// lesson: commands</code>
      </div>
      <div className="toggle-row">
        {steps.map((s, i) => (
          <button key={s} className={step === i ? 'active' : ''} onClick={() => setStep(i)}>{s}</button>
        ))}
      </div>
    </DemoPanel>
  )
}

export function EventsDemo() {
  const [step, setStep] = useState(0)
  const steps = ['概要', '設定', '実行', '確認']
  return (
    <DemoPanel title="イベント">
      <div className="generic-demo-box">
        <strong>Tauri · イベント</strong>
        <p>{steps[step]} の段階を表示中です。実際のプロジェクトでは公式ドキュメントの手順を試してみましょう。</p>
        <code className="selector-code">// lesson: events</code>
      </div>
      <div className="toggle-row">
        {steps.map((s, i) => (
          <button key={s} className={step === i ? 'active' : ''} onClick={() => setStep(i)}>{s}</button>
        ))}
      </div>
    </DemoPanel>
  )
}

export function PermissionsDemo() {
  const [step, setStep] = useState(0)
  const steps = ['概要', '設定', '実行', '確認']
  return (
    <DemoPanel title="権限">
      <div className="generic-demo-box">
        <strong>Tauri · 権限</strong>
        <p>{steps[step]} の段階を表示中です。実際のプロジェクトでは公式ドキュメントの手順を試してみましょう。</p>
        <code className="selector-code">// lesson: permissions</code>
      </div>
      <div className="toggle-row">
        {steps.map((s, i) => (
          <button key={s} className={step === i ? 'active' : ''} onClick={() => setStep(i)}>{s}</button>
        ))}
      </div>
    </DemoPanel>
  )
}

export function FsDemo() {
  const [step, setStep] = useState(0)
  const steps = ['概要', '設定', '実行', '確認']
  return (
    <DemoPanel title="ファイル操作">
      <div className="generic-demo-box">
        <strong>Tauri · ファイル操作</strong>
        <p>{steps[step]} の段階を表示中です。実際のプロジェクトでは公式ドキュメントの手順を試してみましょう。</p>
        <code className="selector-code">// lesson: fs</code>
      </div>
      <div className="toggle-row">
        {steps.map((s, i) => (
          <button key={s} className={step === i ? 'active' : ''} onClick={() => setStep(i)}>{s}</button>
        ))}
      </div>
    </DemoPanel>
  )
}

export function BuildDemo() {
  const [step, setStep] = useState(0)
  const steps = ['概要', '設定', '実行', '確認']
  return (
    <DemoPanel title="ビルドと配布">
      <div className="generic-demo-box">
        <strong>Tauri · ビルドと配布</strong>
        <p>{steps[step]} の段階を表示中です。実際のプロジェクトでは公式ドキュメントの手順を試してみましょう。</p>
        <code className="selector-code">// lesson: build</code>
      </div>
      <div className="toggle-row">
        {steps.map((s, i) => (
          <button key={s} className={step === i ? 'active' : ''} onClick={() => setStep(i)}>{s}</button>
        ))}
      </div>
    </DemoPanel>
  )
}

export function CompareDemo() {
  const [step, setStep] = useState(0)
  const steps = ['概要', '設定', '実行', '確認']
  return (
    <DemoPanel title="Electron との比較">
      <div className="generic-demo-box">
        <strong>Tauri · Electron との比較</strong>
        <p>{steps[step]} の段階を表示中です。実際のプロジェクトでは公式ドキュメントの手順を試してみましょう。</p>
        <code className="selector-code">// lesson: compare</code>
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
        <strong>Tauri · 次のステップ</strong>
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
  'setup': SetupDemo,
  'architecture': ArchitectureDemo,
  'commands': CommandsDemo,
  'events': EventsDemo,
  'permissions': PermissionsDemo,
  'fs': FsDemo,
  'build': BuildDemo,
  'compare': CompareDemo,
  'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
