// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './style/main.css'
import 'font-awesome/css/font-awesome.css'

const FastClick = require('fastclick')
FastClick.attach(document.body)

FastClick.prototype.onTouchEnd = function(event) {
  if(event.target.hasAttribute("type") && event.target.getAttribute("type") == "text") {
    event.preventDefault();
    return false;
  }
}



// 引用API文件
import apiReq from './api/index.js'
// 将API方法绑定到全局
Vue.prototype.$reqApi = apiReq

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
