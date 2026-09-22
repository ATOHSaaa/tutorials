import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: '「Astro」について、正しい説明はどれですか？',
    options: [
      'src/pages/index.astro → /',
      'ターミナルで次のコマンドを実行すると、Astro プロジェクトが作成されます。',
      'Astro は、コンテンツ中心の Web サイト（ブログ、ドキュメント、ポートフォリオ、マーケティングページなど）を高速に作るためのフレームワークです。',
      'npm create astro@latest my-site',
    ],
    correctIndex: 2,
    explanation: 'Astro は、コンテンツ中心の Web サイト（ブログ、ドキュメント、ポートフォリオ、マーケティングページなど）を高速に作るためのフレームワークです。',
  },
  {
    id: 'setup',
    question: '「プロジェクトの作り方」について、正しい説明はどれですか？',
    options: [
      'Astro は、コンテンツ中心の Web サイト（ブログ、ドキュメント、ポートフォリオ、マーケティングページなど）を高速に作るためのフレームワークです。',
      'HTML・CSS・JavaScript の知識があれば始められ、React や Vue などの UI ライブラリとも組み合わせられます。',
      'src/pages/index.astro → /',
      'ターミナルで次のコマンドを実行すると、Astro プロジェクトが作成されます。',
    ],
    correctIndex: 3,
    explanation: 'ターミナルで次のコマンドを実行すると、Astro プロジェクトが作成されます。',
  },
  {
    id: 'pages',
    question: '「ページとルーティング」について、正しい説明はどれですか？',
    options: [
      'npm create astro@latest my-site',
      'Astro は「ファイルベースルーティング」を使います。',
      'Astro は、コンテンツ中心の Web サイト（ブログ、ドキュメント、ポートフォリオ、マーケティングページなど）を高速に作るためのフレームワークです。',
      'HTML・CSS・JavaScript の知識があれば始められ、React や Vue などの UI ライブラリとも組み合わせられます。',
    ],
    correctIndex: 1,
    explanation: 'Astro は「ファイルベースルーティング」を使います。',
  },
  {
    id: 'components',
    question: '「コンポーネント」について、正しい説明はどれですか？',
    options: [
      'Astro は、コンテンツ中心の Web サイト（ブログ、ドキュメント、ポートフォリオ、マーケティングページなど）を高速に作るためのフレームワークです。',
      'HTML・CSS・JavaScript の知識があれば始められ、React や Vue などの UI ライブラリとも組み合わせられます。',
      'コンポーネントはページの「部品」です。',
      'npm create astro@latest my-site',
    ],
    correctIndex: 2,
    explanation: 'コンポーネントはページの「部品」です。',
  },
  {
    id: 'layouts',
    question: '「レイアウト」について、正しい説明はどれですか？',
    options: [
      'HTML・CSS・JavaScript の知識があれば始められ、React や Vue などの UI ライブラリとも組み合わせられます。',
      'Astro は、コンテンツ中心の Web サイト（ブログ、ドキュメント、ポートフォリオ、マーケティングページなど）を高速に作るためのフレームワークです。',
      'ブログやサイトでは、全ページに共通するヘッダー・フッター・ナビゲーションがあります。',
      'npm create astro@latest my-site',
    ],
    correctIndex: 2,
    explanation: 'ブログやサイトでは、全ページに共通するヘッダー・フッター・ナビゲーションがあります。',
  },
  {
    id: 'content',
    question: '「Markdown コンテンツ」について、正しい説明はどれですか？',
    options: [
      'Astro では .md ファイルもページとして使えます。',
      'Astro は、コンテンツ中心の Web サイト（ブログ、ドキュメント、ポートフォリオ、マーケティングページなど）を高速に作るためのフレームワークです。',
      'npm create astro@latest my-site',
      'HTML・CSS・JavaScript の知識があれば始められ、React や Vue などの UI ライブラリとも組み合わせられます。',
    ],
    correctIndex: 0,
    explanation: 'Astro では .md ファイルもページとして使えます。',
  },
  {
    id: 'styling',
    question: '「スタイリング」について、正しい説明はどれですか？',
    options: [
      'npm create astro@latest my-site',
      'HTML・CSS・JavaScript の知識があれば始められ、React や Vue などの UI ライブラリとも組み合わせられます。',
      'Astro コンポーネント内に <style> タグを書けます。',
      'Astro は、コンテンツ中心の Web サイト（ブログ、ドキュメント、ポートフォリオ、マーケティングページなど）を高速に作るためのフレームワークです。',
    ],
    correctIndex: 2,
    explanation: 'Astro コンポーネント内に <style> タグを書けます。',
  },
  {
    id: 'islands',
    question: '「アイランド（インタラクティブ）」について、正しい説明はどれですか？',
    options: [
      'React や Vue のコンポーネントを Astro ページに埋め込むとき、「いつ JavaScript を読み込むか」を client: ディレクティブで指定します。',
      'HTML・CSS・JavaScript の知識があれば始められ、React や Vue などの UI ライブラリとも組み合わせられます。',
      'npm create astro@latest my-site',
      'Astro は、コンテンツ中心の Web サイト（ブログ、ドキュメント、ポートフォリオ、マーケティングページなど）を高速に作るためのフレームワークです。',
    ],
    correctIndex: 0,
    explanation: 'React や Vue のコンポーネントを Astro ページに埋め込むとき、「いつ JavaScript を読み込むか」を client: ディレクティブで指定します。',
  },
  {
    id: 'build',
    question: '「ビルドとデプロイ」について、正しい説明はどれですか？',
    options: [
      'HTML・CSS・JavaScript の知識があれば始められ、React や Vue などの UI ライブラリとも組み合わせられます。',
      'Astro は、コンテンツ中心の Web サイト（ブログ、ドキュメント、ポートフォリオ、マーケティングページなど）を高速に作るためのフレームワークです。',
      'npm create astro@latest my-site',
      '開発が終わったら npm run build で本番用のファイルを生成します。',
    ],
    correctIndex: 3,
    explanation: '開発が終わったら npm run build で本番用のファイルを生成します。',
  },
  {
    id: 'next-steps',
    question: '「次のステップ」について、正しい説明はどれですか？',
    options: [
      'npm create astro@latest my-site',
      'HTML・CSS・JavaScript の知識があれば始められ、React や Vue などの UI ライブラリとも組み合わせられます。',
      'Astro は、コンテンツ中心の Web サイト（ブログ、ドキュメント、ポートフォリオ、マーケティングページなど）を高速に作るためのフレームワークです。',
      'Astro — コンテンツ中心のサイト（ブログ、ドキュメント、LP）。',
    ],
    correctIndex: 3,
    explanation: 'Astro — コンテンツ中心のサイト（ブログ、ドキュメント、LP）。',
  },
]
