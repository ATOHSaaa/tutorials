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
    id: 'intro',
    title: 'TanStack Start とは？',
    description: 'TanStack Router ベースのフルスタックフレームワークの基本を学びます',
    sections: [
      {
        heading: 'TanStack Start とは何か？',
        content:
          'TanStack Start は、TanStack Router の上に構築されたフルスタック React フレームワークです。型安全なルーティング、SSR（サーバーサイドレンダリング）、Server Functions、ストリーミングなど、本番アプリに必要な機能を提供します。\n\nNext.js や Remix と同じ「フルスタックフレームワーク」のカテゴリですが、ルーティングの型安全性と TanStack エコシステムとの統合が特徴です。',
      },
      {
        heading: 'TanStack Router との関係',
        content:
          'TanStack Start のルーティングは 100% TanStack Router です。ルートツリー、URL パラメータ、検索パラメータ、Loader、Link — これらはすべて Router の機能です。\n\nStart が追加するのは「サーバーレイヤー」と「ビルドレイヤー」。つまり Router だけではできない SSR、Server Functions、デプロイ設定を担います。',
        tip: 'デモで Next.js と TanStack Start の違いを確認してみてください。',
      },
      {
        heading: '向いているプロジェクト',
        content:
          '向いている：型安全を重視するアプリ、TanStack Query を使っているプロジェクト、Vite ベースの開発を好むチーム、複数のホスティング先にデプロイしたい場合\n\nReact と TypeScript の基礎があるとスムーズに学べます。',
      },
    ],
  },
  {
    id: 'setup',
    title: 'プロジェクトの作り方',
    description: 'TanStack Start プロジェクトの作成とファイル構造を学びます',
    sections: [
      {
        heading: 'プロジェクトを作る',
        content:
          '公式 CLI でプロジェクトを作成します。Vite がビルドツールとして使われ、TypeScript がデフォルトで含まれます。',
        code: `npm create @tanstack/start@latest my-app

cd my-app
npm run dev`,
      },
      {
        heading: 'フォルダ構成',
        content:
          'routes/ — ファイルベースのルート定義\napp/ — アプリのエントリポイント\nvite.config.ts — Vite + Start プラグインの設定',
        code: `my-app/
├── src/
│   ├── routes/
│   │   ├── __root.tsx      ← ルートレイアウト
│   │   ├── index.tsx       ← トップページ (/)
│   │   └── about.tsx       ← /about
│   ├── router.tsx
│   └── routeTree.gen.ts    ← 自動生成
├── vite.config.ts
└── package.json`,
        tip: 'npm run dev で開発サーバーが起動します。',
      },
    ],
  },
  {
    id: 'routing',
    title: 'ルーティング',
    description: 'TanStack Router のファイルベースルーティングを学びます',
    sections: [
      {
        heading: 'createFileRoute',
        content:
          '各ルートファイルで createFileRoute を使ってルートを定義します。パスはファイル名から自動的に推論され、TypeScript の型も生成されます。',
        code: `// src/routes/about.tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return <h1>About</h1>
}`,
      },
      {
        heading: '動的ルートとネスト',
        content:
          'ファイル名の $ プレフィックスで動的パラメータを定義します。フォルダ構造でネストしたルートも作れます。',
        code: `routes/
├── index.tsx           →  /
├── about.tsx           →  /about
├── posts/
│   ├── index.tsx       →  /posts
│   └── $postId.tsx     →  /posts/123`,
        tip: 'デモでルートと URL の対応を確認してください。',
      },
      {
        heading: 'Link とナビゲーション',
        content:
          '@tanstack/react-router の Link を使います。href の型チェックが効くので、存在しないルートへのリンクはコンパイルエラーになります。',
        code: `import { Link } from '@tanstack/react-router'

<Link to="/about">About</Link>
<Link to="/posts/$postId" params={{ postId: '123' }}>
  記事を読む
</Link>`,
      },
    ],
  },
  {
    id: 'loaders',
    title: 'Loader とデータ取得',
    description: 'ルートでデータを取得する Loader を学びます',
    sections: [
      {
        heading: 'Loader とは？',
        content:
          'Loader はルートが表示される前にデータを取得する関数です。サーバーとクライアントの両方で実行でき、取得したデータはルートコンポーネントに渡されます。',
        code: `export const Route = createFileRoute('/posts')({
  loader: async () => {
    const res = await fetch('https://api.example.com/posts')
    return res.json()
  },
  component: PostsPage,
})

function PostsPage() {
  const posts = Route.useLoaderData()
  return (
    <ul>
      {posts.map(p => <li key={p.id}>{p.title}</li>)}
    </ul>
  )
}`,
      },
      {
        heading: 'beforeLoad とコンテキスト',
        content:
          'beforeLoad は Loader の前に実行され、認証チェックやリダイレクトに使います。取得したデータは context として子ルートに渡せます。',
        code: `export const Route = createFileRoute('/dashboard')({
  beforeLoad: async ({ context }) => {
    if (!context.user) {
      throw redirect({ to: '/login' })
    }
  },
  loader: async () => fetchDashboardData(),
  component: Dashboard,
})`,
        tip: 'デモで Loader のデータ取得フローを体験してください。',
      },
    ],
  },
  {
    id: 'ssr',
    title: 'SSR と Selective SSR',
    description: 'サーバーサイドレンダリングとルートごとの SSR 設定を学びます',
    sections: [
      {
        heading: 'フルドキュメント SSR',
        content:
          'TanStack Start はデフォルトで SSR をサポートします。初回アクセス時にサーバーで HTML を生成し、クライアントでハイドレーション（再活性化）します。SEO と初期表示速度が向上します。',
        code: `// デフォルト: ssr: true
// サーバーで Loader 実行 → HTML 生成 → クライアントでハイドレート`,
      },
      {
        heading: 'Selective SSR',
        content:
          'ルートごとに SSR の挙動を制御できます。3つのモードがあります：\n\n• ssr: true — サーバーで Loader + コンポーネントをレンダリング（デフォルト）\n• ssr: "data-only" — Loader だけサーバー、UI はクライアントで描画\n• ssr: false — 完全にクライアントのみ（SPA モード）',
        code: `export const Route = createFileRoute('/admin')({
  ssr: false,  // ブラウザ API を使う管理画面
  component: AdminPage,
})

export const Route = createFileRoute('/posts')({
  ssr: 'data-only',  // データはサーバー、UI はクライアント
  loader: () => fetchPosts(),
  component: PostsPage,
})`,
        tip: 'デモで3つの SSR モードの違いを比較してください。',
      },
      {
        heading: 'ストリーミング SSR',
        content:
          'Suspense と組み合わせて、準備ができた部分から順に HTML をストリーミング送信できます。ユーザーはページ全体の読み込みを待たずにコンテンツを見始められます。',
      },
    ],
  },
  {
    id: 'server-functions',
    title: 'Server Functions',
    description: '型安全なサーバー関数を学びます',
    sections: [
      {
        heading: 'createServerFn',
        content:
          'Server Functions はクライアントからサーバーの関数を型安全に呼び出す RPC です。API ルートを別途書かなくても、関数を定義するだけでサーバー側の処理を呼べます。',
        code: `import { createServerFn } from '@tanstack/react-start'

const getUser = createServerFn({ method: 'GET' })
  .validator((id: string) => id)
  .handler(async ({ data: id }) => {
    return db.user.findUnique({ where: { id } })
  })

// クライアントから呼び出し
const user = await getUser({ data: userId })`,
      },
      {
        heading: 'フォーム送信との連携',
        content:
          'POST メソッドの Server Function でフォームデータを処理できます。バリデーション、データベースへの保存、リダイレクトまで1つの関数で完結します。',
        code: `const createPost = createServerFn({ method: 'POST' })
  .validator((data: { title: string; body: string }) => data)
  .handler(async ({ data }) => {
    const post = await db.post.create({ data })
    return post
  })`,
        tip: 'デモで Server Function の呼び出しフローを確認してください。',
      },
    ],
  },
  {
    id: 'api-routes',
    title: 'Server Routes',
    description: '外部向け API エンドポイントを作る方法を学びます',
    sections: [
      {
        heading: 'Server Routes とは？',
        content:
          'Server Functions はアプリ内部の RPC ですが、Server Routes は外部（Webhook、サードパーティ）から呼ばれる HTTP エンドポイントです。REST API や Webhook 受信に使います。',
        code: `// src/routes/api/webhook.ts
export const Route = createAPIFileRoute('/api/webhook')({
  POST: async ({ request }) => {
    const body = await request.json()
    await processWebhook(body)
    return json({ ok: true })
  },
})`,
      },
      {
        heading: 'Server Functions vs Server Routes',
        content:
          'Server Functions：アプリ内のコンポーネントから呼ぶ、型安全、RPC スタイル\nServer Routes：外部サービスから呼ぶ、REST/Webhook、標準 HTTP\n\n用途に応じて使い分けます。アプリ内のデータ操作は Server Functions、外部連携は Server Routes が基本です。',
        tip: 'デモで API のリクエストフローを確認してください。',
      },
    ],
  },
  {
    id: 'middleware',
    title: 'ミドルウェア',
    description: '認証・ログ・コンテキスト注入のミドルウェアを学びます',
    sections: [
      {
        heading: 'ミドルウェアの役割',
        content:
          'ミドルウェアはリクエストの前後で共通処理を実行します。認証チェック、ログ出力、ユーザー情報の注入、レート制限などに使います。',
        code: `import { createMiddleware } from '@tanstack/react-start'

const authMiddleware = createMiddleware({ type: 'function' })
  .server(async ({ next, context }) => {
    const session = await getSession()
    if (!session) throw new Error('Unauthorized')
    return next({ context: { ...context, user: session.user } })
  })`,
      },
      {
        heading: 'ルートへの適用',
        content:
          'ミドルウェアはルートや Server Function に適用できます。beforeLoad と組み合わせて、認証が必要なページを保護するのが一般的なパターンです。',
        code: `export const Route = createFileRoute('/settings')({
  beforeLoad: ({ context }) => {
    if (!context.user) throw redirect({ to: '/login' })
  },
  component: SettingsPage,
})`,
        tip: '認証 → Loader → コンポーネントの順で処理が流れます。',
      },
    ],
  },
  {
    id: 'deployment',
    title: 'デプロイ',
    description: '本番環境へのデプロイ方法を学びます',
    sections: [
      {
        heading: 'ビルドとデプロイ',
        content:
          'TanStack Start は Vite（または Rsbuild）でビルドし、Nitro を使って様々なホスティング先にデプロイできます。Vercel、Netlify、Cloudflare Workers、Node.js サーバーなどに対応しています。',
        code: `# 本番ビルド
npm run build

# プレビュー
npm run start`,
      },
      {
        heading: 'ホスティングの選択',
        content:
          'Vercel / Netlify：git push で自動デプロイ、設定が簡単\nCloudflare Workers：エッジで高速、グローバル配信\n自前サーバー：Node.js で npm run start\n\nルートの書き方は変わりません。変わるのはデプロイ設定だけです。',
        tip: '「ルートはそのまま、出力先を変える」が TanStack Start の設計思想です。',
      },
    ],
  },
  {
    id: 'next-steps',
    title: '次のステップ',
    description: 'TanStack Start の学習を踏まえて、次に何を学ぶかを確認します',
    sections: [
      {
        heading: 'TanStack エコシステム',
        content:
          'TanStack Query — サーバー状態の管理（キャッシュ、再取得）\nTanStack Table — 高機能なテーブル UI\nTanStack Form — 型安全なフォーム管理\n\nStart と組み合わせると、フルスタック + データ管理が TanStack 一本で揃います。',
      },
      {
        heading: '学習の道筋',
        content:
          '① React → ② TypeScript → ③ TanStack Router（単体）→ ④ TanStack Start（今ここ）→ ⑤ TanStack Query\n\n実際にブログやダッシュボードを作ってデプロイしてみましょう！',
        tip: 'おめでとうございます！TanStack Start の基礎をすべて学びました 🎉',
      },
    ],
  },
]
