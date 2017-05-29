<template>
  <div id="app">
    <div class="columns is-gapless">
      <div class="column wrapper-skeleton">
          <app-wrapper
            :data="data"
          ></app-wrapper>
      </div>
      <div class="column is-one-quarter is-hidden-touch">
        <div class="column dashboard-menu-skeleton is-ancestor">
          <dashboard-menu
            :data="data"
          ></dashboard-menu>
        </div>
      </div>
    </div>
    <!-- Floating Color Backgrounds Needs improvement or re-think a better solution -->
    <!-- <main-backgrounds></main-backgrounds> -->
  </div>
</template>

<script>

// Get response data from file temporarely
// REMEMBER - When making a request, lets say for a week, the dates that are used
// should be saved in variables to be used in array "timevalues" below
// DEBITERINGSGRAD
var apiResponseWeek  = require('./assets/data/debiteringsgrad/api-response-week.js')
var apiResponseMonth = require('./assets/data/debiteringsgrad/api-response-month.js')
var apiResponseYear  = require('./assets/data/debiteringsgrad/api-response-year.js')

// Get project-data from JSON
var projectData = require('./assets/data/projects/current-projects-week.json');

export default {
  name: 'app',
  data () {
    return {
      data: {
        debit: {
          week: {
            client: Math.round(apiResponseWeek.client.percentage),
            inhouse: Math.round(100 - apiResponseWeek.client.percentage)
          },
          month: {
            client: Math.round(apiResponseMonth.client.percentage),
            inhouse: Math.round(100 - apiResponseMonth.client.percentage)
          },
          year: {
            client: Math.round(apiResponseYear.client.percentage),
            inhouse: Math.round(100 - apiResponseYear.client.percentage)
          }
        },
        projects: projectData.projects
      }
    }
  }
}
</script>
