import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

type Status = 'up' | 'down' | 'checking'

export function IntroDemo() {
  const [status, setStatus] = useState<Status>('up')
  const run = () => {
    setStatus('checking')
    setTimeout(() => setStatus(Math.random() > 0.3 ? 'up' : 'down'), 800)
  }
  return (
    <DemoPanel title="死活監視の基本">
      <div className={`uptime-status uptime-status-${status}`}>
        {status === 'checking' ? 'チェック中...' : status === 'up' ? '● UP' : '● DOWN'}
      </div>
      <p className="demo-note">外部から定期的にアクセスし、応答を確認します</p>
      <button className="btn-primary" style={{ width: '100%' }} onClick={run}>監視チェックを実行</button>
    </DemoPanel>
  )
}

export function HealthCheckDemo() {
  const [deep, setDeep] = useState(false)
  const body = deep
    ? '{ "status": "ok", "db": "connected", "redis": "connected" }'
    : '{ "status": "ok" }'
  return (
    <DemoPanel title="/health エンドポイント">
      <div className="toggle-row">
        <button className={!deep ? 'active' : ''} onClick={() => setDeep(false)}>シンプル</button>
        <button className={deep ? 'active' : ''} onClick={() => setDeep(true)}>深いチェック</button>
      </div>
      <pre className="interface-code">{`GET /health → 200 OK\n${body}`}</pre>
    </DemoPanel>
  )
}

export function HttpMonitoringDemo() {
  const [url, setUrl] = useState('https://example.com/health')
  const results: Record<string, { code: number; ok: boolean }> = {
    'https://example.com/health': { code: 200, ok: true },
    'https://example.com/api': { code: 200, ok: true },
    'https://example.com/broken': { code: 503, ok: false },
  }
  const r = results[url] ?? { code: 0, ok: false }
  return (
    <DemoPanel title="HTTP 監視">
      <div className="toggle-row wrap">
        {Object.keys(results).map((u) => (
          <button key={u} className={url === u ? 'active' : ''} onClick={() => setUrl(u)}>
            {u.replace('https://example.com', '')}
          </button>
        ))}
      </div>
      <div className="uptime-check-result">
        <span>HTTP {r.code}</span>
        <span className={r.ok ? 'uptime-ok' : 'uptime-fail'}>{r.ok ? '✓ 正常' : '✗ 異常'}</span>
      </div>
    </DemoPanel>
  )
}

export function IntervalsDemo() {
  const [fails, setFails] = useState(0)
  const threshold = 3
  const isDown = fails >= threshold

  const simulateFail = () => setFails((f) => Math.min(f + 1, threshold))
  const simulateOk = () => setFails(0)

  return (
    <DemoPanel title="連続失敗による Down 判定">
      <div className="uptime-fail-track">
        {[1, 2, 3].map((i) => (
          <div key={i} className={`uptime-fail-dot ${fails >= i ? 'fail' : ''}`}>{i}</div>
        ))}
      </div>
      <div className={`uptime-status uptime-status-${isDown ? 'down' : 'up'}`}>
        {isDown ? '● DOWN — アラート送信' : `● UP（失敗 ${fails}/${threshold}）`}
      </div>
      <div className="uptime-actions">
        <button className="nav-btn" onClick={simulateFail}>失敗をシミュレート</button>
        <button className="btn-primary" onClick={simulateOk}>復旧</button>
      </div>
    </DemoPanel>
  )
}

export function AlertingDemo() {
  const [sent, setSent] = useState<string[]>([])
  const channels = ['Slack #alerts', 'Email', 'PagerDuty']

  const alert = (ch: string) => setSent((s) => [...s, `${ch}: example.com is DOWN`])

  return (
    <DemoPanel title="アラート通知">
      <div className="toggle-row wrap">
        {channels.map((ch) => (
          <button key={ch} onClick={() => alert(ch)}>{ch}</button>
        ))}
      </div>
      <div className="uptime-log">
        {sent.length === 0 ? (
          <div className="uptime-log-empty">障害時に通知が送信されます</div>
        ) : (
          sent.map((m, i) => <div key={i} className="uptime-log-line">{m}</div>)
        )}
      </div>
    </DemoPanel>
  )
}

