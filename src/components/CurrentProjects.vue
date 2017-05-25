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
              <article class="tile is-child notification img-box">
                <p class="title">.</p>
                <!-- ILLUSTRATIVE IMAGE 1 -->
                <div class="illustrative-filler1" v-bind:style="illustrative1">
                <div class="color-filter"></div>
                </div>
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
                <article class="tile is-child notification img-box">
                  <p class="title">.</p>
                  <!-- TEAM MEMBER 8 -->
                  <div class="pic-filler8 big-vertical " v-bind:style="bgImg8">
                  <div class="color-filter"></div>
                  </div>
                </article>

                <div class="tile is-ancestor">

                  <div class="tile is-parent is-4">
                    <!-- TEAM MEMBER 3 -->
                    <article class="tile is-child notification img-box">
                      <div class="color-filter"></div>
                      <div class="pic-filler3 big-vertical" v-bind:style="bgImg3">
                      </div>
                    </article>
                  </div>

                  <div class="tile is-vertical">

                    <div class="tile is-vertical">
                      <div class="tile is-parent">
                        <article class="tile is-child notification img-box">
                          <div class="height-div">
                          <!-- TEAM MEMBER 2 -->
                          <div class="pic-filler2" v-bind:style="bgImg2">

                            <div class="color-filter"></div>
                          </div>
                          </div>
                        </article>
                      </div>

                      <div class="tile">
                        <div class="tile is-parent">
                          <article class="tile is-child notification img-box">
                            <p class="padder">.</p>
                            <!-- TEAM MEMBER 4 -->
                            <div class="pic-filler4 big-vertical " v-bind:style="bgImg4">
                            <div class="color-filter"></div>
                            </div>
                          </article>
                        </div>

                        <div class="tile is-parent">
                          <article class="tile is-child notification img-box">
                            <p class="title">.</p>
                            <p class="title">.</p>
                            <!-- TEAM MEMBER 5 -->
                            <div class="pic-filler5" v-bind:style="bgImg5">
                              <div class="color-filter"></div>
                            </div>
                          </article>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tile">
              <div class="tile is-parent is-vertical">
                <article class="tile is-child notification img-box">
                  <!-- TEAM MEMBER 7 -->
                  <div class="pic-filler7 big-vertical " v-bind:style="bgImg7">
                  <div class="color-filter"></div>
                  </div>
                </article>

                <article class="tile is-child notification img-box">
                  <!-- TEAM MEMBER 1 -->
                  <div class="pic-filler1 small-horizonal" v-bind:style="bgImg1">
                  <div class="color-filter"></div>
                  </div>
                </article>

              </div>
              <div class="tile is-parent is-vertical">
                <article class="tile is-child col-filter1">
                </article>
                <article class="tile is-child img-box">
                    <!-- TEAM MEMBER 9 -->
                    <div class="color-filter"></div>
                    <div class="pic-filler9" v-bind:style="bgImg9">
                  </div>
                </article>
                <article class="tile is-child notification img-box">
                  <p class="title">.</p>
                  <p class="title">.</p>
                  <p class="title">.</p>
                    <!-- TEAM MEMBER 6 -->
                    <div class="pic-filler6" v-bind:style="bgImg6">
                      <div class="color-filter"></div>
                    </div>
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
      profileImages: '',
      currentProj: ''
    }
  },
  components: {
    CurrentProjectsMobile
  },
  created: function() {
    this.chosenProject();
    this.setupProject();
    this.generateImages();
  },
  mounted() {
    // console.log(this.data.projects[0].teamMembers[0].name);
    // console.log(this.data.projects.length)
  },
  methods: {
    chosenProject: function() {
      this.currentProj = this.data.projects[1];
    },
    setupProject: function() {
      let selectedProj = this.currentProj;
      let projMembers = selectedProj.teamMembers;
      this.projectname = selectedProj.name;

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

      this.valueHours = hourSum;
      this.valueCommits = commitSum;
      this.team = validateStaff(membArr);

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
    generateImages: function() {
      let team = this.team;
      let imgPaths = [];

      for (let i = 0; i < team.length; i++) {
        imgPaths.push('src/assets/images/staff/' + team[i] + '.png');
      }
      this.profileImages = imgPaths;
    },
  },
  computed: {
    bgImg1: function() {
      return {
        backgroundImage: 'url(' + this.profileImages[0] + ')',
      }
    },
    bgImg2: function() {
      return {
        backgroundImage: 'url(' + this.profileImages[1] + ')',
      }
    },
    bgImg3: function() {
      return {
        backgroundImage: 'url(' + this.profileImages[2] + ')',
      }
    },
    bgImg4: function() {
      return {
        backgroundImage: 'url(' + this.profileImages[3] + ')',
      }
    },
    bgImg5: function() {
      return {
        backgroundImage: 'url(' + this.profileImages[4] + ')',
      }
    },
    bgImg6: function() {
      return {
        backgroundImage: 'url(' + this.profileImages[5] + ')',
      }
    },
    bgImg7: function() {
      return {
        backgroundImage: 'url(' + this.profileImages[6] + ')',
      }
    },
    bgImg8: function() {
      return {
        backgroundImage: 'url(' + this.profileImages[7] + ')',
      }
    },
    bgImg9: function() {
      return {
        backgroundImage: 'url(' + this.profileImages[8] + ')',
      }
    },
    bgImg10: function() {
      return {
        backgroundImage: 'url(' + this.profileImages[9] + ')',
      }
    },

  }
}
</script>
