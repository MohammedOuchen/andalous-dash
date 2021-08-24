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
    
            async updateProductQuantite(_, credentials){

                        try {

                            return  await axios.post('V1/update-quantite-product/', credentials);   
                            
                        } catch (error) {
                             
                            console.log(error);
                        }

            },
            async deleteProductOrder(_, credentials){

                        try {

                            return  await axios.post('V1/delete-product-order/', credentials);   
                        } catch (error) {
                             
                            console.log(error);
                        }

            },
            async addProductOrder(_, credentials){

                        try {
                             
                            return  await axios.post('V1/add-product/', credentials);   
                        } catch (error) {
                             
                            console.log(error);
                        }

            },

    
}
}