<template>
  <div>
    <div class="box">你好</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
$w: 200px;
$c: yellow;
$b:green;

.box {
  width: $w;
  height: $w;
  border: 1px solid $c;
  font-size: 30px;
  color: $c;
  text-align: center;
  line-height: $w;
  border-radius: 50%;
  background-color: $b;
}
</style>