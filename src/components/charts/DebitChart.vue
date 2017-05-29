<template>
  <div>
    <doughnut-chart :chart-data="datacollection" :options="opts"
      :labels="{}">{{fillData()}}
    </doughnut-chart>
    <p>Window width: {{windowWidth}}</p>
  </div>
</template>

<script>
  import DoughnutChart from './DoughnutChart.js';
  import { eventBus } from '../../main.js';
  import { settings } from '../../variables/settings.js'

  export default {
    props: [
      'data',
      'windowWidth'
    ],
    data: function() {
      return {
        client: this.data.debit.week.client,
        inhouse: this.data.debit.week.inhouse,
        interval: null,
        rotationTime: settings.debitRotationTime
      }
    },
    watch: {
      client: function() {
        this.fillData();
      },
      windowWidth: function(){
        if (this.windowWidth < 1000) { 
          clearInterval(this.interval);
        }
        else {
          this.rotationTime = settings.debitRotationTime;
          clearInterval(this.interval);
          this.play();
        }
      }
    },
    created() {
      this.fillData();
      if (this.windowWidth > 1000) {this.play()}
    },
    beforeDestroy (){
      window.clearInterval(this.interval)
    },
    components: {
        DoughnutChart
    },
    methods: {
      fillData() {
        this.opts = {
            cutoutPercentage: 47, // The Fatness of the Pie
            rotation: 12,
            responsive: true,
            maintainAspectRatio: true,
            animation: {
                animateScale: false,
                animateRotate: true
            },
            legend: {
                display: false,
            }
        },
        this.datacollection = {
            labels: ['Client', 'Inhouse'],
            datasets: [{
                data: [this.client, this.inhouse],
                backgroundColor: ["#F9418C", "#722FBC"],
                borderWidth: 0,
            }],
        }
      },
      play: function(){

        this.interval = setInterval(() => {
          if(this.client == this.data.debit.week.client){
            this.client = this.data.debit.month.client;
            this.inhouse = this.data.debit.month.inhouse;
            eventBus.$emit('state', 'month');
            eventBus.$emit('updateDebit', this.client);
          }
          else if (this.client == this.data.debit.month.client) {
            this.client = this.data.debit.year.client;
            this.inhouse = this.data.debit.year.inhouse;
            eventBus.$emit('state', 'year');
            eventBus.$emit('updateDebit', this.client);
          }
          else if (this.client == this.data.debit.year.client){
            this.client = this.data.debit.week.client;
            this.inhouse = this.data.debit.week.inhouse;
            eventBus.$emit('state', 'week');
            eventBus.$emit('updateDebit', this.client);
          }
        },this.rotationTime);
      }
    }
  }
</script>
