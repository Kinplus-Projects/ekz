import Vue from 'vue';

import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeUser: ""
  },
  getters: {
  },
  mutations: {

    SET_ACTIVE_USER(state, payload) {
      localStorage.setItem("activeUser", JSON.stringify(payload));
      state.activeUser = payload;
    },
  },
  actions: {
    ActiveUser({ commit }, payload) {
      commit("SET_ACTIVE_USER", payload);
    },
  },
  modules: {
  }
})
