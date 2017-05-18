<template>
  <div>
    <div class="image-container is-three-quarter">
      <img :src="randomImage()">
    </div>
  </div>
</template>

<script>
export default {
    data: function() {
      return {
        image: [
          'src/assets/images/transitions/image-one.jpg',
          'src/assets/images/transitions/image-two.jpg'
        ]
      }
    },
    methods: {
    randomImage: function(){
      // get an integer between 0 and 1
      var num = Math.floor(Math.random() * 2);
      console.log(num);
      return this.image[num];
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/transition-image.scss';
</style>