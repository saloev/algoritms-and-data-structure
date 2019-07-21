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
      content: `/**
 * middle index of given numbers
 * @first - from
 * @second - to
 * return number
 */
function middle(first: number, second: number): number {
  return Math.ceil((second - first) / 2) + first;
}

/**
 * index of element in array
 * @arr - Array
 * @x - element
 * return number | null
 */
function binarySearch(arr: Array<number>, x: number): number | null {
 const length: number = arr.length;
 // if array is empty or x not valid return null
 if (!length || (x !== 0 && !x)) return null;

// retunr last index of
 const lastIndex: number = length - 1;
 const middleIndex: number = middle(0, lastIndex);

  function iter(firstIndex: number, middleIndex: number, lastIndex: number): number | null {
    const elemInMiddle = arr[middleIndex];

    // we found element and retunr index of element
    if (x === elemInMiddle) return middleIndex;

    if (firstIndex === lastIndex) return null;

    // element in second half
    if (x > elemInMiddle) {
      return iter(middleIndex + 1, middle(middleIndex + 1, lastIndex), lastIndex);
    }

    // element in first half
    if (x < elemInMiddle) {
      return iter(firstIndex, middle(firstIndex, middleIndex - 1), middleIndex - 1);
    }

    return null;
  }

  return iter(0, middleIndex, lastIndex);
}`,
    },
  ];
}
</script>
