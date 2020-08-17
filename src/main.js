
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"
import store from "./vuex"
import filters from "@/filter"
import echarts from "echarts"
//请求拦截
axios.interceptors.request.use((config)=>{
  config.url = "/ele" + config.url;
  return config
})
//响应拦截
axios.interceptors.response.use(({data})=>{
  return data;
})
Vue.prototype.$axios = axios;


for(var key in filters){
  Vue.filter(key,filters[key])
}
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(echarts)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})