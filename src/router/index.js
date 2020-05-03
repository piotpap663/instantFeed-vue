import Vue from 'vue';
import VueRouter from 'vue-router';

import AddPost from '../components/AddPost/AddPost.vue';
import Dashboard from '../components/Dashboard/Dashboard.vue';
import EntryPage from '../components/EntryPage/EntryPage.vue';
import NotFound from '../components/NotFound.vue';
import store from '../store';

Vue.use(VueRouter)

const checkIfUserIsLoggedIn = (to, from, next) => {
  const isAuthenticated = !!store.state.auth.user;
  if (!isAuthenticated) next({ path: '/login' })
  else next()
}

const routes = [
  {
    path: '/login',
    name: 'entryPage',
    component: EntryPage
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    beforeEnter: checkIfUserIsLoggedIn
  },
  {
    path: '/addPost',
    name: 'addPost',
    component: AddPost,
    beforeEnter: checkIfUserIsLoggedIn
  },
  {
    path: '/user/:id',
    name: 'userPage',
    component: Dashboard,
    beforeEnter: checkIfUserIsLoggedIn
  },
  {
    path: '/explore',
    name: 'explore',
    component: Dashboard,
    beforeEnter: checkIfUserIsLoggedIn
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
