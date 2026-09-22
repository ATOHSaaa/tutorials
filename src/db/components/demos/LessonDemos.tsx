import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

export function IntroDemo() {
  const [storage, setStorage] = useState<'file' | 'db'>('file')

  return (
    <DemoPanel title="ファイル保存 vs データベース">
      <div className="toggle-row">
        <button className={storage === 'file' ? 'active' : ''} onClick={() => setStorage('file')}>JSON ファイル</button>
        <button className={storage === 'db' ? 'active' : ''} onClick={() => setStorage('db')}>データベース</button>
      </div>
      {storage === 'file' ? (
        <div className="db-compare bad">
          <strong>❌ JSON ファイル</strong>
          <ul>
            <li>同時アクセスでデータが壊れる可能性</li>
            <li>100万件の検索が遅い</li>
            <li>整合性の保証が難しい</li>
            <li>バックアップ・復旧が手動</li>
          </ul>
        </div>
      ) : (
        <div className="db-compare good">
          <strong>✓ データベース</strong>
          <ul>
            <li>同時アクセスを安全に処理</li>
            <li>インデックスで高速検索</li>
            <li>トランザクションで整合性を保証</li>
            <li>自動バックアップ・レプリケーション</li>
          </ul>
        </div>
      )}
    </DemoPanel>
  )
}

export function RdbmsDemo() {
  const tables = [
    { name: 'users', cols: ['id', 'name', 'email'], rows: 3 },
    { name: 'posts', cols: ['id', 'user_id', 'title'], rows: 5 },
    { name: 'comments', cols: ['id', 'post_id', 'body'], rows: 12 },
  ]
  const [active, setActive] = useState('users')
  const t = tables.find((t) => t.name === active)!

  return (
    <DemoPanel title="RDBMS — テーブルで管理">
      <div className="toggle-row">
        {tables.map((t) => (
          <button key={t.name} className={active === t.name ? 'active' : ''} onClick={() => setActive(t.name)}>{t.name}</button>
        ))}
      </div>
      <div className="db-table-visual">
        <div className="db-table-header">{t.name}</div>
        <div className="db-table-cols">{t.cols.map((c) => <span key={c}>{c}</span>)}</div>
        <div className="db-table-rows">{t.rows} 行のデータ</div>
      </div>
      <p className="demo-note">データを意味のある単位でテーブルに分割して管理します</p>
    </DemoPanel>
  )
}

export function TablesDemo() {
  const [col, setCol] = useState<string | null>(null)
  const columns = [
    { name: 'id', type: 'INTEGER', desc: '識別番号' },
    { name: 'name', type: 'TEXT', desc: 'ユーザー名' },
    { name: 'email', type: 'TEXT', desc: 'メールアドレス' },
    { name: 'age', type: 'INTEGER', desc: '年齢' },
    { name: 'created_at', type: 'TIMESTAMP', desc: '登録日時' },
  ]

  return (
    <DemoPanel title="テーブルの構造">
      <div className="db-schema">
        {columns.map((c) => (
          <button
            key={c.name}
            className={`db-schema-col ${col === c.name ? 'active' : ''}`}
            onClick={() => setCol(c.name)}
          >
            <span className="col-name">{c.name}</span>
            <span className="col-type">{c.type}</span>
          </button>
        ))}
      </div>
      {col && (
        <p className="db-schema-desc">
          <strong>{col}</strong> — {columns.find((c) => c.name === col)?.desc}
        </p>
      )}
      <div className="db-row-sample">
        <span>行の例:</span> {`{ id: 1, name: "田中", email: "taro@ex.com", age: 28 }`}
      </div>
    </DemoPanel>
  )
}

