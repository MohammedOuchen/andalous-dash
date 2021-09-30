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
               
            async getListAffectation(_, credentials) {
               
                        try {
                           
                              return  await axios.get('V1/departement/' + credentials)

                        } catch (error) {
                            
                            console.log('Error')
                        }
            },

            async updateAffectation(_, credentials) {
               
                try {
                   
                    return  await axios.put('V1/departement/' + credentials.id, credentials)

                } catch (error) {
                    
                    console.log('Error')
                }
            }

    }

}