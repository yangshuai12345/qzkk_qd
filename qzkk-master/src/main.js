import Vue from 'vue'
//import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import axios from 'axios';
import qs from 'qs';
import Vuex from "vuex";

Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;

Vue.use(Vuex)

//main.js文件 引入mock.js
//require('./mock.js');



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')