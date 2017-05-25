<template>
<!-- HERE STARTS MOBILE -->
<div>
<div class="columns is-mobile">
  <div class="column is-offset-1 is-10 is-hidden-tablet is-hidden-desktop">
    <div class="columns">
      <div class="column">
        <article class="proj-mobile-headline">
          <h1>work in progress</h1>
          <p class="subtitle project-values under-lined">{{valueCommits}} {{projectObj[0]}} | {{valueHours}} {{projectObj[1]}}</p>
          <p class="title project-title">{{projectname}}</p>
        </article>
      </div>
      <div class="columns is-mobile">
        <div class="column is-4">
          <figure class="image is-square">
            <img class="" src="../../assets/images/staff/jens_l.png" alt="">
          </figure>
        </div>
        <div class="column is-4">
          <figure class="image is-square">
            <img class="" src="../../assets/images/staff/jens_g.png" alt="">
          </figure>
        </div>
        <div class="column is-4">
          <figure class="image is-square">
            <img class="" src="../../assets/images/staff/ola.png" alt="">
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
            <img class="" src="../../assets/images/staff/magnus.png" alt="">
          </figure>
        </div>
        <div class="column is-4">
          <figure class="image is-square">
            <img class="" src="../../assets/images/staff/olof.png" alt="">
          </figure>
        </div>
        <div class="column is-4">
          <figure class="image is-square">
            <img class="" src="../../assets/images/staff/anton.png" alt="">
          </figure>
        </div>
      </div>
      <div class="columns is-mobile">
        <div class="column is-4">
          <figure class="image is-square">
            <img class="" src="../../assets/images/staff/mads.png" alt="">
          </figure>
        </div>
        <div class="column is-4">
          <figure class="image is-square">
            <img class="" src="../../assets/images/staff/hannele.png" alt="">
          </figure>
        </div>
        <div class="column is-4">
          <figure class="image is-square">
            <img class="" src="../../assets/images/staff/mohamed.png" alt="">
          </figure>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<!-- HERE ENDS MOBILE -->
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
