import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: '「SEO」について、正しい説明はどれですか？',
    options: [
      'SEO（Search Engine Optimization）は、検索エンジン（Google 等）での表示順位を向上させ、オーガニック（自然）検索からの流入を増やす施策です。',
      'title は検索結果のリンクテキスト、description はスニペット（説明文）に使われます。',
      'Schema.org の語彙でページの内容を機械可読な形式で記述します。',
      '<script type="application/ld+json">',
    ],
    correctIndex: 0,
    explanation: 'SEO（Search Engine Optimization）は、検索エンジン（Google 等）での表示順位を向上させ、オーガニック（自然）検索からの流入を増やす施策です。',
  },
  {
    id: 'metadata',
    question: '「メタデータ」について、正しい説明はどれですか？',
    options: [
      'title は検索結果のリンクテキスト、description はスニペット（説明文）に使われます。',
      '<script type="application/ld+json">',
      'Google は200以上のランキング要因を考慮しますが、コンテンツの質、技術的な健全性、ユーザー体験が三大要素です。',
      'SEO（Search Engine Optimization）は、検索エンジン（Google 等）での表示順位を向上させ、オーガニック（自然）検索からの流入を増やす施策です。',
    ],
    correctIndex: 0,
    explanation: 'title は検索結果のリンクテキスト、description はスニペット（説明文）に使われます。',
  },
  {
    id: 'structured-data',
    question: '「構造化データ」について、正しい説明はどれですか？',
    options: [
      'SEO（Search Engine Optimization）は、検索エンジン（Google 等）での表示順位を向上させ、オーガニック（自然）検索からの流入を増やす施策です。',
      'title は検索結果のリンクテキスト、description はスニペット（説明文）に使われます。',
      'Google は200以上のランキング要因を考慮しますが、コンテンツの質、技術的な健全性、ユーザー体験が三大要素です。',
      'Schema.org の語彙でページの内容を機械可読な形式で記述します。',
    ],
    correctIndex: 3,
    explanation: 'Schema.org の語彙でページの内容を機械可読な形式で記述します。',
  },
  {
    id: 'performance',
    question: '「Core Web Vitals」について、正しい説明はどれですか？',
    options: [
      'LCP（Largest Contentful Paint）— 最大コンテンツの表示速度。',
      'title は検索結果のリンクテキスト、description はスニペット（説明文）に使われます。',
      'Google は200以上のランキング要因を考慮しますが、コンテンツの質、技術的な健全性、ユーザー体験が三大要素です。',
      'SEO（Search Engine Optimization）は、検索エンジン（Google 等）での表示順位を向上させ、オーガニック（自然）検索からの流入を増やす施策です。',
    ],
    correctIndex: 0,
    explanation: 'LCP（Largest Contentful Paint）— 最大コンテンツの表示速度。',
  },
  {
    id: 'ssr-seo',
    question: '「SSR/SSG と SEO」について、正しい説明はどれですか？',
    options: [
      'SEO（Search Engine Optimization）は、検索エンジン（Google 等）での表示順位を向上させ、オーガニック（自然）検索からの流入を増やす施策です。',
      'Google は200以上のランキング要因を考慮しますが、コンテンツの質、技術的な健全性、ユーザー体験が三大要素です。',
      'title は検索結果のリンクテキスト、description はスニペット（説明文）に使われます。',
      'クライアントサイドレンダリング（CSR）のみの SPA は、初回 HTML が空の <div id="root"> だけです。',
    ],
    correctIndex: 3,
    explanation: 'クライアントサイドレンダリング（CSR）のみの SPA は、初回 HTML が空の <div id="root"> だけです。',
  },
  {
    id: 'sitemap',
    question: '「サイトマップと robots.txt」について、正しい説明はどれですか？',
    options: [
      'title は検索結果のリンクテキスト、description はスニペット（説明文）に使われます。',
      'サイト内の全 URL をリストし、クローラーに発見を促します。',
      'SEO（Search Engine Optimization）は、検索エンジン（Google 等）での表示順位を向上させ、オーガニック（自然）検索からの流入を増やす施策です。',
      'Google は200以上のランキング要因を考慮しますが、コンテンツの質、技術的な健全性、ユーザー体験が三大要素です。',
    ],
    correctIndex: 1,
    explanation: 'サイト内の全 URL をリストし、クローラーに発見を促します。',
  },
  {
    id: 'semantic-html',
    question: '「セマンティック HTML」について、正しい説明はどれですか？',
    options: [
      'SEO（Search Engine Optimization）は、検索エンジン（Google 等）での表示順位を向上させ、オーガニック（自然）検索からの流入を増やす施策です。',
      'h1 はページに1つだけ。h2 → h3 の順序を守り、見出しを飛ばさない（h1 の次に h3 は NG）。',
      'Google は200以上のランキング要因を考慮しますが、コンテンツの質、技術的な健全性、ユーザー体験が三大要素です。',
      'title は検索結果のリンクテキスト、description はスニペット（説明文）に使われます。',
    ],
    correctIndex: 1,
    explanation: 'h1 はページに1つだけ。h2 → h3 の順序を守り、見出しを飛ばさない（h1 の次に h3 は NG）。',
  },
  {
    id: 'canonical',
    question: '「canonical URL と重複コンテンツ」について、正しい説明はどれですか？',
    options: [
      'title は検索結果のリンクテキスト、description はスニペット（説明文）に使われます。',
      'Google は200以上のランキング要因を考慮しますが、コンテンツの質、技術的な健全性、ユーザー体験が三大要素です。',
      'SEO（Search Engine Optimization）は、検索エンジン（Google 等）での表示順位を向上させ、オーガニック（自然）検索からの流入を増やす施策です。',
      '同じコンテンツが複数 URL でアクセス可能だと、検索エンジンがどれをインデックスすべきか迷い、ランキングが分散します。',
    ],
    correctIndex: 3,
    explanation: '同じコンテンツが複数 URL でアクセス可能だと、検索エンジンがどれをインデックスすべきか迷い、ランキングが分散します。',
  },
  {
    id: 'tools',
    question: '「SEO ツール」について、正しい説明はどれですか？',
    options: [
      'SEO（Search Engine Optimization）は、検索エンジン（Google 等）での表示順位を向上させ、オーガニック（自然）検索からの流入を増やす施策です。',
      'インデックス状況、検索クエリ、クリック数、クロールエラーを確認できます。',
      'title は検索結果のリンクテキスト、description はスニペット（説明文）に使われます。',
      'Google は200以上のランキング要因を考慮しますが、コンテンツの質、技術的な健全性、ユーザー体験が三大要素です。',
    ],
    correctIndex: 1,
    explanation: 'インデックス状況、検索クエリ、クリック数、クロールエラーを確認できます。',
  },
  {
    id: 'next-steps',
    question: '「次のステップ」について、正しい説明はどれですか？',
    options: [
      '① i18n 入門 — 多言語 SEO ② CSSアニメーション — CLS 対策 ③ HTTP 入門 — キャッシュと SEO ④ アクセシビリティ — SEO との相乗効果',
      'title は検索結果のリンクテキスト、description はスニペット（説明文）に使われます。',
      'Google は200以上のランキング要因を考慮しますが、コンテンツの質、技術的な健全性、ユーザー体験が三大要素です。',
      'SEO（Search Engine Optimization）は、検索エンジン（Google 等）での表示順位を向上させ、オーガニック（自然）検索からの流入を増やす施策です。',
    ],
    correctIndex: 0,
    explanation: '① i18n 入門 — 多言語 SEO ② CSSアニメーション — CLS 対策 ③ HTTP 入門 — キャッシュと SEO ④ アクセシビリティ — SEO との相乗効果',
  },
]
