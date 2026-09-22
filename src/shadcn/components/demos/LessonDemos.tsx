import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

export function IntroDemo() {
  const [step, setStep] = useState(0)
  const steps = ["shadcn/ui とは","Radix UI + Tailwind","いつ使うか"]
  return (
    <DemoPanel title="shadcn/ui とは？">
      <p className="demo-note">shadcn/ui の思想と他ライブラリとの違いを学びます</p>
      <code className="selector-code">{"shadcn/ui とは？"}</code>
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
  const steps = ["前提条件","init の流れ","コンポーネントの追加"]
  return (
    <DemoPanel title="セットアップ">
      <p className="demo-note">CLI でプロジェクトを初期化する方法を学びます</p>
      <code className="selector-code">{"# 新規 Next.js プロジェクトの例"}</code>
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

export function StructureDemo() {
  const [step, setStep] = useState(0)
  const steps = ["components.json","cn ユーティリティ","CSS 変数"]
  return (
    <DemoPanel title="プロジェクト構成">
      <p className="demo-note">components.json と cn ユーティリティを学びます</p>
      <code className="selector-code">{"# components.json（抜粋）"}</code>
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

export function ButtonDemo() {
  const [step, setStep] = useState(0)
  const steps = ["基本の使い方","バリアント一覧","asChild パターン"]
  return (
    <DemoPanel title="Button">
      <p className="demo-note">バリアントとサイズを学びます</p>
      <code className="selector-code">{"import { Button } from \"@/components/ui/button\";"}</code>
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

export function FormDemo() {
  const [step, setStep] = useState(0)
  const steps = ["Input と Label","Form コンポーネント","バリデーション"]
  return (
    <DemoPanel title="Form と Input">
      <p className="demo-note">フォーム入力とバリデーションを学びます</p>
      <code className="selector-code">{"import { Input } from \"@/components/ui/input\";"}</code>
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

export function CardDemo() {
  const [step, setStep] = useState(0)
  const steps = ["Card の構成","レイアウトパターン","カスタマイズ"]
  return (
    <DemoPanel title="Card">
      <p className="demo-note">コンテンツをグループ化する Card を学びます</p>
      <code className="selector-code">{"import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from \"@/components/ui/card\";"}</code>
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

export function DialogDemo() {
  const [step, setStep] = useState(0)
  const steps = ["Dialog の基本","制御モード","AlertDialog"]
  return (
    <DemoPanel title="Dialog">
      <p className="demo-note">モーダルダイアログを学びます</p>
      <code className="selector-code">{"import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from \"@/components/ui/dialog\";"}</code>
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

export function DropdownDemo() {
  const [step, setStep] = useState(0)
  const steps = ["基本構造","アイコンとショートカット","他のメニュー系"]
  return (
    <DemoPanel title="Dropdown Menu">
      <p className="demo-note">ドロップダウンメニューを学びます</p>
      <code className="selector-code">{"import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from \"@/components/ui/dropdown-menu\";"}</code>
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

export function ThemeDemo() {
  const [step, setStep] = useState(0)
  const steps = ["CSS 変数ベースのテーマ","next-themes","ThemeToggle"]
  return (
    <DemoPanel title="テーマとダークモード">
      <p className="demo-note">CSS 変数とダークモード切り替えを学びます</p>
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

export function NextStepsDemo() {
  const [step, setStep] = useState(0)
  const steps = ["次に学ぶこと","学習の道筋","実践チェックリスト"]
  return (
    <DemoPanel title="次のステップ">
      <p className="demo-note">shadcn/ui の学習を続ける道筋を確認します</p>
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
  'structure': StructureDemo,
  'button': ButtonDemo,
  'form': FormDemo,
  'card': CardDemo,
  'dialog': DialogDemo,
  'dropdown': DropdownDemo,
  'theme': ThemeDemo,
  'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
