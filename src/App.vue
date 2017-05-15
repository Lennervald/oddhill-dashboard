<template>
  <div id="app">
    <p class="headline-lg">{{ headline }}</p>
    <p class="links-lg">{{ links }}</p>
    <p class="number-lg">{{ number }}<span>%</span></p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      headline: 'debiteringsgrad',
      links: 'Vecka  |  Månad  |  År',
      number: '74'
    }
  }
}
</script>

<style lang="scss">
 
</style>
