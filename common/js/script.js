"use strict";var app=new Vue({el:"#app",data:{url:"http://rest.dev/",wp:[],posts:[],media:[],errors:[]},methods:{media:function(t){var e=this;return axios.get(this.url+"/wp-json/wp/v2/media/"+t).then(function(t){e.media=t.data}).catch(function(t){e.errors.push(t)}),"http://codecodeweb.com/wp-content/themes/newCodeCode/common/img/taku.jpg"}},created:function(){var t=this;axios.get(this.url+"wp-json/").then(function(e){t.wp=e.data}).catch(function(e){t.errors.push(e)}),axios.get(this.url+"wp-json/wp/v2/posts/").then(function(e){t.posts=e.data}).catch(function(e){t.errors.push(e)})}});