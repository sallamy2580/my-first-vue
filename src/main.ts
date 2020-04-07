import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css';
// @ts-ignore
import VueSocialAuth from 'vue-social-auth';

import '@mdi/font/css/materialdesignicons.css'
// @ts-ignore
import VueMask from 'v-mask';
// @ts-ignore
import { VueMaskDirective } from 'v-mask';
import axios from 'axios';
import {AxiosInstance} from 'axios';

declare module 'vue/types/vue' {

  export interface Vue {
    $http: AxiosInstance;
  }
}

Vue.config.productionTip = false;

Vue.use(VueMask);

Vue.use(VueSocialAuth, {
  providers: {
    google: {
      clientId: '690585364035-tma51au0acfb239gol2su3mho9r7b4bi.apps.googleusercontent.com',
      redirectUri: 'http://www.alzuhud.com:8080/api/auth/socialite/callback/google'
    }
  }
});

Vue.directive('mask', VueMaskDirective);

Vue.mixin({
  data: () => ({
    mobileBreakPoint: 960
  })
})

Vue.prototype.$http = axios;


new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),


}).$mount('#app');
