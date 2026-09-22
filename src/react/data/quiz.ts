import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: '「React」について、正しい説明はどれですか？',
    options: [
      'JSX（JavaScript XML）は、JavaScript の中に HTML のような記法を書ける拡張です。',
      'function Greeting() {',
      'コンポーネントは「画面の部品」のことです。',
      'React は Facebook（現 Meta）が開発した JavaScript ライブラリです。',
    ],
    correctIndex: 3,
    explanation: 'React は Facebook（現 Meta）が開発した JavaScript ライブラリです。',
  },
  {
    id: 'jsx',
    question: '「JSX の基礎」について、正しい説明はどれですか？',
    options: [
      'React では画面を「コンポーネント」の組み合わせで作ります。',
      'JSX（JavaScript XML）は、JavaScript の中に HTML のような記法を書ける拡張です。',
      'コンポーネントは「画面の部品」のことです。',
      'React は Facebook（現 Meta）が開発した JavaScript ライブラリです。',
    ],
    correctIndex: 1,
    explanation: 'JSX（JavaScript XML）は、JavaScript の中に HTML のような記法を書ける拡張です。',
  },
  {
    id: 'components',
    question: '「コンポーネント」について、正しい説明はどれですか？',
    options: [
      'function Greeting() {',
      'コンポーネントは「画面の部品」のことです。',
      'React は Facebook（現 Meta）が開発した JavaScript ライブラリです。',
      'React では画面を「コンポーネント」の組み合わせで作ります。',
    ],
    correctIndex: 1,
    explanation: 'コンポーネントは「画面の部品」のことです。',
  },
  {
    id: 'props',
    question: '「Props（プロパティ）」について、正しい説明はどれですか？',
    options: [
      'React では画面を「コンポーネント」の組み合わせで作ります。',
      'React は Facebook（現 Meta）が開発した JavaScript ライブラリです。',
      'function Greeting() {',
      'Props は親コンポーネントから子コンポーネントへデータを渡すための仕組みです。',
    ],
    correctIndex: 3,
    explanation: 'Props は親コンポーネントから子コンポーネントへデータを渡すための仕組みです。',
  },
  {
    id: 'state',
    question: '「State（状態）」について、正しい説明はどれですか？',
    options: [
      'React は Facebook（現 Meta）が開発した JavaScript ライブラリです。',
      'React では画面を「コンポーネント」の組み合わせで作ります。',
      'function Greeting() {',
      'State はコンポーネント内で変化するデータを管理します。',
    ],
    correctIndex: 3,
    explanation: 'State はコンポーネント内で変化するデータを管理します。',
  },
  {
    id: 'events',
    question: '「イベント処理」について、正しい説明はどれですか？',
    options: [
      'React は Facebook（現 Meta）が開発した JavaScript ライブラリです。',
      'React では画面を「コンポーネント」の組み合わせで作ります。',
      'function Greeting() {',
      'React では onClick、onChange、onSubmit などの props でイベントを処理します。',
    ],
    correctIndex: 3,
    explanation: 'React では onClick、onChange、onSubmit などの props でイベントを処理します。',
  },
  {
    id: 'conditional',
    question: '「条件付きレンダリング」について、正しい説明はどれですか？',
    options: [
      'function Greeting() {',
      'React では画面を「コンポーネント」の組み合わせで作ります。',
      '条件に応じて異なる UI を表示できます。',
      'React は Facebook（現 Meta）が開発した JavaScript ライブラリです。',
    ],
    correctIndex: 2,
    explanation: '条件に応じて異なる UI を表示できます。',
  },
  {
    id: 'lists',
    question: '「リストと key」について、正しい説明はどれですか？',
    options: [
      '配列の map メソッドで、各要素をコンポーネントに変換して一覧表示します。',
      'React では画面を「コンポーネント」の組み合わせで作ります。',
      'function Greeting() {',
      'React は Facebook（現 Meta）が開発した JavaScript ライブラリです。',
    ],
    correctIndex: 0,
    explanation: '配列の map メソッドで、各要素をコンポーネントに変換して一覧表示します。',
  },
  {
    id: 'effects',
    question: '「useEffect」について、正しい説明はどれですか？',
    options: [
      'React では画面を「コンポーネント」の組み合わせで作ります。',
      'useEffect は「副作用」を処理するフックです。',
      'React は Facebook（現 Meta）が開発した JavaScript ライブラリです。',
      'function Greeting() {',
    ],
    correctIndex: 1,
    explanation: 'useEffect は「副作用」を処理するフックです。',
  },
  {
    id: 'forms',
    question: '「フォーム」について、正しい説明はどれですか？',
    options: [
      'function Greeting() {',
      'React では画面を「コンポーネント」の組み合わせで作ります。',
      'React は Facebook（現 Meta）が開発した JavaScript ライブラリです。',
      'React ではフォームの値を State で管理する「制御コンポーネント」パターンが推奨されます。',
    ],
    correctIndex: 3,
    explanation: 'React ではフォームの値を State で管理する「制御コンポーネント」パターンが推奨されます。',
  },
]
