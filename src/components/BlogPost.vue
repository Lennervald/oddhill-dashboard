
<template>
  <h1>Hello RSS Feed</h1>
</template>

<script>
  export default {
    data: function() {
      return {
        rss: ''
      }
    },
    methods: {
      getBlogItems: function(){
        this.$http.get('./src/assets/data/blog-posts.xml').then((response) => {
          this.rss = response.body;
          console.log('Response.body: ', this.rss);
        })
      }
    },
    created: function() {
      this.getBlogItems();
    }
  }
</script>