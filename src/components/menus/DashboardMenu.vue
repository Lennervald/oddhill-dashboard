<template>
	<div>
		<div class="menu-wrapper is-parent">
      <div class="menu-box is-child">
        <!-- tmp btn -->
        <!-- <button @click="setComponent('TransitionImage')" class="tmp-btn">bg.</button> -->

        <div class="nav-menu-body" @click="setComponent('Debit')" :style="debit">
          <p class="app-title">{{titleDebit}}</p>
          <p class="app-number dashboard-number">{{ valueDebit }}<span class="number-percent">{{unitDebit}}</span></p>
          <p class="sub-title">{{subDebit}}</p>
        </div>
        <div class="linebreaker"></div>

        <div class="nav-menu-body" @click="setComponent('CurrentProjects')" :style="currentprojects">
          <p class="app-title">{{titleProj}}</p>
          <p class="app-number dashboard-number">{{valueProj}}{{unitProj}}</p>
          <p class="sub-title">{{subProj}}</p>
        </div>
        <div class="linebreaker"></div>

        <div class="nav-menu-body" @click="setComponent('NextEvent')" :style="nextevent">
          <p class="app-title">{{titleEvent}}</p>
          <p class="app-number dashboard-number">{{valueEvent}}<span class="small-print">{{unitEvent}}</span></p>
          <p class="sub-title">{{subEvent}}</p>
        </div>
        <div class="linebreaker"></div>

        <div class="nav-menu-body" @click="setComponent('BlogPost')" :style="blogpost">
          <p class="app-title">{{titleBlog}}</p>
          <p class="app-number dashboard-number">{{valueBlog}}<span class="small-print">{{unitBlog}}</span></p>
          <p class="sub-title blog-title">{{shortenTitle()}}</p>
        </div>

      </div>
		</div>
	</div>
</template>

<script>
import { eventBus } from '../../main.js';
import { settings } from '../../variables/settings.js';

export default {
  props: [
    'data' // contains data.client and data.inhouse
  ],
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

			titleDebit: settings.debitTitle,
      valueDebit: this.data.debit.month.client,
			unitDebit: '%',
			subDebit: 'mars 2017',

			titleProj: 'Aktuella Projekt',
      valueProj: this.data.projects.length,
			unitProj: '.',
			subProj: 'Senaste månaden',

			titleEvent: 'Nästa Event',
      valueEvent: '26',
			unitEvent: 'maj',
			subEvent: 'Utvecklardag',

			titleBlog: 'Senaste Blogginlägg',
      valueBlog: '12',
			unitBlog: 'april',
			subBlog: 'Projektledning i det digitala landskapet'
    }
  },
  created: function() {
    eventBus.$on('menuStyle',(cmp) => {
      this.setComponent(cmp);
    });
  },
  methods: {
    setComponent: function(cmp){
      eventBus.$emit('setNewComponent', cmp);
      // change text color on clicked cpm
      console.log('cmp', cmp);
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

        default:
          this.debit.color = '#242323';
          this.currentprojects.color = '#242323';
          this.transitionimage.color = '#242323';
          this.blogpost.color = '#242323';
      }
    },
		shortenTitle: function(){
			let str = this.subBlog;
			// perhaps unnessesary
			// return '"' + str.substring(0,30) + '..."';
			return '"' + str +'"';
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
