<template>
  <v-app-bar class="nav">
    <div class="logo">
      <router-link  :to="{ name: 'Main' }">
        <img src="imgs/logo.png" alt="">
        
      </router-link>

    </div>
    <v-spacer></v-spacer>

    <div class="d-flex align-center" v-if="!activeUser">
      <router-link :to="{ name: 'login' }" class="white--text text-decoration-none">
        <v-btn text class="mr-6 pa-3 white--text large">Login</v-btn>
      </router-link>

      <router-link :to="{ name: 'register' }" class="white--text text-decoration-none">
        <v-btn color="secondary" large class="black--text">Register</v-btn>
      </router-link>
    </div>
    <div class="d-flex align-center" v-if="activeUser">
      <router-link :to="{ name: 'userprofile' }" class="white--text text-decoration-none">
         <v-btn large class="black--text mr-2">Dashboard</v-btn>
      </router-link>
     
         <v-btn @click="signOut" color="secondary" large class="black--text">LogOut</v-btn>
   
    </div>
  </v-app-bar>
</template>

<script>
import {mapState} from 'vuex';
import {logOut} from '@/Auth/index';
export default {
  name: "NavigationBar",
 computed:{
   ...mapState(['activeUser']),
 },

 methods:{
  signOut(){
    logOut()
    this.$router.go({name: "main"}) 
  }
 }
  
};
</script>

<style lang="scss" scoped>
.nav {
  background-color: transparent !important;
 height: 100%;
}

.logo {
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  margin-top:8px;
}

.logo img {
  width: 80%;
  
}
</style>
