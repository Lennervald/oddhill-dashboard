<template>
  <div>
    <div v-if="projectSize < 4">
      <app-template-small :data="data" :templateAttr="templateAttr">
      </app-template-small>
    </div>
    <div v-else-if="projectSize > 3 && projectSize < 7">
      <app-template-medium :data="data" :templateAttr="templateAttr">
      </app-template-medium>
    </div>
    <div v-else>
      <app-template-big :data="data" :templateAttr="templateAttr">
      </app-template-big>
    </div>
  </div>
</template>

<script>
import ProjectTemplateSmall from './ProjectTemplateSmall.vue';
import ProjectTemplateMedium from './ProjectTemplateMedium.vue';
import ProjectTemplateBig from './ProjectTemplateBig.vue';

export default {
  props: ['data', 'selectedNumber','projectAttr'],
  components: {
    appTemplateSmall: ProjectTemplateSmall,
    appTemplateMedium: ProjectTemplateMedium,
    appTemplateBig: ProjectTemplateBig
  },
  data: function() {
    return {
      number: this.selectedNumber,
      projectObj: ['Commits', 'Timmar'],
      projectName: this.projectAttr.name,
      projectSize: this.projectAttr.size,
      projectCommits: this.projectAttr.commits,
      projectHours: this.projectAttr.hours,
      profileImages: this.projectAttr.profiles,
      templateAttr: {
        name: '',
        commits: '',
        hours: ''
      }
    }
  },
  created: function() {
    this.templateAttributes();
  },
  methods: {
    templateAttributes: function() {
      this.templateAttr.name = this.projectAttr.name;
      this.templateAttr.commits = this.projectAttr.commits;
      this.templateAttr.hours = this.projectAttr.hours;
      this.templateAttr.profiles = this.projectAttr.profiles;
    },
  },
}
</script>