export function StatusPageDemo() {
  const components = [
    { name: 'Web', status: 'operational' as const },
    { name: 'API', status: 'operational' as const },
    { name: 'Database', status: 'degraded' as const },
  ]
  return (
    <DemoPanel title="ステータスページ">
      <div className="uptime-status-page">
        {components.map((c) => (
          <div key={c.name} className="uptime-component">
            <span>{c.name}</span>
            <span className={`uptime-comp-status status-${c.status}`}>
              {c.status === 'operational' ? '正常' : '低下'}
            </span>
          </div>
        ))}
      </div>
      <p className="demo-note">ユーザーに稼働状況を透明性高く公開します</p>
    </DemoPanel>
  )
}

export function SyntheticDemo() {
  const [view, setView] = useState<'external' | 'internal'>('external')
  return (
    <DemoPanel title="外形 vs 内部監視">
      <div className="toggle-row">
        <button className={view === 'external' ? 'active' : ''} onClick={() => setView('external')}>外形監視</button>
        <button className={view === 'internal' ? 'active' : ''} onClick={() => setView('internal')}>内部監視</button>
      </div>
      <div className="uptime-arch">
        {view === 'external' ? (
          <>
            <span>監視サーバー</span>
            <span className="uptime-arrow">→</span>
            <span>あなたのサービス</span>
            <span className="uptime-arrow">→</span>
            <span>ユーザー視点</span>
          </>
        ) : (
          <>
            <span>サーバー内 Agent</span>
            <span className="uptime-arrow">→</span>
            <span>CPU / メモリ / プロセス</span>
          </>
        )}
      </div>
    </DemoPanel>
  )
}

export function ToolsDemo() {
  const tools = [
    { name: 'UptimeRobot', price: '無料〜', feature: '50モニター' },
    { name: 'Better Stack', price: '無料〜', feature: 'ステータスページ' },
    { name: 'GitHub Actions', price: '無料枠', feature: 'cron + curl' },
    { name: 'Datadog', price: '有料', feature: 'APM 統合' },
  ]
  const [active, setActive] = useState(0)
  return (
    <DemoPanel title="監視ツール比較">
      <div className="uptime-tools">
        {tools.map((t, i) => (
          <button
            key={t.name}
            className={`uptime-tool-card ${active === i ? 'active' : ''}`}
            onClick={() => setActive(i)}
          >
            <strong>{t.name}</strong>
            <small>{t.price}</small>
          </button>
        ))}
      </div>
      <p className="demo-note">{tools[active].feature}</p>
    </DemoPanel>
  )
}

export function IncidentDemo() {
  const [step, setStep] = useState(0)
  const steps = [
    'アラート受信',
    '影響範囲を確認',
    'ステータスページ更新',
    '原因調査・復旧',
    'ポストモーテム',
  ]
  return (
    <DemoPanel title="障害対応フロー">
      <div className="selector-preview">
        {steps.map((s, i) => (
          <div key={s} className={`selector-item ${i <= step ? 'selected' : ''}`}>
            {i < step ? '✓' : i + 1}. {s}
          </div>
        ))}
      </div>
      <button
        className="btn-primary"
        style={{ width: '100%', marginTop: '0.75rem' }}
        onClick={() => setStep((s) => Math.min(s + 1, steps.length - 1))}
        disabled={step >= steps.length - 1}
      >
        次のステップ →
      </button>
    </DemoPanel>
  )
}

export function NextStepsDemo() {
  const more = ['SLA / SLO', 'Prometheus', 'Grafana', 'OpenTelemetry', 'On-call']
  return (
    <DemoPanel title="さらに学ぶトピック">
      <div className="selector-preview">
        {more.map((m) => <div key={m} className="selector-item">{m}</div>)}
      </div>
      <p className="demo-note">自分のプロジェクトに /health と監視を設定してみましょう！</p>
    </DemoPanel>
  )
}

const demoMap: Record<string, React.ComponentType> = {
  intro: IntroDemo,
  'health-check': HealthCheckDemo,
  'http-monitoring': HttpMonitoringDemo,
  intervals: IntervalsDemo,
  alerting: AlertingDemo,
  'status-page': StatusPageDemo,
  synthetic: SyntheticDemo,
  tools: ToolsDemo,
  incident: IncidentDemo,
  'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
