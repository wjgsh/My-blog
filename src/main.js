// 入口文件
import "./mock";
import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less";
import router from "./router";
import store from "./store";
import showMessage from "./utils/showMessage";
import { loading } from "./directives/loading";
import vLazy from "./directives/lazy";
import "./eventBus";

store.dispatch("setting/fetchSetting");
Vue.prototype.$showMessage = showMessage;
Vue.directive("loading", loading);
Vue.directive("lazy", vLazy);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
