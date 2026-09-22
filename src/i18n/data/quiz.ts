import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: '「i18n」について、正しい説明はどれですか？',
    options: [
      'i18n（internationalization）はアプリを多言語対応可能にする設計・実装。',
      'UI テキストをハードコードせず、翻訳キーで参照します。',
      'npm install next-intl',
      'next-intl は Next.js App Router に最適化された i18n ライブラリです。',
    ],
    correctIndex: 0,
    explanation: 'i18n（internationalization）はアプリを多言語対応可能にする設計・実装。',
  },
  {
    id: 'basics',
    question: '「基本的な実装」について、正しい説明はどれですか？',
    options: [
      'UI テキストをハードコードせず、翻訳キーで参照します。',
      '「i18n」は i と n の間に18文字——internationalization の略です。',
      'npm install next-intl',
      'i18n（internationalization）はアプリを多言語対応可能にする設計・実装。',
    ],
    correctIndex: 0,
    explanation: 'UI テキストをハードコードせず、翻訳キーで参照します。',
  },
  {
    id: 'next-intl',
    question: '「next-intl」について、正しい説明はどれですか？',
    options: [
      'i18n（internationalization）はアプリを多言語対応可能にする設計・実装。',
      'UI テキストをハードコードせず、翻訳キーで参照します。',
      'next-intl は Next.js App Router に最適化された i18n ライブラリです。',
      '「i18n」は i と n の間に18文字——internationalization の略です。',
    ],
    correctIndex: 2,
    explanation: 'next-intl は Next.js App Router に最適化された i18n ライブラリです。',
  },
  {
    id: 'react-i18next',
    question: '「react-i18next」について、正しい説明はどれですか？',
    options: [
      'react-i18next は React で最も広く使われる i18n ライブラリです。',
      'UI テキストをハードコードせず、翻訳キーで参照します。',
      '「i18n」は i と n の間に18文字——internationalization の略です。',
      'i18n（internationalization）はアプリを多言語対応可能にする設計・実装。',
    ],
    correctIndex: 0,
    explanation: 'react-i18next は React で最も広く使われる i18n ライブラリです。',
  },
  {
    id: 'formatting',
    question: '「日付・数値・通貨」について、正しい説明はどれですか？',
    options: [
      'UI テキストをハードコードせず、翻訳キーで参照します。',
      'ブラウザ標準の Intl API で日付、数値、通貨をロケールに応じてフォーマットします。',
      '「i18n」は i と n の間に18文字——internationalization の略です。',
      'i18n（internationalization）はアプリを多言語対応可能にする設計・実装。',
    ],
    correctIndex: 1,
    explanation: 'ブラウザ標準の Intl API で日付、数値、通貨をロケールに応じてフォーマットします。',
  },
  {
    id: 'pluralization',
    question: '「複数形の処理」について、正しい説明はどれですか？',
    options: [
      'i18n（internationalization）はアプリを多言語対応可能にする設計・実装。',
      'UI テキストをハードコードせず、翻訳キーで参照します。',
      '「i18n」は i と n の間に18文字——internationalization の略です。',
      '英語は one/other の2形、日本語は複数形の区別なし、ロシア語は3形、ポーランド語は4形——言語ごとに複数形ルールが異なります。',
    ],
    correctIndex: 3,
    explanation: '英語は one/other の2形、日本語は複数形の区別なし、ロシア語は3形、ポーランド語は4形——言語ごとに複数形ルールが異なります。',
  },
  {
    id: 'routing',
    question: '「多言語ルーティング」について、正しい説明はどれですか？',
    options: [
      '「i18n」は i と n の間に18文字——internationalization の略です。',
      'UI テキストをハードコードせず、翻訳キーで参照します。',
      'サブパス（/ja/about、/en/about）、サブドメイン（ja.example.com）、クエリパラメータ（?',
      'i18n（internationalization）はアプリを多言語対応可能にする設計・実装。',
    ],
    correctIndex: 2,
    explanation: 'サブパス（/ja/about、/en/about）、サブドメイン（ja.example.com）、クエリパラメータ（?',
  },
  {
    id: 'rtl',
    question: '「RTL 対応」について、正しい説明はどれですか？',
    options: [
      'アラビア語、ヘブライ語、ペルシア語などは右から左（RTL）に読みます。',
      'i18n（internationalization）はアプリを多言語対応可能にする設計・実装。',
      '「i18n」は i と n の間に18文字——internationalization の略です。',
      'UI テキストをハードコードせず、翻訳キーで参照します。',
    ],
    correctIndex: 0,
    explanation: 'アラビア語、ヘブライ語、ペルシア語などは右から左（RTL）に読みます。',
  },
  {
    id: 'workflow',
    question: '「翻訳ワークフロー」について、正しい説明はどれですか？',
    options: [
      'i18n（internationalization）はアプリを多言語対応可能にする設計・実装。',
      'JSON や YAML で翻訳を管理し、Git でバージョン管理します。',
      '「i18n」は i と n の間に18文字——internationalization の略です。',
      'UI テキストをハードコードせず、翻訳キーで参照します。',
    ],
    correctIndex: 1,
    explanation: 'JSON や YAML で翻訳を管理し、Git でバージョン管理します。',
  },
  {
    id: 'next-steps',
    question: '「次のステップ」について、正しい説明はどれですか？',
    options: [
      'UI テキストをハードコードせず、翻訳キーで参照します。',
      'i18n（internationalization）はアプリを多言語対応可能にする設計・実装。',
      '「i18n」は i と n の間に18文字——internationalization の略です。',
      '① SEO 入門 — 多言語 SEO ② Storybook 入門 — 多言語ストーリー ③ CSSアニメーション — RTL アニメーション ④ Next.js — App…',
    ],
    correctIndex: 3,
    explanation: '① SEO 入門 — 多言語 SEO ② Storybook 入門 — 多言語ストーリー ③ CSSアニメーション — RTL アニメーション ④ Next.js — App…',
  },
]
