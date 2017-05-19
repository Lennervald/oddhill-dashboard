
<template>
  <h1>Hello RSS Feed</h1>
</template>

<script>
  export default {
    data: function() {
      return {

      }
    },
    methods: {
      getBlogItems: function(){
        this.$http.get('./src/assets/data/blog-posts.xml').then((response) => {
          console.log(response.body);
        })
      }
    },
    created: function() {
      this.getBlogItems();
    }
  }
</script>