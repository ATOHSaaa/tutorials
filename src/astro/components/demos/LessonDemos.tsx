import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

export function IntroDemo() {
  const [mode, setMode] = useState<'full' | 'islands'>('full')

  return (
    <DemoPanel title="アイランドアーキテクチャ">
      <div className="toggle-row">
        <button className={mode === 'full' ? 'active' : ''} onClick={() => setMode('full')}>
          全部 JavaScript
        </button>
        <button className={mode === 'islands' ? 'active' : ''} onClick={() => setMode('islands')}>
          アイランド方式（Astro）
        </button>
      </div>
      <div className="island-demo-page">
        <div className="island-static">📄 記事本文（HTML のみ）</div>
        <div className="island-static">📄 サイドバー（HTML のみ）</div>
        {mode === 'full' ? (
          <>
            <div className="island-js full-js">⚡ カウンター（JS）</div>
            <div className="island-js full-js">⚡ フォーム（JS）</div>
            <div className="island-js full-js">⚡ ナビ（JS）</div>
          </>
        ) : (
          <div className="island-js">⚡ いいねボタン（JS のアイランド）</div>
        )}
      </div>
      <p className="demo-note">
        {mode === 'full'
          ? 'すべての部分に JS が必要 → ページが重くなる'
          : '必要な部分だけ JS → ページが軽い・速い'}
      </p>
    </DemoPanel>
  )
}

export function SetupDemo() {
  const structure = [
    { path: 'src/pages/index.astro', label: 'トップページ', url: '/' },
    { path: 'src/pages/about.astro', label: 'About ページ', url: '/about' },
    { path: 'src/components/Card.astro', label: 'カード部品', url: '—' },
    { path: 'src/layouts/Base.astro', label: '共通レイアウト', url: '—' },
    { path: 'public/favicon.svg', label: 'アイコン', url: '/favicon.svg' },
  ]

  return (
    <DemoPanel title="プロジェクトの構造">
      <div className="file-tree">
        {structure.map((item) => (
          <div key={item.path} className="file-tree-item">
            <code className="file-path">{item.path}</code>
            <span className="file-label">{item.label}</span>
            {item.url !== '—' && <span className="file-url">→ {item.url}</span>}
          </div>
        ))}
      </div>
    </DemoPanel>
  )
}

export function PagesDemo() {
  const [activePage, setActivePage] = useState('index')

  const pages: Record<string, { title: string; content: string }> = {
    index: { title: 'ホーム', content: 'ようこそ！これはトップページです。' },
    about: { title: 'About', content: 'このサイトについてのページです。' },
    blog: { title: 'Blog', content: 'ブログ記事の一覧ページです。' },
  }

  return (
    <DemoPanel title="ファイルベースルーティング">
      <div className="toggle-row">
        {Object.keys(pages).map((key) => (
          <button key={key} className={activePage === key ? 'active' : ''} onClick={() => setActivePage(key)}>
            {key}.astro
          </button>
        ))}
      </div>
      <div className="page-preview">
        <div className="browser-bar">
          <span className="browser-url">localhost:4321/{activePage === 'index' ? '' : activePage}</span>
        </div>
        <div className="page-content">
          <h3>{pages[activePage].title}</h3>
          <p>{pages[activePage].content}</p>
        </div>
      </div>
    </DemoPanel>
  )
}

function AstroCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="astro-card">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  )
}

export function ComponentsDemo() {
  const cards = [
    { title: '記事1', description: 'Astro 入門ガイド' },
    { title: '記事2', description: 'コンポーネントの作り方' },
    { title: '記事3', description: 'デプロイの手順' },
  ]

  return (
    <DemoPanel title="Card.astro コンポーネントの再利用">
      <pre className="component-code">{`<Card title="記事1" description="..." />
<Card title="記事2" description="..." />
<Card title="記事3" description="..." />`}</pre>
      <div className="astro-card-grid">
        {cards.map((c) => <AstroCard key={c.title} {...c} />)}
      </div>
    </DemoPanel>
  )
}

export function LayoutsDemo() {
  return (
    <DemoPanel title="レイアウトと slot">
      <div className="layout-demo">
        <div className="layout-header">header（共通）</div>
        <div className="layout-slot">
          <span className="slot-label">&lt;slot /&gt;</span>
          <div className="layout-page-content">
            <h4>ページ固有の内容</h4>
            <p>ここが各ページで変わる部分です</p>
          </div>
        </div>
        <div className="layout-footer">footer（共通）</div>
      </div>
    </DemoPanel>
  )
}

export function ContentDemo() {
  return (
    <DemoPanel title="Markdown → HTML 変換">
      <div className="markdown-compare">
        <div className="markdown-source">
          <span className="compare-label">Markdown（.md）</span>
          <pre>{`# はじめての投稿

これは **Markdown** で
書いた記事です。

- リスト1
- リスト2`}</pre>
        </div>
        <div className="markdown-arrow">→</div>
        <div className="markdown-result">
          <span className="compare-label">HTML（自動変換）</span>
          <div className="md-preview">
            <h3>はじめての投稿</h3>
            <p>これは <strong>Markdown</strong> で書いた記事です。</p>
            <ul>
              <li>リスト1</li>
              <li>リスト2</li>
            </ul>
          </div>
        </div>
      </div>
    </DemoPanel>
  )
}

