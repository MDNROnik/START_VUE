import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddTask from '../views/AddTask.vue'
import EditTask from '@/views/EditTask.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/addTask',
      name: 'addTask',
      component: AddTask,
    },
    {
      path: '/task/:id',
      name: 'editTask',
      component: EditTask,
      props:true,
    },
  ],
})

export default router
