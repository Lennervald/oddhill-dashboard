<template>
  <div>
<nav class="nav is-hidden-desktop">
  <div class="nav-left">
    <a class="nav-item">
      <div class="background-opacity"></div>
      <img class="header-icon" src="./assets/images/icons/menu_open_icon.png" alt="">
    </a>
  </div>
</nav>
    <div class="app-wrapper-main">
      <transition name="fade">
        <!-- <BlogPost></BlogPost>-->
        <!-- <TransitionImage></TransitionImage> -->
        <component :is="selectedComponent"></component>
      </transition>
    </div>
    <div class="app-wrapper-footer is-hidden-touch">
      <img class="footer-icon-desktop" src="./assets/images/oh_logo.png" alt="">
    </div>
  </div>
</template>

<script>
import Debit from './components/Debit.vue';
import TestPage from './components/TestPage.vue';
import TransitionImage from './components/TransitionImage.vue';
import BlogPost from './components/BlogPost.vue';

// listen for click events from right menu
import { eventBus } from './main.js';

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
    created: function(){
      eventBus.$on('setNewCmp',(cmp) => {
        this.selectedComponent = cmp;
      });
    }
}
</script>
