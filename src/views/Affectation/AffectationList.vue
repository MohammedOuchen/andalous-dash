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

                    <!-- notification pour l'enregistrement et la supression -->
                <div class="alert alert-success text-center" role="alert" v-if="submitStatus === 'OK'">
                        <strong>Enregister</strong>
                </div> 
                <div class="alert alert-primary text-center" role="alert" v-if="submitStatus === 'ERROR'">
                         <strong>Error !</strong>
                </div>
                <div class="alert alert-warning text-center" role="alert" v-if="submitStatus === 'PENDING'">
                        <strong>Envoi en cours...</strong>
                </div>

    <div class="row">
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
                                            <!-- Button trigger modal -->
                                        <button type="button" user="'departement'" @click="openModal(departement)" class="btn btn-success btn-shadow me-1" data-bs-toggle="modal" data-bs-target="#ModalAffectation">
                                            Changement d'affectations
                                        </button>
                                            <!-- <ModelChangeAffectation :id="departement.id" /> -->
                                </td>
                        </tr>

                </tbody>
                </table>
            </div>
            <div v-else>
                <ChargementPage></ChargementPage>
            </div>
    </div>

    <ModalAffectation v-if="modalVisible" @close="modalVisible = false" :dataDepartement="modalData" @update="updateDepar()"/>


</template>
<script>
import { mapActions } from 'vuex'
import ChargementPage from '../../components/ChargementPage.vue'
import ModalAffectation from '../../components/Modal/ModalAffectation.vue'


export default {
    
         components: {
                
                ChargementPage,
                ModalAffectation
            },
        data(){
                return {
                    departements: [],
                    modalVisible: false,
                    modalData: null,
                    submitStatus: ''
                }           
        },
        
        methods: {
                ...mapActions({
                //    permet de récuperer l'ensemnle des affectations par les commercaux
                   'getListAffectation' : 'affectation/getListAffectation'

                }),

                retour(){

                    this.$router.go(-1);
                },

                openModal(departement){

                    this.modalVisible = true,
                    this.modalData = departement
                },

                updateDepar(){

                    this.submitStatus = 'PENDING'
                    this.getListAffectation(this.$route.params.id)
                    .then(response =>{
                            this.departements = response.data.departement
                            this.submitStatus = 'OK'

                    }).catch( error => 
                            console.log(error)
                    )
                    setTimeout(() => {
                        this.submitStatus = '' 
                    },10000)
                
                }
            
        },
        mounted() {

            this.getListAffectation(this.$route.params.id)
            .then(response =>{
                    this.departements = response.data.departement
            }).catch( error => 
                    console.log(error)
            )
        }


    
}
</script>
<style lang="">
    
</style>