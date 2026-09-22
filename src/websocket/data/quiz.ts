import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: '「WebSocket」について、正しい説明はどれですか？',
    options: [
      'HTTP はリクエスト・レスポンスモデルで、サーバーからクライアントへのプッシュができません。',
      '通常の HTTP リクエストと同じポート（80/443）を使うため、ファイアウォールの設定変更が不要です。',
      'クライアントが HTTP Upgrade リクエストを送り、サーバーが 101 Switching Protocols で応答します。',
      'const ws = new WebSocket("wss://example.com/ws");',
    ],
    correctIndex: 0,
    explanation: 'HTTP はリクエスト・レスポンスモデルで、サーバーからクライアントへのプッシュができません。',
  },
  {
    id: 'protocol',
    question: '「WebSocket プロトコル」について、正しい説明はどれですか？',
    options: [
      'クライアントが HTTP Upgrade リクエストを送り、サーバーが 101 Switching Protocols で応答します。',
      'チャット、株価ティッカー、共同編集、ゲームなど「即座にデータを送受信」したい場面では WebSocket が最適です。',
      'HTTP はリクエスト・レスポンスモデルで、サーバーからクライアントへのプッシュができません。',
      'const ws = new WebSocket("wss://example.com/ws");',
    ],
    correctIndex: 0,
    explanation: 'クライアントが HTTP Upgrade リクエストを送り、サーバーが 101 Switching Protocols で応答します。',
  },
  {
    id: 'native-api',
    question: '「ネイティブ WebSocket API」について、正しい説明はどれですか？',
    options: [
      'チャット、株価ティッカー、共同編集、ゲームなど「即座にデータを送受信」したい場面では WebSocket が最適です。',
      'new WebSocket(url) で接続。',
      'クライアントが HTTP Upgrade リクエストを送り、サーバーが 101 Switching Protocols で応答します。',
      'HTTP はリクエスト・レスポンスモデルで、サーバーからクライアントへのプッシュができません。',
    ],
    correctIndex: 1,
    explanation: 'new WebSocket(url) で接続。',
  },
  {
    id: 'socket-io',
    question: '「Socket.IO」について、正しい説明はどれですか？',
    options: [
      'クライアントが HTTP Upgrade リクエストを送り、サーバーが 101 Switching Protocols で応答します。',
      'チャット、株価ティッカー、共同編集、ゲームなど「即座にデータを送受信」したい場面では WebSocket が最適です。',
      'HTTP はリクエスト・レスポンスモデルで、サーバーからクライアントへのプッシュができません。',
      'WebSocket の上に自動再接続、ルーム、名前空間、フォールバック（ロングポーリング）を提供します。',
    ],
    correctIndex: 3,
    explanation: 'WebSocket の上に自動再接続、ルーム、名前空間、フォールバック（ロングポーリング）を提供します。',
  },
  {
    id: 'patterns',
    question: '「リアルタイムパターン」について、正しい説明はどれですか？',
    options: [
      'クライアントが HTTP Upgrade リクエストを送り、サーバーが 101 Switching Protocols で応答します。',
      'メッセージ送信 → サーバーが DB に保存 → ルーム内の全クライアントに配信。',
      'チャット、株価ティッカー、共同編集、ゲームなど「即座にデータを送受信」したい場面では WebSocket が最適です。',
      'HTTP はリクエスト・レスポンスモデルで、サーバーからクライアントへのプッシュができません。',
    ],
    correctIndex: 1,
    explanation: 'メッセージ送信 → サーバーが DB に保存 → ルーム内の全クライアントに配信。',
  },
  {
    id: 'scaling',
    question: '「スケーリング」について、正しい説明はどれですか？',
    options: [
      'チャット、株価ティッカー、共同編集、ゲームなど「即座にデータを送受信」したい場面では WebSocket が最適です。',
      'WebSocket は接続を維持するため、ロードバランサーで複数サーバーに分散すると、同じユーザーの接続が異なるサーバーに行く可能性があります。',
      'クライアントが HTTP Upgrade リクエストを送り、サーバーが 101 Switching Protocols で応答します。',
      'HTTP はリクエスト・レスポンスモデルで、サーバーからクライアントへのプッシュができません。',
    ],
    correctIndex: 1,
    explanation: 'WebSocket は接続を維持するため、ロードバランサーで複数サーバーに分散すると、同じユーザーの接続が異なるサーバーに行く可能性があります。',
  },
  {
    id: 'react-integration',
    question: '「React との統合」について、正しい説明はどれですか？',
    options: [
      'チャット、株価ティッカー、共同編集、ゲームなど「即座にデータを送受信」したい場面では WebSocket が最適です。',
      'HTTP はリクエスト・レスポンスモデルで、サーバーからクライアントへのプッシュができません。',
      'useWebSocket フックで接続管理をカプセル化します。',
      'クライアントが HTTP Upgrade リクエストを送り、サーバーが 101 Switching Protocols で応答します。',
    ],
    correctIndex: 2,
    explanation: 'useWebSocket フックで接続管理をカプセル化します。',
  },
  {
    id: 'security',
    question: '「WebSocket のセキュリティ」について、正しい説明はどれですか？',
    options: [
      'HTTP はリクエスト・レスポンスモデルで、サーバーからクライアントへのプッシュができません。',
      'WebSocket のハンドシェイク時に Cookie やトークンで認証します。',
      'チャット、株価ティッカー、共同編集、ゲームなど「即座にデータを送受信」したい場面では WebSocket が最適です。',
      'クライアントが HTTP Upgrade リクエストを送り、サーバーが 101 Switching Protocols で応答します。',
    ],
    correctIndex: 1,
    explanation: 'WebSocket のハンドシェイク時に Cookie やトークンで認証します。',
  },
  {
    id: 'testing',
    question: '「テスト」について、正しい説明はどれですか？',
    options: [
      'socket.io-client のテスト用インスタンスでサーバーに接続し、emit → on で送受信を検証します。',
      'クライアントが HTTP Upgrade リクエストを送り、サーバーが 101 Switching Protocols で応答します。',
      'HTTP はリクエスト・レスポンスモデルで、サーバーからクライアントへのプッシュができません。',
      'チャット、株価ティッカー、共同編集、ゲームなど「即座にデータを送受信」したい場面では WebSocket が最適です。',
    ],
    correctIndex: 0,
    explanation: 'socket.io-client のテスト用インスタンスでサーバーに接続し、emit → on で送受信を検証します。',
  },
  {
    id: 'next-steps',
    question: '「次のステップ」について、正しい説明はどれですか？',
    options: [
      '① Supabase 入門 — Realtime 機能 ② GraphQL 入門 — Subscription ③ 認証入門 — WebSocket 認証 ④ Docker …',
      'チャット、株価ティッカー、共同編集、ゲームなど「即座にデータを送受信」したい場面では WebSocket が最適です。',
      'HTTP はリクエスト・レスポンスモデルで、サーバーからクライアントへのプッシュができません。',
      'クライアントが HTTP Upgrade リクエストを送り、サーバーが 101 Switching Protocols で応答します。',
    ],
    correctIndex: 0,
    explanation: '① Supabase 入門 — Realtime 機能 ② GraphQL 入門 — Subscription ③ 認証入門 — WebSocket 認証 ④ Docker …',
  },
]
