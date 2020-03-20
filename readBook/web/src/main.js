import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import 'lib-flexible/flexible'
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from 'axios'



Vue.use(Vant);
Vue.config.productionTip = false
Vue.prototype.$axios = axios 

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
