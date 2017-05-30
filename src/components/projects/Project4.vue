<template>
    <div class="hero-body project-body is-vcentered">
      <div class="columns ">
        <div class="column is-offset-1 is-10">
          <div class="columns">
            <div class="column is-6">
            </div>
            <div class="column">
              <section class="title-wrapper has-text-right">
                <p class="subtitle project-values under-lined">{{valueCommits}} {{projectObj[0]}} | {{valueHours}} {{projectObj[1]}}</p>
                <p class="title project-title">{{projectname}}</p>
              </section>
            </div>
          </div>



          <!-- HERE STARTS DESKTOP -->
          <!-- <div class="tile is-hidden-mobile"> -->
          <div class="tile">
            <div class="tile is-ancestor">
              <div class="tile is-parent">
                <div class="tile is-vertical">
                  <article class="tile is-child notification img-box row-height1">
                    <!-- TEAM MEMBER 4 -->
                    <div class="pic-filler4" v-bind:style="bgImg4">
                      <div class="color-filter"></div>
                    </div>
                  </article>
                  <div class="tile is-ancestor">
                    <div class="tile is-parent is-4">
                      <!-- TEAM MEMBER 3 -->
                      <article class="tile is-child notification img-box">
                        <div class="color-filter"></div>
                        <div class="pic-filler3" v-bind:style="bgImg3">
                        </div>
                      </article>
                    </div>
                    <div class="tile is-vertical">
                      <div class="tile is-vertical">
                        <div class="tile is-parent">
                          <article class="tile is-child notification img-box row-height2">
                            <!-- TEAM MEMBER 2 -->
                            <div class="pic-filler2" v-bind:style="bgImg2">
                              <div class="color-filter"></div>
                            </div>
                          </article>
                        </div>
                        <div class="tile">
                          <div class="tile is-parent">
                            <article class="tile is-child notification img-box">
                              <!-- TEAM MEMBER 8 -->
                              <div class="pic-filler8" v-bind:style="bgImg8">
                                <div class="color-filter"></div>
                              </div>
                            </article>
                          </div>
                          <div class="tile is-parent">
                            <article class="tile is-child notification img-box row-height3">
                              <!-- TEAM MEMBER 5 -->
                              <div class="pic-filler5" v-bind:style="bgImg5">
                                <div class="color-filter col-filter2"></div>
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
                    <!-- TEAMMEMEBER 7  + ILLUSTRATIVE IMAGE 2 -->
                    <div class="illustrative-filler2 pic-filler7">
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
                    <div class="pic-filler9" v-bind:style="bgImg9">
                      <div class="color-filter"></div>
                    </div>
                  </article>
                  <article class="tile is-child notification img-box row-height4">
                    <!-- TEAM MEMBER 6 -->
                    <div class="pic-filler6" v-bind:style="bgImg6">
                      <div class="color-filter col-filter1"></div>
                    </div>
                  </article>
                </div>

              </div>
            </div>
          </div>
          <!-- HERE ENDS DESKTOP -->

        </div>
      </div>
    </div>
</template>

<script>

export default {
  props: ['data', 'projnumber'],
  data: function() {
    return {
      test: this.projnumber,
      currentProj: '',
      projectname: '',
      projectObj: ['Commits', 'Timmar'],
      valueCommits: '',
      valueHours: '',
      team: '',
      profileImages: '',
    }
  },
  created: function() {
    this.setupProject();
    this.generateImages();
  },
  mounted() {
    // console.log(this.data.projects[0].teamMembers[0].name);
    // console.log(this.data.projects.length)
  },
  methods: {
    setupProject: function() {
      this.currentProj = this.data.projects[this.test];
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
