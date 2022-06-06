// 入口文件
import "@/mock";
import Vue from "vue";
import App from "./RightList-test.vue";
import "@/styles/global.less";
import showMessage from "@/utils/showMessage";

Vue.prototype.showMessage = showMessage;
new Vue({
  render: (h) => h(App),
}).$mount("#app");
