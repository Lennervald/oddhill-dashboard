<template>
	<div>
		<div class="menu-wrapper is-parent">
      <div class="menu-box is-child">
      <button @click="setComponent('TransitionImage')" class="tmp-btn">bakgrundsbilder</button>
        <article @click="setComponent('Debit')" class="message">
          <div class="nav-menu-body">
            <p class="app-title">Debiteringsgrad</p>
            <p class="app-number">74<span class="number-percent">%</span></p>
            <p class="sub-title">Mars 2017</p>
          </div>
        </article>
  			<div class="linebreaker"></div> 
        <article @click="setComponent('TestPage')" class="message">
          <div class="nav-menu-body">
            <p class="app-title">Aktuella Projekt</p>
            <p class="app-number">8.<span class="small-print"></span></p>
            <p class="sub-title">Senaste månaden</p>
          </div>
        </article>
  			<div class="linebreaker"></div> 
        <article @click="setComponent('TransitionImage')" class="message">
          <div class="nav-menu-body">
            <p class="app-title">Nästa Event</p>
            <p class="app-number">20<span class="small-print">April</span></p>
            <p class="sub-title">maj 2017</p>
          </div>
        </article>
  			<div class="linebreaker"></div>
        <article @click="setComponent('BlogPost')" class="message">
          <div class="nav-menu-body">
            <p class="app-title">Senaste Blogginlägg</p>
            <p class="app-number">22<span class="small-print">Juli</span></p>
            <p class="sub-title">April 2017</p>
          </div>
        </article>
      </div>
		</div>
	</div>
</template>

<script>
import { eventBus } from '../main.js';

export default {
  data: function() {
    return {

    }
  },
  methods: {
    setComponent: function(cmp){
      eventBus.$emit('setNewComponent', cmp);
    }
  }
}
</script>
<style>
  .tmp-btn {
    position: fixed;
    top: 5px;
    right: 5px;
  }
</style>