import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import axios from "axios";
import VueLidate from "vuelidate";

Vue.use(VueLidate);
axios.defaults.baseURL =
  "https://portfolio-1-bfa6a-default-rtdb.firebaseio.com";
// axios.defaults.headers.common["Authorization"] = "fffff";
axios.defaults.headers.get["Accepts"] = "application/json";
const reqInterceptor = axios.interceptors.request.use((confiq) => {
  console.log("Request Interceptors", confiq);
  return confiq;
});
const resInterceptor = axios.interceptors.response.use((res) => {
  console.log("Response Interceptor", res);
  return res;
});
axios.interceptors.request.eject(reqInterceptor);
axios.interceptors.response.eject(resInterceptor);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
