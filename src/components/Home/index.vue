<template>
  <v-container class="home">
    <v-row class="fill-height" align="center">
      <v-col cols="12" sm="6" order="2">
        <div>
          <h1 class="line-height">
            <span class="success--text">Supporting</span>
            <br />
            <em class="error--text text-h1 pr-3 font-weight-bold">Startups</em>
            <br />
            <span class="success--text">in Ekiti State</span>
          </h1>
          <p class="mt-4">
            This is the official website of the
            <strong>Ekiti State Government Startup Database.</strong> Kindly
            ensure to register your business or company on this site for
            documentation and other beneficial purposes.
          </p>

          <v-btn color="secondary" large class="black--text mt-4"
            >Get Started</v-btn
          >
        </div>
      </v-col>
      <v-col style=" height: 80%;" cols="12" sm="6" order="1" order-sm="2">
       
         <MainSlide/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MainSlide from '@/components/MainSlide.vue';

export default {
  name: 'index',
  components:{
    MainSlide,
   
}
};
</script>

<style scoped>
.home{
  height: 90vh !important;
}

/* .v-card{
  height: 100%;
  background: transparent;
} */
</style>


