<template>
<div class="views">
  <section class="hero current-projects-page-wrapper is-fullwidth">
    <div class="hero-head is-vcentered">
      <div class="columns">
        <div class="column is-offset-1">
          <p class="headline current-info-headline">{{pagetitle}}</p>
        </div>
      </div>
    </div>

    <transition name="slide" mode="out-in">
      <component :is="selectedComponent"
      :data="data"
      :projnumber="number">
        <h1>hkshdh</h1>
      </component>
    </transition>
    <div class="carousel">
      <div class="block">
        <li v-for="(project, index) in projects">
          <!-- <a class="button" @click="selectedComponent = 'appProject' + project.id">{{project.name}}</a> -->
          <!-- <div class="project-circle" v-bind:class="{ active: isActive }"  @click="selectedComponent = 'appProject' + project.id"></div> -->
          <!-- <div class="project-circle" v-bind:class="{ active: isActive }" @click="selectSwitch(project.id)" ></div> -->
          <div class="project-circle" @click="selectSwitch(index)" ></div>
        </li>
        <!-- <h1>{{selectedComponent}}</h1> -->
      </div>
    </div>
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
import Project0 from './Project1.vue';
import Project1 from './Project1.vue';
import Project2 from './Project2.vue';
import Project3 from './Project2.vue';
import Project4 from './Project2.vue';

export default {
  props: ['data'],
  components: {
    appProject0: Project0,
    appProject1: Project1,
    appProject2: Project2,
    appProject3: Project3,
    appProject4: Project4
  },
  data: function() {
    return {
      selectedComponent: 'appProject1',
      isActive: true,
      pagetitle: "Aktuella Projekt",
      projectObj: ["Commits", "Timmar"],
      valueCommits: "178",
      valueHours: '',
      team: '',
      profileImages: '',
      projects: '',
      number: '0',
      // Martin: Man kan manuellt updatera vilket project som är valt här:
      // Ett klick på buttons ändrar även vilken selectedproject som är vald,
      // Vad som behövs är att när man klickar så ska sidan laddas om, eller någon typ av ny instansiering ske för att detta ska funka.
      // Annars får man bygga det på annat sätt. men gissar att det ska funka.
      selectedProject: '1',
      projectinfo: {
        name: '',
        hours: '',
        commits: '',
      }
    }
  },
  created: function() {
    this.selectProj();
    this.setupProject();
  },
  mounted() {
    // console.log(this.selected)
    // console.log(this.data.projects[0].teamMembers[0].name);
    // console.log(this.data.projects.length)
  },
  methods: {
    selectSwitch: function(indexNumber) {
      this.selectedComponent = 'appProject' + indexNumber;
      this.number = indexNumber;
      // this.isActive = !this.isActive;
    },
    selectProj: function() {
      this.projects = this.data.projects;
    },
    setupProject: function() {
      let activeProject = this.data.projects[this.selectedProject];
      this.projectinfo.name = activeProject.name;
      let projMembers = activeProject.teamMembers;

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
