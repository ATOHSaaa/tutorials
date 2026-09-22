export interface Lesson {
  id: string
  title: string
  description: string
  sections: Section[]
}

export interface Section {
  heading: string
  content: string
  code?: string
  tip?: string
}

export const lessons: Lesson[] = [
  {
    id: "intro",
    title: "WebSocket とは？",
    description: "リアルタイム通信の必要性と WebSocket の位置づけを理解します",
    sections: [
      {
        heading: "HTTP の限界",
        content: "HTTP はリクエスト・レスポンスモデルで、サーバーからクライアントへのプッシュができません。リアルタイム更新にはポーリング（定期的な GET）やロングポーリング（接続を長く保持）が使われていましたが、非効率です。\n\nチャット、株価ティッカー、共同編集、ゲームなど「即座にデータを送受信」したい場面では WebSocket が最適です。"
      },
      {
        heading: "WebSocket の特徴",
        content: "TCP 上の双方向通信プロトコルです。HTTP でハンドシェイク後、接続を WebSocket にアップグレードし、以降はフルデュプlex 通信が可能です。ヘッダーオーバーヘッドが小さく、低レイテンシです。\n\nws:// または wss://（暗号化）の URL で接続します。"
      },
      {
        heading: "ユースケース",
        content: "• チャットアプリ • リアルタイム通知 • 共同編集 • ライブスコア • IoT データ配信 • オンラインゲーム\n\nSupabase Realtime、Socket.IO、Pusher などのライブラリ/サービスが WebSocket を抽象化しています。",
        tip: "デモで WebSocket 接続のハンドシェイクを Network タブで確認してみてください。"
      }
    ]
  },
  {
    id: "protocol",
    title: "WebSocket プロトコル",
    description: "ハンドシェイクとメッセージフレームを学びます",
    sections: [
      {
        heading: "ハンドシェイク",
        content: "クライアントが HTTP Upgrade リクエストを送り、サーバーが 101 Switching Protocols で応答します。Sec-WebSocket-Key と Sec-WebSocket-Accept で接続を確認します。\n\n通常の HTTP リクエストと同じポート（80/443）を使うため、ファイアウォールの設定変更が不要です。"
      },
      {
        heading: "メッセージフレーム",
        content: "テキストフレーム（UTF-8 文字列）とバイナリフレーム（画像、音声等）を送受信できます。ping/pong フレームで接続の生存確認（ハートビート）を行います。\n\n接続が切れた場合、クライアントは自動再接続（exponential backoff）を実装するのが一般的です。"
      },
      {
        heading: "HTTP との共存",
        content: "同じサーバーで HTTP と WebSocket を共存させます。Express では HTTP サーバーを作成し、WebSocket サーバーをアタッチするパターンが一般的です。"
      }
    ]
  },
  {
    id: "native-api",
    title: "ネイティブ WebSocket API",
    description: "ブラウザと Node.js の WebSocket API を学びます",
    sections: [
      {
        heading: "ブラウザ側",
        content: "new WebSocket(url) で接続。onopen、onmessage、onclose、onerror イベントで状態を監視します。",
        code: "const ws = new WebSocket(\"wss://example.com/ws\");\n\nws.onopen = () => {\n  console.log(\"接続完了\");\n  ws.send(JSON.stringify({ type: \"join\", room: \"general\" }));\n};\n\nws.onmessage = (event) => {\n  const data = JSON.parse(event.data);\n  console.log(\"受信:\", data);\n};\n\nws.onclose = () => console.log(\"切断\");\nws.send(\"Hello!\");"
      },
      {
        heading: "Node.js 側（ws パッケージ）",
        content: "ws パッケージで WebSocket サーバーを構築します。",
        code: "import { WebSocketServer } from \"ws\";\n\nconst wss = new WebSocketServer({ port: 8080 });\n\nwss.on(\"connection\", (ws) => {\n  ws.on(\"message\", (data) => {\n    const msg = JSON.parse(data);\n    wss.clients.forEach(client => {\n      if (client.readyState === ws.OPEN) {\n        client.send(JSON.stringify({ type: \"broadcast\", data: msg }));\n      }\n    });\n  });\n});"
      },
      {
        heading: "メッセージ形式",
        content: "JSON が最も一般的です。type フィールドでメッセージ種別を区別し、ルーティングします。{ type: \"chat\", payload: { text: \"Hello\" } } のような構造が定番です。"
      }
    ]
  },
  {
    id: "socket-io",
    title: "Socket.IO",
    description: "高機能なリアルタイムライブラリを学びます",
    sections: [
      {
        heading: "Socket.IO の特徴",
        content: "WebSocket の上に自動再接続、ルーム、名前空間、フォールバック（ロングポーリング）を提供します。本番のリアルタイムアプリでは Socket.IO が最も広く使われています。",
        code: "// サーバー\nimport { Server } from \"socket.io\";\nconst io = new Server(httpServer, { cors: { origin: \"*\" } });\n\nio.on(\"connection\", (socket) => {\n  socket.join(\"room-1\");\n  socket.on(\"chat\", (msg) => io.to(\"room-1\").emit(\"chat\", msg));\n  socket.on(\"disconnect\", () => console.log(\"切断\"));\n});"
      },
      {
        heading: "クライアント",
        content: "socket.io-client で接続し、emit/on でイベントベースの通信を行います。",
        code: "import { io } from \"socket.io-client\";\nconst socket = io(\"http://localhost:3000\");\n\nsocket.on(\"connect\", () => console.log(\"接続:\", socket.id));\nsocket.emit(\"chat\", { text: \"Hello!\" });\nsocket.on(\"chat\", (msg) => console.log(\"受信:\", msg));"
      },
      {
        heading: "ルームと名前空間",
        content: "socket.join(room) でルームに参加し、io.to(room).emit() でルーム内のクライアントだけに送信します。名前空間（io.of(\"/admin\")）で機能を分離できます。\n\nチャットの部屋分け、ゲームのマッチングルームなどに使います。"
      }
    ]
  },
  {
    id: "patterns",
    title: "リアルタイムパターン",
    description: "チャット、通知、共同編集の実装パターンを学びます",
    sections: [
      {
        heading: "チャットアプリ",
        content: "メッセージ送信 → サーバーが DB に保存 → ルーム内の全クライアントに配信。履歴は接続時に DB から取得して表示します。\n\nメッセージ ID とタイムスタンプで順序を保証し、重複排除します。"
      },
      {
        heading: "リアルタイム通知",
        content: "ユーザーごとの通知チャンネル（user:{id}）を作成し、イベント発生時にそのチャンネルにプッシュします。未読カウントの更新もリアルタイムで配信します。",
        code: "socket.on(\"connection\", (socket) => {\n  const userId = authenticate(socket);\n  socket.join(`user:${userId}`);\n});\n\nfunction notifyUser(userId, notification) {\n  io.to(`user:${userId}`).emit(\"notification\", notification);\n}"
      },
      {
        heading: "Presence（オンライン状態）",
        content: "接続・切断時にユーザーのオンライン状態を更新し、ルーム内のメンバーに配信します。Socket.IO の socket.data でユーザー情報を保持します。",
        tip: "デモで2つのブラウザタブを開き、チャットメッセージがリアルタイムで同期されることを確認してみてください。"
      }
    ]
  },
  {
    id: "scaling",
    title: "スケーリング",
    description: "複数サーバーでの WebSocket 運用を学びます",
    sections: [
      {
        heading: "スティッキーセッションの問題",
        content: "WebSocket は接続を維持するため、ロードバランサーで複数サーバーに分散すると、同じユーザーの接続が異なるサーバーに行く可能性があります。ルーム内の配信が届かない問題が起きます。"
      },
      {
        heading: "Redis Pub/Sub",
        content: "Socket.IO の Redis Adapter で、サーバー間のメッセージを Redis Pub/Sub で中継します。どのサーバーに接続していても、全クライアントにメッセージが届きます。",
        code: "import { createAdapter } from \"@socket.io/redis-adapter\";\nimport { createClient } from \"redis\";\n\nconst pubClient = createClient({ url: \"redis://localhost:6379\" });\nconst subClient = pubClient.duplicate();\nio.adapter(createAdapter(pubClient, subClient));"
      },
      {
        heading: "接続数の管理",
        content: "1サーバーあたり数万の WebSocket 接続が可能ですが、メモリと CPU の監視が重要です。不要な接続はタイムアウトで切断し、ping/pong で死活監視します。"
      }
    ]
  },
  {
    id: "react-integration",
    title: "React との統合",
    description: "React アプリで WebSocket を使う方法を学びます",
    sections: [
      {
        heading: "カスタムフック",
        content: "useWebSocket フックで接続管理をカプセル化します。コンポーネントのマウント時に接続、アンマウント時に切断します。",
        code: "function useWebSocket(url) {\n  const [messages, setMessages] = useState([]);\n  const wsRef = useRef(null);\n\n  useEffect(() => {\n    const ws = new WebSocket(url);\n    ws.onmessage = (e) => setMessages(prev => [...prev, JSON.parse(e.data)]);\n    wsRef.current = ws;\n    return () => ws.close();\n  }, [url]);\n\n  const send = (data) => wsRef.current?.send(JSON.stringify(data));\n  return { messages, send };\n}"
      },
      {
        heading: "状態管理",
        content: "受信メッセージは useState や Zustand で管理します。大量のメッセージでは仮想スクロール（react-virtuoso 等）で DOM ノード数を抑制します。\n\n接続状態（connecting、connected、disconnected）を UI に表示し、再接続中はインジケーターを出します。"
      },
      {
        heading: "Socket.IO + React",
        content: "socket.io-client のシングルトンインスタンスを Context で提供し、コンポーネントから useSocket() でアクセスするパターンが一般的です。"
      }
    ]
  },
  {
    id: "security",
    title: "WebSocket のセキュリティ",
    description: "認証と入力検証を学びます",
    sections: [
      {
        heading: "接続時の認証",
        content: "WebSocket のハンドシェイク時に Cookie やトークンで認証します。未認証の接続は即座に切断します。",
        code: "io.use((socket, next) => {\n  const token = socket.handshake.auth.token;\n  try {\n    socket.data.user = jwt.verify(token, SECRET);\n    next();\n  } catch {\n    next(new Error(\"認証失敗\"));\n  }\n});"
      },
      {
        heading: "入力検証",
        content: "受信メッセージの type と payload を検証します。Zod スキーマでメッセージ形式を定義し、不正なメッセージは無視またはエラーを返します。\n\nメッセージサイズの上限を設定し、大量送信（スパム）を防ぎます。"
      },
      {
        heading: "レート制限",
        content: "接続ごと・ユーザーごとにメッセージ送信レートを制限します。超過時は警告を送り、繰り返す場合は切断します。"
      }
    ]
  },
  {
    id: "testing",
    title: "テスト",
    description: "WebSocket 機能のテスト方法を学びます",
    sections: [
      {
        heading: "サーバーのテスト",
        content: "socket.io-client のテスト用インスタンスでサーバーに接続し、emit → on で送受信を検証します。",
        code: "import { io as Client } from \"socket.io-client\";\n\ntest(\"chat message broadcast\", async () => {\n  const client = Client(`http://localhost:${port}`);\n  await new Promise(r => client.on(\"connect\", r));\n  client.emit(\"chat\", { text: \"test\" });\n  const msg = await new Promise(r => client.on(\"chat\", r));\n  expect(msg.text).toBe(\"test\");\n  client.disconnect();\n});"
      },
      {
        heading: "E2E テスト",
        content: "Playwright で WebSocket 通信を含む UI をテストします。メッセージ送信 → 画面に表示されることを検証します。"
      },
      {
        heading: "負荷テスト",
        content: "artillery や k6 で大量の WebSocket 接続をシミュレートし、サーバーのスループットと安定性を検証します。"
      }
    ]
  },
  {
    id: "next-steps",
    title: "次のステップ",
    description: "WebSocket の学習を続けるための道筋を確認します",
    sections: [
      {
        heading: "次に学ぶこと",
        content: "① Supabase 入門 — Realtime 機能\n② GraphQL 入門 — Subscription\n③ 認証入門 — WebSocket 認証\n④ Docker 入門 — WebSocket サーバーのコンテナ化"
      },
      {
        heading: "学習の道筋",
        content: "WebSocket はリアルタイム体験を実現する核心技術です。ネイティブ API で仕組みを理解し、Socket.IO で実用的なアプリを構築し、Redis でスケール——段階的に学びましょう。\n\nおめでとうございます！WebSocket 入門をすべて学びました 🎉",
        tip: "シンプルなチャットアプリを Socket.IO で作り、複数タブでリアルタイム通信を試してみてください。"
      },
      {
        heading: "実践チェックリスト",
        content: "• 接続時に認証を行っているか\n• 自動再接続を実装しているか\n• メッセージ形式を定義・検証しているか\n• スケール時に Redis Adapter を使っているか\n• レート制限を設けているか"
      }
    ]
  }
]
