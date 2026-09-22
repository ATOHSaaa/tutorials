import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: '「TanStack Start」について、正しい説明はどれですか？',
    options: [
      '公式 CLI でプロジェクトを作成します。',
      'npm create @tanstack/start@latest my-app',
      'TanStack Start は、TanStack Router の上に構築されたフルスタック React フレームワークです。',
      'import { createFileRoute } from \'@tanstack/react-router\'',
    ],
    correctIndex: 2,
    explanation: 'TanStack Start は、TanStack Router の上に構築されたフルスタック React フレームワークです。',
  },
  {
    id: 'setup',
    question: '「プロジェクトの作り方」について、正しい説明はどれですか？',
    options: [
      'TanStack Start は、TanStack Router の上に構築されたフルスタック React フレームワークです。',
      '公式 CLI でプロジェクトを作成します。',
      'import { createFileRoute } from \'@tanstack/react-router\'',
      'Next.js や Remix と同じ「フルスタックフレームワーク」のカテゴリですが、ルーティングの型安全性と TanStack エコシステムとの統合が特徴です。',
    ],
    correctIndex: 1,
    explanation: '公式 CLI でプロジェクトを作成します。',
  },
  {
    id: 'routing',
    question: '「ルーティング」について、正しい説明はどれですか？',
    options: [
      '各ルートファイルで createFileRoute を使ってルートを定義します。',
      'TanStack Start は、TanStack Router の上に構築されたフルスタック React フレームワークです。',
      'Next.js や Remix と同じ「フルスタックフレームワーク」のカテゴリですが、ルーティングの型安全性と TanStack エコシステムとの統合が特徴です。',
      'npm create @tanstack/start@latest my-app',
    ],
    correctIndex: 0,
    explanation: '各ルートファイルで createFileRoute を使ってルートを定義します。',
  },
  {
    id: 'loaders',
    question: '「Loader とデータ取得」について、正しい説明はどれですか？',
    options: [
      'TanStack Start は、TanStack Router の上に構築されたフルスタック React フレームワークです。',
      'Loader はルートが表示される前にデータを取得する関数です。',
      'npm create @tanstack/start@latest my-app',
      'Next.js や Remix と同じ「フルスタックフレームワーク」のカテゴリですが、ルーティングの型安全性と TanStack エコシステムとの統合が特徴です。',
    ],
    correctIndex: 1,
    explanation: 'Loader はルートが表示される前にデータを取得する関数です。',
  },
  {
    id: 'ssr',
    question: '「SSR と Selective SSR」について、正しい説明はどれですか？',
    options: [
      'TanStack Start は、TanStack Router の上に構築されたフルスタック React フレームワークです。',
      'TanStack Start はデフォルトで SSR をサポートします。',
      'Next.js や Remix と同じ「フルスタックフレームワーク」のカテゴリですが、ルーティングの型安全性と TanStack エコシステムとの統合が特徴です。',
      'npm create @tanstack/start@latest my-app',
    ],
    correctIndex: 1,
    explanation: 'TanStack Start はデフォルトで SSR をサポートします。',
  },
  {
    id: 'server-functions',
    question: '「Server Functions」について、正しい説明はどれですか？',
    options: [
      'npm create @tanstack/start@latest my-app',
      'Server Functions はクライアントからサーバーの関数を型安全に呼び出す RPC です。',
      'TanStack Start は、TanStack Router の上に構築されたフルスタック React フレームワークです。',
      'Next.js や Remix と同じ「フルスタックフレームワーク」のカテゴリですが、ルーティングの型安全性と TanStack エコシステムとの統合が特徴です。',
    ],
    correctIndex: 1,
    explanation: 'Server Functions はクライアントからサーバーの関数を型安全に呼び出す RPC です。',
  },
  {
    id: 'api-routes',
    question: '「Server Routes」について、正しい説明はどれですか？',
    options: [
      'Server Functions はアプリ内部の RPC ですが、Server Routes は外部（Webhook、サードパーティ）から呼ばれる HTTP エンドポイントです。',
      'Next.js や Remix と同じ「フルスタックフレームワーク」のカテゴリですが、ルーティングの型安全性と TanStack エコシステムとの統合が特徴です。',
      'npm create @tanstack/start@latest my-app',
      'TanStack Start は、TanStack Router の上に構築されたフルスタック React フレームワークです。',
    ],
    correctIndex: 0,
    explanation: 'Server Functions はアプリ内部の RPC ですが、Server Routes は外部（Webhook、サードパーティ）から呼ばれる HTTP エンドポイントです。',
  },
  {
    id: 'middleware',
    question: '「ミドルウェア」について、正しい説明はどれですか？',
    options: [
      'TanStack Start は、TanStack Router の上に構築されたフルスタック React フレームワークです。',
      'npm create @tanstack/start@latest my-app',
      'Next.js や Remix と同じ「フルスタックフレームワーク」のカテゴリですが、ルーティングの型安全性と TanStack エコシステムとの統合が特徴です。',
      'ミドルウェアはリクエストの前後で共通処理を実行します。',
    ],
    correctIndex: 3,
    explanation: 'ミドルウェアはリクエストの前後で共通処理を実行します。',
  },
  {
    id: 'deployment',
    question: '「デプロイ」について、正しい説明はどれですか？',
    options: [
      'Next.js や Remix と同じ「フルスタックフレームワーク」のカテゴリですが、ルーティングの型安全性と TanStack エコシステムとの統合が特徴です。',
      'npm create @tanstack/start@latest my-app',
      'TanStack Start は、TanStack Router の上に構築されたフルスタック React フレームワークです。',
      'TanStack Start は Vite（または Rsbuild）でビルドし、Nitro を使って様々なホスティング先にデプロイできます。',
    ],
    correctIndex: 3,
    explanation: 'TanStack Start は Vite（または Rsbuild）でビルドし、Nitro を使って様々なホスティング先にデプロイできます。',
  },
  {
    id: 'next-steps',
    question: '「次のステップ」について、正しい説明はどれですか？',
    options: [
      'TanStack Query — サーバー状態の管理（キャッシュ、再取得） TanStack Table — 高機能なテーブル UI TanStack Form — 型安全な…',
      'Next.js や Remix と同じ「フルスタックフレームワーク」のカテゴリですが、ルーティングの型安全性と TanStack エコシステムとの統合が特徴です。',
      'npm create @tanstack/start@latest my-app',
      'TanStack Start は、TanStack Router の上に構築されたフルスタック React フレームワークです。',
    ],
    correctIndex: 0,
    explanation: 'TanStack Query — サーバー状態の管理（キャッシュ、再取得） TanStack Table — 高機能なテーブル UI TanStack Form — 型安全な…',
  },
]
