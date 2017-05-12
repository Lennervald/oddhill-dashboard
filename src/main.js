import Vue from 'vue'
import App from './App.vue'

// Add booostrap-vue-functionality
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Import global styles
import './scss/main.scss';

new Vue({
  el: '#app',
  render: h => h(App)
})
