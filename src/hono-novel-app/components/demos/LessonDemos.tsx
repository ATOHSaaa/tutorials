import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

export function IntroDemo() {
  const flow = ['作品一覧', '作品詳細・目次', '第1章を読む', 'ブックマーク']
  const [step, setStep] = useState(0)

  return (
    <DemoPanel title="小説サイトの流れ">
      <div className="hna-arch">
        {flow.map((label, i) => (
          <button key={label} className={`hna-box ${step === i ? 'active' : ''}`} onClick={() => setStep(i)}>
            {i + 1}. {label}
          </button>
        ))}
      </div>
      <p className="demo-note">SNS とは違い、<strong>作品 → 章 → 読書</strong> の階層構造が中心です</p>
    </DemoPanel>
  )
}

export function SetupDemo() {
  const [step, setStep] = useState(0)
  const steps = ['mkdir novel-app', 'create vite client', 'create cloudflare server', 'npm install hono', 'npm run dev ✓']
  return (
    <DemoPanel title="セットアップ">
      <div className="selector-preview">
        {steps.map((s, i) => (
          <div key={s} className={`selector-item ${i <= step ? 'selected' : ''}`}>{i < step ? '✓' : i + 1}. {s}</div>
        ))}
      </div>
      <button className="btn-primary" style={{ width: '100%', marginTop: '0.75rem' }} onClick={() => setStep((s) => Math.min(s + 1, steps.length - 1))} disabled={step >= steps.length - 1}>
        次のステップ →
      </button>
    </DemoPanel>
  )
}

export function GithubDemo() {
  const [pushed, setPushed] = useState(false)
  return (
    <DemoPanel title="GitHub push">
      <pre className="interface-code">{`git commit -m "feat: novel-app scaffold"
git push -u origin main`}</pre>
      <button className="btn-primary" style={{ width: '100%' }} onClick={() => setPushed(true)}>
        {pushed ? '✓ github.com/you/novel-app' : 'push（デモ）'}
      </button>
    </DemoPanel>
  )
}

export function FrontendDemo() {
  const novels = [
    { title: '星降る夜に', genre: 'ファンタジー', author: '青空', synopsis: '魔法学院を舞台にした青春ファンタジー' },
    { title: '雨上がりの約束', genre: '恋愛', author: '桜井', synopsis: '再会を描く現代ラブストーリー' },
  ]
  const [selected, setSelected] = useState(0)

  return (
    <DemoPanel title="作品一覧 UI">
      {novels.map((n, i) => (
        <button key={n.title} className={`hna-novel-card ${selected === i ? 'active' : ''}`} style={{ width: '100%', textAlign: 'left', cursor: 'pointer' }} onClick={() => setSelected(i)}>
          <strong>{n.title}</strong>
          <div className="genre">{n.genre} · @{n.author}</div>
          <div className="synopsis">{n.synopsis}</div>
        </button>
      ))}
      <p className="demo-note">クリックで作品詳細 → 目次 → 読書ページへ</p>
    </DemoPanel>
  )
}

export function DatabaseDemo() {
  const tables = [
    { name: 'novels', desc: '作品メタデータ' },
    { name: 'chapters', desc: '章本文（1:N）' },
    { name: 'tags', desc: '検索用タグ' },
    { name: 'bookmarks', desc: '読書進捗' },
  ]
  const [active, setActive] = useState(0)

  return (
    <DemoPanel title="D1 テーブル">
      <div className="toggle-row wrap">
        {tables.map((t, i) => (
          <button key={t.name} className={active === i ? 'active' : ''} onClick={() => setActive(i)}>{t.name}</button>
        ))}
      </div>
      <p className="demo-note"><strong>{tables[active].name}</strong> — {tables[active].desc}</p>
    </DemoPanel>
  )
}

export function RoutingDemo() {
  const routes = [
    { method: 'GET', path: '/api/novels', desc: '作品一覧' },
    { method: 'POST', path: '/api/novels', desc: '作品作成' },
    { method: 'GET', path: '/api/novels/:id/chapters/:num', desc: '章本文' },
    { method: 'POST', path: '/api/novels/:id/chapters', desc: '章追加' },
    { method: 'GET', path: '/api/novels/search', desc: '検索' },
    { method: 'POST', path: '/api/novels/:id/bookmark', desc: 'ブックマーク' },
  ]

  return (
    <DemoPanel title="API ルート">
      <div className="hna-route-list">
        {routes.map((r) => (
          <div key={r.path + r.method} className={`hna-route ${r.method.toLowerCase()}`}>
            <strong>{r.method}</strong> {r.path} — {r.desc}
          </div>
        ))}
      </div>
    </DemoPanel>
  )
}

export function NovelsCrudDemo() {
  const [novels, setNovels] = useState(['星降る夜に', '雨上がりの約束'])
  const [title, setTitle] = useState('')

  const add = () => {
    if (title.trim()) {
      setNovels([...novels, title.trim()])
      setTitle('')
    }
  }

  return (
    <DemoPanel title="作品 CRUD">
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
        <input className="pseudo-input" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="新しい作品タイトル" style={{ flex: 1 }} />
        <button className="nav-btn" onClick={add}>POST</button>
      </div>
      {novels.map((n) => <div key={n} className="hna-novel-card">📚 {n}</div>)}
    </DemoPanel>
  )
}

