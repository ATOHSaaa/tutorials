import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: '「HTML」について、正しい説明はどれですか？',
    options: [
      '見出しは h1 から h6 まで6段階あります。',
      'どんな Web ページも、基本的に同じ構造を持っています。',
      '<a href="/about.html">会社概要</a>',
      'HTML（HyperText Markup Language）は、Web ページの「骨組み」を作るための言語です。',
    ],
    correctIndex: 3,
    explanation: 'HTML（HyperText Markup Language）は、Web ページの「骨組み」を作るための言語です。',
  },
  {
    id: 'structure',
    question: '「ページの基本構造」について、正しい説明はどれですか？',
    options: [
      '料理に例えると、HTML は「材料の配置図」です。',
      'どんな Web ページも、基本的に同じ構造を持っています。',
      'HTML（HyperText Markup Language）は、Web ページの「骨組み」を作るための言語です。',
      '見出しは h1 から h6 まで6段階あります。',
    ],
    correctIndex: 1,
    explanation: 'どんな Web ページも、基本的に同じ構造を持っています。',
  },
  {
    id: 'headings',
    question: '「見出しと段落」について、正しい説明はどれですか？',
    options: [
      'どんな Web ページも、基本的に同じ構造を持っています。',
      '料理に例えると、HTML は「材料の配置図」です。',
      'HTML（HyperText Markup Language）は、Web ページの「骨組み」を作るための言語です。',
      '見出しは h1 から h6 まで6段階あります。',
    ],
    correctIndex: 3,
    explanation: '見出しは h1 から h6 まで6段階あります。',
  },
  {
    id: 'links-images',
    question: '「リンクと画像」について、正しい説明はどれですか？',
    options: [
      '料理に例えると、HTML は「材料の配置図」です。',
      'HTML（HyperText Markup Language）は、Web ページの「骨組み」を作るための言語です。',
      'リンクは <a> タグで作ります。href 属性に飛び先の URL を書きます。',
      'どんな Web ページも、基本的に同じ構造を持っています。',
    ],
    correctIndex: 2,
    explanation: 'リンクは <a> タグで作ります。href 属性に飛び先の URL を書きます。',
  },
  {
    id: 'lists',
    question: '「リスト」について、正しい説明はどれですか？',
    options: [
      '料理に例えると、HTML は「材料の配置図」です。',
      'ul（Unordered List）は順番のない箇条書きです。',
      'どんな Web ページも、基本的に同じ構造を持っています。',
      'HTML（HyperText Markup Language）は、Web ページの「骨組み」を作るための言語です。',
    ],
    correctIndex: 1,
    explanation: 'ul（Unordered List）は順番のない箇条書きです。',
  },
  {
    id: 'tables',
    question: '「テーブル」について、正しい説明はどれですか？',
    options: [
      'どんな Web ページも、基本的に同じ構造を持っています。',
      'HTML（HyperText Markup Language）は、Web ページの「骨組み」を作るための言語です。',
      '表は <table> タグで作ります。',
      '料理に例えると、HTML は「材料の配置図」です。',
    ],
    correctIndex: 2,
    explanation: '表は <table> タグで作ります。',
  },
  {
    id: 'forms',
    question: '「フォーム」について、正しい説明はどれですか？',
    options: [
      'HTML（HyperText Markup Language）は、Web ページの「骨組み」を作るための言語です。',
      'フォームは <form> タグで作ります。',
      'どんな Web ページも、基本的に同じ構造を持っています。',
      '料理に例えると、HTML は「材料の配置図」です。',
    ],
    correctIndex: 1,
    explanation: 'フォームは <form> タグで作ります。',
  },
  {
    id: 'semantic',
    question: '「セマンティック HTML」について、正しい説明はどれですか？',
    options: [
      'セマンティック（semantic）とは「意味を持つ」ということです。',
      'HTML（HyperText Markup Language）は、Web ページの「骨組み」を作るための言語です。',
      '料理に例えると、HTML は「材料の配置図」です。',
      'どんな Web ページも、基本的に同じ構造を持っています。',
    ],
    correctIndex: 0,
    explanation: 'セマンティック（semantic）とは「意味を持つ」ということです。',
  },
  {
    id: 'attributes',
    question: '「属性」について、正しい説明はどれですか？',
    options: [
      'HTML（HyperText Markup Language）は、Web ページの「骨組み」を作るための言語です。',
      '料理に例えると、HTML は「材料の配置図」です。',
      '属性（attribute）は、タグに追加の情報を付けるものです。',
      'どんな Web ページも、基本的に同じ構造を持っています。',
    ],
    correctIndex: 2,
    explanation: '属性（attribute）は、タグに追加の情報を付けるものです。',
  },
  {
    id: 'next-steps',
    question: '「次のステップ」について、正しい説明はどれですか？',
    options: [
      'HTML（HyperText Markup Language）は、Web ページの「骨組み」を作るための言語です。',
      '料理に例えると、HTML は「材料の配置図」です。',
      'HTML でできること：ページの構造を作る、テキスト・画像・リンクを配置する、フォームを作る',
      'どんな Web ページも、基本的に同じ構造を持っています。',
    ],
    correctIndex: 2,
    explanation: 'HTML でできること：ページの構造を作る、テキスト・画像・リンクを配置する、フォームを作る',
  },
]
