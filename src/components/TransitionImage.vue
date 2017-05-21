<template>
  <div>
      <div class="image-container is-hidden-mobile" v-bind:style="backgroundImage">
        <div class="color-filter is-hidden-mobile" v-bind:style="backgroundColor"></div>
      </div>

  </div>
</template>

<script>
export default {
  data: function() {
    return {
      image: [
        'src/assets/images/transitions/trans_img_1.png',
        'src/assets/images/transitions/trans_img_2.png',
        'src/assets/images/transitions/trans_img_3.png',
        'src/assets/images/transitions/trans_img_4.png',
        'src/assets/images/transitions/trans_img_5.png',
        'src/assets/images/transitions/trans_img_6.png',
        'src/assets/images/transitions/trans_img_7.png',
        'src/assets/images/transitions/trans_img_8.png'
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
      // get an integer between 0 and 7
      var num = Math.floor(Math.random() * 8);
      return {
        backgroundImage: 'url('+this.image[num]+')',
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
