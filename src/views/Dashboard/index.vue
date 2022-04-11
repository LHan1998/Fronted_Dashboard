<template>
  <div class="container">
    <div class="first">
      <div class="panel">
        <panel-group></panel-group>
      </div>
    </div>
    <div class="second">
      <div class="line-chart">
        <line-chart></line-chart>
      </div>
      <div class="bar">
        <bar></bar>
      </div>
    </div>
    <div class="third">
      <Table></Table>
    </div>
  </div>

</template>

<script>
// import Navbar from "@/views/Dashboard/components/Navbar";
import PanelGroup from "@/views/Dashboard/components/PanelGroup";
import LineChart from "@/views/Dashboard/components/LineChart";
import Bar from "@/views/Dashboard/components/Bar";
import Table from "@/views/Dashboard/components/Table";

export default {
  name: "index",
  components:{
    // Navbar,
    PanelGroup,
    LineChart,
    Bar,
    Table
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.container{
  /*margin-top: 60px;*/
  top:0;
  width: 100%;
  overflow: hidden;
  padding-right: 5px;
  height: 900px;
}
.first{
  margin-top: 30px;
  margin-bottom: 30px;
}
.panel{
  /*margin: 0 20px;*/
  /*margin: 40px 0;*/

}
.second{
  position: relative;
  /*background: red;*/

  margin: 30px 0;
  width: 100%;
  height: 35%;

}
.line-chart{
  position: absolute;
  box-shadow: 3px 3px 5px #888888;
  width: 60%;
  height: 100%;
  background: white;
}
.chart{

}
.bar{
  background: white;
  box-shadow: 3px 3px 5px #888888;
  width: 37%;
  height: 100%;
  position: absolute;
  right: 0;
}
canvas {
  width:100%!important;
}

.third{

  width: 100%;
  height: 25%;
}
</style>