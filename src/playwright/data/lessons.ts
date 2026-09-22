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
    title: "Playwright とは？",
    description: "E2E テストの概念と Playwright の特徴を理解します",
    sections: [
      {
        heading: "E2E テストとは",
        content: "End-to-End テストは、ユーザーの操作（クリック、入力、ナビゲーション）を自動化し、アプリ全体が正しく動作するか検証します。ユニットテストが部品を、E2E テストが製品全体をテストします。\n\n「ログインして商品をカートに入れて決済する」といったユーザーシナリオを自動化できます。"
      },
      {
        heading: "Playwright の特徴",
        content: "Microsoft が開発。Chromium、Firefox、WebKit の3ブラウザをサポート。自動待機（auto-wait）で flaky テストを削減。Codegen で操作を録画してテスト生成。\n\nSelenium や Cypress と比べ、マルチブラウザ対応、並列実行、トレースビューアが強みです。",
        tip: "デモで Codegen を起動し、ブラウザ操作を録画してテストコードを生成してみてください。"
      },
      {
        heading: "テストピラミッド",
        content: "ユニットテスト（多・速・安）→ 統合テスト → E2E テスト（少・遅・高コスト）のピラミッド構造が推奨されます。E2E はクリティカルパスに集中し、細かいロジックはユニットテストに任せます。"
      }
    ]
  },
  {
    id: "setup",
    title: "セットアップ",
    description: "Playwright のインストールと初期設定を学びます",
    sections: [
      {
        heading: "インストール",
        content: "`npm init playwright@latest` でプロジェクトに Playwright を追加します。テストディレクトリ、設定ファイル、サンプルテストが生成されます。",
        code: "npm init playwright@latest\n# tests/ ディレクトリと playwright.config.ts が生成\nnpx playwright test          # テスト実行\nnpx playwright test --ui     # UI モード"
      },
      {
        heading: "設定ファイル",
        content: "playwright.config.ts でブラウザ、ベース URL、タイムアウト、リトライ、スクリーンショット設定を行います。",
        code: "export default defineConfig({\n  testDir: \"./tests\",\n  fullyParallel: true,\n  retries: process.env.CI ? 2 : 0,\n  use: {\n    baseURL: \"http://localhost:3000\",\n    trace: \"on-first-retry\",\n    screenshot: \"only-on-failure\",\n  },\n});"
      },
      {
        heading: "プロジェクト構成",
        content: "tests/ にテストファイル（*.spec.ts）、tests/fixtures/ にテストデータ、tests/pages/ に Page Object を配置するのが一般的です。\n\nwebServer オプションでテスト実行前に開発サーバーを自動起動できます。"
      }
    ]
  },
  {
    id: "selectors",
    title: "セレクタ",
    description: "要素の特定方法とベストプラクティスを学びます",
    sections: [
      {
        heading: "推奨セレクタ",
        content: "Playwright はユーザーが操作する方法で要素を特定することを推奨します。優先順位: getByRole > getByLabel > getByText > getByTestId > CSS/XPath。",
        code: "await page.getByRole(\"button\", { name: \"ログイン\" }).click();\nawait page.getByLabel(\"メールアドレス\").fill(\"user@example.com\");\nawait page.getByText(\"送信完了\").isVisible();\nawait page.getByTestId(\"submit-button\").click();"
      },
      {
        heading: "ロケーターのチェーン",
        content: "locator() でスコープを絞り、filter() で条件を追加できます。親要素の中の特定の子要素を取得するのに便利です。",
        code: "const row = page.getByRole(\"row\").filter({ hasText: \"太郎\" });\nawait row.getByRole(\"button\", { name: \"編集\" }).click();"
      },
      {
        heading: "セレクタのベストプラクティス",
        content: "data-testid 属性をコンポーネントに付与し、getByTestId で参照するのが安定したテストの基本です。CSS クラス名や DOM 構造に依存するセレクタはリファクタリングで壊れやすいです。\n\nアクセシビリティ属性（role、label）を正しく設定すれば、getByRole/getByLabel が自然に使えます。"
      }
    ]
  },
  {
    id: "actions",
    title: "操作",
    description: "クリック、入力、ナビゲーションを学びます",
    sections: [
      {
        heading: "基本操作",
        content: "click()、fill()、press()、check()、selectOption() でユーザー操作を再現します。Playwright は要素が操作可能になるまで自動待機します。",
        code: "await page.goto(\"/login\");\nawait page.getByLabel(\"Email\").fill(\"test@example.com\");\nawait page.getByLabel(\"Password\").fill(\"password123\");\nawait page.getByRole(\"button\", { name: \"ログイン\" }).click();\nawait page.waitForURL(\"/dashboard\");"
      },
      {
        heading: "ファイル操作",
        content: "setInputFiles() でファイルアップロードをテスト。download イベントでダウンロードを検証します。",
        code: "await page.getByLabel(\"ファイル選択\").setInputFiles(\"test-image.png\");\nconst download = await page.waitForEvent(\"download\");\nexpect(download.suggestedFilename()).toBe(\"report.pdf\");"
      },
      {
        heading: "マルチタブ・フレーム",
        content: "context.newPage() で新タブを開く。frameLocator() で iframe 内の要素を操作します。\n\nポップアップウィンドウは page.waitForEvent(\"popup\") で取得し、同様に操作できます。"
      }
    ]
  },
  {
    id: "assertions",
    title: "アサーション",
    description: "状態の検証方法を学びます",
    sections: [
      {
        heading: "expect の基本",
        content: "@playwright/test の expect は自動リトライ付きアサーションです。要素の表示、テキスト、属性、URL を検証します。",
        code: "await expect(page.getByRole(\"heading\")).toHaveText(\"ダッシュボード\");\nawait expect(page.getByTestId(\"user-count\")).toHaveText(\"42\");\nawait expect(page).toHaveURL(/dashboard/);\nawait expect(page.getByRole(\"button\")).toBeEnabled();"
      },
      {
        heading: "ソフトアサーション",
        content: "expect.soft() は失敗してもテストを続行し、最後にまとめて報告します。複数の UI 要素を一度にチェックするのに便利です。",
        code: "await expect.soft(page.getByText(\"タイトル\")).toBeVisible();\nawait expect.soft(page.getByText(\"説明\")).toBeVisible();\nawait expect.soft(page.getByRole(\"img\")).toHaveAttribute(\"alt\", \"商品画像\");"
      },
      {
        heading: "スクリーンショット比較",
        content: "toHaveScreenshot() でビジュアルリグレッションテストを実行します。初回実行でベースライン画像を生成し、以降は差分を検出します。",
        tip: "デモで --ui モードでテストを実行し、各ステップのスクリーンショットを確認してみてください。"
      }
    ]
  },
  {
    id: "page-object",
    title: "Page Object Model",
    description: "テストコードの構造化パターンを学びます",
    sections: [
      {
        heading: "POM の概念",
        content: "Page Object Model はページごとにクラスを作り、セレクタと操作をカプセル化するパターンです。テストコードが読みやすく、UI 変更時の修正箇所が局所化されます。",
        code: "class LoginPage {\n  constructor(private page: Page) {}\n  async goto() { await this.page.goto(\"/login\"); }\n  async login(email: string, password: string) {\n    await this.page.getByLabel(\"Email\").fill(email);\n    await this.page.getByLabel(\"Password\").fill(password);\n    await this.page.getByRole(\"button\", { name: \"ログイン\" }).click();\n  }\n}"
      },
      {
        heading: "テストでの利用",
        content: "Page Object を使うテストはシナリオが明確に読めます。",
        code: "test(\"ログインしてダッシュボードを表示\", async ({ page }) => {\n  const loginPage = new LoginPage(page);\n  await loginPage.goto();\n  await loginPage.login(\"test@example.com\", \"password\");\n  await expect(page.getByRole(\"heading\")).toHaveText(\"ダッシュボード\");\n});"
      },
      {
        heading: "Fixture との組み合わせ",
        content: "Playwright の fixture で Page Object を自動注入できます。テストごとにインスタンスを生成する手間が省けます。"
      }
    ]
  },
  {
    id: "api-testing",
    title: "API テスト",
    description: "Playwright で API を直接テストします",
    sections: [
      {
        heading: "request コンテキスト",
        content: "Playwright はブラウザ操作に加え、API リクエストも送信できます。E2E テストの前処理（データセットアップ）や API 単体テストに使います。",
        code: "test(\"API でユーザー作成\", async ({ request }) => {\n  const response = await request.post(\"/api/users\", {\n    data: { name: \"テスト太郎\", email: \"test@example.com\" },\n  });\n  expect(response.ok()).toBeTruthy();\n  const user = await response.json();\n  expect(user.name).toBe(\"テスト太郎\");\n});"
      },
      {
        heading: "認証付き API テスト",
        content: "storageState や request の headers で認証トークンを付与します。ログイン API でトークンを取得し、以降の API テストで再利用するパターンです。"
      },
      {
        heading: "E2E + API の組み合わせ",
        content: "API でテストデータをセットアップ → ブラウザで UI をテスト → API でクリーンアップ。高速で安定した E2E テストが書けます。"
      }
    ]
  },
  {
    id: "ci",
    title: "CI 連携",
    description: "GitHub Actions でテストを自動実行します",
    sections: [
      {
        heading: "GitHub Actions 設定",
        content: "PR や push 時に Playwright テストを自動実行します。失敗時のスクリーンショットとトレースを Artifact として保存します。",
        code: "# .github/workflows/playwright.yml\n- uses: actions/checkout@v4\n- uses: actions/setup-node@v4\n- run: npm ci\n- run: npx playwright install --with-deps\n- run: npx playwright test\n- uses: actions/upload-artifact@v4\n  if: failure()\n  with: { name: playwright-report, path: playwright-report/ }"
      },
      {
        heading: "並列実行",
        content: "Playwright は fullyParallel: true でテストファイルを並列実行します。sharding で CI ジョブを分割し、実行時間を短縮できます。",
        code: "npx playwright test --shard=1/3  # 3分割の1番目\nnpx playwright test --shard=2/3\nnpx playwright test --shard=3/3"
      },
      {
        heading: "Docker での実行",
        content: "mcr.microsoft.com/playwright の公式 Docker イメージを使い、CI 環境でブラウザ依存を確実に解決します。"
      }
    ]
  },
  {
    id: "debugging",
    title: "デバッグ",
    description: "テスト失敗の原因を特定する方法を学びます",
    sections: [
      {
        heading: "UI モード",
        content: "`npx playwright test --ui` でインタラクティブなテストランナーを起動。ステップごとに実行、DOM スナップショット、ネットワークログを確認できます。"
      },
      {
        heading: "トレースビューア",
        content: "trace: \"on-first-retry\" 設定で、失敗時のトレースファイルを生成。`npx playwright show-trace trace.zip` でタイムライン形式のデバッグ UI が開きます。\n\n各アクションの前後のスクリーンショット、ネットワークリクエスト、コンソールログが時系列で表示されます。"
      },
      {
        heading: "デバッグの Tips",
        content: "page.pause() でテストを一時停止し、Playwright Inspector で操作を試せます。--debug フラグでステップ実行モードになります。\n\nflaky テストは retries を増やすのではなく、根本原因（タイミング依存、不安定なセレクタ）を修正しましょう。",
        tip: "デモで意図的に失敗するテストを書き、トレースビューアで原因を特定してみてください。"
      }
    ]
  },
  {
    id: "next-steps",
    title: "次のステップ",
    description: "Playwright の学習を続けるための道筋を確認します",
    sections: [
      {
        heading: "次に学ぶこと",
        content: "① Storybook 入門 — コンポーネントテストとの連携\n② Webセキュリティ — テストでのセキュリティ検証\n③ Docker 入門 — CI 用のテスト環境\n④ 認証入門 — 認証フローの E2E テスト"
      },
      {
        heading: "学習の道筋",
        content: "Playwright は「ユーザーが実際に使う方法でテストする」思想が核心です。getByRole を優先し、Page Object で構造化し、CI で自動化——この3つで信頼性の高いテストスイートが作れます。\n\nおめでとうございます！Playwright 入門をすべて学びました 🎉",
        tip: "自分のアプリのログインフローを Playwright で自動テストしてみてください。"
      },
      {
        heading: "実践チェックリスト",
        content: "• getByRole/getByLabel を優先しているか\n• data-testid を主要コンポーネントに付与しているか\n• Page Object でテストを構造化しているか\n• CI でテストを自動実行しているか\n• 失敗時のトレースを保存しているか"
      }
    ]
  }
]
