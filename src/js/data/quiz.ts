import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: '「JavaScript」について、正しい説明はどれですか？',
    options: [
      'const message = "こんにちは"; // 文字列',
      '変数は「データを入れておく箱」です。名前を付けて値を保存し、後から使えます。',
      'const name = "太郎"; // 定数（変えられない）',
      'JavaScript（JS）は、Web ページに「動き」や「インタラクション」を付けるプログラミング言語です。',
    ],
    correctIndex: 3,
    explanation: 'JavaScript（JS）は、Web ページに「動き」や「インタラクション」を付けるプログラミング言語です。',
  },
  {
    id: 'variables',
    question: '「変数」について、正しい説明はどれですか？',
    options: [
      'JavaScript（JS）は、Web ページに「動き」や「インタラクション」を付けるプログラミング言語です。',
      'ボタンを押したら何かが起きる、フォームを送信する、画像をスライドショーにする——こういった動きはすべて JavaScript で作られています。',
      'const message = "こんにちは"; // 文字列',
      '変数は「データを入れておく箱」です。名前を付けて値を保存し、後から使えます。',
    ],
    correctIndex: 3,
    explanation: '変数は「データを入れておく箱」です。名前を付けて値を保存し、後から使えます。',
  },
  {
    id: 'types',
    question: '「データ型」について、正しい説明はどれですか？',
    options: [
      'JavaScript にはいくつかの基本的なデータ型があります。',
      'JavaScript（JS）は、Web ページに「動き」や「インタラクション」を付けるプログラミング言語です。',
      'ボタンを押したら何かが起きる、フォームを送信する、画像をスライドショーにする——こういった動きはすべて JavaScript で作られています。',
      'const name = "太郎"; // 定数（変えられない）',
    ],
    correctIndex: 0,
    explanation: 'JavaScript にはいくつかの基本的なデータ型があります。',
  },
  {
    id: 'operators',
    question: '「演算子」について、正しい説明はどれですか？',
    options: [
      'const name = "太郎"; // 定数（変えられない）',
      '+, -, *, / で四則演算ができます。',
      'JavaScript（JS）は、Web ページに「動き」や「インタラクション」を付けるプログラミング言語です。',
      'ボタンを押したら何かが起きる、フォームを送信する、画像をスライドショーにする——こういった動きはすべて JavaScript で作られています。',
    ],
    correctIndex: 1,
    explanation: '+, -, *, / で四則演算ができます。',
  },
  {
    id: 'conditions',
    question: '「条件分岐」について、正しい説明はどれですか？',
    options: [
      'ボタンを押したら何かが起きる、フォームを送信する、画像をスライドショーにする——こういった動きはすべて JavaScript で作られています。',
      'const name = "太郎"; // 定数（変えられない）',
      '「もし〜なら、こうする」という処理を書けます。',
      'JavaScript（JS）は、Web ページに「動き」や「インタラクション」を付けるプログラミング言語です。',
    ],
    correctIndex: 2,
    explanation: '「もし〜なら、こうする」という処理を書けます。',
  },
  {
    id: 'loops',
    question: '「ループ」について、正しい説明はどれですか？',
    options: [
      'JavaScript（JS）は、Web ページに「動き」や「インタラクション」を付けるプログラミング言語です。',
      'const name = "太郎"; // 定数（変えられない）',
      'ボタンを押したら何かが起きる、フォームを送信する、画像をスライドショーにする——こういった動きはすべて JavaScript で作られています。',
      '決まった回数だけ処理を繰り返します。配列の各要素を1つずつ処理するときによく使います。',
    ],
    correctIndex: 3,
    explanation: '決まった回数だけ処理を繰り返します。配列の各要素を1つずつ処理するときによく使います。',
  },
  {
    id: 'functions',
    question: '「関数」について、正しい説明はどれですか？',
    options: [
      '関数は「処理のまとまり」です。同じ計算や処理を何度も書く代わりに、関数にまとめて名前を付け、必要なときに呼び出します。',
      'const name = "太郎"; // 定数（変えられない）',
      'JavaScript（JS）は、Web ページに「動き」や「インタラクション」を付けるプログラミング言語です。',
      'ボタンを押したら何かが起きる、フォームを送信する、画像をスライドショーにする——こういった動きはすべて JavaScript で作られています。',
    ],
    correctIndex: 0,
    explanation: '関数は「処理のまとまり」です。同じ計算や処理を何度も書く代わりに、関数にまとめて名前を付け、必要なときに呼び出します。',
  },
  {
    id: 'arrays',
    question: '「配列とオブジェクト」について、正しい説明はどれですか？',
    options: [
      'ボタンを押したら何かが起きる、フォームを送信する、画像をスライドショーにする——こういった動きはすべて JavaScript で作られています。',
      'JavaScript（JS）は、Web ページに「動き」や「インタラクション」を付けるプログラミング言語です。',
      'const name = "太郎"; // 定数（変えられない）',
      '配列は複数の値を順番に並べたリストです。',
    ],
    correctIndex: 3,
    explanation: '配列は複数の値を順番に並べたリストです。',
  },
  {
    id: 'dom',
    question: '「DOM 操作」について、正しい説明はどれですか？',
    options: [
      'JavaScript（JS）は、Web ページに「動き」や「インタラクション」を付けるプログラミング言語です。',
      'const name = "太郎"; // 定数（変えられない）',
      'ボタンを押したら何かが起きる、フォームを送信する、画像をスライドショーにする——こういった動きはすべて JavaScript で作られています。',
      'DOM（Document Object Model）は、HTML を JavaScript から操作できるようにしたものです。',
    ],
    correctIndex: 3,
    explanation: 'DOM（Document Object Model）は、HTML を JavaScript から操作できるようにしたものです。',
  },
  {
    id: 'next-steps',
    question: '「次のステップ」について、正しい説明はどれですか？',
    options: [
      'JavaScript（JS）は、Web ページに「動き」や「インタラクション」を付けるプログラミング言語です。',
      'const name = "太郎"; // 定数（変えられない）',
      'ボタンを押したら何かが起きる、フォームを送信する、画像をスライドショーにする——こういった動きはすべて JavaScript で作られています。',
      'このチュートリアルで学んだのは JavaScript の基礎です。',
    ],
    correctIndex: 3,
    explanation: 'このチュートリアルで学んだのは JavaScript の基礎です。',
  },
]
