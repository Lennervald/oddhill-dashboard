<template>
<div class="views">
  <li v-for="(project, index) in projects">
    <ul><button @click="changeProj(index)">index: {{index}} - {{project.name}}</button></ul>
  </li>
  <section class="hero current-projects-page-wrapper is-fullwidth">
  <div class="hero-head is-vcentered">
    <div class="columns">
      <div class="column is-offset-1">
        <p class="headline current-info-headline">{{pagetitle}}</p>
      </div>
    </div>
  </div>
  <app-project
    :data="data"
    :projectdata="projectinfo"
  ></app-project>

  <div class="hero-foot is-vcentered">
    <div class="columns">
      <div class="column has-text-left is-hidden-desktop">
        <img class="footer-icon-mobile" src="../../assets/images/oh_logo.png" alt="">
      </div>
    </div>
  </div>
</section>
</div>
</template>

<script>
import Project from './Project.vue';
export default {
  props: ['data'],
  components: {
    AppProject: Project
  },
  data: function() {
    return {
      pagetitle: "Aktuella Projekt",
      projectObj: ["Commits", "Timmar"],
      valueCommits: "178",
      valueHours: '',
      team: '',
      profileImages: '',
      currentProj: '',
      projects: '',
      numb: '0',
      projectinfo: {
        name: '',
        hours: '',
        commits: '',

      }
    }
  },
  created: function() {
    this.changeProj();
    this.selectProj();
    this.chosenProject();
    this.setupProject();
  },
  mounted() {
    // console.log(this.selected)
    // console.log(this.data.projects[0].teamMembers[0].name);
    // console.log(this.data.projects.length)
  },
  methods: {
    selectProj: function() {
      this.projects = this.data.projects;
    },
    chosenProject: function() {
      let count = this.projectCount;
      this.currentProj = this.data.projects[this.numb];
    },
    changeProj: function(index) {
      this.numb = 1;
    },
    setupProject: function() {
      let selectedProj = this.currentProj;
      let projMembers = selectedProj.teamMembers;
      this.projectinfo.name = selectedProj.name;

      let membArr = [];
      let hourArr = [];
      let commitArr = [];
      let hourSum = 0;
      let commitSum = 0;

      projMembers.map(function(teamie) {
        let memName = teamie.name.toLowerCase();
        let memHours = parseInt(teamie.hours);
        let memCommits = parseInt(teamie.commits);
        membArr.push(memName);
        hourArr.push(memHours);
        commitArr.push(memCommits);
      });

      for (let i = 0; i < hourArr.length; i++) {
        hourSum += hourArr[i];
      }

      for (let i = 0; i < commitArr.length; i++) {
        commitSum += commitArr[i];
      }

      this.projectinfo.hours = hourSum;
      this.projectinfo.commits = commitSum;
      this.projectinfo.team = validateStaff(membArr);

      function validateStaff(projMembers) {
        let oddHillStaff = [
          "anton",
          "bjorn",
          "calle",
          "christoffer",
          "daniel",
          "emil",
          "erik",
          "hannele",
          "jennifer",
          "jens_g",
          "jens_l",
          "johan",
          "mads",
          "magnus",
          "marcus",
          "marri",
          "mattias",
          "michaela",
          "mohamed",
          "mohammed",
          "nils",
          "ola",
          "olof",
          "pia"
        ]

        let valid = [];
        let invalid = [];

        for (var i = 0; i < projMembers.length; i++) {
          if (oddHillStaff.indexOf(projMembers[i]) !== -1) {
            valid.push(projMembers[i]);
          } else {
            invalid.push(projMembers[i]);
            console.log("Warning. Following Member(s): " + invalid + "  is/are not known to our database, and will therefor not be displayed. Please update with a full name/image asap.");
          }
        }
        return valid;
      }
    },
  }
}
</script>
