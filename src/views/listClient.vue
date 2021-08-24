<template lang="">
        <div v-if="commerciale || clients.length">
                    <!-- Title-->
                    <div class="d-sm-flex flex-wrap justify-content-between align-items-center border-bottom" v-if="commerciale">
                    <h2 class="h3 py-2 me-2 text-center text-sm-start" >Les clients affectées à {{ commerciale.user.name+' '+commerciale.user.prenom }} </h2>
                    <!-- Secondary button -->
                    <button @click="retour" type="button" class="btn btn-secondary btn-shadow">
                        Retour
                    </button>
                    </div>
                    <!--contenu-->
                        <!-- Tableau des commandes affectés -->
                       
                            <div class="table-responsive" v-if="clients.length">
                                <table class="table table-hover">
                                <thead>
                                    <tr>
                                    <th>ID</th>
                                    <th>Nom</th>
                                    <th>Prénom</th>
                                    <th>E-mail</th>
                                    <th>Téléphone</th>
                                    <th>Entreprise</th>
                                    <th>Siren</th>
                                    <th>Nic</th>
                                    <th>Naf</th>
                                    </tr>
                                </thead>
                                <tbody v-for=" client in clients ">
                                        <tr> 
                                            <th scope="row">
                                                <router-link  :to="{name: 'commande-client', params : { id: client.id } }">
                                                {{ client.id }}
                                                </router-link>
                                            </th>
                                            <td>{{ client.user.name }}</td>
                                            <td>{{ client.user.prenom }}</td>
                                            <td>{{ client.user.email }}</td>
                                            <td>{{ client.user.tel_portable }}</td>
                                            <td>{{ client.nom_entreprise }}</td>
                                            <td>{{ client.siren }}</td>
                                            <td>{{ client.nic }}</td>
                                            <td>{{ client.naf }}</td>
                                            
                                        </tr>
                                </tbody>
                                </table>
                            </div>
                            <div class="text-center" v-else>
                                 Pas encore des clients
                            </div>
        </div>
        <!-- Content-->
        <div class="pt-2 px-4 ps-lg-0 pe-xl-5 m-1" style="text-align: center;" v-else>
            <!-- Success spinner -->
                        <!-- <div class="spinner-border text-success m-5" role="status" style="width: 10rem; height: 10rem;">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="chargement m-3" style="text-align: center; font-size: 10px;">
                             <h5 class="text-success">En cours de chargement</h5>
                        </div> -->
                        <ChargementPage></ChargementPage>
        </div>
</template>
<script>

import { mapActions } from 'vuex';
import ChargementPage from '../components/ChargementPage.vue';

export default {
            components: {
                ChargementPage,
            },
            data(){
               return {

                     commerciale : null,
                     clients : []
               }
             },
            methods: {

                    ...mapActions({
                        'getCommercialesClient' : 'commerciale/getCommercialesClients'
                    }),

                    retour(){
                        this.$router.go(-1);
                    }
            },
            mounted() {

                // console.log('ici')
                this.getCommercialesClient(this.$route.params.id)
                .then(res => {
                   setTimeout(() => {
                        this.commerciale = res.data.commerciale,
                            this.clients = res.data.clients 
                   }, 3000)
                })
                .catch(err => {
                       this.$router.push('/error');
                });
                 
            }
}
</script>
<style >
    
</style>