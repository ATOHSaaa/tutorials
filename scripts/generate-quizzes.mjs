import fs from 'fs'
import path from 'path'
import { createServer } from 'vite'

const SRC = path.resolve('src')

const COURSE_TITLES = {
  html: 'HTML',
  css: 'CSS',
  tailwind: 'Tailwind CSS',
  js: 'JavaScript',
  dom: 'DOM 操作',
  ts: 'TypeScript',
  git: 'Git',
  db: 'DB',
  sql: 'SQL',
  react: 'React',
  state: '状態管理',
  forms: 'フォーム',
  testing: 'テスト',
  next: 'Next.js',
  'tanstack-start': 'TanStack Start',
  vue: 'Vue.js',
  astro: 'Astro',
  a11y: 'アクセシビリティ',
  devtools: 'DevTools',
  pwa: 'PWA',
  perf: 'Web パフォーマンス',
  edge: 'エッジ',
  cloudflare: 'Cloudflare',
  cicd: 'CI/CD',
  uptime: '死活監視',
  vite: 'Vite',
  turbo: 'Turborepo',
  webfonts: 'Webフォント',
  electron: 'Electron',
  tauri: 'Tauri',
  linter: 'Linter',
  animation: 'CSSアニメーション',
  three: 'Three.js',
  canvas: 'Canvas',
  i18n: 'i18n',
  websocket: 'WebSocket',
  docker: 'Docker',
  seo: 'SEO',
  security: 'Webセキュリティ',
  playwright: 'Playwright',
  supabase: 'Supabase',
  storybook: 'Storybook',
  shadcn: 'shadcn/ui',
  graphql: 'GraphQL',
  prisma: 'Prisma',
  auth: '認証',
  npm: 'npm',
  node: 'Node.js',
  http: 'HTTP',
}

const BOILERPLATE_PATTERNS = [
  /における「.+」について学びます/,
  /実務でよく使う考え方/,
  /このテーマがプロジェクト全体のどこに位置するか/,
  /小さな例から始めて、徐々に実プロジェクト/,
  /公式ドキュメントと併用しながら/,
  /チームのルールや既存のツールチェーン/,
  /インタラクティブデモで、概念の流れ/,
  /手を動かして試すことが一番の近道/,
  /理解していきましょう/,
  /を学びます。$/,
  /を学びます$/,
]

const GENERIC_WRONG = [
  'この内容は別のコースで扱うトピックである',
  'Web 開発の一般的な誤解であり、正しくない',
  'このコースの範囲外の概念である',
  'ブラウザが自動的に行う処理であり、開発者の設定は不要である',
  '本番環境では使われない開発専用の機能である',
]

