import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

export function IntroDemo() {
  const [step, setStep] = useState(0)
  const steps = ["HTTP の限界","WebSocket の特徴","ユースケース"]
  return (
    <DemoPanel title="WebSocket とは？">
      <p className="demo-note">リアルタイム通信の必要性と WebSocket の位置づけを理解します</p>
      <code className="selector-code">{"WebSocket とは？"}</code>
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

export function ProtocolDemo() {
  const [step, setStep] = useState(0)
  const steps = ["ハンドシェイク","メッセージフレーム","HTTP との共存"]
  return (
    <DemoPanel title="WebSocket プロトコル">
      <p className="demo-note">ハンドシェイクとメッセージフレームを学びます</p>
      <code className="selector-code">{"WebSocket プロトコル"}</code>
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

export function NativeApiDemo() {
  const [step, setStep] = useState(0)
  const steps = ["ブラウザ側","Node.js 側（ws パッケージ）","メッセージ形式"]
  return (
    <DemoPanel title="ネイティブ WebSocket API">
      <p className="demo-note">ブラウザと Node.js の WebSocket API を学びます</p>
      <code className="selector-code">{"const ws = new WebSocket(\"wss://example.com/ws\");"}</code>
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

export function SocketIoDemo() {
  const [step, setStep] = useState(0)
  const steps = ["Socket.IO の特徴","クライアント","ルームと名前空間"]
  return (
    <DemoPanel title="Socket.IO">
      <p className="demo-note">高機能なリアルタイムライブラリを学びます</p>
      <code className="selector-code">{"// サーバー"}</code>
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

export function PatternsDemo() {
  const [step, setStep] = useState(0)
  const steps = ["チャットアプリ","リアルタイム通知","Presence（オンライン状態）"]
  return (
    <DemoPanel title="リアルタイムパターン">
      <p className="demo-note">チャット、通知、共同編集の実装パターンを学びます</p>
      <code className="selector-code">{"socket.on(\"connection\", (socket) => {"}</code>
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

export function ScalingDemo() {
  const [step, setStep] = useState(0)
  const steps = ["スティッキーセッションの問題","Redis Pub/Sub","接続数の管理"]
  return (
    <DemoPanel title="スケーリング">
      <p className="demo-note">複数サーバーでの WebSocket 運用を学びます</p>
      <code className="selector-code">{"import { createAdapter } from \"@socket.io/redis-adapter\";"}</code>
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

export function ReactIntegrationDemo() {
  const [step, setStep] = useState(0)
  const steps = ["カスタムフック","状態管理","Socket.IO + React"]
  return (
    <DemoPanel title="React との統合">
      <p className="demo-note">React アプリで WebSocket を使う方法を学びます</p>
      <code className="selector-code">{"function useWebSocket(url) {"}</code>
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

export function SecurityDemo() {
  const [step, setStep] = useState(0)
  const steps = ["接続時の認証","入力検証","レート制限"]
  return (
    <DemoPanel title="WebSocket のセキュリティ">
      <p className="demo-note">認証と入力検証を学びます</p>
      <code className="selector-code">{"io.use((socket, next) => {"}</code>
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
  const steps = ["サーバーのテスト","E2E テスト","負荷テスト"]
  return (
    <DemoPanel title="テスト">
      <p className="demo-note">WebSocket 機能のテスト方法を学びます</p>
      <code className="selector-code">{"import { io as Client } from \"socket.io-client\";"}</code>
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
      <p className="demo-note">WebSocket の学習を続けるための道筋を確認します</p>
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
  'protocol': ProtocolDemo,
  'native-api': NativeApiDemo,
  'socket-io': SocketIoDemo,
  'patterns': PatternsDemo,
  'scaling': ScalingDemo,
  'react-integration': ReactIntegrationDemo,
  'security': SecurityDemo,
  'testing': TestingDemo,
  'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
