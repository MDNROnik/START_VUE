import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/auth/Login.vue'
import SignUpView from '@/views/auth/SignUp.vue'
import MadePlaylistView from '@/views/playlist/madePlayList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
    },
    {
      path: '/signup',
      name: 'Signup',
      component: SignUpView,
    },
    {
      path: '/playlist/made',
      name: 'MadePlaylist',
      component: MadePlaylistView,
    },
  ],
})

export default router
