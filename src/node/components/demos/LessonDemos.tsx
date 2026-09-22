import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

export function IntroDemo() {
  const [step, setStep] = useState(0)
  const steps = ["Node.js の位置づけ","イベント駆動とノンブロッキング I/O","Node.js の用途"]
  return (
    <DemoPanel title="Node.js とは？">
      <p className="demo-note">Node.js の特徴とブラウザ JS との違いを理解します</p>
      <code className="selector-code">{"Node.js とは？"}</code>
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
  const steps = ["インストール方法","プロジェクトの作成","実行とデバッグ"]
  return (
    <DemoPanel title="セットアップ">
      <p className="demo-note">Node.js のインストールとプロジェクト初期化を学びます</p>
      <code className="selector-code">{"# nvm の例"}</code>
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

export function ModulesDemo() {
  const [step, setStep] = useState(0)
  const steps = ["ES Modules（推奨）","CommonJS（レガシー）","組み込みモジュール"]
  return (
    <DemoPanel title="モジュールシステム">
      <p className="demo-note">CommonJS と ES Modules の import/export を学びます</p>
      <code className="selector-code">{"// utils.js"}</code>
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

export function FsDemo() {
  const [step, setStep] = useState(0)
  const steps = ["非同期ファイル I/O","ディレクトリ操作","パスの扱い"]
  return (
    <DemoPanel title="ファイル操作">
      <p className="demo-note">fs モジュールでファイルの読み書きを学びます</p>
      <code className="selector-code">{"import fs from \"node:fs/promises\";"}</code>
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

export function HttpServerDemo() {
  const [step, setStep] = useState(0)
  const steps = ["最小の HTTP サーバー","ルーティングの基本","リクエストボディの読み取り"]
  return (
    <DemoPanel title="HTTP サーバー">
      <p className="demo-note">node:http でシンプルな Web サーバーを作ります</p>
      <code className="selector-code">{"import http from \"node:http\";"}</code>
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

export function EnvDemo() {
  const [step, setStep] = useState(0)
  const steps = ["process.env",".env ファイル","シークレット管理"]
  return (
    <DemoPanel title="環境変数">
      <p className="demo-note">process.env と .env ファイルの管理を学びます</p>
      <code className="selector-code">{"const port = process.env.PORT ?? 3000;"}</code>
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

export function AsyncDemo() {
  const [step, setStep] = useState(0)
  const steps = ["Promise と async/await","並列処理","イベントループの注意点"]
  return (
    <DemoPanel title="非同期処理">
      <p className="demo-note">Promise、async/await、エラーハンドリングを学びます</p>
      <code className="selector-code">{"async function fetchUser(id) {"}</code>
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

export function ExpressIntroDemo() {
  const [step, setStep] = useState(0)
  const steps = ["Express とは","ミドルウェア","ルーターの分割"]
  return (
    <DemoPanel title="Express 入門">
      <p className="demo-note">Express でルーティングとミドルウェアを学びます</p>
      <code className="selector-code">{"import express from \"express\";"}</code>
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

export function NpmScriptsDemo() {
  const [step, setStep] = useState(0)
  const steps = ["scripts の定義","開発と本番の切り替え","次のステップへの橋渡し"]
  return (
    <DemoPanel title="npm スクリプト連携">
      <p className="demo-note">package.json の scripts と Node.js を組み合わせます</p>
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

export function NextStepsDemo() {
  const [step, setStep] = useState(0)
  const steps = ["次に学ぶこと","学習の道筋","実践チェックリスト"]
  return (
    <DemoPanel title="次のステップ">
      <p className="demo-note">Node.js の学習を続けるための道筋を確認します</p>
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
  'modules': ModulesDemo,
  'fs': FsDemo,
  'http-server': HttpServerDemo,
  'env': EnvDemo,
  'async': AsyncDemo,
  'express-intro': ExpressIntroDemo,
  'npm-scripts': NpmScriptsDemo,
  'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
