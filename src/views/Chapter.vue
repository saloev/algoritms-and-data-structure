<template>
  <div class="chapter">
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
export default class Chapter extends Vue {
  private previewText: string = `tasks with solution from book
   <a href="https://www.manning.com/books/grokking-algorithms" style="display: inline-flex">Grokking Algorithms</a>`;
  private list: object[] = [
    {
      type: 'button',
      title: '1. Binary search',
      content: '<iframe height="400px" width="100%" src="https://repl.it/@saloev/binary-search?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>',
    },

  ];
}
</script>
