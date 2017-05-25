<template>
<div class="views">
  <section class="hero current-projects-page-wrapper is-fullwidth">
    <div class="hero-body component-body component-head-spacer">

      <div class="columns">
        <div class="column">
          <div class="head-spacer"></div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-offset-1">
          <p class="headline current-info-headline">{{pagetitle}}</p>
        </div>
      </div>

      <div class="columns">
        <div class="column is-hidden-mobile">
          <div class="current-desktop-spacer"></div>
        </div>
      </div>

      <!-- HERE STARTS MOBILE -->
      <current-projects-mobile></current-projects-mobile>
      <!-- HERE ENDS MOBILE -->

      <!-- HERE STARTS DESKTOP -->

      <div class="columns is-hidden-mobile is-vcentered">
        <div class="column is-offset-1 is-10">
          <div class="tile is-ancestor">

            <div class="tile is-parent is-7">
              <article class="tile is-child box is-danger">
                <p class="title"> .</p>
              </article>
            </div>
            <div class="tile is-parent is-hidden-mobile">
              <section class="tile is-child title-wrapper has-text-right">
                <div class="projekt-title-box">
                  <p class="subtitle project-values under-lined">{{valueCommits}} {{projectObj[0]}} | {{valueHours}} {{projectObj[1]}}</p>
                  <p class="title project-title">{{projectname}}</p>
                </div>
              </section>
            </div>
          </div>
          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <div class="tile is-vertical">
                <article class="tile is-child notification is-danger">
                  <p class="title"> 1</p>
                  <p class="title"> .</p>
                </article>

                <div class="tile is-ancestor">

                  <div class="tile is-parent">
                    <!-- TEAM MEMBER 1 -->
                    <article class="tile is-child notification img-box p-color">
                      <div class="color-filter"></div>
                      <div class="pic-filler2 big-vertical" v-bind:style="bgImg2">
                      </div>
                    </article>
                  </div>

                  <div class="tile is-vertical">
                    <div class="tile is-parent">
                      <article class="tile is-child notification is-danger">
                        <p class="title">3</p>
                      </article>
                    </div>
                    <div class="tile is-vertical">
                      <div class="tile is-parent">
                        <article class="tile is-child notification is-danger">
                          <p class="title"> .</p>
                          <p class="subtitle">sss</p>
                        </article>
                      </div>
                      <div class="tile is-parent">
                        <article class="tile is-child notification is-danger">
                          <p class="title">hss</p>
                          <p class="subtitle">pic goes here</p>
                        </article>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div class="tile">
              <div class="tile is-parent is-vertical">
                <article class="tile is-child notification img-box">
                  <!-- TEAM MEMBER 1 -->
                  <div class="color-filter"></div>
                  <div class="pic-filler1 small-horizonal" v-bind:style="bgImg1">
                  </div>
                </article>
                <article class="tile is-child notification img-box p-color">
                  <div class="color-filter"></div>
                  <div class="pic-filler2 big-vertical" v-bind:style="bgImg3">
                  </div>
                </article>
              </div>
              <div class="tile is-parent is-vertical">
                <article class="tile is-child notification p-color">
                </article>
                <article class="tile is-child notification b-color">
                </article>
                <article class="tile is-child notification is-info">
                  <p class="title">Middle tile</p>
                  <p class="title">Middle tile</p>
                  <p class="title">Middle tile</p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>


      <!-- HERE ENDS DESKTOP -->

    </div>
    <div class="hero-foot is-vcentered">
      <div class="columns">
        <div class="column has-text-left is-hidden-desktop">
          <img class="footer-icon-mobile" src="../assets/images/oh_logo.png" alt="">
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import CurrentProjectsMobile from './subpages/CurrentProjectsMobile.vue';
export default {
  props: ['data'],
  data: function() {
    return {
      pagetitle: "Aktuella Projekt",
      projectname: "",
      projectObj: ["Commits", "Timmar"],
      valueCommits: "178",
      valueHours: '',
      team: '',
      profileImages: ''
    }
  },
  components: {
    CurrentProjectsMobile
  },
  created: function(){
    this.setupProject();
    this.generateImages();
  },
  mounted() {
    // console.log(this.data.projects[0].teamMembers[0].name);
    // console.log(this.data.projects.length)
  },
  computed: {
    bgImg1: function() {
      return {
        backgroundImage: 'url('+this.profileImages[0]+')',
      }
    },
    bgImg2: function() {
      return {
        backgroundImage: 'url('+this.profileImages[1]+')',
      }
    },
    bgImg3: function() {
      return {
        backgroundImage: 'url('+this.profileImages[2]+')',
      }
    },
    bgImg4: function() {
      return {
        backgroundImage: 'url('+this.profileImages[3]+')',
      }
    },
    bgImg5: function() {
      return {
        backgroundImage: 'url('+this.profileImages[4]+')',
      }
    },
    bgImg6: function() {
      return {
        backgroundImage: 'url('+this.profileImages[5]+')',
      }
    },
    bgImg7: function() {
      return {
        backgroundImage: 'url('+this.profileImages[6]+')',
      }
    },
    bgImg8: function() {
      return {
        backgroundImage: 'url('+this.profileImages[7]+')',
      }
    },
    bgImg9: function() {
      return {
        backgroundImage: 'url('+this.profileImages[8]+')',
      }
    },
    bgImg10: function() {
      return {
        backgroundImage: 'url('+this.profileImages[9]+')',
      }
    },
  },
  methods: {
    setupProject: function(){
      let selectedProj = this.data.projects[1];
      let projMembers = selectedProj.teamMembers;
      this.projectname = selectedProj.name;

      let membArr = [];
      let hourArr = [];
      let commitArr = [];
      let hourSum = 0;
      let commitSum = 0;

      projMembers.map(function(teamie){
        let memName = teamie.name.toLowerCase();
        let memHours = parseInt(teamie.hours);
        let memCommits = parseInt(teamie.commits);
        membArr.push(memName);
        hourArr.push(memHours);
        commitArr.push(memCommits);
      });

      for (let i = 0; i < hourArr.length; i++){
          hourSum += hourArr[i];
      }

      for (let i = 0; i < commitArr.length; i++){
          commitSum += commitArr[i];
      }

      this.valueHours = hourSum;
      this.valueCommits = commitSum;
      this.team = validateStaff(membArr);

      function validateStaff(projMembers){
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
    generateImages: function(){
      let team = this.team;
      let imgPaths = [];

      for(let i = 0; i < team.length; i++){
          imgPaths.push('src/assets/images/staff/' + team[i] + '.png');
      }
      // team.map(function(memb){
      // });

      console.log(this.team);
      console.log(imgPaths);
      this.profileImages = imgPaths;
    },
  }
}
</script>
