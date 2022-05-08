<template>
  <div id="app">
    <demo-003 />
  </div>
</template>

<script>
import Demo001 from "./views/demo-001.vue";
import Demo002 from "./views/demo-002.vue";
import Demo003 from "./views/demo-003.vue";

export default {
  name: "App",
  components: {
    Demo001,
    Demo002,
    Demo003,
  },
};
</script>

<style lang="scss">
</style>
