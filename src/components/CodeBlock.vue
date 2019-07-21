<template>
  <div class="container">
    <pre>
        <code :class="`language-${language}`">{{ code }}</code>
    </pre>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import 'prismjs';
import '@/scss/_prism-drakula.scss';

@Component
export default class CodeBlock extends Vue {
    @Prop({default: 'js'}) public language!: string;
    @Prop() public code!: string;
}
</script>

