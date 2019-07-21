<template>
  <div class="accordion container">
    <Search @input="changeSearchValue" />
    <h2 class="accordion__title">{{title}}</h2>
    <div class="accordion__list-wrap">
      <ul class="accordion__list">
        <li
          class="accordion__list-item"
          v-for="(item, index) in filterItems"
          :key="`accordion-item-${index}`"
        >
          <Item :data="item" />
        </li>
      </ul>

      <div class="accordion__list-loading" :class="{'accordion__list-loading--start': isSearching}">
            <svg class="responsive-icon accordion__list-loading-icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>reload-2</title><path d="M5 19.551V21a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2H6.262c1.53 1.236 3.641 2 5.738 2a8 8 0 0 0 8-8 1 1 0 0 1 2 0c0 5.523-4.477 10-10 10-2.549 0-5.107-.916-7-2.449zM17.738 6C16.208 4.764 14.097 4 12 4a8 8 0 0 0-8 8 1 1 0 0 1-2 0C2 6.477 6.477 2 12 2c2.549 0 5.107.916 7 2.449V3a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h1.738z" fill="#BDBDBD" fill-rule="nonzero"/></svg>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Item from './Item.vue';
import Search from '@/components/Search.vue';

@Component({
  components: {
    Item,
    Search,
  },
})
export default class List extends Vue {
  @Prop({ default: 'title' }) public title!: string;
  @Prop() public listItems!: object[];

  private searchValue: string = '';
  private items: object[] = this.listItems;
  private isSearching: boolean = false;

  get filterItems() {
    if (this.searchValue === '') {
      this.isSearching = false;
      return this.items;
    }
    this.isSearching = true;

    const res: object[] =
      this.searchValue === ''
        ? this.items
        : this.items.filter(({ title }: any) => {
            return title.toLowerCase().includes(this.searchValue.toLowerCase());
          });

    // setTimeout(() => {
    //   this.isSearching = false;
    // }, 1500);

    return res;
  }
  private changeSearchValue(value: string) {
    this.searchValue = value;
  }
}
</script>

<style lang="scss" scoped>
.accordion {
    margin-bottom: 10vw;

  &__title {
    color: $main-color;
    font-size: 2rem;
    line-height: 1.2;
    text-transform: uppercase;
  }

  &__list-wrap {
      position: relative;
  }

  &__list {
    margin: 0;
    padding: 0;
    list-style: none;

    border-radius: 10px;
    overflow: hidden;
  }

  &__list-loading {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      min-height: 20vh;
      height: 100%;
      padding: calc(20px + $block-space);
      display: flex;
      justify-content:center;
      align-items: center;
      border-radius: 10px;

      background: rgba(0, 0, 0, 0.25);
      
      opacity: 0;
      visibility: hidden;

      &--start {
          opacity: 1;
          visibility: visible;
      }

      &-icon {
         animation: circle 1.2s linear infinite;
      }
  }
}
</style>


