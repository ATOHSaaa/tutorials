import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: 'Linter（リンター）の主な目的はどれですか？',
    options: [
      'コードの問題やスタイル違反を自動で検出する',
      'HTML を画像に変換する',
      'データベースを最適化する',
      'サーバーを起動する',
    ],
    correctIndex: 0,
    explanation: 'Linter はバグの芽やコーディング規約違反を書き込み時・CI で見つけます。',
  },
  {
    id: 'eslint',
    question: 'JavaScript / TypeScript の静的解析で広く使われるツールはどれですか？',
    options: [
      'ESLint',
      'Prettier のみ',
      'Vite',
      'PostgreSQL',
    ],
    correctIndex: 0,
    explanation: 'ESLint はルールベースでコードの問題を報告します。',
  },
  {
    id: 'prettier',
    question: 'Prettier の主な役割はどれですか？',
    options: [
      'コードのフォーマット（見た目）を統一する',
      '型チェックを行う',
      'テストを実行する',
      '本番デプロイを行う',
    ],
    correctIndex: 0,
    explanation: 'Prettier はインデント・改行・クォートなどを自動整形します。',
  },
  {
    id: 'rules',
    question: 'ESLint の「ルール」とは何を指しますか？',
    options: [
      'コードの書き方に対するチェック項目',
      'CSS の色の一覧',
      'Git ブランチ名',
      'npm パッケージ名',
    ],
    correctIndex: 0,
    explanation: 'no-unused-vars など、違反時に警告やエラーを出す設定です。',
  },
  {
    id: 'config',
    question: 'ESLint のフラット設定（ESLint 9+）のファイル名として正しいものはどれですか？',
    options: [
      'eslint.config.js',
      '.eslintrc.json のみが使える',
      'lint.json',
      'prettier.config',
    ],
    correctIndex: 0,
    explanation: 'eslint.config.js（または .mjs / .ts）で flat config を定義します。',
  },
  {
    id: 'typescript-eslint',
    question: 'TypeScript 用の ESLint パーサ／プラグインのパッケージはどれですか？',
    options: [
      'typescript-eslint',
      'eslint-typescript-only',
      '@types/eslint',
      'tslint',
    ],
    correctIndex: 0,
    explanation: 'typescript-eslint で TS の型情報を使ったリントが可能です。',
  },
  {
    id: 'fix',
    question: 'ESLint の --fix オプションの効果はどれですか？',
    options: [
      '自動修正可能な問題を直す',
      'すべてのファイルを削除する',
      'テストをスキップする',
      '本番ビルドを実行する',
    ],
    correctIndex: 0,
    explanation: 'セミコロン追加など、ルールによって自動修正されます。',
  },
  {
    id: 'ci',
    question: 'CI で Linter を実行する主な理由はどれですか？',
    options: [
      'マージ前にコード品質の問題を防ぐ',
      'デプロイを遅くするため',
      'CSS を生成するため',
      '画像を圧縮するため',
    ],
    correctIndex: 0,
    explanation: 'GitHub Actions などで npm run lint を走らせ、問題のある PR をブロックします。',
  },
  {
    id: 'editor',
    question: 'エディタ統合（ESLint 拡張）のメリットはどれですか？',
    options: [
      '保存時にリアルタイムで問題を表示できる',
      'Git が不要になる',
      'TypeScript が不要になる',
      'ブラウザが不要になる',
    ],
    correctIndex: 0,
    explanation: 'VS Code などで赤波線・保存時フォーマットが使えます。',
  },
  {
    id: 'next-steps',
    question: 'ESLint と Prettier を併用するときの一般的な分担はどれですか？',
    options: [
      'ESLint はバグ・品質、Prettier は整形',
      '両方とも同じことをする',
      'Prettier だけで型チェックする',
      'ESLint だけでデプロイする',
    ],
    correctIndex: 0,
    explanation: 'eslint-config-prettier で整形ルールの競合を避けるのが一般的です。',
  },
]
