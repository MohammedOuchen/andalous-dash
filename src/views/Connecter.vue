<template lang="">
<section>
  
        <div class="col-md-4 m-auto">
            <div class="card-body">
                <h2 class="h4 m-4">Se connecter</h2>
                <hr>
                <form  class="needs-validation" @submit.prevent="submit()">
                                 <!-- Email input -->
                            <div class="m-3">
                                <label for="email-input" class="form-label">Email</label>
                                <input  v-model="user.email"  class="form-control" type="email" id="email-input">
                            </div>
                            <!-- Password visibility toggle -->
                            <div class="m-3">
                                <label class="form-label" for="pass-visibility">Mot de passe</label>
                                <div class="password-toggle">
                                    <input  v-model="user.password"  class="form-control" type="password" id="pass-visibility">
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

export default {
    data () {
        return {
            user: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions({

            'signIn' : 'auth/singIn'
        }),
        async submit() {
           
             this.signIn(this.user).then(() => this.$router.replace({name: 'Profile'}));

        } 
    }
} 

</script>
<style lang="">
    
</style>