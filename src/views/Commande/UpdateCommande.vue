<template lang="">

              <!-- notification pour l'enregistrement et la supression -->
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
                
                <!-- notification pour l'ajout  -->
                <div class="alert alert-success text-center" role="alert" v-if="submitStatus === 'ADD'">
                        <strong>le produit a été bien ajouté</strong>
                </div> 




    <nav class="navbar navbar-light bg-light">
        <form class="justify-content-start">
  
            <AddProduct 
                    :idCommande="commandeCurrent.id" 
                    :produitCommnde="produit"   
                    @ajouter="addNewProduct($event)"/>

            <button @click="displayMore" class="btn btn-outline-info me-1" type="button">
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

 
            <!-- Description list alignment -->
            <dl class="row mt-3" v-if="statusMoreInformation" >
                    <dt class="col-sm-3">Status&nbsp;</dt>
                    <dd class="col-sm-9">{{ commandeCurrent.status }}</dd>
                    <dt class="col-sm-3">Type&nbsp;</dt>
                    <dd class="col-sm-9">{{ commandeCurrent.type }}</dd>
                    <dt class="col-sm-3">Contact&nbsp;</dt>
                    <dd class="col-sm-9">{{ commandeCurrent.contact }}</dd>
                    <dt class="col-sm-3">Id commerciale&nbsp;</dt>
                    <dd class="col-sm-9">{{ commandeCurrent.commercant_id }}</dd>
            
            </dl>

   <table class="table" v-if="produits.length">
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
               <input class="form-control" type="number" id="number-input" v-model="produit.pivot.quantite" min="1">
            </div>

            </td>
            <td class="mb-0">
         
                <div class="flex">
                            <!-- Secondary solid icon button -->
                    <button type="button" class="btn btn-secondary btn-icon me-1 mb-0" @click="updateProduit(produit.id,produit.pivot.quantite )">
                    <i class="ci-edit"></i>
                    </button>
                                <!-- Danger outline icon button -->
                    <button type="button" class="btn btn-danger btn-icon" @click="deleteProduit(produit.id)">
                    <i class="ci-trash"></i>
                    </button>
                </div>

            </td>
            </tr>
        </tbody>
    </table>
    <div v-else>
        <ChargementPage />
    </div>

   
</template>
<script>
import { mapActions } from 'vuex';
import ChargementPage from '../../components/ChargementPage.vue';
import AddProduct from '../Commande/AddProduct.vue';

export default {
    
            components :{
                ChargementPage,
                AddProduct
            },
            data(){
                return {

                    produits: [],
                    nbrPalette: 0,
                    commandeCurrent: '',
                    submitStatus: '',
                    deleteProduct: '',
                    statusMoreInformation: false
                }
                
            },
            computed: {
            
            },
            methods: {

                displayMore(){
                    
                    this.statusMoreInformation = ! this.statusMoreInformation;
                    console.log(this.commandeCurrent)
                },
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
                            this.updateProductQuantite({ "idCommande" : this.commandeCurrent.id, "idProduit" : $id, "quantiteProduit" : $qty })
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
                            this.deleteProductOrder({ "idCommande" : this.commandeCurrent.id, "idProduit" : $id })
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
                },

                addNewProduct(id){

                    this.submitStatus = 'PENDING' 
                    this.produits.push(id)
                    this.submitStatus = 'ADD'  
                    setTimeout(() => {
                            this.submitStatus = ''     
                    },1000) 
                               
                }

                
        
            },

           mounted() {
            

                this.getCommande(this.$route.params.id)
                .then(res => {
                    this.produits = res.data.produits;
                    this.commandeCurrent = res.data.commande;
                })
                .catch(err => console.log(err));
        
            }
}
</script>
<style lang="">
    
</style>