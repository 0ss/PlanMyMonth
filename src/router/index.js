import { createRouter, createWebHistory } from 'vue-router'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/app/',
    name: 'MainPage',
    component: () => import('@/views/Today/Today.vue')
  },
  {
    path: '/app/upcoming/:period',
    name: 'UpComing',
    component: () => import('@/views/UpComing/UpComing')
  },
  {
    path: '/app/search/:input',
    name: 'SearchPage',
    component: () => import('@/views/SearchPage/SearchPage')
  },
  {
    path: '/app/filters/:input',
    name: 'Filters',
    component: () => import('@/views/Filters/Filters')
  },
  {
    path: '/app/projects/:project',
    name: 'Project',
    component: () => import('@/views/Projects/Projects')
  },
  {
    path: '/app/stat',
    name: 'Stat',
    component: () => import('@/views/Stat/Stat')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