/** テンプレート生成コース用の手書きクイズ */
const CUSTOM_QUIZZES = {
  vite: [
    { id: 'intro', question: 'Vite の開発サーバーが高速な主な理由はどれですか？', options: ['ブラウザのネイティブ ES Modules を活用している', '起動時に全ファイルをバンドルする', 'PHP で動作している', 'ネットワーク接続が不要である'], correctIndex: 0, explanation: 'Vite は開発時にネイティブ ESM を使い、必要なモジュールだけを変換するため起動が速いです。' },
    { id: 'setup', question: 'Vite + React + TypeScript のプロジェクトを作るコマンドはどれですか？', options: ['npm create vite@latest my-app -- --template react-ts', 'npx create-react-app my-app', 'npm install vite', 'vite init react'], correctIndex: 0, explanation: 'create vite でテンプレートを選び、react-ts で TypeScript 付き React プロジェクトを作成します。' },
    { id: 'dev-server', question: 'Vite の開発サーバーでファイル保存時に画面が即更新される機能は？', options: ['HMR（Hot Module Replacement）', 'SSR', 'PWA', 'Tree Shaking'], correctIndex: 0, explanation: 'HMR は変更したモジュールだけを差し替え、ページ全体のリロードを避けます。' },
    { id: 'modules', question: 'Vite が開発時に活用するモジュール形式はどれですか？', options: ['ES Modules（import/export）', 'CommonJS のみ', 'AMD', 'グローバル変数のみ'], correctIndex: 0, explanation: 'Vite はブラウザが理解する ESM をそのまま使い、import されたファイルだけを処理します。' },
    { id: 'plugins', question: 'Vite で React を使うときに必要なプラグインはどれですか？', options: ['@vitejs/plugin-react', 'vite-plugin-html', 'rollup-plugin-babel', 'webpack-react-loader'], correctIndex: 0, explanation: '@vitejs/plugin-react が JSX の変換と Fast Refresh を提供します。' },
    { id: 'env', question: 'Vite で環境変数にアクセスする正しい書き方はどれですか？', options: ['import.meta.env.VITE_API_URL', 'process.env.VITE_API_URL', 'window.env.API_URL', 'getenv("VITE_API_URL")'], correctIndex: 0, explanation: 'Vite では import.meta.env で環境変数を参照します。クライアントに公開する変数は VITE_ プレフィックスが必要です。' },
    { id: 'assets', question: 'Vite で画像を import して使う主な理由はどれですか？', options: ['ビルド時に最適化され、URL が解決される', '画像が自動的に SVG に変換される', 'CDN に自動アップロードされる', '画像の著作権が解除される'], correctIndex: 0, explanation: 'import したアセットはビルド時に処理され、本番用のパスやハッシュ付きファイル名が付与されます。' },
    { id: 'build', question: 'Vite で本番用ビルドを実行するコマンドはどれですか？', options: ['npm run build（内部で vite build）', 'vite dev --production', 'npm run compile', 'vite export'], correctIndex: 0, explanation: 'vite build で dist/ に最適化された静的ファイルが出力されます。' },
    { id: 'config', question: 'Vite の設定ファイル名として正しいものはどれですか？', options: ['vite.config.ts', 'vite.json', '.viterc', 'build.config.js'], correctIndex: 0, explanation: 'vite.config.ts（または .js / .mjs）でプラグインやエイリアスなどを設定します。' },
    { id: 'next-steps', question: 'Vite プロジェクトのビルド結果をローカルで確認するコマンドはどれですか？', options: ['npm run preview', 'npm run dev', 'vite serve --build', 'npm start'], correctIndex: 0, explanation: 'vite preview で本番ビルドをローカルサーバーで確認できます。' },
  ],
  turbo: [
    { id: 'intro', question: 'Turborepo の主な目的はどれですか？', options: ['モノレポのビルド・テストを高速化する', 'React の代替フレームワークを提供する', 'CSS を自動生成する', 'データベースを管理する'], correctIndex: 0, explanation: 'Turborepo はタスクのキャッシュと並列実行でモノレポの CI/CD を高速化します。' },
    { id: 'monorepo', question: 'モノレポ（Monorepo）の説明として正しいものはどれですか？', options: ['複数のパッケージを1つのリポジトリで管理する', '1つのパッケージだけを管理する', 'クラウド上だけで動くリポジトリ', 'Git を使わないプロジェクト構成'], correctIndex: 0, explanation: 'モノレポは apps/ と packages/ など複数プロジェクトを1リポジトリにまとめる構成です。' },
    { id: 'setup', question: 'Turborepo プロジェクトを作成する代表的なコマンドはどれですか？', options: ['npx create-turbo@latest', 'npm create vite@latest', 'npx turbo init', 'yarn add turbo'], correctIndex: 0, explanation: 'create-turbo でモノレポのテンプレートを生成します。' },
    { id: 'workspaces', question: 'Turborepo で apps と packages を分ける主な理由はどれですか？', options: ['アプリと共有ライブラリの責務を分離する', 'Git ブランチを増やすため', 'CSS を分離するため', 'テストを無効化するため'], correctIndex: 0, explanation: 'apps はデプロイ対象のアプリ、packages は共通 UI や utils などの再利用コードです。' },
    { id: 'tasks', question: 'Turborepo でタスクを定義するファイルはどれですか？', options: ['turbo.json', 'package.json のみ', 'vite.config.ts', 'tsconfig.json'], correctIndex: 0, explanation: 'turbo.json で build / test / lint などのタスクと依存関係を定義します。' },
    { id: 'pipeline', question: 'Turborepo のパイプラインで dependsOn: ["^build"] の意味は？', options: ['依存パッケージの build を先に実行する', 'build をスキップする', 'テストだけを実行する', '並列実行を禁止する'], correctIndex: 0, explanation: 'キャレット（^）はワークスペースの依存先を指し、先にライブラリをビルドしてからアプリをビルドします。' },
    { id: 'cache', question: 'Turborepo のキャッシュが効く条件として正しいものはどれですか？', options: ['入力ファイルとタスク設定が同じなら前回の結果を再利用する', '毎回必ず全タスクを再実行する', 'キャッシュはローカルでは使えない', 'Git のコミットメッセージだけで判断する'], correctIndex: 0, explanation: 'ソースや設定が変わらなければ、前回のビルド結果をキャッシュから返します。' },
    { id: 'filter', question: '特定パッケージだけタスクを実行する Turborepo のオプションはどれですか？', options: ['--filter', '--only', '--package', '--scope-only'], correctIndex: 0, explanation: 'turbo run build --filter=web のように、対象パッケージを絞り込めます。' },
    { id: 'ci', question: 'CI で Turborepo を使うメリットとして正しいものはどれですか？', options: ['変更のないパッケージのビルドをスキップできる', 'Git リポジトリが不要になる', 'テストが自動的に不要になる', 'Node.js が不要になる'], correctIndex: 0, explanation: 'キャッシュと affected なパッケージの判定で CI 時間を短縮できます。' },
    { id: 'next-steps', question: 'Turborepo とよく組み合わせるパッケージマネージャーの機能はどれですか？', options: ['ワークスペース（npm/pnpm/yarn workspaces）', 'グローバルインストール', 'npx のみ', 'CDN 配信'], correctIndex: 0, explanation: 'npm workspaces や pnpm workspace と組み合わせてモノレポを構成します。' },
  ],
  webfonts: [
    { id: 'intro', question: 'Web フォントを使う主な理由はどれですか？', options: ['ブランドに合ったフォントをユーザーの PC に依存せず表示できる', 'ページの読み込みを必ず速くする', 'HTML の構造を変える', 'JavaScript を不要にする'], correctIndex: 0, explanation: 'Web フォントでデザイン指定の書体をブラウザに配信できます。' },
    { id: 'google-fonts', question: 'Google Fonts を HTML で読み込む一般的な方法はどれですか？', options: ['<link> で CSS を読み込む', '<script> で JS だけを読み込む', '<img> タグを使う', 'CSS は不要である'], correctIndex: 0, explanation: 'fonts.googleapis.com の stylesheet を link で読み込み、font-family で指定します。' },
    { id: 'font-face', question: '@font-face で定義する主な情報はどれですか？', options: ['font-family と src（フォントファイルのパス）', 'color と margin', 'width と height', 'id と class'], correctIndex: 0, explanation: '@font-face でフォント名とファイルを結びつけ、CSS から参照します。' },
    { id: 'formats', question: '現代の Web で最も推奨されるフォント形式はどれですか？', options: ['woff2', 'ttf のみ', 'bmp', 'gif'], correctIndex: 0, explanation: 'woff2 は圧縮率が高く、主要ブラウザで広くサポートされています。' },
    { id: 'font-display', question: 'font-display: swap の効果として正しいものはどれですか？', options: ['フォント読み込み中もテキストを代替フォントで先に表示する', 'テキストを非表示にする', 'フォントを自動的に太字にする', '画像に変換する'], correctIndex: 0, explanation: 'swap は FOIT（非表示）を避け、読み込み後に Web フォントに切り替えます。' },
    { id: 'preload', question: 'フォントを preload する主な目的はどれですか？', options: ['重要なフォントを早めにダウンロードし、表示を速くする', 'フォントを削除する', 'CSS を無効化する', 'SEO を下げる'], correctIndex: 0, explanation: '<link rel="preload" as="font"> で LCP 前にフォント取得を始められます。' },
    { id: 'subset', question: 'フォントのサブセット化のメリットはどれですか？', options: ['必要な文字だけ含めてファイルサイズを小さくできる', 'すべての言語を必ず追加する', 'フォントの色を変える', 'アニメーションを付ける'], correctIndex: 0, explanation: '日本語サイトならひらがな・カタカナ・漢字だけに絞るなどで軽量化できます。' },
    { id: 'variable', question: 'バリアブルフォントの特徴として正しいものはどれですか？', options: ['1ファイルで太さや幅など複数の軸を調整できる', '色だけを変えられる', '画像フォントである', 'CSS では使えない'], correctIndex: 0, explanation: 'font-weight や font-stretch を1つのフォントファイルで連続的に変えられます。' },
    { id: 'performance', question: 'Web フォントがパフォーマンスに影響する主な理由はどれですか？', options: ['ダウンロードとレンダリング待ちでテキスト表示が遅れることがある', 'HTML の行数が増える', 'サーバーが停止する', 'JavaScript が無効になる'], correctIndex: 0, explanation: 'フォントファイルのサイズと読み込みタイミングが LCP や CLS に影響します。' },
    { id: 'next-steps', question: 'font-display と組み合わせて検討すべき最適化はどれですか？', options: ['preload とサブセット化', 'table レイアウト', 'inline style の廃止', 'GIF アニメーション'], correctIndex: 0, explanation: 'preload・subset・woff2 の組み合わせが実務でよく使われます。' },
  ],
  electron: [
    { id: 'intro', question: 'Electron の説明として正しいものはどれですか？', options: ['Web 技術（HTML/CSS/JS）でデスクトップアプリを作れる', 'モバイルアプリ専用の OS である', 'データベースエンジンである', 'CSS フレームワークである'], correctIndex: 0, explanation: 'Electron は Chromium と Node.js を組み合わせたデスクトップアプリフレームワークです。' },
    { id: 'setup', question: 'Electron アプリのエントリーポイントとして一般的なファイルはどれですか？', options: ['main.js（メインプロセス）', 'index.css', 'vite.config.ts のみ', 'README.md'], correctIndex: 0, explanation: 'メインプロセスがアプリの起動とウィンドウ作成を担当します。' },
    { id: 'main', question: 'Electron のメインプロセスの役割として正しいものはどれですか？', options: ['アプリのライフサイクルとウィンドウの作成を管理する', 'HTML を直接レンダリングする唯一の場所', 'CSS だけを実行する', 'ユーザーのファイルを自動削除する'], correctIndex: 0, explanation: 'メインプロセスは Node.js 環境で動き、BrowserWindow を作ります。' },
    { id: 'renderer', question: 'レンダラープロセスの説明として正しいものはどれですか？', options: ['各ウィンドウの Web ページ（HTML/CSS/JS）を表示する', 'OS のカーネルを操作する', 'Git リポジトリを管理する', 'データベースサーバーである'], correctIndex: 0, explanation: 'レンダラーは Chromium 上で動き、通常の Web ページと同様に UI を描画します。' },
    { id: 'ipc', question: 'Electron でメインとレンダラーが安全に通信する仕組みはどれですか？', options: ['IPC（Inter-Process Communication）', 'localStorage のみ', 'FTP', 'メール送信'], correctIndex: 0, explanation: 'ipcMain / ipcRenderer でプロセス間のメッセージを送受信します。' },
    { id: 'window', question: 'Electron でウィンドウを作るときに使うクラスはどれですか？', options: ['BrowserWindow', 'HTMLWindow', 'DocumentView', 'FramePanel'], correctIndex: 0, explanation: 'new BrowserWindow({ width, height }) でウィンドウを作成します。' },
    { id: 'menus', question: 'Electron のアプリメニューを定義する API はどれですか？', options: ['Menu.buildFromTemplate', 'CSS @menu', 'HTML <menu> のみ', 'fetch()'], correctIndex: 0, explanation: 'Menu と MenuItem でネイティブ風のメニューバーを構成します。' },
    { id: 'packaging', question: 'Electron アプリを配布用にビルドする目的として正しいものはどれですか？', options: ['.exe / .dmg などユーザーがインストールできる形式にする', 'HTML を PDF に変換する', 'ソースコードを公開する', 'ブラウザ拡張に変換する'], correctIndex: 0, explanation: 'electron-builder などで OS 向けインストーラーを生成します。' },
    { id: 'security', question: 'Electron の contextIsolation を有効にする理由はどれですか？', options: ['レンダラーから Node.js API への直接アクセスを防ぐ', 'CSS を高速化する', 'ウィンドウを最大化する', '自動更新を無効化する'], correctIndex: 0, explanation: 'preload スクリプト経由で必要な API だけを安全に公開します。' },
    { id: 'next-steps', question: 'Electron アプリ開発で preload スクリプトの役割はどれですか？', options: ['メインプロセスの機能を限定的にレンダラーへ渡す', 'CSS を自動生成する', 'DB を自動作成する', 'Git を自動 commit する'], correctIndex: 0, explanation: 'contextBridge で安全な API だけを window に公開します。' },
  ],
  tauri: [
    { id: 'intro', question: 'Tauri の Electron との大きな違いとして正しいものはどれですか？', options: ['OS の WebView を使い、アプリサイズが小さくなりやすい', 'Chromium を必ず同梱する', 'Python だけで書く', 'ブラウザ拡張のみ作れる'], correctIndex: 0, explanation: 'Tauri は Rust バックエンド + システム WebView で軽量なデスクトップアプリを作ります。' },
    { id: 'setup', question: 'Tauri 2 プロジェクトでフロントエンドとバックエンドが分かれる構成として正しいものはどれですか？', options: ['src/（フロント）と src-tauri/（Rust）', 'backend/ のみ', 'public/ のみ', 'index.html のみ'], correctIndex: 0, explanation: 'UI は Web 技術、ネイティブ処理は src-tauri の Rust で書きます。' },
    { id: 'commands', question: 'Tauri でフロントエンドから Rust 関数を呼ぶ仕組みはどれですか？', options: ['#[tauri::command] で定義したコマンド', 'fetch("/api") のみ', 'localStorage', 'WebSocket のみ'], correctIndex: 0, explanation: 'invoke("greet", { name }) で Rust 側のコマンドを呼び出します。' },
    { id: 'window', question: 'Tauri でウィンドウのタイトルやサイズを設定する場所として一般的なのはどれですか？', options: ['tauri.conf.json', 'package-lock.json', '.gitignore', 'robots.txt'], correctIndex: 0, explanation: 'tauri.conf.json でウィンドウやビルド設定を管理します。' },
    { id: 'permissions', question: 'Tauri 2 のパーミッション（capabilities）の目的はどれですか？', options: ['アプリが使える API を明示的に制限する', 'CSS を暗号化する', 'フォントを自動インストールする', 'Git を自動 push する'], correctIndex: 0, explanation: '必要な機能だけを許可し、セキュリティを高めます。' },
    { id: 'frontend', question: 'Tauri のフロントエンドで使える技術として正しいものはどれですか？', options: ['React / Vue / Svelte など通常の Web フレームワーク', 'Rust のみ', 'Assembly のみ', 'Flash'], correctIndex: 0, explanation: 'Vite + React など好きなフロントエンドを WebView で表示します。' },
    { id: 'rust', question: 'Tauri のバックエンド言語として使われるのはどれですか？', options: ['Rust', 'PHP', 'Ruby', 'COBOL'], correctIndex: 0, explanation: 'Rust でファイル操作やシステム API などネイティブ処理を実装します。' },
    { id: 'build', question: 'Tauri アプリの本番ビルドで生成されるものはどれですか？', options: ['OS 向けの実行ファイル・インストーラー', 'ブラウザ拡張のみ', 'WordPress テーマ', 'npm パッケージのみ'], correctIndex: 0, explanation: 'tauri build で .msi / .dmg / .AppImage などが生成されます。' },
    { id: 'security', question: 'Tauri が Electron よりセキュリティ面で評価される理由の1つはどれですか？', options: ['許可した API だけを invoke で呼べる設計', 'すべての Node.js API が使える', 'SQL を禁止している', 'HTML を禁止している'], correctIndex: 0, explanation: 'capabilities と Rust 側の実装で攻撃面を小さくできます。' },
    { id: 'next-steps', question: 'Tauri でフロントと Rust をつなぐ典型的な呼び出しはどれですか？', options: ['invoke("command_name", { args })', 'document.rust()', 'import rust from "rust"', 'eval()'], correctIndex: 0, explanation: '@tauri-apps/api の invoke でコマンドを呼びます。' },
  ],
  linter: [
    { id: 'intro', question: 'Linter（リンター）の主な目的はどれですか？', options: ['コードの問題やスタイル違反を自動で検出する', 'HTML を画像に変換する', 'データベースを最適化する', 'サーバーを起動する'], correctIndex: 0, explanation: 'Linter はバグの芽やコーディング規約違反を書き込み時・CI で見つけます。' },
    { id: 'eslint', question: 'JavaScript / TypeScript の静的解析で広く使われるツールはどれですか？', options: ['ESLint', 'Prettier のみ', 'Vite', 'PostgreSQL'], correctIndex: 0, explanation: 'ESLint はルールベースでコードの問題を報告します。' },
    { id: 'prettier', question: 'Prettier の主な役割はどれですか？', options: ['コードのフォーマット（見た目）を統一する', '型チェックを行う', 'テストを実行する', '本番デプロイを行う'], correctIndex: 0, explanation: 'Prettier はインデント・改行・クォートなどを自動整形します。' },
    { id: 'rules', question: 'ESLint の「ルール」とは何を指しますか？', options: ['コードの書き方に対するチェック項目', 'CSS の色の一覧', 'Git ブランチ名', 'npm パッケージ名'], correctIndex: 0, explanation: 'no-unused-vars など、違反時に警告やエラーを出す設定です。' },
    { id: 'config', question: 'ESLint のフラット設定（ESLint 9+）のファイル名として正しいものはどれですか？', options: ['eslint.config.js', '.eslintrc.json のみが使える', 'lint.json', 'prettier.config'], correctIndex: 0, explanation: 'eslint.config.js（または .mjs / .ts）で flat config を定義します。' },
    { id: 'typescript-eslint', question: 'TypeScript 用の ESLint パーサ／プラグインのパッケージはどれですか？', options: ['typescript-eslint', 'eslint-typescript-only', '@types/eslint', 'tslint'], correctIndex: 0, explanation: 'typescript-eslint で TS の型情報を使ったリントが可能です。' },
    { id: 'fix', question: 'ESLint の --fix オプションの効果はどれですか？', options: ['自動修正可能な問題を直す', 'すべてのファイルを削除する', 'テストをスキップする', '本番ビルドを実行する'], correctIndex: 0, explanation: 'セミコロン追加など、ルールによって自動修正されます。' },
    { id: 'ci', question: 'CI で Linter を実行する主な理由はどれですか？', options: ['マージ前にコード品質の問題を防ぐ', 'デプロイを遅くするため', 'CSS を生成するため', '画像を圧縮するため'], correctIndex: 0, explanation: 'GitHub Actions などで npm run lint を走らせ、問題のある PR をブロックします。' },
    { id: 'editor', question: 'エディタ統合（ESLint 拡張）のメリットはどれですか？', options: ['保存時にリアルタイムで問題を表示できる', 'Git が不要になる', 'TypeScript が不要になる', 'ブラウザが不要になる'], correctIndex: 0, explanation: 'VS Code などで赤波線・保存時フォーマットが使えます。' },
    { id: 'next-steps', question: 'ESLint と Prettier を併用するときの一般的な分担はどれですか？', options: ['ESLint はバグ・品質、Prettier は整形', '両方とも同じことをする', 'Prettier だけで型チェックする', 'ESLint だけでデプロイする'], correctIndex: 0, explanation: 'eslint-config-prettier で整形ルールの競合を避けるのが一般的です。' },
  ],
}

