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
        :selectedNumber="selectedIndex">
    </component>
  </transition>
    <div class="carousel">
      <div class="block">
        <li v-for="(project, index) in projectCount">
          <div class="project-circle" @click="selectSwitch(index)" :class="{'active': activeItemId === index}">
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
      activeLiIndex: null
    }
  },
  mounted() {
    this.projectCount = this.data.projects.length;
    this.activeItemId = 0;
  },
  methods: {
    selectSwitch: function(indexNumber) {
      this.selectedComponent = 'appProject' + indexNumber;
      this.selectedIndex = indexNumber;
      this.activeItemId = indexNumber;
    }
  }
}
</script>
