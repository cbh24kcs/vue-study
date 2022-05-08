<template>
  <button @click="handleClick">{{ count }}</button>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      default: 1000,
    },
  },
  methods: {
    handleClick() {
      // this.count++;
      // this.setX(this.count);
      // this.$parent.setX(this.count);
      this.$emit("我要改变", this.count + 1);
    },
  },
  //   // 创建、挂载、更新、销毁
  //   created() {
  //     this.count = this.init;
  //     // this.setX(this.count);
  //     // this.$parent.setX(this.count);
  //     this.$emit("count改变了", this.count);
  //   },
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