function isBoilerplate(text) {
  return BOILERPLATE_PATTERNS.some((pattern) => pattern.test(text))
}

function normalizeWhitespace(text) {
  return text.replace(/\s+/g, ' ').trim()
}

function firstSentence(text) {
  const cleaned = normalizeWhitespace(text)
  const match = cleaned.match(/^(.{18,110}?[。．!?？])/)
  if (match) return match[1]
  if (cleaned.length <= 90) return cleaned
  return cleaned.slice(0, 87) + '…'
}

function extractBullets(content) {
  return [...content.matchAll(/(?:^|\n)\s*[•\-]\s*([^\n]+)/g)].map((m) => m[1].trim())
}

function extractCodeLine(code) {
  if (!code) return null
  const line = code
    .split('\n')
    .map((l) => l.trim())
    .find((l) => l && !l.startsWith('//') && !l.startsWith('#') && !l.startsWith('<!--') && !l.startsWith('--'))
  return line && line.length <= 90 ? line : null
}

function isWeakFact(text) {
  if (text.endsWith('？') && !text.includes('。')) return true
  if (/^\S+\s*[—\-–]\s*\S+$/.test(text) && text.length < 35) return true
  if (text.length < 18) return true
  return false
}

function extractFactsFromLesson(lesson) {
  const facts = []

  for (const section of lesson.sections) {
    const codeLine = extractCodeLine(section.code)
    if (codeLine && !isBoilerplate(codeLine)) {
      facts.push({ type: 'code', text: codeLine, heading: section.heading })
    }

    for (const paragraph of section.content.split('\n\n')) {
      const p = paragraph.trim()
      if (!p || p.startsWith('•') || isBoilerplate(p)) continue
      const sentence = firstSentence(p)
      if (sentence.length >= 18 && !isWeakFact(sentence)) {
        facts.push({ type: 'sentence', text: sentence, heading: section.heading })
      }
    }

    for (const bullet of extractBullets(section.content)) {
      if (!isBoilerplate(bullet) && bullet.length >= 18 && !isWeakFact(bullet)) {
        facts.push({ type: 'bullet', text: bullet, heading: section.heading })
      }
    }
  }

  return facts
}

