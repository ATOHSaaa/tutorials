import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

export function IntroDemo() {
  return (
    <DemoPanel title="パフォーマンスの影響">
      <div className="perf-impact">
        <div className="perf-stat"><strong>1秒</strong><span>遅延で CV -7%</span></div>
        <div className="perf-stat"><strong>3秒</strong><span>以上で離脱率 53%</span></div>
      </div>
      <p className="demo-note">速い Web はユーザー体験とビジネス成果に直結します。</p>
    </DemoPanel>
  )
}

export function MetricsDemo() {
  const metrics = [
    { name: 'LCP', desc: '最大コンテンツの描画', good: true, value: '1.8s' },
    { name: 'INP', desc: '操作への応答性', good: true, value: '120ms' },
    { name: 'CLS', desc: 'レイアウトのずれ', good: false, value: '0.15' },
  ]
  return (
    <DemoPanel title="Core Web Vitals">
      {metrics.map((m) => (
        <div key={m.name} className="selector-item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div><strong>{m.name}</strong><span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginLeft: '0.5rem' }}>{m.desc}</span></div>
          <span style={{ color: m.good ? 'var(--success)' : 'var(--danger)' }}>{m.value}</span>
        </div>
      ))}
    </DemoPanel>
  )
}

export function ImagesDemo() {
  const [format, setFormat] = useState<'jpeg' | 'webp'>('webp')
  const sizes = { jpeg: '240 KB', webp: '85 KB' }
  return (
    <DemoPanel title="画像フォーマット">
      <div className="toggle-row">
        <button className={format === 'jpeg' ? 'active' : ''} onClick={() => setFormat('jpeg')}>JPEG</button>
        <button className={format === 'webp' ? 'active' : ''} onClick={() => setFormat('webp')}>WebP</button>
      </div>
      <p>ファイルサイズ: <strong style={{ color: 'var(--accent)' }}>{sizes[format]}</strong></p>
      <p className="demo-note">WebP は同品質で約 30-50% 軽量です。</p>
    </DemoPanel>
  )
}

export function LazyDemo() {
  const [loaded, setLoaded] = useState(false)
  return (
    <DemoPanel title="遅延読み込み">
      <button className="nav-btn" onClick={() => setLoaded(true)} disabled={loaded}>
        {loaded ? 'モジュール読み込み済み ✓' : 'import() で読み込む'}
      </button>
      {loaded && <code className="selector-code" style={{ display: 'block', marginTop: '0.75rem' }}>const Chart = lazy(() =&gt; import('./Chart'))</code>}
    </DemoPanel>
  )
}

export function BundleDemo() {
  const chunks = [{ name: 'main.js', size: 45 }, { name: 'vendor.js', size: 120 }, { name: 'unused.js', size: 35 }]
  return (
    <DemoPanel title="バンドル分析">
      {chunks.map((c) => (
        <div key={c.name} style={{ marginBottom: '0.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
            <span>{c.name}</span><span>{c.size} KB</span>
          </div>
          <div className="progress-bar"><div className="progress-fill" style={{ width: `${(c.size / 120) * 100}%`, background: c.name === 'unused.js' ? 'var(--danger)' : 'var(--accent)' }} /></div>
        </div>
      ))}
      <p className="demo-note">unused.js は Tree Shaking で削除できます。</p>
    </DemoPanel>
  )
}

export function CachingDemo() {
  const layers = ['Browser Cache', 'CDN (Cloudflare)', 'Server']
  const [hit, setHit] = useState(0)
  return (
    <DemoPanel title="キャッシュレイヤー">
      <div className="selector-preview">
        {layers.map((l, i) => (
          <div key={l} className={`selector-item ${i <= hit ? 'selected' : ''}`} onClick={() => setHit(i)} style={{ cursor: 'pointer' }}>
            {i < hit ? '✓ HIT' : i === hit ? '→ チェック中' : '待機'} — {l}
          </div>
        ))}
      </div>
      <button className="nav-btn" style={{ marginTop: '0.5rem' }} onClick={() => setHit((h) => Math.min(h + 1, layers.length - 1))}>リクエスト送信</button>
    </DemoPanel>
  )
}

export function FontsDemo() {
  return (
    <DemoPanel title="フォント最適化">
      <code className="selector-code">@font-face {`{ font-display: swap; }`}</code>
      <p className="demo-note">swap でテキストがすぐ表示され、FOIT（非表示時間）を防ぎます。</p>
    </DemoPanel>
  )
}

export function RenderingDemo() {
  const [cls, setCls] = useState(false)
  return (
    <DemoPanel title="CLS（レイアウトシフト）">
      <div className="cls-demo" style={{ minHeight: '80px' }}>
        {!cls && <div className="cls-placeholder" style={{ height: '60px', background: 'var(--bg-3)', borderRadius: '6px', marginBottom: '0.5rem' }}>画像の場所（予約済み）</div>}
        <button className="nav-btn" onClick={() => setCls(!cls)}>{cls ? '画像を削除' : '画像を読み込む（予約なし）'}</button>
        {cls && <div style={{ height: '60px', background: 'var(--accent)', borderRadius: '6px', marginTop: '0.5rem' }}>画像</div>}
      </div>
      <p className="demo-note">{cls ? '✗ レイアウトがずれました（CLS 悪化）' : '✓ スペースを予約して CLS を防止'}</p>
    </DemoPanel>
  )
}

export function MonitoringDemo() {
  const tools = ['Google Analytics', 'Sentry', 'Vercel Analytics', 'web-vitals ライブラリ']
  return (
    <DemoPanel title="本番モニタリング">
      <div className="selector-preview">
        {tools.map((t) => <div key={t} className="selector-item">{t}</div>)}
      </div>
    </DemoPanel>
  )
}

export function NextStepsDemo() {
  return (
    <DemoPanel title="パフォーマンスの次のステップ">
      <div className="selector-preview">
        {['PageSpeed Insights', 'webpack-bundle-analyzer', 'React Profiler', 'Edge CDN'].map((t) => (
          <div key={t} className="selector-item">{t}</div>
        ))}
      </div>
    </DemoPanel>
  )
}

const demoMap: Record<string, React.ComponentType> = {
  intro: IntroDemo, metrics: MetricsDemo, images: ImagesDemo, lazy: LazyDemo,
  bundle: BundleDemo, caching: CachingDemo, fonts: FontsDemo, rendering: RenderingDemo,
  monitoring: MonitoringDemo, 'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
