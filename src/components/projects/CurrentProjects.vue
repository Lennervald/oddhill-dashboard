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
      <component
        :is="selectedComponent"
        :data="data"
        :projectAttr="projectAttr"
        :selectedNumber="selectedIndex">
    </component>
  </transition>
    <div class="carousel">
      <div class="block">
        <li v-for="(project, index) in projectCount">
          <div class="project-circle"
          @click="projectSwitch(index)"
          :class="{'active': activeItemId === index}">
          </div>
        </li>
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
import Project0 from './Project0.vue';
import Project1 from './Project1.vue';
import Project2 from './Project2.vue';
import Project3 from './Project3.vue';
import Project4 from './Project4.vue';
import Project5 from './Project5.vue';
import Project6 from './Project6.vue';
import Project7 from './Project7.vue';
import Project8 from './Project8.vue';
import Project9 from './Project9.vue';
import Project10 from './Project10.vue';

export default {
  props: ['data'],
  components: {
    appProject0: Project0,
    appProject1: Project1,
    appProject2: Project2,
    appProject3: Project3,
    appProject4: Project4,
    appProject5: Project5,
    appProject6: Project6,
    appProject7: Project7,
    appProject8: Project8,
    appProject9: Project9,
    appProject10: Project10,
  },
  data: function() {
    return {
      pagetitle: "Aktuella Projekt",
      selectedComponent: 'appProject0',
      selectedIndex: '0',
      projectCount: '',
      activeItemId: '',
      activeLiIndex: null,
      number: 0,
      projectAttr: [{
        name: '',
        size: '',
        commits: '',
        hours: '',
        profiles: ''
      }]
    }
  },
  created: function() {
    this.projectSwitch(0);
  },
  mounted() {
    this.projectCount = this.data.projects.length;
    this.activeItemId = 0;
  },
  methods: {
    projectSwitch: function(indexNumber) {
      this.projectAttr.name= this.data.projects[indexNumber].name;
      this.numbvalue = indexNumber;
      this.selectedComponent = 'appProject' + indexNumber;
      this.selectedIndex = indexNumber;
      this.activeItemId = indexNumber;

      let project = this.data.projects[indexNumber],
      fetchMembers = project.teamMembers;

      let membArr = [],
        hourArr = [],
        commitArr = [],
        hourSum = 0,
        commitSum = 0;

      fetchMembers.map(function(staff) {
        let memName = staff.name.toLowerCase();
        let memHours = parseInt(staff.hours);
        let memCommits = parseInt(staff.commits);
        membArr.push(memName);
        hourArr.push(memHours);
        commitArr.push(memCommits);
      });

      // Calculates the complete sum of Commits & Hours

      for (let i = 0; i < hourArr.length; i++) {
        hourSum += hourArr[i];
      }

      for (let i = 0; i < commitArr.length; i++) {
        commitSum += commitArr[i];
      }

      this.projectAttr.size = membArr.length;
      this.projectAttr.hours = hourSum;
      this.projectAttr.commits = commitSum;

      let team = validateStaff(membArr);

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

      let imgPaths = [];

      for (let i = 0; i < team.length; i++) {
        imgPaths.push('src/assets/images/staff/' + team[i] + '.png');
      }
      this.projectAttr.profiles = imgPaths;
    }
  }
}
</script>
