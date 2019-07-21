<template>
  <div class="home">
    <PreviewBlock title="Grokking Algorithms" :text="previewText" />
    <AccrodionList :listItems="list" title="Table of content"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PreviewBlock from '@/components/PreviewBlock.vue';
import AccrodionList from '@/components/accordion/List.vue';

@Component({
  components: {
    PreviewBlock,
    AccrodionList,
  },
})
export default class Home extends Vue {
  private previewText: string = `tasks with solution from book
   <a href="https://www.manning.com/books/grokking-algorithms" style="display: inline-flex">Grokking Algorithms</a>`;
  private list: object[] = [
    {
      type: 'link',
      path: '/',
      title: 'Chapter 1. Introduction to Algorithms',
    },
    {
      type: 'link',
      path: '/',
      title: 'Chapter 2. Selection Sort',
    },
    {
      type: 'link',
      path: '/',
      title: 'Chapter 3. Recursion',
    },
    {
      type: 'link',
      path: '/',
      title: 'Chapter 4. Quicksort',
    },
    {
      type: 'link',
      path: '/',
      title: 'Chapter 5. Hash Tables',
    },
    // {
    //   type: 'button',
    //   title: '1. Binary search',
    //   content: 'const a = 5; console.log(a + 5)',
    // },
  ];

}
</script>
