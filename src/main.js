// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//配置了路由以后地址栏会变成http://localhost:8081/#/
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import BaiDuMap from 'vue-baidu-map'
// import bikeInfo from './views/bike/bikeInfo.vue'
// import userInfo from './views/user/userInfo.vue'
// import test from './views/test/Test'


Vue.config.productionTip = false

Vue.use(ElementUI,{size:'small'})
Vue.use(BaiDuMap,{ak:"gUHwQ3lW1xhj1YRhy4Tj2LQsxADHUQgf"})


new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
