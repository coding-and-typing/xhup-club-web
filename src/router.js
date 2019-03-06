import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import 'normalize.css'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})
