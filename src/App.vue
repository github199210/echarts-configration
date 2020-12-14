<!--
 * @Descripttion: 
 * @Author: sqq
 * @Date: 2020-12-11 15:20:29
 * @LastEditors: sqq
 * @LastEditTime: 2020-12-14 16:41:18
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to='/'>echart安装</router-link>|
      <router-link to="/commonconfig">公共配置</router-link> |
      <router-link to="/line">折线图</router-link> |
      <router-link to="/bar">柱状图</router-link>|
      <router-link to="/pie">饼图</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

</style>
