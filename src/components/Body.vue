<template lang="">


    <div class="container mb-5 pb-3">
            <div class="bg-light shadow-lg rounded-3 overflow-hidden">
                <div class="row">
                      <!-- Sidebar-->
                  <Sidebar v-if="authenticated"/>

                         <!-- Content-->  
                    <section class="col-lg-8 pt-lg-4 pb-4 mb-3 mx-0" v-if="authenticated">
                      <div class="pt-2 px-0 m-0 ps-lg-0 pe-xl-5">
                        <router-view/>
                      </div>
                    </section>
                    <section class="col-lg-12  pb-4 mb-3 mx-0" v-else>

                        <router-view/>
                 
                    </section>
                
                </div>
            </div>
    </div>

</template>
<script>

import Sidebar from '../components/Sidebar.vue'
import { mapGetters } from 'vuex';
export default {

    computed: {
          
        ...mapGetters({
            'authenticated': 'auth/authenticated',
            'user': 'auth/user'
        })
    },

    components: {
        
        Sidebar
    }
}
</script>
<style lang="">
    
</style>