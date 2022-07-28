<template>
  <div class="left-side">
    <div class="side-wrapper">
      <v-card class="draw" >
        <v-navigation-drawer class="deep-yellow accent-4 draw" dark  permanent>
          <v-list>
            <v-list-item v-for="item in items" :key="item.title" link>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <template v-slot:append>
            <div class="pa-2">
              <v-btn block color="yellow" >
                <h4 style="color:black;">Logout</h4> 
              </v-btn>
            </div>
          </template>
        </v-navigation-drawer>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    group: null,
     items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Account', icon: 'mdi-account-box' },
          { title: 'Admin', icon: 'mdi-gavel' },
        ],
  }),

  watch: {
    group() {
      this.drawer = false
    },
  },
}
</script>

<style scoped src="../assets/css/dashboard.css">
</style>

<style scoped>

.left-side{

height: 100%;
padding: 0 !important;
margin: 5px;
}

.side-wrapper{

  height: 100%;
}
.draw{
  width: 100% !important;
  height: 100% !important;
  background-color: green !important;
  border-radius: 5px;
}
</style>