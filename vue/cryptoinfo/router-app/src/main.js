// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue' // 引入vue
import App from './App'  // 引入App组件 作为整个应用的根组件
import router from './router' // 引入 ./router/index.js里面的设置项

Vue.config.productionTip = false // 是否在控制台显示提示和警告

/* eslint-disable no-new */
var app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
