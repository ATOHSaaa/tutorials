import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: '「npm」について、正しい説明はどれですか？',
    options: [
      'npm は① Node Package Manager（ツール）、② npm レジストリ（パッケージの公開場所）、③ npm 社（運営会社）を指します。',
      'npm install # package.json の全依存',
      '`npm install` は package.json の依存をすべてインストールします。',
      'main / exports — エントリポイント',
    ],
    correctIndex: 0,
    explanation: 'npm は① Node Package Manager（ツール）、② npm レジストリ（パッケージの公開場所）、③ npm 社（運営会社）を指します。',
  },
  {
    id: 'package-json',
    question: '「package.json」について、正しい説明はどれですか？',
    options: [
      '`npm install react` でレジストリからパッケージをダウンロードし、プロジェクトの node_modules に配置します。',
      'main / exports — エントリポイント',
      'npm は① Node Package Manager（ツール）、② npm レジストリ（パッケージの公開場所）、③ npm 社（運営会社）を指します。',
      'npm install # package.json の全依存',
    ],
    correctIndex: 1,
    explanation: 'main / exports — エントリポイント',
  },
  {
    id: 'install',
    question: '「パッケージのインストール」について、正しい説明はどれですか？',
    options: [
      'npm は① Node Package Manager（ツール）、② npm レジストリ（パッケージの公開場所）、③ npm 社（運営会社）を指します。',
      '`npm install` は package.json の依存をすべてインストールします。',
      'main / exports — エントリポイント',
      '`npm install react` でレジストリからパッケージをダウンロードし、プロジェクトの node_modules に配置します。',
    ],
    correctIndex: 1,
    explanation: '`npm install` は package.json の依存をすべてインストールします。',
  },
  {
    id: 'semver',
    question: '「セマンティックバージョニング」について、正しい説明はどれですか？',
    options: [
      'npm は① Node Package Manager（ツール）、② npm レジストリ（パッケージの公開場所）、③ npm 社（運営会社）を指します。',
      '`npm install react` でレジストリからパッケージをダウンロードし、プロジェクトの node_modules に配置します。',
      'バージョンは MAJOR.MINOR.PATCH（例: 2.4.1）です。',
      'main / exports — エントリポイント',
    ],
    correctIndex: 2,
    explanation: 'バージョンは MAJOR.MINOR.PATCH（例: 2.4.1）です。',
  },
  {
    id: 'scripts',
    question: '「npm scripts」について、正しい説明はどれですか？',
    options: [
      'main / exports — エントリポイント',
      'npm は① Node Package Manager（ツール）、② npm レジストリ（パッケージの公開場所）、③ npm 社（運営会社）を指します。',
      'scripts はシェルコマンドのエイリアスです。',
      '`npm install react` でレジストリからパッケージをダウンロードし、プロジェクトの node_modules に配置します。',
    ],
    correctIndex: 2,
    explanation: 'scripts はシェルコマンドのエイリアスです。',
  },
  {
    id: 'npx',
    question: '「npx と npm exec」について、正しい説明はどれですか？',
    options: [
      'main / exports — エントリポイント',
      'npm は① Node Package Manager（ツール）、② npm レジストリ（パッケージの公開場所）、③ npm 社（運営会社）を指します。',
      'npx はパッケージを一時ダウンロードして実行し、終わったら削除します。',
      '`npm install react` でレジストリからパッケージをダウンロードし、プロジェクトの node_modules に配置します。',
    ],
    correctIndex: 2,
    explanation: 'npx はパッケージを一時ダウンロードして実行し、終わったら削除します。',
  },
  {
    id: 'lockfile',
    question: '「package-lock.json」について、正しい説明はどれですか？',
    options: [
      'package-lock.json はインストール時に解決された exact バージョンを記録します。',
      'npm は① Node Package Manager（ツール）、② npm レジストリ（パッケージの公開場所）、③ npm 社（運営会社）を指します。',
      '`npm install react` でレジストリからパッケージをダウンロードし、プロジェクトの node_modules に配置します。',
      'main / exports — エントリポイント',
    ],
    correctIndex: 0,
    explanation: 'package-lock.json はインストール時に解決された exact バージョンを記録します。',
  },
  {
    id: 'publish',
    question: '「パッケージの公開」について、正しい説明はどれですか？',
    options: [
      'main / exports — エントリポイント',
      'npm は① Node Package Manager（ツール）、② npm レジストリ（パッケージの公開場所）、③ npm 社（運営会社）を指します。',
      '`npm install react` でレジストリからパッケージをダウンロードし、プロジェクトの node_modules に配置します。',
      'package.json の name はレジストリで一意である必要があります。',
    ],
    correctIndex: 3,
    explanation: 'package.json の name はレジストリで一意である必要があります。',
  },
  {
    id: 'workspaces',
    question: '「npm workspaces」について、正しい説明はどれですか？',
    options: [
      'main / exports — エントリポイント',
      'package.json に `workspaces: ["packages/*"]` を追加すると、サブパッケージをまとめて管理できます。',
      '`npm install react` でレジストリからパッケージをダウンロードし、プロジェクトの node_modules に配置します。',
      'npm は① Node Package Manager（ツール）、② npm レジストリ（パッケージの公開場所）、③ npm 社（運営会社）を指します。',
    ],
    correctIndex: 1,
    explanation: 'package.json に `workspaces: ["packages/*"]` を追加すると、サブパッケージをまとめて管理できます。',
  },
  {
    id: 'next-steps',
    question: '「次のステップ」について、正しい説明はどれですか？',
    options: [
      '`npm install react` でレジストリからパッケージをダウンロードし、プロジェクトの node_modules に配置します。',
      'main / exports — エントリポイント',
      '① Node.js 入門 — ランタイムの基礎 ② Turborepo — モノレポのビルド高速化 ③ CI/CD — npm ci をパイプラインに組み込む ④ セキュリテ…',
      'npm は① Node Package Manager（ツール）、② npm レジストリ（パッケージの公開場所）、③ npm 社（運営会社）を指します。',
    ],
    correctIndex: 2,
    explanation: '① Node.js 入門 — ランタイムの基礎 ② Turborepo — モノレポのビルド高速化 ③ CI/CD — npm ci をパイプラインに組み込む ④ セキュリテ…',
  },
]
