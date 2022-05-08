<template>
  <div>
    <h1>后端请求测试</h1>
    <button @click="getAllUser">获取所有用户的数据</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    getAllUser() {
      console.log("点击了按钮，获取所有用户数据");
      axios.get("http://127.0.0.1:8080/py/user/queryAll").then((res) => {
        console.log("后端返回的结果", res);
      });
    },
  },
};
</script>

<style>
</style>


