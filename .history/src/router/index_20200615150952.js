import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import layout from '../views/layout1/layout'

Vue.use(VueRouter)

  const routes = [
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
      {
        path:'published',
        name:'published',
        component:() => import('../views/published/published'),
        meta:{
          title:'已发布'
        }
      },
      {
        path:'census',
        name:'census',
        component:() => import('../views/census/census'),
        meta:{
          title:'统计'
        }
      },
      {
        path:'publishArticle',
        name:'publishArticle',
        component:() => import('../views/publishArticle/publishArticle'),
        meta:{
          title:'发表文章'
        }
      },
      {
        path:'label',
        name:'label',
        component:() => import('../views/label/label'),
        meta:{
          title:'标签'
        }
      },
      {
        path:'deriveExcel',
        name:'deriveExcel',
        component:() => import('../views/deriveExcel/deriveExcel'),
        meta:{
          title:'导出Excel'
        }
      },
      {
        path:'uploadpic',
        name:'uploadpic',
        component:() => import('../views/uploadpic/uploadpic'),
        meta:{
          title:'上传'
        }
      },
      {
        path:'logout',
        name:'logout',
        component:() => import('../views/logout/logout'),
        meta:{
          title:'退出'
        }
      },
      {
        path:'edit',
        name:'edit',
        component:() => import('../views/edit/edit'),
        meta:{
          title:'编辑'
        }
      },
      {
        path:'see',
        name:'see',
        component:() => import('../views/see/see'),
        meta:{
          title:'查看'
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
  let user = localStorage.user
  console.log(user);
  if(to.path === '/login' || to.path === '/register') {
    next()
  }else {
    user ? next() : next('/login')
  }
})
export default router
