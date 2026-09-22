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
    title: 'Tailwind とは？',
    description: 'ユーティリティファースト CSS の考え方を学びます',
    sections: [
      {
        heading: 'ユーティリティファーストとは？',
        content:
          'Tailwind CSS は「ユーティリティクラス」を組み合わせてデザインする CSS フレームワークです。`.btn-primary` のような独自クラスを CSS ファイルに書く代わりに、`p-4 bg-blue-500 rounded-lg` のような小さなクラスを HTML に直接書きます。',
      },
      {
        heading: '従来の CSS との違い',
        content:
          '従来: HTML に class="card" → CSS ファイルに .card { padding: 1rem; ... } を書く\n\nTailwind: HTML に class="p-4 bg-white shadow rounded-lg" と直接書く\n\nファイルを行き来せず、HTML を見ればスタイルがわかるのが利点です。',
        tip: 'デモでクラスを切り替えて見た目の変化を確認してください。',
      },
      {
        heading: 'いつ Tailwind を使う？',
        content:
          'プロトタイプの高速作成、デザインシステムの統一、React/Next.js との相性の良さで人気です。大規模プロジェクトでは @apply やコンポーネント化で整理します。',
      },
    ],
  },
  {
    id: 'setup',
    title: 'セットアップ',
    description: 'Vite や Next.js への導入方法を学びます',
    sections: [
      {
        heading: 'Vite + React',
        content:
          'Tailwind v4 では PostCSS プラグインで導入します。create コマンドで一発セットアップも可能です。',
        code: `npm create vite@latest my-app -- --template react-ts
cd my-app
npm install tailwindcss @tailwindcss/vite`,
      },
      {
        heading: 'Next.js',
        content:
          'Next.js 15 以降は Tailwind がテンプレートに含まれています。新規作成時に選択するだけで使えます。',
        code: `npx create-next-app@latest my-app
# Tailwind CSS を使いますか？ → Yes`,
        tip: 'デモでプロジェクト構成を確認してください。',
      },
      {
        heading: '設定ファイル',
        content:
          'tailwind.config.js でテーマの拡張（色、フォント、ブレークポイント）ができます。コンテンツパスにテンプレートファイルを指定し、未使用クラスを削除（purge）します。',
      },
    ],
  },
  {
    id: 'utility',
    title: 'ユーティリティクラス',
    description: 'クラス名の命名規則と基本を学びます',
    sections: [
      {
        heading: '命名規則',
        content:
          'Tailwind のクラス名は「プロパティ-値」の形式です。\n\n• p-4 → padding: 1rem\n• text-lg → font-size: large\n• bg-red-500 → background-color\n• flex → display: flex',
      },
      {
        heading: 'よく使うクラス',
        content:
          'レイアウト・余白・色・文字の基本セットを覚えると大部分の UI が作れます。',
        code: `<div class="flex items-center gap-4 p-6 bg-gray-100 rounded-xl">
  <img class="w-12 h-12 rounded-full" />
  <p class="text-lg font-bold text-gray-900">タイトル</p>
</div>`,
        tip: 'デモでクラスを組み合わせてカードを作ってみてください。',
      },
      {
        heading: '公式ドキュメント',
        content:
          'tailwindcss.com/docs に全クラスの一覧があります。覚えるより、必要なときに検索する使い方が現実的です。',
      },
    ],
  },
  {
    id: 'layout',
    title: 'レイアウト',
    description: 'Flexbox と Grid の Tailwind クラスを学びます',
    sections: [
      {
        heading: 'Flexbox',
        content:
          'flex、flex-col、items-center、justify-between、gap-4 など。ナビバー、カード内の横並び、中央揃えでよく使います。',
        code: `<nav class="flex items-center justify-between p-4">
  <span>Logo</span>
  <div class="flex gap-4">
    <a>Home</a>
    <a>About</a>
  </div>
</nav>`,
      },
      {
        heading: 'Grid',
        content:
          'grid、grid-cols-3、gap-6 でカード一覧やギャラリーを作れます。レスポンシブでは grid-cols-1 md:grid-cols-3 のようにブレークポイントを付けます。',
        code: `<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div class="p-4 bg-white rounded">カード1</div>
  <div class="p-4 bg-white rounded">カード2</div>
  <div class="p-4 bg-white rounded">カード3</div>
</div>`,
        tip: 'デモで Flex と Grid のレイアウトを比較してください。',
      },
      {
        heading: '使い分け',
        content:
          '1次元の並び → Flex。2次元の格子 → Grid。迷ったら Flex から始めて、格子状になったら Grid に切り替えるのがおすすめです。',
      },
    ],
  },
  {
    id: 'spacing',
    title: '余白とサイズ',
    description: 'padding、margin、width の指定を学びます',
    sections: [
      {
        heading: 'スペーシングスケール',
        content:
          'Tailwind は 4px 単位のスケールです。p-1 = 4px、p-2 = 8px、p-4 = 16px、p-8 = 32px。mt-4、mx-auto、px-6 など方向指定もできます。',
      },
      {
        heading: 'サイズ指定',
        content:
          'w-full、h-screen、max-w-md、min-h-0 など。パーセントや固定値、ビューポート単位が使えます。',
        code: `<div class="w-full max-w-2xl mx-auto p-8">
  <div class="h-48 bg-blue-100 rounded-lg"></div>
</div>`,
        tip: 'デモで padding と margin の違いを確認してください。',
      },
      {
        heading: 'space と gap',
        content:
          '子要素間の余白は gap（Flex/Grid）か space-x-4 / space-y-2 が便利。margin を個別に付けるより宣言的です。',
      },
    ],
  },
  {
    id: 'typography',
    title: '文字と色',
    description: 'フォント、色、テキストスタイルを学びます',
    sections: [
      {
        heading: 'タイポグラフィ',
        content:
          'text-sm / text-lg / text-2xl でサイズ、font-bold / font-medium で太さ、text-center で揃え、leading-relaxed で行間を指定します。',
        code: `<h1 class="text-3xl font-bold text-gray-900">見出し</h1>
<p class="text-base text-gray-600 leading-relaxed">本文テキスト</p>`,
      },
      {
        heading: 'カラーパレット',
        content:
          'bg-blue-500、text-red-600、border-gray-200 など。数字が大きいほど濃い（50 が最も薄い、900 が最も濃い）。ブランド色は tailwind.config でカスタム定義できます。',
        tip: 'デモで色とフォントサイズを変更してみてください。',
      },
      {
        heading: '透明度とグラデーション',
        content:
          'bg-blue-500/50 で 50% 透明度。bg-gradient-to-r from-blue-500 to-purple-500 でグラデーション背景が作れます。',
      },
    ],
  },
  {
    id: 'responsive',
    title: 'レスポンシブ',
    description: 'ブレークポイントで画面サイズに応じたデザインを学びます',
    sections: [
      {
        heading: 'ブレークポイント',
        content:
          'sm (640px)、md (768px)、lg (1024px)、xl (1280px)。プレフィックスを付けて「このサイズ以上で適用」します。',
        code: `<div class="text-sm md:text-base lg:text-lg">
  画面が大きくなると文字も大きくなる
</div>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  ...
</div>`,
      },
      {
        heading: 'モバイルファースト',
        content:
          'Tailwind はモバイルファーストです。プレフィックスなしのクラスがモバイル向け、md: 以降がタブレット・PC向けになります。',
        tip: 'デモで画面サイズを変えたときのクラス適用を確認してください。',
      },
      {
        heading: '非表示・表示の切り替え',
        content:
          'hidden md:block でモバイルでは非表示、md 以上で表示。md:hidden で逆の制御もできます。ナビのハンバーガーメニューでよく使います。',
      },
    ],
  },
  {
    id: 'states',
    title: '状態バリアント',
    description: 'hover、focus、active などの状態を学びます',
    sections: [
      {
        heading: 'インタラクション状態',
        content:
          'hover:bg-blue-600、focus:ring-2、active:scale-95 など。プレフィックスで「その状態のときだけ」スタイルを適用します。',
        code: `<button class="bg-blue-500 hover:bg-blue-600
  focus:outline-none focus:ring-2 focus:ring-blue-300
  active:scale-95 transition">
  クリック
</button>`,
      },
      {
        heading: 'disabled と group',
        content:
          'disabled:opacity-50 で無効化スタイル。group と group-hover: で親の hover に子が反応するパターンも便利です。',
        tip: 'デモで hover / focus の見た目を試してください。',
      },
      {
        heading: 'transition',
        content:
          'transition、duration-200、ease-in-out を付けると状態変化がスムーズになります。アニメーションの基本としてほぼ必須です。',
      },
    ],
  },
  {
    id: 'dark-mode',
    title: 'ダークモード',
    description: 'dark: プレフィックスでテーマ切り替えを学びます',
    sections: [
      {
        heading: 'dark: プレフィックス',
        content:
          'dark:bg-gray-900 dark:text-white のように、ダークモード時だけ適用するクラスを書けます。tailwind.config で darkMode: "class" または "media" を設定します。',
        code: `<div class="bg-white dark:bg-gray-900
  text-gray-900 dark:text-white">
  ライト/ダーク両対応
</div>`,
      },
      {
        heading: 'class 方式 vs media 方式',
        content:
          'media は OS の設定に追従。class は html に dark クラスを付けて手動切り替え（トグルボタン）が可能。アプリでは class 方式が一般的です。',
        tip: 'デモでダークモードの切り替えを体験してください。',
      },
      {
        heading: 'カラーの設計',
        content:
          'ライト用とダーク用で両方のクラスをペアで書くのが基本です。gray-100 / gray-800 のように同系色の明暗ペアを使うと統一感が出ます。',
      },
    ],
  },
  {
    id: 'next-steps',
    title: '次のステップ',
    description: 'Tailwind の学習を続けるためのヒント',
    sections: [
      {
        heading: 'さらに学ぶこと',
        content:
          '• @apply — 繰り返すクラスを CSS にまとめる\n• tailwind-merge — クラス名の競合を解決\n• shadcn/ui — Tailwind ベースの UI コンポーネント\n• Tailwind v4 の CSS-first 設定',
      },
      {
        heading: '学習の道筋',
        content:
          '① HTML → ② CSS → ③ Tailwind（今ここ）→ ④ React / Next.js で実際の UI を組み立てる',
        tip: 'おめでとうございます！Tailwind チュートリアルをすべて学びました 🎉',
      },
    ],
  },
]