function pickBestFact(lesson) {
  const facts = extractFactsFromLesson(lesson)
  if (facts.length === 0) return null

  const firstHeading = lesson.sections[0]?.heading
  const fromFirst = facts.filter((f) => f.heading === firstHeading)
  const pools = [fromFirst, facts]

  for (const pool of pools) {
    for (const type of ['sentence', 'bullet', 'code']) {
      const found = pool.find((f) => f.type === type)
      if (found) return found
    }
  }

  return facts[0]
}

function normalizeOption(text) {
  let option = normalizeWhitespace(text)
  option = option.replace(/^[\d①②③④⑤]+\s*[.．、]\s*/, '')
  if (option.length > 95) option = option.slice(0, 92) + '…'
  return option
}

function uniqueOptions(options) {
  const seen = new Set()
  const result = []
  for (const opt of options) {
    const key = opt.toLowerCase()
    if (!seen.has(key) && opt.length > 0) {
      seen.add(key)
      result.push(opt)
    }
  }
  return result
}

function shuffleWithCorrect(options, correctIndex) {
  const indexed = options.map((opt, i) => ({ opt, isCorrect: i === correctIndex }))
  for (let i = indexed.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[indexed[i], indexed[j]] = [indexed[j], indexed[i]]
  }
  return {
    options: indexed.map((item) => item.opt),
    correctIndex: indexed.findIndex((item) => item.isCorrect),
  }
}

