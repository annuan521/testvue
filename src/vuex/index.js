import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"
Vue.use(Vuex);

let state = {
  token: null,
  adminName:  null,
  adminId:  null,
}

let mutations = {

}

let actions = {
  handleLogin({commit},{adminInfo,success,err}) {
    // console.log(adminInfo)
    // console.log(this.$refs.adminName.$data.currentValue)
    axios.post("/login", adminInfo).then((data) => {
        // console.log(data);
        if(data.status){
          success(data.msg)
  
        }else{
          err(data.msg)
        }
    })
  }
}
const store = new Vuex.Store({
  state,
  mutations,
  actions
})
export default store;