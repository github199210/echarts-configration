/*
 * @Descripttion: 
 * @Author: sqq
 * @Date: 2020-12-11 15:20:29
 * @LastEditors: sqq
 * @LastEditTime: 2020-12-11 15:37:36
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import CommonConfig from '../views/CommonConfig.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'commonConfig',
    component: CommonConfig
  },
  {
    path: '/line',
    name: 'line',
    component: () => import('../views/Line.vue')
  },
  {
    path: '/bar',
    name: 'bar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Bar.vue')
  },
  {
    path: '/pie',
    name: 'pie',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Pie.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
