// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './style/main.css'
import 'font-awesome/css/font-awesome.css'
import fastClick from './utils/editPoll'
import uploader from 'vue-simple-uploader'

Vue.use(uploader)

/*const FastClick = require('fastclick')
FastClick.attach(document.body)

FastClick.prototype.onTouchEnd = function(event) {
  console.log(event);
  if(event.target.hasAttribute("type") && event.target.getAttribute("type") == "text") {
    event.preventDefault();
    return false;
  }
}*/



// 引用API文件
import apiReq from './api/index.js'
// 将API方法绑定到全局
Vue.prototype.$reqApi = apiReq

Vue.config.productionTip = false

// 引用工具文件
import utils from './utils/index.js'
// 将工具方法绑定到全局
Vue.prototype.$utils = utils

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
