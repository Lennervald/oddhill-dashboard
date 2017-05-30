<template>
  <div class="views">
		<section class="hero debit-page-wrapper is-fullwidth">
			<div class="hero-head   is-vcentered">
				<div class="columns">
					<div class="column">
						<p class="headline debit-headline is-hidden-desktop">{{ headline }}</p>
						<ul>
							<li @click="setState('week')"><p class="section-links"><span class="section-item" :class="{'section-item-active': states.week }">{{ sectionlinks[0] }}</span><span class="app-br"></span></p></li>
							<li @click="setState('month')"><p class="section-links"><span class="section-item" :class="{'section-item-active': states.month }">{{ sectionlinks[1] }}</span><span class="app-br"></span></p></li>
							<li @click="setState('year')"><p class="section-links"><span class="section-item" :class="{'section-item-active': states.year }">{{ sectionlinks[2] }}</span></p></li>
						</ul>
					</div>
				</div>
			</div>

			<div class="hero-body component-body">
				<div class="columns is-mobile is-vcentered">
					<div class="column is-offset-3-tablet is-offset-3-desktop is-6-tablet is-6-desktop">
						<figure class="graph-image is-centered">
							<app-chart
                :data="data" 
                :windowWidth="windowWidth"
              ></app-chart>
							<!-- <img src="../assets/images/component_bgs/circle.png" alt=""> -->
							<div class="graph-text-wrapper">
								<article class="message">
									<p class="graph-text app-number debit-number">{{ client }}<span class="number-percent">%</span></p>
									<p class="graph-text headline app-title section-item-active is-hidden-touch is-hidden-desktop-only">{{ headline }}</p>
									<p class="graph-text value sub-title">{{ timespan }}</p>
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
import { eventBus } from '../main.js';
import { settings } from '../variables/settings.js';

export default {
  props: [
    'data',
    'windowWidth'
  ],
  data: function() {
      return {
        headline: settings.debitTitle,
        sectionlinks: ["Vecka", "Månad", "År"],
        value1: 'Klient',
        value2: 'Inhouse',
        timespan: '',
        states: {
          'week': true,
          'month': false,
          'year': false
        },
        state: 'week',
        client: '',
      }
  },
  components: {
    appChart: DebitChart
  },
  methods: {
    setState: function(state){
      if (state == 'week') { 
        Object.keys(this.states).forEach(v => this.states[v] = false); this.states.week = true; eventBus.$emit('state', 'week');
        // update percent in middle
        this.client = this.data.debit.week.client;
        var data = {
          client: this.data.debit.week.client,
          inhouse: this.data.debit.week.inhouse
        };
        // send updated data to graph in debitChart.vue
        eventBus.$emit('updateGraph',data);
        // turn of the rotation since we clicked a menu item
        eventBus.$emit('interval','');
      } 
      if (state == 'month') { 
        Object.keys(this.states).forEach(v => this.states[v] = false); this.states.month = true; eventBus.$emit('state', 'month');
        // update percent in middle
        this.client = this.data.debit.month.client;
        var data = {
          client: this.data.debit.month.client,
          inhouse: this.data.debit.month.inhouse
        };
        // send updated data to graph in debitChart.vue
        eventBus.$emit('updateGraph',data);
        // turn of the rotation since we clicked a menu item
        eventBus.$emit('interval','');
        }
      if (state == 'year') { 
        Object.keys(this.states).forEach(v => this.states[v] = false); this.states.year = true; eventBus.$emit('state', 'year');
        this.client = this.data.debit.year.client;
        var data = {
          client: this.data.debit.year.client,
          inhouse: this.data.debit.year.inhouse
        };
        // send updated data to graph in debitChart.vue
        eventBus.$emit('updateGraph',data);
        // turn of the rotation since we clicked a menu item
        eventBus.$emit('interval','');
        }
    }
  },
  created: function() {
    // inital state
    this.client = this.data.debit.week.client;
    this.state = 'week';
    this.timespan = "Vecka 12"

    // listen to updated client data
    eventBus.$on('updateDebit',(client) => {
      this.client = client;
    });
    // listen to updated state
    eventBus.$on('state', (state) => {
        this.state = state;
        switch (this.state) {
          case 'week':
          this.states.week = true;
          this.states.month = false;
          this.states.year = false;
          this.timespan = 'Vecka 12';
          break;
          case 'month':
          this.states.week = false;
          this.states.month = true;
          this.states.year = false;
          this.timespan = 'mars 17';
          break;
          case 'year':
          this.states.week = false;
          this.states.month = false;
          this.states.year = true;
          this.timespan = '2017';
          break;
        }
        console.log(this.state);
    });
  }
}
</script>