export function StylingDemo() {
  const [scoped, setScoped] = useState(true)

  return (
    <DemoPanel title="スコープ付き CSS">
      <div className="toggle-row">
        <button className={scoped ? 'active' : ''} onClick={() => setScoped(true)}>スコープ付き</button>
        <button className={!scoped ? 'active' : ''} onClick={() => setScoped(false)}>グローバル</button>
      </div>
      <div className="style-demo-cards">
        <div className={`style-demo-card ${scoped ? 'scoped' : 'global'}`}>
          <span>Card A のスタイル</span>
        </div>
        <div className={`style-demo-card ${scoped ? 'scoped-alt' : 'global'}`}>
          <span>Card B のスタイル</span>
        </div>
      </div>
      <p className="demo-note">
        {scoped ? '各コンポーネントの CSS は互いに影響しません' : 'グローバル CSS は全体に適用されます'}
      </p>
    </DemoPanel>
  )
}

export function IslandsDemo() {
  const [count, setCount] = useState(0)
  const [directive, setDirective] = useState('client:load')

  const directives = [
    { id: 'client:load', label: 'client:load', desc: 'ページ読み込み時' },
    { id: 'client:visible', label: 'client:visible', desc: '画面に表示されたら' },
    { id: 'client:idle', label: 'client:idle', desc: 'ブラウザが暇なとき' },
  ]

  return (
    <DemoPanel title="クライアントディレクティブ">
      <div className="toggle-row wrap">
        {directives.map((d) => (
          <button key={d.id} className={directive === d.id ? 'active' : ''} onClick={() => setDirective(d.id)}>
            {d.label}
          </button>
        ))}
      </div>
      <code className="selector-code">&lt;Counter {directive} /&gt;</code>
      <div className="island-interactive">
        <p className="island-static-label">🌊 静的 HTML（JS なし）</p>
        <div className="island-widget">
          <span className="island-badge">⚡ アイランド（{directive}）</span>
          <div className="counter-widget">
            <button onClick={() => setCount((c) => c - 1)}>−</button>
            <span>{count}</span>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
          </div>
        </div>
        <p className="island-static-label">🌊 静的 HTML（JS なし）</p>
      </div>
      <p className="demo-note">{directives.find((d) => d.id === directive)?.desc} に JS が読み込まれます</p>
    </DemoPanel>
  )
}

export function BuildDemo() {
  const [step, setStep] = useState(0)
  const steps = [
    { cmd: 'npm run dev', desc: '開発サーバー起動', output: 'localhost:4321 でプレビュー' },
    { cmd: 'npm run build', desc: '本番ビルド', output: 'dist/ フォルダに出力' },
    { cmd: 'npm run preview', desc: 'ビルド結果の確認', output: '本番と同じ状態で確認' },
    { cmd: 'git push', desc: 'デプロイ', output: 'Vercel / Netlify 等に公開' },
  ]

  return (
    <DemoPanel title="開発からデプロイの流れ">
      <div className="build-steps">
        {steps.map((s, i) => (
          <button
            key={s.cmd}
            className={`build-step ${step === i ? 'active' : ''} ${i < step ? 'done' : ''}`}
            onClick={() => setStep(i)}
          >
            <span className="build-step-num">{i < step ? '✓' : i + 1}</span>
            <code>{s.cmd}</code>
            <span>{s.desc}</span>
          </button>
        ))}
      </div>
      <div className="build-output">
        <span className="output-label">結果</span>
        <p>{steps[step].output}</p>
      </div>
    </DemoPanel>
  )
}

export function NextStepsDemo() {
  const items = [
    { name: 'ブログ', astro: true, react: false },
    { name: 'ドキュメント', astro: true, react: false },
    { name: 'ランディングページ', astro: true, react: false },
    { name: 'チャットアプリ', astro: false, react: true },
    { name: '管理画面', astro: false, react: true },
    { name: 'ブログ + コメント機能', astro: true, react: true, note: '両方使う' },
  ]

  return (
    <DemoPanel title="Astro vs React — 使い分け">
      <table className="compare-table">
        <thead>
          <tr>
            <th>サイトの種類</th>
            <th>Astro</th>
            <th>React</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.astro ? (item.note ?? '✓') : '—'}</td>
              <td>{item.react ? (item.note ?? '✓') : '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DemoPanel>
  )
}

const demoMap: Record<string, React.ComponentType> = {
  intro: IntroDemo,
  setup: SetupDemo,
  pages: PagesDemo,
  components: ComponentsDemo,
  layouts: LayoutsDemo,
  content: ContentDemo,
  styling: StylingDemo,
  islands: IslandsDemo,
  build: BuildDemo,
  'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
