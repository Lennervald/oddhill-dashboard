<template>
	<div>
		<div class="menu-wrapper is-parent">
      <div class="menu-box is-child">
        <a @click="setCmp('Debit')">
          <article class="message">
            <div class="nav-menu-body">
              <p class="app-title menu-item menu-item-active">Debiteringsgrad</p>
              <p class="app-number menu-item menu-item-active">74<span class="number-percent">%</span></p>
              <p class="sub-title menu-item menu-item-active">Mars 2017</p>
            </div>
          </article>
        </a>

  			<div class="linebreaker"></div>
        <a @click="setCmp('TransitionImage')"> 
          <article class="message">
            <div class="nav-menu-body">
              <p class="app-title menu-item">Aktuella Projekt</p>
              <p class="app-number menu-item">8.<span class="small-print"></span></p>
              <p class="sub-title menu-item">Senaste månaden</p>
            </div>
          </article>
        </a>
  			<div class="linebreaker"></div>
        <a @click="setCmp('TransitionImage')"> 
          <article class="message">
            <div class="nav-menu-body">
              <p class="app-title menu-item">Nästa Event</p>
              <p class="app-number menu-item">20<span class="small-print">April</span></p>
              <p class="sub-title menu-item">Mars 2017</p>
            </div>
          </article>
        </a>
  			<div class="linebreaker"></div>
        <a @click="setCmp('BlogPost')">
          <article class="message">
            <div class="nav-menu-body">
              <p class="app-title menu-item">Senaste Blogginlägg</p>
              <p class="app-number menu-item">22<span class="small-print">Juli</span></p>
              <p class="sub-title menu-item">Mars 2017</p>
            </div>
          </article>
        </a>
      </div>
		</div>
	</div>
</template>

<script>
import { eventBus } from '../main.js';

export default {
    methods: {
      setCmp: function(cmp){
        eventBus.$emit('setNewCmp', cmp);
      }
    }
}
</script>
