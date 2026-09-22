import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: 'Vite の開発サーバーが高速な主な理由はどれですか？',
    options: [
      'ブラウザのネイティブ ES Modules を活用している',
      '起動時に全ファイルをバンドルする',
      'PHP で動作している',
      'ネットワーク接続が不要である',
    ],
    correctIndex: 0,
    explanation: 'Vite は開発時にネイティブ ESM を使い、必要なモジュールだけを変換するため起動が速いです。',
  },
  {
    id: 'setup',
    question: 'Vite + React + TypeScript のプロジェクトを作るコマンドはどれですか？',
    options: [
      'npm create vite@latest my-app -- --template react-ts',
      'npx create-react-app my-app',
      'npm install vite',
      'vite init react',
    ],
    correctIndex: 0,
    explanation: 'create vite でテンプレートを選び、react-ts で TypeScript 付き React プロジェクトを作成します。',
  },
  {
    id: 'dev-server',
    question: 'Vite の開発サーバーでファイル保存時に画面が即更新される機能は？',
    options: [
      'HMR（Hot Module Replacement）',
      'SSR',
      'PWA',
      'Tree Shaking',
    ],
    correctIndex: 0,
    explanation: 'HMR は変更したモジュールだけを差し替え、ページ全体のリロードを避けます。',
  },
  {
    id: 'modules',
    question: 'Vite が開発時に活用するモジュール形式はどれですか？',
    options: [
      'ES Modules（import/export）',
      'CommonJS のみ',
      'AMD',
      'グローバル変数のみ',
    ],
    correctIndex: 0,
    explanation: 'Vite はブラウザが理解する ESM をそのまま使い、import されたファイルだけを処理します。',
  },
  {
    id: 'plugins',
    question: 'Vite で React を使うときに必要なプラグインはどれですか？',
    options: [
      '@vitejs/plugin-react',
      'vite-plugin-html',
      'rollup-plugin-babel',
      'webpack-react-loader',
    ],
    correctIndex: 0,
    explanation: '@vitejs/plugin-react が JSX の変換と Fast Refresh を提供します。',
  },
  {
    id: 'env',
    question: 'Vite で環境変数にアクセスする正しい書き方はどれですか？',
    options: [
      'import.meta.env.VITE_API_URL',
      'process.env.VITE_API_URL',
      'window.env.API_URL',
      'getenv("VITE_API_URL")',
    ],
    correctIndex: 0,
    explanation: 'Vite では import.meta.env で環境変数を参照します。クライアントに公開する変数は VITE_ プレフィックスが必要です。',
  },
  {
    id: 'assets',
    question: 'Vite で画像を import して使う主な理由はどれですか？',
    options: [
      'ビルド時に最適化され、URL が解決される',
      '画像が自動的に SVG に変換される',
      'CDN に自動アップロードされる',
      '画像の著作権が解除される',
    ],
    correctIndex: 0,
    explanation: 'import したアセットはビルド時に処理され、本番用のパスやハッシュ付きファイル名が付与されます。',
  },
  {
    id: 'build',
    question: 'Vite で本番用ビルドを実行するコマンドはどれですか？',
    options: [
      'npm run build（内部で vite build）',
      'vite dev --production',
      'npm run compile',
      'vite export',
    ],
    correctIndex: 0,
    explanation: 'vite build で dist/ に最適化された静的ファイルが出力されます。',
  },
  {
    id: 'config',
    question: 'Vite の設定ファイル名として正しいものはどれですか？',
    options: [
      'vite.config.ts',
      'vite.json',
      '.viterc',
      'build.config.js',
    ],
    correctIndex: 0,
    explanation: 'vite.config.ts（または .js / .mjs）でプラグインやエイリアスなどを設定します。',
  },
  {
    id: 'next-steps',
    question: 'Vite プロジェクトのビルド結果をローカルで確認するコマンドはどれですか？',
    options: [
      'npm run preview',
      'npm run dev',
      'vite serve --build',
      'npm start',
    ],
    correctIndex: 0,
    explanation: 'vite preview で本番ビルドをローカルサーバーで確認できます。',
  },
]
