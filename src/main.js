import Vue from 'vue';
import VueResource from 'vue-resource';

import App from './App.vue';
import MainContentWrapper from './MainContentWrapper.vue';
import MenuWrapper from './MenuWrapper.vue';
import MainBackgrounds from './components/animations/MainBackgrounds.vue';
import TestPage from './components/TestPage.vue';

// Add booostrap-vue-functionality
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Import global sass-styles
import './scss/main.scss';

Vue.use(VueResource);
Vue.use(BootstrapVue);
Vue.component('main-content-wrapper', MainContentWrapper);
Vue.component('menu-wrapper', MenuWrapper);
Vue.component('main-backgrounds', MainBackgrounds);

new Vue({
  el: '#app',
  render: h => h(App)
});
