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
    title: "SEO とは？",
    description: "検索エンジン最適化の基本概念を理解します",
    sections: [
      {
        heading: "SEO の目的",
        content: "SEO（Search Engine Optimization）は、検索エンジン（Google 等）での表示順位を向上させ、オーガニック（自然）検索からの流入を増やす施策です。広告費をかけずに継続的なトラフィックを獲得できます。\n\nGoogle は200以上のランキング要因を考慮しますが、コンテンツの質、技術的な健全性、ユーザー体験が三大要素です。"
      },
      {
        heading: "クローラーとインデックス",
        content: "Googlebot がページをクロール（巡回）し、内容をインデックス（データベースに登録）します。検索クエリに対して関連性と品質でランキングされます。\n\nrobots.txt でクロール制御、noindex でインデックス除外、sitemap.xml でクロールを促進します。",
        tip: "Google Search Console で自分のサイトのインデックス状況を確認してみてください。"
      },
      {
        heading: "技術 SEO とコンテンツ SEO",
        content: "技術 SEO — サイトの構造、速度、モバイル対応、構造化データ。コンテンツ SEO — キーワード選定、見出し構造、内部リンク、コンテンツの質。\n\nフロントエンド開発者は技術 SEO が主戦場ですが、コンテンツ SEO との連携も重要です。"
      }
    ]
  },
  {
    id: "metadata",
    title: "メタデータ",
    description: "title、description、OGP タグの設定を学びます",
    sections: [
      {
        heading: "title と description",
        content: "title は検索結果のリンクテキスト、description はスニペット（説明文）に使われます。ページごとにユニークで、内容を正確に要約したものを設定します。",
        code: "<head>\n  <title>React 入門チュートリアル | プログラミング学習</title>\n  <meta name=\"description\" content=\"React の基本から Hooks、状態管理まで。初心者向けの10レッスンで学べます。\" />\n</head>"
      },
      {
        heading: "Open Graph と Twitter Card",
        content: "SNS でシェアされた際のプレビュー画像・テキストを制御します。og:title、og:description、og:image、og:url が基本です。",
        code: "<meta property=\"og:title\" content=\"React 入門チュートリアル\" />\n<meta property=\"og:description\" content=\"初心者向け10レッスン\" />\n<meta property=\"og:image\" content=\"https://example.com/og-image.png\" />\n<meta property=\"og:url\" content=\"https://example.com/react\" />\n<meta name=\"twitter:card\" content=\"summary_large_image\" />"
      },
      {
        heading: "Next.js の Metadata API",
        content: "Next.js 13+ の App Router では export const metadata で宣言的にメタデータを設定します。動的ページは generateMetadata 関数を使います。",
        code: "export const metadata = {\n  title: \"React 入門\",\n  description: \"初心者向けチュートリアル\",\n  openGraph: { images: [\"/og-react.png\"] },\n};"
      }
    ]
  },
  {
    id: "structured-data",
    title: "構造化データ",
    description: "JSON-LD でリッチリザルトを実現します",
    sections: [
      {
        heading: "構造化データとは",
        content: "Schema.org の語彙でページの内容を機械可読な形式で記述します。Google がリッチリザルト（星評価、パンくずリスト、FAQ 等）を検索結果に表示できるようになります。",
        code: "<script type=\"application/ld+json\">\n{\n  \@context\: \"https://schema.org\",\n  \@type\: \"Article\",\n  \headline\: \"React 入門チュートリアル\",\n  \author\: { \@type\: \"Person\", \name\: \"太郎\" },\n  \datePublished\: \"2024-01-15\"\n}\n</script>"
      },
      {
        heading: "主要なスキーマタイプ",
        content: "Article（記事）、Product（商品）、FAQPage（FAQ）、BreadcrumbList（パンくず）、Organization（企業情報）、LocalBusiness（店舗情報）がよく使われます。\n\nGoogle の Rich Results Test で構造化データの検証ができます。"
      },
      {
        heading: "パンくずリスト",
        content: "BreadcrumbList は検索結果にパンくずナビゲーションを表示します。サイト構造の理解を助け、クリック率が向上することがあります。",
        tip: "デモで Rich Results Test に URL を入力し、構造化データの解析結果を確認してみてください。"
      }
    ]
  },
  {
    id: "performance",
    title: "Core Web Vitals",
    description: "ページ速度とユーザー体験指標を学びます",
    sections: [
      {
        heading: "3つの Core Web Vitals",
        content: "LCP（Largest Contentful Paint）— 最大コンテンツの表示速度。2.5秒以内が Good。FID/INP（Interactivity）— 操作への応答速度。CLS（Cumulative Layout Shift）— レイアウトの安定性。0.1 以下が Good。\n\nこれらは Google のランキング要因の1つです。"
      },
      {
        heading: "最適化手法",
        content: "画像の最適化（WebP、lazy loading、適切なサイズ）、フォントの最適化（font-display: swap、サブセット化）、JavaScript の削減（コード分割、Tree Shaking）、CDN の活用。\n\nNext.js の Image コンポーネントは自動で WebP 変換と lazy loading を行います。",
        code: "import Image from \"next/image\";\n<Image src=\"/hero.jpg\" alt=\"ヒーロー画像\" width={1200} height={600} priority />"
      },
      {
        heading: "測定ツール",
        content: "Lighthouse（Chrome DevTools）、PageSpeed Insights、Web Vitals ライブラリで測定します。本番環境の実ユーザーデータは Chrome UX Report（CrUX）で確認できます。"
      }
    ]
  },
  {
    id: "ssr-seo",
    title: "SSR/SSG と SEO",
    description: "レンダリング方式の SEO への影響を学びます",
    sections: [
      {
        heading: "CSR の SEO 問題",
        content: "クライアントサイドレンダリング（CSR）のみの SPA は、初回 HTML が空の <div id=\"root\"> だけです。クローラーが JavaScript 実行後のコンテンツを取得できない場合、インデックスされません。\n\nGoogle は JavaScript を実行しますが、レンダリングに時間がかかり、完全にインデックスされないリスクがあります。"
      },
      {
        heading: "SSR と SSG",
        content: "SSR（Server-Side Rendering）— リクエスト時に HTML を生成。SSG（Static Site Generation）— ビルド時に HTML を生成。どちらも完全な HTML がクローラーに届きます。\n\nNext.js ではページごとに export const dynamic や generateStaticParams でレンダリング方式を選択できます。",
        code: "// SSG（デフォルト）\nexport default function Page() { return <h1>静的ページ</h1>; }\n\n// SSR\nexport const dynamic = \"force-dynamic\";\n\n// ISR（Incremental Static Regeneration）\nexport const revalidate = 3600; // 1時間ごとに再生成"
      },
      {
        heading: "ハイブリッドアプローチ",
        content: "公開ページ（ブログ、ランディング）は SSG/SSR、ユーザー固有ページ（ダッシュボード）は CSR という使い分けが一般的です。SEO が必要なページだけサーバーレンダリングします。"
      }
    ]
  },
  {
    id: "sitemap",
    title: "サイトマップと robots.txt",
    description: "クローラーの誘導を学びます",
    sections: [
      {
        heading: "sitemap.xml",
        content: "サイト内の全 URL をリストし、クローラーに発見を促します。更新頻度（changefreq）と優先度（priority）も指定できます。",
        code: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n  <url>\n    <loc>https://example.com/react</loc>\n    <lastmod>2024-01-15</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n</urlset>"
      },
      {
        heading: "Next.js でのサイトマップ",
        content: "App Router では app/sitemap.ts で動的にサイトマップを生成します。",
        code: "export default function sitemap() {\n  return [\n    { url: \"https://example.com\", lastModified: new Date() },\n    { url: \"https://example.com/react\", lastModified: new Date() },\n  ];\n}"
      },
      {
        heading: "robots.txt",
        content: "クローラーのアクセス制御ファイルです。Disallow で特定パスをブロック、Sitemap でサイトマップの場所を指定します。",
        code: "User-agent: *\nAllow: /\nDisallow: /api/\nDisallow: /admin/\nSitemap: https://example.com/sitemap.xml"
      }
    ]
  },
  {
    id: "semantic-html",
    title: "セマンティック HTML",
    description: "HTML 構造と SEO の関係を学びます",
    sections: [
      {
        heading: "見出しの階層",
        content: "h1 はページに1つだけ。h2 → h3 の順序を守り、見出しを飛ばさない（h1 の次に h3 は NG）。見出しはコンテンツの構造を表し、検索エンジンがページの主題を理解する手がかりになります。"
      },
      {
        heading: "セマンティック要素",
        content: "header、nav、main、article、section、aside、footer を適切に使い、ページ構造を明確にします。div のみの構造より、検索エンジンとアクセシビリティツールの両方に有益です。\n\nmain 要素はページの主要コンテンツを1つだけ囲みます。"
      },
      {
        heading: "alt 属性とリンクテキスト",
        content: "img の alt 属性は画像の内容を説明し、画像検索とアクセシビリティに影響します。a タグのリンクテキストは「こちらをクリック」ではなく、リンク先の内容を説明するテキストを使います。",
        tip: "デモでページの見出し構造をアウトライン表示し、階層が正しいか確認してみてください。"
      }
    ]
  },
  {
    id: "canonical",
    title: "canonical URL と重複コンテンツ",
    description: "URL の正規化を学びます",
    sections: [
      {
        heading: "重複コンテンツの問題",
        content: "同じコンテンツが複数 URL でアクセス可能だと、検索エンジンがどれをインデックスすべきか迷い、ランキングが分散します。例: /page と /page/ や ?sort=date と ?sort=name。"
      },
      {
        heading: "canonical タグ",
        content: "link rel=\"canonical\" で正規 URL を指定します。検索エンジンに「この URL が正式版です」と伝えます。",
        code: "<link rel=\"canonical\" href=\"https://example.com/react\" />\n\n// Next.js\nexport const metadata = {\n  alternates: { canonical: \"https://example.com/react\" },\n};"
      },
      {
        heading: "hreflang",
        content: "多言語サイトでは hreflang 属性で言語・地域バージョンを指定します。Google が適切な言語版を検索結果に表示します。",
        code: "<link rel=\"alternate\" hreflang=\"ja\" href=\"https://example.com/ja/react\" />\n<link rel=\"alternate\" hreflang=\"en\" href=\"https://example.com/en/react\" />\n<link rel=\"alternate\" hreflang=\"x-default\" href=\"https://example.com/react\" />"
      }
    ]
  },
  {
    id: "tools",
    title: "SEO ツール",
    description: "分析・監視ツールの活用を学びます",
    sections: [
      {
        heading: "Google Search Console",
        content: "インデックス状況、検索クエリ、クリック数、クロールエラーを確認できます。サイトマップの送信、URL のインデックス登録リクエストも可能です。\n\n新サイトは Search Console に登録し、サイトマップを送信するのが最初のステップです。"
      },
      {
        heading: "Google Analytics",
        content: "ユーザー行為（ページビュー、滞在時間、離脱率）を分析します。SEO 施策の効果測定（オーガニック検索からの流入増加）に使います。\n\nGA4 はイベントベースの新しい分析モデルです。Search Console と連携すると検索クエリとユーザー行動を統合分析できます。"
      },
      {
        heading: "その他のツール",
        content: "Ahrefs / SEMrush — キーワード調査、被リンク分析。Screaming Frog — サイトのクロールと技術 SEO 監査。Lighthouse — パフォーマンスと SEO スコアの測定。"
      }
    ]
  },
  {
    id: "next-steps",
    title: "次のステップ",
    description: "SEO の学習を続けるための道筋を確認します",
    sections: [
      {
        heading: "次に学ぶこと",
        content: "① i18n 入門 — 多言語 SEO\n② CSSアニメーション — CLS 対策\n③ HTTP 入門 — キャッシュと SEO\n④ アクセシビリティ — SEO との相乗効果"
      },
      {
        heading: "学習の道筋",
        content: "SEO は技術とコンテンツの両面から取り組む継続的な施策です。メタデータと構造化データを正しく設定し、Core Web Vitals を改善し、Search Console で監視——このサイクルを回しましょう。\n\nおめでとうございます！SEO 入門をすべて学びました 🎉",
        tip: "自分のサイトを Lighthouse の SEO カテゴリでスコアリングしてみてください。"
      },
      {
        heading: "実践チェックリスト",
        content: "• 全ページにユニークな title/description があるか\n• 構造化データ（JSON-LD）を設定しているか\n• sitemap.xml と robots.txt を配置しているか\n• Core Web Vitals が Good 範囲か\n• Search Console に登録しているか"
      }
    ]
  }
]
