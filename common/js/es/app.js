var app = new Vue({
  
  el: '#app',
  
  data: {
    url: 'http://rest.dev/',
    wp: [],
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
      return 'http://codecodeweb.com/wp-content/themes/newCodeCode/common/img/taku.jpg';
    }
  },
  
  //インスタンスが生成されたときに呼び出される
  created(){
    //wp-json取得
    axios.get(this.url+'wp-json/')
    .then(response => {
      this.wp = response.data
    })
    .catch(e => {
      this.errors.push(e)
    });
    
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