<!--
 * @Descripttion: 
 * @Author: sqq
 * @Date: 2020-12-11 15:20:29
 * @LastEditors: sqq
 * @LastEditTime: 2020-12-15 10:44:51
-->
<template>
  <div id="app">
    <div class="img">
      <el-image style="width: 100px; height: 100px" :src="require('./assets/公共配置.jpg')" :preview-src-list="imgList"
        @mousedown.native='dragImage'>
      </el-image>
    </div>
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
<script>
  export default {
    data() {
      return {
        imgList: [require('./assets/公共配置.jpg')],
      }
    },
    methods: {
      dragImage(e) {
        console.log('鼠标按下', e, window.clientX, window.clientY)
      },
    },
  }

</script>

<style lang="less" scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    position: relative;
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

  .img {
    position: absolute;
    left: 0;
    top: 0;
  }

</style>
