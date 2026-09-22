import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

export function IntroDemo() {
  const [step, setStep] = useState(0)
  const steps = ["npm の3つの意味","yarn と pnpm","node_modules"]
  return (
    <DemoPanel title="npm とは？">
      <p className="demo-note">npm の役割と Node.js エコシステムでの位置づけを学びます</p>
      <code className="selector-code">{"npm とは？"}</code>
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

export function PackageJsonDemo() {
  const [step, setStep] = useState(0)
  const steps = ["主要フィールド","dependencies と devDependencies","exports フィールド"]
  return (
    <DemoPanel title="package.json">
      <p className="demo-note">プロジェクトの設計図となる package.json を学びます</p>
      <code className="selector-code">{"{"}</code>
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

export function InstallDemo() {
  const [step, setStep] = useState(0)
  const steps = ["基本コマンド","グローバルインストール","インストールの仕組み"]
  return (
    <DemoPanel title="パッケージのインストール">
      <p className="demo-note">npm install の挙動とオプションを学びます</p>
      <code className="selector-code">{"npm install          # package.json の全依存"}</code>
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

export function SemverDemo() {
  const [step, setStep] = useState(0)
  const steps = ["SemVer の形式","バージョン範囲","アップデート戦略"]
  return (
    <DemoPanel title="セマンティックバージョニング">
      <p className="demo-note">バージョン番号の意味と ^ ~ の使い方を学びます</p>
      <code className="selector-code">{"\"dependencies\": {"}</code>
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

export function ScriptsDemo() {
  const [step, setStep] = useState(0)
  const steps = ["scripts の基本","ライフサイクルスクリプト","環境変数の渡し方"]
  return (
    <DemoPanel title="npm scripts">
      <p className="demo-note">package.json の scripts でタスクを自動化します</p>
      <code className="selector-code">{"\"scripts\": {"}</code>
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

export function NpxDemo() {
  const [step, setStep] = useState(0)
  const steps = ["npx の役割","npm exec","プロジェクト内の CLI"]
  return (
    <DemoPanel title="npx と npm exec">
      <p className="demo-note">パッケージをインストールせず一時実行する方法を学びます</p>
      <code className="selector-code">{"npx create-vite@latest my-app -- --template react-ts"}</code>
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

export function LockfileDemo() {
  const [step, setStep] = useState(0)
  const steps = ["lockfile の目的","npm ci vs npm install","lockfile の管理"]
  return (
    <DemoPanel title="package-lock.json">
      <p className="demo-note">ロックファイルの役割と npm ci を学びます</p>
      <code className="selector-code">{"# CI（GitHub Actions）の例"}</code>
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

export function PublishDemo() {
  const [step, setStep] = useState(0)
  const steps = ["公開の準備","バージョンの更新","プライベートパッケージ"]
  return (
    <DemoPanel title="パッケージの公開">
      <p className="demo-note">npm レジストリへの公開手順を学びます</p>
      <code className="selector-code">{"{"}</code>
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

export function WorkspacesDemo() {
  const [step, setStep] = useState(0)
  const steps = ["workspaces の設定","ワークスペース間の依存","モノレポの注意点"]
  return (
    <DemoPanel title="npm workspaces">
      <p className="demo-note">モノレポで複数パッケージを管理する方法を学びます</p>
      <code className="selector-code">{"{"}</code>
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
      <p className="demo-note">npm の学習を続けるための道筋を確認します</p>
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
  'package-json': PackageJsonDemo,
  'install': InstallDemo,
  'semver': SemverDemo,
  'scripts': ScriptsDemo,
  'npx': NpxDemo,
  'lockfile': LockfileDemo,
  'publish': PublishDemo,
  'workspaces': WorkspacesDemo,
  'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
