<template>
  <div class="home">
    <PreviewBlock title="Welcome to Your Vue.js + TypeScript App" text="describe" />

    <Search @input="checkFunc"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PreviewBlock from '@/components/PreviewBlock.vue';
import Search from '@/components/Search.vue';

@Component({
  components: {
    PreviewBlock,
    Search,
  },
})
export default class Home extends Vue {
  private checkFunc(value: any) {
    console.log(value);
  }
}
</script>
