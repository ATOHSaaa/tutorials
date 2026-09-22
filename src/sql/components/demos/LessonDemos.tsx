import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

type User = { id: number; name: string; email: string; age: number; city: string }
type Order = { id: number; user_id: number; product: string; amount: number }
type Product = { id: number; name: string; price: number; category: string }

const users: User[] = [
  { id: 1, name: '田中太郎', email: 'taro@example.com', age: 28, city: '東京' },
  { id: 2, name: '鈴木花子', email: 'hanako@ex.com', age: 34, city: '大阪' },
  { id: 3, name: '佐藤次郎', email: 'jiro@ex.com', age: 22, city: '東京' },
  { id: 4, name: '山田美咲', email: 'misaki@ex.com', age: 31, city: '福岡' },
]

const orders: Order[] = [
  { id: 1, user_id: 1, product: 'ノートPC', amount: 98000 },
  { id: 2, user_id: 2, product: 'マウス', amount: 3500 },
  { id: 3, user_id: 1, product: 'キーボード', amount: 12000 },
  { id: 4, user_id: 3, product: 'モニター', amount: 45000 },
]

const products: Product[] = [
  { id: 1, name: 'ノートPC', price: 98000, category: 'PC' },
  { id: 2, name: 'マウス', price: 3500, category: '周辺機器' },
  { id: 3, name: 'キーボード', price: 12000, category: '周辺機器' },
  { id: 4, name: 'モニター', price: 45000, category: 'PC' },
]

