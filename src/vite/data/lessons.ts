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
    title: "Vite とは？",
    description: "Vite の特徴と他のビルドツールとの違いを学びます",
    sections: [
      {
        heading: "Vite とは？の概要",
        content: "Viteにおける「Vite とは？」について学びます。\n\nVite の特徴と他のビルドツールとの違いを学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Vite では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "npm create vite@latest my-app -- --template react-ts\nnpm install\nnpm run dev",
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
    title: "プロジェクト作成",
    description: "create vite でプロジェクトを立ち上げる方法を学びます",
    sections: [
      {
        heading: "プロジェクト作成の概要",
        content: "Viteにおける「プロジェクト作成」について学びます。\n\ncreate vite でプロジェクトを立ち上げる方法を学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Vite では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "npm create vite@latest my-app -- --template react-ts\nnpm install\nnpm run dev",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "dev-server",
    title: "開発サーバー",
    description: "HMR と高速な開発体験を学びます",
    sections: [
      {
        heading: "開発サーバーの概要",
        content: "Viteにおける「開発サーバー」について学びます。\n\nHMR と高速な開発体験を学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Vite では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "npm create vite@latest my-app -- --template react-ts\nnpm install\nnpm run dev",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "modules",
    title: "ES Modules",
    description: "ネイティブ ESM を活用する Vite の仕組みを学びます",
    sections: [
      {
        heading: "ES Modulesの概要",
        content: "Viteにおける「ES Modules」について学びます。\n\nネイティブ ESM を活用する Vite の仕組みを学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Vite では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "npm create vite@latest my-app -- --template react-ts\nnpm install\nnpm run dev",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "plugins",
    title: "プラグイン",
    description: "React や Tailwind 用プラグインの使い方を学びます",
    sections: [
      {
        heading: "プラグインの概要",
        content: "Viteにおける「プラグイン」について学びます。\n\nReact や Tailwind 用プラグインの使い方を学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Vite では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "npm create vite@latest my-app -- --template react-ts\nnpm install\nnpm run dev",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "env",
    title: "環境変数",
    description: "import.meta.env と .env ファイルを学びます",
    sections: [
      {
        heading: "環境変数の概要",
        content: "Viteにおける「環境変数」について学びます。\n\nimport.meta.env と .env ファイルを学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Vite では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "npm create vite@latest my-app -- --template react-ts\nnpm install\nnpm run dev",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "assets",
    title: "静的アセット",
    description: "画像・フォントなどの取り込み方法を学びます",
    sections: [
      {
        heading: "静的アセットの概要",
        content: "Viteにおける「静的アセット」について学びます。\n\n画像・フォントなどの取り込み方法を学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Vite では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "npm create vite@latest my-app -- --template react-ts\nnpm install\nnpm run dev",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "build",
    title: "本番ビルド",
    description: "vite build とプレビューを学びます",
    sections: [
      {
        heading: "本番ビルドの概要",
        content: "Viteにおける「本番ビルド」について学びます。\n\nvite build とプレビューを学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Vite では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "npm create vite@latest my-app -- --template react-ts\nnpm install\nnpm run dev",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "config",
    title: "vite.config",
    description: "設定ファイルの書き方とよく使うオプションを学びます",
    sections: [
      {
        heading: "vite.configの概要",
        content: "Viteにおける「vite.config」について学びます。\n\n設定ファイルの書き方とよく使うオプションを学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Vite では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "npm create vite@latest my-app -- --template react-ts\nnpm install\nnpm run dev",
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
    description: "Vite の学習を続けるためのヒント",
    sections: [
      {
        heading: "次のステップの概要",
        content: "Viteにおける「次のステップ」について学びます。\n\nVite の学習を続けるためのヒント。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Vite では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "npm create vite@latest my-app -- --template react-ts\nnpm install\nnpm run dev",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  }
]
