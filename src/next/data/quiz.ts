import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: '「Next.js」について、正しい説明はどれですか？',
    options: [
      'app/ フォルダ内のファイル構造が URL になります。',
      'npx create-next-app@latest my-app',
      'create-next-app コマンドで、設定済みのプロジェクトが一瞬で作れます。',
      'Next.js は、React の上に構築されたフレームワークです。',
    ],
    correctIndex: 3,
    explanation: 'Next.js は、React の上に構築されたフレームワークです。',
  },
  {
    id: 'setup',
    question: '「プロジェクトの作り方」について、正しい説明はどれですか？',
    options: [
      'Vercel が開発・メンテナンスしており、世界中で広く使われています。',
      'Next.js は、React の上に構築されたフレームワークです。',
      'create-next-app コマンドで、設定済みのプロジェクトが一瞬で作れます。',
      'app/ フォルダ内のファイル構造が URL になります。',
    ],
    correctIndex: 2,
    explanation: 'create-next-app コマンドで、設定済みのプロジェクトが一瞬で作れます。',
  },
  {
    id: 'routing',
    question: '「ルーティング」について、正しい説明はどれですか？',
    options: [
      'Vercel が開発・メンテナンスしており、世界中で広く使われています。',
      'Next.js は、React の上に構築されたフレームワークです。',
      'npx create-next-app@latest my-app',
      'app/ フォルダ内のファイル構造が URL になります。',
    ],
    correctIndex: 3,
    explanation: 'app/ フォルダ内のファイル構造が URL になります。',
  },
  {
    id: 'layouts',
    question: '「レイアウト」について、正しい説明はどれですか？',
    options: [
      'Vercel が開発・メンテナンスしており、世界中で広く使われています。',
      'npx create-next-app@latest my-app',
      'Next.js は、React の上に構築されたフレームワークです。',
      'layout.tsx はページをまたいで共通の UI を定義します。',
    ],
    correctIndex: 3,
    explanation: 'layout.tsx はページをまたいで共通の UI を定義します。',
  },
  {
    id: 'components',
    question: '「コンポーネント」について、正しい説明はどれですか？',
    options: [
      'Next.js は、React の上に構築されたフレームワークです。',
      'App Router では、コンポーネントはデフォルトでサーバー上で実行されます。',
      'Vercel が開発・メンテナンスしており、世界中で広く使われています。',
      'npx create-next-app@latest my-app',
    ],
    correctIndex: 1,
    explanation: 'App Router では、コンポーネントはデフォルトでサーバー上で実行されます。',
  },
  {
    id: 'data-fetching',
    question: '「データ取得」について、正しい説明はどれですか？',
    options: [
      'npx create-next-app@latest my-app',
      'Vercel が開発・メンテナンスしており、世界中で広く使われています。',
      'Server Component 内で async/await を使ってデータを取得できます。',
      'Next.js は、React の上に構築されたフレームワークです。',
    ],
    correctIndex: 2,
    explanation: 'Server Component 内で async/await を使ってデータを取得できます。',
  },
  {
    id: 'navigation',
    question: '「ナビゲーション」について、正しい説明はどれですか？',
    options: [
      'npx create-next-app@latest my-app',
      'Vercel が開発・メンテナンスしており、世界中で広く使われています。',
      'Next.js は、React の上に構築されたフレームワークです。',
      'next/link の Link を使うと、ページ遷移が高速になります。',
    ],
    correctIndex: 3,
    explanation: 'next/link の Link を使うと、ページ遷移が高速になります。',
  },
  {
    id: 'styling',
    question: '「スタイリング」について、正しい説明はどれですか？',
    options: [
      'npx create-next-app@latest my-app',
      'Next.js は、React の上に構築されたフレームワークです。',
      'Component.module.css というファイル名で、コンポーネント専用の CSS を書けます。',
      'Vercel が開発・メンテナンスしており、世界中で広く使われています。',
    ],
    correctIndex: 2,
    explanation: 'Component.module.css というファイル名で、コンポーネント専用の CSS を書けます。',
  },
  {
    id: 'api',
    question: '「API（Route Handlers）」について、正しい説明はどれですか？',
    options: [
      'app/api/ フォルダに route.ts を置くと、API エンドポイントが作れます。',
      'Vercel が開発・メンテナンスしており、世界中で広く使われています。',
      'npx create-next-app@latest my-app',
      'Next.js は、React の上に構築されたフレームワークです。',
    ],
    correctIndex: 0,
    explanation: 'app/api/ フォルダに route.ts を置くと、API エンドポイントが作れます。',
  },
  {
    id: 'next-steps',
    question: '「次のステップ」について、正しい説明はどれですか？',
    options: [
      'Next.js アプリは Vercel に git push するだけでデプロイできます（Vercel は Next.js の開発元）。',
      'Next.js は、React の上に構築されたフレームワークです。',
      'npx create-next-app@latest my-app',
      'Vercel が開発・メンテナンスしており、世界中で広く使われています。',
    ],
    correctIndex: 0,
    explanation: 'Next.js アプリは Vercel に git push するだけでデプロイできます（Vercel は Next.js の開発元）。',
  },
]
