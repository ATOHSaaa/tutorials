export interface Lesson {
  id: string
  title: string
  description: string
  sections: Section[]
}

export interface Section {
  heading: string
  content: string
  code?: string
  tip?: string
}

export const lessons: Lesson[] = [
  {
    id: "intro",
    title: "プロジェクト概要",
    description: "作る小説サイトの全体像と技術スタックを理解します",
    sections: [
      {
        heading: "何を作るか",
        content: "このチュートリアルでは、**小説投稿・読書サイト**を一から作ります。なろう系やカクヨム系のような、作者が作品を連載し、読者が読めるプラットフォームです。\n\n• ユーザー登録・ログイン（作者 / 読者）\n• 作品（小説）の作成・編集・公開\n• 章（エピソード）の追加・並び替え\n• 作品一覧・詳細・読書ページ\n• ジャンル・タグによる検索\n• ブックマーク・読書進捗の保存\n\nSNS 型の短い投稿ではなく、**長文コンテンツ**と**章構造**が中心です。",
        tip: "デモで「作品 → 章 → 読書ページ」の流れを確認してください。"
      },
      {
        heading: "技術スタック",
        content: "• **フロントエンド** — Vite + React + TypeScript\n• **API** — Hono on Cloudflare Workers\n• **データベース** — Cloudflare D1（SQLite）\n• **認証** — セッション Cookie\n• **バージョン管理** — Git + GitHub\n• **CI/CD** — GitHub Actions\n• **デプロイ** — Cloudflare Workers + Pages\n\nHono 投稿サイトチュートリアルと同じ基盤を使い、データモデルと UI を小説向けに拡張します。",
        code: "novel-app/\n├── client/              # Vite + React\n│   └── src/pages/\n│       ├── NovelList.tsx\n│       ├── NovelDetail.tsx\n│       └── Reader.tsx\n├── server/              # Hono + Workers\n│   ├── src/routes/\n│   │   ├── novels.ts\n│   │   └── chapters.ts\n│   └── migrations/\n└── .github/workflows/"
      },
      {
        heading: "SNS との違い",
        content: "短い投稿（140〜280字）ではなく、小説サイトでは次の設計が重要です。\n\n• **作品（novels）** と **章（chapters）** の2層構造\n• 1章あたり数千〜数万文字の本文\n• 連載ステータス（執筆中 / 完結）\n• 目次（Table of Contents）\n• 読書進捗（何章まで読んだか）\n\nDB 入門の「1対多リレーション」がそのまま活きる例です。"
      }
    ]
  },
  {
    id: "setup",
    title: "環境セットアップ",
    description: "Node.js、Wrangler、プロジェクト作成を学びます",
    sections: [
      {
        heading: "必要なツール",
        content: "Hono 投稿サイトチュートリアルと同様、Node.js 20+、Git、Cloudflare / GitHub アカウントが必要です。",
        code: "node -v\ngit --version\nnpx wrangler --version"
      },
      {
        heading: "プロジェクト作成",
        content: "novel-app という名前で client + server 構成を作ります。",
        code: "mkdir novel-app && cd novel-app\n\nnpm create vite@latest client -- --template react-ts\ncd client && npm install && cd ..\n\nnpm create cloudflare@latest server -- --type hello-world\ncd server && npm install hono && cd .."
      },
      {
        heading: "最初の API",
        content: "health チェックから始め、段階的に novels / chapters ルートを追加していきます。",
        code: "import { Hono } from 'hono';\n\nconst app = new Hono();\napp.get('/api/health', (c) => c.json({ ok: true }));\nexport default app;",
        tip: "wrangler dev で localhost:8787 を起動して確認しましょう。"
      }
    ]
  },
  {
    id: "github",
    title: "GitHub で管理",
    description: "リポジトリ作成と初回 push を学びます",
    sections: [
      {
        heading: "リポジトリ初期化",
        content: "ルートで Git を管理し、client / server を1リポジトリにまとめます。",
        code: "git init\ngit branch -M main\n\n# .gitignore\nnode_modules/\ndist/\n.wrangler/\n.dev.vars"
      },
      {
        heading: "README の例",
        content: "作品の目的と起動方法を README に書いておくと、後から見返しやすくなります。",
        code: "# novel-app\n\n小説投稿・読書サイト\n\n## 開発\n\ncd server && npm run dev   # API :8787\ncd client && npm run dev   # UI  :5173"
      },
      {
        heading: "GitHub に push",
        content: "GitHub でリポジトリを作成し、main に push します。",
        code: "git add .\ngit commit -m \"feat: initial novel-app structure\"\ngit remote add origin git@github.com:YOUR_USER/novel-app.git\ngit push -u origin main",
        tip: "章の追加や作品公開など、機能ごとにコミットを分けると履歴が追いやすくなります。"
      }
    ]
  },
  {
    id: "frontend",
    title: "フロントエンド基礎",
    description: "作品一覧・詳細・読書ページのルーティングを作ります",
    sections: [
      {
        heading: "ページ構成",
        content: "小説サイトに必要な3つの主要ページを定義します。",
        code: "// client/src/App.tsx\n<Routes>\n  <Route path=\"/\" element={<NovelList />} />\n  <Route path=\"/novels/:id\" element={<NovelDetail />} />\n  <Route path=\"/novels/:id/chapters/:num\" element={<Reader />} />\n  <Route path=\"/write\" element={<NovelEditor />} />\n  <Route path=\"/login\" element={<Login />} />\n</Routes>"
      },
      {
        heading: "読書 UI",
        content: "長文を読みやすくするため、行間・最大幅・フォントサイズに配慮します。",
        code: "// client/src/pages/Reader.tsx\nexport function Reader() {\n  const { id, num } = useParams();\n  const [chapter, setChapter] = useState<Chapter | null>(null);\n\n  useEffect(() => {\n    api<Chapter>(`/novels/${id}/chapters/${num}`).then(setChapter);\n  }, [id, num]);\n\n  return (\n    <article className=\"reader\">\n      <h1>{chapter?.title}</h1>\n      <div className=\"reader-body\">{chapter?.body}</div>\n      <nav>\n        <Link to={`/novels/${id}/chapters/${Number(num) - 1}`}>← 前の章</Link>\n        <Link to={`/novels/${id}/chapters/${Number(num) + 1}`}>次の章 →</Link>\n      </nav>\n    </article>\n  );\n}"
      },
      {
        heading: "作品カード",
        content: "一覧ページでは表紙風カードでタイトル・作者・ジャンル・あらすじを表示します。",
        code: "// client/src/components/NovelCard.tsx\nexport function NovelCard({ novel }: { novel: Novel }) {\n  return (\n    <article className=\"novel-card\">\n      <h2>{novel.title}</h2>\n      <p className=\"author\">@{novel.authorName}</p>\n      <p className=\"genre\">{novel.genre}</p>\n      <p className=\"synopsis\">{novel.synopsis}</p>\n      <span className=\"status\">{novel.status === 'ongoing' ? '連載中' : '完結'}</span>\n    </article>\n  );\n}",
        tip: "デモで作品一覧と読書ページの UI を確認してください。"
      }
    ]
  },
  {
    id: "database",
    title: "D1 スキーマ設計",
    description: "作品・章・タグ・ブックマークのテーブルを設計します",
    sections: [
      {
        heading: "データモデル",
        content: "• **users** — 作者・読者\n• **novels** — 作品（タイトル、あらすじ、ジャンル、ステータス）\n• **chapters** — 章（novel_id、chapter_number、title、body）\n• **tags** / **novel_tags** — タグ（多対多）\n• **bookmarks** — ブックマーク + 読了章番号",
        tip: "1作品 : N章 の1対多リレーションが核心です。"
      },
      {
        heading: "マイグレーション",
        content: "章は novel_id + chapter_number でユニークにします。",
        code: "-- migrations/0001_init.sql\nCREATE TABLE users (\n  id INTEGER PRIMARY KEY AUTOINCREMENT,\n  username TEXT UNIQUE NOT NULL,\n  password_hash TEXT NOT NULL,\n  display_name TEXT NOT NULL\n);\n\nCREATE TABLE novels (\n  id INTEGER PRIMARY KEY AUTOINCREMENT,\n  user_id INTEGER NOT NULL REFERENCES users(id),\n  title TEXT NOT NULL,\n  synopsis TEXT NOT NULL,\n  genre TEXT NOT NULL,\n  status TEXT DEFAULT 'ongoing',\n  created_at TEXT DEFAULT CURRENT_TIMESTAMP\n);\n\nCREATE TABLE chapters (\n  id INTEGER PRIMARY KEY AUTOINCREMENT,\n  novel_id INTEGER NOT NULL REFERENCES novels(id),\n  chapter_number INTEGER NOT NULL,\n  title TEXT NOT NULL,\n  body TEXT NOT NULL,\n  published_at TEXT DEFAULT CURRENT_TIMESTAMP,\n  UNIQUE (novel_id, chapter_number)\n);\n\nCREATE TABLE bookmarks (\n  user_id INTEGER NOT NULL REFERENCES users(id),\n  novel_id INTEGER NOT NULL REFERENCES novels(id),\n  last_chapter INTEGER DEFAULT 1,\n  PRIMARY KEY (user_id, novel_id)\n);"
      },
      {
        heading: "タグテーブル",
        content: "検索用に tags と中間テーブルを追加します。",
        code: "CREATE TABLE tags (\n  id INTEGER PRIMARY KEY AUTOINCREMENT,\n  name TEXT UNIQUE NOT NULL\n);\n\nCREATE TABLE novel_tags (\n  novel_id INTEGER NOT NULL REFERENCES novels(id),\n  tag_id INTEGER NOT NULL REFERENCES tags(id),\n  PRIMARY KEY (novel_id, tag_id)\n);"
      }
    ]
  },
  {
    id: "routing",
    title: "Hono ルーティング",
    description: "作品・章・検索の API ルートを整理します",
    sections: [
      {
        heading: "ルート設計",
        content: "• GET /api/novels — 作品一覧\n• POST /api/novels — 作品作成\n• GET /api/novels/:id — 作品詳細 + 目次\n• PATCH /api/novels/:id — 作品更新\n• GET /api/novels/:id/chapters/:num — 章本文\n• POST /api/novels/:id/chapters — 章追加\n• GET /api/novels/search?q=&genre= — 検索",
        code: "import { novelsRoutes } from './routes/novels';\nimport { chaptersRoutes } from './routes/chapters';\nimport { authRoutes } from './routes/auth';\n\napp.route('/api/auth', authRoutes);\napp.route('/api/novels', novelsRoutes);\napp.route('/api/novels/:novelId/chapters', chaptersRoutes);"
      },
      {
        heading: "ネストしたルート",
        content: "章は作品 ID の下にぶら下げます。Hono の param 取得で novelId と chapterNumber を受け取ります。",
        code: "chaptersRoutes.get('/:num', async (c) => {\n  const novelId = c.req.param('novelId');\n  const num = c.req.param('num');\n  const row = await c.env.DB.prepare(\n    'SELECT * FROM chapters WHERE novel_id = ? AND chapter_number = ?'\n  ).bind(novelId, num).first();\n  if (!row) return c.json({ error: 'Not found' }, 404);\n  return c.json(row);\n});"
      },
      {
        heading: "CORS 設定",
        content: "フロントから Cookie 付きリクエストを送る設定は SNS 版と同じです。",
        code: "app.use('/api/*', cors({\n  origin: ['http://localhost:5173'],\n  credentials: true,\n}));",
        tip: "デモで API ルート一覧を確認してください。"
      }
    ]
  },
  {
    id: "novels-crud",
    title: "作品 CRUD",
    description: "作品の作成・編集・公開・削除を実装します",
    sections: [
      {
        heading: "作品作成",
        content: "ログイン中の作者のみ POST できます。",
        code: "novelsRoutes.post('/', requireAuth, async (c) => {\n  const userId = c.get('userId');\n  const { title, synopsis, genre, status } = await c.req.json();\n\n  const result = await c.env.DB.prepare(\n    `INSERT INTO novels (user_id, title, synopsis, genre, status)\n     VALUES (?, ?, ?, ?, ?) RETURNING id`\n  ).bind(userId, title, synopsis, genre, status ?? 'ongoing').first();\n\n  return c.json({ id: result!.id }, 201);\n});"
      },
      {
        heading: "作品一覧",
        content: "新着順・人気順など、ORDER BY で並び替えます。JOIN で作者名も取得します。",
        code: "novelsRoutes.get('/', async (c) => {\n  const genre = c.req.query('genre');\n  let query = `\n    SELECT n.*, u.display_name AS author_name,\n           (SELECT COUNT(*) FROM chapters ch WHERE ch.novel_id = n.id) AS chapter_count\n    FROM novels n JOIN users u ON n.user_id = u.id`;\n  const binds: unknown[] = [];\n  if (genre) { query += ' WHERE n.genre = ?'; binds.push(genre); }\n  query += ' ORDER BY n.created_at DESC LIMIT 50';\n\n  const { results } = await c.env.DB.prepare(query).bind(...binds).all();\n  return c.json(results);\n});"
      },
      {
        heading: "作品更新・削除",
        content: "作者本人のみ PATCH / DELETE 可能にします。",
        code: "novelsRoutes.patch('/:id', requireAuth, async (c) => {\n  const userId = c.get('userId');\n  const id = c.req.param('id');\n  const { title, synopsis, status } = await c.req.json();\n\n  const result = await c.env.DB.prepare(\n    `UPDATE novels SET title = ?, synopsis = ?, status = ?\n     WHERE id = ? AND user_id = ?`\n  ).bind(title, synopsis, status, id, userId).run();\n\n  if (result.meta.changes === 0) return c.json({ error: 'Forbidden' }, 403);\n  return c.json({ ok: true });\n});",
        tip: "デモで作品の作成・編集フローを試してください。"
      }
    ]
  },
  {
    id: "chapters",
    title: "章の管理",
    description: "章の追加・並び・公開を実装します",
    sections: [
      {
        heading: "章の追加",
        content: "新しい章番号は MAX(chapter_number) + 1 で採番します。",
        code: "chaptersRoutes.post('/', requireAuth, async (c) => {\n  const userId = c.get('userId');\n  const novelId = c.req.param('novelId');\n  const { title, body } = await c.req.json();\n\n  const owner = await c.env.DB.prepare(\n    'SELECT id FROM novels WHERE id = ? AND user_id = ?'\n  ).bind(novelId, userId).first();\n  if (!owner) return c.json({ error: 'Forbidden' }, 403);\n\n  const next = await c.env.DB.prepare(\n    'SELECT COALESCE(MAX(chapter_number), 0) + 1 AS n FROM chapters WHERE novel_id = ?'\n  ).bind(novelId).first<{ n: number }>();\n\n  await c.env.DB.prepare(\n    'INSERT INTO chapters (novel_id, chapter_number, title, body) VALUES (?, ?, ?, ?)'\n  ).bind(novelId, next!.n, title, body).run();\n\n  return c.json({ chapterNumber: next!.n }, 201);\n});"
      },
      {
        heading: "目次 API",
        content: "作品詳細ページ用に章一覧（タイトルのみ）を返します。",
        code: "novelsRoutes.get('/:id', async (c) => {\n  const id = c.req.param('id');\n  const novel = await c.env.DB.prepare(\n    `SELECT n.*, u.display_name AS author_name FROM novels n\n     JOIN users u ON n.user_id = u.id WHERE n.id = ?`\n  ).bind(id).first();\n  if (!novel) return c.json({ error: 'Not found' }, 404);\n\n  const { results: chapters } = await c.env.DB.prepare(\n    'SELECT chapter_number, title FROM chapters WHERE novel_id = ? ORDER BY chapter_number'\n  ).bind(id).all();\n\n  return c.json({ ...novel, chapters });\n});"
      },
      {
        heading: "下書きと公開",
        content: "執筆中の章は published_at を NULL にし、公開時に更新する方式も取れます。読者には published のみ返すフィルタを追加しましょう。",
        tip: "長文は PATCH で部分更新より、章単位の PUT/PATCH が扱いやすいです。"
      }
    ]
  },
  {
    id: "auth",
    title: "ログイン・認証",
    description: "作者・読者の認証とセッション管理を実装します",
    sections: [
      {
        heading: "登録とログイン",
        content: "SNS 版と同じく username + password_hash + セッション Cookie 方式です。",
        code: "authRoutes.post('/register', async (c) => {\n  const { username, password, displayName } = await c.req.json();\n  const hash = await hashPassword(password);\n  await c.env.DB.prepare(\n    'INSERT INTO users (username, password_hash, display_name) VALUES (?, ?, ?)'\n  ).bind(username, hash, displayName).run();\n  return c.json({ ok: true }, 201);\n});"
      },
      {
        heading: "作者専用ルート",
        content: "作品・章の作成は requireAuth ミドルウェアで保護します。読書は未ログインでも可能にするのが一般的です。",
        code: "novelsRoutes.post('/', requireAuth, handler);\nnovelsRoutes.patch('/:id', requireAuth, handler);\nchaptersRoutes.post('/', requireAuth, handler);\n\n// 一覧・読書は公開\nnovelsRoutes.get('/', publicHandler);\nchaptersRoutes.get('/:num', publicHandler);"
      },
      {
        heading: "現在ユーザー API",
        content: "フロントのヘッダー表示用に GET /api/auth/me を用意します。",
        code: "authRoutes.get('/me', requireAuth, async (c) => {\n  const userId = c.get('userId');\n  const user = await c.env.DB.prepare(\n    'SELECT id, username, display_name FROM users WHERE id = ?'\n  ).bind(userId).first();\n  return c.json(user);\n});",
        tip: "認証チュートリアルの Cookie セッションの章が参考になります。"
      }
    ]
  },
  {
    id: "search",
    title: "検索・タグ",
    description: "ジャンル・キーワード・タグで作品を探せるようにします",
    sections: [
      {
        heading: "キーワード検索",
        content: "タイトルとあらすじを LIKE 検索します（小規模なら十分。大規模は FTS を検討）。",
        code: "novelsRoutes.get('/search', async (c) => {\n  const q = c.req.query('q') ?? '';\n  const genre = c.req.query('genre');\n\n  let sql = `\n    SELECT n.*, u.display_name AS author_name\n    FROM novels n JOIN users u ON n.user_id = u.id\n    WHERE (n.title LIKE ? OR n.synopsis LIKE ?)`;\n  const pattern = `%${q}%`;\n  const binds: unknown[] = [pattern, pattern];\n\n  if (genre) { sql += ' AND n.genre = ?'; binds.push(genre); }\n  sql += ' ORDER BY n.created_at DESC LIMIT 30';\n\n  const { results } = await c.env.DB.prepare(sql).bind(...binds).all();\n  return c.json(results);\n});"
      },
      {
        heading: "タグの付与",
        content: "作品作成時にタグ名の配列を受け取り、tags テーブルと novel_tags を更新します。",
        code: "async function attachTags(db: D1Database, novelId: number, tagNames: string[]) {\n  for (const name of tagNames) {\n    await db.prepare('INSERT OR IGNORE INTO tags (name) VALUES (?)').bind(name).run();\n    const tag = await db.prepare('SELECT id FROM tags WHERE name = ?').bind(name).first();\n    await db.prepare('INSERT OR IGNORE INTO novel_tags (novel_id, tag_id) VALUES (?, ?)')\n      .bind(novelId, tag!.id).run();\n  }\n}"
      },
      {
        heading: "フロントのフィルタ UI",
        content: "ジャンルドロップダウン + 検索ボックス + タグチップで絞り込みます。",
        code: "const genres = ['ファンタジー', '恋愛', 'SF', 'ミステリー', 'ホラー'];\n\n<select value={genre} onChange={(e) => setGenre(e.target.value)}>\n  <option value=\"\">すべて</option>\n  {genres.map((g) => <option key={g} value={g}>{g}</option>)}\n</select>",
        tip: "デモでジャンル・タグ検索を試してください。"
      }
    ]
  },
  {
    id: "bookmarks",
    title: "ブックマーク",
    description: "お気に入り作品と読書進捗を保存します",
    sections: [
      {
        heading: "ブックマーク API",
        content: "UPSERT で追加・更新します。last_chapter に最後に読んだ章番号を保存します。",
        code: "novelsRoutes.post('/:id/bookmark', requireAuth, async (c) => {\n  const userId = c.get('userId');\n  const novelId = c.req.param('id');\n  const { lastChapter } = await c.req.json();\n\n  await c.env.DB.prepare(\n    `INSERT INTO bookmarks (user_id, novel_id, last_chapter)\n     VALUES (?, ?, ?)\n     ON CONFLICT(user_id, novel_id) DO UPDATE SET last_chapter = excluded.last_chapter`\n  ).bind(userId, novelId, lastChapter ?? 1).run();\n\n  return c.json({ ok: true });\n});"
      },
      {
        heading: "続きから読む",
        content: "ブックマーク一覧 API で last_chapter 付きの作品リストを返します。",
        code: "usersRoutes.get('/me/bookmarks', requireAuth, async (c) => {\n  const userId = c.get('userId');\n  const { results } = await c.env.DB.prepare(\n    `SELECT n.*, b.last_chapter\n     FROM bookmarks b JOIN novels n ON b.novel_id = n.id\n     WHERE b.user_id = ? ORDER BY b.rowid DESC`\n  ).bind(userId).all();\n  return c.json(results);\n});"
      },
      {
        heading: "Reader 連携",
        content: "章を読み終えたら last_chapter を更新し、「次回は第N章から」UX を実現します。",
        code: "useEffect(() => {\n  if (user && chapter) {\n    api(`/novels/${novelId}/bookmark`, {\n      method: 'POST',\n      body: JSON.stringify({ lastChapter: chapter.chapter_number }),\n    });\n  }\n}, [chapter?.chapter_number]);",
        tip: "デモでブックマークと読書進捗を確認してください。"
      }
    ]
  },
  {
    id: "frontend-integration",
    title: "フロント統合",
    description: "API と UI を接続して完成させます",
    sections: [
      {
        heading: "執筆画面",
        content: "作品メタデータ + 章エディタを1画面に。Markdown 対応も将来的な拡張点です。",
        code: "export function ChapterEditor({ novelId }: { novelId: string }) {\n  const [title, setTitle] = useState('');\n  const [body, setBody] = useState('');\n\n  const publish = async () => {\n    await api(`/novels/${novelId}/chapters`, {\n      method: 'POST',\n      body: JSON.stringify({ title, body }),\n    });\n    navigate(`/novels/${novelId}`);\n  };\n\n  return (\n    <>\n      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder=\"第○章 タイトル\" />\n      <textarea value={body} onChange={(e) => setBody(e.target.value)} rows={20} />\n      <button onClick={publish}>公開</button>\n    </>\n  );\n}"
      },
      {
        heading: "レスポンシブ読書 UI",
        content: "スマホでも読みやすいよう max-width: 40rem、line-height: 1.9 などを CSS で調整します。",
        code: ".reader-body {\n  max-width: 40rem;\n  margin: 0 auto;\n  line-height: 1.9;\n  font-size: 1.05rem;\n  white-space: pre-wrap;\n}"
      },
      {
        heading: "エラーとローディング",
        content: "Skeleton UI やエラーバウンダリで UX を整えます。章が存在しない場合は 404 ページへ。",
        tip: "client + server を同時起動し、作品投稿から読書まで一連の流れを確認しましょう。"
      }
    ]
  },
  {
    id: "cicd",
    title: "GitHub Actions CI/CD",
    description: "テスト・ビルド・デプロイを自動化します",
    sections: [
      {
        heading: "ワークフロー",
        content: "main への push で client ビルド → Worker デプロイ → Pages デプロイを実行します。",
        code: "name: Deploy novel-app\non:\n  push:\n    branches: [main]\n\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: '20'\n      - run: npm ci && npm run build\n        working-directory: client\n      - run: npx wrangler deploy\n        working-directory: server\n        env:\n          CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}\n          CLOUDFLARE_ACCOUNT_ID: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}"
      },
      {
        heading: "マイグレーション in CI",
        content: "デプロイ前に D1 マイグレーションを remote 適用するステップを追加できます。",
        code: "- name: Apply D1 migrations\n  working-directory: server\n  run: npx wrangler d1 migrations apply novel-app-db --remote\n  env:\n    CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}"
      },
      {
        heading: "PR 時の CI",
        content: "feature ブランチでは lint + build のみ実行し、本番デプロイは main 限定にします。",
        tip: "CI/CD 入門チュートリアルと併用すると理解が深まります。"
      }
    ]
  },
  {
    id: "deploy",
    title: "Cloudflare デプロイ",
    description: "本番環境に API とフロントを公開します",
    sections: [
      {
        heading: "Worker デプロイ",
        content: "API を Cloudflare Workers に公開します。",
        code: "cd server\nnpx wrangler d1 migrations apply novel-app-db --remote\nnpx wrangler deploy"
      },
      {
        heading: "Pages デプロイ",
        content: "client/dist を Cloudflare Pages にホストします。",
        code: "# Dashboard: Build = cd client && npm run build\n# Output = client/dist\n\nnpx wrangler pages deploy client/dist --project-name novel-app"
      },
      {
        heading: "本番チェックリスト",
        content: "• CORS origin に Pages URL を追加\n• Cookie secure: true\n• 環境変数 VITE_API_URL\n• カスタムドメイン（任意）\n• 作品・章データのバックアップ方針\n\n小説投稿サイトの完成おめでとうございます！",
        tip: "Hono 投稿サイト（SNS）と比べて、章構造と長文 UI の設計の違いを振り返ってみましょう。"
      }
    ]
  }
]
