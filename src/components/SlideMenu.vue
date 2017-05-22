<template>

  <div>
    
    <div id="mySidenav" class="side-nav">
      <div class="close-menu">
        <img class="close-icon" src="src/assets/images/icons/menu_close_icon.png" @click="closeNav()">
      </div>

      <div class="side-nav-content">
          <a href="#">DEBITERINGSGRAD</a>
          <div class="break-row"></div>
          <a href="#">SJUKDAGAR</a>
          <div class="break-row"></div>
          <a href="#">TOPPROJEKT</a>
          <div class="break-row"></div>
          <a href="#">AKTUELLT</a>
          <div class="break-row"></div>
          <a href="#">SENASTE BLOGGINLÄGG</a>
      </div>

      <div class="side-nav-footer">
          <img src="src/assets/images/oh_logo.png" alt="">
      </div>
    </div>

    <div class="open-menu">
      <img class="open-icon" src="src/assets/images/icons/menu_open_icon.png" alt="" @click="openNav()">
    </div>

  </div> 

</template>

<script>
  export default {
    data: function(){
      return {

      }
    },
    methods: {
      openNav: function(){
        document.getElementById("mySidenav").style.left = "0";
      },
      closeNav: function(){
        document.getElementById("mySidenav").style.left = "-90%";
      }
    }
  }

</script>