import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView";
import LayoutView from "@/views/LayoutView";
import TaskLayout from "@/views/task/TaskLayout";
import PromoView from "@/views/task/PromoView";
import FansView from "@/views/task/FansView";
import StatView from "@/views/task/StatView";
import MsgLayout from "@/views/msg/MsgLayout";
import PushView from "@/views/msg/PushView";
import SopView from "@/views/msg/SopView";
import AuthView from "@/views/auth/AuthView";
import ActivityList from "@/views/task/ActivityList";
import ActivityCreate from "@/views/task/ActivityCreate";
import {gitToken} from "@/plugins/cookie";
import TextView from "@/views/TextView";


const routes = [

  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '',
    name: 'Layout',
    component: LayoutView,
    children:[
      {
        path: '/text',
        name: 'Text',
        component: TextView,
      },
      {
        path: '/',
        redirect:'/task'
      },
      {
        path: '/task',
        name: 'Task',
        component: TaskLayout,
        children:[
          {
            path: '/',
            redirect:'/activity'
          },
          {
            path: '/activity',
            name: 'Activity',
            redirect:'/activitylist',
            children:[
              {
                path: '/activitylist',
                name: 'ActivityList',
                component: ActivityList
              },
              {
                path: '/activitycreate',
                name: 'ActivityCreate',
                component: ActivityCreate
              },
            ]
          },
          {
            path: '/promo',
            name: 'Promo',
            component: PromoView
          },
          {
            path: '/fans',
            name: 'Fans',
            component: FansView
          },
          {
            path: '/stat',
            name: 'Stat',
            component: StatView
          },
        ]

      },
      {
        path: '/msg',
        name: 'Msg',
        component: MsgLayout,
        children:[
          {
            path: '/push',
            name: 'Push',
            component: PushView
          },
          {
            path: '/sop',
            name: 'Sop',
            component: SopView
          },
        ]
      },
      {
        path: '/auth',
        name: 'Auth',
        component: AuthView
      },
    ]
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

router.beforeEach((to, from, next) =>{
  //测试cookie是否过期

  let token = gitToken();
  console.log('进入导航守卫',token)
  if (token){
    console.log('有token，进行页面转跳')
    next();
    return
  }

  // 未登录，登入页面放行
  if (to.name === "Login") {
    next();
    return;
  }

  console.log('没登入，返回登入页面')

  // 未登录，跳转登录页面
  next({name: 'Login'});



})
