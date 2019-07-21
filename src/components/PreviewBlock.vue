<template>
  <div class="preview-block">
    <h1 class="preview-block__title">{{ title }}</h1>
    <p class="preview-block__desc" v-html="text"></p>
    <svg
      width="147"
      height="147"
      viewBox="0 0 147 147"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="preview-block__icon"
    >
      <path
        d="M139.359 33.0366L73.4998 98.6809L7.64121 33.0366L0 40.7027L73.4998 113.963L147 40.7027L139.359 33.0366Z"
        fill="#828282"
      /> 
    </svg>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class PreviewBlock extends Vue {
  @Prop() private title!: string;
  @Prop() private text!: string;
}
</script>
<style lang="scss">
.preview-block {
  width: 100%;
  height: 100vh;
  padding: 50px $block-space 0 $block-space;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;

  text-align: center;

  &__title {
    margin-bottom: 10px;
    font-size: 2rem;
    line-height: 1.2;
    color: $main-color;
  }

  &__desc {
    font-size: 0.8rem;
    line-height: 1.2;
    font-style: italic;
    color: $main-dark-grey;

    a {
    color: $blue;
    transition: 0.2s linear color;

      &:hover,
      &:focus {
        color: $sky-blue;
    }
  }
  }

  &__icon {
    margin-top: auto;
    margin-bottom: 50px;
    height: 10vh;

    animation-duration: .5s;
    animation-name: move-up-down;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
  }
}
</style>
