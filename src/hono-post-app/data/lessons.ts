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
    description: "作るアプリの全体像と技術スタックを理解します",
    sections: [
      {
        heading: "何を作るか",
        content: "このチュートリアルでは、Twitter / X のような**投稿サイト（ミニ SNS）**を一から作ります。\n\n• ユーザー登録・ログイン\n• 投稿の作成・編集・削除（CRUD）\n• タイムライン表示\n• いいね機能\n• フォロー / フォロー解除\n• フォロー中ユーザーの投稿フィード\n\nNext.js などのフルスタックフレームワークは使わず、**フロントエンド（React）**と **Hono API（Cloudflare Workers）** を分離した構成で学びます。実務でもよく使われるパターンです。",
        tip: "デモでフロント・API・DB の3層構成を確認してください。"
      },
      {
        heading: "技術スタック",
        content: "• **フロントエンド** — Vite + React + TypeScript\n• **API** — Hono on Cloudflare Workers\n• **データベース** — Cloudflare D1（SQLite）\n• **認証** — セッション Cookie（Workers KV または D1）\n• **バージョン管理** — Git + GitHub\n• **CI/CD** — GitHub Actions\n• **デプロイ** — Cloudflare Workers + Pages\n\nHono は Express 風の軽量 Web フレームワークで、Cloudflare Workers との相性が抜群です。",
        code: "post-app/\n├── client/          # Vite + React（フロント）\n├── server/          # Hono + Workers（API）\n│   ├── src/index.ts\n│   ├── migrations/\n│   └── wrangler.jsonc\n├── .github/workflows/\n│   └── deploy.yml\n└── README.md"
      },
      {
        heading: "前提知識",
        content: "以下のチュートリアルを先に学んでおくとスムーズです。\n\n• Git 入門 — commit、push、PR\n• HTTP — REST API、fetch\n• React — コンポーネント、Hooks\n• SQL / DB 入門 — テーブル、リレーション\n• Cloudflare 入門 — Workers、D1、Wrangler\n\nすべてを完璧に理解していなくても、手を動かしながら進められます。"
      }
    ]
  },
  {
    id: "setup",
    title: "環境セットアップ",
    description: "Node.js、Wrangler、エディタの準備とプロジェクト作成を学びます",
    sections: [
      {
        heading: "必要なツール",
        content: "• **Node.js 20+** — https://nodejs.org\n• **Git** — バージョン管理\n• **VS Code** などのエディタ\n• **Cloudflare アカウント** — 無料枠で開始可能\n• **GitHub アカウント** — リポジトリ管理と CI/CD\n\nターミナルでバージョンを確認しましょう。",
        code: "node -v    # v20 以上推奨\nnpm -v\ngit --version\nnpx wrangler --version"
      },
      {
        heading: "プロジェクトの骨組み",
        content: "まず monorepo 風のフォルダ構成を作ります。client と server を分けることで、フロントと API を独立して開発・デプロイできます。",
        code: "mkdir post-app && cd post-app\n\n# フロントエンド（Vite + React）\nnpm create vite@latest client -- --template react-ts\ncd client && npm install && cd ..\n\n# バックエンド（Hono on Workers）\nnpm create cloudflare@latest server -- --type hello-world\n# テンプレート: Worker only、TypeScript を選択\ncd server && npm install hono && cd .."
      },
      {
        heading: "Hono のインストール",
        content: "server ディレクトリで Hono を追加します。create-cloudflare で作った Worker を Hono アプリに差し替えていきます。",
        code: "// server/src/index.ts\nimport { Hono } from 'hono';\n\nconst app = new Hono();\n\napp.get('/api/health', (c) => c.json({ ok: true }));\n\nexport default app;",
        tip: "npm run dev で server を起動し、/api/health にアクセスして動作確認しましょう。"
      }
    ]
  },
  {
    id: "github",
    title: "GitHub で管理",
    description: "リポジトリ作成、.gitignore、初回コミットの流れを学びます",
    sections: [
      {
        heading: "Git リポジトリの初期化",
        content: "post-app ルートで Git を初期化し、client と server をまとめて管理します。",
        code: "cd post-app\ngit init\ngit branch -M main"
      },
      {
        heading: ".gitignore",
        content: "node_modules、ビルド成果物、環境変数ファイルはコミットしません。",
        code: "# .gitignore\nnode_modules/\ndist/\n.wrangler/\n.dev.vars\n.env\n.env.local\n*.local\n.DS_Store"
      },
      {
        heading: "GitHub に push",
        content: "GitHub で空のリポジトリを作成し、リモートに push します。README も追加しておきましょう。",
        code: "git add .\ngit commit -m \"feat: initial project structure\"\n\ngit remote add origin git@github.com:YOUR_USER/post-app.git\ngit push -u origin main",
        tip: "Git 入門チュートリアルの「リモート操作」「Pull Request」も復習すると理解が深まります。"
      }
    ]
  },
  {
    id: "frontend",
    title: "フロントエンド基礎",
    description: "React でルーティングと API 通信の土台を作ります",
    sections: [
      {
        heading: "React Router の導入",
        content: "ページ遷移（タイムライン、ログイン、プロフィール）のために react-router-dom を使います。",
        code: "cd client\nnpm install react-router-dom\n\n// client/src/main.tsx\nimport { BrowserRouter } from 'react-router-dom';\n\n// client/src/App.tsx\nimport { Routes, Route } from 'react-router-dom';\nimport { Timeline } from './pages/Timeline';\nimport { Login } from './pages/Login';\n\nexport default function App() {\n  return (\n    <Routes>\n      <Route path=\"/\" element={<Timeline />} />\n      <Route path=\"/login\" element={<Login />} />\n    </Routes>\n  );\n}"
      },
      {
        heading: "API クライアント",
        content: "fetch で Hono API を呼び出す薄いラッパーを作ります。開発中は Vite の proxy で CORS を回避できます。",
        code: "// client/vite.config.ts\nexport default defineConfig({\n  server: {\n    proxy: {\n      '/api': 'http://localhost:8787',\n    },\n  },\n});\n\n// client/src/lib/api.ts\nconst BASE = '/api';\n\nexport async function api<T>(path: string, init?: RequestInit): Promise<T> {\n  const res = await fetch(`${BASE}${path}`, {\n    ...init,\n    headers: { 'Content-Type': 'application/json', ...init?.headers },\n    credentials: 'include',\n  });\n  if (!res.ok) throw new Error(await res.text());\n  return res.json();\n}"
      },
      {
        heading: "投稿フォーム UI",
        content: "テキストエリアと送信ボタンから始め、後のレッスンで API と接続します。",
        code: "// client/src/components/PostForm.tsx\nexport function PostForm({ onSubmit }: { onSubmit: (body: string) => void }) {\n  const [body, setBody] = useState('');\n  return (\n    <form onSubmit={(e) => { e.preventDefault(); onSubmit(body); setBody(''); }}>\n      <textarea value={body} onChange={(e) => setBody(e.target.value)} maxLength={280} />\n      <button type=\"submit\">投稿</button>\n    </form>\n  );\n}",
        tip: "デモでタイムライン UI のイメージを確認してください。"
      }
    ]
  },
  {
    id: "database",
    title: "D1 スキーマ設計",
    description: "users、posts、likes、follows テーブルを設計します",
    sections: [
      {
        heading: "ER 図のイメージ",
        content: "• **users** — ユーザー情報\n• **posts** — 投稿（user_id で users と紐づく）\n• **likes** — いいね（user_id + post_id の複合ユニーク）\n• **follows** — フォロー関係（follower_id → following_id）\n\nリレーションを SQL で表現し、マイグレーションで管理します。",
        tip: "DB 入門の「リレーション」を思い出しながら読み進めましょう。"
      },
      {
        heading: "マイグレーションファイル",
        content: "Wrangler の migrations フォルダに SQL を置きます。",
        code: "-- server/migrations/0001_init.sql\nCREATE TABLE users (\n  id INTEGER PRIMARY KEY AUTOINCREMENT,\n  username TEXT UNIQUE NOT NULL,\n  password_hash TEXT NOT NULL,\n  display_name TEXT NOT NULL,\n  created_at TEXT DEFAULT CURRENT_TIMESTAMP\n);\n\nCREATE TABLE posts (\n  id INTEGER PRIMARY KEY AUTOINCREMENT,\n  user_id INTEGER NOT NULL REFERENCES users(id),\n  body TEXT NOT NULL,\n  created_at TEXT DEFAULT CURRENT_TIMESTAMP\n);\n\nCREATE TABLE likes (\n  user_id INTEGER NOT NULL REFERENCES users(id),\n  post_id INTEGER NOT NULL REFERENCES posts(id),\n  created_at TEXT DEFAULT CURRENT_TIMESTAMP,\n  PRIMARY KEY (user_id, post_id)\n);\n\nCREATE TABLE follows (\n  follower_id INTEGER NOT NULL REFERENCES users(id),\n  following_id INTEGER NOT NULL REFERENCES users(id),\n  created_at TEXT DEFAULT CURRENT_TIMESTAMP,\n  PRIMARY KEY (follower_id, following_id)\n);"
      },
      {
        heading: "マイグレーションの適用",
        content: "ローカル D1 にスキーマを反映します。",
        code: "# wrangler.jsonc に d1_databases を設定後\nnpx wrangler d1 migrations apply post-app-db --local\n\n# 本番 DB にも適用（デプロイ前）\nnpx wrangler d1 migrations apply post-app-db --remote"
      }
    ]
  },
  {
    id: "routing",
    title: "Hono ルーティング",
    description: "API ルートをモジュール分割して整理します",
    sections: [
      {
        heading: "ルート設計",
        content: "RESTful な URL 設計を意識します。\n\n• GET /api/posts — タイムライン\n• POST /api/posts — 投稿作成\n• GET /api/posts/:id — 1件取得\n• PATCH /api/posts/:id — 編集\n• DELETE /api/posts/:id — 削除\n• POST /api/posts/:id/like — いいね\n• DELETE /api/posts/:id/like — いいね解除\n• POST /api/users/:id/follow — フォロー\n• DELETE /api/users/:id/follow — フォロー解除",
        code: "// server/src/index.ts\nimport { Hono } from 'hono';\nimport { postsRoutes } from './routes/posts';\nimport { authRoutes } from './routes/auth';\nimport { usersRoutes } from './routes/users';\n\ntype Bindings = { DB: D1Database };\n\nconst app = new Hono<{ Bindings: Bindings }>();\n\napp.route('/api/auth', authRoutes);\napp.route('/api/posts', postsRoutes);\napp.route('/api/users', usersRoutes);\n\nexport default app;"
      },
      {
        heading: "サブルーター",
        content: "routes/posts.ts のように機能ごとにファイルを分けます。",
        code: "// server/src/routes/posts.ts\nimport { Hono } from 'hono';\n\nexport const postsRoutes = new Hono<{ Bindings: { DB: D1Database } }>();\n\npostsRoutes.get('/', async (c) => {\n  const { results } = await c.env.DB.prepare(\n    `SELECT p.*, u.username, u.display_name\n     FROM posts p JOIN users u ON p.user_id = u.id\n     ORDER BY p.created_at DESC LIMIT 50`\n  ).all();\n  return c.json(results);\n});"
      },
      {
        heading: "CORS と Cookie",
        content: "フロント（別オリジン）から Cookie を送るには CORS 設定が必要です。",
        code: "import { cors } from 'hono/cors';\n\napp.use('/api/*', cors({\n  origin: ['http://localhost:5173', 'https://your-pages.pages.dev'],\n  credentials: true,\n}));",
        tip: "デモで API ルートの一覧を確認してください。"
      }
    ]
  },
  {
    id: "crud",
    title: "投稿 CRUD",
    description: "投稿の作成・読取・更新・削除 API を実装します",
    sections: [
      {
        heading: "CREATE — 投稿作成",
        content: "ログイン中の user_id をセッションから取得し、INSERT します。",
        code: "postsRoutes.post('/', async (c) => {\n  const userId = c.get('userId'); // 認証ミドルウェアで設定\n  if (!userId) return c.json({ error: 'Unauthorized' }, 401);\n\n  const { body } = await c.req.json<{ body: string }>();\n  if (!body?.trim()) return c.json({ error: 'body required' }, 400);\n\n  const result = await c.env.DB.prepare(\n    'INSERT INTO posts (user_id, body) VALUES (?, ?) RETURNING id'\n  ).bind(userId, body.trim()).first<{ id: number }>();\n\n  return c.json({ id: result!.id }, 201);\n});"
      },
      {
        heading: "READ — タイムライン",
        content: "JOIN でユーザー名付きの投稿一覧を返します。いいね数もサブクエリで取得できます。",
        code: "postsRoutes.get('/', async (c) => {\n  const { results } = await c.env.DB.prepare(\n    `SELECT p.id, p.body, p.created_at,\n            u.username, u.display_name,\n            (SELECT COUNT(*) FROM likes l WHERE l.post_id = p.id) AS like_count\n     FROM posts p\n     JOIN users u ON p.user_id = u.id\n     ORDER BY p.created_at DESC\n     LIMIT 50`\n  ).all();\n  return c.json(results);\n});"
      },
      {
        heading: "UPDATE / DELETE",
        content: "本人のみ編集・削除できるよう WHERE に user_id を含めます。",
        code: "postsRoutes.patch('/:id', async (c) => {\n  const userId = c.get('userId');\n  const id = c.req.param('id');\n  const { body } = await c.req.json<{ body: string }>();\n\n  const result = await c.env.DB.prepare(\n    'UPDATE posts SET body = ? WHERE id = ? AND user_id = ?'\n  ).bind(body, id, userId).run();\n\n  if (result.meta.changes === 0) return c.json({ error: 'Not found' }, 404);\n  return c.json({ ok: true });\n});\n\npostsRoutes.delete('/:id', async (c) => {\n  const userId = c.get('userId');\n  const id = c.req.param('id');\n  await c.env.DB.prepare(\n    'DELETE FROM posts WHERE id = ? AND user_id = ?'\n  ).bind(id, userId).run();\n  return c.body(null, 204);\n});",
        tip: "デモで CRUD 操作の流れを試してください。"
      }
    ]
  },
  {
    id: "auth",
    title: "ログイン・認証",
    description: "ユーザー登録、ログイン、セッション管理を実装します",
    sections: [
      {
        heading: "パスワードのハッシュ",
        content: "平文パスワードは絶対に保存しません。Web Crypto API で bcrypt 相当の処理を行います（または @noble/hashes 等を利用）。",
        code: "// 登録 API\nauthRoutes.post('/register', async (c) => {\n  const { username, password, displayName } = await c.req.json();\n  const passwordHash = await hashPassword(password);\n\n  try {\n    await c.env.DB.prepare(\n      'INSERT INTO users (username, password_hash, display_name) VALUES (?, ?, ?)'\n    ).bind(username, passwordHash, displayName).run();\n  } catch {\n    return c.json({ error: 'username taken' }, 409);\n  }\n  return c.json({ ok: true }, 201);\n});"
      },
      {
        heading: "セッション Cookie",
        content: "ログイン成功時にランダムな session_id を発行し、D1 または KV に保存します。Set-Cookie で HttpOnly Cookie を返します。",
        code: "authRoutes.post('/login', async (c) => {\n  const { username, password } = await c.req.json();\n  const user = await c.env.DB.prepare(\n    'SELECT id, password_hash FROM users WHERE username = ?'\n  ).bind(username).first();\n\n  if (!user || !(await verifyPassword(password, user.password_hash))) {\n    return c.json({ error: 'Invalid credentials' }, 401);\n  }\n\n  const sessionId = crypto.randomUUID();\n  await c.env.DB.prepare(\n    'INSERT INTO sessions (id, user_id, expires_at) VALUES (?, ?, datetime(\"now\", \"+7 days\"))'\n  ).bind(sessionId, user.id).run();\n\n  setCookie(c, 'session', sessionId, { httpOnly: true, secure: true, sameSite: 'Lax', path: '/' });\n  return c.json({ ok: true });\n});"
      },
      {
        heading: "認証ミドルウェア",
        content: "保護されたルートで Cookie から user_id を復元します。",
        code: "// server/src/middleware/auth.ts\nexport const requireAuth = createMiddleware(async (c, next) => {\n  const sessionId = getCookie(c, 'session');\n  if (!sessionId) return c.json({ error: 'Unauthorized' }, 401);\n\n  const row = await c.env.DB.prepare(\n    'SELECT user_id FROM sessions WHERE id = ? AND expires_at > datetime(\"now\")'\n  ).bind(sessionId).first<{ user_id: number }>();\n\n  if (!row) return c.json({ error: 'Unauthorized' }, 401);\n  c.set('userId', row.user_id);\n  await next();\n});",
        tip: "認証チュートリアルの Cookie セッションの章も参考にしてください。"
      }
    ]
  },
  {
    id: "likes",
    title: "いいね機能",
    description: "いいね / いいね解除 API と UI を実装します",
    sections: [
      {
        heading: "いいね API",
        content: "複合 PRIMARY KEY により、同じユーザーが二重にいいねできないようにします。",
        code: "postsRoutes.post('/:id/like', requireAuth, async (c) => {\n  const userId = c.get('userId');\n  const postId = c.req.param('id');\n\n  try {\n    await c.env.DB.prepare(\n      'INSERT INTO likes (user_id, post_id) VALUES (?, ?)'\n    ).bind(userId, postId).run();\n  } catch {\n    return c.json({ error: 'Already liked' }, 409);\n  }\n  return c.json({ ok: true }, 201);\n});\n\npostsRoutes.delete('/:id/like', requireAuth, async (c) => {\n  const userId = c.get('userId');\n  const postId = c.req.param('id');\n  await c.env.DB.prepare(\n    'DELETE FROM likes WHERE user_id = ? AND post_id = ?'\n  ).bind(userId, postId).run();\n  return c.body(null, 204);\n});"
      },
      {
        heading: "いいね状態の取得",
        content: "タイムライン API で、ログインユーザーがいいね済みかどうかも返すと UI が作りやすくなります。",
        code: "-- ログインユーザー (?) のいいね有無\n(SELECT 1 FROM likes l\n WHERE l.post_id = p.id AND l.user_id = ?) IS NOT NULL AS liked_by_me"
      },
      {
        heading: "フロントエンド",
        content: "楽観的 UI 更新（先に UI を変えて、失敗したら戻す）で快適な UX を実現します。",
        code: "// client/src/components/LikeButton.tsx\nexport function LikeButton({ postId, count, liked, onToggle }: Props) {\n  return (\n    <button onClick={() => onToggle(postId)} aria-pressed={liked}>\n      {liked ? '❤️' : '🤍'} {count}\n    </button>\n  );\n}",
        tip: "デモでいいねのトグル動作を確認してください。"
      }
    ]
  },
  {
    id: "follows",
    title: "フォロー機能",
    description: "フォロー / フォロー解除とフォロータイムラインを実装します",
    sections: [
      {
        heading: "フォロー API",
        content: "follower_id が following_id をフォローする関係を follows テーブルに保存します。自分自身はフォロー不可にします。",
        code: "usersRoutes.post('/:id/follow', requireAuth, async (c) => {\n  const followerId = c.get('userId');\n  const followingId = Number(c.req.param('id'));\n  if (followerId === followingId) return c.json({ error: 'Cannot follow self' }, 400);\n\n  await c.env.DB.prepare(\n    'INSERT INTO follows (follower_id, following_id) VALUES (?, ?)'\n  ).bind(followerId, followingId).run();\n  return c.json({ ok: true }, 201);\n});"
      },
      {
        heading: "フォロータイムライン",
        content: "フォロー中ユーザーの投稿だけを返すエンドポイントを追加します。",
        code: "postsRoutes.get('/following', requireAuth, async (c) => {\n  const userId = c.get('userId');\n  const { results } = await c.env.DB.prepare(\n    `SELECT p.*, u.username, u.display_name\n     FROM posts p\n     JOIN users u ON p.user_id = u.id\n     WHERE p.user_id IN (\n       SELECT following_id FROM follows WHERE follower_id = ?\n     )\n     ORDER BY p.created_at DESC\n     LIMIT 50`\n  ).bind(userId).all();\n  return c.json(results);\n});"
      },
      {
        heading: "プロフィールページ",
        content: "ユーザーの投稿一覧、フォロワー数、フォロー数を表示する UI を作ります。",
        code: "usersRoutes.get('/:username', async (c) => {\n  const username = c.req.param('username');\n  const user = await c.env.DB.prepare(\n    `SELECT id, username, display_name,\n            (SELECT COUNT(*) FROM follows WHERE following_id = users.id) AS followers,\n            (SELECT COUNT(*) FROM follows WHERE follower_id = users.id) AS following\n     FROM users WHERE username = ?`\n  ).bind(username).first();\n  if (!user) return c.json({ error: 'Not found' }, 404);\n  return c.json(user);\n});",
        tip: "デモでフォロー関係のグラフを確認してください。"
      }
    ]
  },
  {
    id: "frontend-integration",
    title: "フロント統合",
    description: "API と UI を接続し、完成したアプリに仕上げます",
    sections: [
      {
        heading: "状態管理",
        content: "ログインユーザー情報は Context または TanStack Query で管理します。",
        code: "// client/src/contexts/AuthContext.tsx\nexport function AuthProvider({ children }: { children: React.ReactNode }) {\n  const [user, setUser] = useState<User | null>(null);\n\n  useEffect(() => {\n    api<User>('/auth/me').then(setUser).catch(() => setUser(null));\n  }, []);\n\n  return (\n    <AuthContext.Provider value={{ user, setUser, logout: () => api('/auth/logout', { method: 'POST' }) }}>\n      {children}\n    </AuthContext.Provider>\n  );\n}"
      },
      {
        heading: "タイムラインの完成",
        content: "PostForm + PostList + LikeButton + FollowButton を組み合わせます。",
        code: "export function Timeline() {\n  const { data: posts, mutate } = useSWR('/posts', () => api<Post[]>('/posts'));\n\n  return (\n    <div>\n      <PostForm onSubmit={async (body) => {\n        await api('/posts', { method: 'POST', body: JSON.stringify({ body }) });\n        mutate();\n      }} />\n      {posts?.map((p) => <PostCard key={p.id} post={p} />)}\n    </div>\n  );\n}"
      },
      {
        heading: "エラーハンドリング",
        content: "401 ならログインページへ、ネットワークエラーはトースト表示など、UX を整えます。",
        tip: "ローカルで client (5173) と server (8787) を同時に起動して E2E で確認しましょう。"
      }
    ]
  },
  {
    id: "cicd",
    title: "GitHub Actions CI/CD",
    description: "テスト・ビルド・デプロイを自動化します",
    sections: [
      {
        heading: "ワークフローの概要",
        content: "main ブランチへの push で、Lint → ビルド → Cloudflare デプロイを自動実行します。",
        code: "# .github/workflows/deploy.yml\nname: Deploy\n\non:\n  push:\n    branches: [main]\n\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n\n      - uses: actions/setup-node@v4\n        with:\n          node-version: '20'\n          cache: 'npm'\n\n      - name: Install & build client\n        working-directory: client\n        run: |\n          npm ci\n          npm run build\n\n      - name: Deploy Worker\n        working-directory: server\n        env:\n          CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}\n          CLOUDFLARE_ACCOUNT_ID: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}\n        run: npx wrangler deploy"
      },
      {
        heading: "GitHub Secrets",
        content: "Cloudflare ダッシュボードで API トークンを作成し、GitHub リポジトリの Settings → Secrets に登録します。\n\n• CLOUDFLARE_API_TOKEN\n• CLOUDFLARE_ACCOUNT_ID",
        tip: "CI/CD 入門チュートリアルも合わせて読むと理解が深まります。"
      },
      {
        heading: "PR ベースのデプロイ",
        content: "本番は main のみ。feature ブランチでは CI（テストのみ）を走らせ、PR マージ後にデプロイする流れが安全です。",
        code: "on:\n  pull_request:\n    branches: [main]\n  push:\n    branches: [main]\n\njobs:\n  test:\n    if: github.event_name == 'pull_request'\n    runs-on: ubuntu-latest\n    steps:\n      - run: npm ci && npm run lint && npm run build"
      }
    ]
  },
  {
    id: "deploy",
    title: "Cloudflare デプロイ",
    description: "Workers API と Pages フロントを本番公開します",
    sections: [
      {
        heading: "Worker のデプロイ",
        content: "server ディレクトリから wrangler deploy で API を公開します。D1 マイグレーションも本番に適用済みか確認しましょう。",
        code: "cd server\nnpx wrangler d1 migrations apply post-app-db --remote\nnpx wrangler deploy\n# → https://post-app-api.YOUR_SUBDOMAIN.workers.dev"
      },
      {
        heading: "Pages でフロントをホスト",
        content: "client のビルド成果物を Cloudflare Pages にデプロイします。GitHub 連携または wrangler pages deploy が使えます。",
        code: "# Cloudflare Dashboard → Pages → Git 連携\n# Build command: cd client && npm run build\n# Output directory: client/dist\n\n# または CLI\nnpx wrangler pages deploy client/dist --project-name post-app"
      },
      {
        heading: "本番環境の設定",
        content: "• Pages の環境変数 VITE_API_URL に Worker の URL\n• Worker の CORS origin に Pages の URL を追加\n• Cookie の secure: true（HTTPS 必須）\n• カスタムドomain（任意）\n\nこれで投稿サイトが世界中からアクセス可能になります！",
        tip: "おめでとうございます！ミニ SNS の完成です 🎉"
      }
    ]
  }
]
