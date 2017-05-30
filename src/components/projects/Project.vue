<template>
  <div class="hero-body project-body is-vcentered">
    <!-- <h1>HEY {{selectedId}}</h1> -->
    <div class="columns ">
      <div class="column is-offset-1 is-10">
        <div class="columns">
          <div class="column is-6">
          </div>
          <div class="column">
            <section class="title-wrapper has-text-right">
              <p class="subtitle project-values under-lined">{{projectCommits}} {{projectObj[0]}} | {{projectHours}} {{projectObj[1]}}</p>
              <p class="title project-title">{{projectName}}</p>
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
  props: ['projectdata'],
  data: function() {
    return {
      projectObj: ["Commits", "Timmar"],
      projectName: this.projectdata.name,
      projectCommits: this.projectdata.commits,
      projectHours: this.projectdata.hours,
      projectTeam: this.projectdata.team
    }
  },
  created: function() {
    this.generateImages();
  },
  methods: {
    generateImages: function() {
      let team = this.projectTeam;
      let imgPaths = [];

      for (let i = 0; i < team.length; i++) {
        imgPaths.push('src/assets/images/staff/' + team[i] + '.png');
      }
      this.profileImages = imgPaths;
    }
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
