<template>
  <div class="alert" :style="style">
    <slot></slot>

    <!-- 条件渲染 -->
    <!-- 
        v-if: 如果不满足，则不渲染
        v-show：都渲染，但是不满足条件的会被隐藏
     -->
    <div class="jiao" v-if="weidu != 0">{{weidu}}</div>

    <!-- 表单 -->
    <form action="/login">
      <input type="text">
      <input type="submit">
    </form>

  </div>
</template>

<script>
export default {
  props: {
    text: String,
    color: {
      type: String,
      default: "#fff",
    },
    bgColor: {
      type: String,
      default: "red",
    },
    weidu: {
        type: Number,
        default: 0
    }
  },
  computed: {
    style() {
      return {
        color: this.color,
        backgroundColor: this.bgColor,
      };
    },
  },
};
</script>

<style scoped>
.alert {
  display: inline-block;
  height: 30px;
  line-height: 30px;
  color: #fff;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;
  position: relative;
}

.jiao {
    color: #fff;
    background-color: red;
    display: inline-block;
    position: absolute;
    text-align: center;
    height: 20px;
    min-width: 20px;
    line-height: 20px;
    font-size: 14px;
    border-radius: 50%;
    top: -10px;
    padding: 2px;
}
</style>
