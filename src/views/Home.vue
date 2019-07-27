<template>
  <div class="home">
    <PreviewBlock title="Grokking Algorithms" :text="previewText" />
    <AccrodionList :listItems="list" title="Table of content" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';

import PreviewBlock from '@/components/PreviewBlock.vue';
import AccrodionList from '@/components/accordion/List.vue';

import binarySearch from '@/tasks/chapter1/binarySearch.ts';

@Component({
  components: {
    PreviewBlock,
    AccrodionList,
  },
})
export default class Home extends Vue {
  private previewText: string = `tasks with solution from book
   <a href="https://www.manning.com/books/grokking-algorithms" style="display: inline-flex">Grokking Algorithms</a>`;

  private list: any = [
    {
      type: 'link',
      title: 'Chapter 1. Introduction to Algorithms',
      id: 1,
    },
    {
      type: 'link',
      title: 'Chapter 2. Selection Sort',
      id: 2,
    },
  ];

  private codee: any = binarySearch;

  private mounted() {
    console.log(this.list);
  }
}
</script>
