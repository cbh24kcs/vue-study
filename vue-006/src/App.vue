<template>
  <div id="app">
    <button @click="$router.push('/home')">首页</button>
    <button @click="$router.push('/introduction')">公司介绍</button>
    <button @click="$router.push('/new')">新闻</button>
    <button @click="$router.push('/about')">关于我们</button>

    <div class="show">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style lang="scss">
a {
  padding: 10px;
}

.show {
  width: 400px;
  height: 400px;
  border: 1px solid red;
}
</style>
