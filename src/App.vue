<template>
  <v-app>
    <v-app-bar app color="primary" elevate-on-scroll>
      <NavigationBar class="container" />
    </v-app-bar>
    <v-main class="py-10">
      <router-view></router-view>
    </v-main>

    <v-footer color="primary">
      <v-row class="container">
        <div class="white--text">
          <v-icon color="white" class="mr-2">mdi-phone</v-icon>
          <span>+234815467890</span>
        </div>
        <v-spacer></v-spacer>
        <div class="white--text">
          &copy; copyright {{ new Date().getFullYear() }}
          <span>EKDATA</span>
        </div>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
export default {
  components: {
    NavigationBar,
  },
};
</script>

<style>
* {
  word-wrap: break-word;
}
/* body {
  max-height: 100vh;
} */

.line-height {
  line-height: 1;
}
.container {
  max-width: 90vw;
  width: 1300;
  margin: 0 auto;
}
</style>
