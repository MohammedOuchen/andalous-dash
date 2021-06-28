<template>

        <main class="page-wrapper">

          <Navbar />
          <div class="container mb-5 pb-3">
              <div class="bg-light shadow-lg rounded-3 overflow-hidden">
                <div class="row">
                      <!-- Sidebar-->
                  <Sidebar/>
                         <!-- Content-->  
                    <section class="col-lg-8 pt-lg-4 pb-4 mb-3">
                      <div class="pt-2 px-4 ps-lg-0 pe-xl-5">
                        <router-view/>
                      </div>
                    </section>

                
                </div>
              </div>
          </div>
        </main>

</template>

<script>

import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'

export default {
      
      components: {
        Sidebar,
        Navbar
      }



}
</script>

<style>

</style>
