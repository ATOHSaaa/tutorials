import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: 'Web フォントを使う主な理由はどれですか？',
    options: [
      'ブランドに合ったフォントをユーザーの PC に依存せず表示できる',
      'ページの読み込みを必ず速くする',
      'HTML の構造を変える',
      'JavaScript を不要にする',
    ],
    correctIndex: 0,
    explanation: 'Web フォントでデザイン指定の書体をブラウザに配信できます。',
  },
  {
    id: 'google-fonts',
    question: 'Google Fonts を HTML で読み込む一般的な方法はどれですか？',
    options: [
      '<link> で CSS を読み込む',
      '<script> で JS だけを読み込む',
      '<img> タグを使う',
      'CSS は不要である',
    ],
    correctIndex: 0,
    explanation: 'fonts.googleapis.com の stylesheet を link で読み込み、font-family で指定します。',
  },
  {
    id: 'font-face',
    question: '@font-face で定義する主な情報はどれですか？',
    options: [
      'font-family と src（フォントファイルのパス）',
      'color と margin',
      'width と height',
      'id と class',
    ],
    correctIndex: 0,
    explanation: '@font-face でフォント名とファイルを結びつけ、CSS から参照します。',
  },
  {
    id: 'formats',
    question: '現代の Web で最も推奨されるフォント形式はどれですか？',
    options: [
      'woff2',
      'ttf のみ',
      'bmp',
      'gif',
    ],
    correctIndex: 0,
    explanation: 'woff2 は圧縮率が高く、主要ブラウザで広くサポートされています。',
  },
  {
    id: 'font-display',
    question: 'font-display: swap の効果として正しいものはどれですか？',
    options: [
      'フォント読み込み中もテキストを代替フォントで先に表示する',
      'テキストを非表示にする',
      'フォントを自動的に太字にする',
      '画像に変換する',
    ],
    correctIndex: 0,
    explanation: 'swap は FOIT（非表示）を避け、読み込み後に Web フォントに切り替えます。',
  },
  {
    id: 'preload',
    question: 'フォントを preload する主な目的はどれですか？',
    options: [
      '重要なフォントを早めにダウンロードし、表示を速くする',
      'フォントを削除する',
      'CSS を無効化する',
      'SEO を下げる',
    ],
    correctIndex: 0,
    explanation: '<link rel="preload" as="font"> で LCP 前にフォント取得を始められます。',
  },
  {
    id: 'subset',
    question: 'フォントのサブセット化のメリットはどれですか？',
    options: [
      '必要な文字だけ含めてファイルサイズを小さくできる',
      'すべての言語を必ず追加する',
      'フォントの色を変える',
      'アニメーションを付ける',
    ],
    correctIndex: 0,
    explanation: '日本語サイトならひらがな・カタカナ・漢字だけに絞るなどで軽量化できます。',
  },
  {
    id: 'variable',
    question: 'バリアブルフォントの特徴として正しいものはどれですか？',
    options: [
      '1ファイルで太さや幅など複数の軸を調整できる',
      '色だけを変えられる',
      '画像フォントである',
      'CSS では使えない',
    ],
    correctIndex: 0,
    explanation: 'font-weight や font-stretch を1つのフォントファイルで連続的に変えられます。',
  },
  {
    id: 'performance',
    question: 'Web フォントがパフォーマンスに影響する主な理由はどれですか？',
    options: [
      'ダウンロードとレンダリング待ちでテキスト表示が遅れることがある',
      'HTML の行数が増える',
      'サーバーが停止する',
      'JavaScript が無効になる',
    ],
    correctIndex: 0,
    explanation: 'フォントファイルのサイズと読み込みタイミングが LCP や CLS に影響します。',
  },
  {
    id: 'next-steps',
    question: 'font-display と組み合わせて検討すべき最適化はどれですか？',
    options: [
      'preload とサブセット化',
      'table レイアウト',
      'inline style の廃止',
      'GIF アニメーション',
    ],
    correctIndex: 0,
    explanation: 'preload・subset・woff2 の組み合わせが実務でよく使われます。',
  },
]
