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
    title: "shadcn/ui とは？",
    description: "shadcn/ui の思想と他ライブラリとの違いを学びます",
    sections: [
      {
        heading: "shadcn/ui とは",
        content: "shadcn/ui は「npm パッケージとしてインストールする UI ライブラリ」ではありません。Radix UI（アクセシブルなプリミティブ）と Tailwind CSS を組み合わせたコンポーネントのソースコードを、CLI でプロジェクトにコピーする仕組みです。\n\nつまりコンポーネントの「所有者」はあなたのプロジェクト。自由に改変でき、バージョンアップも自分でコントロールできます。MUI や Chakra UI のようなブラックボックスではなく、コードが手元にあるのが最大の特徴です。",
        tip: "デモで shadcn/ui 風の Button を確認してみてください。"
      },
      {
        heading: "Radix UI + Tailwind",
        content: "Radix UI はフォーカス管理、キーボード操作、ARIA 属性など「動きとアクセシビリティ」を担当します。Tailwind CSS は見た目を担当します。shadcn/ui はこの2つを組み合わせた、実務で即使えるコンポーネント集です。"
      },
      {
        heading: "いつ使うか",
        content: "Next.js + Tailwind のプロジェクトで、統一感のある UI を素早く作りたいときに最適です。デザインシステムの土台として使い、必要に応じてカスタマイズするのが一般的なワークフローです。Storybook と組み合わせてコンポーネントカタログを作るチームも多いです。"
      }
    ]
  },
  {
    id: "setup",
    title: "セットアップ",
    description: "CLI でプロジェクトを初期化する方法を学びます",
    sections: [
      {
        heading: "前提条件",
        content: "shadcn/ui は Tailwind CSS が必須です。React（または Next.js）+ TypeScript + Tailwind のプロジェクトが前提になります。Vite や Next.js App Router など、フレームワークごとに初期化コマンドが少し異なります。",
        code: "# 新規 Next.js プロジェクトの例\nnpx create-next-app@latest my-app --typescript --tailwind --eslint\n\ncd my-app\nnpx shadcn@latest init"
      },
      {
        heading: "init の流れ",
        content: "`npx shadcn@latest init` を実行すると、スタイル（default / new-york）、ベースカラー、CSS 変数の使用、コンポーネントの配置先（`components/ui`）などを質問形式で設定します。完了すると `components.json` が生成されます。"
      },
      {
        heading: "コンポーネントの追加",
        content: "個別コンポーネントは `npx shadcn@latest add button` のように追加します。`src/components/ui/button.tsx` にソースがコピーされ、必要な Radix 依存も自動インストールされます。",
        code: "npx shadcn@latest add button\nnpx shadcn@latest add input card dialog\n\n# 複数まとめて\nnpx shadcn@latest add button input label form"
      }
    ]
  },
  {
    id: "structure",
    title: "プロジェクト構成",
    description: "components.json と cn ユーティリティを学びます",
    sections: [
      {
        heading: "components.json",
        content: "shadcn/ui の設定ファイルです。スタイル、Tailwind の設定パス、コンポーネントのエイリアス（`@/components`）、CSS 変数の使用などが定義されます。CLI はこのファイルを読んでコンポーネントを正しい場所に配置します。",
        code: "{\n  \"$schema\": \"https://ui.shadcn.com/schema.json\",\n  \"style\": \"default\",\n  \"rsc\": true,\n  \"tsx\": true,\n  \"tailwind\": {\n    \"config\": \"tailwind.config.ts\",\n    \"css\": \"app/globals.css\",\n    \"baseColor\": \"slate\",\n    \"cssVariables\": true\n  },\n  \"aliases\": {\n    \"components\": \"@/components\",\n    \"utils\": \"@/lib/utils\"\n  }\n}"
      },
      {
        heading: "cn ユーティリティ",
        content: "`cn()` は `clsx` と `tailwind-merge` を組み合わせた関数です。条件付きクラス名の結合と、Tailwind クラスの競合解決（後勝ち）を一度に行います。すべての shadcn コンポーネントで使われます。",
        code: "import { clsx, type ClassValue } from \"clsx\";\nimport { twMerge } from \"tailwind-merge\";\n\nexport function cn(...inputs: ClassValue[]) {\n  return twMerge(clsx(inputs));\n}\n\n// 使用例\n<button className={cn(\"px-4 py-2\", isActive && \"bg-primary\")} />"
      },
      {
        heading: "CSS 変数",
        content: "shadcn/ui は `--background`、`--foreground`、`--primary` などの CSS 変数でテーマを管理します。Tailwind の `bg-background` や `text-primary` はこれらの変数を参照します。ダークモードは `.dark` クラスで変数を切り替えます。"
      }
    ]
  },
  {
    id: "button",
    title: "Button",
    description: "バリアントとサイズを学びます",
    sections: [
      {
        heading: "基本の使い方",
        content: "Button は最もよく使うコンポーネントです。variant と size で見た目を切り替えます。",
        code: "import { Button } from \"@/components/ui/button\";\n\n<Button>保存</Button>\n<Button variant=\"outline\">キャンセル</Button>\n<Button variant=\"destructive\">削除</Button>\n<Button variant=\"ghost\" size=\"sm\">詳細</Button>"
      },
      {
        heading: "バリアント一覧",
        content: "• default — プライマリアクション\n• secondary — サブアクション\n• outline — 枠線のみ\n• ghost — 背景なし（ツールバー向き）\n• destructive — 危険な操作（削除など）\n• link — テキストリンク風"
      },
      {
        heading: "asChild パターン",
        content: "Radix の Slot を使い、Button のスタイルを `<a>` や `<Link>` に適用できます。見た目はボタン、実体はリンクというパターンです。",
        code: "import Link from \"next/link\";\n\n<Button asChild>\n  <Link href=\"/dashboard\">ダッシュボード</Link>\n</Button>"
      }
    ]
  },
  {
    id: "form",
    title: "Form と Input",
    description: "フォーム入力とバリデーションを学びます",
    sections: [
      {
        heading: "Input と Label",
        content: "Input はテキスト入力、Label はアクセシブルなラベルです。`htmlFor` と `id` を紐付けます。",
        code: "import { Input } from \"@/components/ui/input\";\nimport { Label } from \"@/components/ui/label\";\n\n<div className=\"space-y-2\">\n  <Label htmlFor=\"email\">メールアドレス</Label>\n  <Input id=\"email\" type=\"email\" placeholder=\"you@example.com\" />\n</div>"
      },
      {
        heading: "Form コンポーネント",
        content: "shadcn/ui の Form は React Hook Form + Zod と統合されています。`FormField`、`FormItem`、`FormLabel`、`FormControl`、`FormMessage` でフィールドごとのエラー表示が簡単に書けます。",
        code: "import { useForm } from \"react-hook-form\";\nimport { zodResolver } from \"@hookform/resolvers/zod\";\nimport { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from \"@/components/ui/form\";\n\nconst form = useForm({ resolver: zodResolver(schema) });"
      },
      {
        heading: "バリデーション",
        content: "Zod スキーマで型安全なバリデーションを定義し、エラーメッセージを日本語化できます。フォームチュートリアルで学んだ知識がそのまま活きます。",
        tip: "デモでフォームのバリデーション状態を確認してみてください。"
      }
    ]
  },
  {
    id: "card",
    title: "Card",
    description: "コンテンツをグループ化する Card を学びます",
    sections: [
      {
        heading: "Card の構成",
        content: "Card、CardHeader、CardTitle、CardDescription、CardContent、CardFooter の組み合わせで、情報を整理して表示します。",
        code: "import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from \"@/components/ui/card\";\n\n<Card>\n  <CardHeader>\n    <CardTitle>プロジェクト</CardTitle>\n    <CardDescription>進行中のタスク一覧</CardDescription>\n  </CardHeader>\n  <CardContent>\n    <p>3 件のタスクが残っています</p>\n  </CardContent>\n  <CardFooter>\n    <Button>詳細を見る</Button>\n  </CardFooter>\n</Card>"
      },
      {
        heading: "レイアウトパターン",
        content: "ダッシュボードでは Card をグリッドで並べ、設定画面では Card でセクションを区切ります。`className` で幅やパディングを調整するのが基本です。"
      },
      {
        heading: "カスタマイズ",
        content: "Card のソースは手元にあるので、ボーダーなし・シャドウ強めなど、デザインに合わせて直接編集できます。全プロジェクトで統一したい変更は `components/ui/card.tsx` を一度直すだけです。"
      }
    ]
  },
  {
    id: "dialog",
    title: "Dialog",
    description: "モーダルダイアログを学びます",
    sections: [
      {
        heading: "Dialog の基本",
        content: "Radix Dialog をベースに、オーバーレイ・フォーカストラップ・Esc キーで閉じるなどが組み込まれています。",
        code: "import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from \"@/components/ui/dialog\";\n\n<Dialog>\n  <DialogTrigger asChild>\n    <Button>設定を開く</Button>\n  </DialogTrigger>\n  <DialogContent>\n    <DialogHeader>\n      <DialogTitle>設定</DialogTitle>\n      <DialogDescription>アカウント設定を変更できます</DialogDescription>\n    </DialogHeader>\n    {/* フォームなど */}\n    <DialogFooter>\n      <Button>保存</Button>\n    </DialogFooter>\n  </DialogContent>\n</Dialog>"
      },
      {
        heading: "制御モード",
        content: "開閉を state で制御する場合は `open` と `onOpenChange` を使います。フォーム送信後に自動で閉じる、確認ダイアログでキャンセル処理などが書けます。",
        code: "const [open, setOpen] = useState(false);\n\n<Dialog open={open} onOpenChange={setOpen}>\n  <DialogContent>...</DialogContent>\n</Dialog>"
      },
      {
        heading: "AlertDialog",
        content: "削除確認など「取り消しできない操作」には AlertDialog を使います。通常の Dialog より意図が明確になり、UX が向上します。"
      }
    ]
  },
  {
    id: "dropdown",
    title: "Dropdown Menu",
    description: "ドロップダウンメニューを学びます",
    sections: [
      {
        heading: "基本構造",
        content: "DropdownMenu、DropdownMenuTrigger、DropdownMenuContent、DropdownMenuItem でメニューを構成します。",
        code: "import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from \"@/components/ui/dropdown-menu\";\n\n<DropdownMenu>\n  <DropdownMenuTrigger asChild>\n    <Button variant=\"outline\">メニュー</Button>\n  </DropdownMenuTrigger>\n  <DropdownMenuContent>\n    <DropdownMenuItem>プロフィール</DropdownMenuItem>\n    <DropdownMenuItem>設定</DropdownMenuItem>\n    <DropdownMenuSeparator />\n    <DropdownMenuItem>ログアウト</DropdownMenuItem>\n  </DropdownMenuContent>\n</DropdownMenu>"
      },
      {
        heading: "アイコンとショートカット",
        content: "DropdownMenuItem にアイコンやキーボードショートカット表示を追加できます。ヘッダーメニュー、テーブルの行アクション、コンテキストメニューなどで頻出です。"
      },
      {
        heading: "他のメニュー系",
        content: "同様のパターンで ContextMenu（右クリック）、Menubar（アプリメニューバー）、NavigationMenu（サイトナビ）も提供されています。用途に合わせて選びます。"
      }
    ]
  },
  {
    id: "theme",
    title: "テーマとダークモード",
    description: "CSS 変数とダークモード切り替えを学びます",
    sections: [
      {
        heading: "CSS 変数ベースのテーマ",
        content: "shadcn/ui は HSL 形式の CSS 変数で色を定義します。`globals.css` の `:root` と `.dark` でライト/ダークの値を切り替えます。",
        code: ":root {\n  --background: 0 0% 100%;\n  --foreground: 222.2 84% 4.9%;\n  --primary: 222.2 47.4% 11.2%;\n  --primary-foreground: 210 40% 98%;\n}\n\n.dark {\n  --background: 222.2 84% 4.9%;\n  --foreground: 210 40% 98%;\n  --primary: 210 40% 98%;\n  --primary-foreground: 222.2 47.4% 11.2%;\n}"
      },
      {
        heading: "next-themes",
        content: "Next.js では `next-themes` の ThemeProvider で `<html>` に `class=\"dark\"` を付け替えます。システム設定の追従や、ユーザー選択の永続化（localStorage）が簡単です。",
        code: "import { ThemeProvider } from \"next-themes\";\n\n<ThemeProvider attribute=\"class\" defaultTheme=\"system\" enableSystem>\n  {children}\n</ThemeProvider>"
      },
      {
        heading: "ThemeToggle",
        content: "DropdownMenu と組み合わせてライト/ダーク/システムの切り替えボタンを作るのが定番パターンです。shadcn/ui のドキュメントにサンプルコードが公開されています。",
        tip: "デモでライト/ダークテーマの切り替えを試してみてください。"
      }
    ]
  },
  {
    id: "next-steps",
    title: "次のステップ",
    description: "shadcn/ui の学習を続ける道筋を確認します",
    sections: [
      {
        heading: "次に学ぶこと",
        content: "① フォーム入門 — React Hook Form + Zod\n② Storybook — コンポーネントカタログ\n③ アクセシビリティ — Radix の a11y を深掘り\n④ Next.js — App Router での実践"
      },
      {
        heading: "学習の道筋",
        content: "shadcn/ui は「コピーして所有する」UI キットです。まず Button と Card で画面を組み、Form で入力を作り、Dialog で確認フローを足す——この順で実践すると定着が早いです。公式サイト（ui.shadcn.com）のコンポーネント一覧を眺め、必要なものを `add` していきましょう。\n\nおめでとうございます！shadcn/ui 入門をすべて学びました 🎉"
      },
      {
        heading: "実践チェックリスト",
        content: "• components.json の設定を理解しているか\n• cn() でクラスを結合できているか\n• Form + Zod でバリデーションを書けるか\n• Dialog の制御モードを使えるか\n• ダークモードの CSS 変数をカスタマイズできるか"
      }
    ]
  }
]
