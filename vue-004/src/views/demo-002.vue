<template>
  <div>
    <!-- 宽600高600绿色边框 -->
    <div id="first">
      <!-- 300x300红色背景 -->
      <div class="second">
        <!-- 100x100 粉色背景 -->
        <div></div>
      </div>
      <!-- 300x300蓝色背景 -->
      <div>
        <!-- 100x100 purple色背景 -->
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#first {
  width: 600px;
  height: 600px;
  border: 1px solid green;
  & > div {
    width: 300px;
    height: 300px;
  }
  & > div:first-child {
    background-color: red;
    & > div {
      width: 100px;
      height: 100px;
      background-color: pink;
    }
  }
  & > div:last-child {
    & > div {
      width: 100px;
      height: 100px;
      background-color: purple;
    }
    background-color: blue;
  }
}

/* #first > div:first-child {
  width: 300px;
  height: 300px;
  background-color: red;
}

#first > div:last-child {
  width: 300px;
  height: 300px;
  background-color: blue;
}

#first > div:first-child > div {
  width: 100px;
  height: 100px;
  background-color: pink;
}

#first > div:last-child > div {
  width: 100px;
  height: 100px;
  background-color: purple;
} */
</style>