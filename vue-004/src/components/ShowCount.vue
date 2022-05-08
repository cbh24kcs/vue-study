<template>
  <div>
    <h1>{{ x }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    x: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style>
</style>