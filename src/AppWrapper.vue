<template>
  <div>
      <div class="app-wrapper-inner">
        <transition name="fade">
          <component :is="selectedComponent"></component>
        </transition>
        <button class="btn btn-primary temp-slide-button" @click="next">Toggle Components</button>
      </div>
    </div>
</template>

<script>
import Debit from './components/Debit.vue';
import TestBulmaDebit from './components/TestBulmaDebit.vue';

export default {
    components: {
    One: Debit,
    Two: TestBulmaDebit
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
