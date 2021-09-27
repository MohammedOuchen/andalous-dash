<template lang="">
    <div>
       <h1> Zone {{ this.$route.params.id }}</h1>
    </div>

    <div>
                    <!--contenu-->
        <!-- Tableau des commandes affectés -->
            <div class="table-responsive">
                <table class="table table-hover">
                <thead>
                    <tr>
                    <th>Numéro Département</th>
                    <th>Nom Département</th>
                    <th>Responsable</th>
                    <th>Changement d'affectation</th>
                    </tr>
                </thead>
                <tbody v-for="commande in commandes">
                        <tr> 
                            <th scope="row">
                            </th>
                            <td>{{ commande.status }}</td>
                            <td>{{ commande.type }}</td>
                            <td>{{ commande.nom_contact }}</td>
                            <td>{{ commande.contact }}</td>
                            <td>{{ commande.moyen_de_transport }}</td>
                            
                        </tr>
                </tbody>
                </table>
            </div>
            <!-- <div class="text-center" v-else>
                    Pas encore des clients
            </div> -->
    </div>
</template>
<script>
export default {

        data(){
                return {
                    departement: []
                }           
        }
    
}
</script>
<style lang="">
    
</style>