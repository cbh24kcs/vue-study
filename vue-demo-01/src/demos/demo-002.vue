<template>
  <div>
      <h1>{{msg}}</h1>
      <div class="box">
          <div></div>
      </div>

      <h1 v-text="msg"></h1>
  </div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'Hello World'
        }
    },
    methods: {

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
