import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: '「DOM」について、正しい説明はどれですか？',
    options: [
      'DOM（Document Object Model）は、ブラウザが HTML を読み込んだときに作られる「木構造のオブジェクト」です。',
      'const el = document.querySelector(\'#message\');',
      'const title = document.querySelector(\'h1\');',
      'CSS セレクタと同じ書き方で要素を取得できます。',
    ],
    correctIndex: 0,
    explanation: 'DOM（Document Object Model）は、ブラウザが HTML を読み込んだときに作られる「木構造のオブジェクト」です。',
  },
  {
    id: 'selecting',
    question: '「要素の取得」について、正しい説明はどれですか？',
    options: [
      'HTML は設計図、DOM はその設計図を JavaScript で操作できる形にしたもの——と考えるとわかりやすいです。',
      'CSS セレクタと同じ書き方で要素を取得できます。',
      'DOM（Document Object Model）は、ブラウザが HTML を読み込んだときに作られる「木構造のオブジェクト」です。',
      'const el = document.querySelector(\'#message\');',
    ],
    correctIndex: 1,
    explanation: 'CSS セレクタと同じ書き方で要素を取得できます。',
  },
  {
    id: 'modifying',
    question: '「内容の変更」について、正しい説明はどれですか？',
    options: [
      'HTML は設計図、DOM はその設計図を JavaScript で操作できる形にしたもの——と考えるとわかりやすいです。',
      'const title = document.querySelector(\'h1\');',
      'textContent はテキストのみ（HTML タグはエスケープ）。',
      'DOM（Document Object Model）は、ブラウザが HTML を読み込んだときに作られる「木構造のオブジェクト」です。',
    ],
    correctIndex: 2,
    explanation: 'textContent はテキストのみ（HTML タグはエスケープ）。',
  },
  {
    id: 'attributes',
    question: '「属性とクラス」について、正しい説明はどれですか？',
    options: [
      'const title = document.querySelector(\'h1\');',
      'getAttribute、setAttribute、removeAttribute。',
      'HTML は設計図、DOM はその設計図を JavaScript で操作できる形にしたもの——と考えるとわかりやすいです。',
      'DOM（Document Object Model）は、ブラウザが HTML を読み込んだときに作られる「木構造のオブジェクト」です。',
    ],
    correctIndex: 1,
    explanation: 'getAttribute、setAttribute、removeAttribute。',
  },
  {
    id: 'styles',
    question: '「スタイルの操作」について、正しい説明はどれですか？',
    options: [
      'HTML は設計図、DOM はその設計図を JavaScript で操作できる形にしたもの——と考えるとわかりやすいです。',
      'インラインスタイルを直接変更。キャメルケースで書きます（background-color → backgroundColor）。',
      'DOM（Document Object Model）は、ブラウザが HTML を読み込んだときに作られる「木構造のオブジェクト」です。',
      'const title = document.querySelector(\'h1\');',
    ],
    correctIndex: 1,
    explanation: 'インラインスタイルを直接変更。キャメルケースで書きます（background-color → backgroundColor）。',
  },
  {
    id: 'events',
    question: '「イベントリスナー」について、正しい説明はどれですか？',
    options: [
      'const title = document.querySelector(\'h1\');',
      '要素にイベントリスナーを登録。第1引数はイベント名、第2引数はハンドラ関数。',
      'HTML は設計図、DOM はその設計図を JavaScript で操作できる形にしたもの——と考えるとわかりやすいです。',
      'DOM（Document Object Model）は、ブラウザが HTML を読み込んだときに作られる「木構造のオブジェクト」です。',
    ],
    correctIndex: 1,
    explanation: '要素にイベントリスナーを登録。第1引数はイベント名、第2引数はハンドラ関数。',
  },
  {
    id: 'delegation',
    question: '「イベント委譲」について、正しい説明はどれですか？',
    options: [
      '子要素それぞれにリスナーを付ける代わりに、親に1つだけ付けて event.target でどの子がクリックされたか判定します。',
      'HTML は設計図、DOM はその設計図を JavaScript で操作できる形にしたもの——と考えるとわかりやすいです。',
      'const title = document.querySelector(\'h1\');',
      'DOM（Document Object Model）は、ブラウザが HTML を読み込んだときに作られる「木構造のオブジェクト」です。',
    ],
    correctIndex: 0,
    explanation: '子要素それぞれにリスナーを付ける代わりに、親に1つだけ付けて event.target でどの子がクリックされたか判定します。',
  },
  {
    id: 'creating',
    question: '「要素の作成と削除」について、正しい説明はどれですか？',
    options: [
      '新しい要素を作り、親に追加します。現代的な API は append / prepend / remove です。',
      'const title = document.querySelector(\'h1\');',
      'DOM（Document Object Model）は、ブラウザが HTML を読み込んだときに作られる「木構造のオブジェクト」です。',
      'HTML は設計図、DOM はその設計図を JavaScript で操作できる形にしたもの——と考えるとわかりやすいです。',
    ],
    correctIndex: 0,
    explanation: '新しい要素を作り、親に追加します。現代的な API は append / prepend / remove です。',
  },
  {
    id: 'traversal',
    question: '「DOM ツリーの走査」について、正しい説明はどれですか？',
    options: [
      'HTML は設計図、DOM はその設計図を JavaScript で操作できる形にしたもの——と考えるとわかりやすいです。',
      'DOM（Document Object Model）は、ブラウザが HTML を読み込んだときに作られる「木構造のオブジェクト」です。',
      'const title = document.querySelector(\'h1\');',
      'parentElement、children、firstElementChild、nextElementSibling など。',
    ],
    correctIndex: 3,
    explanation: 'parentElement、children、firstElementChild、nextElementSibling など。',
  },
  {
    id: 'next-steps',
    question: '「次のステップ」について、正しい説明はどれですか？',
    options: [
      'const title = document.querySelector(\'h1\');',
      'DOM（Document Object Model）は、ブラウザが HTML を読み込んだときに作られる「木構造のオブジェクト」です。',
      'React では直接 DOM を触りません。',
      'HTML は設計図、DOM はその設計図を JavaScript で操作できる形にしたもの——と考えるとわかりやすいです。',
    ],
    correctIndex: 2,
    explanation: 'React では直接 DOM を触りません。',
  },
]
