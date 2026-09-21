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
    title: 'Astro とは？',
    description: '高速な Web サイトを作る Astro の基本を学びます',
    sections: [
      {
        heading: 'Astro とは何か？',
        content:
          'Astro は、コンテンツ中心の Web サイト（ブログ、ドキュメント、ポートフォリオ、マーケティングページなど）を高速に作るためのフレームワークです。\n\nHTML・CSS・JavaScript の知識があれば始められ、React や Vue などの UI ライブラリとも組み合わせられます。',
      },
      {
        heading: 'なぜ Astro は速いの？',
        content:
          'Astro の核心は「アイランドアーキテクチャ」です。ページの大部分は静的な HTML として配信し、インタラクティブな部分だけを JavaScript で動かします。\n\nたとえばブログ記事ページなら、本文は HTML だけ。コメント欄や「いいねボタン」だけが JavaScript で動く——この考え方で、不要な JS を送らずページを軽く保てます。',
        tip: 'デモで「全部 JS」vs「アイランド方式」の違いを確認してみてください。',
      },
      {
        heading: 'Astro が向いているサイト',
        content:
          '向いている：ブログ、ドキュメント、ランディングページ、ポートフォリオ\n\nあまり向いていない：常に動きがあるアプリ（チャット、ダッシュボード、ゲーム）\n\nこういう動きの多いアプリは React の方が向いています。Astro と React は競合ではなく、用途が違います。',
      },
    ],
  },
  {
    id: 'setup',
    title: 'プロジェクトの作り方',
    description: 'Astro プロジェクトの作成とファイル構造を学びます',
    sections: [
      {
        heading: 'プロジェクトを作る',
        content:
          'ターミナルで次のコマンドを実行すると、Astro プロジェクトが作成されます。Node.js がインストールされている必要があります。',
        code: `# プロジェクト作成
npm create astro@latest my-site

# 開発サーバー起動
cd my-site
npm run dev`,
      },
      {
        heading: '主要なフォルダ構成',
        content:
          'src/pages/ — ページファイル。ここに置いたファイルが自動的に URL になる\nsrc/components/ — 再利用する部品（.astro ファイル）\nsrc/layouts/ — ページ共通のレイアウト\npublic/ — 画像など、そのまま配信するファイル\nastro.config.mjs — Astro の設定ファイル',
        code: `my-site/
├── src/
│   ├── pages/
│   │   └── index.astro    ← トップページ (/)
│   ├── components/
│   └── layouts/
├── public/
│       └── favicon.svg
└── astro.config.mjs`,
        tip: 'npm run dev を実行すると、通常 http://localhost:4321 でプレビューできます。',
      },
    ],
  },
  {
    id: 'pages',
    title: 'ページとルーティング',
    description: 'ファイルベースのルーティングを学びます',
    sections: [
      {
        heading: 'ファイル = URL',
        content:
          'Astro は「ファイルベースルーティング」を使います。src/pages/ にファイルを置くだけで、自動的に URL が決まります。ルーティングの設定ファイルは不要です。',
        code: `src/pages/index.astro      →  /
src/pages/about.astro        →  /about
src/pages/blog/index.astro   →  /blog
src/pages/blog/hello.astro   →  /blog/hello`,
      },
      {
        heading: '.astro ファイルの基本',
        content:
          '.astro ファイルは2つの部分に分かれます。\n\n--- の間（フロントマター）— JavaScript を書く場所。データ取得や変数の定義\nその下 — HTML テンプレート。ページの見た目を書く',
        code: `---
const title = "こんにちは、Astro！";
---

<html>
  <body>
    <h1>{title}</h1>
  </body>
</html>`,
        tip: 'フロントマターはサーバー側で実行され、ブラウザには送られません。',
      },
    ],
  },
  {
    id: 'components',
    title: 'コンポーネント',
    description: '再利用可能な .astro コンポーネントを学びます',
    sections: [
      {
        heading: 'コンポーネントとは？',
        content:
          'コンポーネントはページの「部品」です。ヘッダー、カード、ボタンなど、何度も使う UI を1つのファイルにまとめて再利用します。React のコンポーネントと似た考え方です。',
        code: `---
// src/components/Card.astro
const { title, description } = Astro.props;
---

<div class="card">
  <h2>{title}</h2>
  <p>{description}</p>
</div>`,
      },
      {
        heading: 'Props（プロパティ）',
        content:
          'コンポーネントにデータを渡すには Astro.props を使います。親から子へ情報を渡せます。',
        code: `---
// 使い方（ページや他のコンポーネント内）
import Card from '../components/Card.astro';
---

<Card title="記事1" description="これは記事の説明です" />
<Card title="記事2" description="2つ目の記事です" />`,
        tip: 'デモで同じ Card コンポーネントを3回使っている例を見てみてください。',
      },
    ],
  },
  {
    id: 'layouts',
    title: 'レイアウト',
    description: '全ページ共通の骨組みを作る方法を学びます',
    sections: [
      {
        heading: 'レイアウトコンポーネント',
        content:
          'ブログやサイトでは、全ページに共通するヘッダー・フッター・ナビゲーションがあります。これをレイアウトコンポーネントにまとめると、各ページは「中身」だけ書けます。',
        code: `---
// src/layouts/BaseLayout.astro
const { title } = Astro.props;
---

<html lang="ja">
  <head>
    <title>{title}</title>
  </head>
  <body>
    <header>サイト名</header>
    <main>
      <slot />  <!-- ここにページの内容が入る -->
    </main>
    <footer>© 2026</footer>
  </body>
</html>`,
      },
      {
        heading: 'slot（スロット）',
        content:
          '<slot /> は「ここに子の内容を入れてね」という穴のことです。レイアウトを使うページの HTML が、この slot の位置に挿入されます。',
        code: `---
// src/pages/about.astro
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="About">
  <h1>About ページ</h1>
  <p>この内容が slot に入ります。</p>
</BaseLayout>`,
      },
    ],
  },
  {
    id: 'content',
    title: 'Markdown コンテンツ',
    description: 'Markdown で記事を書く方法を学びます',
    sections: [
      {
        heading: 'Markdown ページ',
        content:
          'Astro では .md ファイルもページとして使えます。ブログ記事やドキュメントを Markdown で書くと、HTML に自動変換されます。',
        code: `---
// src/pages/blog/first-post.md
title: "はじめての投稿"
date: 2026-01-01
---

# はじめての投稿

これは **Markdown** で書いた記事です。`,
      },
      {
        heading: 'コンテンツコレクション',
        content:
          '記事が増えると、Content Collections を使って記事をまとめて管理できます。型安全に記事データを扱え、一覧ページも簡単に作れます。',
        code: `// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
  }),
});

export const collections = { blog };`,
        tip: 'ブログやドキュメントサイトを作るなら、Content Collections がおすすめです。',
      },
    ],
  },
  {
    id: 'styling',
    title: 'スタイリング',
    description: 'Astro で CSS を書く方法を学びます',
    sections: [
      {
        heading: 'コンポーネント内の CSS',
        content:
          'Astro コンポーネント内に <style> タグを書けます。この CSS は自動的にそのコンポーネントだけに適用されます（スコープ付き CSS）。他のコンポーネントに影響しません。',
        code: `---
// Card.astro
---

<div class="card">
  <h2>タイトル</h2>
</div>

<style>
  .card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 1rem;
  }
</style>`,
      },
      {
        heading: 'グローバル CSS',
        content:
          'サイト全体に適用する CSS は、レイアウトで import します。Tailwind CSS などのフレームワークも使えます。',
        code: `---
// BaseLayout.astro
import '../styles/global.css';
---`,
        tip: 'Astro は普通の CSS、Sass、Tailwind など、好きな方法でスタイルを書けます。',
      },
    ],
  },
  {
    id: 'islands',
    title: 'アイランド（インタラクティブ）',
    description: 'JavaScript を必要な部分だけ動かす方法を学びます',
    sections: [
      {
        heading: 'クライアントディレクティブ',
        content:
          'React や Vue のコンポーネントを Astro ページに埋め込むとき、「いつ JavaScript を読み込むか」を client: ディレクティブで指定します。',
        code: `---
import Counter from '../components/Counter.jsx';
---

<!-- ページ読み込み時に JS を実行 -->
<Counter client:load />

<!-- 画面に表示されたら実行（パフォーマンス重視） -->
<Counter client:visible />

<!-- ブラウザが暇なときに実行 -->
<Counter client:idle />`,
      },
      {
        heading: 'アイランドの考え方',
        content:
          'ページは静的な HTML。カウンターやフォームなど、動きが必要な部分だけが「アイランド」として JavaScript で動きます。海（HTML）の中に島（JS）が浮かぶイメージです。\n\nこれにより、ブログ記事のようなページは JS ほぼゼロで配信でき、必要な部分だけインタラクティブにできます。',
        tip: 'デモでアイランド方式のページ構成を確認してください。',
      },
    ],
  },
  {
    id: 'build',
    title: 'ビルドとデプロイ',
    description: 'サイトを公開する方法を学びます',
    sections: [
      {
        heading: 'ビルドコマンド',
        content:
          '開発が終わったら npm run build で本番用のファイルを生成します。dist/ フォルダに静的ファイルが出力されます。',
        code: `# 本番ビルド
npm run build

# ビルド結果をローカルで確認
npm run preview`,
      },
      {
        heading: 'デプロイ先',
        content:
          'Astro サイトは多くのホスティングサービスにデプロイできます。\n\n・Vercel / Netlify — git push するだけで自動デプロイ\n・Cloudflare Pages — 高速 CDN\n・GitHub Pages — 無料で静的サイト公開\n\n静的サイト（SSG）として出力されるので、サーバー不要で配信できます。',
        tip: '多くのサービスで無料プランがあり、個人ブログなら無料で始められます。',
      },
    ],
  },
  {
    id: 'next-steps',
    title: '次のステップ',
    description: 'Astro の学習を踏まえて、次に何を学ぶかを確認します',
    sections: [
      {
        heading: 'Astro と React の使い分け',
        content:
          'Astro — コンテンツ中心のサイト（ブログ、ドキュメント、LP）。速さ重視\nReact — インタラクティブなアプリ（SNS、管理画面、ツール）。動き重視\n\n実は Astro の中で React コンポーネントを使えます。ブログ（Astro）+ コメント機能（React）のような組み合わせが可能です。',
      },
      {
        heading: '学習の道筋',
        content:
          '① HTML — 骨組み ✓\n② CSS — 見た目 ✓\n③ React — インタラクティブ UI ✓\n④ Astro（今ここ）— 高速なサイトを構築 ✓\n\n次は実際に Astro プロジェクトを作って、自分のブログやポートフォリオを公開してみましょう！',
        tip: 'おめでとうございます！Astro の基礎をすべて学びました 🎉',
      },
    ],
  },
]