export function KeysDemo() {
  const [view, setView] = useState<'pk' | 'fk'>('pk')

  return (
    <DemoPanel title="主キーと外部キー">
      <div className="toggle-row">
        <button className={view === 'pk' ? 'active' : ''} onClick={() => setView('pk')}>主キー (PK)</button>
        <button className={view === 'fk' ? 'active' : ''} onClick={() => setView('fk')}>外部キー (FK)</button>
      </div>
      {view === 'pk' ? (
        <div className="db-key-demo">
          <div className="db-table-visual">
            <div className="db-table-header">users</div>
            <div className="db-table-cols"><span className="pk">id 🔑</span><span>name</span><span>email</span></div>
            <div className="db-row-line"><span className="pk">1</span><span>田中</span><span>taro@ex.com</span></div>
            <div className="db-row-line"><span className="pk">2</span><span>鈴木</span><span>hanako@ex.com</span></div>
          </div>
          <p>id は各行を一意に識別する主キー</p>
        </div>
      ) : (
        <div className="db-key-demo">
          <div className="db-relation-arrow">users.id ←—— posts.user_id</div>
          <div className="db-tables-side">
            <div className="db-table-visual small">
              <div className="db-table-header">users</div>
              <div className="db-row-line"><span className="pk">1</span><span>田中</span></div>
            </div>
            <div className="db-table-visual small">
              <div className="db-table-header">posts</div>
              <div className="db-row-line"><span className="fk">user_id: 1</span><span>こんにちは</span></div>
              <div className="db-row-line"><span className="fk">user_id: 1</span><span>日記</span></div>
            </div>
          </div>
          <p>user_id が users.id を参照する外部キー</p>
        </div>
      )}
    </DemoPanel>
  )
}

export function RelationsDemo() {
  const [rel, setRel] = useState<'1n' | '11' | 'nm'>('1n')

  const diagrams = {
    '1n': { title: '1対多', desc: '1人のユーザー → 複数の投稿', visual: 'users (1) ——→ (多) posts' },
    '11': { title: '1対1', desc: '1人のユーザー → 1つのプロフィール', visual: 'users (1) ←→ (1) profiles' },
    'nm': { title: '多対多', desc: 'ユーザー ↔ タグ（中間テーブル経由）', visual: 'users ←→ user_tags ←→ tags' },
  }

  const d = diagrams[rel]

  return (
    <DemoPanel title="リレーションの種類">
      <div className="toggle-row">
        <button className={rel === '1n' ? 'active' : ''} onClick={() => setRel('1n')}>1対多</button>
        <button className={rel === '11' ? 'active' : ''} onClick={() => setRel('11')}>1対1</button>
        <button className={rel === 'nm' ? 'active' : ''} onClick={() => setRel('nm')}>多対多</button>
      </div>
      <div className="db-relation-diagram">
        <strong>{d.title}</strong>
        <code>{d.visual}</code>
        <p>{d.desc}</p>
      </div>
    </DemoPanel>
  )
}

export function TransactionsDemo() {
  const [scenario, setScenario] = useState<'success' | 'fail'>('success')
  const [phase, setPhase] = useState<'idle' | 'running' | 'done'>('idle')
  const [balances, setBalances] = useState({ a: 5000, b: 3000 })

  const run = () => {
    setPhase('running')
    setBalances({ a: 5000, b: 3000 })
    setTimeout(() => {
      if (scenario === 'success') {
        setBalances({ a: 4000, b: 4000 })
      }
      setPhase('done')
    }, 900)
  }

  const reset = () => {
    setPhase('idle')
    setBalances({ a: 5000, b: 3000 })
  }

  return (
    <DemoPanel title="送金トランザクション">
      <div className="toggle-row">
        <button className={scenario === 'success' ? 'active' : ''} onClick={() => { setScenario('success'); reset() }}>成功（COMMIT）</button>
        <button className={scenario === 'fail' ? 'active' : ''} onClick={() => { setScenario('fail'); reset() }}>失敗（ROLLBACK）</button>
      </div>
      <div className="db-tx-accounts">
        <div className="db-tx-account">
          <span>A さん</span>
          <strong>¥{balances.a.toLocaleString()}</strong>
        </div>
        <div className="db-tx-arrow">→ ¥1,000 →</div>
        <div className="db-tx-account">
          <span>B さん</span>
          <strong>¥{balances.b.toLocaleString()}</strong>
        </div>
      </div>
      <div className="db-tx-steps">
        <span className={phase !== 'idle' ? 'active' : ''}>1. A から引く</span>
        <span className={phase === 'running' || phase === 'done' ? 'active' : ''}>2. B に入れる</span>
        <span className={phase === 'done' ? 'active' : ''}>
          {phase === 'done' ? (scenario === 'success' ? '3. COMMIT ✓' : '3. ROLLBACK ↩') : '3. 確定'}
        </span>
      </div>
      {phase === 'done' && scenario === 'fail' && (
        <p className="db-warn">2 番目の操作でエラー → すべて取り消され、残高は元に戻ります</p>
      )}
      {phase === 'done' && scenario === 'success' && (
        <p className="db-success">両方成功 → COMMIT で変更が確定しました ✓</p>
      )}
      <button className="btn-primary" style={{ width: '100%', marginTop: '0.75rem' }} onClick={phase === 'running' ? undefined : run} disabled={phase === 'running'}>
        {phase === 'idle' ? '送金を実行' : phase === 'running' ? '処理中...' : 'もう一度'}
      </button>
    </DemoPanel>
  )
}

