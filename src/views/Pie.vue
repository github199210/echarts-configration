<!--
 * @Descripttion: 
 * @Author: sqq
 * @Date: 2020-12-11 15:27:41
 * @LastEditors: sqq
 * @LastEditTime: 2020-12-14 11:14:45
-->
<template>
  <div id="pie" style="width: 400px;height: 600px;"></div>
</template>
<script>
  export default {
    mounted() {
      let pieChart = this.$echarts.init(document.getElementById('pie'))
      let option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        // legend: {
        //   orient: 'vertical',
        //   left: 10,
        //   data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        // },
        title: {
          text: '{a|test}',
          textStyle: {
            rich: {

            }
          },
          subtext: 'subTest',
          subtextStyle: {
            color: "red"
          },
          borderWidth: 1,
          borderColor: "red",
          left: "center",
          bottom: "15%",
          borderRadius: '50%',
          backgroundColor: "#ccc"
        },
        series: [{
          name: '访问来源',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: 'center'
          },
          // emphasis: {
          //     label: {
          //         show: false,
          //         fontSize: '30',
          //         fontWeight: 'bold'
          //     }
          // },
          labelLine: {
            show: false
          },
          data: [{
              value: 335,
              name: '{a|直接访问}\n{b|设备健康率}',
              label: {
                position: "center",
                color: "#fff",
                fontSize: 32,
                fontWeight: 600,
                borderColor: 'red',
                borderWidth: 1,
                borderRadius: 900,
                padding: [90, 70],
                rich: {
                  a: {
                    color: '#fff',
                    fontSize: 30,
                    fontWeight: 700
                  },
                  b: {
                    color: '#000',
                    fontSize: 18,
                    padding: 20

                  }
                }
              },
              itemStyle: {
                normal: {
                  color: "rgba(55,244,255,0)",
                },
              },
            },
            {
              value: 310
            },
            {
              value: 234
            },
            {
              value: 135
            },
            {
              value: 1548
            }
          ],
          legendHoverLink: false,
          hoverAnimation: false,
          startAngle: 275
        }]
      };
      pieChart.setOption(option)
    }
  }

</script>
