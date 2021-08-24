<template lang="">


    <!-- Button trigger modal -->
    <button type="button" class="btn btn-outline-success me-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Ajouter un produit
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Ajout d'un produit</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                
                <form class="input-group-overlay  mx-4 mr-5 dropdown" method="GET" action="" autocomplete="off">
             
                    <input   type="text" class="form-control w-100 md-6 mb-3" placeholder="Rechercher des produits"
                        v-model="nomProduit"
                        @keyup="rechercher"
                        autocomplete="off"
                        required
                    >
                   
                    <div class="mb-3" v-if="resultat.length && nomProduit">
                          
                        <select  v-model="produit" class="form-select" id="multiselect-input" size="5" multiple>
                            <option v-for="produitSouhaite in resultat" @click="afficher" @keyup.enter="rechercher"  :value="produitSouhaite">
                              {{ produitSouhaite.nom }}
                            </option>
                        </select>
                    </div>  
                    
                    
                    <label class="form-label"  v-if="statusQty && nomProduit"  >Quantité (Palette) :</label>
                    <input   type="number" class="form-control w-100 md-6 mb-3" placeholder="Quantité"
                                v-model="quantiteProduit"
                                autocomplete="off"
                                required
                                v-if="statusQty && nomProduit"
                                min="1"
                                max="1000"
                    >
                          <!-- Success button -->
                    <button 
                        type="button" 
                        class="btn btn-success btn-shadow"
                        data-bs-dismiss="modal" 
                        v-if="statusQty && nomProduit"
                        @click="add"
                    >
                        Ajouter à la commande
                    </button>
            

                </form>
                

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
            </div>
            </div>
        </div>
    </div>



</template>
<script>
import { mapActions } from 'vuex';
export default {

    props: [ 'idCommande','produitCommnde'], // idCommande: id de la commande
    data(){

        return {

                nomProduit: '',//nomProduit: produit recherchée  par l'utilisateur 
                resultat: [],// resultat retourner par la base de données apres le saisi d'utilisateur
                produit: '', //nouveau produit selectionnée
                quantiteProduit: 1, // quantite de nouveau produit ajouté (en palette)
                statusQty: false,// variable de type boolean qui permet afficher ou cache les inputs 

        }
    },
    
    methods: {

        ...mapActions({

                    'getProduits': 'produit/getProduits', // recuperer les produits qui contient une suite des caracters (enter dans l'inpute)
                    'addNewProduct': 'commande/addProductOrder'// ajouter un nouveau produit à la commande en question
        }),
        
        rechercher(){ //rechercher les produits a partir de nomProduit
            
            if(this.nomProduit.length >= 3){

                this.getProduits(this.nomProduit)
                .then( response => this.resultat = response.data.produits )
                .catch(err => console.log(err))

            }else{
                
                this.idProduit = '';
                this.statusQty = false;
            }
               
        },
        afficher(){ // affichage des inputs apres le saisi de la produit souhaite

            this.statusQty = false;
            this.statusQty = true;
        },
        add(){  // ajouter le produit à la commande

           console.log(this.produit)
                // this.addNewProduct({ 
                //                    "idCommande": this.idCommande,
                //                    "idProduit": this.produit.id,
                //                    "quantiteProduit": this.quantiteProduit
                //                 })
                // .then( response => console.log(response))
                // .catch(err => console.log(err))
        }
    },
    
}
</script>
<style lang="">
    
</style>