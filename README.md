# Test Reviewdog for monorepo

これは monorepo における Reviewdog の振る舞いをテストするためのプロジェクトです。
monorepo ではないケースについては　https://github.com/dictav/test-reviewdog を参照してください。

[reviewdog] 、GitHub Actions に限らず、 monorepo で CI を行う際にPull Requestの内容によっては特定のテストやLintを走らせたくない場合があります。

例えば、Webアプリケーションのコードを管理するケースを考えてみます。フロントエンドとバックエンドの2つのコードを管理するために以下のような構成をとります。

```
.
├── frontend/
└── backend/
```

フロントエンドのコードに変更を加える Pull Request では `fontend` ディレクトリのみが変更され、バックエンドのコードに変更を加える場合には `backend` ディレクトリのみが変更されます。

GitHub では Status Check が全て通らないと Pull Request をマージできないように設定できますが、上記のようなケースではフロントエンドの変更時にもバックエンドのテストやLintが走ります。これは非常に無駄に思えますし、たまたま関係のない方のコードにバグがマージされていた場合にマージできなくなってしまうことがあり得ます。

このようなケースを回避するため、GitHub Actions 設定を適切に行う必要があります。Pull Request に命名規則を設けるのも良いと思いますが、ここではディレクトリに差分があるかないかで振る舞いを変えます。
