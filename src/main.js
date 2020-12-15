/*
 * @Descripttion: 
 * @Author: sqq
 * @Date: 2020-12-11 15:20:29
 * @LastEditors: sqq
 * @LastEditTime: 2020-12-15 10:51:55
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import echarts from 'echarts'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueJsoneditor from 'vue-json-editor';

Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.prototype.$echarts = echarts

Vue.component('VueJsoneditor', VueJsoneditor)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
