import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

export function IntroDemo() {
  const [mode, setMode] = useState<'cloud' | 'edge'>('cloud')
  const hops = mode === 'cloud' ? ['ユーザー', '東京 DC', 'レスポンス'] : ['ユーザー', '大阪 PoP', 'レスポンス']
  const latency = mode === 'cloud' ? '約 80ms' : '約 15ms'

  return (
    <DemoPanel title="クラウド中心 vs エッジ">
      <div className="toggle-row">
        <button className={mode === 'cloud' ? 'active' : ''} onClick={() => setMode('cloud')}>クラウド中心</button>
        <button className={mode === 'edge' ? 'active' : ''} onClick={() => setMode('edge')}>エッジ処理</button>
      </div>
      <div className="edge-flow">
        {hops.map((hop, i) => (
          <span key={hop} className="edge-flow-item">
            {hop}
            {i < hops.length - 1 && <span className="edge-arrow">→</span>}
          </span>
        ))}
      </div>
      <div className="edge-stat">
        <span>往復レイテンシ（目安）</span>
        <strong className={mode === 'edge' ? 'fast' : 'slow'}>{latency}</strong>
      </div>
      <p className="demo-note">
        {mode === 'edge'
          ? '処理をユーザー近くの PoP で完結 → 遠いリージョンへの往復を省略'
          : 'すべての処理が遠いデータセンターで実行される'}
      </p>
    </DemoPanel>
  )
}

export function WhyEdgeDemo() {
  const locations = [
    { name: '東京 DC', user: '大阪', rtt: 35, edge: 12 },
    { name: '東京 DC', user: 'シドニー', rtt: 120, edge: 18 },
    { name: '東京 DC', user: 'ロンドン', rtt: 240, edge: 22 },
  ]
  const [idx, setIdx] = useState(0)
  const loc = locations[idx]

  return (
    <DemoPanel title="地理とレイテンシ">
      <div className="toggle-row wrap">
        {locations.map((l, i) => (
          <button key={l.user} className={idx === i ? 'active' : ''} onClick={() => setIdx(i)}>
            {l.user}のユーザー
          </button>
        ))}
      </div>
      <div className="edge-compare">
        <div className="edge-compare-col slow">
          <span>クラウド往復</span>
          <strong>{loc.rtt} ms</strong>
        </div>
        <div className="edge-compare-col fast">
          <span>エッジ処理</span>
          <strong>{loc.edge} ms</strong>
        </div>
      </div>
      <p className="demo-note">ユーザーが {loc.user} にいる場合の目安（オリジン: {loc.name}）</p>
    </DemoPanel>
  )
}

export function EdgeVsCloudDemo() {
  const tasks = [
    { name: 'JWT 検証', place: 'edge', reason: '軽量・毎リクエスト発生' },
    { name: '商品一覧 API', place: 'edge', reason: '読み取り多・キャッシュ向き' },
    { name: '注文・決済', place: 'cloud', reason: '整合性・トランザクション必須' },
    { name: '月次レポート生成', place: 'cloud', reason: '長時間・大量データ処理' },
    { name: 'A/B 振り分け', place: 'edge', reason: 'Cookie 見て即リダイレクト' },
    { name: '画像リサイズ（大）', place: 'cloud', reason: 'CPU・メモリを多く使う' },
  ]
  const [idx, setIdx] = useState(0)
  const t = tasks[idx]

  return (
    <DemoPanel title="エッジ向き vs クラウド向き">
      <div className="edge-task-list">
        {tasks.map((task, i) => (
          <button
            key={task.name}
            className={`edge-task-btn ${idx === i ? 'active' : ''}`}
            onClick={() => setIdx(i)}
          >
            {task.name}
          </button>
        ))}
      </div>
      <div className={`edge-task-result ${t.place}`}>
        <strong>{t.place === 'edge' ? '⚡ エッジ向き' : '☁ クラウド向き'}</strong>
        <p>{t.reason}</p>
      </div>
    </DemoPanel>
  )
}

