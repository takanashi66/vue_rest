<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="keywords" content="">
  <meta name="description" content="">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width">
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/common/css/style.css">
  <title>Document</title>
  <?php wp_head(); ?>
</head>
<body>
  
  <div id="app">
    <h1>記事一覧</h1>
    
    <!-- jsonを整形して出力 -->
<!--
    <p v-if="posts && posts.length">
      <pre v-for="post of posts"><code>{{post}}</code></pre>
    </p>
-->
   
    
    <!-- 投稿を出力 -->
    <div class="post_list" v-if="posts && posts.length">
      <!-- ここからループ -->
      <div class="item" v-for="post of posts">
        <h2><a v-bind:href="post.link">{{post.title.rendered}}</a></h2>
          {{post.excerpt.rendered | replace}}
      </div>
      <!-- ここまでループ -->
    </div>
    
    <!-- エラーを出力 -->
    <ul v-if="errors && errors.length">
      <li v-for="error of errors">{{error.message}}</li>
    </ul>
    
    
  </div>
  <!-- /#app -->
  
  <script src="https://unpkg.com/vue"></script>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/common/js/app.js"></script>
  <?php wp_footer(); ?>
</body>
</html>