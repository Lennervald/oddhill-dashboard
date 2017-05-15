<template>
    <div>
        <div class="wrapper-outer-content">
            <div class="wrapper-inner-content">
                <transition name="fade">
                    <component :is="selectedComponent"></component>
                 </transition> 
            </div>
        <button class="btn btn-primary slider-menu" @click="next">Toggle Components</button>
        </div>
    </div>
</template>


<script>
import Debit from './components/Debit.vue';
import TestPage from './components/TestPage.vue';

export default {
    components: {
    One: Debit,
    Two: TestPage
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