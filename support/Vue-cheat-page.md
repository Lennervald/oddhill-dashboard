### Working with Events 

Syntax goodies: v-on or simply @click
Important stuff: You can not too complex JS (for loops and bigger if condiationals) in these! Simple ternary Works though!

ex 1: 
// counter: 0
// negCount(step){ return this.counter += step; },
<button v-on:click="addCounter(2)">Click me twice</button>


ex2:
<input type="text" @keyup.space="alertFunc">


ex3a: 
// inValue: ''
// getValue(event){ return this.inValue = event.target.value; }

<input v-on:keydown="getValue" type="text">
<p>{{ inValue }}</p>


ex3b:
(this time only when enter is pressed)
<input v-on:keydown.enter="getValue" type="text">

ex4.
// counter: 0,
// msg: 'Zero'
// addCount(steps){
      this.counter += steps;
      this.counter > 100 ? this.msg = "You've Reached 100!" : this.msg ="Almost There"
    }
//
<button @click="addCount(10)">Click</button>
<h2>Count: {{ counter }} <small><i>{{ msg }}</i></small></h2>



### Craeting Components

Important : ALWAYS WRAP a template with a <div></div> or else it won't show. 

Basic Example(This displays 2 different Vues)

#main.js
import Vue from 'vue';
import App from './App.vue';
import Home from './Home.vue';

// Add booostrap-vue
import BootstrapVue from 'bootstrap-vue';
// and styles
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.component('home-view', Home);

Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  render: h => h(App)
});

# App.vue

<template>
  <div id="app">
    <h1>This is from App</h1>
    <home-view></home-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss" scoped>
  @import './sass/main.scss';
</style>

#Home.vue

<template>
	<div>
		<button @click="addCount(10)">Click</button>
		<h2>Count: {{ counter }} <small><i>{{ msg }}</i></small></h2>
	</div>
</template>

<script>
	export default {
	  data () {
	    return {
	      counter: 0,
	      msg: 'Zero'
	    }
	  },
	  methods: {
	    addCount(steps){
	      this.counter += steps;
	      this.counter > 100 ? this.msg = "You've Reached 100!" : this.msg ="Almost There"
	    }
	  }
	}
</script>