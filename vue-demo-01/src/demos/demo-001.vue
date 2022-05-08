<template>
  <div>
    <AlertBtn :weidu="3">你好啊</AlertBtn>
    <br>
    <br>
    <lalala :bgColor="'green'" :weidu="6">你好啊啊啊</lalala>
    <br>
    <br>
    <alert-btn :bgColor="'blue'" :color="'red'" >我不好</alert-btn>
  </div>
</template>

<script>
import AlertBtn from "../components/AlertBtn.vue";

export default {
  components: { AlertBtn,  lalala: AlertBtn },
  data() {
    return {

    }
  }
}
</script>

<style>

</style>



