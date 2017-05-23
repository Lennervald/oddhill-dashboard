<template>
	<div class="views">
		<section class="hero debit-page-wrapper is-fullwidth">
			<div class="hero-head component-head-spacer is-vcentered">
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

			<div class="hero-body component-body">
				<div class="columns is-mobile is-vcentered">
					<div class="column is-offset-3-tablet is-offset-3-desktop is-6-tablet is-6-desktop">
						<figure class="graph-image is-centered">
							<app-chart
                :client-percentage="clientPercentage"
                :inhouse-percentage="inhousePercentage"
              ></app-chart>
							<!-- <img src="../assets/images/component_bgs/circle.png" alt=""> -->
							<div class="graph-text-wrapper">
								<article class="message">
									<p class="graph-text numb app-number">{{ roundoffClient() }}<span class="number-percent">%</span></p>
									<p class="graph-text headline app-title section-item-active is-hidden-touch is-hidden-desktop-only">{{ headline }}</p>
									<p class="graph-text value sub-title">{{ timevalues[0] }}</p>
								</article>
							</div>
						</figure>
					</div>

					<div class="column box-values-aside is-3 has-text-left is-hidden-touch">
						<aside class="menu">
							<ul class="menu-list">
						    <li><div class="value-box primary-box-col">
								</div></li>
								<li><p class="text-value primary-text-col">{{ value1 }}</p></li>
								<br><br>
								<li><div class="value-box secondary-box-col">
								</div></li>
								<li><p class="text-value secondary-text-col">{{ value2 }}</p></li>
						  </ul>
						</aside>
					</div>
				</div>

				<div class="columns is-mobile is-hidden-desktop is-vcentered">
					<div class="column">
						<div class="tabs box-values-below is-centered">
							<ul>
								<li><div class="value-box primary-box-col"></div></li>
								<li><p class="box-values-below-text primary-text-col">{{ value1 }}</p></li>
								<li><p class="space-breaker"> </p></li>
								<li><div class="value-box secondary-box-col"></div></li>
								<li><p class="box-values-below-text secondary-text-col">{{ value2 }}</p></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="hero-foot is-vcentered">
				<div class="columns">
					<div class="column has-text-left is-hidden-desktop">
						<img class="footer-icon-mobile" src="../assets/images/oh_logo.png" alt="">
					</div>
				</div>
			</div>
		</section>
	</div>
</template>


<script>
import DebitChart from './charts/DebitChart.vue';

// Get response data from file temporarely
// REMEMBER - When making a request, lets say for a week, the dates that are used
// should be saved in variables to be used in array "timevalues" below
var apiResponseWeek  = require('../assets/data/debiteringsgrad/api-response-week.js')
var apiResponseMonth = require('../assets/data/debiteringsgrad/api-response-month.js')
var apiResponseYear  = require('../assets/data/debiteringsgrad/api-response-year.js')


export default {
    data: function() {
        return {
					headline: 'debiteringsgrad',
				  sectionlinks: ["Vecka", "Månad", "År"],
			  	value1: 'Klient',
			  	value2: 'Inhouse',
			  	timevalues: ["Vecka 12", "april 2017", "hela 2017"],
				  clientPercentage: apiResponseWeek.client.percentage,
          inhousePercentage: 100 - apiResponseWeek.client.percentage
        }
    },
		components: {
      appChart: DebitChart
    },
		methods: {
			roundoffClient: function(){
				return Math.round(this.clientPercentage);
			},
			roundoffInhouse: function(){
				return Math.round(this.inhousePercentage);
			}
		}
}
</script>
