<template lang="">
   
          <div class="pt-2 px-4 ps-lg-0 pe-xl-5">
                    <!-- Title-->
                    <div class="d-sm-flex flex-wrap justify-content-between align-items-center border-bottom">
                      <h2 class="h3 py-2 me-2 text-center text-sm-start">Informations de profil</h2>
                      </div>
                      <!--contenu-->
                      <label for="large-input" class="form-label">Nom*</label>
                              <input v-model="user.name" class="form-control form-control-lg" type="text" id="large-input">
                      <label for="large-input" class="form-label">Prénom*</label>

                      <input v-model="user.prenom" class="form-control form-control-lg" type="text" id="large-input" >

                      <div class="mb-3">
                          <label for="email-input" class="form-label">Email*</label>
                          <input v-model="user.email" class="form-control" type="email" id="email-input" >
                      </div>

                      <div class="mb-3">
                          <label for="tel-input" class="form-label">Numéro de téléphone</label>
                          <input v-model="user.tel_portable" class="form-control" type="tel" id="tel-input" >
                      </div>

                      <div class="mb-3">
                        <button type="button" class="btn btn-success btn-shadow"> <i class="ci-loading"></i> Mettre à jour le profil</button>
                      </div>

                      <div class="mb-3">
                        <button type="button" class="btn btn-outline-success"> <i class="ci-reload"></i> Réinitialiser le mot de passe</button>
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
          methods: {



              }
    
}
</script>
<style lang="">
    
</style>