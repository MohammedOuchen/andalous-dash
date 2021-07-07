<template lang="">
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
            <button class="btn btn-outline-secondary me-1" type="button"> 
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
            <th scope="row">{{ produit.id }}</th>
            <td>{{  produit.nom }} </td>
            <td>{{ produit.pivot.quantite }}</td>
            <td>@mmm</td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            </tr>
            <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
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
                    commande: null
                }
                
            },
            computed: {

            },
            methods: {

                        ...mapActions({
                            'getCommande' : 'commerciale/getCommande'
                        }),

                        retour(){
                            this.$router.go(-1);
                        }
                },
            mounted() {
                    
 
                    this.getCommande(this.$route.params.id)
                    .then(res => {
                        //   console.log(res.data)
                        this.produits = res.data.produits;
                        this.commande = res.data.commande;
                    })
                    .catch(err => console.log(err));
                
                }
}
</script>
<style lang="">
    
</style>