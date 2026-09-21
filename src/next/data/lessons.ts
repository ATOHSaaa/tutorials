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
    title: 'Next.js とは？',
    description: 'React ベースのフルスタックフレームワークの基本を学びます',
    sections: [
      {
        heading: 'Next.js とは何か？',
        content:
          'Next.js は、React の上に構築されたフレームワークです。React だけでは「画面の部品を作る」ことに集中しますが、Next.js はルーティング、データ取得、SEO、デプロイなど、Web アプリに必要な機能をまとめて提供します。\n\nVercel が開発・メンテナンスしており、世界中で広く使われています。',
      },
      {
        heading: 'React との関係',
        content:
          'React = UI ライブラリ（部品を作る）\nNext.js = React + ルーティング + サーバー機能 + 最適化\n\nNext.js を使うには React の知識が必要です。コンポーネント、Props、State、Hooks はそのまま使えます。Next.js が追加するのは「ページの構造」「データの取得方法」「表示の最適化」です。',
        tip: 'デモで React 単体と Next.js の違いを確認してみてください。',
      },
      {
        heading: 'Next.js が向いているプロジェクト',
        content:
          '向いている：Web アプリ、EC サイト、ブログ、管理画面、SaaS\n\nReact 単体より向いている場面：SEO が重要、サーバー側でデータ取得したい、ルーティングを簡単に設定したい、本番デプロイを楽にしたい',
      },
    ],
  },
  {
    id: 'setup',
    title: 'プロジェクトの作り方',
    description: 'Next.js プロジェクトの作成とファイル構造を学びます',
    sections: [
      {
        heading: 'プロジェクトを作る',
        content:
          'create-next-app コマンドで、設定済みのプロジェクトが一瞬で作れます。TypeScript、Tailwind CSS、App Router がデフォルトで含まれます。',
        code: `npx create-next-app@latest my-app

# 開発サーバー起動
cd my-app
npm run dev`,
      },
      {
        heading: 'App Router のフォルダ構成',
        content:
          'app/ — ページとレイアウト（App Router）\npublic/ — 画像など静的ファイル\nnext.config.ts — Next.js の設定\npackage.json — 依存パッケージ',
        code: `my-app/
├── app/
│   ├── layout.tsx      ← 全ページ共通レイアウト
│   ├── page.tsx        ← トップページ (/)
│   └── about/
│       └── page.tsx    ← /about ページ
├── public/
└── next.config.ts`,
        tip: 'npm run dev で http://localhost:3000 が開きます。',
      },
    ],
  },
  {
    id: 'routing',
    title: 'ルーティング',
    description: 'App Router のファイルベースルーティングを学びます',
    sections: [
      {
        heading: 'ファイル = URL',
        content:
          'app/ フォルダ内のファイル構造が URL になります。page.tsx がそのルートのページ、layout.tsx がレイアウトです。',
        code: `app/page.tsx           →  /
app/about/page.tsx       →  /about
app/blog/page.tsx        →  /blog
app/blog/[id]/page.tsx   →  /blog/123（動的ルート）`,
      },
      {
        heading: 'page.tsx の基本',
        content:
          'page.tsx は React コンポーネントを export default します。サーバーコンポーネントがデフォルトなので、async 関数にしてデータ取得もできます。',
        code: `// app/about/page.tsx
export default function AboutPage() {
  return (
    <main>
      <h1>About</h1>
      <p>このサイトについて</p>
    </main>
  );
}`,
      },
    ],
  },
  {
    id: 'layouts',
    title: 'レイアウト',
    description: '全ページ共通の骨組みを作る方法を学びます',
    sections: [
      {
        heading: 'layout.tsx',
        content:
          'layout.tsx はページをまたいで共通の UI を定義します。ヘッダー、フッター、ナビゲーションなど。ページが切り替わってもレイアウトは維持されます。',
        code: `// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <header>サイト名</header>
        {children}
        <footer>© 2026</footer>
      </body>
    </html>
  );
}`,
      },
      {
        heading: 'ネストしたレイアウト',
        content:
          'フォルダごとに layout.tsx を置けます。ブログセクションだけ別レイアウトにするなど、柔軟に構成できます。',
        code: `app/
├── layout.tsx          ← 全ページ共通
└── blog/
    ├── layout.tsx      ← ブログだけのレイアウト
    └── page.tsx`,
        tip: 'デモでレイアウトの入れ子構造を確認してください。',
      },
    ],
  },
  {
    id: 'components',
    title: 'コンポーネント',
    description: 'Server / Client コンポーネントの違いを学びます',
    sections: [
      {
        heading: 'Server Components（デフォルト）',
        content:
          'App Router では、コンポーネントはデフォルトでサーバー上で実行されます。データベースに直接アクセスでき、JavaScript をブラウザに送らないので高速です。',
        code: `// Server Component（デフォルト）
async function UserList() {
  const users = await fetchUsers(); // サーバーで実行
  return (
    <ul>
      {users.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}`,
      },
      {
        heading: 'Client Components',
        content:
          'useState、useEffect、onClick などインタラクティブな機能が必要なときは、ファイルの先頭に "use client" を書きます。',
        code: `"use client";

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(c => c + 1)}>
      {count}
    </button>
  );
}`,
        tip: '基本は Server、動きが必要な部分だけ Client にするのが Next.js の鉄則です。',
      },
    ],
  },
  {
    id: 'data-fetching',
    title: 'データ取得',
    description: 'Server Component でデータを取得する方法を学びます',
    sections: [
      {
        heading: 'Server Component で fetch',
        content:
          'Server Component 内で async/await を使ってデータを取得できます。API やデータベースに直接アクセスし、結果を HTML として返します。',
        code: `// app/posts/page.tsx
async function getPosts() {
  const res = await fetch("https://api.example.com/posts");
  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}`,
      },
      {
        heading: 'キャッシュと再検証',
        content:
          'Next.js は fetch の結果を自動的にキャッシュします。revalidate オプションで「何秒ごとに更新するか」を指定できます。',
        code: `// 60秒ごとに再取得
const res = await fetch(url, {
  next: { revalidate: 60 }
});`,
        tip: 'デモでデータ取得の流れを確認してください。',
      },
    ],
  },
  {
    id: 'navigation',
    title: 'ナビゲーション',
    description: 'ページ間を移動する Link と useRouter を学びます',
    sections: [
      {
        heading: 'Link コンポーネント',
        content:
          'next/link の Link を使うと、ページ遷移が高速になります。通常の <a> と違い、必要な部分だけを読み込む「クライアントサイドナビゲーション」が行われます。',
        code: `import Link from "next/link";

<Link href="/about">About</Link>
<Link href="/blog/123">記事を読む</Link>`,
      },
      {
        heading: 'useRouter（Client Component）',
        content:
          'プログラムからページ遷移したいときは useRouter を使います。フォーム送信後のリダイレクトなどで使います。',
        code: `"use client";
import { useRouter } from "next/navigation";

function LoginForm() {
  const router = useRouter();

  const handleSubmit = async () => {
    await login();
    router.push("/dashboard"); // 遷移
  };
}`,
      },
    ],
  },
  {
    id: 'styling',
    title: 'スタイリング',
    description: 'Next.js で CSS を適用する方法を学びます',
    sections: [
      {
        heading: 'CSS Modules',
        content:
          'Component.module.css というファイル名で、コンポーネント専用の CSS を書けます。クラス名が自動的にユニークになるので、他のコンポーネントと衝突しません。',
        code: `// Button.module.css
.button { background: blue; color: white; }

// Button.tsx
import styles from "./Button.module.css";
<button className={styles.button}>Click</button>`,
      },
      {
        heading: 'Tailwind CSS',
        content:
          'create-next-app で Tailwind を選ぶと、クラス名でスタイルを書けます。Next.js プロジェクトで最もよく使われているスタイリング方法です。',
        code: `<div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow">
  <h1 className="text-2xl font-bold">タイトル</h1>
</div>`,
        tip: 'グローバル CSS は app/globals.css に書きます。',
      },
    ],
  },
  {
    id: 'api',
    title: 'API（Route Handlers）',
    description: 'サーバー側の API エンドポイントを作る方法を学びます',
    sections: [
      {
        heading: 'Route Handlers',
        content:
          'app/api/ フォルダに route.ts を置くと、API エンドポイントが作れます。GET、POST など HTTP メソッドごとに関数を export します。',
        code: `// app/api/hello/route.ts
export async function GET() {
  return Response.json({ message: "Hello!" });
}

export async function POST(request: Request) {
  const body = await request.json();
  return Response.json({ received: body });
}`,
      },
      {
        heading: '使いどころ',
        content:
          'フォーム送信の処理、外部 API のプロキシ、認証、データベースへの書き込みなど、サーバー側で処理したいときに使います。フロントエンドとバックエンドを1つのプロジェクトで管理できるのが Next.js の強みです。',
        tip: 'デモで API の流れを確認してください。',
      },
    ],
  },
  {
    id: 'next-steps',
    title: '次のステップ',
    description: 'Next.js の学習を踏まえて、次に何を学ぶかを確認します',
    sections: [
      {
        heading: 'デプロイ',
        content:
          'Next.js アプリは Vercel に git push するだけでデプロイできます（Vercel は Next.js の開発元）。Netlify、Cloudflare、自前サーバーなどでも可能です。',
        code: `# 本番ビルド
npm run build
npm run start

# Vercel にデプロイ
# GitHub と連携して push するだけ`,
      },
      {
        heading: '学習の道筋',
        content:
          '① HTML → ② CSS → ③ JavaScript → ④ TypeScript → ⑤ React → ⑥ Next.js（今ここ）→ ⑦ Astro\n\nNext.js を学んだら、実際にブログやポートフォリオを作ってデプロイしてみましょう！',
        tip: 'おめでとうございます！Next.js の基礎をすべて学びました 🎉',
      },
    ],
  },
]
