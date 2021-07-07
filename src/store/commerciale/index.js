import axios from 'axios';

export default{
    namespaced: true,

    state: {
        //   commerciales: [],
        //   clients : [],
        //   commerciale: null
    },
    mutations: {
            
        // setCommerciales(state, data){
        //     state.commerciales = data
        // },

        // setClients(state, data){
        //     state.clients = data;
        // }, 
        
        // setCommerciale(state, data){
        //     state.commerciale = data
        // },
    },
    getters: {

        // getCommerciales(state){

        //     return state.commerciales;
        // },

        // getClients(state){

        //     return state.clients;
        // },
        
        // getCommerciale(state){

        //     return state.commerciale;
        // }
    },
    actions: {
               
            async getCommercialesData(_) {
               
                        try {
                           
                              return  await axios.get('V1/commerciale')

                        } catch (error) {
                            
                            console.log('Error')
                        }
            },

            async getCommercialesClients(_, credentials){

                        try {

                  
                            return  await axios.get('V1/commerciale/'+credentials);   

                        } catch (error) {
         
                        }

            },

            async getCommandesClient(_, credentials){

                try {
                  
                    return  await axios.get('V1/commande/'+credentials);   

                } catch (error) {
                    
                    console.log('Error')
                }
            },  
    
               async getCommande(_, credentials){

                try {
                  
                    return  await axios.get('V1/status/'+credentials);   

                } catch (error) {
                    
                    console.log('Error')
                }
   
    }
}
}