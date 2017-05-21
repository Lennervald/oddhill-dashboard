<template>
  <div>
    <div class="app-wrapper-header is-hidden-desktop">
        <img class="header-icon" src="./assets/images/icons/menu_open_icon.png" alt="">
    </div>
    <div class="app-wrapper-main">
      <transition name="fade">
        <!-- <BlogPost></BlogPost>-->
        <!-- <TransitionImage></TransitionImage> -->
        <component :is="selectedComponent"></component>
      </transition>
      <button class="btn btn-primary temp-slide-button" @click="next">Toggle Components</button>
    </div>
    <div class="app-wrapper-footer">
        <img class="footer-icon" src="./assets/images/oh_logo.png" alt="">
    </div>
  </div>
</template>

<script>
import Debit from './components/Debit.vue';
import TestPage from './components/TestPage.vue';
import TransitionImage from './components/TransitionImage.vue';
import BlogPost from './components/BlogPost.vue';


export default {
    components: {
      Debit,
      TransitionImage,
      BlogPost,
      TestPage
    },
    data: function() {
        return {
            selectedComponent: 'Debit'
        }
    },
    methods: {
      next(){
        switch(this.selectedComponent) {
          case 'Debit':
            this.selectedComponent = 'BlogPost';
            app.style.backgroundColor = '#F9418C';
            break;
          case 'BlogPost':
            this.selectedComponent = 'TransitionImage';
            // app.style.backgroundColor = '#F9418C';
            break;
          case 'TransitionImage':
            this.selectedComponent = 'TestPage';
            app.style.backgroundColor = '#2D164E';
            // app.style.backgroundImage = url(http://www.adada.com/sites/all/themes/adada/images/bg-html.jpg);
            break;
          default:
            this.selectedComponent = 'Debit';
            app.style.backgroundColor = '#2D164E';
        }
      }
    }
}
</script>
