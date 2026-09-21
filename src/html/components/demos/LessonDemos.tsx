import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

export function IntroDemo() {
  return (
    <DemoPanel title="タグの構造">
      <div className="tag-anatomy">
        <div className="tag-part tag-open">&lt;p&gt;</div>
        <div className="tag-part tag-content">これは段落です。</div>
        <div className="tag-part tag-close">&lt;/p&gt;</div>
      </div>
      <div className="tag-labels">
        <span>開始タグ</span>
        <span>内容（表示されるテキスト）</span>
        <span>終了タグ</span>
      </div>
      <div className="tag-preview">
        <p className="html-preview-p">これは段落です。</p>
      </div>
      <p className="demo-note">↑ ブラウザが表示する結果</p>
    </DemoPanel>
  )
}

export function StructureDemo() {
  return (
    <DemoPanel title="HTML ページの構造">
      <div className="html-tree">
        <div className="tree-node tree-root">
          <span className="tree-tag">&lt;html&gt;</span>
          <div className="tree-children">
            <div className="tree-node tree-head">
              <span className="tree-tag">&lt;head&gt;</span>
              <div className="tree-children">
                <div className="tree-leaf"><span className="tree-tag">&lt;title&gt;</span> ページのタイトル</div>
                <div className="tree-leaf"><span className="tree-tag">&lt;meta&gt;</span> 文字コードなど</div>
              </div>
            </div>
            <div className="tree-node tree-body">
              <span className="tree-tag">&lt;body&gt;</span>
              <div className="tree-children">
                <div className="tree-leaf"><span className="tree-tag">&lt;h1&gt;</span> 見出し</div>
                <div className="tree-leaf"><span className="tree-tag">&lt;p&gt;</span> 段落</div>
                <div className="tree-leaf"><span className="tree-tag">&lt;img&gt;</span> 画像</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="demo-note">head は設定情報、body はユーザーが見る内容です。</p>
    </DemoPanel>
  )
}

export function HeadingsDemo() {
  return (
    <DemoPanel title="見出しと段落のプレビュー">
      <div className="html-preview-box">
        <h1 className="html-h1">h1 — メインの見出し</h1>
        <h2 className="html-h2">h2 — 章の見出し</h2>
        <h3 className="html-h3">h3 — 節の見出し</h3>
        <h4 className="html-h4">h4 — 小見出し</h4>
        <hr className="html-hr" />
        <p className="html-preview-p">これは段落（p）です。文章のまとまりを表します。</p>
        <p className="html-preview-p">2つ目の段落は、自動的に前の段落と間隔が空きます。</p>
      </div>
    </DemoPanel>
  )
}

export function LinksImagesDemo() {
  return (
    <DemoPanel title="リンクと画像">
      <div className="html-preview-box">
        <p className="html-preview-p">
          <a href="https://developer.mozilla.org/ja/docs/Web/HTML" target="_blank" rel="noreferrer" className="html-link">
            MDN Web Docs（HTML 公式リファレンス）
          </a>
          をクリックしてみてください。
        </p>
        <div className="html-image-demo">
          <div className="html-image-placeholder">
            <span>🖼</span>
            <span>img タグで表示</span>
          </div>
          <p className="html-image-alt">alt="海辺で笑っている犬"</p>
        </div>
      </div>
    </DemoPanel>
  )
}

export function ListsDemo() {
  const [items, setItems] = useState(['りんご', 'バナナ', 'みかん'])
  const [newItem, setNewItem] = useState('')
  const [listType, setListType] = useState<'ul' | 'ol'>('ul')

  const addItem = () => {
    if (!newItem.trim()) return
    setItems((prev) => [...prev, newItem])
    setNewItem('')
  }

  return (
    <DemoPanel title="リストを作ってみる">
      <div className="list-type-toggle">
        <button className={listType === 'ul' ? 'active' : ''} onClick={() => setListType('ul')}>
          箇条書き（ul）
        </button>
        <button className={listType === 'ol' ? 'active' : ''} onClick={() => setListType('ol')}>
          番号付き（ol）
        </button>
      </div>
      <div className="html-preview-box">
        {listType === 'ul' ? (
          <ul className="html-list">
            {items.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        ) : (
          <ol className="html-list">
            {items.map((item, i) => <li key={i}>{item}</li>)}
          </ol>
        )}
      </div>
      <div className="list-input-row">
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="項目を追加..."
          onKeyDown={(e) => e.key === 'Enter' && addItem()}
        />
        <button className="btn-primary" onClick={addItem}>追加</button>
      </div>
    </DemoPanel>
  )
}

export function TablesDemo() {
  const data = [
    { name: '太郎', age: 25, city: '東京' },
    { name: '花子', age: 30, city: '大阪' },
    { name: '次郎', age: 22, city: '福岡' },
  ]

  return (
    <DemoPanel title="テーブルのプレビュー">
      <div className="html-preview-box">
        <table className="html-table">
          <thead>
            <tr>
              <th>名前</th>
              <th>年齢</th>
              <th>都市</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.name}>
                <td>{row.name}</td>
                <td>{row.age}</td>
                <td>{row.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="demo-note">th は見出しセル、td はデータセルです。</p>
    </DemoPanel>
  )
}

export function FormsDemo() {
  const [form, setForm] = useState({ name: '', email: '', message: '', agree: false })
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <DemoPanel title="送信完了">
        <div className="form-success">
          <div className="success-icon">✓</div>
          <h4>フォームが送信されました！</h4>
          <pre>{JSON.stringify(form, null, 2)}</pre>
          <button onClick={() => setSubmitted(false)}>もう一度</button>
        </div>
      </DemoPanel>
    )
  }

  return (
    <DemoPanel title="フォームを操作してみる">
      <form
        className="html-form"
        onSubmit={(e) => {
          e.preventDefault()
          setSubmitted(true)
        }}
      >
        <label>
          名前
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="山田 太郎"
          />
        </label>
        <label>
          メール
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="taro@example.com"
          />
        </label>
        <label>
          メッセージ
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="お問い合わせ内容..."
            rows={3}
          />
        </label>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={form.agree}
            onChange={(e) => setForm({ ...form, agree: e.target.checked })}
          />
          利用規約に同意する
        </label>
        <button type="submit" className="btn-primary btn-full">送信する</button>
      </form>
    </DemoPanel>
  )
}

