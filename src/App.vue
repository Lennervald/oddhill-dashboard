<template>
  <div id="app">
    <div class="columns is-gapless">
      <div class="column wrapper-skeleton">
        <div class="">
          <app-wrapper></app-wrapper>
        </div>
      </div>
      <div class="column is-one-quarter is-hidden-touch">
        <div class="column dashboard-menu-skeleton">
          <dashboard-menu></dashboard-menu>
        </div>
      </div>
    </div>
    <!-- Floating Color Backgrounds Needs improvement or re-think a better solution -->
    <!-- <main-backgrounds></main-backgrounds> -->
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
