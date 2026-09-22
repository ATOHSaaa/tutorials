import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

export function IntroDemo() {
  const [step, setStep] = useState(0)
  const steps = ["Three.js とは","WebGL との関係","React Three Fiber"]
  return (
    <DemoPanel title="Three.js とは？">
      <p className="demo-note">Three.js の役割と WebGL との関係を学びます</p>
      <code className="selector-code">{"Three.js とは？"}</code>
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
  const steps = ["インストール","最小のシーン","アニメーションループ"]
  return (
    <DemoPanel title="プロジェクトセットアップ">
      <p className="demo-note">Three.js の導入と最小構成を学びます</p>
      <code className="selector-code">{"npm install three"}</code>
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

export function SceneCameraDemo() {
  const [step, setStep] = useState(0)
  const steps = ["Scene（シーン）","Camera（カメラ）","Renderer（レンダラー）"]
  return (
    <DemoPanel title="シーン・カメラ・レンダラー">
      <p className="demo-note">3D 世界の3大要素を学びます</p>
      <code className="selector-code">{"const camera = new THREE.PerspectiveCamera("}</code>
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

export function GeometryDemo() {
  const [step, setStep] = useState(0)
  const steps = ["ジオメトリとは","BufferGeometry","細分化（segments）"]
  return (
    <DemoPanel title="ジオメトリ">
      <p className="demo-note">3D の形状データを学びます</p>
      <code className="selector-code">{"const geometry = new THREE.BoxGeometry(1, 1, 1);"}</code>
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

export function MaterialDemo() {
  const [step, setStep] = useState(0)
  const steps = ["基本マテリアル","MeshStandardMaterial","テクスチャ"]
  return (
    <DemoPanel title="マテリアル">
      <p className="demo-note">表面の見た目を制御するマテリアルを学びます</p>
      <code className="selector-code">{"const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });"}</code>
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

export function MeshDemo() {
  const [step, setStep] = useState(0)
  const steps = ["Mesh の構成","位置・回転・スケール","Group"]
  return (
    <DemoPanel title="メッシュ">
      <p className="demo-note">ジオメトリとマテリアルを組み合わせた描画単位を学びます</p>
      <code className="selector-code">{"const geometry = new THREE.BoxGeometry();"}</code>
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

export function LightsDemo() {
  const [step, setStep] = useState(0)
  const steps = ["ライトの種類","影","環境マップ"]
  return (
    <DemoPanel title="ライト">
      <p className="demo-note">3D シーンを照らすライトの種類を学びます</p>
      <code className="selector-code">{"const ambient = new THREE.AmbientLight(0xffffff, 0.4);"}</code>
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
  const steps = ["OrbitControls","damping","制限"]
  return (
    <DemoPanel title="カメラ操作">
      <p className="demo-note">OrbitControls でマウス操作を学びます</p>
      <code className="selector-code">{"import { OrbitControls } from \"three/examples/jsm/controls/OrbitControls.js\";"}</code>
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

export function R3fDemo() {
  const [step, setStep] = useState(0)
  const steps = ["R3F とは","drei","状態管理"]
  return (
    <DemoPanel title="React Three Fiber">
      <p className="demo-note">React で Three.js を使う方法を学びます</p>
      <code className="selector-code">{"import { Canvas } from \"@react-three/fiber\";"}</code>
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
      <p className="demo-note">Three.js の学習を続ける道筋を確認します</p>
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
  'scene-camera': SceneCameraDemo,
  'geometry': GeometryDemo,
  'material': MaterialDemo,
  'mesh': MeshDemo,
  'lights': LightsDemo,
  'controls': ControlsDemo,
  'r3f': R3fDemo,
  'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
