<template>
  <div>
    <p>
      Informations with (<span class="error--text">*</span>) are compulsory.
    </p>
    <v-row class="mt-2">
      <v-col cols="12" md="6">
        <v-text-field filled>
          <template #label>
            <i>Company Name <span class="error--text">*</span> </i>
          </template>
        </v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field filled>
          <template #label>
            <i>Email Address<span class="error--text">*</span> </i>
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
        <v-text-field filled>
          <template #label>
            <i>State: <span class="error--text">*</span> </i>
          </template>
        </v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field filled>
          <template #label>
            <i
              >Local Government Area (LGA) <span class="error--text">*</span>
            </i>
          </template>
        </v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-radio-group dense row required>
          <span class="mr-3"
            >Is Your Business Registered <span class="error--text">*</span> :
          </span>
          <v-radio label="Yes" value="Yes" color="success"></v-radio>
          <v-radio label="No" value="No" color="success"></v-radio>
        </v-radio-group>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field filled>
          <template #label>
            <i>If Yes, What year? <span class="error--text">*</span> </i>
          </template>
        </v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field filled>
          <template #label>
            <i>Business Category<span class="error--text">*</span> </i>
          </template>
        </v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field filled>
          <template #label>
            <i>Company Website </i>
          </template>
        </v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <v-text-field filled>
          <template #label>
            <i>Linkedin Url</i>
          </template>
        </v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field filled>
          <template #label>
            <i>Facebook Url </i>
          </template>
        </v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field filled>
          <template #label>
            <i>Twitter Url</i>
          </template>
        </v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field filled>
          <template #label>
            <i>Instagram Url </i>
          </template>
        </v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-textarea filled rows="1" auto-grow>
          <template #label>
            <p>
              Business Overview<i>
                (A brief description of what your business is all about)
                <span class="error--text">*</span>
              </i>
            </p>
          </template>
        </v-textarea>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field filled>
          <template #label>
            <i>
              Who Are Your Target Audience?
              <span class="error--text">*</span>
            </i>
          </template>
        </v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field filled>
          <template #label>
            <i>
              What Problem(s) Is Your Business Trying To Solve?
              <span class="error--text">*</span>
            </i>
          </template>
        </v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field filled>
          <template #label>
            <i>
              What Are Your Solutions To The Problem(s)?
              <span class="error--text">*</span>
            </i>
          </template>
        </v-text-field>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>
