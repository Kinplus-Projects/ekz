<template>
    <div >
        <div class="header pa-2">
            <div class="logo">
                <router-link :to="{ name: 'Main' }">
                    <img src="/imgs/logo.png" alt="">

                </router-link>
            </div>
            <v-spacer></v-spacer>

            <div class="d-flex align-center" v-if="!activeUser">
               
            </div>
            
        </div>
    </div>

</template>

<script>
export default {
    name: "dashboardNav",
}
</script>

<style  scoped>
.header {
    height: 10vh;
    background: green;
    
}

.logo {
  height: 100%;
  overflow: hidden;
  display: flex;
    align-items: center;
}

.logo img {
  width: 40%;
  /* height: 100%; */
}
</style>