export function CdnDemo() {
  const [hit, setHit] = useState(false)
  return (
    <DemoPanel title="CDN キャッシュ">
      <code className="selector-code">GET /assets/logo.png</code>
      <div className="edge-cache-flow">
        <span>ユーザー</span>
        <span className="edge-arrow">→</span>
        <span className={hit ? 'hit' : 'miss'}>{hit ? 'エッジキャッシュ ✓' : 'エッジキャッシュ ✗'}</span>
        {!hit && (
          <>
            <span className="edge-arrow">→</span>
            <span>オリジンサーバー</span>
          </>
        )}
      </div>
      <div className="edge-compare">
        <div className={`edge-compare-col ${hit ? 'fast' : 'slow'}`}>
          <span>レスポンス時間</span>
          <strong>{hit ? '5 ms' : '180 ms'}</strong>
        </div>
        <div className={`edge-compare-col ${hit ? 'fast' : 'slow'}`}>
          <span>オリジン負荷</span>
          <strong>{hit ? 'なし' : 'あり'}</strong>
        </div>
      </div>
      <button className="btn-primary" style={{ width: '100%', marginTop: '0.75rem' }} onClick={() => setHit((h) => !h)}>
        {hit ? 'キャッシュをクリア（ミス）' : '2回目のリクエスト（ヒット）'}
      </button>
    </DemoPanel>
  )
}

export function EdgeFunctionsDemo() {
  const [path, setPath] = useState('/api/hello')
  const responses: Record<string, { status: number; body: string }> = {
    '/api/hello': { status: 200, body: '{ "message": "Hello from edge!" }' },
    '/api/auth': { status: 401, body: '{ "error": "Unauthorized" }' },
    '/other': { status: 404, body: 'Not Found' },
  }
  const res = responses[path]

  return (
    <DemoPanel title="エッジ関数のルーティング">
      <div className="toggle-row wrap">
        {Object.keys(responses).map((p) => (
          <button key={p} className={path === p ? 'active' : ''} onClick={() => setPath(p)}>{p}</button>
        ))}
      </div>
      <div className="edge-fn-flow">
        <span>Request</span>
        <span className="edge-arrow">→</span>
        <span className="edge-highlight">Edge Function</span>
        <span className="edge-arrow">→</span>
        <span>{res.status} {res.body}</span>
      </div>
      <p className="demo-note">起動数 ms で処理。オリジンに届く前に認証・ルーティング可能</p>
    </DemoPanel>
  )
}

export function EdgeStorageDemo() {
  const stores = [
    { name: 'KV', icon: '🔑', use: '設定・フラグ・セッション', example: 'feature-flags → { darkMode: true }' },
    { name: 'Cache', icon: '⚡', use: 'API レスポンスの一時保存', example: 'GET /api/products → 60秒キャッシュ' },
    { name: 'Edge DB', icon: '🗄', use: '読み取り中心のデータ', example: 'SELECT * FROM products LIMIT 20' },
  ]
  const [idx, setIdx] = useState(0)
  const s = stores[idx]

  return (
    <DemoPanel title="エッジでのデータ保存">
      <div className="edge-store-grid">
        {stores.map((store, i) => (
          <button
            key={store.name}
            className={`edge-store-card ${idx === i ? 'active' : ''}`}
            onClick={() => setIdx(i)}
          >
            <span>{store.icon}</span>
            <strong>{store.name}</strong>
          </button>
        ))}
      </div>
      <div className="edge-store-detail">
        <p><strong>用途:</strong> {s.use}</p>
        <code className="selector-code">{s.example}</code>
      </div>
    </DemoPanel>
  )
}

