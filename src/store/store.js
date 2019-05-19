import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    formEnabled: true,
    tabularList: []
  },
  getters: {
    formEnabled(state) {
      return state.formEnabled;
    },
    tabularList(state) {
      return state.tabularList;
    }
  },
  mutations: {
    setFormEnabled(state, payLoad) {
      state.formEnabled = payLoad;
    },
    settabularList(state, payLoad) {
      state.tabularList = payLoad;
    }
  },
  actions: {
    setFormEnabled(context, payLoad) {
      context.commit("setFormEnabled", payLoad);
    },
    settabularList(context, payLoad) {
      context.commit("settabularList", payLoad);
    }
  }
});
