<template>
  <div id="app">
    <main-backgrounds></main-backgrounds>
    <div class="container-fluid">
    	<div class="row">
    		<div class="col-9 wrapper-one">
    			<main-content-wrapper></main-content-wrapper>
    		</div>
    		<div class="col-3 wrapper-two">
    			<menu-wrapper></menu-wrapper>
    		</div>
    	</div>
    </div>
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
