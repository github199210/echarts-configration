/*
 * @Descripttion: 
 * @Author: sqq
 * @Date: 2020-12-11 15:20:29
 * @LastEditors: sqq
 * @LastEditTime: 2020-12-14 11:19:00
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import echarts from 'echarts'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.prototype.$echarts = echarts

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
