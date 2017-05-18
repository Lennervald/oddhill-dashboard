<template>
  <div>
    <div class="image-container" v-bind:style="backgroundImage">
      <div class="color-filter" v-bind:style="backgroundColor"></div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      image: [
        'src/assets/images/transitions/image-one.jpg',
        'src/assets/images/transitions/image-two.jpg',
        'src/assets/images/transitions/image-three.jpg'
      ],
      color: [
        '#2D164E',
        '#20AAC6',
        '#F9418C'
      ]
    }
  },
  methods: {
  
  },
  computed: {
    backgroundImage: function() {
      // get an integer between 0 and 2
      var num = Math.floor(Math.random() * 3);
      return {
        background: 'url('+this.image[num]+') no-repeat center center fixed',
      }
    },
    backgroundColor: function(){
      // get an integer between 0 and 2
      var num = Math.floor(Math.random() * 3);
      return {
        backgroundColor: this.color[num]
      }
    }
  }
}
</script>
