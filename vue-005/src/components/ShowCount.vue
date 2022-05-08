<template>
  <div>
    <h1>{{ x }}</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["x"]),
  },
};
</script>

<style>
</style>