import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './store/rem.js'
import './store/request.js'

import  './store/swiper.min.css' 
import './store/swiper.min.js'

import Vant from 'vant';
import 'vant/lib/index.css';

// import './store/mui.js';

// import mui from './store/mui.js'

import * as mui from './store/mui.js'
Vue.prototype.mui = mui;　




Vue.use(Vant);
import axios from 'axios' // 1、在这里引入axios

Vue.prototype.$axios = axios;   // 2、在vue中使用axios

Vue.config.productionTip = false;
// import storage from 'good-storage'
// router.beforeEach((to, from, next) => {
//     // console.log(to)
//     if(to.meta.requiresAuth){
//       let token = storage.get('token')
//       console.log(token)
//       if(token==undefined){
//         next({
//             path: '/login'
//         })
//       }else{
//         next();
//       }			
//     }else{
//       next();
//     }
//   })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
