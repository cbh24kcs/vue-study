<template>
  <div>
    <ButtonCounter :count="x" @我要改变="setX" />
    <ShowCount :x="x" />
  </div>
</template>

<script>
import ButtonCounter from "@/components/ButtonCounter.vue";
import ShowCount from "@/components/ShowCount.vue";

export default {
  components: {
    ButtonCounter,
    ShowCount,
  },
  data() {
    return {
      x: 0,
    };
  },
  methods: {
    setX(value) {
      this.x = value;
    },
  },
};
</script>

<style>
</style>