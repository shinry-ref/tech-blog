
![Image](https://github.com/user-attachments/assets/312739bc-a9a0-4f6c-81e0-8773d7535fd1)

## サービス名
テックブログ

## サービスの説明
このアプリは技術記事を閲覧することができます。
Qiitaや個人記事を閲覧可能です。

## 環境設定の方法
このアプリはQiitaAPIとmicoroCMSを使用しています。
envファイルにそれらの認証情報を設定します。

### env
```
NEXT_PUBLIC_SERVICE_DOMAIN="microCMSのSREVICE_DOMAIN"
NEXT_PUBLIC_API_KEY="microCMSのAPIキー"
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_QIITA_API_TOKEN="Qiitaの自分のAPIトークン"
```

### microCMSにはデータを登録する必要があります。
https://microcms.io/

以下のデータが必要です。
title：記事のタイトル
date: 日付
thumbnail: 画像をアップロード
body: 本文を登録
![Image](https://github.com/user-attachments/assets/507bc5ce-dc92-40c0-bffb-882de375b216)

## 起動方法
```sh
// ライブラリインストール
npm i

// 起動
npm run dev
```

## テスト実行方法
```sh
npm run test
```

## firebaseへのデプロイ方法
buildを実行
```sh
npm run build
```
デプロイ
```sh
firebase deploy
```