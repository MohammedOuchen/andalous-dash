<template lang="">
    <div class="pt-2 px-4 ps-lg-0 pe-xl-5">
                <!-- Title-->
                <div class="d-sm-flex flex-wrap justify-content-between align-items-center border-bottom" >
                <h2 class="h3 py-2 me-2 text-center text-sm-start" >Portefeuille client par commerciale</h2>
                </div>
           
                    <!--contenu-->
                    <!-- Card equipe commerciale: image + cordonnées -->
                        <div class="card text-center" style="margin-top: 20px; border: 1px solid rgba(0,0,0,0.085);" v-for="commerciale in getCommerciales">
                            <div class="card-body">
                            <img class="d-inline-block rounded-circle mb-3" width="96" src="img/team/Toudo.jpg" alt="Toudo Cissoko"/>
                            <h6 class="pt-1 mb-1" style="color: #78c981;">
                                <router-link :to="{name: 'Portefeuille-client', params : { id: commerciale.id } }" style="color: #78c981;">
                                {{ commerciale.user.name.toUpperCase()+' '+commerciale.user.prenom.toUpperCase()}}
                                </router-link>
                            </h6>
                            <!-- <p class="fs-sm text-muted">Responsable Zone 2</p> -->
                            <ul class="fs-sm list-unstyled mb-4">
                                <li class="mb-0">
                                <i class="ci-phone me-2"></i>
                                <a class="nav-link-style" href="tel:00331697720">{{ commerciale.user.tel_portable }}</a>
                                </li>
                                <li class="mb-0">
                                <i class="ci-mail me-2"></i>
                                <a class="nav-link-style" href="mailto:ben.miller@example.com">{{ commerciale.user.email }}</a>
                                </li>
                            </ul>
                            </div>
                        </div>
    </div>
</template>
<script>

import {mapActions , mapGetters} from 'vuex';

export default {

            computed: {

                ...mapGetters({
                        'getCommerciales': 'commerciale/getCommerciales'
                    }),
            },
            methods: {

                ...mapActions({
                    'getCommercialesDataRani' : 'commerciale/getCommercialesDataRani'
                })
                },
                
            mounted() {

                        this.getCommercialesDataRani();
                    },
    
}
</script>
<style lang="">
    
</style>