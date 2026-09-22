import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: '「Git」について、正しい説明はどれですか？',
    options: [
      'Git はファイルを3つのエリアで管理します。',
      '作業ディレクトリ — 普段編集している場所 2. ステージング — 次のコミットに含める変更を選ぶ場所（git add） 3. リポジトリ — コミットで保存された履歴',
      'Git はソースコードの変更履歴を記録・管理する「バージョン管理システム」です。',
      'macOS では Xcode Command Line Tools か Homebrew、Windows では Git for Windows をインストールします。',
    ],
    correctIndex: 2,
    explanation: 'Git はソースコードの変更履歴を記録・管理する「バージョン管理システム」です。',
  },
  {
    id: 'install',
    question: '「インストールと設定」について、正しい説明はどれですか？',
    options: [
      'Google ドキュメントの「変更履歴」に似ていますが、コード全体のスナップショットを何度でも保存・共有できるイメージです。',
      'Git はソースコードの変更履歴を記録・管理する「バージョン管理システム」です。',
      'Git はファイルを3つのエリアで管理します。',
      'macOS では Xcode Command Line Tools か Homebrew、Windows では Git for Windows をインストールします。',
    ],
    correctIndex: 3,
    explanation: 'macOS では Xcode Command Line Tools か Homebrew、Windows では Git for Windows をインストールします。',
  },
  {
    id: 'basics',
    question: '「基本操作」について、正しい説明はどれですか？',
    options: [
      'macOS では Xcode Command Line Tools か Homebrew、Windows では Git for Windows をインストールします。',
      'Git はソースコードの変更履歴を記録・管理する「バージョン管理システム」です。',
      'Git はファイルを3つのエリアで管理します。',
      'Google ドキュメントの「変更履歴」に似ていますが、コード全体のスナップショットを何度でも保存・共有できるイメージです。',
    ],
    correctIndex: 2,
    explanation: 'Git はファイルを3つのエリアで管理します。',
  },
  {
    id: 'history',
    question: '「履歴の確認」について、正しい説明はどれですか？',
    options: [
      'Google ドキュメントの「変更履歴」に似ていますが、コード全体のスナップショットを何度でも保存・共有できるイメージです。',
      'Git はソースコードの変更履歴を記録・管理する「バージョン管理システム」です。',
      'コミット履歴を一覧表示します。いつ・誰が・どんなメッセージでコミットしたかがわかります。',
      'macOS では Xcode Command Line Tools か Homebrew、Windows では Git for Windows をインストールします。',
    ],
    correctIndex: 2,
    explanation: 'コミット履歴を一覧表示します。いつ・誰が・どんなメッセージでコミットしたかがわかります。',
  },
  {
    id: 'branch',
    question: '「ブランチ」について、正しい説明はどれですか？',
    options: [
      'Git はソースコードの変更履歴を記録・管理する「バージョン管理システム」です。',
      'ブランチは作業の「分岐線」です。main ブランチを壊さずに、新機能を feature/login ブランチで開発できます。',
      'macOS では Xcode Command Line Tools か Homebrew、Windows では Git for Windows をインストールします。',
      'Google ドキュメントの「変更履歴」に似ていますが、コード全体のスナップショットを何度でも保存・共有できるイメージです。',
    ],
    correctIndex: 1,
    explanation: 'ブランチは作業の「分岐線」です。main ブランチを壊さずに、新機能を feature/login ブランチで開発できます。',
  },
  {
    id: 'merge',
    question: '「マージ」について、正しい説明はどれですか？',
    options: [
      'feature ブランチの作業が終わったら、main に戻ってマージします。',
      'Google ドキュメントの「変更履歴」に似ていますが、コード全体のスナップショットを何度でも保存・共有できるイメージです。',
      'Git はソースコードの変更履歴を記録・管理する「バージョン管理システム」です。',
      'macOS では Xcode Command Line Tools か Homebrew、Windows では Git for Windows をインストールします。',
    ],
    correctIndex: 0,
    explanation: 'feature ブランチの作業が終わったら、main に戻ってマージします。',
  },
  {
    id: 'remote',
    question: '「リモート操作」について、正しい説明はどれですか？',
    options: [
      'macOS では Xcode Command Line Tools か Homebrew、Windows では Git for Windows をインストールします。',
      'GitHub などのサーバー上のリポジトリを「リモート」と呼びます。',
      'Git はソースコードの変更履歴を記録・管理する「バージョン管理システム」です。',
      'Google ドキュメントの「変更履歴」に似ていますが、コード全体のスナップショットを何度でも保存・共有できるイメージです。',
    ],
    correctIndex: 1,
    explanation: 'GitHub などのサーバー上のリポジトリを「リモート」と呼びます。',
  },
  {
    id: 'pr',
    question: '「Pull Request」について、正しい説明はどれですか？',
    options: [
      'Git はソースコードの変更履歴を記録・管理する「バージョン管理システム」です。',
      'PR は「このブランチの変更を main に取り込んでください」というリクエストです。',
      'Google ドキュメントの「変更履歴」に似ていますが、コード全体のスナップショットを何度でも保存・共有できるイメージです。',
      'macOS では Xcode Command Line Tools か Homebrew、Windows では Git for Windows をインストールします。',
    ],
    correctIndex: 1,
    explanation: 'PR は「このブランチの変更を main に取り込んでください」というリクエストです。',
  },
  {
    id: 'conflict',
    question: '「コンフリクト解消」について、正しい説明はどれですか？',
    options: [
      '同じファイルの同じ行を、異なるブランチで別々に変更したときに発生します。',
      'Google ドキュメントの「変更履歴」に似ていますが、コード全体のスナップショットを何度でも保存・共有できるイメージです。',
      'macOS では Xcode Command Line Tools か Homebrew、Windows では Git for Windows をインストールします。',
      'Git はソースコードの変更履歴を記録・管理する「バージョン管理システム」です。',
    ],
    correctIndex: 0,
    explanation: '同じファイルの同じ行を、異なるブランチで別々に変更したときに発生します。',
  },
  {
    id: 'next-steps',
    question: '「次のステップ」について、正しい説明はどれですか？',
    options: [
      'git stash — 作業中の変更を一時退避',
      'Google ドキュメントの「変更履歴」に似ていますが、コード全体のスナップショットを何度でも保存・共有できるイメージです。',
      'macOS では Xcode Command Line Tools か Homebrew、Windows では Git for Windows をインストールします。',
      'Git はソースコードの変更履歴を記録・管理する「バージョン管理システム」です。',
    ],
    correctIndex: 0,
    explanation: 'git stash — 作業中の変更を一時退避',
  },
]