export function NormalizationDemo() {
  const [norm, setNorm] = useState<'bad' | 'good'>('bad')

  return (
    <DemoPanel title="正規化の効果">
      <div className="toggle-row">
        <button className={norm === 'bad' ? 'active' : ''} onClick={() => setNorm('bad')}>❌ 非正規化</button>
        <button className={norm === 'good' ? 'active' : ''} onClick={() => setNorm('good')}>✓ 正規化</button>
      </div>
      {norm === 'bad' ? (
        <div className="db-table-visual">
          <div className="db-table-header">orders（ユーザー名が重複）</div>
          <div className="db-table-cols"><span>id</span><span>user_name</span><span>product</span></div>
          <div className="db-row-line"><span>1</span><span>田中太郎</span><span>PC</span></div>
          <div className="db-row-line"><span>2</span><span>田中太郎</span><span>マウス</span></div>
          <p className="db-warn">名前変更時に全行を更新が必要 ⚠️</p>
        </div>
      ) : (
        <div className="db-tables-side">
          <div className="db-table-visual small">
            <div className="db-table-header">users</div>
            <div className="db-row-line"><span className="pk">1</span><span>田中太郎</span></div>
          </div>
          <div className="db-table-visual small">
            <div className="db-table-header">orders</div>
            <div className="db-row-line"><span>1</span><span className="fk">user_id: 1</span><span>PC</span></div>
            <div className="db-row-line"><span>2</span><span className="fk">user_id: 1</span><span>マウス</span></div>
          </div>
          <p className="db-success">名前は users で1箇所だけ管理 ✓</p>
        </div>
      )}
    </DemoPanel>
  )
}

export function IndexesDemo() {
  const [hasIndex, setHasIndex] = useState(true)
  const rows = 1_000_000
  const scanned = hasIndex ? 1 : rows
  const comparisons = hasIndex ? 20 : rows
  const timeMs = hasIndex ? 1 : 840
  const plan = hasIndex ? 'Index Scan' : 'Seq Scan'

  return (
    <DemoPanel title="フルスキャン vs B-tree インデックス">
      <div className="toggle-row">
        <button className={!hasIndex ? 'active' : ''} onClick={() => setHasIndex(false)}>インデックスなし</button>
        <button className={hasIndex ? 'active' : ''} onClick={() => setHasIndex(true)}>email に B-tree</button>
      </div>
      <code className="selector-code">SELECT * FROM users WHERE email = 'taro@example.com';</code>
      <div className="db-index-stats">
        <div className="db-index-stat">
          <span>テーブル行数</span>
          <strong>{rows.toLocaleString()} 行</strong>
        </div>
        <div className="db-index-stat">
          <span>スキャンした行数</span>
          <strong className={hasIndex ? 'fast' : 'slow'}>{scanned.toLocaleString()} 行</strong>
        </div>
        <div className="db-index-stat">
          <span>比較回数（目安）</span>
          <strong className={hasIndex ? 'fast' : 'slow'}>{hasIndex ? `≈ ${comparisons}` : comparisons.toLocaleString()}</strong>
        </div>
        <div className="db-index-stat">
          <span>検索時間（目安）</span>
          <strong className={hasIndex ? 'fast' : 'slow'}>{timeMs} ms</strong>
        </div>
      </div>
      <div className="db-index-visual">
        <p>
          実行計画: <strong className={hasIndex ? 'fast' : 'slow'}>{plan}</strong>
          {hasIndex
            ? ' — B-tree を log₂(n) 回ほど辿って該当行を特定'
            : ' — 先頭行から順に email を比較（フルテーブルスキャン）'}
        </p>
      </div>
    </DemoPanel>
  )
}

