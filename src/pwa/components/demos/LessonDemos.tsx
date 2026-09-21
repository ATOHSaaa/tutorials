import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

export function IntroDemo() {
  const features = ['オフライン動作', 'ホーム画面に追加', 'プッシュ通知', '高速な読み込み']
  return (
    <DemoPanel title="PWA の特徴">
      <div className="selector-preview">
        {features.map((f) => <div key={f} className="selector-item">✓ {f}</div>)}
      </div>
    </DemoPanel>
  )
}

export function ManifestDemo() {
  return (
    <DemoPanel title="manifest.json">
      <code className="selector-code" style={{ whiteSpace: 'pre' }}>{`{
  "name": "My App",
  "short_name": "App",
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#6366f1"
}`}</code>
    </DemoPanel>
  )
}

export function ServiceWorkerDemo() {
  const [registered, setRegistered] = useState(false)
  return (
    <DemoPanel title="Service Worker 登録">
      <div className="state-box">{registered ? 'SW: アクティブ ✓' : 'SW: 未登録'}</div>
      <button className="btn-primary" style={{ marginTop: '0.75rem', width: '100%' }} onClick={() => setRegistered(true)} disabled={registered}>
        navigator.serviceWorker.register('/sw.js')
      </button>
    </DemoPanel>
  )
}

export function CacheDemo() {
  const [strategy, setStrategy] = useState<'cache' | 'network'>('cache')
  return (
    <DemoPanel title="キャッシュ戦略">
      <div className="toggle-row">
        <button className={strategy === 'cache' ? 'active' : ''} onClick={() => setStrategy('cache')}>Cache First</button>
        <button className={strategy === 'network' ? 'active' : ''} onClick={() => setStrategy('network')}>Network First</button>
      </div>
      <p>{strategy === 'cache' ? 'キャッシュがあれば即座に返す（オフライン向き）' : 'ネットワークを優先、失敗時にキャッシュ'}</p>
    </DemoPanel>
  )
}

export function OfflineDemo() {
  const [online, setOnline] = useState(true)
  return (
    <DemoPanel title="オフライン対応">
      <div className="toggle-row">
        <button className={online ? 'active' : ''} onClick={() => setOnline(true)}>オンライン</button>
        <button className={!online ? 'active' : ''} onClick={() => setOnline(false)}>オフライン</button>
      </div>
      <div className="state-box" style={{ borderColor: online ? 'var(--success)' : 'var(--danger)' }}>
        {online ? '🌐 ネットワーク接続中' : '📴 オフライン — キャッシュから表示'}
      </div>
    </DemoPanel>
  )
}

export function InstallDemo() {
  const [installed, setInstalled] = useState(false)
  return (
    <DemoPanel title="インストールプロンプト">
      {!installed ? (
        <button className="btn-primary" style={{ width: '100%' }} onClick={() => setInstalled(true)}>📲 アプリをインストール</button>
      ) : (
        <div className="state-box accent">ホーム画面に追加されました ✓</div>
      )}
      <p className="demo-note">beforeinstallprompt イベントでインストールを促せます。</p>
    </DemoPanel>
  )
}

export function PushDemo() {
  const [notified, setNotified] = useState(false)
  return (
    <DemoPanel title="プッシュ通知">
      <button className="btn-primary" style={{ width: '100%' }} onClick={() => setNotified(true)} disabled={notified}>
        {notified ? '通知を送信しました ✓' : '通知を許可して送信'}
      </button>
      {notified && <div className="pwa-notification">🔔 新しいメッセージがあります</div>}
    </DemoPanel>
  )
}

export function WorkboxDemo() {
  return (
    <DemoPanel title="Workbox">
      <code className="selector-code">{'import { precacheAndRoute } from \'workbox-precaching\''}</code>
      <p className="demo-note">Google のライブラリで SW の実装を簡略化できます。</p>
    </DemoPanel>
  )
}

export function LighthouseDemo() {
  const scores = [{ label: 'PWA', score: 92 }, { label: 'Performance', score: 88 }, { label: 'Accessibility', score: 95 }]
  return (
    <DemoPanel title="Lighthouse スコア">
      {scores.map((s) => (
        <div key={s.label} style={{ marginBottom: '0.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
            <span>{s.label}</span><span style={{ color: s.score >= 90 ? 'var(--success)' : 'var(--accent)' }}>{s.score}</span>
          </div>
          <div className="progress-bar"><div className="progress-fill" style={{ width: `${s.score}%` }} /></div>
        </div>
      ))}
    </DemoPanel>
  )
}

export function NextStepsDemo() {
  return (
    <DemoPanel title="PWA の次のステップ">
      <div className="selector-preview">
        {['Background Sync', 'Web Share API', 'Badging API', '本番デプロイ'].map((t) => (
          <div key={t} className="selector-item">{t}</div>
        ))}
      </div>
    </DemoPanel>
  )
}

const demoMap: Record<string, React.ComponentType> = {
  intro: IntroDemo, manifest: ManifestDemo, 'service-worker': ServiceWorkerDemo, cache: CacheDemo,
  offline: OfflineDemo, install: InstallDemo, push: PushDemo, workbox: WorkboxDemo,
  lighthouse: LighthouseDemo, 'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
