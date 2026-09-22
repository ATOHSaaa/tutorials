import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: '「DevTools」について、正しい説明はどれですか？',
    options: [
      '/* Styles タブで試せる例 */',
      'Elements パネルでページの HTML 構造をリアルタイムに確認できます。',
      'console.log(\'ユーザー:\', user);',
      'Chrome DevTools、Firefox Developer Tools、Safari Web Inspector など、ブラウザに組み込まれたデバッグ・開発支援ツールです。',
    ],
    correctIndex: 3,
    explanation: 'Chrome DevTools、Firefox Developer Tools、Safari Web Inspector など、ブラウザに組み込まれたデバッグ・開発支援ツールです。',
  },
  {
    id: 'elements',
    question: '「Elements パネル」について、正しい説明はどれですか？',
    options: [
      'console.log(\'ユーザー:\', user);',
      'Chrome DevTools、Firefox Developer Tools、Safari Web Inspector など、ブラウザに組み込まれたデバッグ・開発支援ツールです。',
      'F12 または Ctrl+Shift+I（Mac: Cmd+Option+I）',
      'Elements パネルでページの HTML 構造をリアルタイムに確認できます。',
    ],
    correctIndex: 3,
    explanation: 'Elements パネルでページの HTML 構造をリアルタイムに確認できます。',
  },
  {
    id: 'console',
    question: '「Console」について、正しい説明はどれですか？',
    options: [
      'console.log（一般）、console.warn（警告）、console.error（エラー）、console.table（表形式）、console.group（グループ化）。',
      'Chrome DevTools、Firefox Developer Tools、Safari Web Inspector など、ブラウザに組み込まれたデバッグ・開発支援ツールです。',
      'F12 または Ctrl+Shift+I（Mac: Cmd+Option+I）',
      'Elements パネルでページの HTML 構造をリアルタイムに確認できます。',
    ],
    correctIndex: 0,
    explanation: 'console.log（一般）、console.warn（警告）、console.error（エラー）、console.table（表形式）、console.group（グループ化）。',
  },
  {
    id: 'network',
    question: '「Network」について、正しい説明はどれですか？',
    options: [
      'ページが発行するすべての HTTP リクエストを一覧表示します。',
      'Chrome DevTools、Firefox Developer Tools、Safari Web Inspector など、ブラウザに組み込まれたデバッグ・開発支援ツールです。',
      'Elements パネルでページの HTML 構造をリアルタイムに確認できます。',
      'F12 または Ctrl+Shift+I（Mac: Cmd+Option+I）',
    ],
    correctIndex: 0,
    explanation: 'ページが発行するすべての HTTP リクエストを一覧表示します。',
  },
  {
    id: 'sources',
    question: '「Sources / デバッガ」について、正しい説明はどれですか？',
    options: [
      'Elements パネルでページの HTML 構造をリアルタイムに確認できます。',
      'Sources パネルで行番号をクリックしてブレークポイントを設定。',
      'F12 または Ctrl+Shift+I（Mac: Cmd+Option+I）',
      'Chrome DevTools、Firefox Developer Tools、Safari Web Inspector など、ブラウザに組み込まれたデバッグ・開発支援ツールです。',
    ],
    correctIndex: 1,
    explanation: 'Sources パネルで行番号をクリックしてブレークポイントを設定。',
  },
  {
    id: 'performance',
    question: '「Performance」について、正しい説明はどれですか？',
    options: [
      'Chrome DevTools、Firefox Developer Tools、Safari Web Inspector など、ブラウザに組み込まれたデバッグ・開発支援ツールです。',
      'F12 または Ctrl+Shift+I（Mac: Cmd+Option+I）',
      'Record ボタンで数秒間の動作を記録。',
      'Elements パネルでページの HTML 構造をリアルタイムに確認できます。',
    ],
    correctIndex: 2,
    explanation: 'Record ボタンで数秒間の動作を記録。',
  },
  {
    id: 'responsive',
    question: '「レスポンシブモード」について、正しい説明はどれですか？',
    options: [
      'Chrome DevTools、Firefox Developer Tools、Safari Web Inspector など、ブラウザに組み込まれたデバッグ・開発支援ツールです。',
      'Ctrl+Shift+M（Mac: Cmd+Shift+M）でトグル。',
      'F12 または Ctrl+Shift+I（Mac: Cmd+Option+I）',
      'Elements パネルでページの HTML 構造をリアルタイムに確認できます。',
    ],
    correctIndex: 1,
    explanation: 'Ctrl+Shift+M（Mac: Cmd+Shift+M）でトグル。',
  },
  {
    id: 'storage',
    question: '「Application / Storage」について、正しい説明はどれですか？',
    options: [
      'Elements パネルでページの HTML 構造をリアルタイムに確認できます。',
      'F12 または Ctrl+Shift+I（Mac: Cmd+Option+I）',
      'Application パネルで localStorage、sessionStorage、Cookie、IndexedDB の内容を確認・編集・削除できます。',
      'Chrome DevTools、Firefox Developer Tools、Safari Web Inspector など、ブラウザに組み込まれたデバッグ・開発支援ツールです。',
    ],
    correctIndex: 2,
    explanation: 'Application パネルで localStorage、sessionStorage、Cookie、IndexedDB の内容を確認・編集・削除できます。',
  },
  {
    id: 'tips',
    question: '「便利なショートカット」について、正しい説明はどれですか？',
    options: [
      'Elements パネルでページの HTML 構造をリアルタイムに確認できます。',
      'Chrome DevTools、Firefox Developer Tools、Safari Web Inspector など、ブラウザに組み込まれたデバッグ・開発支援ツールです。',
      'Esc — Console ドロワーの表示/非表示',
      'F12 または Ctrl+Shift+I（Mac: Cmd+Option+I）',
    ],
    correctIndex: 2,
    explanation: 'Esc — Console ドロワーの表示/非表示',
  },
  {
    id: 'next-steps',
    question: '「次のステップ」について、正しい説明はどれですか？',
    options: [
      'Elements パネルでページの HTML 構造をリアルタイムに確認できます。',
      'F12 または Ctrl+Shift+I（Mac: Cmd+Option+I）',
      'Chrome DevTools、Firefox Developer Tools、Safari Web Inspector など、ブラウザに組み込まれたデバッグ・開発支援ツールです。',
      'Memory パネル — メモリリークの調査',
    ],
    correctIndex: 3,
    explanation: 'Memory パネル — メモリリークの調査',
  },
]
