import Vue from 'vue';
import VueRouter from 'vue-router';

import EntryPage from '../components/EntryPage.vue';
import Home from '../components/Home.vue';
import store from '../store';

Vue.use(VueRouter)

const checkIfUserIsLoggedIn = (to, from, next) => {
  const isAuthenticated = !!store.state.auth.user;
  if (!isAuthenticated) next({ path: '/login' })
  else next()
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: checkIfUserIsLoggedIn
  },
  {
    path: '/login',
    name: 'EntryPage',
    component: EntryPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
