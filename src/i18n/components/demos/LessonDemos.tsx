import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

export function IntroDemo() {
  const [step, setStep] = useState(0)
  const steps = ["i18n と l10n","なぜ i18n が必要か","i18n の範囲"]
  return (
    <DemoPanel title="i18n とは？">
      <p className="demo-note">国際化とローカライゼーションの概念を理解します</p>
      <code className="selector-code">{"i18n とは？"}</code>
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

export function BasicsDemo() {
  const [step, setStep] = useState(0)
  const steps = ["翻訳キー","名前空間","ネストとパラメータ"]
  return (
    <DemoPanel title="基本的な実装">
      <p className="demo-note">翻訳キーと翻訳ファイルの管理を学びます</p>
      <code className="selector-code">{"// locales/ja.json"}</code>
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

export function NextIntlDemo() {
  const [step, setStep] = useState(0)
  const steps = ["セットアップ","App Router 構成","Server Components"]
  return (
    <DemoPanel title="next-intl">
      <p className="demo-note">Next.js App Router 向け i18n を学びます</p>
      <code className="selector-code">{"npm install next-intl"}</code>
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

export function ReactI18nextDemo() {
  const [step, setStep] = useState(0)
  const steps = ["セットアップ","useTranslation フック","Trans コンポーネント"]
  return (
    <DemoPanel title="react-i18next">
      <p className="demo-note">React 向け i18n ライブラリを学びます</p>
      <code className="selector-code">{"import i18n from \"i18next\";"}</code>
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

export function FormattingDemo() {
  const [step, setStep] = useState(0)
  const steps = ["Intl API","i18n ライブラリのフォーマット","タイムゾーン"]
  return (
    <DemoPanel title="日付・数値・通貨">
      <p className="demo-note">ロケール依存のフォーマットを学びます</p>
      <code className="selector-code">{"new Intl.DateTimeFormat(\"ja-JP\", { dateStyle: \"long\" }).format(new Date());"}</code>
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

export function PluralizationDemo() {
  const [step, setStep] = useState(0)
  const steps = ["複数形の複雑さ","ICU MessageFormat","性（Gender）"]
  return (
    <DemoPanel title="複数形の処理">
      <p className="demo-note">言語ごとの複数形ルールを学びます</p>
      <code className="selector-code">{"// locales/en.json"}</code>
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

export function RoutingDemo() {
  const [step, setStep] = useState(0)
  const steps = ["URL パターン","ロケール検出","hreflang タグ"]
  return (
    <DemoPanel title="多言語ルーティング">
      <p className="demo-note">URL ベースのロケール切り替えを学びます</p>
      <code className="selector-code">{"// Next.js App Router"}</code>
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

export function RtlDemo() {
  const [step, setStep] = useState(0)
  const steps = ["RTL とは","CSS Logical Properties","テスト"]
  return (
    <DemoPanel title="RTL 対応">
      <p className="demo-note">右から左の言語への対応を学びます</p>
      <code className="selector-code">{"/* 物理プロパティ（RTL で問題） */"}</code>
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
  const steps = ["翻訳ファイルの管理","未翻訳キーの検出","翻訳の品質"]
  return (
    <DemoPanel title="翻訳ワークフロー">
      <p className="demo-note">翻訳の管理と抽出を学びます</p>
      <code className="selector-code">{"翻訳ワークフロー"}</code>
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
      <p className="demo-note">i18n の学習を続けるための道筋を確認します</p>
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
  'basics': BasicsDemo,
  'next-intl': NextIntlDemo,
  'react-i18next': ReactI18nextDemo,
  'formatting': FormattingDemo,
  'pluralization': PluralizationDemo,
  'routing': RoutingDemo,
  'rtl': RtlDemo,
  'workflow': WorkflowDemo,
  'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
