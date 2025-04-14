import ChatRoomView from '@/views/ChatRoom.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { auth } from '../firebase/configs.js';
import HomeView from '../views/HomeView.vue';


// for check the user is logged in or not
const requireAuth = async (to, from, next) => { 
  let user = await auth.currentUser;
  console.log('user :', user);
  if (user) {
    next();
  } else {
    next({ name: 'home' }); // or 'login'
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/chat',
      name: 'chat',
      component: ChatRoomView,
      beforeEnter: requireAuth,
    },
  ],
})

export default router
