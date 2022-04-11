<template>
  <el-table
      class="el-table"
      :data="tableData"
      style="width: 100%">
    <el-table-column
        prop="name"
        label="名称"
        width="180">
    </el-table-column>
    <el-table-column
        prop="id"
        label="ID"
        width="180">
    </el-table-column>
    <el-table-column
      label="其他信息"
      width="360"></el-table-column>
    <el-table-column
        label="状态">
      <img class="table-img" src="@/assets/dashboard_images/running.png">
    </el-table-column>
    <el-table-column
      label="详情"></el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        id: '201605-02',
        name: '任务1'
      }, {
        id: '20160504',
        name: '任务2'
      }, {
        id: '20160501',
        name: '任务3'
      }]
    }
  }
}
</script>
<style>
.el-table{
  box-shadow: 3px 3px 5px #888888;
}
.table-img{
  width: 20px;
  height: 20px;
}
</style>