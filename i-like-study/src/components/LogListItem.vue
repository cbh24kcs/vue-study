<template>
  <div class="item">
    <div class="date">
      <div class="month">{{ month }}</div>
      <div class="day">{{ day }}</div>
    </div>
    <div class="content">
      <h2 class="desc">{{ desc }}</h2>
      <div class="time">{{ time }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    month: String,
    day: String,
    desc: String,
    time: String,
  },
};
</script>

<style>
</style>