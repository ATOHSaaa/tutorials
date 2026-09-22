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
    id: 'intro',
    title: 'CI/CD とは？',
    description: '継続的インテグレーションと継続的デリバリーの基本概念を学びます',
    sections: [
      {
        heading: 'CI/CD とは何か？',
        content:
          'CI（Continuous Integration / 継続的インテグレーション）とは、コードの変更を頻繁にメインブランチに統合し、自動テストで品質を保つ手法です。\n\nCD（Continuous Delivery / Deployment / 継続的デリバリー・デプロイ）とは、テストを通過したコードを自動で本番環境（またはステージング）に届ける手法です。',
      },
      {
        heading: 'なぜ CI/CD が必要か？',
        content:
          '• 手動デプロイのミスを減らす — 「本番に古いビルドを上げた」などの事故を防ぐ\n• 早期にバグを発見 — push した瞬間にテストが走る\n• レビューが楽になる — CI が緑ならマージの判断材料になる\n• デプロイの恐怖が減る — 小さな変更を頻繁に届けられる',
        tip: 'デモで CI と CD の違いを確認してください。',
      },
      {
        heading: 'このチュートリアルの範囲',
        content:
          'GitHub Actions を中心に、Web 開発でよく使う CI/CD の流れを学びます。Git チュートリアルで学んだ push / PR の流れに、自動テストとデプロイを足すイメージです。\n\nVercel・Cloudflare Pages・Netlify などのホスティングとの連携も扱います。',
      },
    ],
  },
  {
    id: 'pipeline',
    title: 'パイプラインの基本',
    description: 'CI/CD パイプラインの構成要素と流れを学びます',
    sections: [
      {
        heading: 'パイプラインとは？',
        content:
          'パイプラインは、コードがリポジトリに入ってから本番に届くまでの自動化されたステップの連鎖です。典型的な流れは次のとおりです。\n\n1. トリガー（push / PR）\n2. 依存関係のインストール（npm ci）\n3. Lint・型チェック\n4. テスト\n5. ビルド\n6. デプロイ',
      },
      {
        heading: 'ジョブとステップ',
        content:
          'CI ツールでは「ジョブ」が大きな単位、「ステップ」がジョブ内の個別コマンドです。ジョブは並列実行もでき、test ジョブと lint ジョブを同時に走らせる構成もよくあります。',
        code: `# 概念的な流れ
trigger: push to main
  → job: test
      step: checkout
      step: npm ci
      step: npm test
  → job: deploy (test 成功後)
      step: npm run build
      step: deploy to production`,
        tip: 'デモでパイプラインの各ステップを順番に追ってみてください。',
      },
      {
        heading: '失敗したら止まる',
        content:
          'どこかのステップが失敗すると、そのジョブは赤（失敗）になり、後続のデプロイは実行されません。これが「壊れたコードを本番に届けない」仕組みの核心です。',
      },
    ],
  },
  {
    id: 'github-actions',
    title: 'GitHub Actions 入門',
    description: 'GitHub Actions の基本概念とリポジトリへの追加方法を学びます',
    sections: [
      {
        heading: 'GitHub Actions とは？',
        content:
          'GitHub に組み込まれた CI/CD サービスです。リポジトリに YAML ファイルを置くだけで、push や PR に応じて自動でジョブを実行できます。無料枠もあり、個人・小規模プロジェクトでは十分使えます。',
      },
      {
        heading: '主要な概念',
        content:
          '• Workflow — 自動化の定義（YAML ファイル）\n• Event（トリガー）— push、pull_request、schedule など\n• Job — ワークフロー内の実行単位\n• Step — ジョブ内のコマンドやアクション\n• Runner — ジョブを実行する仮想マシン（GitHub 提供）',
        code: `# ファイルの場所
.github/workflows/ci.yml`,
      },
      {
        heading: '最小のワークフロー',
        content:
          'まずは「push されたら Hello を表示する」だけのワークフローから始めましょう。',
        code: `name: Hello CI

on: push

jobs:
  greet:
    runs-on: ubuntu-latest
    steps:
      - run: echo "Hello from GitHub Actions!"`,
        tip: 'Actions タブで実行履歴とログを確認できます。',
      },
    ],
  },
  {
    id: 'workflows',
    title: 'ワークフローファイル',
    description: 'YAML の書き方とよく使う設定を学びます',
    sections: [
      {
        heading: 'トリガーの指定',
        content:
          'on: でいつワークフローを走らせるかを決めます。ブランチやパスを絞ることもできます。',
        code: `on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

# 特定パスの変更時だけ
on:
  push:
    paths:
      - 'src/**'
      - 'package.json'`,
      },
      {
        heading: 'Node.js プロジェクトの CI',
        content:
          'actions/checkout でコードを取得し、actions/setup-node で Node をセットアップするのが定番です。',
        code: `name: CI

on:
  push:
    branches: [main]
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - run: npm ci
      - run: npm run lint
      - run: npm test`,
        tip: 'cache: npm で依存関係のダウンロードを高速化できます。',
      },
      {
        heading: 'マトリックスビルド',
        content:
          '複数の Node バージョンや OS で同時にテストする場合は strategy.matrix を使います。',
        code: `jobs:
  test:
    runs-on: \${{ matrix.os }}
    strategy:
      matrix:
        os: [ubuntu-latest, macos-latest]
        node-version: [18, 20, 22]
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: \${{ matrix.node-version }}
      - run: npm ci && npm test`,
      },
    ],
  },
  {
    id: 'testing-ci',
    title: 'テストを CI に組み込む',
    description: 'ユニットテスト・E2E テストをパイプラインに組み込む方法を学びます',
    sections: [
      {
        heading: 'テストを CI で走らせる理由',
        content:
          'ローカルでは通るが CI では落ちる — 環境の違いでバグが見つかります。逆に、CI が緑なら「少なくとも自動テストは通っている」という安心材料になります。\n\nテスト入門チュートリアルで学んだ Vitest や Playwright を CI に載せる流れです。',
      },
      {
        heading: 'Vitest の例',
        content:
          'npm test でユニットテストを実行。カバレッジレポートをアーティファクトとして保存する例もよくあります。',
        code: `jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm test -- --run
      - run: npm run test:coverage`,
      },
      {
        heading: 'PR での必須チェック',
        content:
          'GitHub の Branch protection で「CI が成功しないとマージできない」ルールを設定するのが実務の定番です。\n\nSettings → Branches → Branch protection rules → Require status checks to pass',
        tip: 'デモでテスト失敗時にデプロイが止まる流れを確認してください。',
      },
    ],
  },
  {
    id: 'build-deploy',
    title: 'ビルドとデプロイ',
    description: 'アーティファクトのビルドと本番デプロイの自動化を学びます',
    sections: [
      {
        heading: 'ビルドステップ',
        content:
          'フロントエンドでは npm run build で dist/ や .next/ を生成します。CI ではビルドが成功することを確認し、成果物をデプロイ先に送ります。',
        code: `jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run build`,
      },
      {
        heading: 'Vercel へのデプロイ',
        content:
          'Vercel は GitHub 連携で自動デプロイが最も簡単ですが、Actions からデプロイする場合は Vercel CLI や公式 Action を使います。',
        code: `# main への push で本番デプロイ
jobs:
  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: \${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'`,
      },
      {
        heading: 'Cloudflare Pages / Workers',
        content:
          'Cloudflare 入門で学んだ Wrangler を CI から実行します。API トークンをシークレットに登録して使います。',
        code: `jobs:
  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci && npm run build
      - uses: cloudflare/wrangler-action@v3
        with:
          apiToken: \${{ secrets.CLOUDFLARE_API_TOKEN }}`,
        tip: 'デモでビルド → デプロイの流れを体験してください。',
      },
    ],
  },
  {
    id: 'environments',
    title: '環境と分岐',
    description: '開発・ステージング・本番の環境分けを学びます',
    sections: [
      {
        heading: '環境の考え方',
        content:
          '• development — ローカル開発\n• preview / staging — PR や develop ブランチ向けの確認環境\n• production — 本番（main ブランチ）\n\n環境ごとに URL・DB・API キーが異なることが一般的です。',
      },
      {
        heading: 'ブランチベースのデプロイ',
        content:
          'よくある構成:\n• PR → プレビュー環境（Vercel Preview など）\n• develop → ステージング\n• main → 本番',
        code: `jobs:
  deploy-preview:
    if: github.event_name == 'pull_request'
    runs-on: ubuntu-latest
    steps:
      - run: echo "Deploy to preview URL"

  deploy-production:
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    environment: production
    steps:
      - run: echo "Deploy to production"`,
      },
      {
        heading: 'GitHub Environments',
        content:
          'environment: production を指定すると、デプロイ前に承認が必要な設定や、環境ごとのシークレットを使えます。本番デプロイに人間の確認を挟むチーム向けの機能です。',
        tip: 'デモで PR と main で異なるデプロイ先になる流れを確認してください。',
      },
    ],
  },
  {
    id: 'secrets',
    title: 'シークレット管理',
    description: 'API キーと環境変数を安全に CI/CD で使う方法を学びます',
    sections: [
      {
        heading: 'シークレットをコードに書かない',
        content:
          'API トークン、DB パスワード、デプロイキーは絶対にリポジトリにコミットしません。GitHub の Settings → Secrets and variables → Actions に登録し、ワークフロー内で参照します。',
        code: `# ワークフロー内での参照
env:
  API_KEY: \${{ secrets.API_KEY }}

steps:
  - run: echo "Token is set (not printed)"
    env:
      DEPLOY_TOKEN: \${{ secrets.DEPLOY_TOKEN }}`,
      },
      {
        heading: '環境変数との使い分け',
        content:
          '• Secrets — 機密情報（トークン、パスワード）。ログに表示されない\n• Variables — 非機密の設定値（リージョン名、フラグなど）\n\nアプリ側の .env は .gitignore に入れ、本番の値はホスティング側（Vercel Environment Variables など）で設定します。',
      },
      {
        heading: 'よくあるミス',
        content:
          '• echo でシークレットを出力してログに漏らす\n• .env をコミットする\n• プレビュー環境に本番 DB を向ける\n\nシークレットは ${{ secrets.NAME }} の形式でのみ参照し、デバッグ時も値を print しないようにします。',
        tip: 'シークレットは「存在する」ことだけ確認し、値は見えない設計になっています。',
      },
    ],
  },
  {
    id: 'strategies',
    title: 'CD 戦略',
    description: 'デプロイのタイミングと運用パターンを学びます',
    sections: [
      {
        heading: 'よくある CD パターン',
        content:
          '• main マージで即本番 — スタートアップや個人プロジェクトで多い\n• タグ付けでリリース — v1.2.0 のタグを push したときだけ本番\n• 手動承認 — production 環境で人が Approve してからデプロイ\n• スケジュール — 毎週火曜の深夜にバッチデプロイ',
      },
      {
        heading: 'PR チェック + プレビュー',
        content:
          '実務で最も多いのは「PR で CI + プレビュー URL、マージで本番」です。レビュアーが実際の画面を確認でき、マージ後は自動で本番に反映されます。',
        code: `on:
  pull_request:
  push:
    branches: [main]

jobs:
  ci:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci && npm test && npm run build

  deploy-preview:
    if: github.event_name == 'pull_request'
    needs: ci
    runs-on: ubuntu-latest
    steps:
      - run: echo "Preview deployed"

  deploy-prod:
    if: github.ref == 'refs/heads/main'
    needs: ci
    runs-on: ubuntu-latest
    steps:
      - run: echo "Production deployed"`,
        tip: 'デモで PR → プレビュー → マージ → 本番の流れを確認してください。',
      },
      {
        heading: 'ロールバック',
        content:
          'デプロイ後に問題が起きたら、前のコミットに戻して再デプロイするか、ホスティングの「前のデプロイに戻す」機能を使います。小さく頻繁にデプロイする CI/CD では、ロールバックも速く済むのが利点です。',
      },
    ],
  },
  {
    id: 'next-steps',
    title: '次のステップ',
    description: 'CI/CD の学習を踏まえて、次に何を学ぶかを確認します',
    sections: [
      {
        heading: 'さらに学ぶこと',
        content:
          '• キャッシュ最適化 — 依存関係・ビルド成果物の再利用\n• モノレポ CI — Turborepo / Nx と affected ビルド\n• Docker イメージのビルドとレジストリ push\n• Dependabot / Renovate — 依存関係の自動更新\n• 他の CI ツール — GitLab CI、CircleCI、AWS CodePipeline',
      },
      {
        heading: '学習の道筋',
        content:
          '① Git 入門 → ② テスト入門 → ③ CI/CD 入門（今ここ）→ ④ 自分のプロジェクトに .github/workflows/ci.yml を追加\n\nNext.js や Cloudflare で作ったアプリに、テストとデプロイのワークフローを足してみましょう。',
        tip: 'おめでとうございます！CI/CD 入門をすべて学びました 🎉',
      },
    ],
  },
]
