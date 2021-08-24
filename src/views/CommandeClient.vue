<template lang="">
    <div v-if="commandes.length">
                    <!-- Title-->
                    <div class="d-sm-flex flex-wrap justify-content-between align-items-center border-bottom">
                    <!-- <h2 class="h3 py-2 me-2 text-center text-sm-start" >Les clients affectées à {{ commerciale.user.name+' '+commerciale.user.prenom }} </h2> -->
                    <!-- Secondary button -->
                    <button @click="retour" type="button" class="btn btn-secondary btn-shadow">
                        Retour
                    </button>
                    </div>
                    <!--contenu-->
                        <!-- Tableau des commandes affectés -->
                       
                            <div class="table-responsive" v-if="commandes.length">
                                <table class="table table-hover">
                                <thead>
                                    <tr>
                                    <th>ID</th>
                                    <th>Status</th>
                                    <th>Type de livraison</th>
                                    <th>Nom contact</th>
                                    <th>Numero contact</th>
                                    <th>Moyen de transport</th>
                                    </tr>
                                </thead>
                                <tbody v-for="commande in commandes">
                                        <tr> 
                                            <th scope="row">
                                                <router-link  :to="{name: 'commande-details', params : { id: commande.id } }">
                                                    {{ commande.id }}
                                                </router-link>
                                            </th>
                                            <td>{{ commande.status }}</td>
                                            <td>{{ commande.type }}</td>
                                            <td>{{ commande.nom_contact }}</td>
                                            <td>{{ commande.contact }}</td>
                                            <td>{{ commande.moyen_de_transport }}</td>
                                            
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
                    commandes: []
                }
                
            },
            methods: {

                ...mapActions({
                    'getCommandesClient' : 'commerciale/getCommandesClient'
                }),

                retour(){
                    this.$router.go(-1);
                }
                },
            mounted() {
                    
                    this.getCommandesClient(this.$route.params.id)
                    .then(res => {
                        //   console.log(res.data)
                       this.commandes = res.data
                    })
                    .catch(err => console.log(err));
                
             }
}
</script>
<style lang="">
    
</style>