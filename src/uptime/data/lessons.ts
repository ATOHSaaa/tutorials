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
    title: '死活監視とは？',
    description: '死活監視の目的と基本概念を学びます',
    sections: [
      {
        heading: '死活監視とは？',
        content:
          '死活監視（アップタイムモニタリング）は、Web サービスや API が「生きているか（Up）」「死んでいるか（Down）」を定期的に確認する仕組みです。外部から HTTP リクエストを送り、応答が正常かどうかを判定します。',
      },
      {
        heading: 'なぜ必要か？',
        content:
          '• 障害の早期発見 — ユーザーが報告する前に気づける\n• 信頼性の担保 — SLA（サービス品質保証）の達成\n• デプロイ後の確認 — CI/CD でデプロイした直後の動作確認\n• 安心感 — 24時間誰かが見守っている状態',
        tip: 'デモで Up / Down の判定フローを確認してください。',
      },
      {
        heading: '監視の種類',
        content:
          '• 外形監視 — インターネット上の監視サーバーからアクセス（ユーザー視点）\n• 内部監視 — サーバー内からプロセスや DB を確認\n• 合成監視 — ログイン〜購入などのシナリオを自動実行\n\nこのチュートリアルは外形監視とヘルスチェックを中心に学びます。',
      },
    ],
  },
  {
    id: 'health-check',
    title: 'ヘルスチェック',
    description: 'ヘルスチェックエンドポイントの設計を学びます',
    sections: [
      {
        heading: '/health エンドポイント',
        content:
          '監視専用の URL を用意します。200 OK とシンプルな JSON を返すのが基本です。本番のトラフィックとは分離し、認証不要でアクセスできるようにします。',
        code: `// Next.js App Router
export async function GET() {
  return Response.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
  });
}

// Cloudflare Workers
export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === '/health') {
      return Response.json({ status: 'ok' });
    }
  },
};`,
      },
      {
        heading: 'Liveness vs Readiness',
        content:
          'Kubernetes などでは2種類に分けます。\n\n• Liveness — プロセスが生きているか（死んでいれば再起動）\n• Readiness — リクエストを受け付けられるか（DB 接続済みか等）\n\n小規模アプリでは /health にまとめても問題ありません。',
        tip: 'デモでヘルスチェックのレスポンスを確認してください。',
      },
      {
        heading: '深いヘルスチェック',
        content:
          'DB や Redis への接続確認を含める「深い」チェックも可能ですが、監視が DB に負荷をかけないよう注意。失敗時は 503 を返し、原因をログに残します。',
      },
    ],
  },
  {
    id: 'http-monitoring',
    title: 'HTTP 監視',
    description: 'HTTP リクエストによる監視の基本を学びます',
    sections: [
      {
        heading: '監視の設定項目',
        content:
          '• URL — 監視対象（https://example.com/health）\n• メソッド — 通常 GET、API は POST も\n• 期待ステータス — 200、201 など\n• 期待レスポンス — 本文に "ok" が含まれるか\n• タイムアウト — 何秒で失敗とみなすか',
      },
      {
        heading: 'curl で手動確認',
        content:
          '監視の前に、curl で同じ条件を試すのが基本です。',
        code: `curl -s -o /dev/null -w "%{http_code}" https://example.com/health
# → 200

curl -s https://example.com/health
# → {"status":"ok"}`,
        tip: 'デモで HTTP 監視の判定条件を試してください。',
      },
      {
        heading: '複数エンドポイント',
        content:
          'フロント（/）、API（/api/health）、管理画面（/admin/health）を別々に監視。1つが落ちても他が生きているかを把握できます。',
      },
    ],
  },
  {
    id: 'intervals',
    title: '監視間隔と判定',
    description: 'チェック間隔と障害判定の設定を学びます',
    sections: [
      {
        heading: '監視間隔',
        content:
          '1分、5分、15分など。短いほど早く気づけるが、監視サーバーからのアクセスが増えます。無料プランは5分間隔が一般的、本番は1〜3分が多いです。',
      },
      {
        heading: '連続失敗で Down 判定',
        content:
          '1回の失敗ですぐアラートを出すと誤報（flapping）が多くなります。多くのサービスは「2〜3回連続失敗で Down」「1回成功で Up」に戻す設定ができます。',
        code: `# 概念的な判定
check 1: 200 OK  → Up
check 2: timeout → まだ Up（1回失敗）
check 3: timeout → Down 判定 → アラート送信
check 4: 200 OK  → Up 復帰 → 復旧通知`,
        tip: 'デモで連続失敗による Down 判定を体験してください。',
      },
      {
        heading: 'メンテナンスウィンドウ',
        content:
          '計画的なメンテナンス中は監視を一時停止（メンテナンスモード）にし、不要なアラートを防ぎます。',
      },
    ],
  },
  {
    id: 'alerting',
    title: 'アラートと通知',
    description: '障害通知の設計とチャネル選びを学びます',
    sections: [
      {
        heading: '通知チャネル',
        content:
          '• Email — 基本、遅れがち\n• Slack / Discord — チーム開発で人気\n• PagerDuty / Opsgenie — オンコール・エスカレーション\n• SMS / 電話 — 重大障害向け',
      },
      {
        heading: 'アラートの設計',
        content:
          '• Down 時に通知、Up 復帰時にも通知\n• 同じ障害で何度も鳴らない（アラートの集約）\n• 重要度でチャネルを分ける（Warning → Slack、Critical → 電話）',
        code: `# Slack Webhook 例（監視サービス側で設定）
# Down → #alerts チャンネルに投稿
# "example.com is DOWN (HTTP 503)"`,
        tip: 'デモでアラートの流れを確認してください。',
      },
      {
        heading: 'アラート疲れを防ぐ',
        content:
          '誤報が多いとアラートを無視するようになります。連続失敗の回数を増やす、メンテナンスを登録する、根本原因を直す——アラートの品質は監視の品質です。',
      },
    ],
  },
  {
    id: 'status-page',
    title: 'ステータスページ',
    description: 'ユーザー向けの障害情報公開を学びます',
    sections: [
      {
        heading: 'ステータスページとは？',
        content:
          'サービスの稼働状況をユーザーに公開するページです。GitHub Status、AWS Service Health Dashboard など。障害時に「自分だけ？」ではなく「サービス全体の問題」とわかります。',
      },
      {
        heading: '公開する情報',
        content:
          '• 各コンポーネントの状態（API、Web、DB）\n• 過去のインシデント履歴\n• 計画メンテナンスの予定\n• 稼働率（99.9% など）',
        tip: 'デモでステータスページの構成を確認してください。',
      },
      {
        heading: 'ツール',
        content:
          'Statuspage（Atlassian）、Instatus、Cachet（OSS）など。監視サービスと連携して自動更新も可能です。',
      },
    ],
  },
  {
    id: 'synthetic',
    title: '外形監視と内部監視',
    description: '監視の配置と使い分けを学びます',
    sections: [
      {
        heading: '外形監視',
        content:
          'インターネット上の複数地点からアクセス。CDN の障害、DNS の問題、地域限定の障害も検知できます。UptimeRobot、Pingdom、Better Stack などが提供します。',
      },
      {
        heading: '内部監視',
        content:
          'サーバー内で CPU、メモリ、ディスク、プロセス数を監視。Datadog、Prometheus + Grafana、CloudWatch など。外形監視ではわからない「サーバーは生きているがアプリがハング」も検知できます。',
        tip: 'デモで外形と内部監視の違いを確認してください。',
      },
      {
        heading: '組み合わせ',
        content:
          '外形監視でユーザー視点の可用性、内部監視で原因調査——両方あると障害対応が速くなります。小規模なら外形監視 + ヘルスチェックから始めましょう。',
      },
    ],
  },
  {
    id: 'tools',
    title: '監視ツール',
    description: '代表的な死活監視サービスを学びます',
    sections: [
      {
        heading: '無料〜手軽に始める',
        content:
          '• UptimeRobot — 無料50モニター、5分間隔\n• Better Stack（旧 Better Uptime）— ステータスページ付き\n• Freshping — 無料プランあり\n• GitHub Actions — cron で curl（自前・簡易）',
      },
      {
        heading: '本格運用向け',
        content:
          '• Pingdom — 老舗、多地点監視\n• Datadog Synthetics — APM と統合\n• New Relic — フルスタック監視\n• Cloudflare Health Checks — Cloudflare 利用時',
        code: `# GitHub Actions で簡易監視（CI/CD 入門と連携）
name: Uptime Check
on:
  schedule:
    - cron: '*/5 * * * *'
jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - run: |
          code=$(curl -s -o /dev/null -w "%{http_code}" https://myapp.com/health)
          [ "$code" = "200" ] || exit 1`,
        tip: 'デモで監視ツールの比較を確認してください。',
      },
      {
        heading: '選び方',
        content:
          '個人プロジェクト → 無料プラン。チーム → Slack 連携とステータスページ。エンタープライズ → SLA レポートとオンコール。',
      },
    ],
  },
  {
    id: 'incident',
    title: '障害対応',
    description: '障害発生時の対応フローを学びます',
    sections: [
      {
        heading: '障害対応の流れ',
        content:
          '1. アラート受信 → 2. 影響範囲の確認 → 3. ステータスページ更新 → 4. 原因調査 → 5. 復旧 → 6. ポストモーテム（振り返り）',
      },
      {
        heading: 'ポストモーテム',
        content:
          '障害後に「何が起きたか」「なぜ起きたか」「どう防ぐか」を文書化。非難ではなく改善のための振り返りです。Google SRE の文化で広まったプラクティスです。',
        tip: 'デモで障害対応のタイムラインを確認してください。',
      },
      {
        heading: 'Runbook',
        content:
          'よくある障害の対処手順を Runbook（手順書）として事前に用意。「DB 接続エラー → 手順 A」で初動が速くなります。',
      },
    ],
  },
  {
    id: 'next-steps',
    title: '次のステップ',
    description: '死活監視の学習を踏まえて、次に何を学ぶかを確認します',
    sections: [
      {
        heading: 'さらに学ぶこと',
        content:
          '• SLA / SLO / SLI — サービス品質の指標設計\n• Prometheus + Grafana — メトリクス監視\n• OpenTelemetry — 分散トレーシング\n• On-call ローテーション — 担当者の交代',
      },
      {
        heading: '学習の道筋',
        content:
          '① CI/CD 入門 → ② 死活監視入門（今ここ）→ ③ 自分のプロジェクトに /health と UptimeRobot を設定 → ④ 障害を想定した Runbook を書く',
        tip: 'おめでとうございます！死活監視入門をすべて学びました 🎉',
      },
    ],
  },
]
