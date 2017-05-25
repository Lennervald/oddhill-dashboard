<template>
  <div>
    <doughnut-chart :chart-data="datacollection" :options="opts"
      :labels="{}">{{fillData()}}
    </doughnut-chart>
  </div>
</template>

<script>
  import DoughnutChart from './DoughnutChart.js';

  export default{
    props: [
      'data',
      'state'
    ],
    data () {
      return {
        client: null,
        inhouse: null
      }
    },
    created() {
      this.displayData();
      this.fillData();
    },
    components: {
        DoughnutChart
    },
    methods: {
      displayData(){
        if(this.state === 'month'){
          console.log('state: month')
          this.client = this.data.debit.month.client;
          this.inhouse = this.data.debit.month.inhouse
        } 
        else if (this.state === 'week'){
          console.log('state: week')
          this.client = this.data.debit.week.client;
          this.inhouse = this.data.debit.week.inhouse
        }
        else if (this.state === 'year'){
          console.log('state: year')
          this.client = this.data.debit.year.client;
          this.inhouse = this.data.debit.year.inhouse
        }
      },
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

      }
    }
</script>
