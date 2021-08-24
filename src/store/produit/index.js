import axios from 'axios';

export default{
    namespaced: true,

    state: {
     
    },
    mutations: {
   
    },
    getters: {

    },
    actions: {
               
            async getProduits(_, credentials) {
               
                        try {
                           
                              return  await axios.get('V1/search/' + credentials)

                        } catch (error) {
                            
                            console.log('Error')
                        }
            },

    }

}