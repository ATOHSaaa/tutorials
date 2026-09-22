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
    title: "Turborepo とは？",
    description: "Turborepo の役割とメリットを学びます",
    sections: [
      {
        heading: "Turborepo とは？の概要",
        content: "Turborepoにおける「Turborepo とは？」について学びます。\n\nTurborepo の役割とメリットを学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Turborepo では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "npx create-turbo@latest\nnpm run dev --filter=web",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "monorepo",
    title: "モノレポとは？",
    description: "モノレポとポリレポの違いを学びます",
    sections: [
      {
        heading: "モノレポとは？の概要",
        content: "Turborepoにおける「モノレポとは？」について学びます。\n\nモノレポとポリレポの違いを学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Turborepo では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "npx create-turbo@latest\nnpm run dev --filter=web",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "setup",
    title: "セットアップ",
    description: "Turborepo プロジェクトの作成方法を学びます",
    sections: [
      {
        heading: "セットアップの概要",
        content: "Turborepoにおける「セットアップ」について学びます。\n\nTurborepo プロジェクトの作成方法を学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Turborepo では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "npx create-turbo@latest\nnpm run dev --filter=web",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "workspaces",
    title: "ワークスペース",
    description: "apps と packages の構成を学びます",
    sections: [
      {
        heading: "ワークスペースの概要",
        content: "Turborepoにおける「ワークスペース」について学びます。\n\napps と packages の構成を学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Turborepo では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "npx create-turbo@latest\nnpm run dev --filter=web",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "tasks",
    title: "タスク定義",
    description: "turbo.json でタスクを定義する方法を学びます",
    sections: [
      {
        heading: "タスク定義の概要",
        content: "Turborepoにおける「タスク定義」について学びます。\n\nturbo.json でタスクを定義する方法を学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Turborepo では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "npx create-turbo@latest\nnpm run dev --filter=web",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "pipeline",
    title: "パイプライン",
    description: "タスクの依存関係と実行順を学びます",
    sections: [
      {
        heading: "パイプラインの概要",
        content: "Turborepoにおける「パイプライン」について学びます。\n\nタスクの依存関係と実行順を学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Turborepo では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "npx create-turbo@latest\nnpm run dev --filter=web",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "cache",
    title: "キャッシュ",
    description: "ローカル・リモートキャッシュの仕組みを学びます",
    sections: [
      {
        heading: "キャッシュの概要",
        content: "Turborepoにおける「キャッシュ」について学びます。\n\nローカル・リモートキャッシュの仕組みを学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Turborepo では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "npx create-turbo@latest\nnpm run dev --filter=web",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "filter",
    title: "--filter",
    description: "特定パッケージだけを実行する方法を学びます",
    sections: [
      {
        heading: "--filterの概要",
        content: "Turborepoにおける「--filter」について学びます。\n\n特定パッケージだけを実行する方法を学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Turborepo では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "npx create-turbo@latest\nnpm run dev --filter=web",
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
    title: "CI 連携",
    description: "GitHub Actions と組み合わせる方法を学びます",
    sections: [
      {
        heading: "CI 連携の概要",
        content: "Turborepoにおける「CI 連携」について学びます。\n\nGitHub Actions と組み合わせる方法を学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Turborepo では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "npx create-turbo@latest\nnpm run dev --filter=web",
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
    description: "Turborepo の学習を続けるためのヒント",
    sections: [
      {
        heading: "次のステップの概要",
        content: "Turborepoにおける「次のステップ」について学びます。\n\nTurborepo の学習を続けるためのヒント。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Turborepo では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "npx create-turbo@latest\nnpm run dev --filter=web",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  }
]
