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
    title: "Docker とは？",
    description: "コンテナ技術の概念と仮想化との違いを理解します",
    sections: [
      {
        heading: "コンテナとは",
        content: "コンテナはアプリケーションとその依存関係（ランタイム、ライブラリ、設定）をパッケージ化した軽量な実行単位です。「どのマシンでも同じように動く」環境を提供します。\n\n「私のマシンでは動くのに」問題を解決し、開発・テスト・本番で同一の環境を保証します。"
      },
      {
        heading: "VM との違い",
        content: "仮想マシン（VM）は OS 全体を仮想化し、数 GB のディスクと数分の起動時間が必要です。コンテナはホスト OS のカーネルを共有し、数 MB〜数百 MB、数秒で起動します。\n\nVM は強い隔離が必要な場合、コンテナはアプリの配布・実行が目的の場合に適しています。",
        tip: "デモで docker run hello-world を実行し、コンテナが起動して終了する流れを確認してみてください。"
      },
      {
        heading: "Docker の構成要素",
        content: "Docker Engine（実行環境）、Docker Image（テンプレート）、Docker Container（実行インスタンス）、Dockerfile（イメージの設計図）、Docker Hub（イメージレジストリ）、Docker Compose（複数コンテナの管理）。"
      }
    ]
  },
  {
    id: "images",
    title: "イメージ",
    description: "Docker イメージの概念と操作を学びます",
    sections: [
      {
        heading: "イメージの構造",
        content: "イメージはレイヤー（層）の積み重ねです。各レイヤーは変更の差分を記録し、共通レイヤーは再利用されるため、ディスク効率が良いです。\n\nベースイメージ（node:20-alpine）にアプリケーションコードを追加するレイヤーを重ねて独自イメージを作ります。"
      },
      {
        heading: "イメージの操作",
        content: "docker pull でレジストリから取得、docker images で一覧、docker rmi で削除します。",
        code: "docker pull node:20-alpine\ndocker images\ndocker rmi node:20-alpine\ndocker image prune  # 未使用イメージを一括削除"
      },
      {
        heading: "タグとバージョン",
        content: "イメージ名:タグ の形式です。node:20-alpine は Node.js 20 の Alpine Linux 版。latest タグは避け、具体的なバージョンを指定するのが本番のベストプラクティスです。\n\nalpine は最小限の Linux ディストリビューションで、イメージサイズを大幅に削減できます。"
      }
    ]
  },
  {
    id: "containers",
    title: "コンテナ",
    description: "コンテナのライフサイクル管理を学びます",
    sections: [
      {
        heading: "基本操作",
        content: "docker run でコンテナを起動、docker ps で一覧、docker stop/start で停止・再開、docker rm で削除します。",
        code: "docker run -d --name my-nginx -p 8080:80 nginx\ndocker ps\ndocker logs my-nginx\ndocker stop my-nginx\ndocker rm my-nginx"
      },
      {
        heading: "ポートマッピング",
        content: "-p ホストポート:コンテナポート でポートを公開します。-p 8080:80 はホストの 8080 をコンテナの 80 にマッピングします。\n\n-d はバックグラウンド実行、--name はコンテナに名前を付け、-it はインタラクティブモード（シェル接続用）です。"
      },
      {
        heading: "コンテナ内の操作",
        content: "docker exec -it コンテナ名 sh でコンテナ内のシェルに入ります。デバッグやログ確認に使います。\n\ndocker logs -f でリアルタイムログを追跡できます。",
        tip: "デモで nginx コンテナを起動し、localhost:8080 でアクセスしてみてください。"
      }
    ]
  },
  {
    id: "dockerfile",
    title: "Dockerfile",
    description: "独自イメージの作成を学びます",
    sections: [
      {
        heading: "Dockerfile の基本",
        content: "FROM（ベースイメージ）、WORKDIR（作業ディレクトリ）、COPY（ファイルコピー）、RUN（コマンド実行）、EXPOSE（ポート公開）、CMD（起動コマンド）が基本指令です。",
        code: "FROM node:20-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --omit=dev\nCOPY . .\nEXPOSE 3000\nCMD [\"node\", \"index.js\"]"
      },
      {
        heading: "レイヤーキャッシュ",
        content: "Dockerfile の各命令はレイヤーを作成します。変更のないレイヤーはキャッシュが使われ、ビルドが高速化されます。\n\npackage.json の変更が少ない場合、COPY package*.json → RUN npm ci を先に書くことで、ソースコード変更時に npm ci をスキップできます。"
      },
      {
        heading: "マルチステージビルド",
        content: "ビルド用ステージと実行用ステージを分離し、最終イメージにビルドツールを含めません。イメージサイズを大幅に削減できます。",
        code: "FROM node:20-alpine AS builder\nWORKDIR /app\nCOPY . .\nRUN npm ci && npm run build\n\nFROM node:20-alpine\nWORKDIR /app\nCOPY --from=builder /app/dist ./dist\nCOPY package*.json ./\nRUN npm ci --omit=dev\nCMD [\"node\", \"dist/index.js\"]"
      }
    ]
  },
  {
    id: "compose",
    title: "Docker Compose",
    description: "複数コンテナの管理を学びます",
    sections: [
      {
        heading: "Compose の役割",
        content: "Web アプリ + DB + Redis など複数コンテナを docker-compose.yml で定義し、1コマンドで起動・停止します。開発環境の構築が劇的に簡単になります。",
        code: "# docker-compose.yml\nservices:\n  app:\n    build: .\n    ports: [\"3000:3000\"]\n    depends_on: [db]\n    environment:\n      DATABASE_URL: postgresql://user:pass@db:5432/mydb\n  db:\n    image: postgres:16-alpine\n    environment:\n      POSTGRES_USER: user\n      POSTGRES_PASSWORD: pass\n      POSTGRES_DB: mydb\n    volumes: [pgdata:/var/lib/postgresql/data]\nvolumes:\n  pgdata:"
      },
      {
        heading: "Compose コマンド",
        content: "docker compose up -d で起動、docker compose down で停止・削除、docker compose logs -f でログ確認、docker compose exec app sh でシェル接続。",
        code: "docker compose up -d\ndocker compose ps\ndocker compose logs -f app\ndocker compose down -v  # ボリュームも削除"
      },
      {
        heading: "開発ワークフロー",
        content: "ソースコードをボリュームマウントし、ホストの変更がコンテナに即座に反映される開発構成が一般的です。",
        code: "services:\n  app:\n    build: .\n    volumes: [\"./src:/app/src\"]\n    command: npm run dev"
      }
    ]
  },
  {
    id: "volumes",
    title: "ボリュームとネットワーク",
    description: "データ永続化とコンテナ間通信を学びます",
    sections: [
      {
        heading: "ボリューム",
        content: "コンテナは削除されるとデータも消えます。ボリュームでデータを永続化します。名前付きボリューム（Docker 管理）とバインドマウント（ホストパス指定）の2種類があります。",
        code: "# 名前付きボリューム\ndocker volume create pgdata\ndocker run -v pgdata:/var/lib/postgresql/data postgres\n\n# バインドマウント\ndocker run -v $(pwd)/data:/app/data my-app"
      },
      {
        heading: "Docker ネットワーク",
        content: "Compose ではサービス名がホスト名として使えます（db:5432 で PostgreSQL に接続）。デフォルトの bridge ネットワークでコンテナ間通信が可能です。\n\ncustom ネットワークを作成し、特定のコンテナだけを接続するセグメント分離も可能です。"
      },
      {
        heading: ".dockerignore",
        content: ".gitignore と同様、Docker ビルド時に除外するファイルを指定します。node_modules、.git、.env を除外し、ビルド速度とイメージサイズを改善します。"
      }
    ]
  },
  {
    id: "production",
    title: "本番デプロイ",
    description: "コンテナの本番運用を学びます",
    sections: [
      {
        heading: "本番イメージのベストプラクティス",
        content: "①非 root ユーザーで実行 ②alpine ベースで軽量化 ③マルチステージビルド ④ヘルスチェック設定 ⑤.secrets をイメージに含めない。\n\nイメージサイズが小さいほど、デプロイが速く、攻撃面も小さくなります。",
        code: "HEALTHCHECK --interval=30s --timeout=3s CMD curl -f http://localhost:3000/health || exit 1\n\nUSER node"
      },
      {
        heading: "コンテナオーケストレーション",
        content: "本番では Docker Compose 単体ではなく、Kubernetes（K8s）、AWS ECS、Google Cloud Run などのオーケストレーターで管理します。スケーリング、ローリングアップデート、自己修復が自動化されます。"
      },
      {
        heading: "CI/CD 統合",
        content: "GitHub Actions で Docker イメージをビルドし、レジストリ（Docker Hub、ECR、GCR）にプッシュ、本番環境にデプロイするパイプラインが標準的です。",
        code: "# GitHub Actions\n- uses: docker/build-push-action@v5\n  with:\n    push: true\n    tags: myregistry/myapp:${{ github.sha }}"
      }
    ]
  },
  {
    id: "debugging",
    title: "デバッグとトラブルシューティング",
    description: "コンテナの問題解決を学びます",
    sections: [
      {
        heading: "ログと inspect",
        content: "docker logs でアプリログ、docker inspect でコンテナの詳細設定（環境変数、マウント、ネットワーク）を確認します。",
        code: "docker logs --tail 100 -f my-app\ndocker inspect my-app | jq \".[0].Config.Env\"\ndocker stats  # リソース使用量"
      },
      {
        heading: "よくある問題",
        content: "ポート競合（Address already in use）→ 別ポートを使うか既存プロセスを停止。権限エラー → 非 root ユーザーとファイル権限を確認。ネットワーク接続失敗 → サービス名とポート、depends_on の順序を確認。\n\nコンテナ内から curl や ping で接続テストを行います。"
      },
      {
        heading: "ビルドのデバッグ",
        content: "docker build --no-cache でキャッシュを無視して再ビルド。--progress=plain で詳細なビルドログを表示します。",
        tip: "デモで意図的に壊れた Dockerfile をビルドし、エラーメッセージを読み解いてみてください。"
      }
    ]
  },
  {
    id: "dev-workflow",
    title: "開発ワークフロー",
    description: "Docker を日常開発に組み込む方法を学びます",
    sections: [
      {
        heading: "devcontainer",
        content: "VS Code の Dev Containers 機能で、プロジェクトの Docker 設定から開発環境を自動構築します。.devcontainer/devcontainer.json で設定し、チーム全員が同一環境で開発できます。"
      },
      {
        heading: "DB のコンテナ化",
        content: "PostgreSQL、Redis、MongoDB を Compose で起動し、ローカル開発の DB として使います。本番と同じ DB エンジンで開発できるのが最大のメリットです。\n\nデータは名前付きボリュームで永続化し、docker compose down -v で初期化できます。"
      },
      {
        heading: "ホットリロード",
        content: "ソースコードをバインドマウントし、nodemon や vite の --watch でファイル変更時に自動再起動します。コンテナを再ビルドせずに開発を続けられます。"
      }
    ]
  },
  {
    id: "next-steps",
    title: "次のステップ",
    description: "Docker の学習を続けるための道筋を確認します",
    sections: [
      {
        heading: "次に学ぶこと",
        content: "① Supabase 入門 — ローカル Supabase スタック\n② Prisma 入門 — コンテナ DB との連携\n③ Webセキュリティ — コンテナのセキュリティ\n④ CI/CD — Docker イメージの自動ビルド"
      },
      {
        heading: "学習の道筋",
        content: "Docker は現代の開発・デプロイの基盤技術です。Dockerfile を書き、Compose で複数サービスを管理し、CI/CD で自動デプロイ——この流れをマスターすれば、どんな環境でも自信を持って開発できます。\n\nおめでとうございます！Docker 入門をすべて学びました 🎉",
        tip: "自分のプロジェクトに docker-compose.yml を追加し、DB をコンテナ化してみてください。"
      },
      {
        heading: "実践チェックリスト",
        content: "• Dockerfile でマルチステージビルドを使っているか\n• .dockerignore を設定しているか\n• 本番イメージは非 root ユーザーで実行しているか\n• docker compose で開発環境を統一しているか\n• シークレットをイメージに含めていないか"
      }
    ]
  }
]
