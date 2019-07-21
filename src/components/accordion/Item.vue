<template>
  <div class="accordion-item">
    <button
      v-if="data.type === 'button'"
      @click="showContent = !showContent"
      class="btn-reset accordion-item__btn"
    >
      <svg
        class="accordion-item__icon responsive-icon"
        :class="{'accordion-item__icon--reverse': showContent}"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0)">
          <path
            d="M1.03962 15.5051L10 6.57393L18.9604 15.5051L20 14.4621L10 4.49469L1.53994e-06 14.4621L1.03962 15.5051Z"
            fill="#828282"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="20" height="20" fill="white" transform="translate(20 20) rotate(180)" />
          </clipPath>
        </defs>
      </svg>
      <span class="accordion-item__text">{{ data.title }}</span>
    </button>
    <router-link :to="{path: linkTo }" v-else class="accordion-item__link">{{ data.title }}</router-link>

    <div v-if="data.type === 'button' && showContent" class="accordion-item__code-body">
      <CodeBlock :code="data.content" />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import CodeBlock from '@/components/CodeBlock.vue';

@Component({
  components: {
    CodeBlock,
  },
})
export default class List extends Vue {
  @Prop({ default: 'button' }) public type!: string;
  @Prop({ default: '/' }) public linkTo!: string;
  @Prop({ default: 'title' }) public title!: string;
  @Prop({ default: 'content' }) public content!: string;
  @Prop({
    default: {
      type: 'button',
      linkTo: '/',
      title: 'title',
      content: 'content',
    },
  })
  public data!: object;

  public showContent: boolean = false;
}
</script>

<style lang="scss" scoped>
.accordion-item {
  &__icon {
    
    transform: rotate(180deg);

    transition: 0.3s ease-in-out transform, 0.3s ease-in-out color;

    &--reverse {
      transform: rotate(0deg);
    }

    path {
         transition: 0.3s ease-in-out color;

        fill: $accrodion-color;
    }
  }

  &__text {
      padding-left: 15px; 
  }

  &__link {
  }

  &__link,
  &__btn {
    display: block;
    width: 100%;
    padding: $block-space;
    outline: none;

    background: $main-light-grey;

    font-size: 1.5rem;
    line-height: 1.6;
    color: $accrodion-color;
    text-decoration: none;
    text-align: left;

     transition: 0.2s ease-in-out color, 0.2s ease-in-out box-shadow;

    &:hover,
    &:focus {
      color: $hover-color;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);

      .accordion-item__icon {
          path {
              fill: $hover-color;
          }
      }
    }
  }

  &__btn {
      display: flex;
      align-items: center;
  }


  &__code-body {
  }
}
</style>


