<template>
  <v-container>
    <v-row class="fill-height" align="center" justify="center">
      <v-col cols="12" sm="6" order="2">
        <div>
          <v-card flat max-width="24rem" class="mx-auto">
            <h2 class="text-center">Create a new account</h2>

            <v-form class="mt-2">
              <v-text-field filled v-model="dform.companyName" color="success" dense>
                <template #label>
                  <i
                    >Your Company's Name Here <span class="error--text">*</span>
                  </i>
                </template>
              </v-text-field>
              <v-text-field type="email" v-model="dform.companyEmail" filled color="success" dense>
                <template #label>
                  <i
                    >Your Company's Email <span class="error--text">*</span>
                  </i>
                </template>
              </v-text-field>
              <v-text-field type="number" v-model="dform.companyNumber" filled color="success" dense>
                <template #label>
                  <i>Your Company's Phone<span class="error--text">*</span> </i>
                </template>
                >
              </v-text-field>
              <v-text-field
              v-model="dform.password"
                dense
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

              <v-text-field
                filled
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
              <div class="mt-2">
               
                  <v-btn @click="createAccount" block color="warning" class="mb-3 black--text">
                    Create Account
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
import MainSlide from '@/components/MainSlide.vue';
import {createAccount, docUpate} from '@/Auth/index';
export default {
   components:{
    MainSlide,
   
},
  data() {
    return {
      dform: {},
      showPassword: false,
    };
  },

  methods:{
   async createAccount(){
    try{
      const res = await createAccount.start(this.dform.companyEmail, this.dform.password);
      console.log(res.user.email);
      let owner_id = "EkO" + Math.floor(Math.random()* 2345677);
      let business_id = "EkB" + Math.floor(Math.random()* 2345686677);
      await docUpate.update('company', res.user.uid,
       {
        CompanyName: this.dform.companyName,
        companyEmail: this.dform.companyEmail,
        CompanyPhone: this.dform.companyNumber,
        Owner_id: owner_id,
        Owner_registration: false,
        Business_id: business_id,
        Business_registration: false,
       }
       )

       alert("completed")

    }catch(err){
      alert(err)
    }
    }
  },
};
</script>
