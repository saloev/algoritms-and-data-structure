<template>
  <div class="search-block">
    <label for="site-book-chapter" class="visually-hidden">{{ label }}</label>
    <input
      placeholder="search..."
      v-model="mutableValue"
      type="search"
      id="site-book-chapter"
      name="search"
      class="search-block__input"
      aria-label="Search book chapters"
      @change="change($event.target.value)"
      @input="input($event.target.value)"

    />
    <button class="btn-reset search-block__btn">
      <svg
        width="41"
        height="41"
        viewBox="0 0 41 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.4 30.7341C19.8962 30.7341 23.0744 29.4946 25.5535 27.3969L36.6775 38.521C36.9318 38.7752 37.2496 38.9024 37.5993 38.9024C37.9489 38.9024 38.2667 38.7752 38.521 38.521C39.0295 38.0124 39.0295 37.1861 38.521 36.6776L27.3969 25.5535C29.4628 23.0744 30.7341 19.8644 30.7341 16.4C30.7341 8.48607 24.314 2.06592 16.4 2.06592C8.51786 2.06592 2.06592 8.51786 2.06592 16.4C2.06592 24.314 8.51786 30.7341 16.4 30.7341ZM16.4 4.67212C22.8837 4.67212 28.1279 9.94809 28.1279 16.4C28.1279 22.8837 22.8837 28.1279 16.4 28.1279C9.91631 28.1279 4.67212 22.852 4.67212 16.4C4.67212 9.94809 9.94809 4.67212 16.4 4.67212Z"
          fill="#BDBDBD"
        />
      </svg>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

@Component
export default class Search extends Vue {
  @Prop({ default: 'search' }) private label!: string;
  @Prop({ default: '' }) private value!: string;

  private mutableValue: string = this.value;

  @Emit()
  public input(value: string) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(value);
      }, 100);
    });
  }

  @Emit()
  public change(value: string) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(value);
      }, 100);
    });
  }
}
</script>
<style scoped lang="scss">
.search-block {
    position: relative;
  &__input {
    width: 100%;
    padding: $block-space;
    padding-left: 80px;
    background: $main-light-grey;

    -moz-appearance: none; /* older firefox */
    -webkit-appearance: none; /* safari, chrome, edge and ie mobile */
    appearance: none;

    font-family: inherit;
    font-size: 1rem;
    border: none;
    border-radius: 10px;
    color: #fff;

    &::placeholder {
        color: $main-color;
    }
  }

  &__btn {
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translateY(-50%)
  }
}
</style>
