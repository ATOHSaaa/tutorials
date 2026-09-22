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
    title: "npm とは？",
    description: "npm の役割と Node.js エコシステムでの位置づけを学びます",
    sections: [
      {
        heading: "npm の3つの意味",
        content: "npm は① Node Package Manager（ツール）、② npm レジストリ（パッケージの公開場所）、③ npm 社（運営会社）を指します。開発者が最も触るのは①と②です。\n\n`npm install react` でレジストリからパッケージをダウンロードし、プロジェクトの node_modules に配置します。世界中の開発者が作った数百万のパッケージを再利用できるのが npm の力です。"
      },
      {
        heading: "yarn と pnpm",
        content: "代替のパッケージマネージャーに yarn と pnpm があります。pnpm はディスク容量を節約するシンボリックリンク方式、yarn は Plug'n'Play など独自機能があります。\n\n基本概念（package.json、semver、lockfile）は共通です。npm を理解すれば他のツールにもすぐ移行できます。",
        tip: "デモで npm install の実行ログを追い、何が起きているか確認してみてください。"
      },
      {
        heading: "node_modules",
        content: "インストールされたパッケージは node_modules フォルダに置かれます。依存パッケージの依存（推移的依存）もすべてここに展開されるため、サイズが大きくなりがちです。\n\nnode_modules は Git にコミットしません。.gitignore に追加し、lockfile から `npm ci` で再現します。"
      }
    ]
  },
  {
    id: "package-json",
    title: "package.json",
    description: "プロジェクトの設計図となる package.json を学びます",
    sections: [
      {
        heading: "主要フィールド",
        content: "• name — パッケージ名（公開時は一意）\n• version — セマンティックバージョン\n• description — 説明文\n• main / exports — エントリポイント\n• scripts — 実行コマンド\n• dependencies — 本番依存\n• devDependencies — 開発時のみの依存",
        code: "{\n  \name\: \"my-app\",\n  \version\: \"1.0.0\",\n  \type\: \"module\",\n  \scripts\: { \dev\: \"vite\", \build\: \"vite build\" },\n  \dependencies\: { \react\: \"^18.3.0\" },\n  \devDependencies\: { \vite\: \"^5.0.0\" }\n}"
      },
      {
        heading: "dependencies と devDependencies",
        content: "アプリの実行に必要なものは dependencies、ビルド・テスト・Lint だけに使うものは devDependencies に入れます。`npm install -D eslint` で devDependencies に追加します。\n\n本番デプロイ時は `npm ci --omit=dev` で devDependencies を除外し、イメージサイズとインストール時間を削減します。"
      },
      {
        heading: "exports フィールド",
        content: "Node.js の \"exports\" フィールドは、パッケージの公開 API を明示します。サブパス import を制御でき、内部ファイルへの直接アクセスを防げます。\n\nライブラリを公開する際は exports を設計し、使う側が安定したインポートパスを使えるようにします。"
      }
    ]
  },
  {
    id: "install",
    title: "パッケージのインストール",
    description: "npm install の挙動とオプションを学びます",
    sections: [
      {
        heading: "基本コマンド",
        content: "`npm install` は package.json の依存をすべてインストールします。`npm install lodash` は dependencies に追加してインストール、`npm install -D typescript` は devDependencies に追加します。\n\n`npm uninstall lodash` で削除、`npm update` で semver 範囲内の最新版に更新します。",
        code: "npm install          # package.json の全依存\nnpm install axios    # 追加インストール\nnpm install -D vitest  # 開発依存として追加\nnpm uninstall axios  # 削除"
      },
      {
        heading: "グローバルインストール",
        content: "`npm install -g typescript` でグローバルにインストールします。CLI ツール（create-vite、eslint など）向きですが、プロジェクト依存はローカルが推奨です。\n\nnpx（または npm exec）で一時実行すれば、グローバルインストール不要で `npx create-vite@latest` のように使えます。"
      },
      {
        heading: "インストールの仕組み",
        content: "npm は依存グラフを解決し、互換性のあるバージョンを選んでダウンロードします。peerDependencies（React プラグインが React 本体を要求するなど）の警告は無視せず、適切なバージョンを揃えます。\n\n`npm ls react` で依存ツリーを確認、`npm why lodash` でなぜそのパッケージが入っているか調べられます。",
        tip: "デモで npm ls の出力を見て、推移的依存の深さを確認してみてください。"
      }
    ]
  },
  {
    id: "semver",
    title: "セマンティックバージョニング",
    description: "バージョン番号の意味と ^ ~ の使い方を学びます",
    sections: [
      {
        heading: "SemVer の形式",
        content: "バージョンは MAJOR.MINOR.PATCH（例: 2.4.1）です。\n\n• MAJOR — 破壊的変更（API の非互換）\n• MINOR — 後方互換の機能追加\n• PATCH — 後方互換のバグ修正\n\n1.0.0 未満は「初期開発」で破壊的変更が MINOR でも起きることがあります。"
      },
      {
        heading: "バージョン範囲",
        content: "• `^18.3.0` — 18.x.x の最新（18.4.0 OK、19.0.0 NG）\n• `~18.3.0` — 18.3.x の最新（18.3.5 OK、18.4.0 NG）\n• `18.3.0` — ピン留め（厳密にこのバージョン）\n\n^ が最も一般的です。ライブラリは ^、アプリの本番依存は lockfile で固定が安全です。",
        code: "\dependencies\: {\n  \react\: \"^18.3.1\",    // 18.x の最新\n  \lodash\: \"~4.17.21\",  // 4.17.x の最新\n  \express\: \"4.21.0\"    // 固定\n}"
      },
      {
        heading: "アップデート戦略",
        content: "定期的に `npm outdated` で古いパッケージを確認し、セキュリティパッチは早めに適用します。MAJOR アップデートは CHANGELOG を読み、破壊的変更への対応を計画します。\n\nRenovate や Dependabot で PR を自動作成するのが大規模プロジェクトでは標準的です。"
      }
    ]
  },
  {
    id: "scripts",
    title: "npm scripts",
    description: "package.json の scripts でタスクを自動化します",
    sections: [
      {
        heading: "scripts の基本",
        content: "scripts はシェルコマンドのエイリアスです。`npm run build` で `\build\: \"vite build\"` を実行します。`prebuild` や `postbuild` で前後処理を自動実行できます。\n\nチーム全員が同じコマンドを使うことで、「私の環境では動く」問題を減らせます。",
        code: "\scripts\: {\n  \dev\: \"vite\",\n  \build\: \"tsc && vite build\",\n  \preview\: \"vite preview\",\n  \lint\: \"eslint src/\",\n  \test\: \"vitest run\"\n}"
      },
      {
        heading: "ライフサイクルスクリプト",
        content: "npm install 時に `postinstall` が走り、ネイティブモジュールのビルドなどが行われます。`prepare` は git clone 後や npm pack 前に実行されます。\n\nhusky のセットアップで prepare を使うパターンがよく見られます。意図しないスクリプト実行に注意し、信頼できるパッケージだけを入れましょう。"
      },
      {
        heading: "環境変数の渡し方",
        content: "クロスプラットフォームで環境変数を渡すには cross-env を使います。`\build:staging\: \"cross-env NODE_ENV=staging vite build\"`\n\n.env ファイルは dotenv やフレームワーク（Vite の import.meta.env）が読み込みます。シークレットは scripts に直書きしないでください。"
      }
    ]
  },
  {
    id: "npx",
    title: "npx と npm exec",
    description: "パッケージをインストールせず一時実行する方法を学びます",
    sections: [
      {
        heading: "npx の役割",
        content: "npx はパッケージを一時ダウンロードして実行し、終わったら削除します。`npx create-vite@latest` でプロジェクト生成ツールを毎回最新版で実行できます。\n\nグローバルに汚さず、バージョンも `@latest` や `@5` で指定できるのが利点です。"
      },
      {
        heading: "npm exec",
        content: "npm 7+ では `npm exec` が npx の正式な代替です。`npm exec eslint --fix .` のように動作はほぼ同じです。\n\nローカルにインストール済みのパッケージは node_modules/.bin から実行され、未インストールならレジストリから取得します。",
        code: "npx create-vite@latest my-app -- --template react-ts\nnpx prisma init\nnpm exec tsc --noEmit"
      },
      {
        heading: "プロジェクト内の CLI",
        content: "devDependencies に入れたツールは `npm run lint` 経由か `npx eslint` で実行します。CI では `npm ci` 後に `npm run test` が定番フローです。\n\npackage.json の scripts にラップすることで、長いオプション付きコマンドを短い名前で呼べます。"
      }
    ]
  },
  {
    id: "lockfile",
    title: "package-lock.json",
    description: "ロックファイルの役割と npm ci を学びます",
    sections: [
      {
        heading: "lockfile の目的",
        content: "package-lock.json はインストール時に解決された exact バージョンを記録します。チームメンバー・CI・本番で同じ依存ツリーを再現するために必須です。\n\npackage.json の ^18.3.0 は範囲ですが、lockfile は 18.3.1 のような具体バージョンを固定します。"
      },
      {
        heading: "npm ci vs npm install",
        content: "CI や本番では `npm ci`（clean install）を使います。lockfile を厳密に守り、node_modules を削除してから再インストールするため、再現性が高いです。\n\n開発時の新規追加は `npm install`、lockfile 更新後の同期は `npm ci` と使い分けます。",
        code: "# CI（GitHub Actions）の例\n- run: npm ci\n- run: npm run build\n- run: npm test"
      },
      {
        heading: "lockfile の管理",
        content: "package-lock.json は Git にコミットします。手動編集は避け、npm コマンドで更新します。コンフリクト時は `npm install` で再生成するか、マージ後に `rm -rf node_modules && npm ci` で確認します。\n\npnpm は pnpm-lock.yaml、yarn は yarn.lock が同じ役割です。"
      }
    ]
  },
  {
    id: "publish",
    title: "パッケージの公開",
    description: "npm レジストリへの公開手順を学びます",
    sections: [
      {
        heading: "公開の準備",
        content: "package.json の name はレジストリで一意である必要があります。スコープ付き `@myorg/utils` は組織向きです。files フィールドで公開するファイルを限定し、src やテストを除外します。\n\n`npm login` で認証し、`npm publish` で公開します。初回は `npm publish --access public`（スコープパッケージの場合）が必要です。",
        code: "{\n  \name\: \"@myorg/string-utils\",\n  \version\: \"1.0.0\",\n  \files\: [\"dist/\", \"README.md\"],\n  \main\: \"dist/index.js\",\n  \types\: \"dist/index.d.ts\"\n}"
      },
      {
        heading: "バージョンの更新",
        content: "`npm version patch` で PATCH を上げて git tag を作成します。minor、major も同様です。公開前に `npm pack` で tarball の内容を確認できます。\n\n公開後のバージョンは取り消せません（unpublish は24時間以内など制限あり）。慎重にバージョンを上げましょう。"
      },
      {
        heading: "プライベートパッケージ",
        content: "組織向け npm の有料プランや GitHub Packages、Verdaccio（自前レジストリ）でプライベートパッケージを運用できます。\n\n社内ライブラリを npm 化すると、複数プロジェクトでの再利用が楽になります。"
      }
    ]
  },
  {
    id: "workspaces",
    title: "npm workspaces",
    description: "モノレポで複数パッケージを管理する方法を学びます",
    sections: [
      {
        heading: "workspaces の設定",
        content: "package.json に `\workspaces\: [\"packages/*\"]` を追加すると、サブパッケージをまとめて管理できます。ルートで `npm install` すると全ワークスペースの依存が hoist されます。\n\nTurborepo や Nx と組み合わせてビルド・テストを高速化するのが現代的なモノレポ構成です。",
        code: "{\n  \name\: \"my-monorepo\",\n  \workspaces\: [\"apps/*\", \"packages/*\"]\n}\n\n# 特定ワークスペースに追加\nnpm install react -w apps/web"
      },
      {
        heading: "ワークスペース間の依存",
        content: "同じモノレポ内のパッケージは `\@myorg/ui\: \"*\"` や `\"workspace:*\"` で参照します。npm link の手動操作が不要になります。\n\n共通 UI コンポーネント、共有 utils、設定パッケージ（eslint-config）をワークスペースに分けるパターンが一般的です。"
      },
      {
        heading: "モノレポの注意点",
        content: "依存の hoist により、サブパッケージが宣言していないパッケージが使える「幽霊依存」が起きることがあります。pnpm は厳格な依存管理でこれを防ぎます。\n\nルートの package.json に devDependencies を集約し、各パッケージは必要最小限に保つのがベストプラクティスです。",
        tip: "Turborepo チュートリアルでモノレポのビルド最適化も学んでみてください。"
      }
    ]
  },
  {
    id: "next-steps",
    title: "次のステップ",
    description: "npm の学習を続けるための道筋を確認します",
    sections: [
      {
        heading: "次に学ぶこと",
        content: "① Node.js 入門 — ランタイムの基礎\n② Turborepo — モノレポのビルド高速化\n③ CI/CD — npm ci をパイプラインに組み込む\n④ セキュリティ — npm audit と依存の脆弱性"
      },
      {
        heading: "学習の道筋",
        content: "npm は毎日の開発で触るツールです。lockfile をコミットする、npm ci を CI で使う、semver を理解する——この3つだけでもトラブルが大幅に減ります。\n\nおめでとうございます！npm 入門をすべて学びました 🎉",
        tip: "自分のプロジェクトの package.json を見直し、不要な依存を整理してみてください。"
      },
      {
        heading: "実践チェックリスト",
        content: "• lockfile を Git 管理しているか\n• devDependencies と dependencies を正しく分けているか\n• npm audit で脆弱性を定期チェックしているか\n• scripts でチーム共通のコマンドを定義しているか"
      }
    ]
  }
]
