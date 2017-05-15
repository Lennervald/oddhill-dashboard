<template>
	<div class="views">
		<p class="headline-lg">{{ headline }}</p>
		<p class="links-lg">{{ links }}</p>
		<p class="number-lg">{{ number }}<span>%</span></p>
		<div class="round-box"></div>
	</div>
</template> 

<script>
export default {
    data: function() {
        return {
            headline: 'test',
            links: 'Vecka  |  Månad  |  År',
            number: '70'
        }
    }
}
</script>