export function LatencyDemo() {
  const [ttl, setTtl] = useState(60)
  const hitRate = ttl >= 300 ? 92 : ttl >= 60 ? 75 : ttl >= 10 ? 45 : 15
  const freshness = ttl >= 300 ? '低' : ttl >= 60 ? '中' : '高'

  return (
    <DemoPanel title="TTL とキャッシュヒット率">
      <div className="toggle-row wrap">
        {[10, 60, 300, 3600].map((t) => (
          <button key={t} className={ttl === t ? 'active' : ''} onClick={() => setTtl(t)}>
            TTL {t}秒
          </button>
        ))}
      </div>
      <div className="edge-compare">
        <div className="edge-compare-col fast">
          <span>ヒット率（目安）</span>
          <strong>{hitRate}%</strong>
        </div>
        <div className="edge-compare-col">
          <span>データの新しさ</span>
          <strong>{freshness}</strong>
        </div>
      </div>
      <p className="demo-note">TTL が長いほど高速だが、古いデータが返る可能性が上がる</p>
    </DemoPanel>
  )
}

export function UseCasesDemo() {
  const [variant, setVariant] = useState<'A' | 'B'>('A')
  const roll = () => setVariant(Math.random() > 0.5 ? 'A' : 'B')

  return (
    <DemoPanel title="エッジでの A/B 振り分け">
      <p className="demo-note">エッジが Cookie を見てバリアントを決定 → オリジンへ行く前に振り分け</p>
      <div className={`edge-ab-result variant-${variant.toLowerCase()}`}>
        <strong>バリアント {variant}</strong>
        <p>{variant === 'A' ? '新しい UI を表示' : '既存 UI を表示'}</p>
      </div>
      <button className="btn-primary" style={{ width: '100%' }} onClick={roll}>
        リクエストをシミュレート
      </button>
    </DemoPanel>
  )
}

export function PlatformsDemo() {
  const platforms = [
    { name: 'Cloudflare', focus: '最大規模のエッジ + D1/R2/KV', icon: '☁' },
    { name: 'Vercel', focus: 'Next.js / Edge Middleware', icon: '▲' },
    { name: 'Netlify', focus: 'Jamstack + Deno Edge', icon: '◆' },
    { name: 'AWS', focus: 'Lambda@Edge + CloudFront', icon: '⬡' },
  ]
  const [idx, setIdx] = useState(0)

  return (
    <DemoPanel title="主要プラットフォーム">
      <div className="edge-store-grid">
        {platforms.map((p, i) => (
          <button
            key={p.name}
            className={`edge-store-card ${idx === i ? 'active' : ''}`}
            onClick={() => setIdx(i)}
          >
            <span>{p.icon}</span>
            <strong>{p.name}</strong>
          </button>
        ))}
      </div>
      <div className="edge-store-detail">
        <p>{platforms[idx].focus}</p>
      </div>
    </DemoPanel>
  )
}

export function NextStepsDemo() {
  const path = ['エッジ入門 ✓', 'Cloudflare 入門', 'Workers で API', '本番デプロイ']
  return (
    <DemoPanel title="学習の道筋">
      <div className="edge-path">
        {path.map((p, i) => (
          <div key={p} className={`edge-path-step ${i === 0 ? 'done' : ''}`}>
            <span className="edge-path-num">{i === 0 ? '✓' : i + 1}</span>
            <span>{p}</span>
            {i < path.length - 1 && <span className="edge-path-arrow">→</span>}
          </div>
        ))}
      </div>
      <p className="demo-note">次は Cloudflare チュートリアルで実際に Workers を触ってみましょう！</p>
    </DemoPanel>
  )
}

const demoMap: Record<string, React.ComponentType> = {
  intro: IntroDemo,
  'why-edge': WhyEdgeDemo,
  'edge-vs-cloud': EdgeVsCloudDemo,
  cdn: CdnDemo,
  'edge-functions': EdgeFunctionsDemo,
  'edge-storage': EdgeStorageDemo,
  latency: LatencyDemo,
  'use-cases': UseCasesDemo,
  platforms: PlatformsDemo,
  'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
