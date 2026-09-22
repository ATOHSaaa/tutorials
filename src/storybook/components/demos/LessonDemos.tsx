import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

export function IntroDemo() {
  const [step, setStep] = useState(0)
  const steps = ["コンポーネント駆動開発","主なメリット","対応フレームワーク"]
  return (
    <DemoPanel title="Storybook とは？">
      <p className="demo-note">コンポーネントカタログの概念とメリットを理解します</p>
      <code className="selector-code">{"Storybook とは？"}</code>
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
  const steps = ["インストール","設定ファイル","ディレクトリ構成"]
  return (
    <DemoPanel title="セットアップ">
      <p className="demo-note">プロジェクトへの Storybook 導入を学びます</p>
      <code className="selector-code">{"npx storybook@latest init"}</code>
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

export function StoriesDemo() {
  const [step, setStep] = useState(0)
  const steps = ["CSF3 の基本","args による Props 制御","デコレーター"]
  return (
    <DemoPanel title="ストーリーの書き方">
      <p className="demo-note">CSF（Component Story Format）を学びます</p>
      <code className="selector-code">{"import type { Meta, StoryObj } from \"@storybook/react\";"}</code>
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

export function ControlsDemo() {
  const [step, setStep] = useState(0)
  const steps = ["Controls アドオン","argTypes の設定","Actions"]
  return (
    <DemoPanel title="Controls と Actions">
      <p className="demo-note">インタラクティブな Props 操作を学びます</p>
      <code className="selector-code">{"const meta: Meta<typeof Button> = {"}</code>
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

export function DocsDemo() {
  const [step, setStep] = useState(0)
  const steps = ["Docs ページ","MDX ドキュメント","Props テーブル"]
  return (
    <DemoPanel title="自動ドキュメント">
      <p className="demo-note">Docs アドオンでコンポーネント文書を生成します</p>
      <code className="selector-code">{"const meta: Meta<typeof Button> = {"}</code>
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

export function CompositionDemo() {
  const [step, setStep] = useState(0)
  const steps = ["複合ストーリー","テンプレートストーリー","モックデータ"]
  return (
    <DemoPanel title="コンポーネントの合成">
      <p className="demo-note">複合コンポーネントのストーリーを学びます</p>
      <code className="selector-code">{"export const LoginForm: Story = {"}</code>
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

export function TestingDemo() {
  const [step, setStep] = useState(0)
  const steps = ["インタラクションテスト","Visual Regression Testing","テストランナー"]
  return (
    <DemoPanel title="テスト連携">
      <p className="demo-note">Storybook とテストツールの統合を学びます</p>
      <code className="selector-code">{"export const SubmitForm: Story = {"}</code>
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

export function AddonsDemo() {
  const [step, setStep] = useState(0)
  const steps = ["Essential アドオン","a11y アドオン","カスタムアドオン"]
  return (
    <DemoPanel title="アドオン">
      <p className="demo-note">便利なアドオンの活用を学びます</p>
      <code className="selector-code">{"アドオン"}</code>
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

export function WorkflowDemo() {
  const [step, setStep] = useState(0)
  const steps = ["デザインレビュー","CI/CD 統合","デザインシステム"]
  return (
    <DemoPanel title="開発ワークフロー">
      <p className="demo-note">チームでの Storybook 活用を学びます</p>
      <code className="selector-code">{"# .github/workflows/storybook.yml"}</code>
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
      <p className="demo-note">Storybook の学習を続けるための道筋を確認します</p>
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
  'stories': StoriesDemo,
  'controls': ControlsDemo,
  'docs': DocsDemo,
  'composition': CompositionDemo,
  'testing': TestingDemo,
  'addons': AddonsDemo,
  'workflow': WorkflowDemo,
  'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
