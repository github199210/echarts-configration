<!--
 * @Descripttion:
 * @Author: sqq
 * @Date: 2020-12-11 15:38:00
 * @LastEditors: sqq
 * @LastEditTime: 2020-12-15 13:51:26
-->
<template>
  <div class="common-config">
    <div id="common" style="width: 400px;height: 100%;"></div>
    <div class="editor">
      <vue-jsoneditor v-model='option' :mode="'code'" lang="zh" @json-change="onJsonChange" @has-error="onError">
      </vue-jsoneditor>
      <el-button type='primary' @click='run'>运行</el-button>
    </div>
    <div class="notice">
      <el-collapse>
        <el-collapse-item>
          <template slot="title">
            <span style="font-size:18px;font-weight:700">全局样式（颜色）:</span>
            color/background
          </template>
          <div style="text-align: left;">
            <strong>color:</strong>
            具体图表线/柱子/饼子的颜色,可设置渐变色https://echarts.apache.org/zh/option.html#backgroundColor
          </div>
          <div style="text-align: left;">
            <strong>backgroundColor:</strong>整个图表背景图,默认透明
          </div>
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            <span style="font-size:18px;font-weight:700">全局样式（包括xy轴数值及单位样式）:</span>
            <p style="float: right;">textStyle</p>
          </template>
          <div>
            <vue-jsoneditor v-model='textStyle' :mode="'view'" lang="zh"></vue-jsoneditor>
          </div>
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            <span style="font-size:18px;font-weight:700">全局样式（标题）:</span>
            title
          </template>
          <div>
            <vue-jsoneditor v-model='title' :mode="'view'" lang="zh"></vue-jsoneditor>
          </div>
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            <span style="font-size:18px;font-weight:700">全局样式（数据项/图例）:</span>
            legend
          </template>
          <div>
            <vue-jsoneditor v-model='legend' :mode="'view'" lang="zh"></vue-jsoneditor>
          </div>
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            <span style="font-size:18px;font-weight:700">全局样式（网格）:</span>
            grid
          </template>
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            <span style="font-size:18px;font-weight:700">全局样式（提示信息）:</span>
            tooltip
          </template>
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            <span style="font-size:18px;font-weight:700">全局样式（x轴）:</span>
            xAxis
          </template>
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            <span style="font-size:18px;font-weight:700">全局样式（y轴）:</span>
            yAxis
          </template>
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            <span style="font-size:18px;font-weight:700">全局样式（类型）:</span>
            series
          </template>
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            <span style="font-size:18px;font-weight:700">全局样式（动画）:</span>
            animation
          </template>
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            <span style="font-size:18px;font-weight:700">全局样式（UTC时间）:</span>
            useUTC
          </template>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeNames: [1],
        textStyle: {
          textStyle: {
            color: '文字的颜色',
            fontStyle: "字体风格 normal/italic/oblique",
            fontWeight: '字体粗细 normal/bold/bolder/lighter/700',
            fontFamily: '字体系列 serif/monospace/Arial/Courier New/Microsoft YaHei/...',
            fontSize: '文字大小 12',
            lineHeight: '行高 rich 中如果没有设置 lineHeight，则会取父层级的 lineHeight',
            width: '文字块的宽度 注意，如果不定义 rich 属性，则不能指定 width 和 height',
            height: '文字块的高度 注意，如果不定义 rich 属性，则不能指定 width 和 height',
            textBorderColor: '文字本身描边颜色',
            textBorderWidth: '文字本身描边宽度',
            textShadowColor: '文字本身的阴影颜色',
            textShadowBlur: '文字本身的阴影长度',
            textShadowOffsetX: '文字本身阴影X偏移',
            textShadowOffsetY: '文字本身阴影Y偏移'
          }
        },
        option: {
          color: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074',
            '#546570', '#c4ccd3'
          ], //折线图的线和柱状图的柱子颜色,可设置渐变色(https://echarts.apache.org/zh/option.html#backgroundColor)
          backgroundColor: 'transparent', //整个图表背景图,默认透明
          textStyle: {}, //全局样式,包括xy轴数值及单位样式
          title: {},
          legend: {},
          grid: {},
          tooltip: {},
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
          }],
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
        },
        title: {
          title: {
            id: '组件ID,默认不指定，指定则可用于在option/API中引用组件',
            show: '是否显示标题',
            text: '主标题',
            link: '主标题文本超链接',
            target: '指定窗口打开主标题超链接 self/blank',
            textStyle: {
              '主标题文字样式': 'color/fontStyle/fontFamily/fontWeight/fontSize/lineHeight/width/height/textBorderColor/textBorderWidth/textShadowColor/textShadowBlur/textShadowOffsetX/textShadowOffsetY/rich'
            },
            subtext: '副标题文本，支持\n换行',
            sublink: '副标题文本超链接',
            subtarget: '指定打开富文本超连接',
            subtextStyle: {
              '副标题文字样式': 'color/fontStyle/fontFamily/fontWeight/fontSize/lineHeight/width/height/textBorderColor/textBorderWidth/textShadowColor/textShadowBlur/textShadowOffsetX/textShadowOffsetY/rich'
            },
            textAlign: '整体（包括 text 和 subtext）的水平对齐。auto/left/right/center',
            textVerticalAlign: '整体（包括 text 和 subtext）的垂直对齐auto/left/right/center',
            triggerEvent: '是否触发事件',
            padding: '标题内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。',
            itemGap: '主副标题之间的间距。',
            zlevel: '所有图形的 zlevel 值(用于优化)',
            z: '组件的所有图形的z值。控制图形的前后顺序。z值小的图形会被z值大的图形覆盖。',
            left: 'title 组件离容器左侧的距离 left/center/right',
            top: 'title 组件离容器上侧的距离 top/middle/bottom',
            right: 'title 组件离容器右侧的距离。',
            bottom: 'title 组件离容器下侧的距离。',
            backgroundColor: '标题背景色，默认透明',
            borderColor: '标题的边框颜色',
            borderWidth: '标题的边框线宽',
            borderRadius: '圆角半径',
            shadowBlur: '图形阴影的模糊大小 该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果',
            shadowColor: '阴影颜色',
            shadowOffsetX: '阴影水平方向上的偏移距离',
            shadowOffsetY: '阴影垂直方向上的偏移距离。'
          },

        },
        legend: {
          legend: {
            type: '图例类型 plain（普通）/scroll(可滚动翻页，设置见https://echarts.apache.org/zh/option.html#legend.type)',
            id: '组件ID 指定则可用于在 option 或者 API 中引用组件',
            show: '可控制图例显示与隐藏',
            zlevel: '所有图形的 zlevel 值(用于优化)',
            z: '组件的所有图形的z值。控制图形的前后顺序。z值小的图形会被z值大的图形覆盖',
            left: '图例组件离容器左侧的距离 left/center/right',
            top: '图例组件离容器上侧的距离 top/middle/bottom',
            right: '图例组件离容器右侧的距离',
            bottom: '图例组件离容器下侧的距离',
            width: '图例组件的宽度。默认自适应',
            height: '图例组件的高度。默认自适应',
            orient: '图例列表的布局朝向 horizontal/vertical',
            align: '图例标记和文本的对齐 根据组件的位置和 orient 决定 auto/left/right',
            padding: '图例内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距',
            itemGap: '图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔',
            itemWidth: '图例标记的图形宽度',
            itemHeight: '图例标记的图形高度',
            symbolKeepAspect: '如果图标（可能来自系列的 symbol 或用户自定义的 legend.data.icon）是 path:// 的形式，是否在缩放时保持该图形的长宽比',
            formatter: '用来格式化图例文本，支持字符串模板和回调函数两种形式',
            selectedMode: '图例选择的模式 默认开启 false/single/multiple',
            inactiveColor: '图例关闭时的颜色 默认点击变灰',
            selected: '图例选中状态表',
            textStyle: {
              '图例的公用文本样式': '{ color , fontStyle , fontWeight , fontFamily , fontSize , lineHeight , backgroundColor , borderColor , borderWidth , borderRadius , padding , shadowColor , shadowBlur , shadowOffsetX , shadowOffsetY , width , height , textBorderColor , textBorderWidth , textShadowColor , textShadowBlur , textShadowOffsetX , textShadowOffsetY , rich }'
            },
            tooltip: '默认不显示，可以在 legend 文字很多的时候对文字做裁剪并且开启 tooltip',
            icon: '图例项的icon circle/rect/roundRect/triangle/diamond/pin/arrow/none 自定义icon见https://echarts.apache.org/zh/option.html#legend.icon',
            data: [{
              name: '图例项的名称，应等于某系列的name值（如果是饼图，也可以是饼图单个数据的 name）',
              icon: '图例项的 icon',
              textStyle: '图例项的文本样式。'
            }],
            backgroundColor: '图例背景色，默认透明',
            borderColor: '图例的边框颜色',
            borderWidth: '图例的边框线宽',
            borderRadius: '圆角半径',
            shadowBlur: '图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。',
            shadowColor: '阴影颜色',
            shadowOffsetX: '阴影水平方向上的偏移距离',
            shadowOffsetY: '阴影垂直方向上的偏移距离',
            emphasis: {
              selectorLabel: '{ show , distance , rotate , offset , color , fontStyle , fontWeight , fontFamily , fontSize , align , verticalAlign , lineHeight , backgroundColor , borderColor , borderWidth , borderRadius , padding , shadowColor , shadowBlur , shadowOffsetX , shadowOffsetY , width , height , textBorderColor , textBorderWidth , textShadowColor , textShadowBlur , textShadowOffsetX , textShadowOffsetY , rich }'
            },
            selector: '图例组件中的选择器按钮 目前包括全选和反选两种功能',
            selectorLabel: '{ show , distance , rotate , offset , color , fontStyle , fontWeight , fontFamily , fontSize , align , verticalAlign , lineHeight , backgroundColor , borderColor , borderWidth , borderRadius , padding , shadowColor , shadowBlur , shadowOffsetX , shadowOffsetY , width , height , textBorderColor , textBorderWidth , textShadowColor , textShadowBlur , textShadowOffsetX , textShadowOffsetY , rich }',
            selectorPosition: '选择器的位置，可以放在图例的尾部或者头部，对应的值分别为 end 和 start。默认情况下，图例横向布局的时候，选择器放在图例的尾部；图例纵向布局的时候，选择器放在图例的头部。',
            selectorItemGap: '选择器按钮之间的间隔',
            selectorButtonGap: '选择器按钮与图例组件之间的间隔'
          }
        }
      }
    },
    computed: {
      commonCharts() {
        return this.$echarts.init(document.getElementById('common'))
      }
    },
    mounted() {
      this.initChart()
      window.onresize = this.commonCharts.resize
    },
    methods: {
      initChart() {
        this.commonCharts.setOption(this.option)
      },
      handleChange(val) {
        console.log(val);
      },
      onJsonChange() {},
      run() {
        this.initChart()
      },
      onError() {}
    }
  }

</script>
<style lang="less" scoped>
  .common-config {
    display: flex;
    height: calc(100vh - 80px);
  }

  .editor {
    flex: 1;
    background-color: #ccc;

    /deep/ .ace-jsoneditor .ace_text-layer {
      text-align: left;
    }

    /deep/.jsoneditor-vue {
      height: calc(100vh - 180px);
    }

    /deep/.el-button {
      margin-top: 10px;
      cursor: pointer;
      width: 100px;
      font-size: 14px;
    }
  }

  .notice {
    flex: 1;
    background-color: #ccc;

    /deep/.jsoneditor-vue {
      height: 500px;
    }
  }

</style>
