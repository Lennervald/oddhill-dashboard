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
      'data'
    ],
    data () {
      return {
        projectname: 'Malmö Stadsteater',
        client: this.data.debit.week.client,
        inhouse: this.data.debit.week.inhouse
      }
    },
    created() {
        this.fillData()
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
                data: [this.data.debit.week.client, this.data.debit.week.inhouse],
                backgroundColor: ["#F9418C", "#722FBC"],
                borderWidth: 0,
            }],
          }
        },

      }
    }
</script>
