import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: '「TypeScript」について、正しい説明はどれですか？',
    options: [
      'インターフェースはオブジェクトの「設計図」です。',
      'TypeScript（TS）は、Microsoft が開発した JavaScript に「型」を追加した言語です。',
      '変数名の後に : 型名 を書くのが「型注釈」です。',
      'const name: string = "太郎";',
    ],
    correctIndex: 1,
    explanation: 'TypeScript（TS）は、Microsoft が開発した JavaScript に「型」を追加した言語です。',
  },
  {
    id: 'basic-types',
    question: '「基本の型」について、正しい説明はどれですか？',
    options: [
      'ブラウザは TypeScript を直接実行できないので、ビルド時に JavaScript に変換（コンパイル）してから使います。',
      'TypeScript（TS）は、Microsoft が開発した JavaScript に「型」を追加した言語です。',
      '変数名の後に : 型名 を書くのが「型注釈」です。',
      'インターフェースはオブジェクトの「設計図」です。',
    ],
    correctIndex: 2,
    explanation: '変数名の後に : 型名 を書くのが「型注釈」です。',
  },
  {
    id: 'interfaces',
    question: '「インターフェース」について、正しい説明はどれですか？',
    options: [
      'const name: string = "太郎";',
      'TypeScript（TS）は、Microsoft が開発した JavaScript に「型」を追加した言語です。',
      'ブラウザは TypeScript を直接実行できないので、ビルド時に JavaScript に変換（コンパイル）してから使います。',
      'インターフェースはオブジェクトの「設計図」です。',
    ],
    correctIndex: 3,
    explanation: 'インターフェースはオブジェクトの「設計図」です。',
  },
  {
    id: 'functions',
    question: '「関数の型」について、正しい説明はどれですか？',
    options: [
      'const name: string = "太郎";',
      'TypeScript（TS）は、Microsoft が開発した JavaScript に「型」を追加した言語です。',
      'ブラウザは TypeScript を直接実行できないので、ビルド時に JavaScript に変換（コンパイル）してから使います。',
      '引数と戻り値に型を書きます。これにより、間違った型の値を渡したり、間違った型を返したりするとエラーになります。',
    ],
    correctIndex: 3,
    explanation: '引数と戻り値に型を書きます。これにより、間違った型の値を渡したり、間違った型を返したりするとエラーになります。',
  },
  {
    id: 'arrays-objects',
    question: '「配列とオブジェクトの型」について、正しい説明はどれですか？',
    options: [
      'ブラウザは TypeScript を直接実行できないので、ビルド時に JavaScript に変換（コンパイル）してから使います。',
      'TypeScript（TS）は、Microsoft が開発した JavaScript に「型」を追加した言語です。',
      'const name: string = "太郎";',
      '要素の型を指定します。string[] または Array<string> の2つの書き方があります。',
    ],
    correctIndex: 3,
    explanation: '要素の型を指定します。string[] または Array<string> の2つの書き方があります。',
  },
  {
    id: 'union-optional',
    question: '「ユニオンとオプショナル」について、正しい説明はどれですか？',
    options: [
      'TypeScript（TS）は、Microsoft が開発した JavaScript に「型」を追加した言語です。',
      'const name: string = "太郎";',
      '「A または B」のどちらかの型を受け入れます。',
      'ブラウザは TypeScript を直接実行できないので、ビルド時に JavaScript に変換（コンパイル）してから使います。',
    ],
    correctIndex: 2,
    explanation: '「A または B」のどちらかの型を受け入れます。',
  },
  {
    id: 'generics',
    question: '「ジェネリクス」について、正しい説明はどれですか？',
    options: [
      'ブラウザは TypeScript を直接実行できないので、ビルド時に JavaScript に変換（コンパイル）してから使います。',
      'const name: string = "太郎";',
      'TypeScript（TS）は、Microsoft が開発した JavaScript に「型」を追加した言語です。',
      'ジェネリクスは「型の変数」です。関数やクラスが、どんな型のデータでも扱えるようにしつつ、型安全を保てます。',
    ],
    correctIndex: 3,
    explanation: 'ジェネリクスは「型の変数」です。関数やクラスが、どんな型のデータでも扱えるようにしつつ、型安全を保てます。',
  },
  {
    id: 'inference',
    question: '「型推論」について、正しい説明はどれですか？',
    options: [
      'TypeScript は賢いので、型を書かなくても値から型を推測します。',
      'TypeScript（TS）は、Microsoft が開発した JavaScript に「型」を追加した言語です。',
      'const name: string = "太郎";',
      'ブラウザは TypeScript を直接実行できないので、ビルド時に JavaScript に変換（コンパイル）してから使います。',
    ],
    correctIndex: 0,
    explanation: 'TypeScript は賢いので、型を書かなくても値から型を推測します。',
  },
  {
    id: 'react-ts',
    question: '「React + TypeScript」について、正しい説明はどれですか？',
    options: [
      'const name: string = "太郎";',
      'React コンポーネントの props に interface で型を付けます。',
      'ブラウザは TypeScript を直接実行できないので、ビルド時に JavaScript に変換（コンパイル）してから使います。',
      'TypeScript（TS）は、Microsoft が開発した JavaScript に「型」を追加した言語です。',
    ],
    correctIndex: 1,
    explanation: 'React コンポーネントの props に interface で型を付けます。',
  },
  {
    id: 'next-steps',
    question: '「次のステップ」について、正しい説明はどれですか？',
    options: [
      'const name: string = "太郎";',
      'ブラウザは TypeScript を直接実行できないので、ビルド時に JavaScript に変換（コンパイル）してから使います。',
      'さらに学ぶなら、ユーティリティ型（Partial, Pick, Omit）、型ガード、モジュールの型定義、strict モードの設定などが次のステップです。',
      'TypeScript（TS）は、Microsoft が開発した JavaScript に「型」を追加した言語です。',
    ],
    correctIndex: 2,
    explanation: 'さらに学ぶなら、ユーティリティ型（Partial, Pick, Omit）、型ガード、モジュールの型定義、strict モードの設定などが次のステップです。',
  },
]
