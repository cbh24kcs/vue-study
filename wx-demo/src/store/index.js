import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "xxxxx",
  },
  getters: {},
  mutations: {
    setTitle(state, value) {
      state.title = value;
    },
  },
  actions: {},
  modules: {},
});
