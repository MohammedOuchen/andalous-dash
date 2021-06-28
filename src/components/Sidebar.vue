<template lang="">
   
                <!-- Sidebar-->
            <aside class="col-lg-4 pe-xl-5" v-if="authenticated">
              <!-- Account menu toggler (hidden on screens larger 992px)-->
              <div class="d-block d-lg-none p-4"><a class="btn btn-outline-accent d-block" href="#account-menu" data-bs-toggle="collapse" style="color: white; border-color: #78c981; background-color: #78c981;"><i class="ci-menu me-2"></i>Menu</a></div>
              <!-- Actual menu-->
              <div class="h-100 border-end mb-2">
                <div class="d-lg-block collapse" id="account-menu">
                  <ul class="list-unstyled mb-0">

                      <li class="border-bottom mb-0">
                        <router-link class="nav-link-style d-flex align-items-center px-4 py-3" :to="{name: 'Profile'}">
                          <i class="fas fa-address-card opacity-60 me-2"></i>Informations de profil
                        </router-link>
                      </li>

                      <li class="border-bottom mb-0">
                        <router-link class="nav-link-style d-flex align-items-center px-4 py-3" :to="{name: 'Portefeuille'}">
                          <i class="fas fa-address-card opacity-60 me-2"></i>Portefeuille client par commerciale
                        </router-link>
                      </li>
                      
                      <li class="border-bottom mb-0">
                        <a class="nav-link-style d-flex align-items-center px-4 py-3" href="#" @click="logOut()">
                          <i class="fas fa-sign-out-alt opacity-60 me-2"></i>
                          Déconnexion
                        </a>
                      </li>
                  </ul>
                  
                </div>
              </div>
            </aside>

</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    
    computed: {
          
          ...mapGetters({
            'authenticated': 'auth/authenticated',
            'user': 'auth/user'
          })
    },
    methods: {
           
          ...mapActions({

            'signOut' : 'auth/signOut'
          }),

          logOut(){

              this.signOut().then(() => this.$router.replace({name: 'Connecter'}));
          }


    }
    
}
</script>
<style scoped>
      .router-link-active{
          color:#78c981;
          /* background-color:#78c981; */

      }
</style>