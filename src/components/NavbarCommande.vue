<template lang="">
 <!-- Steps based on media tabs -->
                <ul class="nav nav-tabs media-tabs start-50">   
                        <div class="btn-group me-2 mb-2" role="group" aria-label="Apply settings">
                            <router-link  class="btn btn-danger" :to="{name: 'update-commande', params : { id: idCommande } }">
                                <i class="ci-settings me-2"></i>
                               Modifier 
                            </router-link>
                        </div>   
                        <div class="btn-group me-2 mb-2" role="group" aria-label="Apply settings">
                            <button type="button" class="btn btn-info">
                            <i class="ci-check me-2"></i>
                            Apply
                            </button>
                        </div>
                        <div class="btn-group me-2 mb-2 " role="group" aria-label="Apply settings">
                            <button type="button" class="btn btn-secondary" @click="retour">
                            <i class="ci-arrow-left me-2"></i>
                            Retour
                            </button>
                        </div>
                </ul>

</template>
<script>
export default {
    props: ['idCommande'],
    methods:{
             retour(){
                    this.$router.go(-1);
                }
    }
}
</script>
<style lang="">
    
</style>