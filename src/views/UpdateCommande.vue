<template lang="">

              <!-- <div class="alert alert-success text-center" role="alert" v-if="submitStatus" >
                        <strong>Enregistrer !</strong>
               </div>
              <div class="alert alert-warning text-center" role="alert" v-if="deleteProduct" >
                        <strong>Supprimer !</strong>
               </div> -->
                <div class="alert alert-success text-center" role="alert" v-if="submitStatus === 'OK'">
                        <strong>Enregister</strong>
                </div> 
                 <div class="alert alert-success text-center" role="alert" v-if="submitStatus === 'DELETE'">
                        <strong>Supprimer</strong>
                </div>
                <div class="alert alert-primary text-center" role="alert" v-if="submitStatus === 'ERROR'">
                         <strong>Error !</strong>
                </div>
                <div class="alert alert-warning text-center" role="alert" v-if="submitStatus === 'PENDING'">
                        <strong>Envoi en cours...</strong>
                </div>

    <nav class="navbar navbar-light bg-light">
        <form class="justify-content-start">
            <button class="btn btn-outline-success me-1" type="button">
                <i class="ci-add me-1"></i>
                Ajouter un produit
            </button>
            <button class="btn btn-outline-info me-1" type="button">
                <i class="ci-arrow-down-circle me-1"></i>
               Plus d'informations
            </button>   
            <button class="btn btn-outline-danger me-1" type="button">
                <i class="ci-close-circle me-1"></i>
                Annuler la commande    
            </button>   
            <button class="btn btn-outline-secondary me-1" type="button" @click="retour"> 
              <i class="ci-arrow-left me-1"></i>
                Retour
            </button> 
        </form>
   </nav>

   <table class="table">
        <thead>
            <tr>
            <th scope="col">id</th>
            <th scope="col">Nom</th>
            <th scope="col">Nombre de palettes</th>
            <th scope="col">Manipuler</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="produit in produits">
            <th scope="row" class="mb-0">{{ produit.id }}</th>
            <td class="mb-0">{{  produit.nom }} </td>
            <td class="mb-0">

            <div class="mb-3">
               <input class="form-control" type="number" id="number-input" v-model="produit.pivot.quantite">
            </div>

            </td>
            <td class="mb-0">
                         <!-- Secondary solid icon button -->
                <button type="button" class="btn btn-secondary btn-icon me-1 mb-0" @click="updateProduit(produit.id,produit.pivot.quantite )">
                <i class="ci-edit"></i>
                </button>
                            <!-- Danger outline icon button -->
                <button type="button" class="btn btn-outline-danger btn-icon" @click="deleteProduit(produit.id)">
                <i class="ci-trash"></i>
                </button>
            </td>
            </tr>
        </tbody>
    </table>

   
</template>
<script>
import { mapActions } from 'vuex';

export default {
            data(){
                return {
                    produits: [],
                    nbrPalette: 0,
                    commande: null,
                    submitStatus: '',
                    deleteProduct: ''
                }
                
            },
            computed: {
            
            },
            methods: {

                        ...mapActions({
                            'getCommande' : 'commerciale/getCommande',
                            'updateProductQuantite' : 'commande/updateProductQuantite',
                            'deleteProductOrder' : 'commande/deleteProductOrder'
                        }),

                        retour(){
                            this.$router.go(-1);
                        },

                        async updateProduit($id, $qty){
                           
                            this.submitStatus = 'PENDING' 

                            this.updateProductQuantite({ "idCommande" : this.commande.id, "idProduit" : $id, "quantiteProduit" : $qty })
                            .then(() => {

                                this.submitStatus = 'OK' 
                            })
                            .catch((err) => {
                                
                            });        

                            setTimeout(() => {
                                this.submitStatus = '' 
                            },3000)
                        },
                        
                        async deleteProduit($id){
                            
                                    this.submitStatus = 'PENDING' 
                                    this.deleteProductOrder({ "idCommande" : this.commande.id, "idProduit" : $id })
                                    .then(() => {
                                        this.produits  = this.produits.filter( produit => {
                                            return  produit.id != $id
                                        })
                                        this.submitStatus = 'DELETE'
                                        })
                                    .catch((err) => this.submitStatus = 'ERROR' )   
                                    setTimeout(() => {
                                    this.submitStatus = '' 
                                    },3000)
                        }
                        
               
               },
            mounted() {
                    
 
                    this.getCommande(this.$route.params.id)
                    .then(res => {
                        // console.log(res.data.produits)
                        this.produits = res.data.produits;
                        this.commande = res.data.commande;
                    })
                    .catch(err => console.log(err));
                
                }
}
</script>
<style lang="">
    
</style>