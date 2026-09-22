import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: '「a11y」について、正しい説明はどれですか？',
    options: [
      '<div onclick="submit()">送信</div>',
      'div だけで全部作るのではなく、header、nav、main、article、section、footer など意味のあるタグを使います。',
      'マウスを使えないユーザーは Tab（次の要素）、Shift+Tab（前）、Enter/Space（実行）、矢印キー（リスト内移動）で操作します。',
      'a11y は accessibility（アクセシビリティ）の略です。',
    ],
    correctIndex: 3,
    explanation: 'a11y は accessibility（アクセシビリティ）の略です。',
  },
  {
    id: 'semantic',
    question: '「セマンティック HTML」について、正しい説明はどれですか？',
    options: [
      '法的要件 — 多くの国で Web アクセシビリティが法律で求められています',
      'div だけで全部作るのではなく、header、nav、main、article、section、footer など意味のあるタグを使います。',
      'マウスを使えないユーザーは Tab（次の要素）、Shift+Tab（前）、Enter/Space（実行）、矢印キー（リスト内移動）で操作します。',
      'a11y は accessibility（アクセシビリティ）の略です。',
    ],
    correctIndex: 1,
    explanation: 'div だけで全部作るのではなく、header、nav、main、article、section、footer など意味のあるタグを使います。',
  },
  {
    id: 'keyboard',
    question: '「キーボード操作」について、正しい説明はどれですか？',
    options: [
      'div だけで全部作るのではなく、header、nav、main、article、section、footer など意味のあるタグを使います。',
      '法的要件 — 多くの国で Web アクセシビリティが法律で求められています',
      'マウスを使えないユーザーは Tab（次の要素）、Shift+Tab（前）、Enter/Space（実行）、矢印キー（リスト内移動）で操作します。',
      'a11y は accessibility（アクセシビリティ）の略です。',
    ],
    correctIndex: 2,
    explanation: 'マウスを使えないユーザーは Tab（次の要素）、Shift+Tab（前）、Enter/Space（実行）、矢印キー（リスト内移動）で操作します。',
  },
  {
    id: 'focus',
    question: '「フォーカス管理」について、正しい説明はどれですか？',
    options: [
      'a11y は accessibility（アクセシビリティ）の略です。',
      '法的要件 — 多くの国で Web アクセシビリティが法律で求められています',
      'div だけで全部作るのではなく、header、nav、main、article、section、footer など意味のあるタグを使います。',
      'outline: none だけを指定すると、キーボードユーザーが今どこにいるかわかりません。',
    ],
    correctIndex: 3,
    explanation: 'outline: none だけを指定すると、キーボードユーザーが今どこにいるかわかりません。',
  },
  {
    id: 'aria',
    question: '「ARIA」について、正しい説明はどれですか？',
    options: [
      'Accessible Rich Internet Applications。',
      'div だけで全部作るのではなく、header、nav、main、article、section、footer など意味のあるタグを使います。',
      '法的要件 — 多くの国で Web アクセシビリティが法律で求められています',
      'a11y は accessibility（アクセシビリティ）の略です。',
    ],
    correctIndex: 0,
    explanation: 'Accessible Rich Internet Applications。',
  },
  {
    id: 'images',
    question: '「画像の代替テキスト」について、正しい説明はどれですか？',
    options: [
      'div だけで全部作るのではなく、header、nav、main、article、section、footer など意味のあるタグを使います。',
      'a11y は accessibility（アクセシビリティ）の略です。',
      '法的要件 — 多くの国で Web アクセシビリティが法律で求められています',
      'img には alt を付けます。画像の内容や目的をテキストで伝えます。',
    ],
    correctIndex: 3,
    explanation: 'img には alt を付けます。画像の内容や目的をテキストで伝えます。',
  },
  {
    id: 'color',
    question: '「色とコントラスト」について、正しい説明はどれですか？',
    options: [
      'a11y は accessibility（アクセシビリティ）の略です。',
      '法的要件 — 多くの国で Web アクセシビリティが法律で求められています',
      'div だけで全部作るのではなく、header、nav、main、article、section、footer など意味のあるタグを使います。',
      'WCAG AA では通常テキスト 4.5:1 以上、大きいテキスト 3:1 以上のコントラストが必要です。',
    ],
    correctIndex: 3,
    explanation: 'WCAG AA では通常テキスト 4.5:1 以上、大きいテキスト 3:1 以上のコントラストが必要です。',
  },
  {
    id: 'forms',
    question: '「フォームの a11y」について、正しい説明はどれですか？',
    options: [
      '法的要件 — 多くの国で Web アクセシビリティが法律で求められています',
      'すべての入力に label を付けます。',
      'div だけで全部作るのではなく、header、nav、main、article、section、footer など意味のあるタグを使います。',
      'a11y は accessibility（アクセシビリティ）の略です。',
    ],
    correctIndex: 1,
    explanation: 'すべての入力に label を付けます。',
  },
  {
    id: 'testing',
    question: '「テスト方法」について、正しい説明はどれですか？',
    options: [
      '法的要件 — 多くの国で Web アクセシビリティが法律で求められています',
      'axe DevTools — ブラウザ拡張、問題箇所をハイライト',
      'div だけで全部作るのではなく、header、nav、main、article、section、footer など意味のあるタグを使います。',
      'a11y は accessibility（アクセシビリティ）の略です。',
    ],
    correctIndex: 1,
    explanation: 'axe DevTools — ブラウザ拡張、問題箇所をハイライト',
  },
  {
    id: 'next-steps',
    question: '「次のステップ」について、正しい説明はどれですか？',
    options: [
      'div だけで全部作るのではなく、header、nav、main、article、section、footer など意味のあるタグを使います。',
      'a11y は accessibility（アクセシビリティ）の略です。',
      '法的要件 — 多くの国で Web アクセシビリティが法律で求められています',
      'WAI-ARIA Authoring Practices — コンポーネントパターン集',
    ],
    correctIndex: 3,
    explanation: 'WAI-ARIA Authoring Practices — コンポーネントパターン集',
  },
]
