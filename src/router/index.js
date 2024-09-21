import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView";
import LayoutView from "@/views/LayoutView";
import TaskLayout from "@/views/task/TaskLayout";
import ActivityView from "@/views/task/ActivityView";
import PromoView from "@/views/task/PromoView";
import FansView from "@/views/task/FansView";
import StatView from "@/views/task/StatView";

const routes = [

  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/',
    name: 'Layout',
    component: LayoutView,
    children:[
      {
        path: '',
        redirect:'/task'
      },
      {
        path: '/task',
        name: 'Task',
        component: TaskLayout,
        children:[
          {
            path: '',
            redirect:'/activity'
          },
          {
            path: '/activity',
            name: 'Activity',
            component: ActivityView
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
    ]
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
