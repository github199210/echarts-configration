<!--
 * @Descripttion: 
 * @Author: sqq
 * @Date: 2020-12-11 15:38:00
 * @LastEditors: sqq
 * @LastEditTime: 2020-12-14 13:31:02
-->
<template>
  <div class="common-config">
    <div class="tips">

    </div>
    <div id="common" style="width: 400px;height: 600px;"></div>

    公共配置
  </div>
</template>
<script>
  export default {
    mounted() {
      let commonCharts = this.$echarts.init(document.getElementById('common'))
      let option = {
        color: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074',
          '#546570', '#c4ccd3'
        ], //折线图的线和柱状图的柱子颜色,可设置渐变色(https://echarts.apache.org/zh/option.html#backgroundColor)
        backgroundColor: 'transparent', //整个图表背景图,默认透明
        title: {},
        legend: {},
        grid: {},
        tooltip: {},
        xAxis: {},
        yAxis: {},
        series: [],
        textStyle: {}, //全局样式,包括xy轴数值及单位样式
        animation: true, //渲染动画
        animationThreshold: 2000, //???
        animationDuration: function (idx) {
          // 越往后的数据时长越大
          return idx * 100;
        }, //初始动画时长
        animationEasing: 'linear', //动画效果,https://echarts.apache.org/examples/zh/editor.html?c=line-easing
        animationDelay: function (idx) {
          // 越往后的数据时长越大
          return idx * 100;
        }, //初始动画延迟
        animationDurationUpdate: function (idx) {
          // 越往后的数据时长越大
          return idx * 100;
        }, //数据更新动画时长
        animationEasingUpdate: 'linear', //数据更新动画缓动效果
        animationDelayUpdate: function (idx) {
          // 越往后的数据时长越大
          return idx * 100;
        }, //数据更新延迟
        blendMode: 'source-over',
        hoverLayerThreshold: 3000, //????
        useUTC: false //是否使用 UTC 时间
      }
    }
  }

</script>
