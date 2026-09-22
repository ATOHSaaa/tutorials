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
    title: "Linter とは？",
    description: "Linter と Formatter の役割を学びます",
    sections: [
      {
        heading: "Linter とは？の概要",
        content: "Linterにおける「Linter とは？」について学びます。\n\nLinter と Formatter の役割を学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Linter では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "npm install -D eslint @eslint/js\nnpx eslint .",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "eslint",
    title: "ESLint 入門",
    description: "ESLint のインストールと基本設定を学びます",
    sections: [
      {
        heading: "ESLint 入門の概要",
        content: "Linterにおける「ESLint 入門」について学びます。\n\nESLint のインストールと基本設定を学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Linter では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "npm install -D eslint @eslint/js\nnpx eslint .",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "rules",
    title: "ルール設定",
    description: "ルールの有効化とカスタマイズを学びます",
    sections: [
      {
        heading: "ルール設定の概要",
        content: "Linterにおける「ルール設定」について学びます。\n\nルールの有効化とカスタマイズを学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Linter では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "npm install -D eslint @eslint/js\nnpx eslint .",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "prettier",
    title: "Prettier",
    description: "コードフォーマッターの導入を学びます",
    sections: [
      {
        heading: "Prettierの概要",
        content: "Linterにおける「Prettier」について学びます。\n\nコードフォーマッターの導入を学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Linter では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "npm install -D eslint @eslint/js\nnpx eslint .",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "typescript",
    title: "TypeScript ESLint",
    description: "型チェックと Lint の連携を学びます",
    sections: [
      {
        heading: "TypeScript ESLintの概要",
        content: "Linterにおける「TypeScript ESLint」について学びます。\n\n型チェックと Lint の連携を学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Linter では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "npm install -D eslint @eslint/js\nnpx eslint .",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "flat-config",
    title: "Flat Config",
    description: "ESLint 9 の新しい設定形式を学びます",
    sections: [
      {
        heading: "Flat Configの概要",
        content: "Linterにおける「Flat Config」について学びます。\n\nESLint 9 の新しい設定形式を学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Linter では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "npm install -D eslint @eslint/js\nnpx eslint .",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "editor",
    title: "エディタ連携",
    description: "保存時の自動修正を設定する方法を学びます",
    sections: [
      {
        heading: "エディタ連携の概要",
        content: "Linterにおける「エディタ連携」について学びます。\n\n保存時の自動修正を設定する方法を学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Linter では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "npm install -D eslint @eslint/js\nnpx eslint .",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "ci",
    title: "CI での実行",
    description: "PR で Lint を必須にする方法を学びます",
    sections: [
      {
        heading: "CI での実行の概要",
        content: "Linterにおける「CI での実行」について学びます。\n\nPR で Lint を必須にする方法を学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Linter では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "npm install -D eslint @eslint/js\nnpx eslint .",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "custom",
    title: "カスタムルール",
    description: "プロジェクト固有のルールを作る方法を学びます",
    sections: [
      {
        heading: "カスタムルールの概要",
        content: "Linterにおける「カスタムルール」について学びます。\n\nプロジェクト固有のルールを作る方法を学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Linter では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "npm install -D eslint @eslint/js\nnpx eslint .",
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
    description: "Linter の学習を続けるためのヒント",
    sections: [
      {
        heading: "次のステップの概要",
        content: "Linterにおける「次のステップ」について学びます。\n\nLinter の学習を続けるためのヒント。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Linter では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "npm install -D eslint @eslint/js\nnpx eslint .",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  }
]
