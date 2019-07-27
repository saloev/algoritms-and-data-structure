<template>
  <div class="container">
    <!-- <pre>
        <code :class="`language-${language}`">{{ code }}</code>
    </pre> -->

    <div v-html="code">

    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// NOTE decided to use repl.it
// import 'prismjs';
// import 'prismjs/themes/prism.css';


@Component
export default class CodeBlock extends Vue {
    // @Prop({default: 'js'}) public language!: string;
    @Prop() public code!: string;
}
</script>

<style lang="scss">
@import '@/scss/_prism-drakula.scss';

</style>


