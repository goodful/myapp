import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import myplugin from '@/plugin/myplugin';
import "@/style/index.css";
import store from '@/store/store';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(myplugin);

if (process.env.NODE_ENV === 'development') {
  // 如果是开发环境，mock会拦截ajax请求
  require("./mock/index.js")
}

let vm = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
console.log(vm);
