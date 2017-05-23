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
      'clientPercentage',
      'inhousePercentage'
    ],
    data () {
      return {
        projectname: 'Malmö Stadsteater',
        client: this.clientPercentage,
        inhouse: this.inhousePercentage
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
                data: [this.client, this.inhouse],
                backgroundColor: ["#F9418C", "#722FBC"],
                borderWidth: 0,
            }],
          }
        },

      }
    }
</script>
