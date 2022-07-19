<template>
  <v-container>
    <v-row class="fill-height mt-4" align="center" justify="center">
      <v-col cols="12" sm="6" order="2">
        <div>
          <v-card flat max-width="24rem" class="mx-auto">
            <h2 class="text-center">Create a new account</h2>

            <v-form class="mt-4">
              <v-text-field rounded color="success" outlined dense>
                <template #label>
                  <i
                    >Your Company's Name Here <span class="error--text">*</span>
                  </i>
                </template>
              </v-text-field>
              <v-text-field type="email" rounded color="success" outlined dense>
                <template #label>
                  <i
                    >Your Company's Email <span class="error--text">*</span>
                  </i>
                </template>
              </v-text-field>
              <v-text-field
                type="number"
                rounded
                color="success"
                outlined
                dense
              >
                <template #label>
                  <i>Your Company's Phone<span class="error--text">*</span> </i>
                </template>
                >
              </v-text-field>
              <v-text-field
                rounded
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

              <v-text-field
                rounded
                outlined
                color="success"
                dense
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
              >
                <template #label>
                  <i>Comfirm Password<span class="error--text">*</span> </i>
                </template>
              </v-text-field>

              <div>
                <v-checkbox
                  label="I agree to all terms and conditions"
                  color="black"
                ></v-checkbox>
              </div>
              <v-row justify="center" class="mt-3">
                <v-btn color="warning" block class="mb-6 black--text">
                  Create Account
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
            src="imgs/img2.jpg"
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
