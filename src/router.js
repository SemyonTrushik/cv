import { createRouter, createWebHistory } from 'vue-router'

import loginComponent from './components/loginComponent.vue'
import aboutComponent from './components/aboutProject.vue'

const routes = [
  {
    path: '',
    component: loginComponent
  },
  {
    path: '/about',
    name: 'aboutComponent',
    component: aboutComponent
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
