import axios from 'axios';

export default{
    namespaced: true,

    state: {
          commerciales: [],
          clients : []
    },
    mutations: {
            
        setCommerciale(state, data){
            state.commerciales = data
        },

        setClients(state, data){
            state.clients = data;
        }
    },
    getters: {

        getCommerciales(state){

            return state.commerciales;
        },

        getClients(state){

            return state.clients;
        }
     
    },
    actions: {
               
            async getCommercialesDataRani({ commit, state}) {
               
                        try {
                           
                          
                            const response  = await axios.get('V1/commerciale')
                            // console.log(response.data)
                            commit('setCommerciale', response.data)
                           
                        } catch (error) {
                            
                            console.log('Error')
                        }

            },

            async getCommercialesClients({ commit,state }, credentials){

                        try {
                          
                            const response  = await axios.get('V1/commerciale/'+credentials)
                            // console.log(response.data)
                            commit('setClients', response.data)
                            console.log('after storing');
                        
                        } catch (error) {
                            
                            console.log('Error')
                        }

            }
                
    
    }
}