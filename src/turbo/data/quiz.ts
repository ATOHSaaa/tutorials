import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: 'Turborepo の主な目的はどれですか？',
    options: [
      'モノレポのビルド・テストを高速化する',
      'React の代替フレームワークを提供する',
      'CSS を自動生成する',
      'データベースを管理する',
    ],
    correctIndex: 0,
    explanation: 'Turborepo はタスクのキャッシュと並列実行でモノレポの CI/CD を高速化します。',
  },
  {
    id: 'monorepo',
    question: 'モノレポ（Monorepo）の説明として正しいものはどれですか？',
    options: [
      '複数のパッケージを1つのリポジトリで管理する',
      '1つのパッケージだけを管理する',
      'クラウド上だけで動くリポジトリ',
      'Git を使わないプロジェクト構成',
    ],
    correctIndex: 0,
    explanation: 'モノレポは apps/ と packages/ など複数プロジェクトを1リポジトリにまとめる構成です。',
  },
  {
    id: 'setup',
    question: 'Turborepo プロジェクトを作成する代表的なコマンドはどれですか？',
    options: [
      'npx create-turbo@latest',
      'npm create vite@latest',
      'npx turbo init',
      'yarn add turbo',
    ],
    correctIndex: 0,
    explanation: 'create-turbo でモノレポのテンプレートを生成します。',
  },
  {
    id: 'workspaces',
    question: 'Turborepo で apps と packages を分ける主な理由はどれですか？',
    options: [
      'アプリと共有ライブラリの責務を分離する',
      'Git ブランチを増やすため',
      'CSS を分離するため',
      'テストを無効化するため',
    ],
    correctIndex: 0,
    explanation: 'apps はデプロイ対象のアプリ、packages は共通 UI や utils などの再利用コードです。',
  },
  {
    id: 'tasks',
    question: 'Turborepo でタスクを定義するファイルはどれですか？',
    options: [
      'turbo.json',
      'package.json のみ',
      'vite.config.ts',
      'tsconfig.json',
    ],
    correctIndex: 0,
    explanation: 'turbo.json で build / test / lint などのタスクと依存関係を定義します。',
  },
  {
    id: 'pipeline',
    question: 'Turborepo のパイプラインで dependsOn: ["^build"] の意味は？',
    options: [
      '依存パッケージの build を先に実行する',
      'build をスキップする',
      'テストだけを実行する',
      '並列実行を禁止する',
    ],
    correctIndex: 0,
    explanation: 'キャレット（^）はワークスペースの依存先を指し、先にライブラリをビルドしてからアプリをビルドします。',
  },
  {
    id: 'cache',
    question: 'Turborepo のキャッシュが効く条件として正しいものはどれですか？',
    options: [
      '入力ファイルとタスク設定が同じなら前回の結果を再利用する',
      '毎回必ず全タスクを再実行する',
      'キャッシュはローカルでは使えない',
      'Git のコミットメッセージだけで判断する',
    ],
    correctIndex: 0,
    explanation: 'ソースや設定が変わらなければ、前回のビルド結果をキャッシュから返します。',
  },
  {
    id: 'filter',
    question: '特定パッケージだけタスクを実行する Turborepo のオプションはどれですか？',
    options: [
      '--filter',
      '--only',
      '--package',
      '--scope-only',
    ],
    correctIndex: 0,
    explanation: 'turbo run build --filter=web のように、対象パッケージを絞り込めます。',
  },
  {
    id: 'ci',
    question: 'CI で Turborepo を使うメリットとして正しいものはどれですか？',
    options: [
      '変更のないパッケージのビルドをスキップできる',
      'Git リポジトリが不要になる',
      'テストが自動的に不要になる',
      'Node.js が不要になる',
    ],
    correctIndex: 0,
    explanation: 'キャッシュと affected なパッケージの判定で CI 時間を短縮できます。',
  },
  {
    id: 'next-steps',
    question: 'Turborepo とよく組み合わせるパッケージマネージャーの機能はどれですか？',
    options: [
      'ワークスペース（npm/pnpm/yarn workspaces）',
      'グローバルインストール',
      'npx のみ',
      'CDN 配信',
    ],
    correctIndex: 0,
    explanation: 'npm workspaces や pnpm workspace と組み合わせてモノレポを構成します。',
  },
]
