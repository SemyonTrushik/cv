import { createRouter, createWebHistory } from 'vue-router'

import loginPage from './pages/loginPage.vue'
import aboutPage from './pages/aboutPage.vue'
import accountPage from './pages/accountPage.vue'
import presentPage from './pages/presentPage.vue'

const routes = [
  {
    path: '/login',
    component: loginPage
  },
  {
    path: '/about',
    name: 'aboutPage',
    component: aboutPage
  },
  {
    path: '/account',
    name: 'accountPage',
    component: accountPage
  },
  {
    path: '/present',
    name: 'presentPage',
    component: presentPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
