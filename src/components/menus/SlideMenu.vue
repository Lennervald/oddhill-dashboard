<template>
  <div>
    <div id="mySidenav" class="side-nav">
      <div class="close-menu">
        <img class="close-icon" src="src/assets/images/icons/menu_close_icon_x.png" @click="closeNav()">
      </div>
      <div class="side-nav-content headline">
          <a href="#" @click="setComponent('Debit');closeNav()">Debiteringsgrad</a>
          <div class="break-row"></div>
          <a href="#" @click="setComponent('CurrentProjects');closeNav()">Aktuella Projekt</a>
          <div class="break-row"></div>
          <a href="#" @click="setComponent('NextEvent');closeNav()">Nästa event</a>
          <div class="break-row"></div>
          <a href="#" @click="setComponent('BlogPost');closeNav()">Senaste Blogginlägg</a>
      </div>
    </div>

    <div class="open-menu">
      <img class="open-icon" src="src/assets/images/icons/menu_open_icon.png" alt="" @click="openNav()">
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
        // switch (cmp) {
        //   case 'Debit':
        //     this.debit.color = '#F9418C';
        //     this.testpage.color = '#242323';
        //     this.transitionimage.color = '#242323';
        //     this.blogpost.color = '#242323';
        //     break;
        //
        //   case 'TestPage':
        //     this.debit.color = '#242323';
        //     this.testpage.color = '#F9418C';
        //     this.transitionimage.color = '#242323';
        //     this.blogpost.color = '#242323';
        //     break;
        //
        //   case 'TransitionImage':
        //     this.debit.color = '#242323';
        //     this.testpage.color = '#242323';
        //     this.transitionimage.color = '#F9418C';
        //     this.blogpost.color = '#242323';
        //     break;
        //
        //   case 'BlogPost':
        //     this.debit.color = '#242323';
        //     this.testpage.color = '#242323';
        //     this.transitionimage.color = '#242323';
        //     this.blogpost.color = '#F9418C';
        //     break;
        //
        //   default:
        //     this.debit.color = '#F9418C';
        //     this.testpage.color = '#242323';
        //     this.transitionimage.color = '#242323';
        //     this.blogpost.color = '#242323';
        // }
      },
      openNav: function(){
        document.getElementById("mySidenav").style.left = "0";
      },
      closeNav: function(){
        document.getElementById("mySidenav").style.left = "-90%";
      }
    }
  }

</script>
