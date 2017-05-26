<template>
  <div>
    <doughnut-chart :chart-data="datacollection" :options="opts"
      :labels="{}">{{fillData()}}
    </doughnut-chart>
  </div>
</template>

<script>
  import DoughnutChart from './DoughnutChart.js';
  import { eventBus } from '../../main.js';
  import { settings } from '../../variables/settings.js'

  export default{
    props: [
      'data'
    ],
    data: function() {
      return {
        client: this.data.debit.week.client,
        inhouse: this.data.debit.week.inhouse
      }
    },
    watch: {
      client: function() {
        this.fillData();
      }
    },
    created() {
      this.fillData();
      this.play();
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
        setInterval(() => {
          if(this.client == this.data.debit.month.client){
            this.client = this.data.debit.week.client;
            this.inhouse = this.data.debit.week.inhouse;
            eventBus.$emit('updateDebit', this.client);
          }
          else {
            this.client = this.data.debit.month.client;
            this.inhouse = this.data.debit.month.inhouse;
            eventBus.$emit('updateDebit', this.client);
          }
        },settings.debitRotationTime);
      }
    }
  }
</script>