export function ChaptersDemo() {
  const [chapter, setChapter] = useState(1)
  const chapters = [
    { num: 1, title: 'プロローグ', preview: 'その日、空から星が消えた…' },
    { num: 2, title: '転校生', preview: '教室のドアが開いた瞬間…' },
    { num: 3, title: '秘密の書庫', preview: '古い校舎の奥に、禁書の部屋が…' },
  ]

  return (
    <DemoPanel title="目次と読書">
      <ul className="hna-toc">
        {chapters.map((ch) => (
          <li key={ch.num} className={chapter === ch.num ? 'active' : ''} onClick={() => setChapter(ch.num)}>
            第{ch.num}章 {ch.title}
          </li>
        ))}
      </ul>
      <div className="hna-reader">
        <h3>第{chapter}章 {chapters[chapter - 1].title}</h3>
        <p>{chapters[chapter - 1].preview}</p>
      </div>
    </DemoPanel>
  )
}

export function AuthDemo() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <DemoPanel title="作者ログイン">
      {!loggedIn ? (
        <>
          <input className="pseudo-input" placeholder="username" style={{ width: '100%', marginBottom: '0.5rem' }} />
          <button className="btn-primary" style={{ width: '100%' }} onClick={() => setLoggedIn(true)}>ログイン</button>
        </>
      ) : (
        <>
          <div className="hna-novel-card">✓ 作者としてログイン中 — 執筆画面へ</div>
          <button className="nav-btn" onClick={() => setLoggedIn(false)}>ログアウト</button>
        </>
      )}
    </DemoPanel>
  )
}

export function SearchDemo() {
  const tags = ['ファンタジー', '恋愛', 'SF', 'ミステリー']
  const [activeTags, setActiveTags] = useState<string[]>([])
  const [query, setQuery] = useState('')

  const toggle = (tag: string) => {
    setActiveTags((prev) => prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag])
  }

  return (
    <DemoPanel title="検索・タグ">
      <input className="pseudo-input" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="キーワード検索…" style={{ width: '100%', marginBottom: '0.75rem' }} />
      <div>
        {tags.map((t) => (
          <button key={t} className={`hna-tag ${activeTags.includes(t) ? 'active' : ''}`} onClick={() => toggle(t)}>{t}</button>
        ))}
      </div>
      <p className="demo-note" style={{ marginTop: '0.75rem' }}>
        {query || activeTags.length ? `検索: "${query}" ${activeTags.join(', ')}` : 'ジャンルやタグで絞り込み'}
      </p>
    </DemoPanel>
  )
}

export function BookmarksDemo() {
  const [bookmarks, setBookmarks] = useState([
    { title: '星降る夜に', chapter: 2 },
    { title: '雨上がりの約束', chapter: 5 },
  ])

  const advance = (idx: number) => {
    setBookmarks(bookmarks.map((b, i) => i === idx ? { ...b, chapter: b.chapter + 1 } : b))
  }

  return (
    <DemoPanel title="ブックマーク・読書進捗">
      {bookmarks.map((b, i) => (
        <div key={b.title} className="hna-bookmark">
          <span>📖 {b.title}</span>
          <button className="nav-btn" onClick={() => advance(i)}>第{b.chapter}章 → 続き</button>
        </div>
      ))}
    </DemoPanel>
  )
}

export function FrontendIntegrationDemo() {
  const [mode, setMode] = useState<'read' | 'write'>('read')
  return (
    <DemoPanel title="読者 / 作者モード">
      <div className="toggle-row">
        <button className={mode === 'read' ? 'active' : ''} onClick={() => setMode('read')}>読者（一覧・読書）</button>
        <button className={mode === 'write' ? 'active' : ''} onClick={() => setMode('write')}>作者（執筆・公開）</button>
      </div>
      <div className="hna-novel-card">
        {mode === 'read' ? '📚 タイムライン → 目次 → Reader' : '✏️ 作品編集 → 章追加 → 公開'}
      </div>
    </DemoPanel>
  )
}

export function CicdDemo() {
  const [step, setStep] = useState(0)
  const steps = ['git push', 'GitHub Actions', 'client build', 'wrangler deploy', 'Pages deploy']
  return (
    <DemoPanel title="CI/CD">
      <div className="selector-preview">
        {steps.map((s, i) => (
          <div key={s} className={`selector-item ${i <= step ? 'selected' : ''}`}>{i < step ? '✓' : i + 1}. {s}</div>
        ))}
      </div>
      <button className="nav-btn" style={{ marginTop: '0.75rem' }} onClick={() => setStep((s) => Math.min(s + 1, steps.length - 1))} disabled={step >= steps.length - 1}>
        次へ →
      </button>
    </DemoPanel>
  )
}

export function DeployDemo() {
  const [done, setDone] = useState(false)
  return (
    <DemoPanel title="本番デプロイ">
      <div className="hna-arch">
        <span className="hna-box">Worker<br /><small>API</small></span>
        <span className="hna-arrow">+</span>
        <span className="hna-box">Pages<br /><small>Reader UI</small></span>
      </div>
      <button className="btn-primary" style={{ width: '100%' }} onClick={() => setDone(true)}>
        {done ? '✓ novel-app.pages.dev 公開！' : 'デプロイ（デモ）'}
      </button>
    </DemoPanel>
  )
}

const demoMap: Record<string, React.ComponentType> = {
  intro: IntroDemo,
  setup: SetupDemo,
  github: GithubDemo,
  frontend: FrontendDemo,
  database: DatabaseDemo,
  routing: RoutingDemo,
  'novels-crud': NovelsCrudDemo,
  chapters: ChaptersDemo,
  auth: AuthDemo,
  search: SearchDemo,
  bookmarks: BookmarksDemo,
  'frontend-integration': FrontendIntegrationDemo,
  cicd: CicdDemo,
  deploy: DeployDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
