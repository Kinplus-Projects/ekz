<template>
  <v-container>
    <v-row class="fill-height" align="center" justify="center">
      <v-col cols="12" sm="6" order="2">
        <div>
          <v-card flat max-width="24rem" class="mx-auto">
            <h2 class="text-center">Login</h2>

            <v-form class="mt-4">
              <v-text-field
                filled
                prepend-inner-icon="mdi-account-circle"
                color="success"
              >
                <template #label>
                  <i>Username <span class="error--text">*</span> </i>
                </template>
              </v-text-field>

              <v-text-field
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
                <router-link
                  :to="{ name: 'userprofile' }"
                  class="white--text text-decoration-none"
                >
                  <v-btn color="warning" block class="mb-6 black--text">
                    Login
                  </v-btn></router-link
                >
              </div>
            </v-form>
          </v-card>
        </div>
      </v-col>
      <v-col cols="12" sm="6" order="1" order-sm="2">
        <v-card height="100%">
          <v-img
            height="100%"
            position="center"
            cover
            src="imgs/img1.jpg"
            alt="hero image"
          ></v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      showPassword: false,
    };
  },
};
</script>
