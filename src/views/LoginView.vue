<template>
  <v-container>
    <v-row class="fill-height mt-4" align="center" justify="center">
      <v-col cols="12" sm="6" order="2">
        <div>
          <v-card flat max-width="24rem" class="mx-auto">
            <h2 class="text-center">Login</h2>

            <v-form class="mt-4">
              <v-text-field
                rounded
                prepend-inner-icon="mdi-account-circle"
                color="success"
                outlined
                dense
              >
                <template #label>
                  <i>Username <span class="error--text">*</span> </i>
                </template>
              </v-text-field>

              <v-text-field
                rounded
                prepend-inner-icon="mdi-lock"
                outlined
                color="success"
                dense
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
              >
                <template #label>
                  <i>Password<span class="error--text">*</span> </i>
                </template>
              </v-text-field>

              <div class="d-flex justify-space-between align-center">
                <v-checkbox label="Remember Me" color="black"></v-checkbox>
                <span class="black--text">Forgot Password?</span>
              </div>
              <v-row justify="center" class="mt-3">
                <v-btn color="warning" block class="mb-6 black--text">
                  Login
                </v-btn>
              </v-row>
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
