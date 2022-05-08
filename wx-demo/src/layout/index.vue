<template>
  <div class="layout-container">
    <div class="side-bar"></div>
    <div class="chat-list">
      <div
        class="chat-item"
        v-for="i in 100"
        :key="i"
        @click="handleClickChatItem('备胎' + i)"
      >
        <wx-chat-list-item
          :chatInfo="{ title: '备胎' + i }"
        ></wx-chat-list-item>
      </div>
    </div>
    <div class="main-content">
      <div class="chat-title">
        <span>{{ title }}</span>
      </div>
      <div class="chat-history"></div>
      <div class="msg-input">
        <div></div>
        <div class="send-line">
          <button>发送(S)</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WxChatListItem from "@/components/WxChatListItem.vue";
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    WxChatListItem,
  },
  methods: {
    ...mapMutations(["setTitle"]),
    handleClickChatItem(value) {
      this.setTitle(value);
    },
  },
  computed: {
    ...mapState(["title"]),
  },
};
</script>

<style lang="scss" scoped>
@import url(./user-list-scroll.css);

$side-bar-width: 50px;
$user-list-width: 300px;
$chat-title-height: 60px;

.layout-container {
  height: 100vh;
  display: flex;
  .side-bar {
    width: $side-bar-width;
    height: 100%;
    background-color: #000;
  }
  .chat-list {
    width: $user-list-width;
    height: 100%;
    border-right: 1px #ccc solid;
    overflow-y: scroll;
    .chat-item {
      height: 60px;
      width: 100%;
      border-bottom: 1px solid #ccc;
    }
  }
  .main-content {
    width: calc(100vw - $side-bar-width - $user-list-width);
    height: 100%;
    background-color: #eee;
    position: relative;
    .chat-title {
      width: 100%;
      height: $chat-title-height;
      border-bottom: 1px solid #ccc;
      span {
        font-size: 20px;
        line-height: $chat-title-height;
        padding-left: 12px;
      }
    }
    .chat-history {
    }
    .msg-input {
      height: 150px;
      width: 100%;
      background-color: #fff;
      position: absolute;
      bottom: 0;
      .send-line {
        width: 100%;
        position: absolute;
        bottom: 0;
        text-align: right;
        padding-right: 40px;
        padding-bottom: 5px;
        box-sizing: border-box;
      }
    }
  }
}
</style>