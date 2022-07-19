<template>
  <v-row>
    <v-toolbar-title>Logo</v-toolbar-title>

    <v-spacer></v-spacer>

    <div class="d-flex align-center">
      <router-link
        :to="{ name: 'login' }"
        class="white--text text-decoration-none"
        ><v-btn text class="mr-6 pa-3 white--text large"
          >Login</v-btn
        ></router-link
      >

      <v-btn color="secondary" large class="black--text">Register</v-btn>
    </div>
  </v-row>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
