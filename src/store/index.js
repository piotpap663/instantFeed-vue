import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: {
      user: ''
    }
  },
  mutations: {
    login: function (state, user) {
      state.auth = user;
    }
  },
  actions: {
    loginUser({ commit }, user) {
      commit('login', user);
    }
  },
  modules: {
  }
})