function buildQuestionText(lesson, fact) {
  if (fact?.type === 'code') {
    return `「${lesson.title}」で使うコマンドやコードとして正しいものはどれですか？`
  }
  let topic = lesson.title.replace(/[？?]$/, '').trim()
  if (topic.endsWith('とは')) {
    topic = topic.replace(/とは$/, '').trim()
  }
  return `「${topic}」について、正しい説明はどれですか？`
}

function buildWrongOptions(lesson, correct, allLessons) {
  const wrong = []

  for (const other of allLessons) {
    if (other.id === lesson.id) continue
    const facts = extractFactsFromLesson(other)
    for (const fact of facts.slice(0, 2)) {
      const option = normalizeOption(fact.text)
      if (option !== correct && !isWeakFact(option)) wrong.push(option)
    }
  }

  wrong.push(...GENERIC_WRONG)
  return uniqueOptions(wrong).filter((w) => w !== correct && !isWeakFact(w))
}

function buildQuestionFromLesson(lesson, allLessons) {
  const fact = pickBestFact(lesson)
  const correct = fact
    ? normalizeOption(fact.text)
    : normalizeOption(firstSentence(lesson.sections[0]?.content || lesson.description))

  const question = buildQuestionText(lesson, fact)
  const wrongPool = buildWrongOptions(lesson, correct, allLessons)
  const wrong = wrongPool.slice(0, 3)

  while (wrong.length < 3) {
    const filler = GENERIC_WRONG.find((w) => w !== correct && !wrong.includes(w))
    if (!filler) break
    wrong.push(filler)
  }

  const options = uniqueOptions([correct, ...wrong]).slice(0, 4)
  while (options.length < 4) {
    const filler = GENERIC_WRONG.find((w) => !options.includes(w))
    if (!filler) break
    options.push(filler)
  }

  const shuffled = shuffleWithCorrect(options, 0)

  return {
    id: lesson.id,
    question,
    options: shuffled.options,
    correctIndex: shuffled.correctIndex,
    explanation: correct,
  }
}

