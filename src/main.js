import Vue from 'vue'
//import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import axios from 'axios';
import qs from 'qs';

Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;

//main.js文件 引入mock.js
//require('./mock.js');



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


