<template>
  <div class="home">
    <PreviewBlock title="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PreviewBlock from '@/components/PreviewBlock.vue'; // @ is an alias to /src

@Component({
  components: {
    PreviewBlock,
  },
})
export default class Home extends Vue {}
</script>
