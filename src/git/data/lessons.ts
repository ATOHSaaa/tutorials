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
    id: 'intro',
    title: 'Git とは？',
    description: 'バージョン管理の基本概念を学びます',
    sections: [
      {
        heading: 'Git とは何か？',
        content:
          'Git はソースコードの変更履歴を記録・管理する「バージョン管理システム」です。いつ・誰が・何を変更したかを追跡でき、過去の状態に戻すこともできます。\n\nGoogle ドキュメントの「変更履歴」に似ていますが、コード全体のスナップショットを何度でも保存・共有できるイメージです。',
      },
      {
        heading: 'なぜ Git が必要か？',
        content:
          '• 変更の取り消し — 壊したコードを前の状態に戻せる\n• 共同開発 — 複数人が同時に作業しても履歴が残る\n• ブランチ — 機能ごとに独立した作業線を作れる\n• デプロイの信頼性 — CI/CD と組み合わせて安全にリリースできる',
        tip: 'デモでコミット履歴の流れを確認してみてください。',
      },
      {
        heading: 'Git と GitHub の違い',
        content:
          'Git はローカルで動くツール本体。GitHub は Git リポジトリをホスティングする Web サービスです。GitLab、Bitbucket など他のホスティングもありますが、Git の基本操作はどこでも同じです。',
      },
    ],
  },
  {
    id: 'install',
    title: 'インストールと設定',
    description: 'Git のセットアップと初期設定を学びます',
    sections: [
      {
        heading: 'インストール',
        content:
          'macOS では Xcode Command Line Tools か Homebrew、Windows では Git for Windows をインストールします。Linux ではパッケージマネージャーで git を入れます。',
        code: `# macOS (Homebrew)
brew install git

# バージョン確認
git --version`,
      },
      {
        heading: '初期設定',
        content:
          'コミットに記録される名前とメールを設定します。GitHub のアカウントと揃えるのが一般的です。',
        code: `git config --global user.name "あなたの名前"
git config --global user.email "you@example.com"

# 設定確認
git config --list`,
        tip: 'デモで設定コマンドの流れを確認してください。',
      },
      {
        heading: 'リポジトリの作成',
        content:
          '新規プロジェクトでは git init、既存プロジェクトは git clone で始めます。',
        code: `# 新規
mkdir my-app && cd my-app
git init

# 既存（GitHub から）
git clone https://github.com/user/repo.git`,
      },
    ],
  },
  {
    id: 'basics',
    title: '基本操作',
    description: 'add、commit、status の使い方を学びます',
    sections: [
      {
        heading: '3つのエリア',
        content:
          'Git はファイルを3つのエリアで管理します。\n\n1. 作業ディレクトリ — 普段編集している場所\n2. ステージング — 次のコミットに含める変更を選ぶ場所（git add）\n3. リポジトリ — コミットで保存された履歴',
      },
      {
        heading: '基本の流れ',
        content:
          'ファイルを編集 → git add でステージ → git commit で履歴に保存。git status で現在の状態を確認します。',
        code: `# 変更を確認
git status

# ステージに追加
git add index.html
git add .              # すべて追加

# コミット
git commit -m "ヘッダーを追加"`,
        tip: 'デモで add → commit の流れを体験してください。',
      },
      {
        heading: '良いコミットメッセージ',
        content:
          '「何を」「なぜ」変更したかがわかる短いメッセージが理想です。\n\n✓ "ログインフォームのバリデーションを追加"\n✗ "修正" / "update" / "いろいろ"',
      },
    ],
  },
  {
    id: 'history',
    title: '履歴の確認',
    description: 'log と diff で変更を追跡する方法を学びます',
    sections: [
      {
        heading: 'git log',
        content:
          'コミット履歴を一覧表示します。いつ・誰が・どんなメッセージでコミットしたかがわかります。',
        code: `git log
git log --oneline          # 1行表示
git log --oneline -5       # 直近5件
git log --graph --oneline  # ブランチの分岐も表示`,
      },
      {
        heading: 'git diff',
        content:
          '変更内容の差分を表示します。ステージ前の変更、ステージ後の変更、過去のコミットとの差分を確認できます。',
        code: `git diff              # 未ステージの変更
git diff --staged     # ステージ済みの変更
git diff HEAD~1       # 直前のコミットとの差分`,
        tip: 'デモでコミット履歴の確認を試してみてください。',
      },
      {
        heading: '特定のコミットを調べる',
        content:
          'git show <commit-hash> で1つのコミットの詳細を見られます。バグの原因調査でよく使います。',
      },
    ],
  },
  {
    id: 'branch',
    title: 'ブランチ',
    description: 'ブランチの作成と切り替えを学びます',
    sections: [
      {
        heading: 'ブランチとは？',
        content:
          'ブランチは作業の「分岐線」です。main ブランチを壊さずに、新機能を feature/login ブランチで開発できます。完了したら main にマージします。',
      },
      {
        heading: 'ブランチ操作',
        content:
          '作成・切り替え・一覧表示が基本です。-b オプションで作成と切り替えを一度に行えます。',
        code: `git branch                    # 一覧
git branch feature/login      # 作成
git checkout feature/login    # 切り替え
git switch -c feature/login   # 作成+切り替え（新しい書き方）`,
        tip: 'デモでブランチの分岐を確認してください。',
      },
      {
        heading: '命名のベストプラクティス',
        content:
          'feature/xxx、fix/xxx、chore/xxx などプレフィックスを付けるとチームで整理しやすくなります。例: feature/dark-mode、fix/login-error',
      },
    ],
  },
  {
    id: 'merge',
    title: 'マージ',
    description: 'ブランチを統合する方法を学びます',
    sections: [
      {
        heading: 'マージの基本',
        content:
          'feature ブランチの作業が終わったら、main に戻ってマージします。feature の変更が main に取り込まれます。',
        code: `git switch main
git merge feature/login`,
      },
      {
        heading: 'Fast-forward と 3-way merge',
        content:
          'main に新しいコミットがなければ Fast-forward（単純に先に進む）。両方に変更がある場合はマージコミットが作られます。',
        tip: 'デモで2つのブランチが統合される流れを見てください。',
      },
      {
        heading: 'マージ後のブランチ削除',
        content:
          'マージ済みの feature ブランチは削除して整理します。\n\ngit branch -d feature/login',
      },
    ],
  },
  {
    id: 'remote',
    title: 'リモート操作',
    description: 'push、pull、clone を学びます',
    sections: [
      {
        heading: 'リモートリポジトリ',
        content:
          'GitHub などのサーバー上のリポジトリを「リモート」と呼びます。origin がデフォルト名です。ローカルの変更を push で送り、pull で取得します。',
        code: `git remote -v
git push origin main
git pull origin main`,
      },
      {
        heading: '初回 push',
        content:
          '新しいリポジトリを GitHub に作った後、初回は -u で upstream を設定します。',
        code: `git remote add origin https://github.com/user/repo.git
git push -u origin main`,
        tip: 'デモで push / pull の流れを確認してください。',
      },
      {
        heading: 'fetch と pull の違い',
        content:
          'git fetch はリモートの情報を取得するだけ（マージしない）。git pull は fetch + merge を一度に行います。安全に確認したいときは fetch → merge がおすすめです。',
      },
    ],
  },
  {
    id: 'pr',
    title: 'Pull Request',
    description: 'GitHub でコードレビューの流れを学びます',
    sections: [
      {
        heading: 'Pull Request とは？',
        content:
          'PR は「このブランチの変更を main に取り込んでください」というリクエストです。チームメンバーがコードをレビューし、問題なければマージします。',
      },
      {
        heading: 'PR の流れ',
        content:
          '1. feature ブランチで開発\n2. push して GitHub にブランチを送る\n3. 「Compare & pull request」をクリック\n4. 説明を書いて PR 作成\n5. レビュー → 修正 → 承認 → マージ',
        tip: 'デモで PR のワークフローを確認してください。',
      },
      {
        heading: '良い PR の書き方',
        content:
          '• 何を変更したか（What）\n• なぜ変更したか（Why）\n• スクリーンショット（UI 変更の場合）\n• テスト方法\n\n小さな PR はレビューが早く、バグも少なくなります。',
      },
    ],
  },
  {
    id: 'conflict',
    title: 'コンフリクト解消',
    description: 'マージ時の競合を解決する方法を学びます',
    sections: [
      {
        heading: 'コンフリクトとは？',
        content:
          '同じファイルの同じ行を、異なるブランチで別々に変更したときに発生します。Git は自動でマージできず、人間がどちらの変更を残すか決める必要があります。',
        code: `<<<<<<< HEAD
const theme = 'dark';
=======
const theme = 'light';
>>>>>>> feature/theme`,
      },
      {
        heading: '解消の手順',
        content:
          '1. コンフリクト箇所を開く\n2. <<<<<<< ======= >>>>>>> マーカーを削除し、正しいコードを残す\n3. git add で解消をマーク\n4. git commit でマージ完了',
        tip: 'デモでコンフリクト解消の流れを体験してください。',
      },
      {
        heading: 'コンフリクトを減らすコツ',
        content:
          '• 小さな PR、頻繁なマージ\n• 同じファイルを複数人で同時編集しないよう分担\n• main を定期的に feature ブランチに取り込む（rebase や merge）',
      },
    ],
  },
  {
    id: 'next-steps',
    title: '次のステップ',
    description: 'Git の学習を続けるためのヒント',
    sections: [
      {
        heading: 'さらに学ぶこと',
        content:
          '• git stash — 作業中の変更を一時退避\n• git rebase — 履歴をきれいに整える\n• .gitignore — コミットしないファイルの指定\n• git tag — リリースバージョンの管理',
      },
      {
        heading: '学習の道筋',
        content:
          '① Git 入門（今ここ）→ ② 実際に GitHub でリポジトリを作って push → ③ CI/CD 入門で自動テスト・デプロイを設定',
        tip: 'おめでとうございます！Git 入門をすべて学びました 🎉',
      },
    ],
  },
]
