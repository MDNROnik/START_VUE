import getUser from '@/composables/getUser.js'
import LoginView from '@/views/auth/Login.vue'
import SignUpView from '@/views/auth/SignUp.vue'
import MadePlaylistView from '@/views/playlist/madePlayList.vue'
import PlayListDetailsView from '@/views/playlist/PlayListDetailsView.vue'
import UserPlaylist from '@/views/playlist/UserPlaylist.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const user = getUser()

// const requireAuth = (to, from, next) => {
//   // let user1 = projectAuth.currentUser
//   const user = getUser()
//   // console.log('user1', user1)
//   // console.log ('user', user.user.value)
//   if (!user || user.user.value===null) {
//     next({ name: 'Login' })
//   } else {
//     next()
//   }
// }


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
      // beforeEnter : requireAuth,
    },
    {
      path: '/playlist/:id',
      name: 'PlayListDetails',
      component: PlayListDetailsView,
      // beforeEnter : requireAuth,
      props: true,
    },
    {
      path: '/myplaylist/',
      name: 'MyPlayList',
      component: UserPlaylist,
    },
  ],
})

export default router
