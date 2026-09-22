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
    title: "GraphQL とは？",
    description: "REST との違いと GraphQL の利点を理解します",
    sections: [
      {
        heading: "REST の課題",
        content: "REST API ではエンドポイントごとに固定のレスポンス構造があります。一覧画面で名前だけ欲しいのに全フィールドが返る、詳細画面で関連データが別 API になる——オーバーフェッチとアンダーフェッチが起きます。\n\nGraphQL はクライアントが「必要なフィールドだけ」を指定して1回のリクエストで取得できるクエリ言語です。"
      },
      {
        heading: "GraphQL の特徴",
        content: "単一エンドポイント（通常 /graphql）に POST でクエリを送ります。型システム（スキーマ）で API の契約が明確になり、Introspection でドキュメント自動生成も可能です。\n\nFacebook が2012年に開発し、2015年に公開。GitHub、Shopify、Twitter など大規模サービスで採用されています。",
        tip: "デモで同じエンドポイントに異なるクエリを送り、レスポンスの差を確認してみてください。"
      },
      {
        heading: "REST との使い分け",
        content: "GraphQL が向くのは複雑なデータ要件のあるフロントエンド（モバイルアプリ、SPA）。REST が向くのはシンプルな CRUD、ファイルアップロード、キャッシュ重視の公開 API です。\n\n両方を併用するハイブリッド構成も一般的です。"
      }
    ]
  },
  {
    id: "schema",
    title: "スキーマ定義",
    description: "型、Query、Mutation の SDL を学びます",
    sections: [
      {
        heading: "SDL（Schema Definition Language）",
        content: "GraphQL スキーマは型定義で API の形状を宣言します。スカラー型（String、Int、Boolean）、オブジェクト型、enum、interface があります。",
        code: "type User {\n  id: ID!\n  name: String!\n  email: String!\n  posts: [Post!]!\n}\n\ntype Query {\n  user(id: ID!): User\n  users: [User!]!\n}"
      },
      {
        heading: "必須と配列",
        content: "! は非 null（必須）を意味します。ID! は必須の ID、[Post!]! は Post の非 null 要素の非 null 配列です。null 許容にするかは API 設計の重要な判断です。\n\nリストが空配列と null のどちらを返すかもスキーマで明示します。"
      },
      {
        heading: "Mutation と Subscription",
        content: "Query は読み取り、Mutation は書き込み（作成・更新・削除）、Subscription はリアルタイム更新です。Mutation もフィールド選択でレスポンスを制御できます。",
        code: "type Mutation {\n  createUser(input: CreateUserInput!): User!\n  deleteUser(id: ID!): Boolean!\n}\n\ninput CreateUserInput {\n  name: String!\n  email: String!\n}"
      }
    ]
  },
  {
    id: "queries",
    title: "クエリの書き方",
    description: "フィールド選択、引数、ネストを学びます",
    sections: [
      {
        heading: "基本クエリ",
        content: "クライアントは必要なフィールドだけを指定します。サーバーは指定されたフィールドだけを解決して返します。",
        code: "query {\n  user(id: \"1\") {\n    name\n    email\n    posts {\n      title\n      createdAt\n    }\n  }\n}"
      },
      {
        heading: "引数とエイリアス",
        content: "フィールドに引数を渡せます。エイリアスで同じフィールドを異なる引数で複数回取得できます。",
        code: "query {\n  admin: user(id: \"1\") { name }\n  guest: user(id: \"2\") { name }\n  users(limit: 10, offset: 0) { id name }\n}"
      },
      {
        heading: "フラグメント",
        content: "再利用可能なフィールドセットを fragment で定義します。コンポーネントごとに必要なフィールドをフラグメントにまとめるのがベストプラクティスです。",
        tip: "フラグメントはコンポーネントと1対1で定義する Colocation パターンが推奨されます。",
        code: "fragment UserInfo on User {\n  id\n  name\n  email\n}\n\nquery {\n  user(id: \"1\") {\n    ...UserInfo\n    posts { title }\n  }\n}"
      }
    ]
  },
  {
    id: "resolvers",
    title: "リゾルバ",
    description: "フィールド解決ロジックの実装を学びます",
    sections: [
      {
        heading: "リゾルバの構造",
        content: "各フィールドに対応する関数がリゾルバです。(parent, args, context, info) を受け取り、フィールドの値を返します。",
        code: "const resolvers = {\n  Query: {\n    user: (_, { id }, { db }) => db.user.findUnique({ where: { id } }),\n  },\n  User: {\n    posts: (parent, _, { db }) => db.post.findMany({ where: { authorId: parent.id } }),\n  },\n};"
      },
      {
        heading: "context の活用",
        content: "context はリクエストごとの共有データ（DB 接続、認証ユーザー、DataLoader）を渡します。認証ミドルウェアで context.user をセットするのが定番パターンです。\n\nリゾルバ内で context を参照し、認可チェックや DB アクセスを行います。"
      },
      {
        heading: "N+1 問題と DataLoader",
        content: "User の posts フィールドを各ユーザーごとに個別クエリすると N+1 が発生します。DataLoader でバッチ処理・キャッシュして1クエリにまとめます。\n\nPrisma では findMany + include、または @graphql-tools/batch-execute が使われます。"
      }
    ]
  },
  {
    id: "mutations",
    title: "ミューテーション",
    description: "データの作成・更新・削除を学びます",
    sections: [
      {
        heading: "Mutation の設計",
        content: "入力は input 型でまとめ、ペイロードは作成/更新されたオブジェクトを返します。エラーは errors フィールドか GraphQL エラーで表現します。",
        code: "mutation {\n  createPost(input: { title: \"Hello\", authorId: \"1\" }) {\n    id\n    title\n    author { name }\n  }\n}"
      },
      {
        heading: "バリデーション",
        content: "リゾルバ内で入力を検証し、不正な場合は GraphQLError を throw します。Zod や class-validator と組み合わせるのが一般的です。\n\nMutation は副作用があるため、Query より慎重に設計します。冪等性のある更新操作を心がけましょう。"
      },
      {
        heading: "楽観的 UI",
        content: "Apollo Client では update 関数でキャッシュを即座に更新し、サーバーレスポンスで確定します。UX が向上しますが、エラー時のロールバック処理が必要です。",
        tip: "デモで Mutation 実行後にキャッシュがどう更新されるか確認してみてください。"
      }
    ]
  },
  {
    id: "apollo-server",
    title: "Apollo Server",
    description: "Node.js で GraphQL サーバーを構築します",
    sections: [
      {
        heading: "セットアップ",
        content: "Apollo Server は Node.js 向けの GraphQL サーバーです。スキーマとリゾルバを渡すだけで /graphql エンドポイントが立ち上がります。",
        code: "import { ApolloServer } from \"@apollo/server\";\nimport { startStandaloneServer } from \"@apollo/server/standalone\";\n\nconst server = new ApolloServer({ typeDefs, resolvers });\nconst { url } = await startStandaloneServer(server, { listen: { port: 4000 } });"
      },
      {
        heading: "Express 統合",
        content: "既存の Express アプリに Apollo Server をマウントする場合は expressMiddleware を使います。認証ミドルウェアを context に渡すのが一般的です。\n\nCORS 設定やボディサイズ制限も Express 側で管理します。"
      },
      {
        heading: "GraphQL Playground",
        content: "開発時は Apollo Sandbox や GraphiQL でクエリを試せます。スキーマのドキュメント自動生成、変数入力、ヘッダー設定が可能です。\n\n本番環境では Playground を無効化するのがセキュリティの基本です。"
      }
    ]
  },
  {
    id: "apollo-client",
    title: "Apollo Client",
    description: "React で GraphQL データを取得します",
    sections: [
      {
        heading: "セットアップ",
        content: "ApolloProvider でアプリをラップし、useQuery / useMutation フックでデータ操作します。キャッシュ管理が自動化されるのが最大の利点です。",
        code: "import { useQuery, gql } from \"@apollo/client\";\n\nconst GET_USERS = gql`query { users { id name email } }`;\n\nfunction UserList() {\n  const { data, loading, error } = useQuery(GET_USERS);\n  if (loading) return <p>読み込み中...</p>;\n  return <ul>{data.users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;\n}"
      },
      {
        heading: "キャッシュ戦略",
        content: "Apollo Client は InMemoryCache でレスポンスを正規化保存します。fetchPolicy（cache-first、network-only など）で取得戦略を制御します。\n\ncache-first は初回ネットワーク、以降キャッシュがデフォルト。リアルタイム性が必要なら network-only や polling を使います。"
      },
      {
        heading: "エラーハンドリング",
        content: "error は GraphQL エラーとネットワークエラーを含みます。error.graphQLErrors と error.networkError で分岐処理します。\n\n部分的なデータ（一部フィールドがエラー）も data に含まれるため、null チェックが重要です。"
      }
    ]
  },
  {
    id: "pagination",
    title: "ページネーション",
    description: "Cursor ベースと Offset ベースを学びます",
    sections: [
      {
        heading: "Offset ページネーション",
        content: "limit と offset 引数で実装します。シンプルですが、データ追加・削除時にページずれが起きる問題があります。",
        code: "type Query {\n  users(limit: Int = 10, offset: Int = 0): [User!]!\n}\n\n// リゾルバ\nusers: (_, { limit, offset }, { db }) =>\n  db.user.findMany({ take: limit, skip: offset })"
      },
      {
        heading: "Cursor ページネーション",
        content: "Relay スタイルの Connection パターンが GraphQL の標準的なページネーションです。pageInfo と edges/nodes で前後ページへのナビゲーションを提供します。\n\nカーソルは通常 ID やエンコードされた位置情報です。無限スクロール UI に最適です。"
      },
      {
        heading: "総件数の取得",
        content: "Offset 方式では count クエリを別途用意します。Cursor 方式では totalCount を Connection に含めるか、別フィールドで提供するかを API 設計で決めます。",
        tip: "デモで Cursor ページネーションの「次のページ」取得を試してみてください。"
      }
    ]
  },
  {
    id: "best-practices",
    title: "ベストプラクティス",
    description: "スキーマ設計と運用の指針を学びます",
    sections: [
      {
        heading: "スキーマ設計原則",
        content: "フィールド名は camelCase、型名は PascalCase。null 許容は必要な場合のみ。深いネストは3段階程度に抑えます。\n\nバージョニングはフィールド追加（非破壊）を基本とし、削除は @deprecated で段階的に行います。"
      },
      {
        heading: "セキュリティ",
        content: "クエリの深さ制限（max depth）、複雑度制限（complexity analysis）で悪意のある深いクエリを防ぎます。認証・認可はリゾルバレベルで実装します。\n\nIntrospection は本番で無効化するのが一般的です。"
      },
      {
        heading: "パフォーマンス",
        content: "DataLoader で N+1 を解消。Redis キャッシュでホットデータを高速化。Persisted Queries でクエリ文字列の送信を省略します。\n\nフィールドレベルのキャッシュ（@cacheControl）も Apollo Server で利用可能です。"
      }
    ]
  },
  {
    id: "next-steps",
    title: "次のステップ",
    description: "GraphQL の学習を続けるための道筋を確認します",
    sections: [
      {
        heading: "次に学ぶこと",
        content: "① Prisma 入門 — GraphQL + Prisma の組み合わせ\n② HTTP 入門 — REST との比較を深掘り\n③ Supabase 入門 — GraphQL 対応の BaaS\n④ WebSocket 入門 — Subscription の基盤"
      },
      {
        heading: "学習の道筋",
        content: "GraphQL は「必要なデータだけ取得」という思想がフロントエンド開発と相性抜群です。スキーマ駆動開発、型生成（graphql-codegen）、Apollo のキャッシュ——これらを組み合わせると開発体験が大きく向上します。\n\nおめでとうございます！GraphQL 入門をすべて学びました 🎉",
        tip: "小さなブログ API を GraphQL で作り、クエリとミューテーションを Playground で試してみてください。"
      },
      {
        heading: "実践チェックリスト",
        content: "• スキーマで型を明確に定義しているか\n• N+1 を DataLoader で解消しているか\n• クエリの深さ・複雑度制限を設けているか\n• フラグメントでコンポーネントと Colocation しているか\n• 本番で Introspection を無効化しているか"
      }
    ]
  }
]
