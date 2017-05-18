<template>
  <div>
    <div class="app-wrapper-header">
      <div class="burger is-hidden-desktop">
        <img class="header-icon" src="./assets/images/icons/menu_open_icon.png" alt="">
      </div>
    </div>
      <div class="app-wrapper-main">
        <transition name="fade">
          <TransitionImage></TransitionImage>
          <!-- <component :is="selectedComponent"></component> -->
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
import TestBulmaDebit from './components/TestBulmaDebit.vue';
import TransitionImage from './components/TransitionImage.vue';


export default {
    components: {
      One: Debit,
      Two: TestBulmaDebit,
      TransitionImage: TransitionImage
    },
    data: function() {
        return {
            selectedComponent: 'Two',
        }
    },
    methods: {
      next(){
        switch(this.selectedComponent) {
          case 'One':
            this.selectedComponent = 'Two';
            // app.style.backgroundColor = '#F9418C';
            break;
          default:
            this.selectedComponent = 'One';
            // app.style.backgroundColor = '#722FBC';
        }
      }
    }
}
</script>
