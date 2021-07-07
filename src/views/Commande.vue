<template lang="">
        <div v-if="produits.length">
                <NavbarCommande :idCommande="commande.id"/>
                    <div class="modal-body pb-0 border-top" >
                        
                                    <!-- Item -->
                                    <div class="d-sm-flex justify-content-between mb-4 pb-3 pb-sm-2 border-bottom" v-for="produit in produits">
                                        <div class="media d-block d-sm-flex text-center text-sm-left">

                                                <a class="d-inline-block mx-auto mr-sm-4"  href="" style="width: 10rem;"> 
                                                    <img class="produit-afficher" :src="`/img/produits/`+produit.image+`.jpg`" alt=""/>
                                                </a>

                                            <div class="media-body pt-2">
                                            <h3 class="product-title font-size-base mb-2"><a href="">{{ produit.nom }}</a></h3>
                                                <div class="font-size-sm"><span class="text-muted mr-2">UC par colis : </span>{{ produit.package }}</div>
                                                <div class="font-size-sm"><span class="text-muted mr-2">Colis par palette : </span>{{ produit.carton_par_palette }}</div> 
                                                <div class="font-size-sm"><span class="text-muted mr-2">Nombre total d'UC : </span>{{ (produit.package)*(produit.carton_par_palette)*(produit.pivot.quantite) }}</div>
                                            </div>
                                        </div>
                                        <div class="pt-2 pl-sm-3 mx-auto mx-sm-0 text-center">
                                        <div class="text-muted mb-2">Quantité en Palette(s) :</div> {{ produit.pivot.quantite }}</div>
                                    </div>

<!-- 
                            <div class="modal-footer flex-wrap justify-content-between font-size-md">
                                <div class="px-2 py-1"><span class="text-muted">Nombre de palettes:&nbsp;</span><span> $qtepalette </span></div>
                                <div class="px-2 py-1"><span class="text-muted">Nombre de produits:&nbsp;</span><span> $nbrproduit </span></div>
                            </div> -->
                    </div>
                
        </div>           
            <!-- Content-->
        <div class="pt-2 px-4 ps-lg-0 pe-xl-5 m-1" style="text-align: center;" v-else>
            
                            <!-- Success spinner -->
                    <div class="spinner-border text-success m-5" role="status" style="width: 10rem; height: 10rem;">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="chargement m-3" style="text-align: center; font-size: 10px;">
                        <h5 class="text-success">En cours de chargement</h5>
                    </div>
        </div>
</template>
<script>
import { mapActions } from 'vuex';
import NavbarCommande from '../components/NavbarCommande.vue'

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
            components: {

                NavbarCommande
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