import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/login/login.vue'
import Home from '@/views/home/home.vue'
import ColumnDetail from '@/components/ColumnDetail.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/column/detail/:id',
      name: 'ColumnDetail',
      component: ColumnDetail
    }
  ]
})
