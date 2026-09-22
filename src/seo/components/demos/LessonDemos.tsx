import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

export function IntroDemo() {
  const [step, setStep] = useState(0)
  const steps = ["SEO の目的","クローラーとインデックス","技術 SEO とコンテンツ SEO"]
  return (
    <DemoPanel title="SEO とは？">
      <p className="demo-note">検索エンジン最適化の基本概念を理解します</p>
      <code className="selector-code">{"SEO とは？"}</code>
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

export function MetadataDemo() {
  const [step, setStep] = useState(0)
  const steps = ["title と description","Open Graph と Twitter Card","Next.js の Metadata API"]
  return (
    <DemoPanel title="メタデータ">
      <p className="demo-note">title、description、OGP タグの設定を学びます</p>
      <code className="selector-code">{"<head>"}</code>
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

export function StructuredDataDemo() {
  const [step, setStep] = useState(0)
  const steps = ["構造化データとは","主要なスキーマタイプ","パンくずリスト"]
  return (
    <DemoPanel title="構造化データ">
      <p className="demo-note">JSON-LD でリッチリザルトを実現します</p>
      <code className="selector-code">{"<script type=\"application/ld+json\">"}</code>
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

export function PerformanceDemo() {
  const [step, setStep] = useState(0)
  const steps = ["3つの Core Web Vitals","最適化手法","測定ツール"]
  return (
    <DemoPanel title="Core Web Vitals">
      <p className="demo-note">ページ速度とユーザー体験指標を学びます</p>
      <code className="selector-code">{"import Image from \"next/image\";"}</code>
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

export function SsrSeoDemo() {
  const [step, setStep] = useState(0)
  const steps = ["CSR の SEO 問題","SSR と SSG","ハイブリッドアプローチ"]
  return (
    <DemoPanel title="SSR/SSG と SEO">
      <p className="demo-note">レンダリング方式の SEO への影響を学びます</p>
      <code className="selector-code">{"// SSG（デフォルト）"}</code>
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

export function SitemapDemo() {
  const [step, setStep] = useState(0)
  const steps = ["sitemap.xml","Next.js でのサイトマップ","robots.txt"]
  return (
    <DemoPanel title="サイトマップと robots.txt">
      <p className="demo-note">クローラーの誘導を学びます</p>
      <code className="selector-code">{"<?xml version=\"1.0\" encoding=\"UTF-8\"?>"}</code>
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

export function SemanticHtmlDemo() {
  const [step, setStep] = useState(0)
  const steps = ["見出しの階層","セマンティック要素","alt 属性とリンクテキスト"]
  return (
    <DemoPanel title="セマンティック HTML">
      <p className="demo-note">HTML 構造と SEO の関係を学びます</p>
      <code className="selector-code">{"セマンティック HTML"}</code>
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

export function CanonicalDemo() {
  const [step, setStep] = useState(0)
  const steps = ["重複コンテンツの問題","canonical タグ","hreflang"]
  return (
    <DemoPanel title="canonical URL と重複コンテンツ">
      <p className="demo-note">URL の正規化を学びます</p>
      <code className="selector-code">{"<link rel=\"canonical\" href=\"https://example.com/react\" />"}</code>
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

export function ToolsDemo() {
  const [step, setStep] = useState(0)
  const steps = ["Google Search Console","Google Analytics","その他のツール"]
  return (
    <DemoPanel title="SEO ツール">
      <p className="demo-note">分析・監視ツールの活用を学びます</p>
      <code className="selector-code">{"SEO ツール"}</code>
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
      <p className="demo-note">SEO の学習を続けるための道筋を確認します</p>
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
  'metadata': MetadataDemo,
  'structured-data': StructuredDataDemo,
  'performance': PerformanceDemo,
  'ssr-seo': SsrSeoDemo,
  'sitemap': SitemapDemo,
  'semantic-html': SemanticHtmlDemo,
  'canonical': CanonicalDemo,
  'tools': ToolsDemo,
  'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
