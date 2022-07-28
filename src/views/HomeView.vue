<template>
  <div class="homeView">
     <div app class="nav">
       <NavigationBar  />
    </div>

    <div class="main">
      <router-view></router-view>
    </div>

    <v-footer class="foot" color="primary">
      <v-row class="mx-2" >
        <div class="white--text">
          <v-icon color="white" class="mr-2">mdi-phone</v-icon>
          <span>+234815467890</span>
        </div>
        <v-spacer></v-spacer>
        <div class="white--text d-flex justify-end align-center ">
          &copy; copyright {{ new Date().getFullYear() }}
          <span>EKDATA</span>
        </div>
      </v-row>
    </v-footer>

  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue';
export default {
  name: "HomeView",
  components:{
    NavigationBar
  }

}
</script>

<style lang="scss" scoped>

.homeView{
  height: 100vh;
}




.line-height {
  line-height: 1;
}

.main{
  height: 82vh;
  overflow: hidden;
  overflow-y: scroll;
}

.main::-webkit-scrollbar {
    width: 16px;
    background-color: green;
  outline: 1px solid rgb(0, 0, 0);
}

.foot{
  height: 8vh;
}
.nav{
  height: 10vh !important;
  background-color: green !important;

}
.container{
  width: 100% !important;
}


@media (max-width:900px) {
  .main::-webkit-scrollbar {
   display: none;
}
  
}

</style>