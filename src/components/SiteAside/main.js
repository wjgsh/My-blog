// 入口文件
import Vue from 'vue'
import App from './test.vue'
import '@/styles/global.less'
import VueRouter from 'vue-router'
import Home from "@/views/Home"
import About from "@/views/About"
import Blog from "@/views/Blog"
import Project from "@/views/Project"
import Message from "@/views/Message"

Vue.use(VueRouter);

const router = new VueRouter({
  routes:[
    { name:"Home",path: "/",component:Home},
    { name:"About",path: "/about",component:About},
    { name:"Blog",path: "/blog",component:Blog},
    { name:"Project",path: "/project",component:Project},
    { name:"Message",path: "/message",component:Message},
  ],
  mode:"history"
})
export default router;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
