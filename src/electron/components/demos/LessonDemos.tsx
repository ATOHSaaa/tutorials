import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

export function IntroDemo() {
  const [step, setStep] = useState(0)
  const steps = ['概要', '設定', '実行', '確認']
  return (
    <DemoPanel title="Electron とは？">
      <div className="generic-demo-box">
        <strong>Electron · Electron とは？</strong>
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
        <strong>Electron · セットアップ</strong>
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

export function MainDemo() {
  const [step, setStep] = useState(0)
  const steps = ['概要', '設定', '実行', '確認']
  return (
    <DemoPanel title="メインプロセス">
      <div className="generic-demo-box">
        <strong>Electron · メインプロセス</strong>
        <p>{steps[step]} の段階を表示中です。実際のプロジェクトでは公式ドキュメントの手順を試してみましょう。</p>
        <code className="selector-code">// lesson: main</code>
      </div>
      <div className="toggle-row">
        {steps.map((s, i) => (
          <button key={s} className={step === i ? 'active' : ''} onClick={() => setStep(i)}>{s}</button>
        ))}
      </div>
    </DemoPanel>
  )
}

export function RendererDemo() {
  const [step, setStep] = useState(0)
  const steps = ['概要', '設定', '実行', '確認']
  return (
    <DemoPanel title="レンダラープロセス">
      <div className="generic-demo-box">
        <strong>Electron · レンダラープロセス</strong>
        <p>{steps[step]} の段階を表示中です。実際のプロジェクトでは公式ドキュメントの手順を試してみましょう。</p>
        <code className="selector-code">// lesson: renderer</code>
      </div>
      <div className="toggle-row">
        {steps.map((s, i) => (
          <button key={s} className={step === i ? 'active' : ''} onClick={() => setStep(i)}>{s}</button>
        ))}
      </div>
    </DemoPanel>
  )
}

export function IpcDemo() {
  const [step, setStep] = useState(0)
  const steps = ['概要', '設定', '実行', '確認']
  return (
    <DemoPanel title="IPC 通信">
      <div className="generic-demo-box">
        <strong>Electron · IPC 通信</strong>
        <p>{steps[step]} の段階を表示中です。実際のプロジェクトでは公式ドキュメントの手順を試してみましょう。</p>
        <code className="selector-code">// lesson: ipc</code>
      </div>
      <div className="toggle-row">
        {steps.map((s, i) => (
          <button key={s} className={step === i ? 'active' : ''} onClick={() => setStep(i)}>{s}</button>
        ))}
      </div>
    </DemoPanel>
  )
}

export function WindowDemo() {
  const [step, setStep] = useState(0)
  const steps = ['概要', '設定', '実行', '確認']
  return (
    <DemoPanel title="ウィンドウ管理">
      <div className="generic-demo-box">
        <strong>Electron · ウィンドウ管理</strong>
        <p>{steps[step]} の段階を表示中です。実際のプロジェクトでは公式ドキュメントの手順を試してみましょう。</p>
        <code className="selector-code">// lesson: window</code>
      </div>
      <div className="toggle-row">
        {steps.map((s, i) => (
          <button key={s} className={step === i ? 'active' : ''} onClick={() => setStep(i)}>{s}</button>
        ))}
      </div>
    </DemoPanel>
  )
}

export function MenusDemo() {
  const [step, setStep] = useState(0)
  const steps = ['概要', '設定', '実行', '確認']
  return (
    <DemoPanel title="メニュー">
      <div className="generic-demo-box">
        <strong>Electron · メニュー</strong>
        <p>{steps[step]} の段階を表示中です。実際のプロジェクトでは公式ドキュメントの手順を試してみましょう。</p>
        <code className="selector-code">// lesson: menus</code>
      </div>
      <div className="toggle-row">
        {steps.map((s, i) => (
          <button key={s} className={step === i ? 'active' : ''} onClick={() => setStep(i)}>{s}</button>
        ))}
      </div>
    </DemoPanel>
  )
}

export function PackagingDemo() {
  const [step, setStep] = useState(0)
  const steps = ['概要', '設定', '実行', '確認']
  return (
    <DemoPanel title="パッケージング">
      <div className="generic-demo-box">
        <strong>Electron · パッケージング</strong>
        <p>{steps[step]} の段階を表示中です。実際のプロジェクトでは公式ドキュメントの手順を試してみましょう。</p>
        <code className="selector-code">// lesson: packaging</code>
      </div>
      <div className="toggle-row">
        {steps.map((s, i) => (
          <button key={s} className={step === i ? 'active' : ''} onClick={() => setStep(i)}>{s}</button>
        ))}
      </div>
    </DemoPanel>
  )
}

export function SecurityDemo() {
  const [step, setStep] = useState(0)
  const steps = ['概要', '設定', '実行', '確認']
  return (
    <DemoPanel title="セキュリティ">
      <div className="generic-demo-box">
        <strong>Electron · セキュリティ</strong>
        <p>{steps[step]} の段階を表示中です。実際のプロジェクトでは公式ドキュメントの手順を試してみましょう。</p>
        <code className="selector-code">// lesson: security</code>
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
        <strong>Electron · 次のステップ</strong>
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
  'main': MainDemo,
  'renderer': RendererDemo,
  'ipc': IpcDemo,
  'window': WindowDemo,
  'menus': MenusDemo,
  'packaging': PackagingDemo,
  'security': SecurityDemo,
  'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