function DataTable({ columns, rows, highlight }: {
  columns: string[]
  rows: Record<string, string | number>[]
  highlight?: number[]
}) {
  return (
    <div className="sql-table-wrap">
      <table className="sql-table">
        <thead>
          <tr>{columns.map((c) => <th key={c}>{c}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={highlight?.includes(i) ? 'highlight' : ''}>
              {columns.map((c) => <td key={c}>{row[c]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
      {rows.length === 0 && <p className="sql-empty">結果: 0 行</p>}
    </div>
  )
}

function QueryBox({ query }: { query: string }) {
  return <code className="sql-query">{query}</code>
}

export function IntroDemo() {
  return (
    <DemoPanel title="users テーブル">
      <DataTable
        columns={['id', 'name', 'email', 'age', 'city']}
        rows={users}
      />
      <p className="demo-note">データベースは「テーブル」にデータを格納します。SQL でこのテーブルを操作します。</p>
    </DemoPanel>
  )
}

export function SelectDemo() {
  const [mode, setMode] = useState<'all' | 'name'>('all')
  const rows = mode === 'all'
    ? users.map((u) => ({ id: u.id, name: u.name, email: u.email, age: u.age, city: u.city }))
    : users.map((u) => ({ name: u.name, email: u.email }))
  const cols = mode === 'all' ? ['id', 'name', 'email', 'age', 'city'] : ['name', 'email']

  return (
    <DemoPanel title="SELECT でデータ取得">
      <div className="toggle-row">
        <button className={mode === 'all' ? 'active' : ''} onClick={() => setMode('all')}>SELECT *</button>
        <button className={mode === 'name' ? 'active' : ''} onClick={() => setMode('name')}>SELECT name, email</button>
      </div>
      <QueryBox query={mode === 'all' ? 'SELECT * FROM users;' : 'SELECT name, email FROM users;'} />
      <DataTable columns={cols} rows={rows} />
    </DemoPanel>
  )
}

export function WhereDemo() {
  const [cond, setCond] = useState<'tokyo' | 'age' | 'like'>('tokyo')

  const filtered = {
    tokyo: users.filter((u) => u.city === '東京'),
    age: users.filter((u) => u.age >= 30),
    like: users.filter((u) => u.name.includes('田')),
  }

  const queries = {
    tokyo: "SELECT * FROM users WHERE city = '東京';",
    age: 'SELECT * FROM users WHERE age >= 30;',
    like: "SELECT * FROM users WHERE name LIKE '%田%';",
  }

  const rows = filtered[cond].map((u) => ({ id: u.id, name: u.name, age: u.age, city: u.city }))

  return (
    <DemoPanel title="WHERE で絞り込み">
      <div className="toggle-row">
        <button className={cond === 'tokyo' ? 'active' : ''} onClick={() => setCond('tokyo')}>city = '東京'</button>
        <button className={cond === 'age' ? 'active' : ''} onClick={() => setCond('age')}>{'age >= 30'}</button>
        <button className={cond === 'like' ? 'active' : ''} onClick={() => setCond('like')}>LIKE '%田%'</button>
      </div>
      <QueryBox query={queries[cond]} />
      <DataTable columns={['id', 'name', 'age', 'city']} rows={rows} />
      <p className="demo-note">{rows.length} 行がヒットしました</p>
    </DemoPanel>
  )
}

export function OrderLimitDemo() {
  const [order, setOrder] = useState<'asc' | 'desc'>('asc')
  const [limit, setLimit] = useState(3)

  const sorted = [...users].sort((a, b) => order === 'asc' ? a.age - b.age : b.age - a.age).slice(0, limit)
  const rows = sorted.map((u) => ({ name: u.name, age: u.age, city: u.city }))

  return (
    <DemoPanel title="ORDER BY / LIMIT">
      <div className="toggle-row">
        <button className={order === 'asc' ? 'active' : ''} onClick={() => setOrder('asc')}>ORDER BY age ASC</button>
        <button className={order === 'desc' ? 'active' : ''} onClick={() => setOrder('desc')}>ORDER BY age DESC</button>
      </div>
      <div className="controls-grid">
        <label>LIMIT: {limit}<input type="range" min="1" max="4" value={limit} onChange={(e) => setLimit(+e.target.value)} /></label>
      </div>
      <QueryBox query={`SELECT name, age, city FROM users ORDER BY age ${order === 'asc' ? 'ASC' : 'DESC'} LIMIT ${limit};`} />
      <DataTable columns={['name', 'age', 'city']} rows={rows} />
    </DemoPanel>
  )
}

export function JoinsDemo() {
  const [type, setType] = useState<'inner' | 'left'>('inner')

  const innerRows = orders.map((o) => {
    const u = users.find((u) => u.id === o.user_id)!
    return { name: u.name, product: o.product, amount: o.amount }
  })

  const leftRows = users.map((u) => {
    const o = orders.find((o) => o.user_id === u.id)
    return { name: u.name, product: o?.product ?? '(なし)', amount: o?.amount ?? '—' }
  })

  return (
    <DemoPanel title="JOIN でテーブル結合">
      <div className="toggle-row">
        <button className={type === 'inner' ? 'active' : ''} onClick={() => setType('inner')}>INNER JOIN</button>
        <button className={type === 'left' ? 'active' : ''} onClick={() => setType('left')}>LEFT JOIN</button>
      </div>
      <QueryBox query={type === 'inner'
        ? 'SELECT users.name, orders.product, orders.amount\nFROM users INNER JOIN orders ON users.id = orders.user_id;'
        : 'SELECT users.name, orders.product\nFROM users LEFT JOIN orders ON users.id = orders.user_id;'} />
      <DataTable
        columns={type === 'inner' ? ['name', 'product', 'amount'] : ['name', 'product', 'amount']}
        rows={type === 'inner' ? innerRows : leftRows}
      />
    </DemoPanel>
  )
}

export function AggregateDemo() {
  const [fn, setFn] = useState<'count' | 'sum' | 'avg'>('count')

  const results = {
    count: { label: 'COUNT(*)', value: users.length, desc: 'ユーザー数' },
    sum: { label: 'SUM(amount)', value: orders.reduce((s, o) => s + o.amount, 0).toLocaleString() + ' 円', desc: '売上合計' },
    avg: { label: 'AVG(price)', value: Math.round(products.reduce((s, p) => s + p.price, 0) / products.length).toLocaleString() + ' 円', desc: '平均価格' },
  }

  const r = results[fn]

  return (
    <DemoPanel title="集計関数">
      <div className="toggle-row">
        <button className={fn === 'count' ? 'active' : ''} onClick={() => setFn('count')}>COUNT</button>
        <button className={fn === 'sum' ? 'active' : ''} onClick={() => setFn('sum')}>SUM</button>
        <button className={fn === 'avg' ? 'active' : ''} onClick={() => setFn('avg')}>AVG</button>
      </div>
      <QueryBox query={`SELECT ${r.label} FROM ${fn === 'count' ? 'users' : fn === 'sum' ? 'orders' : 'products'};`} />
      <div className="sql-aggregate-result">
        <span className="sql-aggregate-value">{r.value}</span>
        <span className="sql-aggregate-desc">{r.desc}</span>
      </div>
    </DemoPanel>
  )
}

export function GroupByDemo() {
  const grouped = Object.entries(
    users.reduce<Record<string, number>>((acc, u) => {
      acc[u.city] = (acc[u.city] ?? 0) + 1
      return acc
    }, {})
  ).map(([city, cnt]) => ({ city, user_count: cnt }))

  return (
    <DemoPanel title="GROUP BY でグループ集計">
      <QueryBox query={'SELECT city, COUNT(*) AS user_count\nFROM users\nGROUP BY city;'} />
      <DataTable columns={['city', 'user_count']} rows={grouped} />
      <p className="demo-note">都市ごとにユーザー数を集計しました</p>
    </DemoPanel>
  )
}

export function MutationsDemo() {
  const [rows, setRows] = useState(users)
  const [log, setLog] = useState<string[]>([])

  const insert = () => {
    const newUser = { id: rows.length + 1, name: '新規ユーザー', email: 'new@ex.com', age: 25, city: '札幌' }
    setRows([...rows, newUser])
    setLog((l) => [...l, `INSERT: ${newUser.name} を追加`])
  }

  const update = () => {
    setRows(rows.map((u) => u.id === 1 ? { ...u, age: u.age + 1 } : u))
    setLog((l) => [...l, 'UPDATE: id=1 の age を +1'])
  }

  const deleteRow = () => {
    if (rows.length <= 1) return
    const removed = rows[rows.length - 1]
    setRows(rows.slice(0, -1))
    setLog((l) => [...l, `DELETE: ${removed.name} を削除`])
  }

  const reset = () => { setRows(users); setLog([]) }

  return (
    <DemoPanel title="INSERT / UPDATE / DELETE">
      <div className="toggle-row wrap">
        <button className="nav-btn" onClick={insert}>INSERT</button>
        <button className="nav-btn" onClick={update}>UPDATE id=1</button>
        <button className="nav-btn" onClick={deleteRow}>DELETE 最後の行</button>
        <button className="nav-btn" onClick={reset}>リセット</button>
      </div>
      <DataTable columns={['id', 'name', 'age', 'city']} rows={rows.map((u) => ({ id: u.id, name: u.name, age: u.age, city: u.city }))} />
      {log.length > 0 && (
        <div className="sql-log">{log.map((l, i) => <div key={i}>{l}</div>)}</div>
      )}
    </DemoPanel>
  )
}

export function SchemaDemo() {
  const [table, setTable] = useState<'users' | 'orders'>('users')

  const schemas = {
    users: `CREATE TABLE users (
  id    INTEGER PRIMARY KEY,
  name  TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  age   INTEGER,
  city  TEXT
);`,
    orders: `CREATE TABLE orders (
  id      INTEGER PRIMARY KEY,
  user_id INTEGER NOT NULL,
  product TEXT NOT NULL,
  amount  INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);`,
  }

  return (
    <DemoPanel title="CREATE TABLE">
      <div className="toggle-row">
        <button className={table === 'users' ? 'active' : ''} onClick={() => setTable('users')}>users</button>
        <button className={table === 'orders' ? 'active' : ''} onClick={() => setTable('orders')}>orders</button>
      </div>
      <pre className="interface-code">{schemas[table]}</pre>
      <p className="demo-note">FOREIGN KEY でテーブル間のリレーションを定義します</p>
    </DemoPanel>
  )
}

export function NextStepsDemo() {
  const steps = ['SQL 基礎 ✓', 'Prisma / Drizzle', 'PostgreSQL', 'インデックス & 最適化']
  return (
    <DemoPanel title="次のステップ">
      <div className="selector-preview">
        {steps.map((s) => <div key={s} className="selector-item">{s}</div>)}
      </div>
      <p className="demo-note">DB を実際に触ると、API の裏側が見えるようになります！</p>
    </DemoPanel>
  )
}

const demoMap: Record<string, React.ComponentType> = {
  intro: IntroDemo,
  select: SelectDemo,
  where: WhereDemo,
  'order-limit': OrderLimitDemo,
  joins: JoinsDemo,
  aggregate: AggregateDemo,
  'group-by': GroupByDemo,
  mutations: MutationsDemo,
  schema: SchemaDemo,
  'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
