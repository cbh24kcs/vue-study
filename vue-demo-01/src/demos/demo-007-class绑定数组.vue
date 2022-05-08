<template>
  <div>
    <h1>class绑定数组</h1>
    <hr />
    <button @click="toggle('wh')">w200,h200</button>
    <button @click="toggle('green-bg')">绿色背景</button>
    <button @click="toggle('blue-border')">蓝色边框</button>
    <button @click="toggle('border-radius')">圆角</button>
    <div :class="classArr"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      classArr: [],
    };
  },
  methods: {
    toggle(className) {
      if (this.classArr.includes(className)) {
        let index = this.classArr.findIndex((m) => m == className);
        this.classArr.splice(index, 1);
      } else {
        this.classArr.push(className);
      }
    },
  },
};
</script>

<style scoped>
.wh {
  width: 200px;
  height: 200px;
}
.green-bg {
  background-color: green;
}
.blue-border {
  border: 10px solid blue;
}
.border-radius {
  border-radius: 20px;
}
</style>