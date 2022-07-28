<template>
  <v-container align="center" justify="center" class="mt-6">
    <v-row class="fill-height"  align="center" justify="center">
      <v-col cols="12" sm="6" order="2">
        <div>
          <v-card flat max-width="24rem" class="mx-auto">
            <h2 class="text-center">Login</h2>

            <v-form class="mt-4">
              <v-text-field
              v-model="email"
                filled
                prepend-inner-icon="mdi-account-circle"
                color="success"
                type="email"
              >
                <template #label>
                  <i>Email <span class="error--text">*</span> </i>
                </template>
              </v-text-field>

              <v-text-field
              v-model="password"
                prepend-inner-icon="mdi-lock"
                filled
                color="success"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
              >
                <template #label>
                  <i>Password<span class="error--text">*</span> </i>
                </template>
              </v-text-field>

              <v-row class="d-flex justify-space-between align-center">
                <v-col cols="12" md="6">
                  <v-checkbox label="Remember Me" color="black"></v-checkbox>
                </v-col>
                <v-col cols="12" md="6">
                  <span class="black--text">Forgot Password?</span>
                </v-col>
              </v-row>
              <div justify="center" class="mt-3">
                
                  <v-btn @click="Login" color="warning" block class="mb-6 black--text">
                    Login
                  </v-btn>
              </div>
            </v-form>
          </v-card>
        </div>
      </v-col>
      <v-col cols="12" sm="6" order="1" order-sm="2" height="600">
         <MainSlide/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {login} from '@/Auth/index'
import MainSlide from '@/components/MainSlide.vue';
export default {
  components:{
    MainSlide,
   
},
  data() {
    return {
      showPassword: false,
      email: '',
      password: null
    };
  },

  methods:{
    async Login(){
      const res = await login.start(this.email, this.password)
      if(res){
        console.log(res)
        this.$router.push({path: "/dashboard"}) 
      }
    }
  }

};
</script>
