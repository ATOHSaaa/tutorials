import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

function TestRunner({ tests }: { tests: { name: string; pass: boolean }[] }) {
  return (
    <div className="test-results">
      {tests.map((t) => (
        <div key={t.name} className={`test-row ${t.pass ? 'pass' : 'fail'}`}>
          <span>{t.pass ? '✓' : '✗'}</span>
          <span>{t.name}</span>
        </div>
      ))}
    </div>
  )
}

export function IntroDemo() {
  const types = [{ name: 'ユニットテスト', desc: '関数・ロジック' }, { name: 'コンポーネントテスト', desc: 'UI の描画' }, { name: 'E2E テスト', desc: 'ユーザーフロー全体' }]
  return (
    <DemoPanel title="テストの種類">
      {types.map((t) => (
        <div key={t.name} className="selector-item" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <strong>{t.name}</strong><span style={{ color: 'var(--text-muted)' }}>{t.desc}</span>
        </div>
      ))}
    </DemoPanel>
  )
}

export function VitestDemo() {
  return (
    <DemoPanel title="Vitest セットアップ">
      <code className="selector-code">npm install -D vitest @testing-library/react</code>
      <code className="selector-code" style={{ display: 'block', marginTop: '0.5rem' }}>// vitest.config.ts に test 設定を追加</code>
    </DemoPanel>
  )
}

export function UnitDemo() {
  const [ran, setRan] = useState(false)
  const add = (a: number, b: number) => a + b
  const pass = ran && add(2, 3) === 5
  return (
    <DemoPanel title="ユニットテスト">
      <code className="selector-code">expect(add(2, 3)).toBe(5)</code>
      <button className="btn-primary" style={{ marginTop: '0.75rem', width: '100%' }} onClick={() => setRan(true)}>
        テスト実行
      </button>
      {ran && <TestRunner tests={[{ name: 'add(2, 3) === 5', pass }]} />}
    </DemoPanel>
  )
}

export function RtlDemo() {
  return (
    <DemoPanel title="React Testing Library">
      <code className="selector-code" style={{ whiteSpace: 'pre' }}>{`import { render, screen } from '@testing-library/react'\n\nrender(<Button>Click</Button>)\nexpect(screen.getByText('Click')).toBeInTheDocument()`}</code>
    </DemoPanel>
  )
}

export function RenderDemo() {
  const [show, setShow] = useState(true)
  return (
    <DemoPanel title="描画テスト">
      <button className="nav-btn" onClick={() => setShow(!show)}>{show ? 'コンポーネントを削除' : 'コンポーネントを表示'}</button>
      {show && <div className="state-box accent" style={{ marginTop: '0.75rem' }}>Hello, World!</div>}
      <p className="demo-note">{show ? 'getByText("Hello, World!") → 見つかる ✓' : 'queryByText → null ✓'}</p>
    </DemoPanel>
  )
}

export function InteractionDemo() {
  const [count, setCount] = useState(0)
  return (
    <DemoPanel title="操作テスト">
      <button className="btn-primary" onClick={() => setCount((c) => c + 1)}>クリック: {count}</button>
      <p className="demo-note">fireEvent.click(button) → count が 1 増えることをテスト</p>
    </DemoPanel>
  )
}

export function MockDemo() {
  const [mocked, setMocked] = useState(false)
  return (
    <DemoPanel title="モック">
      <div className="toggle-row">
        <button className={!mocked ? 'active' : ''} onClick={() => setMocked(false)}>実 API</button>
        <button className={mocked ? 'active' : ''} onClick={() => setMocked(true)}>モック API</button>
      </div>
      <div className="state-box">{mocked ? '返却値: { users: [...] }（固定データ）' : '返却値: 実際の API レスポンス'}</div>
      <code className="selector-code">vi.fn().mockResolvedValue({`{ users: [] }`})</code>
    </DemoPanel>
  )
}

export function AsyncDemo() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle')
  const run = () => { setStatus('loading'); setTimeout(() => setStatus('done'), 1000) }
  return (
    <DemoPanel title="非同期テスト">
      <button className="btn-primary" style={{ width: '100%' }} onClick={run} disabled={status === 'loading'}>
        {status === 'idle' ? 'async テスト実行' : status === 'loading' ? 'waitFor 中...' : '完了 ✓'}
      </button>
      <code className="selector-code">await waitFor(() =&gt; expect(...).toBeInTheDocument())</code>
    </DemoPanel>
  )
}

export function CoverageDemo() {
  const coverage = [{ file: 'utils.ts', pct: 95 }, { file: 'Button.tsx', pct: 80 }, { file: 'App.tsx', pct: 45 }]
  return (
    <DemoPanel title="カバレッジ">
      {coverage.map((c) => (
        <div key={c.file} style={{ marginBottom: '0.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.25rem' }}>
            <span>{c.file}</span><span style={{ color: c.pct >= 80 ? 'var(--success)' : 'var(--danger)' }}>{c.pct}%</span>
          </div>
          <div className="progress-bar"><div className="progress-fill" style={{ width: `${c.pct}%`, background: c.pct >= 80 ? 'var(--success)' : 'var(--danger)' }} /></div>
        </div>
      ))}
    </DemoPanel>
  )
}

export function NextStepsDemo() {
  return (
    <DemoPanel title="テストの次のステップ">
      <div className="selector-preview">
        {['Playwright (E2E)', 'MSW (API モック)', 'Storybook + テスト', 'CI での自動テスト'].map((t) => (
          <div key={t} className="selector-item">{t}</div>
        ))}
      </div>
    </DemoPanel>
  )
}

const demoMap: Record<string, React.ComponentType> = {
  intro: IntroDemo, vitest: VitestDemo, unit: UnitDemo, rtl: RtlDemo,
  render: RenderDemo, interaction: InteractionDemo, mock: MockDemo,
  async: AsyncDemo, coverage: CoverageDemo, 'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
