<template>
  <div class="echart" id="mychart" :style="myChartStyle"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      xData: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], //横坐标
      yData: [23, 24, 18, 25, 27, 28, 25], //数据
      myChartStyle: { float: "left", width: "100%", height: "400px" } //图表样式
    };
  },
  mounted() {
    setTimeout(()=>{
      this.initEcharts()
    })
  },
  methods: {
    initEcharts() {
      const option = {
        xAxis: {
          type: 'category',
          data: [' ', ' ', ' ', ' ', ' ', ' ', ' ']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Fake Data',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            sampling: 'average',
            itemStyle: {
              color: '#0770FF'
            },
            stack: 'a',
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(58,77,233,0.8)'
                },
                {
                  offset: 1,
                  color: 'rgba(58,77,233,0.3)'
                }
              ])
            },
            data: [42.0, 53.2, 60.1, 73.4, 84.0, 90.5, 89]
          },
          {
            name: 'Fake Data',
            type: 'line',
            smooth: true,
            // stack: 'a',
            symbol: 'circle',
            symbolSize: 5,
            sampling: 'average',
            itemStyle: {
              color: '#F2597F'
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(213,72,120,0.8)'
                },
                {
                  offset: 1,
                  color: 'rgba(213,72,120,0.3)'
                }
              ])
            },
            data: [81.0, 92.2, 91.1, 92.1, 92.0, 93, 96.0]
          }
        ]
      };
      const myChart = echarts.init(document.getElementById("mychart"));
      myChart.setOption(option);
      //随着屏幕大小调节图表
      // window.addEventListener("resize", () => {
      //   myChart.resize();
      // });
    }
  }
};
</script>
<style>
.echart{
  width: 100%;
  height: 110%!important;
}
</style>

