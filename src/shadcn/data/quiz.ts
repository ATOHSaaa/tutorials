import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: '「shadcn/ui」について、正しい説明はどれですか？',
    options: [
      'shadcn/ui の設定ファイルです。',
      'shadcn/ui は Tailwind CSS が必須です。',
      'npx create-next-app@latest my-app --typescript --tailwind --eslint',
      'shadcn/ui は「npm パッケージとしてインストールする UI ライブラリ」ではありません。',
    ],
    correctIndex: 3,
    explanation: 'shadcn/ui は「npm パッケージとしてインストールする UI ライブラリ」ではありません。',
  },
  {
    id: 'setup',
    question: '「セットアップ」について、正しい説明はどれですか？',
    options: [
      'shadcn/ui の設定ファイルです。',
      'shadcn/ui は「npm パッケージとしてインストールする UI ライブラリ」ではありません。',
      'shadcn/ui は Tailwind CSS が必須です。',
      'つまりコンポーネントの「所有者」はあなたのプロジェクト。',
    ],
    correctIndex: 2,
    explanation: 'shadcn/ui は Tailwind CSS が必須です。',
  },
  {
    id: 'structure',
    question: '「プロジェクト構成」について、正しい説明はどれですか？',
    options: [
      'npx create-next-app@latest my-app --typescript --tailwind --eslint',
      'つまりコンポーネントの「所有者」はあなたのプロジェクト。',
      'shadcn/ui の設定ファイルです。',
      'shadcn/ui は「npm パッケージとしてインストールする UI ライブラリ」ではありません。',
    ],
    correctIndex: 2,
    explanation: 'shadcn/ui の設定ファイルです。',
  },
  {
    id: 'button',
    question: '「Button」について、正しい説明はどれですか？',
    options: [
      'npx create-next-app@latest my-app --typescript --tailwind --eslint',
      'Button は最もよく使うコンポーネントです。',
      'つまりコンポーネントの「所有者」はあなたのプロジェクト。',
      'shadcn/ui は「npm パッケージとしてインストールする UI ライブラリ」ではありません。',
    ],
    correctIndex: 1,
    explanation: 'Button は最もよく使うコンポーネントです。',
  },
  {
    id: 'form',
    question: '「Form と Input」について、正しい説明はどれですか？',
    options: [
      'shadcn/ui は「npm パッケージとしてインストールする UI ライブラリ」ではありません。',
      'つまりコンポーネントの「所有者」はあなたのプロジェクト。',
      'Input はテキスト入力、Label はアクセシブルなラベルです。',
      'npx create-next-app@latest my-app --typescript --tailwind --eslint',
    ],
    correctIndex: 2,
    explanation: 'Input はテキスト入力、Label はアクセシブルなラベルです。',
  },
  {
    id: 'card',
    question: '「Card」について、正しい説明はどれですか？',
    options: [
      'npx create-next-app@latest my-app --typescript --tailwind --eslint',
      'shadcn/ui は「npm パッケージとしてインストールする UI ライブラリ」ではありません。',
      'Card、CardHeader、CardTitle、CardDescription、CardContent、CardFooter の組み合わせで、情報を整理して表示します。',
      'つまりコンポーネントの「所有者」はあなたのプロジェクト。',
    ],
    correctIndex: 2,
    explanation: 'Card、CardHeader、CardTitle、CardDescription、CardContent、CardFooter の組み合わせで、情報を整理して表示します。',
  },
  {
    id: 'dialog',
    question: '「Dialog」について、正しい説明はどれですか？',
    options: [
      'Radix Dialog をベースに、オーバーレイ・フォーカストラップ・Esc キーで閉じるなどが組み込まれています。',
      'shadcn/ui は「npm パッケージとしてインストールする UI ライブラリ」ではありません。',
      'npx create-next-app@latest my-app --typescript --tailwind --eslint',
      'つまりコンポーネントの「所有者」はあなたのプロジェクト。',
    ],
    correctIndex: 0,
    explanation: 'Radix Dialog をベースに、オーバーレイ・フォーカストラップ・Esc キーで閉じるなどが組み込まれています。',
  },
  {
    id: 'dropdown',
    question: '「Dropdown Menu」について、正しい説明はどれですか？',
    options: [
      'npx create-next-app@latest my-app --typescript --tailwind --eslint',
      'つまりコンポーネントの「所有者」はあなたのプロジェクト。',
      'DropdownMenu、DropdownMenuTrigger、DropdownMenuContent、DropdownMenuItem でメニューを構成します。',
      'shadcn/ui は「npm パッケージとしてインストールする UI ライブラリ」ではありません。',
    ],
    correctIndex: 2,
    explanation: 'DropdownMenu、DropdownMenuTrigger、DropdownMenuContent、DropdownMenuItem でメニューを構成します。',
  },
  {
    id: 'theme',
    question: '「テーマとダークモード」について、正しい説明はどれですか？',
    options: [
      'shadcn/ui は HSL 形式の CSS 変数で色を定義します。',
      'つまりコンポーネントの「所有者」はあなたのプロジェクト。',
      'shadcn/ui は「npm パッケージとしてインストールする UI ライブラリ」ではありません。',
      'npx create-next-app@latest my-app --typescript --tailwind --eslint',
    ],
    correctIndex: 0,
    explanation: 'shadcn/ui は HSL 形式の CSS 変数で色を定義します。',
  },
  {
    id: 'next-steps',
    question: '「次のステップ」について、正しい説明はどれですか？',
    options: [
      'shadcn/ui は「npm パッケージとしてインストールする UI ライブラリ」ではありません。',
      'つまりコンポーネントの「所有者」はあなたのプロジェクト。',
      '① フォーム入門 — React Hook Form + Zod ② Storybook — コンポーネントカタログ ③ アクセシビリティ — Radix の a11y を深…',
      'npx create-next-app@latest my-app --typescript --tailwind --eslint',
    ],
    correctIndex: 2,
    explanation: '① フォーム入門 — React Hook Form + Zod ② Storybook — コンポーネントカタログ ③ アクセシビリティ — Radix の a11y を深…',
  },
]