export function SemanticDemo() {
  return (
    <DemoPanel title="セマンティック HTML の構造">
      <div className="semantic-layout">
        <header className="semantic-header">&lt;header&gt; サイトのヘッダー</header>
        <nav className="semantic-nav">&lt;nav&gt; ホーム · 記事 · お問い合わせ</nav>
        <div className="semantic-main-row">
          <main className="semantic-main">
            &lt;main&gt;
            <article className="semantic-article">&lt;article&gt; 記事の内容がここに入ります</article>
          </main>
          <aside className="semantic-aside">&lt;aside&gt; サイドバー</aside>
        </div>
        <footer className="semantic-footer">&lt;footer&gt; © 2026 My Site</footer>
      </div>
    </DemoPanel>
  )
}

export function AttributesDemo() {
  const [highlightId, setHighlightId] = useState(false)
  const [highlightClass, setHighlightClass] = useState(false)

  return (
    <DemoPanel title="id と class の違い">
      <div className="attr-controls">
        <button className={highlightId ? 'active' : ''} onClick={() => setHighlightId(!highlightId)}>
          id="hero" を強調
        </button>
        <button className={highlightClass ? 'active' : ''} onClick={() => setHighlightClass(!highlightClass)}>
          class="card" を強調
        </button>
      </div>
      <div className="html-preview-box">
        <h2
          id="hero"
          className={`attr-demo-title ${highlightId ? 'attr-highlight-id' : ''}`}
        >
          id="hero" — この要素だけ固有
        </h2>
        <div className={`attr-demo-card ${highlightClass ? 'attr-highlight-class' : ''}`}>
          class="card" — カード1
        </div>
        <div className={`attr-demo-card ${highlightClass ? 'attr-highlight-class' : ''}`}>
          class="card" — カード2（同じ class）
        </div>
        <p className="attr-demo-note">class="note" — 別の class</p>
      </div>
      <p className="demo-note">id は1つだけ、class は同じ名前を複数に付けられます。</p>
    </DemoPanel>
  )
}

export function NextStepsDemo() {
  const steps = [
    { num: 1, title: 'HTML', desc: '骨組みを作る', done: true, color: '#f97316' },
    { num: 2, title: 'CSS', desc: '見た目を整える', done: false, color: '#3b82f6' },
    { num: 3, title: 'JavaScript', desc: '動きを付ける', done: false, color: '#eab308' },
    { num: 4, title: 'React', desc: 'アプリを効率よく作る', done: false, color: '#61dafb' },
  ]

  return (
    <DemoPanel title="Web 開発の学習ロードマップ">
      <div className="roadmap">
        {steps.map((step, i) => (
          <div key={step.title} className="roadmap-step">
            <div
              className={`roadmap-circle ${step.done ? 'done' : ''}`}
              style={{ borderColor: step.color, color: step.done ? step.color : undefined }}
            >
              {step.done ? '✓' : step.num}
            </div>
            <div className="roadmap-info">
              <strong style={{ color: step.color }}>{step.title}</strong>
              <span>{step.desc}</span>
            </div>
            {i < steps.length - 1 && <div className="roadmap-line" />}
          </div>
        ))}
      </div>
      <p className="demo-note">HTML の基礎ができました。次は CSS に進みましょう！</p>
    </DemoPanel>
  )
}

const demoMap: Record<string, React.ComponentType> = {
  intro: IntroDemo,
  structure: StructureDemo,
  headings: HeadingsDemo,
  'links-images': LinksImagesDemo,
  lists: ListsDemo,
  tables: TablesDemo,
  forms: FormsDemo,
  semantic: SemanticDemo,
  attributes: AttributesDemo,
  'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
