# ABCCSS

## 動作環境

- Ruby 2.5.1
- PostgreSQL
- Node.js 8.1
- yarn
- direnv

## 初期設定

- `.envrc.sample` を `.envrc` にコピーします
- `.envrc` の `DATABASE_URL` に、適切な設定を記述します
  - `postgresql://#{ユーザ}:#{パスワード}@#{接続先ホスト}/`
  - パスワード無しなら `#{ユーザ}@#{接続先ホスト}` のように記述します
  - 例 `postgresql://postgres@localhost/`
- `.envrc` の `RAILS_PORT` に rails server を動かすポートを指定します
- `direnv allow` を実行して、`.envrc` を有効化します
- `rails db:setup` を実行して、データベースを準備します

## 開発手順

- `bundle install` で gem をインストールします
- `yarn install` で npm パッケージをインストールします
- `rails db:seed` で開発用のデータを投入します
- `foreman start -f Procfile.dev` で rails server と webpack-dev-server を起動します
- トピックブランチで開発を行います
- 完了したら、push して PR を出します
- 誰かにレビューしてもらい、OK が出たら「PR を出した人」がマージします
- master にマージされたら intg に自動デプロイされるので、動作確認してストーリーを deliver します

## ドキュメント

- [CSS ガイドライン](app/javascript/stylesheets/README.md)
