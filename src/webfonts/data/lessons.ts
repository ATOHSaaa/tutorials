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
    title: "Webフォントとは？",
    description: "Web フォントの基本とシステムフォントとの違いを学びます",
    sections: [
      {
        heading: "Webフォントとは？の概要",
        content: "Webフォントにおける「Webフォントとは？」について学びます。\n\nWeb フォントの基本とシステムフォントとの違いを学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Webフォント では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "@font-face {\n  font-family: 'MyFont';\n  src: url('/fonts/my.woff2') format('woff2');\n  font-display: swap;\n}",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "google-fonts",
    title: "Google Fonts",
    description: "Google Fonts の導入方法を学びます",
    sections: [
      {
        heading: "Google Fontsの概要",
        content: "Webフォントにおける「Google Fonts」について学びます。\n\nGoogle Fonts の導入方法を学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Webフォント では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "@font-face {\n  font-family: 'MyFont';\n  src: url('/fonts/my.woff2') format('woff2');\n  font-display: swap;\n}",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "font-face",
    title: "@font-face",
    description: "フォントファイルを CSS で定義する方法を学びます",
    sections: [
      {
        heading: "@font-faceの概要",
        content: "Webフォントにおける「@font-face」について学びます。\n\nフォントファイルを CSS で定義する方法を学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Webフォント では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "@font-face {\n  font-family: 'MyFont';\n  src: url('/fonts/my.woff2') format('woff2');\n  font-display: swap;\n}",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "formats",
    title: "フォント形式",
    description: "woff2 など形式の違いを学びます",
    sections: [
      {
        heading: "フォント形式の概要",
        content: "Webフォントにおける「フォント形式」について学びます。\n\nwoff2 など形式の違いを学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Webフォント では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "@font-face {\n  font-family: 'MyFont';\n  src: url('/fonts/my.woff2') format('woff2');\n  font-display: swap;\n}",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "font-display",
    title: "font-display",
    description: "FOIT/FOUT と font-display を学びます",
    sections: [
      {
        heading: "font-displayの概要",
        content: "Webフォントにおける「font-display」について学びます。\n\nFOIT/FOUT と font-display を学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Webフォント では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "@font-face {\n  font-family: 'MyFont';\n  src: url('/fonts/my.woff2') format('woff2');\n  font-display: swap;\n}",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "preload",
    title: "preload",
    description: "フォントの先読みで表示を速くする方法を学びます",
    sections: [
      {
        heading: "preloadの概要",
        content: "Webフォントにおける「preload」について学びます。\n\nフォントの先読みで表示を速くする方法を学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Webフォント では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "@font-face {\n  font-family: 'MyFont';\n  src: url('/fonts/my.woff2') format('woff2');\n  font-display: swap;\n}",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "subset",
    title: "サブセット化",
    description: "必要な文字だけ読み込む最適化を学びます",
    sections: [
      {
        heading: "サブセット化の概要",
        content: "Webフォントにおける「サブセット化」について学びます。\n\n必要な文字だけ読み込む最適化を学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Webフォント では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "@font-face {\n  font-family: 'MyFont';\n  src: url('/fonts/my.woff2') format('woff2');\n  font-display: swap;\n}",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "variable",
    title: "バリアブルフォント",
    description: "1ファイルで複数の太さを扱う方法を学びます",
    sections: [
      {
        heading: "バリアブルフォントの概要",
        content: "Webフォントにおける「バリアブルフォント」について学びます。\n\n1ファイルで複数の太さを扱う方法を学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Webフォント では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "@font-face {\n  font-family: 'MyFont';\n  src: url('/fonts/my.woff2') format('woff2');\n  font-display: swap;\n}",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "performance",
    title: "パフォーマンス",
    description: "フォントが表示速度に与える影響を学びます",
    sections: [
      {
        heading: "パフォーマンスの概要",
        content: "Webフォントにおける「パフォーマンス」について学びます。\n\nフォントが表示速度に与える影響を学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Webフォント では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "@font-face {\n  font-family: 'MyFont';\n  src: url('/fonts/my.woff2') format('woff2');\n  font-display: swap;\n}",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "next-steps",
    title: "次のステップ",
    description: "Webフォントの学習を続けるためのヒント",
    sections: [
      {
        heading: "次のステップの概要",
        content: "Webフォントにおける「次のステップ」について学びます。\n\nWebフォントの学習を続けるためのヒント。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Webフォント では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "@font-face {\n  font-family: 'MyFont';\n  src: url('/fonts/my.woff2') format('woff2');\n  font-display: swap;\n}",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  }
]
