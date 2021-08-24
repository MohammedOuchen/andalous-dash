<template lang="">
   <form  @submit.prevent="submit()">
          <div class="pt-2 px-4 ps-lg-0 pe-xl-5">
            
                    <!-- Title-->
                    <div class="d-sm-flex flex-wrap justify-content-between align-items-center border-bottom">
                      <h2 class="h3 py-2 me-2 text-center text-sm-start">Informations de profil</h2>
                      </div>
                      <div class="alert alert-success" role="alert" v-if="submitStatus === 'OK'">
                        <strong>Vos informations ont bien été mises à jour</strong>
                      </div>
                       <div class="alert alert-primary" role="alert" v-if="submitStatus === 'ERROR'">
                        <strong>Veuillez remplir le formulaire correctement.</strong>
                      </div>
                       <div class="alert alert-warning" role="alert" v-if="submitStatus === 'PENDING'">
                        <strong>Envoi en cours...</strong>
                      </div>
                      <!--contenu-->
                      <label for="large-input" class="form-label">Nom*</label>

                              <input v-model="user.name" class="form-control form-control-lg" type="text" id="large-input">

                      <label for="large-input" class="form-label">Prénom*</label>

                      <input v-model="user.prenom" class="form-control form-control-lg" type="text" id="large-input" >

                      <div class="mb-3" :class="{ error: v$.user.email.$errors.length }">
                          <label for="email-input" class="form-label">Email*</label>
                          <input v-model="user.email" class="form-control" type="email" id="email-input">
                            
                          <div class="input-errors" v-for="error of v$.user.email.$errors" :key="error.$uid">
                               <div class="error-msg">{{ error.$message }}</div>
                          </div>
                      </div>

                      <div class="mb-3">
                          <label for="tel-input" class="form-label">Numéro de téléphone*</label>
                          <input v-model="user.tel_portable" class="form-control" type="tel" id="tel-input" >

                           <div class="input-errors" v-for="error of v$.user.tel_portable.$errors" :key="error.$uid">
                               <div class="error-msg">{{ error.$message }}</div>
                          </div>
                      </div>

                      <div class="mb-3">
                        <button type="submit" class="btn btn-success btn-shadow" :disabled="submitStatus === 'PENDING'"> <i class="ci-loading"></i> Mettre à jour le profil</button>
                      </div>

                      <div class="mb-3">
                        <button type="button" class="btn btn-outline-success"> <i class="ci-reload"></i> Réinitialiser le mot de passe</button>
                    </div> 
                  
            </div>
  </form>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import useVuelidate from '@vuelidate/core'
import { helpers, required, email, minLength } from '@vuelidate/validators'

export default { 

          setup () {

              return { v$: useVuelidate() }
            },
          data(){
            return {
               submitStatus: null
              }
          },
          computed: {     
                  ...mapGetters({
                    'authenticated': 'auth/authenticated',
                    'user': 'auth/user'
                  }),

           },
          methods: {
                    ...mapActions({

                      'updateUser' : 'auth/updateUser'
                    }),

                async submit() {
          
                        
                        this.v$.user.$touch()

                        if (this.v$.user.$invalid) {
                              this.submitStatus = 'ERROR'
                            } else {

                              this.updateUser(this.user);
                              this.submitStatus = 'PENDING'
                              setTimeout(() => {
                                         this.submitStatus = 'OK'
                                               }, 
                                               500);
                              setTimeout(() => {
                                 this.submitStatus = ''
                              },4000)
                                }
                } 
              },
          validations () {

              return {
                      user: {
                          email: { 
                              required:  helpers.withMessage('This field cannot be empty', required),
                              email 
                          }, // Matches this.contact.email
                          tel_portable: {
                            required,
                            minLength: minLength(4)
                          },
                          prenom:{
                             required,
                             minLength: minLength(4)
                          },
                          name:{
                             required,
                             minLength: minLength(4)
                          }
                      }
              }
      }
    
}
</script>
<style lang="">
    
</style>