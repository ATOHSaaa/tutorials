import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: '「テスト」について、正しい説明はどれですか？',
    options: [
      'テストは「コードが期待どおり動く」ことを自動で確認する仕組みです。',
      'Vite ベースの高速テストランナーです。',
      'npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom',
      'import { describe, it, expect } from \'vitest\';',
    ],
    correctIndex: 0,
    explanation: 'テストは「コードが期待どおり動く」ことを自動で確認する仕組みです。',
  },
  {
    id: 'vitest',
    question: '「Vitest セットアップ」について、正しい説明はどれですか？',
    options: [
      'import { describe, it, expect } from \'vitest\';',
      'Vite ベースの高速テストランナーです。',
      'テストは「コードが期待どおり動く」ことを自動で確認する仕組みです。',
      'このチュートリアルはユニット・コンポーネントテスト中心です。',
    ],
    correctIndex: 1,
    explanation: 'Vite ベースの高速テストランナーです。',
  },
  {
    id: 'unit',
    question: '「ユニットテスト」について、正しい説明はどれですか？',
    options: [
      'テストは「コードが期待どおり動く」ことを自動で確認する仕組みです。',
      'describe でグループ化、it（または test）で個別ケース、expect でアサーションします。',
      'このチュートリアルはユニット・コンポーネントテスト中心です。',
      'npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom',
    ],
    correctIndex: 1,
    explanation: 'describe でグループ化、it（または test）で個別ケース、expect でアサーションします。',
  },
  {
    id: 'rtl',
    question: '「React Testing Library」について、正しい説明はどれですか？',
    options: [
      '実装の詳細（state、内部メソッド）ではなく、ユーザーが見る・操作するものをテストします。',
      'テストは「コードが期待どおり動く」ことを自動で確認する仕組みです。',
      'このチュートリアルはユニット・コンポーネントテスト中心です。',
      'npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom',
    ],
    correctIndex: 0,
    explanation: '実装の詳細（state、内部メソッド）ではなく、ユーザーが見る・操作するものをテストします。',
  },
  {
    id: 'render',
    question: '「描画テスト」について、正しい説明はどれですか？',
    options: [
      'このチュートリアルはユニット・コンポーネントテスト中心です。',
      'テストは「コードが期待どおり動く」ことを自動で確認する仕組みです。',
      'npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom',
      'toBeInTheDocument()、toHaveTextContent()、toHaveClass() で DOM の状態を検証します。',
    ],
    correctIndex: 3,
    explanation: 'toBeInTheDocument()、toHaveTextContent()、toHaveClass() で DOM の状態を検証します。',
  },
  {
    id: 'interaction',
    question: '「操作テスト」について、正しい説明はどれですか？',
    options: [
      'このチュートリアルはユニット・コンポーネントテスト中心です。',
      '@testing-library/user-event の userEvent.click()、userEvent.type() は実際のユーザー操作に近いイベントを発火します。',
      'テストは「コードが期待どおり動く」ことを自動で確認する仕組みです。',
      'npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom',
    ],
    correctIndex: 1,
    explanation: '@testing-library/user-event の userEvent.click()、userEvent.type() は実際のユーザー操作に近いイベントを発火します。',
  },
  {
    id: 'mock',
    question: '「モック」について、正しい説明はどれですか？',
    options: [
      'テストは「コードが期待どおり動く」ことを自動で確認する仕組みです。',
      'Vitest の vi.fn() で関数をモック、vi.mock() でモジュール全体を差し替えます。',
      'このチュートリアルはユニット・コンポーネントテスト中心です。',
      'npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom',
    ],
    correctIndex: 1,
    explanation: 'Vitest の vi.fn() で関数をモック、vi.mock() でモジュール全体を差し替えます。',
  },
  {
    id: 'async',
    question: '「非同期テスト」について、正しい説明はどれですか？',
    options: [
      'テストは「コードが期待どおり動く」ことを自動で確認する仕組みです。',
      'it のコールバックを async にし、await findBy* や await waitFor を使います。',
      'npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom',
      'このチュートリアルはユニット・コンポーネントテスト中心です。',
    ],
    correctIndex: 1,
    explanation: 'it のコールバックを async にし、await findBy* や await waitFor を使います。',
  },
  {
    id: 'coverage',
    question: '「カバレッジ」について、正しい説明はどれですか？',
    options: [
      'npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom',
      'コードのどの行・分岐がテストで実行されたかの割合です。',
      'このチュートリアルはユニット・コンポーネントテスト中心です。',
      'テストは「コードが期待どおり動く」ことを自動で確認する仕組みです。',
    ],
    correctIndex: 1,
    explanation: 'コードのどの行・分岐がテストで実行されたかの割合です。',
  },
  {
    id: 'next-steps',
    question: '「次のステップ」について、正しい説明はどれですか？',
    options: [
      'Playwright / Cypress — E2E テスト',
      'テストは「コードが期待どおり動く」ことを自動で確認する仕組みです。',
      'このチュートリアルはユニット・コンポーネントテスト中心です。',
      'npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom',
    ],
    correctIndex: 0,
    explanation: 'Playwright / Cypress — E2E テスト',
  },
]
