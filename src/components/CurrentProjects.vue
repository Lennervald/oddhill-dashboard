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

      <div class="columns is-mobile">
        <div class="column is-offset-1 is-10 is-hidden-tablet is-hidden-desktop">
          <div class="columns ">
            <div class="column">
              <article class="proj-mobile-headline">
                <p class="subtitle project-values under-lined">{{valueCommits}} {{projectObj[0]}} | {{valueHours}} {{projectObj[1]}}</p>
                <p class="title project-title">{{projectname}}</p>
              </article>
            </div>
            <div class="columns is-mobile">
              <div class="column is-4">
                <figure class="image is-square">
                  <img class="" src="../assets/images/staff/jens_l.png" alt="">
                </figure>
              </div>
              <div class="column is-4">
                <figure class="image is-square">
                  <img class="" src="../assets/images/staff/jens_g.png" alt="">
                </figure>
              </div>
              <div class="column is-4">
                <figure class="image is-square">
                  <img class="" src="../assets/images/staff/ola.png" alt="">
                </figure>
              </div>

            </div>
            <div class="columns is-mobile">
              <div class="column is-4">
                <div class="mobile-color-breaker b-color">
                </div>
              </div>
              <div class="column">
                <div class="mobile-color-breaker p-color">
                </div>
              </div>
            </div>

            <div class="columns is-mobile">
              <div class="column is-4">
                <figure class="image is-square">
                  <img class="" src="../assets/images/staff/magnus.png" alt="">
                </figure>
              </div>
              <div class="column is-4">
                <figure class="image is-square">
                  <img class="" src="../assets/images/staff/olof.png" alt="">
                </figure>
              </div>
              <div class="column is-4">
                <figure class="image is-square">
                  <img class="" src="../assets/images/staff/anton.png" alt="">
                </figure>
              </div>
            </div>
            <div class="columns is-mobile">
              <div class="column is-4">
                <figure class="image is-square">
                  <img class="" src="../assets/images/staff/mads.png" alt="">
                </figure>
              </div>
              <div class="column is-4">
                <figure class="image is-square">
                  <img class="" src="../assets/images/staff/hannele.png" alt="">
                </figure>
              </div>
              <div class="column is-4">
                <figure class="image is-square">
                  <img class="" src="../assets/images/staff/mohamed.png" alt="">
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>




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
                    <article class="tile is-child notification img-box p-color">
                      <!-- <p class="title">2</p> -->
                      <div class="color-filter"></div>
                      <div class="pic-filler2 big-vertical">
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
                  <div class="color-filter"></div>
                  <div class="pic-filler1 small-horizonal">
                  </div>
                </article>
                <article class="tile  is-child notification">
                  <p class="title">...tiles</p>
                  <p class="subtitle">Bottom tile</p>
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

export default {
    data: function() {
        return {
					pagetitle: "Aktuella Projekt",
					projectname: "Malmö Stadsteater",
					projectObj: ["Commits", "Timmar"],
					valueCommits: "178",
					valueHours: "178",
        }
    }
}
</script>
