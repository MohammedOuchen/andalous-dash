<template lang="">
                    <!-- Title-->
                    <div class="d-sm-flex flex-wrap justify-content-between align-items-center border-bottom" >
                    <h2 class="h3 py-2 me-2 text-center text-sm-start" >Les clients affectées à  </h2>
                    </div>
                    <button class="btn" @click="update()">
                            Notification <span class="badge badge-primary"></span>
                    </button>
                    <!--contenu-->
                        <!-- Tableau des commandes affectés -->
                            <div class="table-responsive">
                                <table class="table">
                                <thead>
                                    <tr>
                                    <th>#</th>
                                    <th>Numéro de commande</th>
                                    <th>Statut</th>
                                    <th>Type</th>
                                    <th>Nom de contact</th>
                                    <th>Téléphone de contact</th>
                                    <th>Date de création</th>
                                    <th>Date de modification</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th scope="row">1</th>
                                    <td>John</td>
                                    <td>Doe</td>
                                    <td>CEO, Founder</td>
                                    <td>+3 555 68 70</td>
                                    <td>John</td>
                                    <td>Doe</td>
                                    <td>CEO, Founder</td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
</template>
<script>

import { mapActions , mapGetters } from 'vuex';

export default {
            
            // data(){
            //    return {
            //        client : this.getClients.commerciale.user
            //    }
            //  },
            computed: {

                    ...mapGetters({
                            'getClients': 'commerciale/getClients'
                        }),
            },
            methods: {

                    ...mapActions({
                        'getCommercialesClient' : 'commerciale/getCommercialesClients'
                    }),
                    update(){

                        console.log(this.getClients)
                   }
            },
            async  mounted() {

                    this.getCommercialesClient(this.$route.params.id);
            }
}
</script>
<style lang="">
    
</style>