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
    title: "Tauri とは？",
    description: "Tauri の特徴と Electron との違いを学びます",
    sections: [
      {
        heading: "Tauri とは？の概要",
        content: "Tauriにおける「Tauri とは？」について学びます。\n\nTauri の特徴と Electron との違いを学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Tauri では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "// src-tauri/src/lib.rs\n#[tauri::command]\nfn greet(name: String) -> String {\n  format!(\"Hello, {}!\", name)\n}",
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
    description: "Tauri プロジェクトの作成方法を学びます",
    sections: [
      {
        heading: "セットアップの概要",
        content: "Tauriにおける「セットアップ」について学びます。\n\nTauri プロジェクトの作成方法を学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Tauri では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "// src-tauri/src/lib.rs\n#[tauri::command]\nfn greet(name: String) -> String {\n  format!(\"Hello, {}!\", name)\n}",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "architecture",
    title: "アーキテクチャ",
    description: "Rust コアと WebView の構成を学びます",
    sections: [
      {
        heading: "アーキテクチャの概要",
        content: "Tauriにおける「アーキテクチャ」について学びます。\n\nRust コアと WebView の構成を学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Tauri では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "// src-tauri/src/lib.rs\n#[tauri::command]\nfn greet(name: String) -> String {\n  format!(\"Hello, {}!\", name)\n}",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "commands",
    title: "コマンド",
    description: "フロントから Rust を呼び出す方法を学びます",
    sections: [
      {
        heading: "コマンドの概要",
        content: "Tauriにおける「コマンド」について学びます。\n\nフロントから Rust を呼び出す方法を学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Tauri では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "// src-tauri/src/lib.rs\n#[tauri::command]\nfn greet(name: String) -> String {\n  format!(\"Hello, {}!\", name)\n}",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "events",
    title: "イベント",
    description: "バックエンドからフロントへ通知する方法を学びます",
    sections: [
      {
        heading: "イベントの概要",
        content: "Tauriにおける「イベント」について学びます。\n\nバックエンドからフロントへ通知する方法を学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Tauri では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "// src-tauri/src/lib.rs\n#[tauri::command]\nfn greet(name: String) -> String {\n  format!(\"Hello, {}!\", name)\n}",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "permissions",
    title: "権限",
    description: "capabilities とセキュリティ設定を学びます",
    sections: [
      {
        heading: "権限の概要",
        content: "Tauriにおける「権限」について学びます。\n\ncapabilities とセキュリティ設定を学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Tauri では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "// src-tauri/src/lib.rs\n#[tauri::command]\nfn greet(name: String) -> String {\n  format!(\"Hello, {}!\", name)\n}",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "fs",
    title: "ファイル操作",
    description: "ローカルファイルへの安全なアクセスを学びます",
    sections: [
      {
        heading: "ファイル操作の概要",
        content: "Tauriにおける「ファイル操作」について学びます。\n\nローカルファイルへの安全なアクセスを学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Tauri では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "// src-tauri/src/lib.rs\n#[tauri::command]\nfn greet(name: String) -> String {\n  format!(\"Hello, {}!\", name)\n}",
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
    title: "ビルドと配布",
    description: "各 OS 向けアプリのビルドを学びます",
    sections: [
      {
        heading: "ビルドと配布の概要",
        content: "Tauriにおける「ビルドと配布」について学びます。\n\n各 OS 向けアプリのビルドを学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Tauri では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "// src-tauri/src/lib.rs\n#[tauri::command]\nfn greet(name: String) -> String {\n  format!(\"Hello, {}!\", name)\n}",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "compare",
    title: "Electron との比較",
    description: "どちらを選ぶべきかの判断基準を学びます",
    sections: [
      {
        heading: "Electron との比較の概要",
        content: "Tauriにおける「Electron との比較」について学びます。\n\nどちらを選ぶべきかの判断基準を学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Tauri では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "// src-tauri/src/lib.rs\n#[tauri::command]\nfn greet(name: String) -> String {\n  format!(\"Hello, {}!\", name)\n}",
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
    description: "Tauri の学習を続けるためのヒント",
    sections: [
      {
        heading: "次のステップの概要",
        content: "Tauriにおける「次のステップ」について学びます。\n\nTauri の学習を続けるためのヒント。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Tauri では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "// src-tauri/src/lib.rs\n#[tauri::command]\nfn greet(name: String) -> String {\n  format!(\"Hello, {}!\", name)\n}",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  }
]
