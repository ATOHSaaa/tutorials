import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: '「Vue.js」について、正しい説明はどれですか？',
    options: [
      'npm create vue@latest my-vue-app',
      '<script setup lang="ts">',
      '公式のプロジェクト作成ツールです。Vite ベースで高速な開発体験が得られます。',
      'Vue.js は Evan You が開発したプログレッシブ JavaScript フレームワークです。',
    ],
    correctIndex: 3,
    explanation: 'Vue.js は Evan You が開発したプログレッシブ JavaScript フレームワークです。',
  },
  {
    id: 'setup',
    question: '「セットアップ」について、正しい説明はどれですか？',
    options: [
      'テンプレート — Vue は HTML ベースのテンプレート、React は JSX',
      '公式のプロジェクト作成ツールです。Vite ベースで高速な開発体験が得られます。',
      '<script setup lang="ts">',
      'Vue.js は Evan You が開発したプログレッシブ JavaScript フレームワークです。',
    ],
    correctIndex: 1,
    explanation: '公式のプロジェクト作成ツールです。Vite ベースで高速な開発体験が得られます。',
  },
  {
    id: 'template',
    question: '「テンプレート構文」について、正しい説明はどれですか？',
    options: [
      '.vue ファイルに template、script、style を1ファイルにまとめます。',
      'Vue.js は Evan You が開発したプログレッシブ JavaScript フレームワークです。',
      'テンプレート — Vue は HTML ベースのテンプレート、React は JSX',
      'npm create vue@latest my-vue-app',
    ],
    correctIndex: 0,
    explanation: '.vue ファイルに template、script、style を1ファイルにまとめます。',
  },
  {
    id: 'reactivity',
    question: '「リアクティビティ」について、正しい説明はどれですか？',
    options: [
      'プリミティブ値や単一の値は ref で包みます。',
      'Vue.js は Evan You が開発したプログレッシブ JavaScript フレームワークです。',
      'npm create vue@latest my-vue-app',
      'テンプレート — Vue は HTML ベースのテンプレート、React は JSX',
    ],
    correctIndex: 0,
    explanation: 'プリミティブ値や単一の値は ref で包みます。',
  },
  {
    id: 'components',
    question: '「コンポーネント」について、正しい説明はどれですか？',
    options: [
      'テンプレート — Vue は HTML ベースのテンプレート、React は JSX',
      'defineProps で親からデータを受け取ります。',
      'npm create vue@latest my-vue-app',
      'Vue.js は Evan You が開発したプログレッシブ JavaScript フレームワークです。',
    ],
    correctIndex: 1,
    explanation: 'defineProps で親からデータを受け取ります。',
  },
  {
    id: 'props',
    question: '「Props の詳細」について、正しい説明はどれですか？',
    options: [
      'defineProps に TypeScript の型を渡すと、型安全な Props が定義できます。',
      'npm create vue@latest my-vue-app',
      'Vue.js は Evan You が開発したプログレッシブ JavaScript フレームワークです。',
      'テンプレート — Vue は HTML ベースのテンプレート、React は JSX',
    ],
    correctIndex: 0,
    explanation: 'defineProps に TypeScript の型を渡すと、型安全な Props が定義できます。',
  },
  {
    id: 'computed',
    question: '「computed」について、正しい説明はどれですか？',
    options: [
      'テンプレート — Vue は HTML ベースのテンプレート、React は JSX',
      'npm create vue@latest my-vue-app',
      'Vue.js は Evan You が開発したプログレッシブ JavaScript フレームワークです。',
      '他のリアクティブな値から計算される値は computed で定義します。',
    ],
    correctIndex: 3,
    explanation: '他のリアクティブな値から計算される値は computed で定義します。',
  },
  {
    id: 'lifecycle',
    question: '「ライフサイクル」について、正しい説明はどれですか？',
    options: [
      'onMounted、onUpdated、onUnmounted など。',
      'テンプレート — Vue は HTML ベースのテンプレート、React は JSX',
      'Vue.js は Evan You が開発したプログレッシブ JavaScript フレームワークです。',
      'npm create vue@latest my-vue-app',
    ],
    correctIndex: 0,
    explanation: 'onMounted、onUpdated、onUnmounted など。',
  },
  {
    id: 'composables',
    question: '「Composables」について、正しい説明はどれですか？',
    options: [
      'Vue.js は Evan You が開発したプログレッシブ JavaScript フレームワークです。',
      'テンプレート — Vue は HTML ベースのテンプレート、React は JSX',
      'Vue 3 の Composition API は、ロジックを関数に切り出して再利用するパターンです。',
      'npm create vue@latest my-vue-app',
    ],
    correctIndex: 2,
    explanation: 'Vue 3 の Composition API は、ロジックを関数に切り出して再利用するパターンです。',
  },
  {
    id: 'next-steps',
    question: '「次のステップ」について、正しい説明はどれですか？',
    options: [
      'Vue.js は Evan You が開発したプログレッシブ JavaScript フレームワークです。',
      'Vue Router — SPA のルーティング',
      'テンプレート — Vue は HTML ベースのテンプレート、React は JSX',
      'npm create vue@latest my-vue-app',
    ],
    correctIndex: 1,
    explanation: 'Vue Router — SPA のルーティング',
  },
]
