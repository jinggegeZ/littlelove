import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import layout from '../views/layout1/layout'

Vue.use(VueRouter)

  const routes = [
    {
      path:'/home',
      redirect:'/'
    },
  {
    path:'/',
    name:'layout',
    component: layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/register/register.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
