<template>
	<div>
		<div class="menu-wrapper is-parent">
      <div class="menu-box is-child">
        <!-- tmp btn -->
        <button @click="setComponent('TransitionImage')" class="tmp-btn">bakgrundsbilder</button>

        <div class="nav-menu-body" @click="setComponent('Debit')" :style="debit">
          <p class="app-title">Debiteringsgrad</p>
          <p class="app-number">74<span class="number-percent">%</span></p>
          <p class="sub-title">Mars 2017</p>
        </div>
        <div class="linebreaker"></div>

        <div class="nav-menu-body" @click="setComponent('TestPage')" :style="testpage">
          <p class="app-title">Aktuella Projekt</p>
          <p class="app-number">8.<span class="small-print"></span></p>
          <p class="sub-title">Senaste månaden</p>
        </div>
        <div class="linebreaker"></div>

        <div class="nav-menu-body" @click="setComponent('TransitionImage')" :style="transitionimage">
          <p class="app-title">Nästa Event</p>
          <p class="app-number">20<span class="small-print">April</span></p>
          <p class="sub-title">maj 2017</p>
        </div>
        <div class="linebreaker"></div>

        <div class="nav-menu-body" @click="setComponent('BlogPost')" :style="blogpost">
          <p class="app-title">Senaste Blogginlägg</p>
          <p class="app-number">22<span class="small-print">Juli</span></p>
          <p class="sub-title">April 2017</p>
        </div>

      </div>
		</div>
	</div>
</template>

<script>
import { eventBus } from '../../main.js';

export default {
  data: function() {
    return {
      debit: {
        color: '#F9418C'
      },
      testpage: {
        color: '#242323'
      },
      transitionimage: {
        color: '#242323'
      },
      blogpost: {
        color: '#242323'
      }
    }
  },
  methods: {
    setComponent: function(cmp){
      eventBus.$emit('setNewComponent', cmp);
      // change text color on clicked cpm
      switch (cmp) {
        case 'Debit':
          this.debit.color = '#F9418C';
          this.testpage.color = '#242323';
          this.transitionimage.color = '#242323';
          this.blogpost.color = '#242323';
          break;

        case 'TestPage':
          this.debit.color = '#242323';
          this.testpage.color = '#F9418C';
          this.transitionimage.color = '#242323';
          this.blogpost.color = '#242323';
          break;

        case 'TransitionImage':
          this.debit.color = '#242323';
          this.testpage.color = '#242323';
          this.transitionimage.color = '#F9418C';
          this.blogpost.color = '#242323';
          break;

        case 'BlogPost':
          this.debit.color = '#242323';
          this.testpage.color = '#242323';
          this.transitionimage.color = '#242323';
          this.blogpost.color = '#F9418C';
          break;

        default:
          this.debit.color = '#F9418C';
          this.testpage.color = '#242323';
          this.transitionimage.color = '#242323';
          this.blogpost.color = '#242323';
      }
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
