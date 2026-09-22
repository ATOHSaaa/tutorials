import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: 'Tauri の Electron との大きな違いとして正しいものはどれですか？',
    options: [
      'OS の WebView を使い、アプリサイズが小さくなりやすい',
      'Chromium を必ず同梱する',
      'Python だけで書く',
      'ブラウザ拡張のみ作れる',
    ],
    correctIndex: 0,
    explanation: 'Tauri は Rust バックエンド + システム WebView で軽量なデスクトップアプリを作ります。',
  },
  {
    id: 'setup',
    question: 'Tauri 2 プロジェクトでフロントエンドとバックエンドが分かれる構成として正しいものはどれですか？',
    options: [
      'src/（フロント）と src-tauri/（Rust）',
      'backend/ のみ',
      'public/ のみ',
      'index.html のみ',
    ],
    correctIndex: 0,
    explanation: 'UI は Web 技術、ネイティブ処理は src-tauri の Rust で書きます。',
  },
  {
    id: 'commands',
    question: 'Tauri でフロントエンドから Rust 関数を呼ぶ仕組みはどれですか？',
    options: [
      '#[tauri::command] で定義したコマンド',
      'fetch("/api") のみ',
      'localStorage',
      'WebSocket のみ',
    ],
    correctIndex: 0,
    explanation: 'invoke("greet", { name }) で Rust 側のコマンドを呼び出します。',
  },
  {
    id: 'window',
    question: 'Tauri でウィンドウのタイトルやサイズを設定する場所として一般的なのはどれですか？',
    options: [
      'tauri.conf.json',
      'package-lock.json',
      '.gitignore',
      'robots.txt',
    ],
    correctIndex: 0,
    explanation: 'tauri.conf.json でウィンドウやビルド設定を管理します。',
  },
  {
    id: 'permissions',
    question: 'Tauri 2 のパーミッション（capabilities）の目的はどれですか？',
    options: [
      'アプリが使える API を明示的に制限する',
      'CSS を暗号化する',
      'フォントを自動インストールする',
      'Git を自動 push する',
    ],
    correctIndex: 0,
    explanation: '必要な機能だけを許可し、セキュリティを高めます。',
  },
  {
    id: 'frontend',
    question: 'Tauri のフロントエンドで使える技術として正しいものはどれですか？',
    options: [
      'React / Vue / Svelte など通常の Web フレームワーク',
      'Rust のみ',
      'Assembly のみ',
      'Flash',
    ],
    correctIndex: 0,
    explanation: 'Vite + React など好きなフロントエンドを WebView で表示します。',
  },
  {
    id: 'rust',
    question: 'Tauri のバックエンド言語として使われるのはどれですか？',
    options: [
      'Rust',
      'PHP',
      'Ruby',
      'COBOL',
    ],
    correctIndex: 0,
    explanation: 'Rust でファイル操作やシステム API などネイティブ処理を実装します。',
  },
  {
    id: 'build',
    question: 'Tauri アプリの本番ビルドで生成されるものはどれですか？',
    options: [
      'OS 向けの実行ファイル・インストーラー',
      'ブラウザ拡張のみ',
      'WordPress テーマ',
      'npm パッケージのみ',
    ],
    correctIndex: 0,
    explanation: 'tauri build で .msi / .dmg / .AppImage などが生成されます。',
  },
  {
    id: 'security',
    question: 'Tauri が Electron よりセキュリティ面で評価される理由の1つはどれですか？',
    options: [
      '許可した API だけを invoke で呼べる設計',
      'すべての Node.js API が使える',
      'SQL を禁止している',
      'HTML を禁止している',
    ],
    correctIndex: 0,
    explanation: 'capabilities と Rust 側の実装で攻撃面を小さくできます。',
  },
  {
    id: 'next-steps',
    question: 'Tauri でフロントと Rust をつなぐ典型的な呼び出しはどれですか？',
    options: [
      'invoke("command_name", { args })',
      'document.rust()',
      'import rust from "rust"',
      'eval()',
    ],
    correctIndex: 0,
    explanation: '@tauri-apps/api の invoke でコマンドを呼びます。',
  },
]
