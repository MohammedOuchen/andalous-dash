<template lang="fr">
<section>
  
        <div class="col-md-4 m-auto">
            <div class="card-body">
                <h2 class="h4 m-4">Se connecter</h2>
                <hr>
                <form  class="needs-validation" @submit.prevent="submit()">

                            <div class="alert alert-primary" role="alert" v-if="messageError">
                                <strong>{{ messageError  }}</strong>
                            </div>
                                 <!-- Email input -->
                            <div class="m-3" :class="{ error: v$.user.email.$errors.length }">
                                <label for="email-input" class="form-label">Email</label>
                                <input  v-model="user.email"  class="form-control" type="email" id="email-input">

                                <div class="input-errors" v-for="error of v$.user.email.$errors" :key="error.$uid">
                                    <div class="error-msg">{{ error.$message }}</div>
                                </div>
                            </div>

                            <!-- Password visibility toggle -->
                            <div class="m-3" :class="{ error: v$.user.password.$errors.length }">
                                <label class="form-label" for="pass-visibility">Mot de passe</label>
                                <div class="password-toggle">
                                    <input  v-model="user.password"  class="form-control" type="password" id="pass-visibility" required>
                                </div>
                                <div class="input-errors" v-for="error of v$.user.password.$errors" :key="error.$uid">
                                    <div class="error-msg">{{ error.$message }}</div>
                                </div>
                            </div>  
                                <!-- Success button -->
                            <div class="m-3">
                                <button type="submit" class="btn btn-success">Se Connecter</button>
                            </div>
                </form>
            </div>
        </div>

</section>

</template>
<script>

import {mapActions} from 'vuex';
import axios from 'axios';
import useVuelidate from '@vuelidate/core'
import { helpers, required, email } from '@vuelidate/validators'

export default {

    setup () {
        return { v$: useVuelidate() }
      },

    data () {
        return {
            messageError: '',
            user: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions({
            'signIn' : 'auth/singIn',
        }),
        async submit() {

                this.v$.$touch()
                if (this.v$.user.$invalid) {
                    return;
                }
                this.signIn(this.user)
                .then(() => this.$router.replace({name: 'Profile'}))
                .catch(() =>  this.messageError = 'le mail ou mot de passe est incorrect');

        } 
        },
    validations () {
            return {
                    user: {
                        email: { 
                            required:  helpers.withMessage('This field cannot be empty', required),
                            email 
                        }, // Matches this.contact.email
                        password: { required }, // Matches this.password
                    }
            }
        }
} 

</script>
<style lang="">
    
</style>