function generateQuestions(lessons, courseId) {
  const custom = CUSTOM_QUIZZES[courseId]
  const targetLessons = lessons.slice(0, 10)

  if (custom?.length >= 10) {
    return custom.slice(0, 10)
  }

  return targetLessons.map((lesson) => {
    const override = custom?.find((q) => q.id === lesson.id)
    if (override) return override
    return buildQuestionFromLesson(lesson, lessons)
  })
}

function escapeString(str) {
  return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
}

function writeQuizFile(slug, questions) {
  const lines = [
    "import type { QuizQuestion } from '../../lib/quiz'",
    '',
    'export const quizQuestions: QuizQuestion[] = [',
  ]

  for (const q of questions) {
    lines.push('  {')
    lines.push(`    id: '${q.id}',`)
    lines.push(`    question: '${escapeString(q.question)}',`)
    lines.push('    options: [')
    for (const opt of q.options) {
      lines.push(`      '${escapeString(opt)}',`)
    }
    lines.push('    ],')
    lines.push(`    correctIndex: ${q.correctIndex},`)
    lines.push(`    explanation: '${escapeString(q.explanation)}',`)
    lines.push('  },')
  }

  lines.push(']')
  lines.push('')

  const dir = path.join(SRC, slug, 'data')
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, 'quiz.ts'), lines.join('\n'))
}

async function loadLessons(slug, server) {
  const mod = await server.ssrLoadModule(`/src/${slug}/data/lessons.ts`)
  return mod.lessons
}

const slugs = Object.keys(COURSE_TITLES)
const server = await createServer({
  configFile: path.resolve('vite.config.ts'),
  server: { middlewareMode: true },
})

try {
  for (const slug of slugs) {
    const lessonsPath = path.join(SRC, slug, 'data/lessons.ts')
    if (!fs.existsSync(lessonsPath)) {
      console.warn(`Skip ${slug}: lessons.ts not found`)
      continue
    }

    const lessons = await loadLessons(slug, server)
    const questions = generateQuestions(lessons, slug)
    writeQuizFile(slug, questions)
    console.log(`✓ ${slug}: ${questions.length} questions`)
  }
} finally {
  await server.close()
}

console.log('Done!')

// quizRegistry.ts を再生成
await import('node:child_process').then(({ execSync }) => {
  execSync('node scripts/generate-quiz-registry.mjs', { stdio: 'inherit' })
})
