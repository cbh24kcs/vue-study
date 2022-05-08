import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    x: 0,
  },
  getters: {},
  mutations: {
    setX(state, value) {
      state.x = value;
    },
  },
  actions: {},
  modules: {},
});
