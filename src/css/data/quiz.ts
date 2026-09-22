import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: '「CSS」について、正しい説明はどれですか？',
    options: [
      'CSS で色を指定する主な方法は3つです。',
      'p { color: gray; } /* すべての段落 */',
      'CSS（Cascading Style Sheets）は、Web ページの「見た目」を整えるための言語です。',
      'セレクタは「スタイルを当てる対象を選ぶ道具」です。',
    ],
    correctIndex: 2,
    explanation: 'CSS（Cascading Style Sheets）は、Web ページの「見た目」を整えるための言語です。',
  },
  {
    id: 'selectors',
    question: '「セレクタ」について、正しい説明はどれですか？',
    options: [
      '色、フォント、余白、レイアウトなど、ユーザーが目にするすべてのデザインは CSS で制御します。',
      'CSS で色を指定する主な方法は3つです。',
      'CSS（Cascading Style Sheets）は、Web ページの「見た目」を整えるための言語です。',
      'セレクタは「スタイルを当てる対象を選ぶ道具」です。',
    ],
    correctIndex: 3,
    explanation: 'セレクタは「スタイルを当てる対象を選ぶ道具」です。',
  },
  {
    id: 'colors',
    question: '「色と背景」について、正しい説明はどれですか？',
    options: [
      'CSS（Cascading Style Sheets）は、Web ページの「見た目」を整えるための言語です。',
      '色、フォント、余白、レイアウトなど、ユーザーが目にするすべてのデザインは CSS で制御します。',
      'CSS で色を指定する主な方法は3つです。',
      'セレクタは「スタイルを当てる対象を選ぶ道具」です。',
    ],
    correctIndex: 2,
    explanation: 'CSS で色を指定する主な方法は3つです。',
  },
  {
    id: 'text',
    question: '「テキストのスタイル」について、正しい説明はどれですか？',
    options: [
      '色、フォント、余白、レイアウトなど、ユーザーが目にするすべてのデザインは CSS で制御します。',
      'font-size で文字の大きさ、font-weight で太さを指定します。',
      'セレクタは「スタイルを当てる対象を選ぶ道具」です。',
      'CSS（Cascading Style Sheets）は、Web ページの「見た目」を整えるための言語です。',
    ],
    correctIndex: 1,
    explanation: 'font-size で文字の大きさ、font-weight で太さを指定します。',
  },
  {
    id: 'box-model',
    question: '「ボックスモデル」について、正しい説明はどれですか？',
    options: [
      'CSS（Cascading Style Sheets）は、Web ページの「見た目」を整えるための言語です。',
      'セレクタは「スタイルを当てる対象を選ぶ道具」です。',
      '色、フォント、余白、レイアウトなど、ユーザーが目にするすべてのデザインは CSS で制御します。',
      'CSS では、すべての HTML 要素は「箱（ボックス）」として扱われます。',
    ],
    correctIndex: 3,
    explanation: 'CSS では、すべての HTML 要素は「箱（ボックス）」として扱われます。',
  },
  {
    id: 'flexbox',
    question: '「Flexbox」について、正しい説明はどれですか？',
    options: [
      'セレクタは「スタイルを当てる対象を選ぶ道具」です。',
      '色、フォント、余白、レイアウトなど、ユーザーが目にするすべてのデザインは CSS で制御します。',
      'CSS（Cascading Style Sheets）は、Web ページの「見た目」を整えるための言語です。',
      'Flexbox は要素を「柔軟に（flexible）」並べるためのレイアウト手法です。',
    ],
    correctIndex: 3,
    explanation: 'Flexbox は要素を「柔軟に（flexible）」並べるためのレイアウト手法です。',
  },
  {
    id: 'grid',
    question: '「Grid」について、正しい説明はどれですか？',
    options: [
      'Grid は要素を「格子（グリッド）」状に並べるレイアウト手法です。',
      '色、フォント、余白、レイアウトなど、ユーザーが目にするすべてのデザインは CSS で制御します。',
      'CSS（Cascading Style Sheets）は、Web ページの「見た目」を整えるための言語です。',
      'セレクタは「スタイルを当てる対象を選ぶ道具」です。',
    ],
    correctIndex: 0,
    explanation: 'Grid は要素を「格子（グリッド）」状に並べるレイアウト手法です。',
  },
  {
    id: 'pseudo',
    question: '「疑似クラス」について、正しい説明はどれですか？',
    options: [
      'CSS（Cascading Style Sheets）は、Web ページの「見た目」を整えるための言語です。',
      '色、フォント、余白、レイアウトなど、ユーザーが目にするすべてのデザインは CSS で制御します。',
      'セレクタは「スタイルを当てる対象を選ぶ道具」です。',
      '疑似クラスは、要素の「状態」や「位置」に応じてスタイルを変える仕組みです。',
    ],
    correctIndex: 3,
    explanation: '疑似クラスは、要素の「状態」や「位置」に応じてスタイルを変える仕組みです。',
  },
  {
    id: 'responsive',
    question: '「レスポンシブデザイン」について、正しい説明はどれですか？',
    options: [
      '色、フォント、余白、レイアウトなど、ユーザーが目にするすべてのデザインは CSS で制御します。',
      'セレクタは「スタイルを当てる対象を選ぶ道具」です。',
      'レスポンシブデザインは、PC・タブレット・スマホなど、画面サイズが違っても快適に見られるデザインのことです。',
      'CSS（Cascading Style Sheets）は、Web ページの「見た目」を整えるための言語です。',
    ],
    correctIndex: 2,
    explanation: 'レスポンシブデザインは、PC・タブレット・スマホなど、画面サイズが違っても快適に見られるデザインのことです。',
  },
  {
    id: 'next-steps',
    question: '「次のステップ」について、正しい説明はどれですか？',
    options: [
      'セレクタは「スタイルを当てる対象を選ぶ道具」です。',
      '色、フォント、余白、レイアウトなど、ユーザーが目にするすべてのデザインは CSS で制御します。',
      'このチュートリアルで学んだのは CSS の基礎です。',
      'CSS（Cascading Style Sheets）は、Web ページの「見た目」を整えるための言語です。',
    ],
    correctIndex: 2,
    explanation: 'このチュートリアルで学んだのは CSS の基礎です。',
  },
]
