<template lang="">

      <div class="page-title-overlap pt-4" style="background-color: #78c981;">
        <div class="container d-flex flex-wrap flex-sm-nowrap justify-content-center justify-content-sm-between align-items-center pt-2">
          <div class="d-flex align-items-center pb-3">
            <div class="" style="width: 6.375rem;"><img class="rounded-circle" src="/img/Logo/Andalous_logo.png" alt="Logo Andalous"></div>

            <div class="ps-3" v-if="authenticated">
              <h3 class="text-light fs-lg mb-0">Super Admin</h3><span class="d-block text-light fs-ms opacity-60 py-1"> {{ user.name }} & {{ user.prenom }} </span>
            </div>

            <div class="ps-3" v-if="!authenticated">
              <router-link :to="{name: 'Connecter'}">
                   <h3 class="text-light fs-lg mb-0">Se connecter</h3> 
              </router-link>
            </div>

            <!-- <div class="position-right ps-3" v-if="authenticated">
              <a @click="logOut()" href="#">
                 <h3 class="position-right text-light fs-lg mb-0">Déconnexion</h3>
              </a>
            </div> -->

            </div>
          </div>
      </div>
      
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
    methods:{ 
            ...mapActions({
              'signOut': 'auth/signOut'
            }),
            logOut(){
              
              this.signOut().then(() => this.$router.replace({name: 'Home'}));
            }
    }
}
</script>
<style lang="">
    
</style>