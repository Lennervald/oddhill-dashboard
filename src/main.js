import Vue from 'vue';
import VueResource from 'vue-resource';

import App from './App.vue';
import AppWrapper from './AppWrapper.vue';
import TestPage from './components/TestPage.vue';
import MainBackgrounds from './components/animations/MainBackgrounds.vue';
import DashboardMenu from './components/DashboardMenu.vue';
import SlideMenu from './components/SlideMenu.vue';

// Add support for Bulma
import 'bulma/css/bulma.css';

// Import global sass-styles
import './assets/scss/main.scss';


Vue.use(VueResource);

Vue.component('app-wrapper', AppWrapper);
Vue.component('dashboard-menu', DashboardMenu);
Vue.component('main-backgrounds', MainBackgrounds);
Vue.component('slide-menu', SlideMenu);

// Used for listening on right menu clicks with 
// vue.js methods $emit() and $on()
export const eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
});