import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import UserBoard from '@/components/UserBoard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '*',
      redirect: 'login'
    },
    {
      path: '/user',
      redirect: 'UserBoard',
      component: UserBoard
    }
  ]
})