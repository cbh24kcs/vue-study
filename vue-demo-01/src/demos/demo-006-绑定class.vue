<template>
  <div>
      <button @click="handleClick">切换box类名</button>
      <div :class="divName"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isBox: false,
      divName: ''
    }
  },
  methods: {
    handleClick() {
      if(this.isBox == true) {
        this.isBox = false;
        this.divName = ''
      } else {
        this.isBox = true
        this.divName = 'box'
      }
    }
  }
}
</script>

<style scoped>
.box {
    width: 200px;
    height: 200px;
    background-color: red;
}
</style>