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

        <div class="nav-menu-body" @click="setComponent('CurrentProjects')" :style="currentprojects">
          <p class="app-title">Aktuella Projekt</p>
          <p class="app-number">8.<span class="small-print"></span></p>
          <p class="sub-title">Senaste månaden</p>
        </div>
        <div class="linebreaker"></div>

        <div class="nav-menu-body" @click="setComponent('NextEvent')" :style="nextevent">
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
      currentprojects: {
        color: '#242323'
      },
			nextevent: {
        color: '#242323'
      },
      blogpost: {
        color: '#242323'
      },
			transitionimage: {
        color: '#242323'
      },
    }
  },
  methods: {
    setComponent: function(cmp){
      eventBus.$emit('setNewComponent', cmp);
      // change text color on clicked cpm
      switch (cmp) {
        case 'Debit':
          this.debit.color = '#F9418C';
          this.currentprojects.color = '#242323';
          this.nextevent.color = '#242323';
          this.blogpost.color = '#242323';
          break;

        case 'CurrentProjects':
          this.debit.color = '#242323';
          this.currentprojects.color = '#F9418C';
          this.nextevent.color = '#242323';
          this.blogpost.color = '#242323';
          break;

				case 'NextEvent':
	          this.debit.color = '#242323';
	          this.currentprojects.color = '#242323';
	          this.nextevent.color = '#F9418C';
	          this.blogpost.color = '#242323';
	          break;

			  case 'BlogPost':
						this.debit.color = '#242323';
						this.currentprojects.color = '#242323';
						this.nextevent.color = '#242323';
						this.blogpost.color = '#F9418C';
						break;

				case 'TransitionImage':
						this.debit.color = '#242323';
						this.currentprojects.color = '#242323';
						this.nextevent.color = '#F9418C';
						this.blogpost.color = '#242323';
						break;

        default:
          this.debit.color = '#242323';
          this.currentprojects.color = '#242323';
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
