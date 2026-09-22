import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

type StepStatus = 'pending' | 'running' | 'success' | 'fail'

function PipelineStep({
  label,
  status,
  active,
}: {
  label: string
  status: StepStatus
  active: boolean
}) {
  const icons: Record<StepStatus, string> = {
    pending: '○',
    running: '◌',
    success: '✓',
    fail: '✗',
  }
  return (
    <div className={`cicd-step ${active ? 'active' : ''} status-${status}`}>
      <span className="cicd-step-icon">{icons[status]}</span>
      <span>{label}</span>
    </div>
  )
}

export function IntroDemo() {
  const [mode, setMode] = useState<'ci' | 'cd'>('ci')
  const flows = {
    ci: ['コードを push', '自動テスト実行', 'Lint / 型チェック', '結果を PR に表示'],
    cd: ['テスト成功', 'ビルド生成', '本番へデプロイ', 'ユーザーに届く'],
  }

  return (
    <DemoPanel title="CI と CD の違い">
      <div className="toggle-row">
        <button className={mode === 'ci' ? 'active' : ''} onClick={() => setMode('ci')}>CI（統合）</button>
        <button className={mode === 'cd' ? 'active' : ''} onClick={() => setMode('cd')}>CD（配信）</button>
      </div>
      <div className="cicd-flow-vertical">
        {flows[mode].map((step, i) => (
          <div key={step} className="cicd-flow-item">
            <span className="cicd-flow-num">{i + 1}</span>
            <span>{step}</span>
            {i < flows[mode].length - 1 && <span className="cicd-arrow-down">↓</span>}
          </div>
        ))}
      </div>
      <p className="demo-note">{mode === 'ci' ? '品質チェックが主目的' : '本番への届けが主目的'}</p>
    </DemoPanel>
  )
}

export function PipelineDemo() {
  const steps = ['トリガー (push)', 'npm ci', 'npm test', 'npm run build', 'デプロイ']
  const [step, setStep] = useState(0)
  const [failed, setFailed] = useState(false)

  const run = () => {
    if (step < steps.length - 1) {
      setStep((s) => s + 1)
    } else {
      setStep(0)
      setFailed(false)
    }
  }

  const failAtTest = () => {
    setFailed(true)
    setStep(2)
  }

  const getStatus = (i: number): StepStatus => {
    if (failed && i === 2) return 'fail'
    if (i < step) return 'success'
    if (i === step && !failed) return 'running'
    return 'pending'
  }

  return (
    <DemoPanel title="パイプラインの流れ">
      <div className="cicd-pipeline">
        {steps.map((s, i) => (
          <PipelineStep key={s} label={s} status={getStatus(i)} active={i === step} />
        ))}
      </div>
      <div className="cicd-actions">
        <button className="btn-primary" onClick={run} disabled={failed}>
          {step >= steps.length - 1 ? '最初から' : '次のステップ →'}
        </button>
        <button className="nav-btn" onClick={failAtTest}>テスト失敗をシミュレート</button>
      </div>
      {failed && <div className="cicd-alert">テスト失敗 — デプロイはスキップされました</div>}
    </DemoPanel>
  )
}

export function GithubActionsDemo() {
  const concepts = [
    { name: 'Workflow', desc: '.github/workflows/*.yml' },
    { name: 'Event', desc: 'push, pull_request' },
    { name: 'Job', desc: 'test, deploy' },
    { name: 'Step', desc: 'checkout, npm test' },
    { name: 'Runner', desc: 'ubuntu-latest' },
  ]
  const [active, setActive] = useState(0)

  return (
    <DemoPanel title="GitHub Actions の構成要素">
      <div className="cicd-concepts">
        {concepts.map((c, i) => (
          <button
            key={c.name}
            className={`cicd-concept-card ${active === i ? 'active' : ''}`}
            onClick={() => setActive(i)}
          >
            <strong>{c.name}</strong>
            <small>{c.desc}</small>
          </button>
        ))}
      </div>
      <pre className="interface-code">{`# ${concepts[active].name}
${concepts[active].desc}`}</pre>
    </DemoPanel>
  )
}

export function WorkflowsDemo() {
  const [trigger, setTrigger] = useState<'push' | 'pr'>('push')
  const logs = {
    push: ['✓ checkout', '✓ setup-node', '✓ npm ci', '✓ npm test', '✓ npm run build'],
    pr: ['✓ checkout', '✓ setup-node', '✓ npm ci', '✓ npm test', '— build skipped (PR only lint)'],
  }

  return (
    <DemoPanel title="トリガーとワークフロー">
      <div className="toggle-row">
        <button className={trigger === 'push' ? 'active' : ''} onClick={() => setTrigger('push')}>push to main</button>
        <button className={trigger === 'pr' ? 'active' : ''} onClick={() => setTrigger('pr')}>pull_request</button>
      </div>
      <div className="cicd-log">
        <div className="cicd-log-header">workflow: ci.yml — {trigger}</div>
        {logs[trigger].map((line) => (
          <div key={line} className="cicd-log-line">{line}</div>
        ))}
      </div>
    </DemoPanel>
  )
}

