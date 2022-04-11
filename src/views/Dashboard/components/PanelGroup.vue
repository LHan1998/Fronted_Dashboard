<template>
  <el-row :gutter="80">
    <el-col :span="6"><div class="grid-content bg-purple">
      <div class="left">
        <img src="@/assets/dashboard_images/task_sum.png">
      </div>
      <div class="right">
        <h3>总任务数</h3>
        <div class="right-text">
          <h4>4</h4>
        </div>
        <div class="right-text">
          <h5>新增1</h5>
        </div>
      </div>
    </div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple">
      <div class="left">
        <img src="@/assets/dashboard_images/stop.png">
      </div>
      <div class="right">
        <h3>待开始任务</h3>
        <div class="right-text">
          <h4>4</h4>
        </div>
        <div class="right-text">
          <h5>新增1</h5>
        </div>
      </div>
    </div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple">
      <div class="left">
        <img src="@/assets/dashboard_images/running.png">
      </div>
      <div class="right">
        <h3>正在运行</h3>
        <div class="right-text">
          <h4>4</h4>
        </div>
        <div class="right-text">
          <h5>新增1</h5>
        </div>
      </div>
    </div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple">
      <div class="left">
        <img src="@/assets/dashboard_images/completed.png">
      </div>
      <div class="right">
        <h3>已完成任务</h3>
        <div class="right-text">
          <h4>4</h4>
        </div>
        <div class="right-text">
          <h5>新增1</h5>
        </div>
      </div>
    </div></el-col>
  </el-row>



</template>

<script>
export default {
  // props: {
  //   tasknum: Number,
  //   tasknum_avg: Number,
  //   tasknum_today: Number,
  //   probenum: Number,
  //   probenum_active: Number,
  //   usernum: Number,
  //   usernum_add: Number,
  //   alertnum: Number,
  //   alertnum_week: Number,
  //   alertnum_month: Number
  // }

}

</script>

<style>
h3,h4{
  margin-bottom: 0;
}
.el-row {
  margin-bottom: 20px;
  height: 100px;

}
.el-col {
  border-radius: 4px;

}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: white;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  box-shadow: 3px 3px 5px #888888;
  min-height: 36px;
  height: 100px;
  position: relative;
}
.left{
  position: absolute;
  height: 100%;
  left: 0px;
  right: 66%;
  top: 0px;
  /*bottom: 100%;*/
}
.left img{
  float: left;
  margin-top: 20px;
  margin-left: 20px;
}
.right{
  position: absolute;
  height: 100%;
  left: 33%;
  right: 0;
}
.right-text{
  float: left;
  height: 30%;
  width: 50%;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>