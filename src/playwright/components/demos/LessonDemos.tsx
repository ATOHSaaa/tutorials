import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

export function IntroDemo() {
  const [step, setStep] = useState(0)
  const steps = ["E2E テストとは","Playwright の特徴","テストピラミッド"]
  return (
    <DemoPanel title="Playwright とは？">
      <p className="demo-note">E2E テストの概念と Playwright の特徴を理解します</p>
      <code className="selector-code">{"Playwright とは？"}</code>
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
  const steps = ["インストール","設定ファイル","プロジェクト構成"]
  return (
    <DemoPanel title="セットアップ">
      <p className="demo-note">Playwright のインストールと初期設定を学びます</p>
      <code className="selector-code">{"npm init playwright@latest"}</code>
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

export function SelectorsDemo() {
  const [step, setStep] = useState(0)
  const steps = ["推奨セレクタ","ロケーターのチェーン","セレクタのベストプラクティス"]
  return (
    <DemoPanel title="セレクタ">
      <p className="demo-note">要素の特定方法とベストプラクティスを学びます</p>
      <code className="selector-code">{"await page.getByRole(\"button\", { name: \"ログイン\" }).click();"}</code>
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

export function ActionsDemo() {
  const [step, setStep] = useState(0)
  const steps = ["基本操作","ファイル操作","マルチタブ・フレーム"]
  return (
    <DemoPanel title="操作">
      <p className="demo-note">クリック、入力、ナビゲーションを学びます</p>
      <code className="selector-code">{"await page.goto(\"/login\");"}</code>
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

export function AssertionsDemo() {
  const [step, setStep] = useState(0)
  const steps = ["expect の基本","ソフトアサーション","スクリーンショット比較"]
  return (
    <DemoPanel title="アサーション">
      <p className="demo-note">状態の検証方法を学びます</p>
      <code className="selector-code">{"await expect(page.getByRole(\"heading\")).toHaveText(\"ダッシュボード\");"}</code>
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

export function PageObjectDemo() {
  const [step, setStep] = useState(0)
  const steps = ["POM の概念","テストでの利用","Fixture との組み合わせ"]
  return (
    <DemoPanel title="Page Object Model">
      <p className="demo-note">テストコードの構造化パターンを学びます</p>
      <code className="selector-code">{"class LoginPage {"}</code>
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

export function ApiTestingDemo() {
  const [step, setStep] = useState(0)
  const steps = ["request コンテキスト","認証付き API テスト","E2E + API の組み合わせ"]
  return (
    <DemoPanel title="API テスト">
      <p className="demo-note">Playwright で API を直接テストします</p>
      <code className="selector-code">{"test(\"API でユーザー作成\", async ({ request }) => {"}</code>
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

export function CiDemo() {
  const [step, setStep] = useState(0)
  const steps = ["GitHub Actions 設定","並列実行","Docker での実行"]
  return (
    <DemoPanel title="CI 連携">
      <p className="demo-note">GitHub Actions でテストを自動実行します</p>
      <code className="selector-code">{"# .github/workflows/playwright.yml"}</code>
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
  const steps = ["UI モード","トレースビューア","デバッグの Tips"]
  return (
    <DemoPanel title="デバッグ">
      <p className="demo-note">テスト失敗の原因を特定する方法を学びます</p>
      <code className="selector-code">{"デバッグ"}</code>
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
      <p className="demo-note">Playwright の学習を続けるための道筋を確認します</p>
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
  'selectors': SelectorsDemo,
  'actions': ActionsDemo,
  'assertions': AssertionsDemo,
  'page-object': PageObjectDemo,
  'api-testing': ApiTestingDemo,
  'ci': CiDemo,
  'debugging': DebuggingDemo,
  'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
