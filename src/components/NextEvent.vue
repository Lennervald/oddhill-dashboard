<template>
<div class="views">

  <article class="color-div-wrapper">
    <div class="moving-color-div col-div-next-event"></div>
  </article>

  <section class="hero next-event-page-wrapper is-fullwidth">
    <div class="hero-head component-head-spacer">
      <div class="columns">
        <div class="column is-offset-1">
          <p class="headline">{{title}}</p>
        </div>
      </div>
    </div>

    <div class="hero-body component-body">
      <div class="columns">
        <div class="column is-hidden-mobile">
          <div class="desktop-spacer"></div>
        </div>
        </div>
        <div class="columns">
        <div class="column is-offset-2 is-6-desktop is-6-tablet">
          <p class="mega-title">{{eventtitle}}</p>
          <div class="yellow-liner">
          </div>
        </div>
      </div>
      <div class="subjects-div">
        <div class="tablet-spacer"></div>
        <div class="columns">
          <div class="column is-offset-3">
            <p class="event-subjects">{{eventobjects[0]}} {{time}}</p>
          </div>
        </div>
        <div class="columns">
          <div class="column is-offset-4">
            <p class="event-subjects">{{eventobjects[1]}} {{address}}</p>
          </div>
        </div>
        <div class="columns">
          <div class="column is-offset-5 is-5">
            <p class="event-subjects">{{eventobjects[2]}} {{infotext}}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="hero-foot">
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
      title: "Nästa Event",
      eventtitle: "Utvecklardag",
      eventobjects: ["När?", "Var?", "Info:"],
      address: "Odd Hill, Humlegatan 4, Malmö",
      time: "Fredagen den 26 Maj",
      timespan: "Kl 9-17",
      infotext: "Ps. Följ #utvecklardag på Twitter och Instagram."
    }
  }
}
</script>