export function IndexQueriesDemo() {
  const queries = [
    { sql: "WHERE email = 'taro@example.com'", uses: true, plan: 'Index Scan', reason: '等値検索 — B-tree から直接辿れる' },
    { sql: "WHERE created_at >= '2024-01-01'", uses: true, plan: 'Index Scan', reason: '範囲検索 — ソート済み木の連続範囲を読む' },
    { sql: "WHERE email LIKE 'taro%'", uses: true, plan: 'Index Scan', reason: '前方一致 LIKE — 木の一部範囲で絞り込み可能' },
    { sql: "WHERE email LIKE '%@example.com'", uses: false, plan: 'Seq Scan', reason: '前方一致ではない — 木を辿れず全行スキャン' },
    { sql: 'WHERE LOWER(email) = \'taro@example.com\'', uses: false, plan: 'Seq Scan', reason: '列に関数 — 元のインデックスが使えない' },
    { sql: 'WHERE status = \'active\'', uses: false, plan: 'Seq Scan', reason: 'カーディナリティ低 — 絞り込み効果が薄い（2値程度）' },
  ]
  const [idx, setIdx] = useState(0)
  const q = queries[idx]

  return (
    <DemoPanel title="クエリごとのインデックス利用">
      <p className="demo-note" style={{ marginBottom: '0.75rem' }}>email / created_at にインデックスがある前提</p>
      <div className="db-index-query-list">
        {queries.map((item, i) => (
          <button
            key={item.sql}
            className={`db-index-query-btn ${idx === i ? 'active' : ''}`}
            onClick={() => setIdx(i)}
          >
            <code>{item.sql}</code>
          </button>
        ))}
      </div>
      <div className={`db-index-result ${q.uses ? 'uses' : 'no-uses'}`}>
        <div className="db-index-result-head">
          <strong>{q.plan}</strong>
          <span>{q.uses ? '✓ インデックス使用' : '✗ フルスキャン'}</span>
        </div>
        <p>{q.reason}</p>
      </div>
    </DemoPanel>
  )
}

export function CompositeIndexesDemo() {
  const indexDef = '(user_id, created_at)'
  const scenarios = [
    { sql: 'WHERE user_id = 42', uses: true, cols: ['user_id'], reason: '左端列の等値検索 → インデックス全体が使える' },
    { sql: 'WHERE user_id = 42 ORDER BY created_at DESC', uses: true, cols: ['user_id', 'created_at'], reason: '左端一致 + ソート列もインデックス内 → 並べ替え省略可能' },
    { sql: "WHERE user_id = 42 AND created_at > '2024-01-01'", uses: true, cols: ['user_id', 'created_at'], reason: '左端の等値 + 右端の範囲 → 両方使える' },
    { sql: "WHERE created_at > '2024-01-01'", uses: false, cols: [], reason: 'user_id がない → 左端一致の原則により未使用' },
    { sql: "WHERE user_id = 42 AND status = 'active'", uses: 'partial' as const, cols: ['user_id'], reason: 'user_id だけ使える。status はインデックスに含まれない' },
  ]
  const [idx, setIdx] = useState(0)
  const s = scenarios[idx]

  return (
    <DemoPanel title="複合インデックスと左端一致">
      <p className="demo-note" style={{ marginBottom: '0.5rem' }}>
        インデックス: <code>{indexDef}</code>
      </p>
      <div className="db-index-query-list">
        {scenarios.map((item, i) => (
          <button
            key={item.sql}
            className={`db-index-query-btn ${idx === i ? 'active' : ''}`}
            onClick={() => setIdx(i)}
          >
            <code>{item.sql}</code>
          </button>
        ))}
      </div>
      <div className={`db-index-result ${s.uses === true ? 'uses' : s.uses === 'partial' ? 'partial' : 'no-uses'}`}>
        <div className="db-index-result-head">
          <strong>
            {s.uses === true ? 'Index Scan' : s.uses === 'partial' ? 'Index Scan（一部）' : 'Seq Scan'}
          </strong>
          <span>
            {s.uses === true ? '✓ 完全に使用' : s.uses === 'partial' ? '△ 左端のみ' : '✗ 未使用'}
          </span>
        </div>
        <div className="db-index-cols">
          使われる列:
          {s.cols.length > 0
            ? s.cols.map((c) => <span key={c} className="db-index-col-tag">{c}</span>)
            : <span className="db-index-col-none">なし</span>}
        </div>
        <p>{s.reason}</p>
      </div>
    </DemoPanel>
  )
}

