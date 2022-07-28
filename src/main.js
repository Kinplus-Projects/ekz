import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

import Vue from 'vue';

import {
  getAuth,
  onAuthStateChanged,
} from '@/Auth/index';

import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem('user_id', JSON.stringify(user.uid));
      }else{
        localStorage.removeItem('user_id')
      }
    });
  },
  render: (h) => h(App),
}).$mount('#app');
