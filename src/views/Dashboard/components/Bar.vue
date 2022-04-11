<template>
  <div class="echart" id="mychart1" :style="myChartStyle"></div>
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
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      const option = {
        title: {
          text: '服务器参与度',
          // subtext: 'Fake Data',
          left: 'center'
        },
        tooltip: {
          show:false,
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: '服务器一' },
              { value: 735, name: '服务器二' },
              { value: 580, name: '服务器三' },
              { value: 484, name: '服务器四' },
              { value: 300, name: '服务器五' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      const myChart = echarts.init(document.getElementById("mychart1"));
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
  width: auto;
  height: auto;
}
</style>

