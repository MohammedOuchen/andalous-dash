import axios from 'axios';

export default{
    namespaced: true,
    state: {
        token: null,
        user: null
    },
    mutations: {
           setToken(state, token){
               state.token = token;
           },
           setUser(state, data){
               state.user = data;
           }

    },
    getters: {

        authenticated(state){

            return state.token && state.user;
        },
        user(state){
           return  state.user;
        }
    },
    actions: {
 
                    async singIn({ dispatch },credentials) {

                            try {
                                    const response  = await axios.post('http://localhost:8000/api/V1/login', credentials)
                                    return dispatch('attempt',response.data.api_token)
                                
                            }catch (error) {
                                    console.log(error)
                                
                            }
                    },

                    async attempt({ commit, state }, token){

                                    try {
                                    
                                                if (token){
                                                    commit('setToken', token)
                                                }
                                                if(!state.token){
                                                    return;
                                                }
                                                
                                                const response = await axios.get('V1/utilisateur-profil')
                        
                                                commit('setUser', response.data)

                                                console.log('success')

                                    }catch(error){
                                    
                                            commit('setUser', null)
                                            commit('setToken', null)
                                    }


                    },

                    signOut({ commit }){

                         return  axios.post('http://localhost:8000/api/V1/logout').then( () => {
                            commit('setUser', null)
                            commit('setToken', null)
                        })
                    },

                  async  updateUser({ commit }){

                       try {
                                                
                                    if (token){
                                        commit('setToken', token)
                                    }
                                    if(!state.token){
                                        return;
                                    }
                                    
                                    const response = await axios.get('V1/utilisateur-profil')

                                    commit('setUser', response.data)

                                    console.log('success')

                        }catch(error){
                        
                                commit('setUser', null)
                                commit('setToken', null)
                        }

                    }
                
    
    }
}