<template>
<div>
  <div class="hero-body project-body is-vcentered">
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
        <div class="tile">
          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <div class="tile is-vertical">
                <article class="tile is-child notification img-box">
                  <div class="pic-filler4" v-bind:style="bgImg7">
                    <div class="color-filter"></div>
                  </div>
                </article>
                <div class="tile is-ancestor">
                  <div class="tile is-parent is-3">
                    <article class="tile is-child notification img-box">
                      <div class="color-filter"></div>
                      <div class=" pic-filler3">
                      </div>
                    </article>
                  </div>
                  <div class="tile is-vertical">
                    <div class="tile is-vertical">
                      <div class="tile is-parent">
                        <article class="tile is-child notification img-box row-height2">
                          <div class="pic-filler2" v-bind:style="bgImg2">
                            <div class="color-filter"></div>
                          </div>
                        </article>
                      </div>
                      <div class="tile">
                        <div class="tile is-parent">
                          <article class="tile is-child notification img-box">
                            <div class="pic-filler8" v-bind:style="bgImg4">
                              <div class="color-filter"></div>
                            </div>
                          </article>
                        </div>
                        <div class="tile is-parent">
                          <article class="tile is-child notification img-box row-height3">
                            <div class="pic-filler5" v-bind:style="bgImg3">
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
                <article class="tile is-child notification img-box row-height2">
                  <div class="illustrative-filler5 pic-filler7">
                    <div class="color-filter"></div>
                  </div>
                </article>
                <article class="tile is-child notification img-box row-height6">
                  <div class="illustrative-filler5 pic-filler7">
                    <div class="color-filter col-filter1"></div>
                  </div>
                </article>
              </div>
              <div class="tile is-parent is-vertical">
                <article class="tile is-child col-filter1">
                </article>
                <article class="tile is-child img-box">
                  <div class="pic-filler9" v-bind:style="bgImg9">
                    <div class="color-filter"></div>
                  </div>
                </article>
                <article class="tile is-child notification img-box row-height4">
                  <div class="pic-filler6" v-bind:style="bgImg1">
                    <!-- <div class="color-filter col-filter1"></div> -->
                  </div>
                </article>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


</template>

<script>

export default {
  props: ['data', 'selectedNumber', 'templateAttr'],
  data: function() {
    return {
      number: this.selectedNumber,
      projectObj: ['Commits', 'Timmar'],
      projectName: this.templateAttr.name,
      projectCommits: this.templateAttr.commits,
      projectHours: this.templateAttr.hours,
      team: '',
      imgs: this.templateAttr.profiles,
    }
  },
  created: function() {
    // this.generateImages();
  },
  mounted() {
  },
  computed: {
    bgImg1: function() {
      return {
        backgroundImage: 'url(' + this.imgs[0] + ')',
      }
    },
    bgImg2: function() {
      return {
        backgroundImage: 'url(' + this.imgs[1] + ')',
      }
    },
    bgImg3: function() {
      return {
        backgroundImage: 'url(' + this.imgs[2] + ')',
      }
    },
    bgImg4: function() {
      return {
        backgroundImage: 'url(' + this.imgs[3] + ')',
      }
    },
    bgImg5: function() {
      return {
        backgroundImage: 'url(' + this.imgs[4] + ')',
      }
    },
    bgImg6: function() {
      return {
        backgroundImage: 'url(' + this.imgs[5] + ')',
      }
    },
    bgImg7: function() {
      return {
        backgroundImage: 'url(' + this.imgs[6] + ')',
      }
    },
    bgImg8: function() {
      return {
        backgroundImage: 'url(' + this.imgs[7] + ')',
      }
    },
    bgImg9: function() {
      return {
        backgroundImage: 'url(' + this.imgs[8] + ')',
      }
    },
    bgImg10: function() {
      return {
        backgroundImage: 'url(' + this.imgs[9] + ')',
      }
    },
  }
}
</script>
