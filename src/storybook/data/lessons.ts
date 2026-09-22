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
    title: "Storybook とは？",
    description: "コンポーネントカタログの概念とメリットを理解します",
    sections: [
      {
        heading: "コンポーネント駆動開発",
        content: "Storybook は UI コンポーネントをアプリ本体から独立して開発・表示・テストする環境です。ボタン1つからページ全体まで、あらゆるコンポーネントの「カタログ」を作れます。\n\nアプリを起動せずにコンポーネントの全バリエーションを確認できるため、開発速度と品質が向上します。"
      },
      {
        heading: "主なメリット",
        content: "①デザイナーとエンジニアの共通言語 ②回帰テストの基盤 ③ドキュメントの自動生成 ④エッジケースの視覚的確認。\n\nデザインシステム（Material UI、Chakra UI 等）の開発では Storybook がほぼ必須ツールです。",
        tip: "デモで Button コンポーネントの size・variant バリエーションを切り替えてみてください。"
      },
      {
        heading: "対応フレームワーク",
        content: "React、Vue、Angular、Svelte、Web Components に対応。Vite や Webpack ベースのビルドも選べます。create-react-app、Next.js、Remix とも統合可能です。"
      }
    ]
  },
  {
    id: "setup",
    title: "セットアップ",
    description: "プロジェクトへの Storybook 導入を学びます",
    sections: [
      {
        heading: "インストール",
        content: "プロジェクトルートで `npx storybook@latest init` を実行すると、フレームワークを自動検出して設定ファイルが生成されます。",
        code: "npx storybook@latest init\n# .storybook/main.ts と preview.ts が生成される\nnpm run storybook  # http://localhost:6006"
      },
      {
        heading: "設定ファイル",
        content: ".storybook/main.ts でストーリーファイルの場所、フレームワーク、addons を設定します。preview.ts でグローバルデコレーター、パラメータ、スタイルを定義します。",
        code: "// .storybook/main.ts\nexport default {\n  stories: [\"../src/**/*.stories.@(js|ts|tsx)\"],\n  addons: [\"@storybook/addon-essentials\"],\n  framework: \"@storybook/react-vite\",\n};"
      },
      {
        heading: "ディレクトリ構成",
        content: "コンポーネントと同じ場所に .stories.tsx を置く Colocation が推奨されます。src/components/Button/Button.tsx と Button.stories.tsx を並べます。\n\n大規模プロジェクトでは stories/ ディレクトリに集約するパターンもあります。"
      }
    ]
  },
  {
    id: "stories",
    title: "ストーリーの書き方",
    description: "CSF（Component Story Format）を学びます",
    sections: [
      {
        heading: "CSF3 の基本",
        content: "Meta オブジェクトでコンポーネントを登録し、named export でストーリー（バリエーション）を定義します。",
        code: "import type { Meta, StoryObj } from \"@storybook/react\";\nimport { Button } from \"./Button\";\n\nconst meta: Meta<typeof Button> = {\n  component: Button,\n  title: \"Components/Button\",\n};\nexport default meta;\n\ntype Story = StoryObj<typeof Button>;\n\nexport const Primary: Story = { args: { variant: \"primary\", children: \"Click me\" } };\nexport const Disabled: Story = { args: { ...Primary.args, disabled: true } };"
      },
      {
        heading: "args による Props 制御",
        content: "args でコンポーネントに渡す props を定義します。ストーリーごとに異なる args を設定し、バリエーションを表現します。\n\nrender 関数でカスタムレンダリングも可能ですが、args ベースが推奨されます。"
      },
      {
        heading: "デコレーター",
        content: "デコレーターはストーリーをラップする関数です。ThemeProvider や Router を提供するのに使います。",
        code: "const meta: Meta = {\n  decorators: [\n    (Story) => (\n      <ThemeProvider theme={lightTheme}>\n        <Story />\n      </ThemeProvider>\n    ),\n  ],\n};"
      }
    ]
  },
  {
    id: "controls",
    title: "Controls と Actions",
    description: "インタラクティブな Props 操作を学びます",
    sections: [
      {
        heading: "Controls アドオン",
        content: "addon-essentials に含まれる Controls で、ストーリーの args を UI パネルからリアルタイム変更できます。色、テキスト、boolean をインタラクティブに試せます。\n\nargTypes でコントロールの種類（select、color、date）を指定できます。"
      },
      {
        heading: "argTypes の設定",
        content: "props の型に応じたコントロールを自動推論しますが、手動で上書きも可能です。",
        code: "const meta: Meta<typeof Button> = {\n  argTypes: {\n    variant: { control: \"select\", options: [\"primary\", \"secondary\", \"danger\"] },\n    size: { control: \"radio\", options: [\"sm\", \"md\", \"lg\"] },\n    onClick: { action: \"clicked\" },\n  },\n};"
      },
      {
        heading: "Actions",
        content: "onClick などのイベントハンドラは action: \"clicked\" で Actions パネルにログ出力されます。ユーザー操作のシミュレーション確認に便利です。",
        tip: "デモで Controls パネルから variant を変更し、コンポーネントの見た目が即座に変わることを確認してみてください。"
      }
    ]
  },
  {
    id: "docs",
    title: "自動ドキュメント",
    description: "Docs アドオンでコンポーネント文書を生成します",
    sections: [
      {
        heading: "Docs ページ",
        content: "autodocs タグを付けると、コンポーネントの Props テーブル、全ストーリー、ソースコードが自動生成されます。",
        code: "const meta: Meta<typeof Button> = {\n  component: Button,\n  tags: [\"autodocs\"],\n  parameters: {\n    docs: { description: { component: \"汎用ボタンコンポーネント\" } },\n  },\n};"
      },
      {
        heading: "MDX ドキュメント",
        content: "Markdown + JSX でリッチなドキュメントページを作成できます。デザインガイドライン、使用例、Do/Don't を記述します。\n\nデザインシステムの公式ドキュメントとして MDX ページを充実させるのが一般的です。"
      },
      {
        heading: "Props テーブル",
        content: "TypeScript の型定義から Props テーブルが自動生成されます。JSDoc コメントが description に表示されるため、コンポーネントにコメントを書く習慣が重要です。"
      }
    ]
  },
  {
    id: "composition",
    title: "コンポーネントの合成",
    description: "複合コンポーネントのストーリーを学びます",
    sections: [
      {
        heading: "複合ストーリー",
        content: "フォームやカードリストなど、複数コンポーネントを組み合わせたストーリーを render 関数で作成します。",
        code: "export const LoginForm: Story = {\n  render: () => (\n    <form>\n      <Input label=\"Email\" type=\"email\" />\n      <Input label=\"Password\" type=\"password\" />\n      <Button variant=\"primary\">ログイン</Button>\n    </form>\n  ),\n};"
      },
      {
        heading: "テンプレートストーリー",
        content: "Template ストーリーで共通の render ロジックを定義し、他のストーリーが args だけ変えて再利用するパターンです（CSF2 スタイル）。CSF3 では render + args の組み合わせが主流です。"
      },
      {
        heading: "モックデータ",
        content: "MSW（Mock Service Worker）やデコレーターで API レスポンスをモックし、データ依存コンポーネントを独立して表示できます。\n\n実際の API に依存しないため、開発とテストが安定します。"
      }
    ]
  },
  {
    id: "testing",
    title: "テスト連携",
    description: "Storybook とテストツールの統合を学びます",
    sections: [
      {
        heading: "インタラクションテスト",
        content: "@storybook/addon-interactions と @storybook/test で、ストーリー内のユーザー操作をテストします。play 関数でクリック・入力を自動化します。",
        code: "export const SubmitForm: Story = {\n  play: async ({ canvas, userEvent }) => {\n    await userEvent.type(canvas.getByLabelText(\"Email\"), \"test@example.com\");\n    await userEvent.click(canvas.getByRole(\"button\", { name: \"送信\" }));\n    await expect(canvas.getByText(\"送信完了\")).toBeInTheDocument();\n  },\n};"
      },
      {
        heading: "Visual Regression Testing",
        content: "Chromatic（Storybook 公式）や Playwright でスクリーンショット比較テストを実行します。意図しない UI 変更を自動検出できます。\n\nCI でストーリーのスクリーンショットを撮影し、前回との差分をレビューするフローが一般的です。"
      },
      {
        heading: "テストランナー",
        content: "storybook test-runner で全ストーリーの smoke テストを実行します。各ストーリーがエラーなくレンダリングされることを確認する回帰テストの基盤になります。"
      }
    ]
  },
  {
    id: "addons",
    title: "アドオン",
    description: "便利なアドオンの活用を学びます",
    sections: [
      {
        heading: "Essential アドオン",
        content: "addon-essentials には Controls、Actions、Docs、Viewport、Backgrounds、Measure、Outline が含まれます。ほとんどのプロジェクトでこれだけで十分です。\n\nViewport でモバイル・タブレット表示を確認、Backgrounds でダークモード背景をテストできます。"
      },
      {
        heading: "a11y アドオン",
        content: "@storybook/addon-a11y でアクセシビリティチェックを実行します。ARIA 属性の不足、コントラスト比の問題を自動検出します。\n\nコンポーネント開発の早い段階で a11y 問題を発見できるのが大きなメリットです。"
      },
      {
        heading: "カスタムアドオン",
        content: "独自のアドオンを作成して、デザイントークンの切り替えや API モック状態の管理など、プロジェクト固有の機能を追加できます。",
        tip: "デモで Viewport を切り替え、レスポンシブデザインを確認してみてください。"
      }
    ]
  },
  {
    id: "workflow",
    title: "開発ワークフロー",
    description: "チームでの Storybook 活用を学びます",
    sections: [
      {
        heading: "デザインレビュー",
        content: "Storybook を Vercel や Chromatic にデプロイし、PR ごとにプレビュー URL を共有します。デザイナーがブラウザでレビューし、コメントを残せます。\n\nFigma との連携（Design Addon）でデザインと実装の比較も可能です。"
      },
      {
        heading: "CI/CD 統合",
        content: "GitHub Actions で Storybook をビルド・デプロイし、Visual Regression テストを実行します。UI 変更はスクリーンショット差分でレビューされます。",
        code: "# .github/workflows/storybook.yml\n- run: npm run build-storybook\n- uses: chromaui/action@v1\n  with: projectToken: ${{ secrets.CHROMATIC_TOKEN }}"
      },
      {
        heading: "デザインシステム",
        content: "Storybook はデザインシステムの「生きたドキュメント」です。コンポーネント、トークン、ガイドラインを一元管理し、チーム全体で共有します。\n\nStorybook 8 ではテーマ切り替えやレスポンシブプレビューがさらに強化されています。"
      }
    ]
  },
  {
    id: "next-steps",
    title: "次のステップ",
    description: "Storybook の学習を続けるための道筋を確認します",
    sections: [
      {
        heading: "次に学ぶこと",
        content: "① Playwright 入門 — E2E テストとの連携\n② CSSアニメーション — コンポーネントのモーション\n③ i18n 入門 — 多言語ストーリーの作成\n④ アクセシビリティ — a11y テストの深化"
      },
      {
        heading: "学習の道筋",
        content: "Storybook は「コンポーネントを独立して磨く」文化を育てます。1コンポーネント1ストーリーから始め、Controls・Docs・テストを段階的に追加しましょう。\n\nおめでとうございます！Storybook 入門をすべて学びました 🎉",
        tip: "既存プロジェクトの主要コンポーネントにストーリーを追加してみてください。"
      },
      {
        heading: "実践チェックリスト",
        content: "• 全コンポーネントにストーリーがあるか\n• Controls で主要 props を操作できるか\n• autodocs で Props テーブルが生成されているか\n• a11y チェックを CI に組み込んでいるか\n• Chromatic 等でビジュアルテストしているか"
      }
    ]
  }
]
