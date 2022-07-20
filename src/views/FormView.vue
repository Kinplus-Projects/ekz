<template>
  <div>
    <h2 class="text-center black--text secondary py-3">Registration Form</h2>
    <v-stepper v-model="e1">
      <v-stepper-header class="yellow lighten-4">
        <v-stepper-step :complete="e1 > 1" step="1" editable>
          Personal Information
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2" editable>
          Business Information
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card max-width="80vw" class="mb-6 mx-auto" flat>
            <RegisterPersonal />
          </v-card>
          <p class="text-end mt-4">
            <v-btn class="mr-3" color="primary" small> save changes </v-btn>
            <v-btn color="primary" small @click="e1 = 2"> Save </v-btn>
          </p>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card max-width="80vw" class="mb-6 mx-auto" flat>
            <RegisterBusiness />
          </v-card>

          <p class="text-end mt-4">
            <v-btn class="mr-3" color="primary" small> save changes </v-btn>
            <v-btn color="primary" small> Submit Application </v-btn>
          </p>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
import RegisterBusiness from "@/components/forms/RegisterBusiness.vue";
import RegisterPersonal from "@/components/forms/RegisterPersonal.vue";
export default {
  data() {
    return {
      e1: 1,
    };
  },
  components: { RegisterBusiness, RegisterPersonal },
};
</script>
