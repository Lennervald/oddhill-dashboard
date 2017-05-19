<template>
		<div class="views">
			<section class="debit-wrapper">
				<div class="debit-container">
					<div class="section-divider">

						<article class="debit-header">
							<p class="section-links">{{ sectionlinks }}</p>
						</article>

						<article class="debit-main">

						</article>

					<article class="debit-footer is-hidden-desktop">
						<h3>Footer links</h3>
					</article>
		</div>
	</div>
	</section>
	</div>
</template>

<script>
export default {
    data: function() {
        return {
						sectionlinks: 'THIS IS A TEST PAGE',
						value1: 'Klient',
						value2: 'Inhouse',
						number: '74'
        }
    }
}
</script>
