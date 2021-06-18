import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Connecter from '../views/Connecter.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    beforeEnter: (to, from, next) => {

       if(!store.getters['auth/authenticated']){
            return next({ name: 'Connecter' });
        }
        
        next();
    }
  },
  {
    path: '/se-connecter',
    name: 'Connecter',
    component: Connecter
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
