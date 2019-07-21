<template>
  <div class="home">
    <PreviewBlock title="Welcome to Your Vue.js + TypeScript App" text="describe" />

    <!-- <Search @input="checkFunc" /> -->
    <!-- <CodeBlock code="var a = 5" /> -->
    <AccrodionList :listItems="list" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PreviewBlock from '@/components/PreviewBlock.vue';
import Search from '@/components/Search.vue';
import CodeBlock from '@/components/CodeBlock.vue';
import AccrodionList from '@/components/accordion/List.vue';

@Component({
  components: {
    PreviewBlock,
    Search,
    CodeBlock,
    AccrodionList,
  },
})
export default class Home extends Vue {
  private list: object[] = [
    {
      type: 'link',
      path: '/',
      title: '1. Binary search',
    },
    {
      type: 'button',
      title: '1. Binary search',
      content: 'const a = 5; console.log(a + 5)',
    },
  ];

  private checkFunc(value: any) {
    console.log(value);
  }
}
</script>
