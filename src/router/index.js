import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Connecter from '../views/Connecter.vue'
import Portefeuille from '../views/Portefeuille.vue'
import listClient from '../views/listClient.vue'
import CommandeClient from '../views/CommandeClient.vue'
import Commande from '../views/Commande.vue'
import PageNotFound from '../views/PageNotFound.vue'
import ErrorPage from '../views/ErrorPage.vue'
import UpdateCommande from '../views/Commande/UpdateCommande.vue'
import HomeAffectation from '../views/Affectation/home.vue'
import AffectationList from '../views/Affectation/AffectationList.vue'

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
    component: Connecter,  
    beforeEnter: (to, from, next) => {

       if(store.getters['auth/authenticated']){
            return next({ name: 'Profile' });
        }
          
        next();

    }
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
  },
  {
    path: '/commande-details/:id',
    name: 'commande-details',
    component: Commande,
    beforeEnter: (to, from, next) => {

       if(!store.getters['auth/authenticated']){
            return next({ name: 'Connecter' });
        }
        
        next();
    }
  },
  {

    path: '/:catchAll(.*)',
    component: PageNotFound

  },
  {

    path: '/error',
    component: ErrorPage

  },
  {
    path: '/update-commande/:id',
    name: 'update-commande',
    component: UpdateCommande,
    beforeEnter: (to, from, next) => {

       if(!store.getters['auth/authenticated']){
            return next({ name: 'Connecter' });
        }
        
        next();
    }
  },
  {
    path: '/affectation',
    name: 'affectation',
    component: HomeAffectation,
    beforeEnter: (to, from, next) => {

       if(!store.getters['auth/authenticated']){
            return next({ name: 'Connecter' });
        }
        
        next();
    }
  },
  {
    path: '/affectation-list/:id',
    name: 'affectation-list',
    component: AffectationList,
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
