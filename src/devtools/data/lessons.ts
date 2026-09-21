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
    title: "DevTools とは？",
    description: "開発者ツールの概要を学びます",
    sections: [
      {
        heading: "DevTools とは？の概要",
        content: "DevToolsにおける「DevTools とは？」について学びます。\n\n開発者ツールの概要を学びます。実務でよく使う概念を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "まずは全体像をつかみます。DevTools では、このテーマが他の機能とどう連携するかを意識することが大切です。\n\n小さな例から始めて、徐々に複雑なケースへ広げていくのがおすすめです。",
        code: "// DevTools の例\n// intro に関する基本的なコード",
        tip: "上のインタラクティブデモで、実際の動きを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存コードに合わせて使い方を調整します。\n\n公式ドキュメントも併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "elements",
    title: "Elements パネル",
    description: "HTML と CSS の検査・編集を学びます",
    sections: [
      {
        heading: "Elements パネルの概要",
        content: "DevToolsにおける「Elements パネル」について学びます。\n\nHTML と CSS の検査・編集を学びます。実務でよく使う概念を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "まずは全体像をつかみます。DevTools では、このテーマが他の機能とどう連携するかを意識することが大切です。\n\n小さな例から始めて、徐々に複雑なケースへ広げていくのがおすすめです。",
        code: "// DevTools の例\n// elements に関する基本的なコード",
        tip: "上のインタラクティブデモで、実際の動きを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存コードに合わせて使い方を調整します。\n\n公式ドキュメントも併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "console",
    title: "Console",
    description: "ログ出力と JavaScript の実行を学びます",
    sections: [
      {
        heading: "Consoleの概要",
        content: "DevToolsにおける「Console」について学びます。\n\nログ出力と JavaScript の実行を学びます。実務でよく使う概念を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "まずは全体像をつかみます。DevTools では、このテーマが他の機能とどう連携するかを意識することが大切です。\n\n小さな例から始めて、徐々に複雑なケースへ広げていくのがおすすめです。",
        code: "// DevTools の例\n// console に関する基本的なコード",
        tip: "上のインタラクティブデモで、実際の動きを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存コードに合わせて使い方を調整します。\n\n公式ドキュメントも併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "network",
    title: "Network",
    description: "API リクエストの確認方法を学びます",
    sections: [
      {
        heading: "Networkの概要",
        content: "DevToolsにおける「Network」について学びます。\n\nAPI リクエストの確認方法を学びます。実務でよく使う概念を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "まずは全体像をつかみます。DevTools では、このテーマが他の機能とどう連携するかを意識することが大切です。\n\n小さな例から始めて、徐々に複雑なケースへ広げていくのがおすすめです。",
        code: "// DevTools の例\n// network に関する基本的なコード",
        tip: "上のインタラクティブデモで、実際の動きを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存コードに合わせて使い方を調整します。\n\n公式ドキュメントも併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "sources",
    title: "Sources / デバッガ",
    description: "ブレークポイントでデバッグする方法を学びます",
    sections: [
      {
        heading: "Sources / デバッガの概要",
        content: "DevToolsにおける「Sources / デバッガ」について学びます。\n\nブレークポイントでデバッグする方法を学びます。実務でよく使う概念を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "まずは全体像をつかみます。DevTools では、このテーマが他の機能とどう連携するかを意識することが大切です。\n\n小さな例から始めて、徐々に複雑なケースへ広げていくのがおすすめです。",
        code: "// DevTools の例\n// sources に関する基本的なコード",
        tip: "上のインタラクティブデモで、実際の動きを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存コードに合わせて使い方を調整します。\n\n公式ドキュメントも併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "performance",
    title: "Performance",
    description: "パフォーマンスの計測方法を学びます",
    sections: [
      {
        heading: "Performanceの概要",
        content: "DevToolsにおける「Performance」について学びます。\n\nパフォーマンスの計測方法を学びます。実務でよく使う概念を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "まずは全体像をつかみます。DevTools では、このテーマが他の機能とどう連携するかを意識することが大切です。\n\n小さな例から始めて、徐々に複雑なケースへ広げていくのがおすすめです。",
        code: "// DevTools の例\n// performance に関する基本的なコード",
        tip: "上のインタラクティブデモで、実際の動きを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存コードに合わせて使い方を調整します。\n\n公式ドキュメントも併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "responsive",
    title: "レスポンシブモード",
    description: "デバイスサイズのエミュレーションを学びます",
    sections: [
      {
        heading: "レスポンシブモードの概要",
        content: "DevToolsにおける「レスポンシブモード」について学びます。\n\nデバイスサイズのエミュレーションを学びます。実務でよく使う概念を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "まずは全体像をつかみます。DevTools では、このテーマが他の機能とどう連携するかを意識することが大切です。\n\n小さな例から始めて、徐々に複雑なケースへ広げていくのがおすすめです。",
        code: "// DevTools の例\n// responsive に関する基本的なコード",
        tip: "上のインタラクティブデモで、実際の動きを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存コードに合わせて使い方を調整します。\n\n公式ドキュメントも併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "storage",
    title: "Application / Storage",
    description: "localStorage や Cookie の確認を学びます",
    sections: [
      {
        heading: "Application / Storageの概要",
        content: "DevToolsにおける「Application / Storage」について学びます。\n\nlocalStorage や Cookie の確認を学びます。実務でよく使う概念を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "まずは全体像をつかみます。DevTools では、このテーマが他の機能とどう連携するかを意識することが大切です。\n\n小さな例から始めて、徐々に複雑なケースへ広げていくのがおすすめです。",
        code: "// DevTools の例\n// storage に関する基本的なコード",
        tip: "上のインタラクティブデモで、実際の動きを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存コードに合わせて使い方を調整します。\n\n公式ドキュメントも併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "tips",
    title: "便利なショートカット",
    description: "効率的に使うための Tips を学びます",
    sections: [
      {
        heading: "便利なショートカットの概要",
        content: "DevToolsにおける「便利なショートカット」について学びます。\n\n効率的に使うための Tips を学びます。実務でよく使う概念を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "まずは全体像をつかみます。DevTools では、このテーマが他の機能とどう連携するかを意識することが大切です。\n\n小さな例から始めて、徐々に複雑なケースへ広げていくのがおすすめです。",
        code: "// DevTools の例\n// tips に関する基本的なコード",
        tip: "上のインタラクティブデモで、実際の動きを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存コードに合わせて使い方を調整します。\n\n公式ドキュメントも併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "next-steps",
    title: "次のステップ",
    description: "DevTools の学習を続けるためのヒント",
    sections: [
      {
        heading: "次のステップの概要",
        content: "DevToolsにおける「次のステップ」について学びます。\n\nDevTools の学習を続けるためのヒント。実務でよく使う概念を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "まずは全体像をつかみます。DevTools では、このテーマが他の機能とどう連携するかを意識することが大切です。\n\n小さな例から始めて、徐々に複雑なケースへ広げていくのがおすすめです。",
        code: "// DevTools の例\n// next-steps に関する基本的なコード",
        tip: "上のインタラクティブデモで、実際の動きを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存コードに合わせて使い方を調整します。\n\n公式ドキュメントも併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  }
]
