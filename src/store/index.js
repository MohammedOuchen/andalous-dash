import { createStore } from 'vuex'
import auth from './auth/index'
import commerciale from './commerciale/index'
import commande from './commande/index'
import produit from './produit/index'

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
    produit
  }
})