export function TestingCiDemo() {
  const [tests, setTests] = useState([true, true, true])
  const allPass = tests.every(Boolean)

  const toggle = (i: number) => {
    setTests((t) => t.map((v, j) => (j === i ? !v : v)))
  }

  return (
    <DemoPanel title="CI でのテスト結果">
      <div className="cicd-test-list">
        {['Button.test.tsx', 'useAuth.test.ts', 'api.test.ts'].map((name, i) => (
          <button
            key={name}
            className={`cicd-test-item ${tests[i] ? 'pass' : 'fail'}`}
            onClick={() => toggle(i)}
          >
            {tests[i] ? '✓' : '✗'} {name}
          </button>
        ))}
      </div>
      <div className={`cicd-status-badge ${allPass ? 'success' : 'fail'}`}>
        {allPass ? '✓ All checks passed — マージ可能' : '✗ Tests failed — マージをブロック'}
      </div>
      <p className="demo-note">テストをクリックして失敗をシミュレート</p>
    </DemoPanel>
  )
}

export function BuildDeployDemo() {
  const [step, setStep] = useState(0)
  const steps = ['npm ci', 'npm run build', 'Upload artifact', 'Deploy to Vercel', '🌐 Live!']

  return (
    <DemoPanel title="ビルド → デプロイ">
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

export function EnvironmentsDemo() {
  const [branch, setBranch] = useState<'pr' | 'main'>('pr')
  const envs = {
    pr: { name: 'preview', url: 'my-app-pr-42.vercel.app', color: '#a78bfa' },
    main: { name: 'production', url: 'my-app.vercel.app', color: '#22c55e' },
  }
  const env = envs[branch]

  return (
    <DemoPanel title="ブランチと環境">
      <div className="toggle-row">
        <button className={branch === 'pr' ? 'active' : ''} onClick={() => setBranch('pr')}>PR #42</button>
        <button className={branch === 'main' ? 'active' : ''} onClick={() => setBranch('main')}>main</button>
      </div>
      <div className="cicd-env-card" style={{ borderColor: env.color }}>
        <span className="cicd-env-label" style={{ background: env.color }}>{env.name}</span>
        <code>{env.url}</code>
      </div>
    </DemoPanel>
  )
}

export function SecretsDemo() {
  const [show, setShow] = useState(false)
  return (
    <DemoPanel title="シークレットの参照">
      <pre className="interface-code">{`env:
  API_TOKEN: \${{ secrets.API_TOKEN }}`}</pre>
      <button className="btn-primary" style={{ width: '100%' }} onClick={() => setShow(true)}>
        ワークフローを実行
      </button>
      {show && (
        <div className="cicd-log">
          <div className="cicd-log-line">✓ API_TOKEN is set</div>
          <div className="cicd-log-line cicd-secret">••••••••••••（値は表示されない）</div>
        </div>
      )}
      <p className="demo-note">シークレットはログに出力されません</p>
    </DemoPanel>
  )
}

export function StrategiesDemo() {
  const [step, setStep] = useState(0)
  const flow = [
    { label: 'PR を作成', env: '—' },
    { label: 'CI + プレビューデプロイ', env: 'preview' },
    { label: 'レビュー & 承認', env: 'preview' },
    { label: 'main にマージ', env: '—' },
    { label: '本番デプロイ', env: 'production' },
  ]

  return (
    <DemoPanel title="PR → プレビュー → 本番">
      <div className="cicd-strategy-flow">
        {flow.map((f, i) => (
          <div key={f.label} className={`cicd-strategy-step ${i <= step ? 'active' : ''}`}>
            <span>{f.label}</span>
            {f.env !== '—' && <span className={`cicd-env-tag env-${f.env}`}>{f.env}</span>}
          </div>
        ))}
      </div>
      <button
        className="btn-primary"
        style={{ width: '100%', marginTop: '0.75rem' }}
        onClick={() => setStep((s) => (s + 1) % flow.length)}
      >
        次のステップ →
      </button>
    </DemoPanel>
  )
}

export function NextStepsDemo() {
  const more = ['キャッシュ最適化', 'モノレポ CI', 'Docker', 'Dependabot', 'GitLab CI']
  return (
    <DemoPanel title="さらに学ぶトピック">
      <div className="selector-preview">
        {more.map((m) => <div key={m} className="selector-item">{m}</div>)}
      </div>
      <p className="demo-note">自分のプロジェクトに .github/workflows/ci.yml を追加してみましょう！</p>
    </DemoPanel>
  )
}

const demoMap: Record<string, React.ComponentType> = {
  intro: IntroDemo,
  pipeline: PipelineDemo,
  'github-actions': GithubActionsDemo,
  workflows: WorkflowsDemo,
  'testing-ci': TestingCiDemo,
  'build-deploy': BuildDeployDemo,
  environments: EnvironmentsDemo,
  secrets: SecretsDemo,
  strategies: StrategiesDemo,
  'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
