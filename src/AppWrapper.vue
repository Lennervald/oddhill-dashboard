<template>
  <div>
    <nav class="nav is-hidden-desktop">
      <div class="nav-left">
        <a class="nav-item">
          <div class="background-opacity"></div>
          <!-- <img class="header-icon" src="./assets/images/icons/menu_open_icon.png" alt=""> -->
          <slide-menu class="is-hidden-desktop header-icon"></slide-menu>
        </a>
      </div>
    </nav>
    <div class="app-wrapper-main">
      <transition name="fade">
        <component 
          :is="selectedComponent" 
          :data="data"
        ></component>
      </transition>
    </div>
    <div class="app-wrapper-footer is-hidden-touch">
      <img class="footer-icon-desktop" src="./assets/images/oh_logo.png" alt="">
    </div>
  </div>
</template>

<script>
import Debit from './components/Debit.vue';
import CurrentProjects from './components/CurrentProjects.vue';
import NextEvent from './components/NextEvent.vue';
import BlogPost from './components/BlogPost.vue';
import TransitionImage from './components/TransitionImage.vue';
import TestPage from './components/TestPage.vue';

// listen for click events from right menu
import { eventBus } from './main.js';

export default {
    props: [
      'data'
    ],
    components: {
      Debit,
      CurrentProjects,
      NextEvent,
      BlogPost,
      TestPage,
      TransitionImage
    },
    data: function() {
        return {
            selectedComponent: 'Debit'
        }
    },
    created: function(){
      eventBus.$on('setNewComponent',(cmp) => {
        this.selectedComponent = cmp;
      });
    }
}
</script>
