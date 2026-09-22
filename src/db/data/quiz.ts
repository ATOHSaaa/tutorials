import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: '「データベース」について、正しい説明はどれですか？',
    options: [
      'RDBMS（Relational Database Management System）は、データを「テーブル」の形で管理し、テーブル間の「関係（リレーション）」でデータを結びつけるデ…',
      'PostgreSQL、MySQL、SQLite が代表的な RDBMS です。',
      'テーブルは Excel のシートに似ています。',
      'データベース（DB）は、データを整理して保存・管理するシステムです。',
    ],
    correctIndex: 3,
    explanation: 'データベース（DB）は、データを整理して保存・管理するシステムです。',
  },
  {
    id: 'rdbms',
    question: '「RDBMS の基本」について、正しい説明はどれですか？',
    options: [
      'テーブルは Excel のシートに似ています。',
      'データベース（DB）は、データを整理して保存・管理するシステムです。',
      'RDBMS（Relational Database Management System）は、データを「テーブル」の形で管理し、テーブル間の「関係（リレーション）」でデータを結びつけるデ…',
      'ブラウザを閉じても、サーバーを再起動しても、データは消えません。',
    ],
    correctIndex: 2,
    explanation: 'RDBMS（Relational Database Management System）は、データを「テーブル」の形で管理し、テーブル間の「関係（リレーション）」でデータを結びつけるデ…',
  },
  {
    id: 'tables',
    question: '「テーブル・行・列」について、正しい説明はどれですか？',
    options: [
      'テーブルは Excel のシートに似ています。',
      'RDBMS（Relational Database Management System）は、データを「テーブル」の形で管理し、テーブル間の「関係（リレーション）」でデータを結びつけるデ…',
      'ブラウザを閉じても、サーバーを再起動しても、データは消えません。',
      'データベース（DB）は、データを整理して保存・管理するシステムです。',
    ],
    correctIndex: 0,
    explanation: 'テーブルは Excel のシートに似ています。',
  },
  {
    id: 'keys',
    question: '「主キー・外部キー」について、正しい説明はどれですか？',
    options: [
      'ブラウザを閉じても、サーバーを再起動しても、データは消えません。',
      'RDBMS（Relational Database Management System）は、データを「テーブル」の形で管理し、テーブル間の「関係（リレーション）」でデータを結びつけるデ…',
      '主キーは各行を一意に識別する列です。通常は id という自動採番の整数を使います。',
      'データベース（DB）は、データを整理して保存・管理するシステムです。',
    ],
    correctIndex: 2,
    explanation: '主キーは各行を一意に識別する列です。通常は id という自動採番の整数を使います。',
  },
  {
    id: 'relations',
    question: '「リレーションの種類」について、正しい説明はどれですか？',
    options: [
      'ブラウザを閉じても、サーバーを再起動しても、データは消えません。',
      'RDBMS（Relational Database Management System）は、データを「テーブル」の形で管理し、テーブル間の「関係（リレーション）」でデータを結びつけるデ…',
      '最も一般的な関係です。1人のユーザーが複数の投稿を持てますが、1つの投稿は1人のユーザーにしか属しません。',
      'データベース（DB）は、データを整理して保存・管理するシステムです。',
    ],
    correctIndex: 2,
    explanation: '最も一般的な関係です。1人のユーザーが複数の投稿を持てますが、1つの投稿は1人のユーザーにしか属しません。',
  },
  {
    id: 'transactions',
    question: '「トランザクション」について、正しい説明はどれですか？',
    options: [
      'トランザクションは、データベースに対する複数の操作を「1つのまとまり」として扱う仕組みです。',
      'データベース（DB）は、データを整理して保存・管理するシステムです。',
      'RDBMS（Relational Database Management System）は、データを「テーブル」の形で管理し、テーブル間の「関係（リレーション）」でデータを結びつけるデ…',
      'ブラウザを閉じても、サーバーを再起動しても、データは消えません。',
    ],
    correctIndex: 0,
    explanation: 'トランザクションは、データベースに対する複数の操作を「1つのまとまり」として扱う仕組みです。',
  },
  {
    id: 'normalization',
    question: '「正規化の基礎」について、正しい説明はどれですか？',
    options: [
      'データベース（DB）は、データを整理して保存・管理するシステムです。',
      'ブラウザを閉じても、サーバーを再起動しても、データは消えません。',
      '正規化は、データの重複を減らしてテーブルを整理する設計手法です。',
      'RDBMS（Relational Database Management System）は、データを「テーブル」の形で管理し、テーブル間の「関係（リレーション）」でデータを結びつけるデ…',
    ],
    correctIndex: 2,
    explanation: '正規化は、データの重複を減らしてテーブルを整理する設計手法です。',
  },
  {
    id: 'indexes',
    question: '「インデックスの基本」について、正しい説明はどれですか？',
    options: [
      'データベース（DB）は、データを整理して保存・管理するシステムです。',
      'ブラウザを閉じても、サーバーを再起動しても、データは消えません。',
      'インデックスがない状態で WHERE email = \'taro@example.com\' を実行すると、DB は users テーブルの先頭行から順に email を比較します。',
      'RDBMS（Relational Database Management System）は、データを「テーブル」の形で管理し、テーブル間の「関係（リレーション）」でデータを結びつけるデ…',
    ],
    correctIndex: 2,
    explanation: 'インデックスがない状態で WHERE email = \'taro@example.com\' を実行すると、DB は users テーブルの先頭行から順に email を比較します。',
  },
  {
    id: 'index-queries',
    question: '「インデックスとクエリ」について、正しい説明はどれですか？',
    options: [
      'ブラウザを閉じても、サーバーを再起動しても、データは消えません。',
      'インデックスが最も効くのは、等値検索（=）です。',
      'データベース（DB）は、データを整理して保存・管理するシステムです。',
      'RDBMS（Relational Database Management System）は、データを「テーブル」の形で管理し、テーブル間の「関係（リレーション）」でデータを結びつけるデ…',
    ],
    correctIndex: 1,
    explanation: 'インデックスが最も効くのは、等値検索（=）です。',
  },
  {
    id: 'composite-indexes',
    question: '「複合インデックスと設計」について、正しい説明はどれですか？',
    options: [
      '複合インデックス（Composite Index）は、複数の列をまとめて1つのインデックスにするものです。',
      'データベース（DB）は、データを整理して保存・管理するシステムです。',
      'RDBMS（Relational Database Management System）は、データを「テーブル」の形で管理し、テーブル間の「関係（リレーション）」でデータを結びつけるデ…',
      'ブラウザを閉じても、サーバーを再起動しても、データは消えません。',
    ],
    correctIndex: 0,
    explanation: '複合インデックス（Composite Index）は、複数の列をまとめて1つのインデックスにするものです。',
  },
]
