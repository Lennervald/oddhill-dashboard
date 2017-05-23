<template>
  <div>
    <!-- <h3>{{projectname}}</h3> -->
    <doughnut-chart :chart-data="datacollection" :options="opts"
      :labels="{}">{{fillData()}}
    </doughnut-chart>
  </div>
</template>
<script>
  import DoughnutChart from './DoughnutChart.js';
  export default{
    data () {
      return {
        projectname: 'Malmö Stadsteater',
        client: 50,
        inhouse: 22
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
            rotation: 6,
            animation: {
                animateScale: false,
                animateRotate: true
            },
            legend: {
                display: false,
                // unnessesary for this view
                // position: 'bottom',
                // labels: {
                //     boxWidth: 14,
                //     padding: 20,
                //     fontSize: 16,
                //     fontColor: "#000"
                // }
            }
        },
        this.datacollection = {
            labels: ['Client', 'Inhouse'],
            datasets: [{
                data: [this.client, this.inhouse],
                backgroundColor: ["#F9418C", "#722FBC"],
                borderWidth: 0,
                // nice options
                // hoverBackgroundColor: "#e56298",
                // borderColor: "none",
                // defaultFontSize: 40,
                // boxWidth: 10

            }],
        }
      },
    }
  }
</script>
