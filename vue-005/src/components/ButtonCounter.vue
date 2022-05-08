<template>
  <button @click="handleClick">{{ x }}</button>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["x"]),
  },
  methods: {
    ...mapMutations(["setX"]),
    handleClick() {
      this.setX(this.x + 1);
      // this.$store.state.x++;
      // console.log(this.$store.state.x);
    },
  },
};
</script>

<style scoped>
button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  font-size: 16px;
}
</style>