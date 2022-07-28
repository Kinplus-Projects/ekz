<template>
  <v-app >
    <v-main class="main">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {

  data: ()=>({
    curuser: ""
  }),
  beforeMount(){
    let checkUser = localStorage.getItem('user_id')
    this.curuser = JSON.parse(checkUser);
    this.$store.dispatch('ActiveUser', this.curuser)
  }
  
};
</script>

<style lang="scss" scoped>

</style>