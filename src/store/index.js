import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const getDefaultAuthState = () => ({
  user: '',
  _id: '',
  permission: '',
  subscribers: [],
  created_at: ''
});
const getDefaultState = () => {
  return {
    auth: getDefaultAuthState(),
    posts: []
  }
}
export default new Vuex.Store({
  state: getDefaultState(),
  mutations: {
    LOGIN: function (state, user) {
      Object.assign(state.auth, user);
    },
    LOGOUT: function (state) {
      Object.assign(state.auth, getDefaultAuthState());
    },
    SET_SUBSCRIBERS: function (state, subscribers) {
      state.auth.subscribers = subscribers;
    },
    SET_POSTS: function (state, posts) {
      Vue.set(state, 'posts', [...posts]);
    },
  },
  actions: {
    loginUser({ commit }, user) {
      commit('LOGIN', user);
    },
    logoutUser({ commit }) {
      commit('LOGOUT');
    },
    setSubscribers({ commit }, subscribers) {
      commit('SET_SUBSCRIBERS', subscribers);
    },
    setPosts({ commit }, posts) {
      commit('SET_POSTS', posts);
    },
  },
});
