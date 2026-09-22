import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: '「Storybook」について、正しい説明はどれですか？',
    options: [
      'import type { Meta, StoryObj } from "@storybook/react";',
      'プロジェクトルートで `npx storybook@latest init` を実行すると、フレームワークを自動検出して設定ファイルが生成されます。',
      'npx storybook@latest init',
      'Storybook は UI コンポーネントをアプリ本体から独立して開発・表示・テストする環境です。',
    ],
    correctIndex: 3,
    explanation: 'Storybook は UI コンポーネントをアプリ本体から独立して開発・表示・テストする環境です。',
  },
  {
    id: 'setup',
    question: '「セットアップ」について、正しい説明はどれですか？',
    options: [
      'プロジェクトルートで `npx storybook@latest init` を実行すると、フレームワークを自動検出して設定ファイルが生成されます。',
      'Storybook は UI コンポーネントをアプリ本体から独立して開発・表示・テストする環境です。',
      'アプリを起動せずにコンポーネントの全バリエーションを確認できるため、開発速度と品質が向上します。',
      'import type { Meta, StoryObj } from "@storybook/react";',
    ],
    correctIndex: 0,
    explanation: 'プロジェクトルートで `npx storybook@latest init` を実行すると、フレームワークを自動検出して設定ファイルが生成されます。',
  },
  {
    id: 'stories',
    question: '「ストーリーの書き方」について、正しい説明はどれですか？',
    options: [
      'Storybook は UI コンポーネントをアプリ本体から独立して開発・表示・テストする環境です。',
      'Meta オブジェクトでコンポーネントを登録し、named export でストーリー（バリエーション）を定義します。',
      'npx storybook@latest init',
      'アプリを起動せずにコンポーネントの全バリエーションを確認できるため、開発速度と品質が向上します。',
    ],
    correctIndex: 1,
    explanation: 'Meta オブジェクトでコンポーネントを登録し、named export でストーリー（バリエーション）を定義します。',
  },
  {
    id: 'controls',
    question: '「Controls と Actions」について、正しい説明はどれですか？',
    options: [
      'addon-essentials に含まれる Controls で、ストーリーの args を UI パネルからリアルタイム変更できます。',
      'npx storybook@latest init',
      'Storybook は UI コンポーネントをアプリ本体から独立して開発・表示・テストする環境です。',
      'アプリを起動せずにコンポーネントの全バリエーションを確認できるため、開発速度と品質が向上します。',
    ],
    correctIndex: 0,
    explanation: 'addon-essentials に含まれる Controls で、ストーリーの args を UI パネルからリアルタイム変更できます。',
  },
  {
    id: 'docs',
    question: '「自動ドキュメント」について、正しい説明はどれですか？',
    options: [
      'アプリを起動せずにコンポーネントの全バリエーションを確認できるため、開発速度と品質が向上します。',
      'Storybook は UI コンポーネントをアプリ本体から独立して開発・表示・テストする環境です。',
      'npx storybook@latest init',
      'autodocs タグを付けると、コンポーネントの Props テーブル、全ストーリー、ソースコードが自動生成されます。',
    ],
    correctIndex: 3,
    explanation: 'autodocs タグを付けると、コンポーネントの Props テーブル、全ストーリー、ソースコードが自動生成されます。',
  },
  {
    id: 'composition',
    question: '「コンポーネントの合成」について、正しい説明はどれですか？',
    options: [
      'フォームやカードリストなど、複数コンポーネントを組み合わせたストーリーを render 関数で作成します。',
      'Storybook は UI コンポーネントをアプリ本体から独立して開発・表示・テストする環境です。',
      'アプリを起動せずにコンポーネントの全バリエーションを確認できるため、開発速度と品質が向上します。',
      'npx storybook@latest init',
    ],
    correctIndex: 0,
    explanation: 'フォームやカードリストなど、複数コンポーネントを組み合わせたストーリーを render 関数で作成します。',
  },
  {
    id: 'testing',
    question: '「テスト連携」について、正しい説明はどれですか？',
    options: [
      'アプリを起動せずにコンポーネントの全バリエーションを確認できるため、開発速度と品質が向上します。',
      'npx storybook@latest init',
      '@storybook/addon-interactions と @storybook/test で、ストーリー内のユーザー操作をテストします。',
      'Storybook は UI コンポーネントをアプリ本体から独立して開発・表示・テストする環境です。',
    ],
    correctIndex: 2,
    explanation: '@storybook/addon-interactions と @storybook/test で、ストーリー内のユーザー操作をテストします。',
  },
  {
    id: 'addons',
    question: '「アドオン」について、正しい説明はどれですか？',
    options: [
      'アプリを起動せずにコンポーネントの全バリエーションを確認できるため、開発速度と品質が向上します。',
      'npx storybook@latest init',
      'Storybook は UI コンポーネントをアプリ本体から独立して開発・表示・テストする環境です。',
      'addon-essentials には Controls、Actions、Docs、Viewport、Backgrounds、Measure、Outline が含まれます。',
    ],
    correctIndex: 3,
    explanation: 'addon-essentials には Controls、Actions、Docs、Viewport、Backgrounds、Measure、Outline が含まれます。',
  },
  {
    id: 'workflow',
    question: '「開発ワークフロー」について、正しい説明はどれですか？',
    options: [
      'Storybook は UI コンポーネントをアプリ本体から独立して開発・表示・テストする環境です。',
      'Storybook を Vercel や Chromatic にデプロイし、PR ごとにプレビュー URL を共有します。',
      'npx storybook@latest init',
      'アプリを起動せずにコンポーネントの全バリエーションを確認できるため、開発速度と品質が向上します。',
    ],
    correctIndex: 1,
    explanation: 'Storybook を Vercel や Chromatic にデプロイし、PR ごとにプレビュー URL を共有します。',
  },
  {
    id: 'next-steps',
    question: '「次のステップ」について、正しい説明はどれですか？',
    options: [
      '① Playwright 入門 — E2E テストとの連携 ② CSSアニメーション — コンポーネントのモーション ③ i18n 入門 — 多言語ストーリーの作成 ④ アク…',
      'Storybook は UI コンポーネントをアプリ本体から独立して開発・表示・テストする環境です。',
      'npx storybook@latest init',
      'アプリを起動せずにコンポーネントの全バリエーションを確認できるため、開発速度と品質が向上します。',
    ],
    correctIndex: 0,
    explanation: '① Playwright 入門 — E2E テストとの連携 ② CSSアニメーション — コンポーネントのモーション ③ i18n 入門 — 多言語ストーリーの作成 ④ アク…',
  },
]
