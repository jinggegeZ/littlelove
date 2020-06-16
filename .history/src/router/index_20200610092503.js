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
        component: Home,
        meta:{
          title:'首页'
        }
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue'),
    meta:{
      title:'登录页'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/register/register.vue'),
    meta:{
      title:'注册页'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from,next) => {
  document.title = to.meta.title
  let user = localStorage.getItem('uesr')
  if(to.path === '/login' || to.path === '/Register') {
    next()
  }else {
    user ? next() : next('/login')
  }
})
export default router
