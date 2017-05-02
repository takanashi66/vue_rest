# Vue.jsでREST APIたたいてみる

Vue.jsとREST APIを使ってテーマを作る(実験)

## 概要

Vue.jsでWordPressのREST APIをたたいて、投稿内容をを取得する。JSONを取得するのに **[axios](https://github.com/mzabriskie/axios)** を使用。


## 使い方

1. **WordPress4.7.2** 以上の環境で、 */wp-content/themes/*　に、このリポジトリを入れる。
1. */rest/common/js/app.js* の **6行目** の **URL** を **各実行環境のURL** に書き換える。
1. 管理画面から *外観 -> テーマ* から **rest** を選択。

※特に制御してないので、今あるPost全てのタイトルと抜粋が出力される。

## TODO

そのうち実装するかも。

+ サムネイルの出力
+ カテゴリ
+ タグ
+ single.php
