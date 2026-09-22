import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: 'Electron の説明として正しいものはどれですか？',
    options: [
      'Web 技術（HTML/CSS/JS）でデスクトップアプリを作れる',
      'モバイルアプリ専用の OS である',
      'データベースエンジンである',
      'CSS フレームワークである',
    ],
    correctIndex: 0,
    explanation: 'Electron は Chromium と Node.js を組み合わせたデスクトップアプリフレームワークです。',
  },
  {
    id: 'setup',
    question: 'Electron アプリのエントリーポイントとして一般的なファイルはどれですか？',
    options: [
      'main.js（メインプロセス）',
      'index.css',
      'vite.config.ts のみ',
      'README.md',
    ],
    correctIndex: 0,
    explanation: 'メインプロセスがアプリの起動とウィンドウ作成を担当します。',
  },
  {
    id: 'main',
    question: 'Electron のメインプロセスの役割として正しいものはどれですか？',
    options: [
      'アプリのライフサイクルとウィンドウの作成を管理する',
      'HTML を直接レンダリングする唯一の場所',
      'CSS だけを実行する',
      'ユーザーのファイルを自動削除する',
    ],
    correctIndex: 0,
    explanation: 'メインプロセスは Node.js 環境で動き、BrowserWindow を作ります。',
  },
  {
    id: 'renderer',
    question: 'レンダラープロセスの説明として正しいものはどれですか？',
    options: [
      '各ウィンドウの Web ページ（HTML/CSS/JS）を表示する',
      'OS のカーネルを操作する',
      'Git リポジトリを管理する',
      'データベースサーバーである',
    ],
    correctIndex: 0,
    explanation: 'レンダラーは Chromium 上で動き、通常の Web ページと同様に UI を描画します。',
  },
  {
    id: 'ipc',
    question: 'Electron でメインとレンダラーが安全に通信する仕組みはどれですか？',
    options: [
      'IPC（Inter-Process Communication）',
      'localStorage のみ',
      'FTP',
      'メール送信',
    ],
    correctIndex: 0,
    explanation: 'ipcMain / ipcRenderer でプロセス間のメッセージを送受信します。',
  },
  {
    id: 'window',
    question: 'Electron でウィンドウを作るときに使うクラスはどれですか？',
    options: [
      'BrowserWindow',
      'HTMLWindow',
      'DocumentView',
      'FramePanel',
    ],
    correctIndex: 0,
    explanation: 'new BrowserWindow({ width, height }) でウィンドウを作成します。',
  },
  {
    id: 'menus',
    question: 'Electron のアプリメニューを定義する API はどれですか？',
    options: [
      'Menu.buildFromTemplate',
      'CSS @menu',
      'HTML <menu> のみ',
      'fetch()',
    ],
    correctIndex: 0,
    explanation: 'Menu と MenuItem でネイティブ風のメニューバーを構成します。',
  },
  {
    id: 'packaging',
    question: 'Electron アプリを配布用にビルドする目的として正しいものはどれですか？',
    options: [
      '.exe / .dmg などユーザーがインストールできる形式にする',
      'HTML を PDF に変換する',
      'ソースコードを公開する',
      'ブラウザ拡張に変換する',
    ],
    correctIndex: 0,
    explanation: 'electron-builder などで OS 向けインストーラーを生成します。',
  },
  {
    id: 'security',
    question: 'Electron の contextIsolation を有効にする理由はどれですか？',
    options: [
      'レンダラーから Node.js API への直接アクセスを防ぐ',
      'CSS を高速化する',
      'ウィンドウを最大化する',
      '自動更新を無効化する',
    ],
    correctIndex: 0,
    explanation: 'preload スクリプト経由で必要な API だけを安全に公開します。',
  },
  {
    id: 'next-steps',
    question: 'Electron アプリ開発で preload スクリプトの役割はどれですか？',
    options: [
      'メインプロセスの機能を限定的にレンダラーへ渡す',
      'CSS を自動生成する',
      'DB を自動作成する',
      'Git を自動 commit する',
    ],
    correctIndex: 0,
    explanation: 'contextBridge で安全な API だけを window に公開します。',
  },
]
