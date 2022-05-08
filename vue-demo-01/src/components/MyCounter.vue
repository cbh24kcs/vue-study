<template>
  <div>
    <button @click="x++">增加</button>
    <h1>{{ x }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    init: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      x: 0,
    };
  },
  methods: {
    
  },
  mounted() {
      this.x = this.init
  }
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>