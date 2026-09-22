import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: '「Playwright」について、正しい説明はどれですか？',
    options: [
      '`npm init playwright@latest` でプロジェクトに Playwright を追加します。',
      'End-to-End テストは、ユーザーの操作（クリック、入力、ナビゲーション）を自動化し、アプリ全体が正しく動作するか検証します。',
      'npm init playwright@latest',
      'await page.getByRole("button", { name: "ログイン" }).click();',
    ],
    correctIndex: 1,
    explanation: 'End-to-End テストは、ユーザーの操作（クリック、入力、ナビゲーション）を自動化し、アプリ全体が正しく動作するか検証します。',
  },
  {
    id: 'setup',
    question: '「セットアップ」について、正しい説明はどれですか？',
    options: [
      'End-to-End テストは、ユーザーの操作（クリック、入力、ナビゲーション）を自動化し、アプリ全体が正しく動作するか検証します。',
      'await page.getByRole("button", { name: "ログイン" }).click();',
      '`npm init playwright@latest` でプロジェクトに Playwright を追加します。',
      '「ログインして商品をカートに入れて決済する」といったユーザーシナリオを自動化できます。',
    ],
    correctIndex: 2,
    explanation: '`npm init playwright@latest` でプロジェクトに Playwright を追加します。',
  },
  {
    id: 'selectors',
    question: '「セレクタ」について、正しい説明はどれですか？',
    options: [
      'npm init playwright@latest',
      '「ログインして商品をカートに入れて決済する」といったユーザーシナリオを自動化できます。',
      'End-to-End テストは、ユーザーの操作（クリック、入力、ナビゲーション）を自動化し、アプリ全体が正しく動作するか検証します。',
      'Playwright はユーザーが操作する方法で要素を特定することを推奨します。',
    ],
    correctIndex: 3,
    explanation: 'Playwright はユーザーが操作する方法で要素を特定することを推奨します。',
  },
  {
    id: 'actions',
    question: '「操作」について、正しい説明はどれですか？',
    options: [
      '「ログインして商品をカートに入れて決済する」といったユーザーシナリオを自動化できます。',
      'click()、fill()、press()、check()、selectOption() でユーザー操作を再現します。',
      'End-to-End テストは、ユーザーの操作（クリック、入力、ナビゲーション）を自動化し、アプリ全体が正しく動作するか検証します。',
      'npm init playwright@latest',
    ],
    correctIndex: 1,
    explanation: 'click()、fill()、press()、check()、selectOption() でユーザー操作を再現します。',
  },
  {
    id: 'assertions',
    question: '「アサーション」について、正しい説明はどれですか？',
    options: [
      '「ログインして商品をカートに入れて決済する」といったユーザーシナリオを自動化できます。',
      'npm init playwright@latest',
      '@playwright/test の expect は自動リトライ付きアサーションです。',
      'End-to-End テストは、ユーザーの操作（クリック、入力、ナビゲーション）を自動化し、アプリ全体が正しく動作するか検証します。',
    ],
    correctIndex: 2,
    explanation: '@playwright/test の expect は自動リトライ付きアサーションです。',
  },
  {
    id: 'page-object',
    question: '「Page Object Model」について、正しい説明はどれですか？',
    options: [
      'npm init playwright@latest',
      'End-to-End テストは、ユーザーの操作（クリック、入力、ナビゲーション）を自動化し、アプリ全体が正しく動作するか検証します。',
      'Page Object Model はページごとにクラスを作り、セレクタと操作をカプセル化するパターンです。',
      '「ログインして商品をカートに入れて決済する」といったユーザーシナリオを自動化できます。',
    ],
    correctIndex: 2,
    explanation: 'Page Object Model はページごとにクラスを作り、セレクタと操作をカプセル化するパターンです。',
  },
  {
    id: 'api-testing',
    question: '「API テスト」について、正しい説明はどれですか？',
    options: [
      'npm init playwright@latest',
      'End-to-End テストは、ユーザーの操作（クリック、入力、ナビゲーション）を自動化し、アプリ全体が正しく動作するか検証します。',
      '「ログインして商品をカートに入れて決済する」といったユーザーシナリオを自動化できます。',
      'Playwright はブラウザ操作に加え、API リクエストも送信できます。',
    ],
    correctIndex: 3,
    explanation: 'Playwright はブラウザ操作に加え、API リクエストも送信できます。',
  },
  {
    id: 'ci',
    question: '「CI 連携」について、正しい説明はどれですか？',
    options: [
      'End-to-End テストは、ユーザーの操作（クリック、入力、ナビゲーション）を自動化し、アプリ全体が正しく動作するか検証します。',
      '「ログインして商品をカートに入れて決済する」といったユーザーシナリオを自動化できます。',
      'npm init playwright@latest',
      'PR や push 時に Playwright テストを自動実行します。',
    ],
    correctIndex: 3,
    explanation: 'PR や push 時に Playwright テストを自動実行します。',
  },
  {
    id: 'debugging',
    question: '「デバッグ」について、正しい説明はどれですか？',
    options: [
      'npm init playwright@latest',
      'End-to-End テストは、ユーザーの操作（クリック、入力、ナビゲーション）を自動化し、アプリ全体が正しく動作するか検証します。',
      '`npx playwright test --ui` でインタラクティブなテストランナーを起動。',
      '「ログインして商品をカートに入れて決済する」といったユーザーシナリオを自動化できます。',
    ],
    correctIndex: 2,
    explanation: '`npx playwright test --ui` でインタラクティブなテストランナーを起動。',
  },
  {
    id: 'next-steps',
    question: '「次のステップ」について、正しい説明はどれですか？',
    options: [
      '「ログインして商品をカートに入れて決済する」といったユーザーシナリオを自動化できます。',
      'npm init playwright@latest',
      '① Storybook 入門 — コンポーネントテストとの連携 ② Webセキュリティ — テストでのセキュリティ検証 ③ Docker 入門 — CI 用のテスト環境 ④ …',
      'End-to-End テストは、ユーザーの操作（クリック、入力、ナビゲーション）を自動化し、アプリ全体が正しく動作するか検証します。',
    ],
    correctIndex: 2,
    explanation: '① Storybook 入門 — コンポーネントテストとの連携 ② Webセキュリティ — テストでのセキュリティ検証 ③ Docker 入門 — CI 用のテスト環境 ④ …',
  },
]
