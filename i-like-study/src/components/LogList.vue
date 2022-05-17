<template>
  <div class="logs">
    <LogListItem
      v-for="log in logs"
      :key="log.id"
      :month="log.month"
      :day="log.day"
      :desc="log.desc"
      :time="log.timeStr"
    />
  </div>
</template>

<script>
import LogListItem from "./LogListItem.vue";
export default {
  components: {
    LogListItem,
  },
  props: {
    logs: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style>
</style>