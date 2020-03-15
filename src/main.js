import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import fancyBox from 'vue-fancybox';


Vue.config.productionTip = false
Vue.use(BootstrapVue)
// Vue.use(fancyBox)


new Vue({
  render: h => h(App),
}).$mount('#vue-library')

