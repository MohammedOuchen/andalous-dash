import { createStore } from 'vuex'
import auth from './auth/index'
import commerciale from './commerciale/index'
import commande from './commande/index'
import produit from './produit/index'
import affectation from './affectation/index'

export default createStore({
  state: {

  },
  mutations: {
    
  },
  actions: {
  },
  modules: {
    auth,
    commerciale,
    commande,
    produit,
    affectation
  }
})
