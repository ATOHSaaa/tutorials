import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

function GitGraph({ commits, branches }: { commits: string[]; branches?: string[] }) {
  return (
    <div className="git-graph">
      {commits.map((c, i) => (
        <div key={i} className="git-commit-row">
          <div className="git-dot" />
          {i < commits.length - 1 && <div className="git-line" />}
          <span className="git-hash">abc{i + 123}</span>
          <span>{c}</span>
        </div>
      ))}
      {branches && <p className="demo-note">ブランチ: {branches.join(', ')}</p>}
    </div>
  )
}

export function IntroDemo() {
  return (
    <DemoPanel title="バージョン管理のイメージ">
      <GitGraph commits={['初期コミット', 'ヘッダー追加', 'スタイル修正', 'バグ修正']} />
      <p className="demo-note">Git は変更の履歴を時系列で保存し、いつでも過去に戻れます。</p>
    </DemoPanel>
  )
}

export function InstallDemo() {
  return (
    <DemoPanel title="初期設定">
      <div className="generic-demo-box">
        <code className="selector-code">git config --global user.name "Your Name"</code>
        <code className="selector-code" style={{ display: 'block', marginTop: '0.5rem' }}>git config --global user.email "you@example.com"</code>
        <p style={{ marginTop: '0.75rem', fontSize: '0.85rem' }}>最初にユーザー名とメールを設定します。</p>
      </div>
    </DemoPanel>
  )
}

export function BasicsDemo() {
  const [staged, setStaged] = useState(false)
  const [committed, setCommitted] = useState(false)
  return (
    <DemoPanel title="add → commit の流れ">
      <div className="git-workflow">
        <div className={`git-area ${staged ? 'active' : ''}`}>
          <strong>ステージング</strong>
          <p>index.html {staged ? '✓ 追加済み' : '（未追加）'}</p>
        </div>
        <div className={`git-area ${committed ? 'active' : ''}`}>
          <strong>リポジトリ</strong>
          <p>{committed ? 'commit: "ヘッダー追加"' : '（空）'}</p>
        </div>
      </div>
      <div className="toggle-row">
        <button disabled={staged} onClick={() => setStaged(true)}>git add .</button>
        <button disabled={!staged || committed} className={staged && !committed ? 'active' : ''} onClick={() => setCommitted(true)}>git commit</button>
      </div>
    </DemoPanel>
  )
}

export function HistoryDemo() {
  const [show, setShow] = useState<'log' | 'diff'>('log')
  return (
    <DemoPanel title="履歴の確認">
      <div className="toggle-row">
        <button className={show === 'log' ? 'active' : ''} onClick={() => setShow('log')}>git log</button>
        <button className={show === 'diff' ? 'active' : ''} onClick={() => setShow('diff')}>git diff</button>
      </div>
      {show === 'log' ? (
        <GitGraph commits={['バグ修正 (HEAD)', '機能追加', '初期コミット']} />
      ) : (
        <code className="selector-code" style={{ display: 'block', whiteSpace: 'pre' }}>{`- <h1>旧タイトル</h1>\n+ <h1>新タイトル</h1>`}</code>
      )}
    </DemoPanel>
  )
}

export function BranchDemo() {
  const [branch, setBranch] = useState<'main' | 'feature'>('main')
  return (
    <DemoPanel title="ブランチの切り替え">
      <div className="toggle-row">
        <button className={branch === 'main' ? 'active' : ''} onClick={() => setBranch('main')}>main</button>
        <button className={branch === 'feature' ? 'active' : ''} onClick={() => setBranch('feature')}>feature/login</button>
      </div>
      <GitGraph
        commits={branch === 'main' ? ['main: 最新', '共通の祖先'] : ['feature: ログイン画面', '共通の祖先']}
        branches={[branch === 'main' ? 'main (現在)' : 'feature/login (現在)']}
      />
    </DemoPanel>
  )
}

export function MergeDemo() {
  const [merged, setMerged] = useState(false)
  return (
    <DemoPanel title="ブランチのマージ">
      <GitGraph commits={merged ? ['マージ完了 ✓', 'feature の変更', 'main の変更'] : ['main と feature が分岐中...']} />
      <button className="btn-primary" style={{ marginTop: '1rem', width: '100%' }} onClick={() => setMerged(true)} disabled={merged}>
        {merged ? 'マージ済み' : 'git merge feature'}
      </button>
    </DemoPanel>
  )
}

export function RemoteDemo() {
  const [pushed, setPushed] = useState(false)
  return (
    <DemoPanel title="push / pull">
      <div className="git-workflow">
        <div className="git-area active"><strong>ローカル</strong><p>commit abc123</p></div>
        <div style={{ alignSelf: 'center', fontSize: '1.5rem' }}>{pushed ? '⇄' : '→'}</div>
        <div className={`git-area ${pushed ? 'active' : ''}`}><strong>GitHub</strong><p>{pushed ? '同期済み ✓' : '未同期'}</p></div>
      </div>
      <button className="btn-primary" style={{ marginTop: '1rem', width: '100%' }} onClick={() => setPushed(true)} disabled={pushed}>git push origin main</button>
    </DemoPanel>
  )
}

export function PrDemo() {
  const steps = ['ブランチ作成', 'push', 'PR 作成', 'レビュー', 'マージ']
  const [step, setStep] = useState(2)
  return (
    <DemoPanel title="Pull Request の流れ">
      <div className="roadmap">
        {steps.map((s, i) => (
          <div key={s} className="roadmap-step">
            <div className={`roadmap-circle ${i <= step ? 'done' : ''}`} style={{ borderColor: 'var(--accent)' }}>
              {i < step ? '✓' : i + 1}
            </div>
            <div className="roadmap-info"><strong>{s}</strong></div>
          </div>
        ))}
      </div>
      <button className="nav-btn" style={{ marginTop: '0.75rem' }} onClick={() => setStep((s) => Math.min(s + 1, steps.length - 1))} disabled={step >= steps.length - 1}>次のステップ →</button>
    </DemoPanel>
  )
}

export function ConflictDemo() {
  const [resolved, setResolved] = useState(false)
  return (
    <DemoPanel title="コンフリクト解消">
      {!resolved ? (
        <code className="selector-code" style={{ whiteSpace: 'pre', display: 'block' }}>{`<<<<<<< HEAD\n<h1>タイトルA</h1>\n=======\n<h1>タイトルB</h1>\n>>>>>>> feature`}</code>
      ) : (
        <code className="selector-code">&lt;h1&gt;タイトルA（統合後）&lt;/h1&gt;</code>
      )}
      <button className="btn-primary" style={{ marginTop: '1rem', width: '100%' }} onClick={() => setResolved(true)} disabled={resolved}>
        {resolved ? '解消完了 ✓' : 'コンフリクトを解消'}
      </button>
    </DemoPanel>
  )
}

export function NextStepsDemo() {
  return (
    <DemoPanel title="Git マスターへの道">
      <div className="selector-preview">
        {['GitHub で OSS に参加', 'rebase を学ぶ', 'Git hooks', 'Conventional Commits'].map((t) => (
          <div key={t} className="selector-item">{t}</div>
        ))}
      </div>
    </DemoPanel>
  )
}

const demoMap: Record<string, React.ComponentType> = {
  intro: IntroDemo, install: InstallDemo, basics: BasicsDemo, history: HistoryDemo,
  branch: BranchDemo, merge: MergeDemo, remote: RemoteDemo, pr: PrDemo,
  conflict: ConflictDemo, 'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
