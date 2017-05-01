var app = new Vue({

  el: '#app',

  data: {
    url: 'http://rest.dev/',
    posts: [],
    media: [],
    errors: []
  },

  methods: {
    media: function(id){
      axios.get(this.url+'/wp-json/wp/v2/media/'+id)
      .then(response => {
        this.media = response.data
      })
      .catch(e => {
        this.errors.push(e)
      });
      return '';
    }
  },

  //インスタンスが生成されたときに呼び出される
  created(){

    //postを取得
    axios.get(this.url+'wp-json/wp/v2/posts/')
    .then(response => {
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    });

  },

})
