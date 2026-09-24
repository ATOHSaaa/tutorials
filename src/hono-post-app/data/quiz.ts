import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: '「プロジェクト概要」について、正しい説明はどれですか？',
    options: [
      'post-app ルートで Git を初期化し、client と server をまとめて管理します。',
      'ターミナルでバージョンを確認しましょう。',
      'このチュートリアルでは、Twitter / X のような**投稿サイト（ミニ SNS）**を一から作ります。',
      'node -v # v20 以上推奨',
    ],
    correctIndex: 2,
    explanation: 'このチュートリアルでは、Twitter / X のような**投稿サイト（ミニ SNS）**を一から作ります。',
  },
  {
    id: 'setup',
    question: '「環境セットアップ」について、正しい説明はどれですか？',
    options: [
      'post-app ルートで Git を初期化し、client と server をまとめて管理します。',
      'Next.js などのフルスタックフレームワークは使わず、**フロントエンド（React）**と **Hono API（Cloudflare Workers）** を分離した構成で学びます。',
      'このチュートリアルでは、Twitter / X のような**投稿サイト（ミニ SNS）**を一から作ります。',
      'ターミナルでバージョンを確認しましょう。',
    ],
    correctIndex: 3,
    explanation: 'ターミナルでバージョンを確認しましょう。',
  },
  {
    id: 'github',
    question: '「GitHub で管理」について、正しい説明はどれですか？',
    options: [
      'このチュートリアルでは、Twitter / X のような**投稿サイト（ミニ SNS）**を一から作ります。',
      'Next.js などのフルスタックフレームワークは使わず、**フロントエンド（React）**と **Hono API（Cloudflare Workers）** を分離した構成で学びます。',
      'post-app ルートで Git を初期化し、client と server をまとめて管理します。',
      'node -v # v20 以上推奨',
    ],
    correctIndex: 2,
    explanation: 'post-app ルートで Git を初期化し、client と server をまとめて管理します。',
  },
  {
    id: 'frontend',
    question: '「フロントエンド基礎」について、正しい説明はどれですか？',
    options: [
      'このチュートリアルでは、Twitter / X のような**投稿サイト（ミニ SNS）**を一から作ります。',
      'node -v # v20 以上推奨',
      'ページ遷移（タイムライン、ログイン、プロフィール）のために react-router-dom を使います。',
      'Next.js などのフルスタックフレームワークは使わず、**フロントエンド（React）**と **Hono API（Cloudflare Workers）** を分離した構成で学びます。',
    ],
    correctIndex: 2,
    explanation: 'ページ遷移（タイムライン、ログイン、プロフィール）のために react-router-dom を使います。',
  },
  {
    id: 'database',
    question: '「D1 スキーマ設計」について、正しい説明はどれですか？',
    options: [
      'Next.js などのフルスタックフレームワークは使わず、**フロントエンド（React）**と **Hono API（Cloudflare Workers）** を分離した構成で学びます。',
      'リレーションを SQL で表現し、マイグレーションで管理します。',
      'このチュートリアルでは、Twitter / X のような**投稿サイト（ミニ SNS）**を一から作ります。',
      'node -v # v20 以上推奨',
    ],
    correctIndex: 1,
    explanation: 'リレーションを SQL で表現し、マイグレーションで管理します。',
  },
  {
    id: 'routing',
    question: '「Hono ルーティング」について、正しい説明はどれですか？',
    options: [
      'Next.js などのフルスタックフレームワークは使わず、**フロントエンド（React）**と **Hono API（Cloudflare Workers）** を分離した構成で学びます。',
      'このチュートリアルでは、Twitter / X のような**投稿サイト（ミニ SNS）**を一から作ります。',
      'node -v # v20 以上推奨',
      'RESTful な URL 設計を意識します。',
    ],
    correctIndex: 3,
    explanation: 'RESTful な URL 設計を意識します。',
  },
  {
    id: 'crud',
    question: '「投稿 CRUD」について、正しい説明はどれですか？',
    options: [
      'node -v # v20 以上推奨',
      'ログイン中の user_id をセッションから取得し、INSERT します。',
      'このチュートリアルでは、Twitter / X のような**投稿サイト（ミニ SNS）**を一から作ります。',
      'Next.js などのフルスタックフレームワークは使わず、**フロントエンド（React）**と **Hono API（Cloudflare Workers）** を分離した構成で学びます。',
    ],
    correctIndex: 1,
    explanation: 'ログイン中の user_id をセッションから取得し、INSERT します。',
  },
  {
    id: 'auth',
    question: '「ログイン・認証」について、正しい説明はどれですか？',
    options: [
      '平文パスワードは絶対に保存しません。Web Crypto API で bcrypt 相当の処理を行います（または @noble/hashes 等を利用）。',
      'このチュートリアルでは、Twitter / X のような**投稿サイト（ミニ SNS）**を一から作ります。',
      'Next.js などのフルスタックフレームワークは使わず、**フロントエンド（React）**と **Hono API（Cloudflare Workers）** を分離した構成で学びます。',
      'node -v # v20 以上推奨',
    ],
    correctIndex: 0,
    explanation: '平文パスワードは絶対に保存しません。Web Crypto API で bcrypt 相当の処理を行います（または @noble/hashes 等を利用）。',
  },
  {
    id: 'likes',
    question: '「いいね機能」について、正しい説明はどれですか？',
    options: [
      '複合 PRIMARY KEY により、同じユーザーが二重にいいねできないようにします。',
      'このチュートリアルでは、Twitter / X のような**投稿サイト（ミニ SNS）**を一から作ります。',
      'node -v # v20 以上推奨',
      'Next.js などのフルスタックフレームワークは使わず、**フロントエンド（React）**と **Hono API（Cloudflare Workers）** を分離した構成で学びます。',
    ],
    correctIndex: 0,
    explanation: '複合 PRIMARY KEY により、同じユーザーが二重にいいねできないようにします。',
  },
  {
    id: 'follows',
    question: '「フォロー機能」について、正しい説明はどれですか？',
    options: [
      'このチュートリアルでは、Twitter / X のような**投稿サイト（ミニ SNS）**を一から作ります。',
      'node -v # v20 以上推奨',
      'Next.js などのフルスタックフレームワークは使わず、**フロントエンド（React）**と **Hono API（Cloudflare Workers）** を分離した構成で学びます。',
      'follower_id が following_id をフォローする関係を follows テーブルに保存します。',
    ],
    correctIndex: 3,
    explanation: 'follower_id が following_id をフォローする関係を follows テーブルに保存します。',
  },
]
