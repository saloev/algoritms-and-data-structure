<template>
  <div class="preview-block">
    <h2 class="preview-block__title">{{ title }}</h2>
    <p class="preview-block__desc">{{ text }}</p>
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
<style scoped lang="scss">

</style>
