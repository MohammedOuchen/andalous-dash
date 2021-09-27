<template lang="">
    
    <div>
        <h1>
            Gestion des affectations
        </h1>
    </div>
    <div class="mt-5">
        <!-- Success alert -->
        <div class="alert alert-success" role="alert">
            <!-- Block outline button -->
            <router-link  class="btn btn-outline-success d-block w-100"  :to="{name: 'affectation-list', params : { id: 1 } }">
                <h3>Zone 1</h3>ile-de-france
            </router-link>
        </div>
         <!-- Success alert -->
        <div class="alert alert-success" role="alert">
            <!-- Block outline button -->
            <router-link  class="btn btn-outline-success d-block w-100"  :to="{name: 'affectation-list', params : { id: 2 } }">
                <h3>Zone 2</h3>Nord Est
            </router-link>
        </div>
         <!-- Success alert -->
        <div class="alert alert-success" role="alert">
            <!-- Block outline button -->
            <router-link  class="btn btn-outline-success d-block w-100"  :to="{name: 'affectation-list', params : { id: 3 } }">
                <h3>Zone 3</h3>Centre Ouest
            </router-link>
        </div>
         <!-- Success alert -->
        <div class="alert alert-success" role="alert">
            <!-- Block outline button -->
            <router-link  class="btn btn-outline-success d-block w-100"  :to="{name: 'affectation-list', params : { id: 4 } }">
                <h3>Zone 4</h3>Sud Ouest
            </router-link>
        </div>
         <!-- Success alert -->
        <div class="alert alert-success" role="alert">
            <!-- Block outline button -->
            <router-link  class="btn btn-outline-success d-block w-100"  :to="{name: 'affectation-list', params : { id: 5 } }">
                <h3>Zone 5</h3>Sud Est
            </router-link>
        </div>
   </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>
<router-link  :to="{name: 'commande-details', params : { id: commande.id } }">
    {{ commande.id }}
</router-link>