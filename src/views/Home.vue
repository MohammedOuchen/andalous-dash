<template>
  <section class="col-lg-12">

    
       
        <!-- Hero section-->
      <section class="bg-darker bg-size-cover bg-position-center py-5 py-lg-10" style="background-image: url(img/accueille/Accueil.jpg);">
        <div class="container">
          <div class="row justify-content-center pb-5">
            <div class="col-xl-6 col-lg-7 col-md-8 col-sm-10 text-center my-5">
              <div class="h1 text-light mb-3 pb-4">Andalous
                <div class="d-inline-block ms-1">
                  <a href="https://www.andalous-france.fr/" style="color: #198754">Site Web</a>
                </div>
              </div>
              <div  class="mt-5 pt-5">

                  <router-link :to="{name: 'Connecter'}" class="btn btn-success">
                    Se connecter 
                  </router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
        
        
  </section>
</template>

<script>
// @ is an alias to /src


export default {

}
</script>
