<template>
  <div>
    <p>
      Informations with (<span class="error--text">*</span>) are compulsory.
    </p>

    <v-row class="mt-2">
      <v-col cols="12" md="6">
        <v-text-field filled>
          <template #label>
            <i>First Name <span class="error--text">*</span> </i>
          </template>
        </v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field filled>
          <template #label>
            <i>Last Name<span class="error--text">*</span> </i>
          </template>
        </v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field filled>
          <template #label>
            <i>Email Address <span class="error--text">*</span> </i>
          </template>
        </v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field filled>
          <template #label>
            <i>Phone Number <span class="error--text">*</span> </i>
          </template>
        </v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field filled>
          <template #label>
            <i>Contact Address <span class="error--text">*</span> </i>
          </template>
        </v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-radio-group dense row required>
          <span class="mr-3">Gender <span class="error--text">*</span> : </span>
          <v-radio label="Male" value="M" color="success"></v-radio>
          <v-radio label="Female" value="F" color="success"></v-radio>
        </v-radio-group>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field filled type="date" dense required>
          <template #label>
            <i>Date of Birth <span class="error--text">*</span> </i>
          </template>
        </v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-radio-group dense row required>
          <span class="mr-3"
            >Position <span class="error--text">*</span>:
          </span>
          <v-radio label="Founder" value="founder" color="success"></v-radio>
          <v-radio
            label="Co-Founder"
            value="cofounder"
            color="success"
          ></v-radio>
        </v-radio-group>
      </v-col>
      <v-col cols="12" md="6">
        <v-radio-group dense row required>
          <span class="mr-3"
            >Religion <span class="error--text">*</span>:
          </span>
          <v-radio label="Christian" value="christian" color="red"></v-radio>
          <v-radio label="Islam" value="islam" color="red"></v-radio>
          <v-radio label="Others" value="others" color="red"></v-radio>
        </v-radio-group>
      </v-col>
      <v-col cols="12" md="6">
        <v-radio-group dense row required>
          <span class="mr-3"
            >Hightest Qualification <span class="error--text">*</span>:
          </span>
          <v-radio label="Male" value="M" color="red"></v-radio>
          <v-radio label="Female" value="F" color="red"></v-radio>
        </v-radio-group>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field filled>
          <template #label>
            <i>Course of study <span class="error--text">*</span> </i>
          </template>
        </v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field filled>
          <template #label>
            <i>Name of Institute <span class="error--text">*</span> </i>
          </template>
        </v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field filled>
          <template #label>
            <i>Year of graduation <span class="error--text">*</span> </i>
          </template>
        </v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <v-radio-group dense row required>
          <span class="mr-3"
            >Nysc Completed <span class="error--text">*</span> :
          </span>
          <v-radio label="Yes" value="Yes" color="success"></v-radio>
          <v-radio label="No" value="No" color="success"></v-radio>
          <v-radio label="Exempted" value="Exempted" color="success"></v-radio>
        </v-radio-group>
      </v-col>

      <v-col cols="12">
        <p>Do you have a Co-Founder? if yes <strong>Click here</strong></p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>
