<template>
  <div>
    <Graph />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ReactGraph from "../../react_app/ReactGraph";
import { applyPureReactInVue } from "veaury";

@Options({
  components: {
    Graph: applyPureReactInVue(ReactGraph),
  },
})
export default class GraphEditor extends Vue {}
</script>
<style scoped lang="scss"></style>
