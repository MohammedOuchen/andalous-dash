<template lang="">
    <div class="row">
        <div class="col-sm-9">
            <h1> Zone {{ this.$route.params.id }}</h1>
        </div>
       <div class="col-sm-3">
             <button type="button" class="btn btn-secondary" @click="retour">
                            <i class="ci-arrow-left me-2"></i>
                            Retour
                    </button>
       </div>

   
    </div>

    <div>
                    <!--contenu-->
        <!-- Tableau des commandes affectés -->
            <div class="table-responsive" v-if="departements.length">
                <table class="table table-hover">
                <thead>
                    <tr>
                    <th>Numéro Département</th>
                    <th>Nom Département</th>
                    <th>Responsable</th>
                    <th>Changement d'affectation</th>
                    </tr>
                </thead>
                <tbody>
                        <tr v-for="departement in departements"> 

                            <th scope="row">
                                {{ departement.numero }}
                            </th>
                            <td>
                                {{ departement.nom }}
                            </td>
                            <td>
                                {{ departement.name }} {{ departement.prenom }}
                            </td>
                            <td>
                                <ChangeAffectation 
                                        :idDepartement="departement.nom" 
                                        @update="updateDepar"/>
                            </td>
                            
                        </tr>
                </tbody>
                </table>
            </div>
            <div v-else>
                <ChargementPage></ChargementPage>
            </div>
           
            <!-- <div class="text-center" v-else>
                    Pas encore des clients
            </div> -->
    </div>
</template>
<script>
import { mapActions } from 'vuex';
import ChargementPage from '../../components/ChargementPage.vue'
import ChangeAffectation from '../Affectation/ChangeAffectation.vue';

export default {
    
         components: {
                ChargementPage,
                ChangeAffectation
            },
        data(){
                return {
                    departements: []
                }           
        },
        
        methods: {
                ...mapActions({
                //    permet de récuperer l'ensemnle des affectations avec les commercaux
                   'getListAffectation' : 'affectation/getListAffectation'

                }),

                retour(){

                    this.$router.go(-1);
                },
               updateDepar(){

                 
                   this.getListAffectation(this.$route.params.id)
                   .then(response =>
                         this.departements = response.data.departement
                    ).catch(error => 
                      console.log(error))
                }
            
        },
        mounted() {

            this.getListAffectation(this.$route.params.id)
            .then(response =>
                   this.departements = response.data.departement
            ).catch(error => 
                 console.log('ici')
            )

        }


    
}
</script>
<style lang="">
    
</style>