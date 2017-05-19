import Vue from 'vue';
import VueResource from 'vue-resource';

import App from './App.vue';
import AppWrapper from './AppWrapper.vue';
import TestBulmaDebit from './components/TestBulmaDebit.vue';
import MainBackgrounds from './components/animations/MainBackgrounds.vue';
import DashboardMenu from './components/DashboardMenu.vue';
import MobileMenu from './components/MobileMenu.vue';

// Add support for Bulma
import 'bulma/css/bulma.css';

// Import global sass-styles
import './assets/scss/main.scss';


Vue.use(VueResource);

Vue.component('app-wrapper', AppWrapper);
Vue.component('dashboard-menu', DashboardMenu);
Vue.component('main-backgrounds', MainBackgrounds);

new Vue({
  el: '#app',
  render: h => h(App)
});