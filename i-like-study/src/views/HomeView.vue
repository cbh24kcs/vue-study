<template>
  <div>
    <div class="header">
      <span>学习内容：</span>
      <input
        type="text"
        class="learn-content"
        v-model="learnContent"
        v-show="!isLearn"
      />
      <span v-show="isLearn"
        >你已经学习: {{ learnContent }} 有 {{ learnTime }} 秒了 &nbsp;</span
      >
      <button class="run-btn" @click="handleClick">
        {{ isLearn ? "停止学习" : "开始学习" }}
      </button>
    </div>
    <LogList :logs="logs" />
  </div>
</template>

<script>
import LogList from "@/components/LogList.vue";
import { nanoid } from "nanoid";
import moment from "moment";

const monthTextMap = {
  0: "一月",
  1: "二月",
  2: "三月",
  3: "四月",
  4: "五月",
  5: "六月",
  6: "七月",
  7: "八月",
  9: "十月",
  10: "十一月",
  11: "十二月",
};

export default {
  name: "HomeView",
  components: { LogList },
  data() {
    return {
      learnContent: "",
      learnTime: 0,
      timerId: null,
      isLearn: false,
      logs: [],
    };
  },
  methods: {
    handleClick() {
      if (this.isLearn) {
        // 停止学习
        clearInterval(this.timerId);
        this.isLearn = false;
        const date = moment();
        const month = date.month();
        const day = date.date();
        const duration = moment.duration(this.learnTime, "seconds");
        const log = {
          id: nanoid(),
          month: monthTextMap[month],
          day: day + "",
          desc: this.learnContent,
          time: this.learnTime,
          timeStr:
            duration.hours() +
            " 小时 " +
            duration.minutes() +
            " 分钟 " +
            duration.seconds() +
            " 秒 ",
        };
        this.logs.unshift(log);
        localStorage.setItem("logs", JSON.stringify(this.logs));
      } else {
        // 开始学习
        this.learnTime = 0;
        this.isLearn = true;
        this.timerId = setInterval(() => {
          this.learnTime++;
        }, 1000);
      }
    },
  },
  created() {
    const logs = JSON.parse(localStorage.getItem("logs"));
    this.logs = logs;
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 800px;
  margin: 0 auto;
  background-color: #fcbf49;
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;
  text-align: center;

  .learn-content {
    outline: none;
    margin-right: 20px;
    width: 300px;
    height: 30px;
    border: none;
    border-radius: 5px;
  }

  .run-btn {
    padding: 10px;
    border-radius: 5px;
    border: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
}
</style>
