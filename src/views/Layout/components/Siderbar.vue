<template>
  <el-menu
      router
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#409EFF">
    <el-submenu index="1">
      <el-menu-item index="4">
      </el-menu-item>
      <template slot="title">
        <span> </span>
      </template>
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>任务管理</span>
      </template>
      <el-menu-item-group>
        <template slot="title" >分组一</template>
        <el-menu-item index="/404">选项1</el-menu-item>
        <el-menu-item index="/">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="/">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <template slot="title">选项4</template>
        <el-menu-item index="/">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="/">
      <i class="el-icon-menu"></i>
      <span slot="title">网络查看</span>
    </el-menu-item>
    <el-menu-item index="/">
      <i class="el-icon-document"></i>
      <span slot="title">用户信息</span>
    </el-menu-item>
    <el-menu-item index="/">
      <i class="el-icon-setting"></i>
      <span slot="title">模型信息</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.el-menu{
  position: fixed;
  width: 180px;
  height: 100%;
}
.el-menu-item{
  width: 180px;
  min-width: 180px!important;
}
.el-menu-demo{
  float: left;
  top: 0;
  width: 10%;
  z-index: 100;
}
</style>