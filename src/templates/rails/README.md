# PROJECT NAME

## 動作環境

- Ruby
- PostgreSQL
- Node.js
- Yarn

## 初期設定

- `.env.sample` を `.env` にコピーします（必要があれば適切な値を設定します）
- `yarn install` を実行して、npm パッケージをインストールします
- `bundle install` を実行して、gem をインストールします
- `rails db:setup` を実行して、データベースを準備します
- `rails db:seed`を実行して、初期データをインポートします

## 開発手順

- `yarn install` を実行して、npm パッケージをインストールします
- `bundle install` を実行して、gem をインストールします
- `rails db:setup` を実行して、データベースを準備します
- `rails db:migrate` を実行して、データベースのマイグレーションを実行します
- `bin/dev-server` で開発用サーバーを起動します
- トピックブランチで開発を行います
- 完了したら、push して PR を出します
- 誰かにレビューしてもらい、OK が出たら「PR を出した人」がマージします
- master にマージされたら intg に自動デプロイされるので、動作確認してストーリーを deliver します

## ドキュメント

- [CSS ガイドライン](app/javascript/stylesheets/README.md)
