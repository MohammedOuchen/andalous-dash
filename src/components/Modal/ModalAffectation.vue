<template lang="">
 
         <!-- Modal  affectation -->
        <div class="modal fade" id="ModalAffectation" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

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
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                        <button type="button" class="btn btn-accent btn-shadow" data-bs-dismiss="modal" @click="updateDepar()">Enregister</button>
                    </div>
                </div>
            </div>

        </div>

</template>
<script>

import {mapActions} from 'vuex';


export default {
            props: ['dataDepartement'],

            data(){

                return {
                    commerciaux : [],
                    commercant_id: '',
                    dep: ''
                }
            },
            methods: {

                ...mapActions({

                    'getCommercialesData' : 'commerciale/getCommercialesData',
                    'updateAffectation' : 'affectation/updateAffectation'
                }),

                updateDepar(){
                    
              
                    this.updateAffectation({ "id": this.dataDepartement.id, "commercant_id": this.commercant_id })
                    .then(response  => {
                        this.$emit('update')
                    })
                    .catch(error => console.log(error))
                }
            },

            mounted(){ 

                this.getCommercialesData()
                .then(response  => this.commerciaux = response.data )
                .catch(err => console.log(err))
            }
}
</script>
<style lang="">
    
</style>