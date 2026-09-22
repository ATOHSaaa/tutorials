import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: '「CI/CD」について、正しい説明はどれですか？',
    options: [
      'CI（Continuous Integration / 継続的インテグレーション）とは、コードの変更を頻繁にメインブランチに統合し、自動テストで品質を保つ手法です。',
      'GitHub に組み込まれた CI/CD サービスです。',
      'トリガー（push / PR） 2. 依存関係のインストール（npm ci） 3. Lint・型チェック 4. テスト 5. ビルド 6. デプロイ',
      'パイプラインは、コードがリポジトリに入ってから本番に届くまでの自動化されたステップの連鎖です。',
    ],
    correctIndex: 0,
    explanation: 'CI（Continuous Integration / 継続的インテグレーション）とは、コードの変更を頻繁にメインブランチに統合し、自動テストで品質を保つ手法です。',
  },
  {
    id: 'pipeline',
    question: '「パイプラインの基本」について、正しい説明はどれですか？',
    options: [
      'CD（Continuous Delivery / Deployment / 継続的デリバリー・デプロイ）とは、テストを通過したコードを自動で本番環境（またはステージング）に届ける手法です。',
      'CI（Continuous Integration / 継続的インテグレーション）とは、コードの変更を頻繁にメインブランチに統合し、自動テストで品質を保つ手法です。',
      'GitHub に組み込まれた CI/CD サービスです。',
      'パイプラインは、コードがリポジトリに入ってから本番に届くまでの自動化されたステップの連鎖です。',
    ],
    correctIndex: 3,
    explanation: 'パイプラインは、コードがリポジトリに入ってから本番に届くまでの自動化されたステップの連鎖です。',
  },
  {
    id: 'github-actions',
    question: '「GitHub Actions 入門」について、正しい説明はどれですか？',
    options: [
      'GitHub に組み込まれた CI/CD サービスです。',
      'CI（Continuous Integration / 継続的インテグレーション）とは、コードの変更を頻繁にメインブランチに統合し、自動テストで品質を保つ手法です。',
      'CD（Continuous Delivery / Deployment / 継続的デリバリー・デプロイ）とは、テストを通過したコードを自動で本番環境（またはステージング）に届ける手法です。',
      'パイプラインは、コードがリポジトリに入ってから本番に届くまでの自動化されたステップの連鎖です。',
    ],
    correctIndex: 0,
    explanation: 'GitHub に組み込まれた CI/CD サービスです。',
  },
  {
    id: 'workflows',
    question: '「ワークフローファイル」について、正しい説明はどれですか？',
    options: [
      'CD（Continuous Delivery / Deployment / 継続的デリバリー・デプロイ）とは、テストを通過したコードを自動で本番環境（またはステージング）に届ける手法です。',
      'CI（Continuous Integration / 継続的インテグレーション）とは、コードの変更を頻繁にメインブランチに統合し、自動テストで品質を保つ手法です。',
      'on: でいつワークフローを走らせるかを決めます。',
      'パイプラインは、コードがリポジトリに入ってから本番に届くまでの自動化されたステップの連鎖です。',
    ],
    correctIndex: 2,
    explanation: 'on: でいつワークフローを走らせるかを決めます。',
  },
  {
    id: 'testing-ci',
    question: '「テストを CI に組み込む」について、正しい説明はどれですか？',
    options: [
      'CI（Continuous Integration / 継続的インテグレーション）とは、コードの変更を頻繁にメインブランチに統合し、自動テストで品質を保つ手法です。',
      'パイプラインは、コードがリポジトリに入ってから本番に届くまでの自動化されたステップの連鎖です。',
      'CD（Continuous Delivery / Deployment / 継続的デリバリー・デプロイ）とは、テストを通過したコードを自動で本番環境（またはステージング）に届ける手法です。',
      'ローカルでは通るが CI では落ちる — 環境の違いでバグが見つかります。',
    ],
    correctIndex: 3,
    explanation: 'ローカルでは通るが CI では落ちる — 環境の違いでバグが見つかります。',
  },
  {
    id: 'build-deploy',
    question: '「ビルドとデプロイ」について、正しい説明はどれですか？',
    options: [
      'フロントエンドでは npm run build で dist/ や .next/ を生成します。',
      'パイプラインは、コードがリポジトリに入ってから本番に届くまでの自動化されたステップの連鎖です。',
      'CD（Continuous Delivery / Deployment / 継続的デリバリー・デプロイ）とは、テストを通過したコードを自動で本番環境（またはステージング）に届ける手法です。',
      'CI（Continuous Integration / 継続的インテグレーション）とは、コードの変更を頻繁にメインブランチに統合し、自動テストで品質を保つ手法です。',
    ],
    correctIndex: 0,
    explanation: 'フロントエンドでは npm run build で dist/ や .next/ を生成します。',
  },
  {
    id: 'environments',
    question: '「環境と分岐」について、正しい説明はどれですか？',
    options: [
      'パイプラインは、コードがリポジトリに入ってから本番に届くまでの自動化されたステップの連鎖です。',
      'CI（Continuous Integration / 継続的インテグレーション）とは、コードの変更を頻繁にメインブランチに統合し、自動テストで品質を保つ手法です。',
      'CD（Continuous Delivery / Deployment / 継続的デリバリー・デプロイ）とは、テストを通過したコードを自動で本番環境（またはステージング）に届ける手法です。',
      '環境ごとに URL・DB・API キーが異なることが一般的です。',
    ],
    correctIndex: 3,
    explanation: '環境ごとに URL・DB・API キーが異なることが一般的です。',
  },
  {
    id: 'secrets',
    question: '「シークレット管理」について、正しい説明はどれですか？',
    options: [
      'CD（Continuous Delivery / Deployment / 継続的デリバリー・デプロイ）とは、テストを通過したコードを自動で本番環境（またはステージング）に届ける手法です。',
      'API トークン、DB パスワード、デプロイキーは絶対にリポジトリにコミットしません。',
      'CI（Continuous Integration / 継続的インテグレーション）とは、コードの変更を頻繁にメインブランチに統合し、自動テストで品質を保つ手法です。',
      'パイプラインは、コードがリポジトリに入ってから本番に届くまでの自動化されたステップの連鎖です。',
    ],
    correctIndex: 1,
    explanation: 'API トークン、DB パスワード、デプロイキーは絶対にリポジトリにコミットしません。',
  },
  {
    id: 'strategies',
    question: '「CD 戦略」について、正しい説明はどれですか？',
    options: [
      'CD（Continuous Delivery / Deployment / 継続的デリバリー・デプロイ）とは、テストを通過したコードを自動で本番環境（またはステージング）に届ける手法です。',
      'CI（Continuous Integration / 継続的インテグレーション）とは、コードの変更を頻繁にメインブランチに統合し、自動テストで品質を保つ手法です。',
      'パイプラインは、コードがリポジトリに入ってから本番に届くまでの自動化されたステップの連鎖です。',
      'main マージで即本番 — スタートアップや個人プロジェクトで多い',
    ],
    correctIndex: 3,
    explanation: 'main マージで即本番 — スタートアップや個人プロジェクトで多い',
  },
  {
    id: 'next-steps',
    question: '「次のステップ」について、正しい説明はどれですか？',
    options: [
      'パイプラインは、コードがリポジトリに入ってから本番に届くまでの自動化されたステップの連鎖です。',
      'モノレポ CI — Turborepo / Nx と affected ビルド',
      'CD（Continuous Delivery / Deployment / 継続的デリバリー・デプロイ）とは、テストを通過したコードを自動で本番環境（またはステージング）に届ける手法です。',
      'CI（Continuous Integration / 継続的インテグレーション）とは、コードの変更を頻繁にメインブランチに統合し、自動テストで品質を保つ手法です。',
    ],
    correctIndex: 1,
    explanation: 'モノレポ CI — Turborepo / Nx と affected ビルド',
  },
]
