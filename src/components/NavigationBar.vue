<template>
  <v-row pb-2>
    <v-card flat color="transparent" max-width="4rem" max-height="4rem">
      <v-img src="imgs/logo.png" contain></v-img>
    </v-card>
    <v-spacer></v-spacer>

    <div class="d-flex align-center">
      <router-link
        :to="{ name: 'login' }"
        class="white--text text-decoration-none"
        ><v-btn text class="mr-6 pa-3 white--text large"
          >Login</v-btn
        ></router-link
      >

      <router-link
        :to="{ name: 'register' }"
        class="white--text text-decoration-none"
      >
        <v-btn color="secondary" large class="black--text"
          >Register</v-btn
        ></router-link
      >
    </div>
  </v-row>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
