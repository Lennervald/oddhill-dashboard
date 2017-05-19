<template>
		<div class="views">
			<section class="debit-wrapper">
				<div class="debit-container">
					<div class="section-divider">

						<article class="debit-header">
							<p class="headline-touch is-hidden-desktop">{{ headline }}</p>
							<p class="section-links"><span class="section-item">{{ sectionlinks[0] }}</span><span class="app-br"></span></p>
							<p class="section-links"><span class="section-item-active">{{ sectionlinks[1] }}</span><span class="app-br"></span></p>
							<p class="section-links"><span class="section-item">{{ sectionlinks[2] }}</span></p>
						</article>

						<article class="debit-main">
							<div class="columns is-gapless">
									<div class="column empty-div is-3 is-hidden-touch">
									</div>

									<div class="column is-9-touch main-component">
										<div class="graph">
											<img src="../assets/images/component_bgs/circle.png" alt="">
										</div>
									</div>

									<div class="column div-3 is-3 is-hidden-touch">
										<div class="value-box-content">
											<div class="value-container">
												<section class="media">
													<div class="media-left">
														<div class="value-box primary-box-col">
														</div>
													</div>
													<div class="media-content">
														<div class="content">
															<p class="text-value primary-text-col">{{value1}}</p>
														</div>
													</div>
												</section>
											</div>
											<br>
											<div class="value-container">
												<section class="media">
													<div class="media-left">
														<div class="value-box secondary-box-col">
														</div>
													</div>
													<div class="media-content">
														<div class="content">
															<p class="text-value secondary-text-col">{{value2}}</p>
														</div>
													</div>
												</section>
											</div>
										</div>
									</div>
							 </div>
						</article>

					<article class="debit-footer is-hidden-desktop">
						<!-- <p class="headline-touch is-hidden-desktop">{{ headline }}</p>
						<p class="section-links">{{ links }}</p> -->
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
						headline: 'debiteringsgrad',
						sectionlinks: ["Vecka", "Månad", "År"],
						value1: 'Klient',
						value2: 'Inhouse',
						number: '74'
        }
    }
}
</script>
