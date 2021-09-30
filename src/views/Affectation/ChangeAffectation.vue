<template lang="">
    <div>
        <!-- <button type="button" class="btn btn-success btn-shadow">Changement d'affectation</button> -->

         <!-- Button trigger modal -->
    <button type="button" class="btn btn-success btn-shadow me-1" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="afficher()">
           Changement d'affectations
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Changement d'affectation</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                
                    <!-- Select -->
                <div class="mb-3" v-if="commerciaux.length">
                    <label for="select-input" class="form-label">Commerciaux</label>
                    <select class="form-select" id="select-input" v-model="commercant_id">
                        <option v-for="commerciale in commerciaux"   :value="commerciale.id">{{ commerciale.user.name }} {{ commerciale.user.prenom }}</option>
                    </select>
                </div>
                     <!-- Accent alert -->
                <div class="alert alert-accent" role="alert" v-else>
                        Chargement...
                </div>
         
               
                

            </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" >Fermer</button>
                     <button type="button" class="btn btn-accent btn-shadow" data-bs-dismiss="modal" @click="updateDepar()">Enregister</button>
                </div>
            </div>
        </div>
    </div>




    </div>
</template>
<script>
import {mapActions} from 'vuex';

export default {
            props: ['idDepartement'],
            data(){
                return {
                    commerciaux : [],
                    commercant_id: ''
                }
            },
            methods: {

                ...mapActions({
                    'getCommercialesData' : 'commerciale/getCommercialesData',
                    'updateAffectation' : 'affectation/updateAffectation'
                }),

                afficher(){
                    
                    this.getCommercialesData()
                    .then(response => {
                        this.commerciaux = response.data
                    })
                    .catch(error => console.log(error))
                },

                updateDepar(){
                        
                    console.log(this.idDepartement)
                    console.log(this.commercant_id)
                    // this.updateAffectation({ "id": this.idDepartement, "commercant_id": this.commercant_id })
                    // .then(response  => {
                    //     this.$emit('update')
                    // })
                    // .catch(error => console.log(error))
                }
            }
}
</script>
<style lang="">
    
</style>