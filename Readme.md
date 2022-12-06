NPM で動作し、記事を自動で作成する OpenAI GPT-3 スクリプト

# 使い方

## .env ファイルに API キーを設定する

```
OPENAI_ENDPOINT=https://api.openai.com/v1/completions
OPENAI_API_KEY=<YOUR OpenAI API KEY>
POSTS_DIR=posts
```

## posts にマークダウンファイルを作成する

```
touch posts/article.md
```

## 記事作成スクリプトを実行する

```
npm i
npm run ai add example ITとは
```

# コマンド

## add

記事を生成し、指定されたファイルに追記します。

```
npm run ai add [file path] [article theme] [custom prompt]
```

| 引数          | 入力                       | 説明                                                                       |
| ------------- | -------------------------- | -------------------------------------------------------------------------- |
| file path     | article など               | マークダウンファイルのファイル名を入力します。POSTS_DIR 内に生成されます。 |
| article theme | IT とは など               | 記事生成のキーワードを入力します                                           |
| custom prompt | ジョークを交えて書く　など | AI に指定する事前知識を追加で入力できます                                  |

## add-any

任意の prompt で GPT-3 を実行し、指定されたファイルに追記します。

```
npm run ai add-any [file path from POSTS_DIR] [prompt]
```

| 引数      | 入力                              | 説明                                                                       |
| --------- | --------------------------------- | -------------------------------------------------------------------------- |
| file path | article など                      | マークダウンファイルのファイル名を入力します。POSTS_DIR 内に生成されます。 |
| prompt    | typescript のサンプルコード　など | AI に指定する出力内容を入力します                                          |
