import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: '「フォームの基礎」について、正しい説明はどれですか？',
    options: [
      'form、input、select、textarea、button など HTML チュートリアルで学んだ要素がベースです。',
      'function LoginForm() {',
      '送信前にブラウザ側で入力を検証します。',
      '各入力に state を用意し、value と onChange で双方向に結びつけます。',
    ],
    correctIndex: 0,
    explanation: 'form、input、select、textarea、button など HTML チュートリアルで学んだ要素がベースです。',
  },
  {
    id: 'controlled',
    question: '「制御コンポーネント」について、正しい説明はどれですか？',
    options: [
      'form、input、select、textarea、button など HTML チュートリアルで学んだ要素がベースです。',
      '送信前にブラウザ側で入力を検証します。',
      'React では制御コンポーネントが主流です。',
      '各入力に state を用意し、value と onChange で双方向に結びつけます。',
    ],
    correctIndex: 3,
    explanation: '各入力に state を用意し、value と onChange で双方向に結びつけます。',
  },
  {
    id: 'validation',
    question: '「バリデーション」について、正しい説明はどれですか？',
    options: [
      'form、input、select、textarea、button など HTML チュートリアルで学んだ要素がベースです。',
      '送信前にブラウザ側で入力を検証します。',
      'function LoginForm() {',
      'React では制御コンポーネントが主流です。',
    ],
    correctIndex: 1,
    explanation: '送信前にブラウザ側で入力を検証します。',
  },
  {
    id: 'zod',
    question: '「Zod スキーマ」について、正しい説明はどれですか？',
    options: [
      'React では制御コンポーネントが主流です。',
      'TypeScript ファーストのスキーマバリデーションライブラリです。',
      'form、input、select、textarea、button など HTML チュートリアルで学んだ要素がベースです。',
      'function LoginForm() {',
    ],
    correctIndex: 1,
    explanation: 'TypeScript ファーストのスキーマバリデーションライブラリです。',
  },
  {
    id: 'rhf',
    question: '「React Hook Form」について、正しい説明はどれですか？',
    options: [
      '非制御コンポーネントベースで、再レンダリングを最小化するフォームライブラリです。',
      'function LoginForm() {',
      'form、input、select、textarea、button など HTML チュートリアルで学んだ要素がベースです。',
      'React では制御コンポーネントが主流です。',
    ],
    correctIndex: 0,
    explanation: '非制御コンポーネントベースで、再レンダリングを最小化するフォームライブラリです。',
  },
  {
    id: 'errors',
    question: '「エラー表示」について、正しい説明はどれですか？',
    options: [
      'function LoginForm() {',
      'form、input、select、textarea、button など HTML チュートリアルで学んだ要素がベースです。',
      'aria-invalid と aria-describedby でアクセシビリティ対応',
      'React では制御コンポーネントが主流です。',
    ],
    correctIndex: 2,
    explanation: 'aria-invalid と aria-describedby でアクセシビリティ対応',
  },
  {
    id: 'complex',
    question: '「複雑なフォーム」について、正しい説明はどれですか？',
    options: [
      'useFieldArray で「複数の連絡先」「タグの追加・削除」など動的なリストを管理します。',
      'function LoginForm() {',
      'form、input、select、textarea、button など HTML チュートリアルで学んだ要素がベースです。',
      'React では制御コンポーネントが主流です。',
    ],
    correctIndex: 0,
    explanation: 'useFieldArray で「複数の連絡先」「タグの追加・削除」など動的なリストを管理します。',
  },
  {
    id: 'submit',
    question: '「送信処理」について、正しい説明はどれですか？',
    options: [
      'React では制御コンポーネントが主流です。',
      'form、input、select、textarea、button など HTML チュートリアルで学んだ要素がベースです。',
      'function LoginForm() {',
      'バリデーション 2. ローディング状態を true 3. API 呼び出し 4. 成功 → リダイレクト or トースト 5. 失敗 → エラー表示 6. ローディング…',
    ],
    correctIndex: 3,
    explanation: 'バリデーション 2. ローディング状態を true 3. API 呼び出し 4. 成功 → リダイレクト or トースト 5. 失敗 → エラー表示 6. ローディング…',
  },
  {
    id: 'accessibility',
    question: '「フォームの a11y」について、正しい説明はどれですか？',
    options: [
      'function LoginForm() {',
      'すべての input に label。',
      'form、input、select、textarea、button など HTML チュートリアルで学んだ要素がベースです。',
      'React では制御コンポーネントが主流です。',
    ],
    correctIndex: 1,
    explanation: 'すべての input に label。',
  },
  {
    id: 'next-steps',
    question: '「次のステップ」について、正しい説明はどれですか？',
    options: [
      'form、input、select、textarea、button など HTML チュートリアルで学んだ要素がベースです。',
      'function LoginForm() {',
      'Conform — Remix チームのフォームライブラリ',
      'React では制御コンポーネントが主流です。',
    ],
    correctIndex: 2,
    explanation: 'Conform — Remix チームのフォームライブラリ',
  },
]
