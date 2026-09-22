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
    title: "Electron とは？",
    description: "Electron の仕組みと代表的なアプリを学びます",
    sections: [
      {
        heading: "Electron とは？の概要",
        content: "Electronにおける「Electron とは？」について学びます。\n\nElectron の仕組みと代表的なアプリを学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Electron では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "const { app, BrowserWindow } = require('electron')\n\napp.whenReady().then(() => {\n  const win = new BrowserWindow({ width: 800, height: 600 })\n  win.loadFile('index.html')\n})",
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
    description: "Electron プロジェクトの作成方法を学びます",
    sections: [
      {
        heading: "セットアップの概要",
        content: "Electronにおける「セットアップ」について学びます。\n\nElectron プロジェクトの作成方法を学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Electron では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "const { app, BrowserWindow } = require('electron')\n\napp.whenReady().then(() => {\n  const win = new BrowserWindow({ width: 800, height: 600 })\n  win.loadFile('index.html')\n})",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "main",
    title: "メインプロセス",
    description: "Node.js 側のメインプロセスを学びます",
    sections: [
      {
        heading: "メインプロセスの概要",
        content: "Electronにおける「メインプロセス」について学びます。\n\nNode.js 側のメインプロセスを学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Electron では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "const { app, BrowserWindow } = require('electron')\n\napp.whenReady().then(() => {\n  const win = new BrowserWindow({ width: 800, height: 600 })\n  win.loadFile('index.html')\n})",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "renderer",
    title: "レンダラープロセス",
    description: "画面を描画するレンダラーを学びます",
    sections: [
      {
        heading: "レンダラープロセスの概要",
        content: "Electronにおける「レンダラープロセス」について学びます。\n\n画面を描画するレンダラーを学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Electron では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "const { app, BrowserWindow } = require('electron')\n\napp.whenReady().then(() => {\n  const win = new BrowserWindow({ width: 800, height: 600 })\n  win.loadFile('index.html')\n})",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "ipc",
    title: "IPC 通信",
    description: "プロセス間のデータの受け渡しを学びます",
    sections: [
      {
        heading: "IPC 通信の概要",
        content: "Electronにおける「IPC 通信」について学びます。\n\nプロセス間のデータの受け渡しを学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Electron では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "const { app, BrowserWindow } = require('electron')\n\napp.whenReady().then(() => {\n  const win = new BrowserWindow({ width: 800, height: 600 })\n  win.loadFile('index.html')\n})",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "window",
    title: "ウィンドウ管理",
    description: "ウィンドウの作成と制御を学びます",
    sections: [
      {
        heading: "ウィンドウ管理の概要",
        content: "Electronにおける「ウィンドウ管理」について学びます。\n\nウィンドウの作成と制御を学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Electron では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "const { app, BrowserWindow } = require('electron')\n\napp.whenReady().then(() => {\n  const win = new BrowserWindow({ width: 800, height: 600 })\n  win.loadFile('index.html')\n})",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "menus",
    title: "メニュー",
    description: "アプリメニューとコンテキストメニューを学びます",
    sections: [
      {
        heading: "メニューの概要",
        content: "Electronにおける「メニュー」について学びます。\n\nアプリメニューとコンテキストメニューを学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Electron では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "const { app, BrowserWindow } = require('electron')\n\napp.whenReady().then(() => {\n  const win = new BrowserWindow({ width: 800, height: 600 })\n  win.loadFile('index.html')\n})",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "packaging",
    title: "パッケージング",
    description: "配布用アプリのビルド方法を学びます",
    sections: [
      {
        heading: "パッケージングの概要",
        content: "Electronにおける「パッケージング」について学びます。\n\n配布用アプリのビルド方法を学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Electron では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "const { app, BrowserWindow } = require('electron')\n\napp.whenReady().then(() => {\n  const win = new BrowserWindow({ width: 800, height: 600 })\n  win.loadFile('index.html')\n})",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  },
  {
    id: "security",
    title: "セキュリティ",
    description: "contextIsolation など安全な設計を学びます",
    sections: [
      {
        heading: "セキュリティの概要",
        content: "Electronにおける「セキュリティ」について学びます。\n\ncontextIsolation など安全な設計を学びます。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Electron では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "const { app, BrowserWindow } = require('electron')\n\napp.whenReady().then(() => {\n  const win = new BrowserWindow({ width: 800, height: 600 })\n  win.loadFile('index.html')\n})",
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
    description: "Electron の学習を続けるためのヒント",
    sections: [
      {
        heading: "次のステップの概要",
        content: "Electronにおける「次のステップ」について学びます。\n\nElectron の学習を続けるためのヒント。実務でよく使う考え方を、具体例とデモで理解していきましょう。"
      },
      {
        heading: "基本の考え方",
        content: "Electron では、このテーマがプロジェクト全体のどこに位置するかを意識することが大切です。\n\n小さな例から始めて、徐々に実プロジェクトの構成へ広げていくのがおすすめです。",
        code: "const { app, BrowserWindow } = require('electron')\n\napp.whenReady().then(() => {\n  const win = new BrowserWindow({ width: 800, height: 600 })\n  win.loadFile('index.html')\n})",
        tip: "インタラクティブデモで、概念の流れを確認してみてください。"
      },
      {
        heading: "実践のポイント",
        content: "実際のプロジェクトでは、チームのルールや既存のツールチェーンに合わせて設定を調整します。\n\n公式ドキュメントと併用しながら、手を動かして試すことが一番の近道です。"
      }
    ]
  }
]
