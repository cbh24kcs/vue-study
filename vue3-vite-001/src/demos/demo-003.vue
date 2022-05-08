<template>
  <div>
    <input type="text" v-model="a" />
    <input type="text" v-model="b" />
    <h1>{{ result }}</h1>
    <button @click="handleClick">按钮</button>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  //   data() {
  //     return {
  //       a: "",
  //       b: "",
  //     };
  //   },
  //   computed: {
  //     result() {
  //       return this.a + this.b;
  //     },
  //   },
  setup() {
    let msg = "Hello World";
    function handleClick() {
      console.log("我被哦点击了");
    }

    let a = ref("");
    let b = ref("");
    let result = computed(() => a.value + b.value);

    return { msg, handleClick, a, b, result };
  },
};
</script>

<style>
</style>