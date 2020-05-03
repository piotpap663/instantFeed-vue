import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)
// const getDefaultState = {
//   user: 'piotr',
//   _id: '5ea58dc614589d2080fc7ce8',
//   permission: 'USER',
//   subscribers: ['5e765fc65897a60e114c2c16']
// };
const getDefaultState = () => {
  return {
    user: '',
    _id: '',
    permission: '',
    subscribers: [],
    created_at: ''
  }
}
const auth = {
  state: getDefaultState(),
  mutations: {
    login: function (state, user) {
      Object.assign(state, user);
    },
    logout: function (state) {
      Object.assign(state, getDefaultState());
    },
    setSubscribers: function (state, subscribers) {
      state.subscribers = subscribers;
    },
  },
  actions: {
    loginUser({ commit }, user) {
      commit('login', user);
    },
    logoutUser({ commit }) {
      commit('logout');
    },
    setSubscribers({ commit }, subscribers) {
      commit('setSubscribers', subscribers);
    },
  }
};
export default new Vuex.Store({
  modules: {
    auth
  }
}
)
