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
    title: "i18n とは？",
    description: "国際化とローカライゼーションの概念を理解します",
    sections: [
      {
        heading: "i18n と l10n",
        content: "i18n（internationalization）はアプリを多言語対応可能にする設計・実装。l10n（localization）は特定の言語・地域向けに翻訳・調整することです。i18n が土台、l10n が仕上げです。\n\n「i18n」は i と n の間に18文字——internationalization の略です。"
      },
      {
        heading: "なぜ i18n が必要か",
        content: "グローバルなユーザーにサービスを提供するには多言語対応が必須です。日本語のみのサイトは世界人口の約2%にしか届きません。UI テキスト、エラーメッセージ、日付・通貨の表示形式すべてが対象です。\n\nSEO でも多言語サイトは hreflang で各言語版を正しくインデックスできます。",
        tip: "デモで言語を切り替え、UI テキストと日付フォーマットが変わることを確認してみてください。"
      },
      {
        heading: "i18n の範囲",
        content: "• UI テキストの翻訳 • 日付・時刻・数値のフォーマット • 通貨表示 • 複数形の処理 • RTL（右から左）レイアウト • 画像・メタデータの多言語化"
      }
    ]
  },
  {
    id: "basics",
    title: "基本的な実装",
    description: "翻訳キーと翻訳ファイルの管理を学びます",
    sections: [
      {
        heading: "翻訳キー",
        content: "UI テキストをハードコードせず、翻訳キーで参照します。t(\"welcome.message\") でキーに対応する翻訳テキストを取得します。",
        code: "// locales/ja.json\n{\n  \welcome\: {\n    \message\: \"ようこそ\",\n    \description\: \"アプリへようこそ\"\n  },\n  \button\: {\n    \submit\: \"送信\",\n    \cancel\: \"キャンセル\"\n  }\n}\n\n// コンポーネント\n<p>{t(\"welcome.message\")}</p>"
      },
      {
        heading: "名前空間",
        content: "大規模アプリでは翻訳を機能ごとにファイル分割します。common.json、auth.json、dashboard.json のように名前空間で管理します。\n\nキーの衝突を防ぎ、翻訳ファイルの保守性が向上します。"
      },
      {
        heading: "ネストとパラメータ",
        content: "翻訳テキストに動的な値を埋め込めます。{{name}} プレースホルダーでユーザー名などを挿入します。",
        code: "// locales/ja.json\n{ \greeting\: \"こんにちは、{{name}}さん\" }\n\n// 使用\nt(\"greeting\", { name: \"太郎\" })  // → \"こんにちは、太郎さん\""
      }
    ]
  },
  {
    id: "next-intl",
    title: "next-intl",
    description: "Next.js App Router 向け i18n を学びます",
    sections: [
      {
        heading: "セットアップ",
        content: "next-intl は Next.js App Router に最適化された i18n ライブラリです。ミドルウェアでロケール検出、Server Components で翻訳取得が可能です。",
        code: "npm install next-intl\n\n// middleware.ts\nimport createMiddleware from \"next-intl/middleware\";\nexport default createMiddleware({ locales: [\"ja\", \"en\"], defaultLocale: \"ja\" });\nexport const config = { matcher: [\"/((?!api|_next|.*\\\\..*).*)\"] };"
      },
      {
        heading: "App Router 構成",
        content: "app/[locale]/layout.tsx でロケールを受け取り、NextIntlClientProvider で翻訳を提供します。",
        code: "// app/[locale]/layout.tsx\nimport { NextIntlClientProvider } from \"next-intl\";\nimport { getMessages } from \"next-intl/server\";\n\nexport default async function Layout({ children, params: { locale } }) {\n  const messages = await getMessages();\n  return (\n    <html lang={locale}>\n      <body>\n        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>\n      </body>\n    </html>\n  );\n}"
      },
      {
        heading: "Server Components",
        content: "getTranslations() で Server Component 内の翻訳を取得します。クライアントに翻訳データを送る量を最小化できます。",
        code: "import { getTranslations } from \"next-intl/server\";\n\nexport default async function Page() {\n  const t = await getTranslations(\"HomePage\");\n  return <h1>{t(\"title\")}</h1>;\n}"
      }
    ]
  },
  {
    id: "react-i18next",
    title: "react-i18next",
    description: "React 向け i18n ライブラリを学びます",
    sections: [
      {
        heading: "セットアップ",
        content: "react-i18next は React で最も広く使われる i18n ライブラリです。i18next がコアで、React バインディングを提供します。",
        code: "import i18n from \"i18next\";\nimport { initReactI18next } from \"react-i18next\";\n\ni18n.use(initReactI18next).init({\n  resources: {\n    ja: { translation: jaTranslations },\n    en: { translation: enTranslations },\n  },\n  lng: \"ja\",\n  fallbackLng: \"en\",\n});"
      },
      {
        heading: "useTranslation フック",
        content: "useTranslation() で t 関数と i18n インスタンスを取得します。",
        code: "import { useTranslation } from \"react-i18next\";\n\nfunction Welcome() {\n  const { t, i18n } = useTranslation();\n  return (\n    <div>\n      <h1>{t(\"welcome.message\")}</h1>\n      <button onClick={() => i18n.changeLanguage(\"en\")}>English</button>\n    </div>\n  );\n}"
      },
      {
        heading: "Trans コンポーネント",
        content: "翻訳テキスト内に HTML や React コンポーネントを埋め込む場合に Trans コンポーネントを使います。",
        code: "<Trans i18nKey=\"terms\">\n  利用規約に<Link to=\"/terms\">同意</Link>します\n</Trans>"
      }
    ]
  },
  {
    id: "formatting",
    title: "日付・数値・通貨",
    description: "ロケール依存のフォーマットを学びます",
    sections: [
      {
        heading: "Intl API",
        content: "ブラウザ標準の Intl API で日付、数値、通貨をロケールに応じてフォーマットします。",
        code: "new Intl.DateTimeFormat(\"ja-JP\", { dateStyle: \"long\" }).format(new Date());\n// → \"2024年1月15日\"\n\nnew Intl.NumberFormat(\"ja-JP\", { style: \"currency\", currency: \"JPY\" }).format(1500);\n// → \"￥1,500\"\n\nnew Intl.RelativeTimeFormat(\"ja\", { numeric: \"auto\" }).format(-1, \"day\");\n// → \"昨日\""
      },
      {
        heading: "i18n ライブラリのフォーマット",
        content: "next-intl や react-i18next でもフォーマット関数を提供します。useFormatter() や i18n.formatDate() で統一的にフォーマットできます。"
      },
      {
        heading: "タイムゾーン",
        content: "日付表示にはタイムゾーンの考慮が必要です。ユーザーのタイムゾーンを検出し、UTC で保存・ローカルで表示するのがベストプラクティスです。\n\ndate-fns-tz や Luxon でタイムゾーン変換を行います。"
      }
    ]
  },
  {
    id: "pluralization",
    title: "複数形の処理",
    description: "言語ごとの複数形ルールを学びます",
    sections: [
      {
        heading: "複数形の複雑さ",
        content: "英語は one/other の2形、日本語は複数形の区別なし、ロシア語は3形、ポーランド語は4形——言語ごとに複数形ルールが異なります。i18n ライブラリがこの複雑さを吸収します。",
        code: "// locales/en.json\n{\n  \items\: \"{{count}} item\",\n  \items_plural\: \"{{count}} items\"\n}\n\n// locales/ja.json\n{ \items\: \"{{count}}件\" }\n\nt(\"items\", { count: 5 })  // en: \"5 items\", ja: \"5件\""
      },
      {
        heading: "ICU MessageFormat",
        content: "i18next の ICU プラグインや next-intl の組み込みサポートで、複雑な複数形・性・条件分岐を1つのキーで表現できます。",
        code: "{count, plural, =0 {No items} one {# item} other {# items}}"
      },
      {
        heading: "性（Gender）",
        content: "一部の言語では名詞の性によって形容詞や動詞が変化します。ICU MessageFormat の select 構文で対応します。"
      }
    ]
  },
  {
    id: "routing",
    title: "多言語ルーティング",
    description: "URL ベースのロケール切り替えを学びます",
    sections: [
      {
        heading: "URL パターン",
        content: "サブパス（/ja/about、/en/about）、サブドメイン（ja.example.com）、クエリパラメータ（?lang=ja）の3パターンがあります。サブパスが SEO に最も有利です。",
        code: "// Next.js App Router\n// app/[locale]/about/page.tsx → /ja/about, /en/about\n\n// 言語切り替えリンク\nimport { Link } from \"next-intl\";\n<Link href=\"/about\" locale=\"en\">English</Link>"
      },
      {
        heading: "ロケール検出",
        content: "Accept-Language ヘッダー、Cookie、URL パスの優先順位でロケールを決定します。next-intl のミドルウェアが自動処理します。\n\nユーザーが明示的に言語を選択した場合は Cookie に保存し、次回以降その言語を優先します。"
      },
      {
        heading: "hreflang タグ",
        content: "SEO 用に各言語版の URL を link rel=\"alternate\" hreflang で指定します。next-intl や next-sitemap で自動生成できます。"
      }
    ]
  },
  {
    id: "rtl",
    title: "RTL 対応",
    description: "右から左の言語への対応を学びます",
    sections: [
      {
        heading: "RTL とは",
        content: "アラビア語、ヘブライ語、ペルシア語などは右から左（RTL）に読みます。dir=\"rtl\" を html 要素に設定し、レイアウトを反転させます。"
      },
      {
        heading: "CSS Logical Properties",
        content: "margin-left/right の代わりに margin-inline-start/end を使い、LTR/RTL 両方で正しく動作するスタイルを書きます。",
        code: "/* 物理プロパティ（RTL で問題） */\nmargin-left: 16px;\n\n/* 論理プロパティ（RTL 対応） */\nmargin-inline-start: 16px;\n\n/* Tailwind CSS */\n<div class=\"ms-4 me-2\">  /* margin-inline-start, margin-inline-end */"
      },
      {
        heading: "テスト",
        content: "RTL モードでレイアウトを確認し、テキストの切り詰め、ボタンの位置、アイコンの向きが正しいか検証します。Storybook の RTL アドオンが便利です。",
        tip: "デモで dir=\"rtl\" を設定し、レイアウトが反転することを確認してみてください。"
      }
    ]
  },
  {
    id: "workflow",
    title: "翻訳ワークフロー",
    description: "翻訳の管理と抽出を学びます",
    sections: [
      {
        heading: "翻訳ファイルの管理",
        content: "JSON や YAML で翻訳を管理し、Git でバージョン管理します。翻訳者はコードを触らず、翻訳ファイルだけを編集できます。\n\nCrowdin、Lokalise、Phrase などの翻訳管理プラットフォーム（TMS）と連携すると、翻訳者との協業がスムーズになります。"
      },
      {
        heading: "未翻訳キーの検出",
        content: "i18next-parser や FormatJS CLI でコードから翻訳キーを自動抽出し、翻訳ファイルを更新します。CI で未翻訳キーをチェックするスクリプトも有効です。"
      },
      {
        heading: "翻訳の品質",
        content: "機械翻訳（Google Translate API）を初期翻訳に使い、人間がレビュー・修正するハイブリッド方式が効率的です。文脈に依存する UI テキストは人間の翻訳が必須です。"
      }
    ]
  },
  {
    id: "next-steps",
    title: "次のステップ",
    description: "i18n の学習を続けるための道筋を確認します",
    sections: [
      {
        heading: "次に学ぶこと",
        content: "① SEO 入門 — 多言語 SEO\n② Storybook 入門 — 多言語ストーリー\n③ CSSアニメーション — RTL アニメーション\n④ Next.js — App Router の国際化"
      },
      {
        heading: "学習の道筋",
        content: "i18n は最初から設計に組み込むのが鉄則です。後から追加すると全 UI テキストの置き換えが必要になり、コストが膨大になります。新規プロジェクトでは最初のコミットから i18n を導入しましょう。\n\nおめでとうございます！i18n 入門をすべて学びました 🎉",
        tip: "既存プロジェクトの主要画面に next-intl を導入し、日本語と英語を切り替えてみてください。"
      },
      {
        heading: "実践チェックリスト",
        content: "• UI テキストをハードコードしていないか\n• 日付・数値を Intl API でフォーマットしているか\n• URL ベースのロケール切り替えを実装しているか\n• hreflang タグを設定しているか\n• RTL 対応を考慮しているか"
      }
    ]
  }
]