export function NosqlDemo() {
  const types = [
    { name: 'RDBMS', example: 'PostgreSQL', use: 'ユーザー、注文、投稿など構造化データ', icon: '📊' },
    { name: 'ドキュメント型', example: 'MongoDB', use: '柔軟なスキーマ、CMS、ログ', icon: '📄' },
    { name: 'キーバリュー型', example: 'Redis', use: 'キャッシュ、セッション、リアルタイム', icon: '⚡' },
    { name: 'グラフ型', example: 'Neo4j', use: 'SNS のつながり、レコメンド', icon: '🕸' },
  ]
  const [idx, setIdx] = useState(0)

  return (
    <DemoPanel title="RDBMS vs NoSQL">
      <div className="db-nosql-grid">
        {types.map((t, i) => (
          <button key={t.name} className={`db-nosql-card ${idx === i ? 'active' : ''}`} onClick={() => setIdx(i)}>
            <span>{t.icon}</span>
            <strong>{t.name}</strong>
            <small>{t.example}</small>
          </button>
        ))}
      </div>
      <div className="db-nosql-detail">
        <strong>{types[idx].example}</strong>
        <p>{types[idx].use}</p>
      </div>
    </DemoPanel>
  )
}

export function WebAppDemo() {
  const [step, setStep] = useState(0)
  const steps = [
    { label: 'ブラウザ', desc: 'ユーザーがフォームに入力', icon: '🖥' },
    { label: 'API', desc: 'POST /api/users でリクエスト', icon: '⚙️' },
    { label: 'DB', desc: 'INSERT INTO users ...', icon: '🗄' },
    { label: 'API', desc: 'DB の結果を JSON で返す', icon: '⚙️' },
    { label: 'ブラウザ', desc: '画面に結果を表示', icon: '🖥' },
  ]

  return (
    <DemoPanel title="Webアプリのデータの流れ">
      <div className="db-flow">
        {steps.map((s, i) => (
          <div key={i} className={`db-flow-step ${i <= step ? 'active' : ''}`}>
            <span className="db-flow-icon">{s.icon}</span>
            <div>
              <strong>{s.label}</strong>
              <p>{s.desc}</p>
            </div>
            {i < steps.length - 1 && <span className="db-flow-arrow">↓</span>}
          </div>
        ))}
      </div>
      <button className="btn-primary" style={{ width: '100%', marginTop: '0.75rem' }} onClick={() => setStep((s) => (s + 1) % steps.length)}>
        次のステップ →
      </button>
    </DemoPanel>
  )
}

export function ToolsDemo() {
  const tools = [
    { name: 'PostgreSQL', type: '本番 DB', desc: '最も使われるオープンソース RDBMS' },
    { name: 'SQLite', type: '開発用', desc: 'ファイル1つで動く軽量 DB' },
    { name: 'Prisma', type: 'ORM', desc: '型安全なスキーマ + クエリ' },
    { name: 'Supabase', type: 'BaaS', desc: 'PostgreSQL + API をすぐ使える' },
  ]

  return (
    <DemoPanel title="よく使う DB とツール">
      <div className="selector-preview">
        {tools.map((t) => (
          <div key={t.name} className="selector-item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div><strong>{t.name}</strong> <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>({t.type})</span></div>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{t.desc}</span>
          </div>
        ))}
      </div>
    </DemoPanel>
  )
}

export function NextStepsDemo() {
  const path = ['DB 入門 ✓', 'SQL チュートリアル', 'Prisma + Next.js', 'CRUD アプリを作る']
  return (
    <DemoPanel title="学習の道筋">
      <div className="db-path">
        {path.map((p, i) => (
          <div key={p} className={`db-path-step ${i === 0 ? 'done' : ''}`}>
            <span className="db-path-num">{i === 0 ? '✓' : i + 1}</span>
            <span>{p}</span>
            {i < path.length - 1 && <span className="db-path-arrow">→</span>}
          </div>
        ))}
      </div>
      <p className="demo-note">次は SQL チュートリアルで、実際にクエリを書いてみましょう！</p>
    </DemoPanel>
  )
}

const demoMap: Record<string, React.ComponentType> = {
  intro: IntroDemo,
  rdbms: RdbmsDemo,
  tables: TablesDemo,
  keys: KeysDemo,
  relations: RelationsDemo,
  transactions: TransactionsDemo,
  normalization: NormalizationDemo,
  indexes: IndexesDemo,
  'index-queries': IndexQueriesDemo,
  'composite-indexes': CompositeIndexesDemo,
  nosql: NosqlDemo,
  'web-app': WebAppDemo,
  tools: ToolsDemo,
  'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
