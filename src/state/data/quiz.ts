import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: '「状態管理」について、正しい説明はどれですか？',
    options: [
      '兄弟コンポーネント間で状態を共有するには、状態を親に「持ち上げ」、Props で子に渡します。',
      'const ThemeContext = createContext(\'light\');',
      'function Parent() {',
      'アプリが「今どうなっているか」を表すデータです。',
    ],
    correctIndex: 3,
    explanation: 'アプリが「今どうなっているか」を表すデータです。',
  },
  {
    id: 'lifting',
    question: '「状態のリフトアップ」について、正しい説明はどれですか？',
    options: [
      'クライアント状態 — UI の開閉、テーマ、フォーム入力など、アプリ内だけで完結',
      'const ThemeContext = createContext(\'light\');',
      '兄弟コンポーネント間で状態を共有するには、状態を親に「持ち上げ」、Props で子に渡します。',
      'アプリが「今どうなっているか」を表すデータです。',
    ],
    correctIndex: 2,
    explanation: '兄弟コンポーネント間で状態を共有するには、状態を親に「持ち上げ」、Props で子に渡します。',
  },
  {
    id: 'context',
    question: '「Context API」について、正しい説明はどれですか？',
    options: [
      'アプリが「今どうなっているか」を表すデータです。',
      'function Parent() {',
      'クライアント状態 — UI の開閉、テーマ、フォーム入力など、アプリ内だけで完結',
      'createContext でコンテキストを作り、Provider で値を提供、useContext で子が取得します。',
    ],
    correctIndex: 3,
    explanation: 'createContext でコンテキストを作り、Provider で値を提供、useContext で子が取得します。',
  },
  {
    id: 'zustand',
    question: '「Zustand 入門」について、正しい説明はどれですか？',
    options: [
      'function Parent() {',
      'アプリが「今どうなっているか」を表すデータです。',
      '最小限の API でグローバル状態を管理するライブラリです。',
      'クライアント状態 — UI の開閉、テーマ、フォーム入力など、アプリ内だけで完結',
    ],
    correctIndex: 2,
    explanation: '最小限の API でグローバル状態を管理するライブラリです。',
  },
  {
    id: 'selectors',
    question: '「セレクタと派生状態」について、正しい説明はどれですか？',
    options: [
      '元の状態から計算できる値は、別の state に持たずに都度計算します。',
      'function Parent() {',
      'アプリが「今どうなっているか」を表すデータです。',
      'クライアント状態 — UI の開閉、テーマ、フォーム入力など、アプリ内だけで完結',
    ],
    correctIndex: 0,
    explanation: '元の状態から計算できる値は、別の state に持たずに都度計算します。',
  },
  {
    id: 'async',
    question: '「サーバー状態」について、正しい説明はどれですか？',
    options: [
      'アプリが「今どうなっているか」を表すデータです。',
      'クライアント状態 — UI の開閉、テーマ、フォーム入力など、アプリ内だけで完結',
      'function Parent() {',
      '手動で fetch すると、ローディング・エラー・キャッシュ・再取得・重複リクエストをすべて自分で管理する必要があります。',
    ],
    correctIndex: 3,
    explanation: '手動で fetch すると、ローディング・エラー・キャッシュ・再取得・重複リクエストをすべて自分で管理する必要があります。',
  },
  {
    id: 'tanstack',
    question: '「TanStack Query」について、正しい説明はどれですか？',
    options: [
      'function Parent() {',
      'アプリが「今どうなっているか」を表すデータです。',
      'クライアント状態 — UI の開閉、テーマ、フォーム入力など、アプリ内だけで完結',
      'クエリキーとフェッチ関数を渡すだけで、data / isLoading / isError / refetch が使えます。',
    ],
    correctIndex: 3,
    explanation: 'クエリキーとフェッチ関数を渡すだけで、data / isLoading / isError / refetch が使えます。',
  },
  {
    id: 'patterns',
    question: '「よくあるパターン」について、正しい説明はどれですか？',
    options: [
      '検索クエリ、ページ番号、タブの選択——URL に載せられる状態は URL に。',
      'クライアント状態 — UI の開閉、テーマ、フォーム入力など、アプリ内だけで完結',
      'アプリが「今どうなっているか」を表すデータです。',
      'function Parent() {',
    ],
    correctIndex: 0,
    explanation: '検索クエリ、ページ番号、タブの選択——URL に載せられる状態は URL に。',
  },
  {
    id: 'comparison',
    question: '「比較と選び方」について、正しい説明はどれですか？',
    options: [
      'TanStack Query — サーバーからのデータ',
      'アプリが「今どうなっているか」を表すデータです。',
      'クライアント状態 — UI の開閉、テーマ、フォーム入力など、アプリ内だけで完結',
      'function Parent() {',
    ],
    correctIndex: 0,
    explanation: 'TanStack Query — サーバーからのデータ',
  },
  {
    id: 'next-steps',
    question: '「次のステップ」について、正しい説明はどれですか？',
    options: [
      'Jotai / Recoil — アトミックな状態管理',
      'アプリが「今どうなっているか」を表すデータです。',
      'クライアント状態 — UI の開閉、テーマ、フォーム入力など、アプリ内だけで完結',
      'function Parent() {',
    ],
    correctIndex: 0,
    explanation: 'Jotai / Recoil — アトミックな状態管理',
  },
]
