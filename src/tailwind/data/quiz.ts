import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: '「Tailwind」について、正しい説明はどれですか？',
    options: [
      'Tailwind のクラス名は「プロパティ-値」の形式です。',
      'Tailwind CSS は「ユーティリティクラス」を組み合わせてデザインする CSS フレームワークです。',
      'Tailwind v4 では PostCSS プラグインで導入します。',
      'npm create vite@latest my-app -- --template react-ts',
    ],
    correctIndex: 1,
    explanation: 'Tailwind CSS は「ユーティリティクラス」を組み合わせてデザインする CSS フレームワークです。',
  },
  {
    id: 'setup',
    question: '「セットアップ」について、正しい説明はどれですか？',
    options: [
      'Tailwind CSS は「ユーティリティクラス」を組み合わせてデザインする CSS フレームワークです。',
      '従来: HTML に class="card" → CSS ファイルに .card { padding: 1rem; ... } を書く',
      'Tailwind のクラス名は「プロパティ-値」の形式です。',
      'Tailwind v4 では PostCSS プラグインで導入します。',
    ],
    correctIndex: 3,
    explanation: 'Tailwind v4 では PostCSS プラグインで導入します。',
  },
  {
    id: 'utility',
    question: '「ユーティリティクラス」について、正しい説明はどれですか？',
    options: [
      '従来: HTML に class="card" → CSS ファイルに .card { padding: 1rem; ... } を書く',
      'Tailwind のクラス名は「プロパティ-値」の形式です。',
      'npm create vite@latest my-app -- --template react-ts',
      'Tailwind CSS は「ユーティリティクラス」を組み合わせてデザインする CSS フレームワークです。',
    ],
    correctIndex: 1,
    explanation: 'Tailwind のクラス名は「プロパティ-値」の形式です。',
  },
  {
    id: 'layout',
    question: '「レイアウト」について、正しい説明はどれですか？',
    options: [
      'Tailwind CSS は「ユーティリティクラス」を組み合わせてデザインする CSS フレームワークです。',
      'flex、flex-col、items-center、justify-between、gap-4 など。',
      'npm create vite@latest my-app -- --template react-ts',
      '従来: HTML に class="card" → CSS ファイルに .card { padding: 1rem; ... } を書く',
    ],
    correctIndex: 1,
    explanation: 'flex、flex-col、items-center、justify-between、gap-4 など。',
  },
  {
    id: 'spacing',
    question: '「余白とサイズ」について、正しい説明はどれですか？',
    options: [
      'Tailwind は 4px 単位のスケールです。',
      '従来: HTML に class="card" → CSS ファイルに .card { padding: 1rem; ... } を書く',
      'npm create vite@latest my-app -- --template react-ts',
      'Tailwind CSS は「ユーティリティクラス」を組み合わせてデザインする CSS フレームワークです。',
    ],
    correctIndex: 0,
    explanation: 'Tailwind は 4px 単位のスケールです。',
  },
  {
    id: 'typography',
    question: '「文字と色」について、正しい説明はどれですか？',
    options: [
      'npm create vite@latest my-app -- --template react-ts',
      'Tailwind CSS は「ユーティリティクラス」を組み合わせてデザインする CSS フレームワークです。',
      '従来: HTML に class="card" → CSS ファイルに .card { padding: 1rem; ... } を書く',
      'text-sm / text-lg / text-2xl でサイズ、font-bold / font-medium で太さ、text-center で揃え、leading-relaxe…',
    ],
    correctIndex: 3,
    explanation: 'text-sm / text-lg / text-2xl でサイズ、font-bold / font-medium で太さ、text-center で揃え、leading-relaxe…',
  },
  {
    id: 'responsive',
    question: '「レスポンシブ」について、正しい説明はどれですか？',
    options: [
      'sm (640px)、md (768px)、lg (1024px)、xl (1280px)。',
      'npm create vite@latest my-app -- --template react-ts',
      'Tailwind CSS は「ユーティリティクラス」を組み合わせてデザインする CSS フレームワークです。',
      '従来: HTML に class="card" → CSS ファイルに .card { padding: 1rem; ... } を書く',
    ],
    correctIndex: 0,
    explanation: 'sm (640px)、md (768px)、lg (1024px)、xl (1280px)。',
  },
  {
    id: 'states',
    question: '「状態バリアント」について、正しい説明はどれですか？',
    options: [
      'npm create vite@latest my-app -- --template react-ts',
      'Tailwind CSS は「ユーティリティクラス」を組み合わせてデザインする CSS フレームワークです。',
      'hover:bg-blue-600、focus:ring-2、active:scale-95 など。',
      '従来: HTML に class="card" → CSS ファイルに .card { padding: 1rem; ... } を書く',
    ],
    correctIndex: 2,
    explanation: 'hover:bg-blue-600、focus:ring-2、active:scale-95 など。',
  },
  {
    id: 'dark-mode',
    question: '「ダークモード」について、正しい説明はどれですか？',
    options: [
      'npm create vite@latest my-app -- --template react-ts',
      'Tailwind CSS は「ユーティリティクラス」を組み合わせてデザインする CSS フレームワークです。',
      'dark:bg-gray-900 dark:text-white のように、ダークモード時だけ適用するクラスを書けます。',
      '従来: HTML に class="card" → CSS ファイルに .card { padding: 1rem; ... } を書く',
    ],
    correctIndex: 2,
    explanation: 'dark:bg-gray-900 dark:text-white のように、ダークモード時だけ適用するクラスを書けます。',
  },
  {
    id: 'next-steps',
    question: '「次のステップ」について、正しい説明はどれですか？',
    options: [
      '@apply — 繰り返すクラスを CSS にまとめる',
      '従来: HTML に class="card" → CSS ファイルに .card { padding: 1rem; ... } を書く',
      'Tailwind CSS は「ユーティリティクラス」を組み合わせてデザインする CSS フレームワークです。',
      'npm create vite@latest my-app -- --template react-ts',
    ],
    correctIndex: 0,
    explanation: '@apply — 繰り返すクラスを CSS にまとめる',
  },
]
