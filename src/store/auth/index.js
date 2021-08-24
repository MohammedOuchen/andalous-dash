import axios from 'axios';

export default{
    namespaced: true,

    state: {

        token: null,
        user: null,
        right : null
    },
    mutations: {

                setToken(state, token){
                    state.token = token;
                },
                setUser(state, data){
                    state.user = data;
                },
                setRight(state, data){
                    state.right = data;
                }
    },
    getters: {

        authenticated(state){

            return state.token && state.user;
        },
        user(state){

           return  state.user;
        },
        getRight(state){

            return state.right;
        }
    },
    actions: {
                // Se connecter avec le serveur 
                async singIn({ dispatch },credentials) {

                                        try {
                                                const response  = await axios.post('http://localhost:8000/api/V1/login', credentials)
                                                return dispatch('attempt',response.data.api_token)
                                            
                                        }catch (error) {
                                                
                                                console.log(response.error)
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
                            
                                                    commit('setUser', response.data.user)
                                                    commit('setRight', response.data.right)

                                                   

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

                async updateUser({ commit, state }, credentiels){

                            try {
                                                    
                                        if(!state.token){
                                            return;
                                        }
                                        
                                        const response = await axios.put('V1/utilisateur/'+credentiels.id, credentiels)
                                        commit('setUser', response.data)

                            }catch(error){
                            
                                    
                            }

                }
                
    
    }
}