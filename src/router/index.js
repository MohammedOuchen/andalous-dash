import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Connecter from '../views/Connecter.vue'
import Portefeuille from '../views/Portefeuille.vue'
import listClient from '../views/listClient.vue'
import CommandeClient from '../views/CommandeClient.vue'

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
  },
  {
    path: '/commerciales',
    name: 'Portefeuille',
    component: Portefeuille,
    beforeEnter: (to, from, next) => {

       if(!store.getters['auth/authenticated']){
            return next({ name: 'Connecter' });
        }
        
        next();
    }
  },
  {
    path: '/portefeuille-client/:id',
    name: 'Portefeuille-client',
    component: listClient,
    beforeEnter: (to, from, next) => {

       if(!store.getters['auth/authenticated']){
            return next({ name: 'Connecter' });
        }
        
        next();
    }
  },
  {
    path: '/commande-client/:id',
    name: 'commande-client',
    component: CommandeClient,
    beforeEnter: (to, from, next) => {

       if(!store.getters['auth/authenticated']){
            return next({ name: 'Connecter' });
        }
        
        next();
    }
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
