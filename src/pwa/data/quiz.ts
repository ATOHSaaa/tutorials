import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: '「PWA」について、正しい説明はどれですか？',
    options: [
      'Progressive Web App（プログレッシブ Web アプリ）は、Web 技術でネイティブアプリのような体験を提供するアプローチです。',
      'ブラウザとネットワークの間に入るプロキシスクリプトです。',
      'if (\'serviceWorker\' in navigator) {',
      'アプリの名前、アイコン、テーマカラー、表示モード（standalone など）を JSON で定義します。',
    ],
    correctIndex: 0,
    explanation: 'Progressive Web App（プログレッシブ Web アプリ）は、Web 技術でネイティブアプリのような体験を提供するアプローチです。',
  },
  {
    id: 'manifest',
    question: '「Web App Manifest」について、正しい説明はどれですか？',
    options: [
      'アプリの名前、アイコン、テーマカラー、表示モード（standalone など）を JSON で定義します。',
      'Web App Manifest — アプリ名、アイコン、表示モードの定義',
      'Progressive Web App（プログレッシブ Web アプリ）は、Web 技術でネイティブアプリのような体験を提供するアプローチです。',
      'ブラウザとネットワークの間に入るプロキシスクリプトです。',
    ],
    correctIndex: 0,
    explanation: 'アプリの名前、アイコン、テーマカラー、表示モード（standalone など）を JSON で定義します。',
  },
  {
    id: 'service-worker',
    question: '「Service Worker」について、正しい説明はどれですか？',
    options: [
      'ブラウザとネットワークの間に入るプロキシスクリプトです。',
      'Progressive Web App（プログレッシブ Web アプリ）は、Web 技術でネイティブアプリのような体験を提供するアプローチです。',
      'Web App Manifest — アプリ名、アイコン、表示モードの定義',
      'アプリの名前、アイコン、テーマカラー、表示モード（standalone など）を JSON で定義します。',
    ],
    correctIndex: 0,
    explanation: 'ブラウザとネットワークの間に入るプロキシスクリプトです。',
  },
  {
    id: 'cache',
    question: '「キャッシュ戦略」について、正しい説明はどれですか？',
    options: [
      'Progressive Web App（プログレッシブ Web アプリ）は、Web 技術でネイティブアプリのような体験を提供するアプローチです。',
      'アプリの名前、アイコン、テーマカラー、表示モード（standalone など）を JSON で定義します。',
      'Web App Manifest — アプリ名、アイコン、表示モードの定義',
      'caches.open() でキャッシュストアを開き、cache.add() / cache.put() でレスポンスを保存。',
    ],
    correctIndex: 3,
    explanation: 'caches.open() でキャッシュストアを開き、cache.add() / cache.put() でレスポンスを保存。',
  },
  {
    id: 'offline',
    question: '「オフライン対応」について、正しい説明はどれですか？',
    options: [
      'Web App Manifest — アプリ名、アイコン、表示モードの定義',
      'navigator.onLine と online/offline イベントで接続状態を監視。',
      'Progressive Web App（プログレッシブ Web アプリ）は、Web 技術でネイティブアプリのような体験を提供するアプローチです。',
      'アプリの名前、アイコン、テーマカラー、表示モード（standalone など）を JSON で定義します。',
    ],
    correctIndex: 1,
    explanation: 'navigator.onLine と online/offline イベントで接続状態を監視。',
  },
  {
    id: 'install',
    question: '「インストール体験」について、正しい説明はどれですか？',
    options: [
      'Web App Manifest — アプリ名、アイコン、表示モードの定義',
      'Progressive Web App（プログレッシブ Web アプリ）は、Web 技術でネイティブアプリのような体験を提供するアプローチです。',
      'アプリの名前、アイコン、テーマカラー、表示モード（standalone など）を JSON で定義します。',
      'beforeinstallprompt イベントをキャッチし、独自の「インストール」ボタンを表示できます。',
    ],
    correctIndex: 3,
    explanation: 'beforeinstallprompt イベントをキャッチし、独自の「インストール」ボタンを表示できます。',
  },
  {
    id: 'workbox',
    question: '「Workbox」について、正しい説明はどれですか？',
    options: [
      'Web App Manifest — アプリ名、アイコン、表示モードの定義',
      'Service Worker のキャッシュ戦略を簡単に実装する Google のライブラリです。',
      'Progressive Web App（プログレッシブ Web アプリ）は、Web 技術でネイティブアプリのような体験を提供するアプローチです。',
      'アプリの名前、アイコン、テーマカラー、表示モード（standalone など）を JSON で定義します。',
    ],
    correctIndex: 1,
    explanation: 'Service Worker のキャッシュ戦略を簡単に実装する Google のライブラリです。',
  },
  {
    id: 'push',
    question: '「プッシュ通知」について、正しい説明はどれですか？',
    options: [
      'Progressive Web App（プログレッシブ Web アプリ）は、Web 技術でネイティブアプリのような体験を提供するアプローチです。',
      'アプリの名前、アイコン、テーマカラー、表示モード（standalone など）を JSON で定義します。',
      'Web App Manifest — アプリ名、アイコン、表示モードの定義',
      'ユーザーに通知許可を求める 2. Push API でサブスクリプションを取得 3. サーバーからプッシュメッセージを送信 4. Service Worker が通知を表示',
    ],
    correctIndex: 3,
    explanation: 'ユーザーに通知許可を求める 2. Push API でサブスクリプションを取得 3. サーバーからプッシュメッセージを送信 4. Service Worker が通知を表示',
  },
  {
    id: 'lighthouse',
    question: '「PWA の監査」について、正しい説明はどれですか？',
    options: [
      'アプリの名前、アイコン、テーマカラー、表示モード（standalone など）を JSON で定義します。',
      'Web App Manifest — アプリ名、アイコン、表示モードの定義',
      'Progressive Web App（プログレッシブ Web アプリ）は、Web 技術でネイティブアプリのような体験を提供するアプローチです。',
      'Chrome DevTools → Lighthouse → Progressive Web App を選択して実行。',
    ],
    correctIndex: 3,
    explanation: 'Chrome DevTools → Lighthouse → Progressive Web App を選択して実行。',
  },
  {
    id: 'next-steps',
    question: '「次のステップ」について、正しい説明はどれですか？',
    options: [
      'アプリの名前、アイコン、テーマカラー、表示モード（standalone など）を JSON で定義します。',
      'Background Sync — オフライン時のデータ同期',
      'Progressive Web App（プログレッシブ Web アプリ）は、Web 技術でネイティブアプリのような体験を提供するアプローチです。',
      'Web App Manifest — アプリ名、アイコン、表示モードの定義',
    ],
    correctIndex: 1,
    explanation: 'Background Sync — オフライン時のデータ同期',
  },
]
