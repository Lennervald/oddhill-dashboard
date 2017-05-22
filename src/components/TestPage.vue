<template>
	<div class="views">
		<!--<h1>EMPTY TEST PAGE</h1>
		<section class="hero debit-page-wrapper is-fullwidth">
			<div class="hero-head is-vcentered">
				<div class="columns">
					<div class="column">
						<p class="headline debit-headline is-hidden-desktop">{{ headline }}</p>
						<ul>
							<li><p class="section-links"><span class="section-item-active">{{ sectionlinks[0] }}</span><span class="app-br"></span></p></li>
							<li><p class="section-links"><span class="section-item">{{ sectionlinks[1] }}</span><span class="app-br"></span></p></li>
							<li><p class="section-links"><span class="section-item">{{ sectionlinks[2] }}</span></p></li>
						</ul>
					</div>
				</div>
			</div>

			<div class="hero-body">
				<div class="columns is-mobile is-vcentered">
					<div class="column is-offset-3-tablet is-offset-3-desktop is-6-tablet is-6-desktop">
						<figure class="graph-image is-centered">
							<img src="../assets/images/component_bgs/circle.png" alt="">
							<div class="graph-text-wrapper">
								<article class="message">
									<p class="graph-text numb app-number">{{precentnumber}}<span class="number-percent">%</span></p>
									<p class="graph-text headline app-title section-item-active is-hidden-touch is-hidden-desktop-only">{{headline}}</p>
									<p class="graph-text value sub-title">{{timevalues[0]}}</p>
								</article>
							</div>
						</figure>
					</div>

					<div class="column box-values-aside is-3 has-text-left is-hidden-touch">
						<aside class="menu">
							<ul class="menu-list">
						    <li><div class="value-box primary-box-col">
								</div></li>
								<li><p class="text-value primary-text-col">{{value1}}</p></li>
								<br><br>
								<li><div class="value-box secondary-box-col">
								</div></li>
								<li><p class="text-value secondary-text-col">{{value2}}</p></li>
						  </ul>
						</aside>
					</div>
				</div>

				<div class="columns is-mobile is-hidden-desktop is-vcentered">
					<div class="column">
						<div class="tabs box-values-below is-centered">
							<ul>
								<li><div class="value-box primary-box-col"></div></li>
								<li><p class="box-values-below-text primary-text-col">{{value1}}</p></li>
								<li><p class="space-breaker"> </p></li>
								<li><div class="value-box secondary-box-col"></div></li>
								<li><p class="box-values-below-text secondary-text-col">{{value2}}</p></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section> -->
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
				timevalues: ["Vecka 12", "april 2017", "hela 2017"],
				precentnumber: '74',

        }
    }
}
</script>
