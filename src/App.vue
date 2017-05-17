<template>
  <div id="app">
    <div class="columns is-gapless">
      <div class="column app-wrapper-skeleton">
        <div class="app-main-content">
          <div class="column is-hidden-desktop">
            <img class="header-icon" src="./assets/images/icons/menu_open_icon.png" alt="">
          </div>
          <app-wrapper></app-wrapper>
          <img class="footer-icon" src="./assets/images/oh_logo.png" alt="">
        </div>
      </div>
      <div class="column is-one-third is-hidden-touch">
        <div class="column app-dashboard-menu-skeleton">
          <app-dashboard-menu></app-dashboard-menu>
        </div>
      </div>
    </div>
    <!-- Floating Color Backgrounds -->
    <main-backgrounds></main-backgrounds>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">

</style>
