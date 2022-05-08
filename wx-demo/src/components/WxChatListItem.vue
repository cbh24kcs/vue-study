<template>
  <div class="wx-chat-list-item-container">
    <div class="left">
      <div class="avatar"></div>
    </div>
    <div class="right">
      <div class="chat-simple-info">
        <div class="chat-title">{{ chatInfo.title }}</div>
        <div class="chat-last-msg">你好啊，吃了没</div>
      </div>
      <div class="chat-time">昨天</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    chatInfo: Object,
  },
};
</script>

<style lang="scss" scoped>
.wx-chat-list-item-container {
  display: flex;
  height: 100%;
  .left {
    width: 70px;
    height: 100%;
    box-sizing: border-box;
    position: relative;
    .avatar {
      width: 40px;
      height: 40px;
      box-sizing: border-box;
      border: 1px solid #ccc;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .right {
    display: flex;
    width: 100%;
    .chat-simple-info {
      width: calc(100% - 60px);
      padding-top: 10px;
      .chat-title {
        font-family: "微软雅黑";
        font-weight: 400;
        padding-bottom: 8px;
      }
      .chat-last-msg {
        font-size: 12px;
        color: #aaa;
      }
    }
    .chat-time {
      width: 60px;
      font-size: 12px;
      color: #ccc;
      text-align: right;
      padding-right: 10px;
      padding-top: 10px;
    }
  }
}
</style>