<template>
  <div id="layout">
    <navbar></navbar>
    <Siderbar class="sider-bar"></Siderbar>
    <div class="main-container">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import Siderbar from "@/views/Layout/components/Siderbar";
import Navbar from "@/views/Layout/components/Navbar";

export default {
  name: 'Layout',
  components: {
    // Dashboard,
    Siderbar,
    Navbar
  }
}
</script>

<style>
#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f7fafa;
  margin-top: 0;
  padding: 0;
}
.main-container{
  /*padding: 0 80px;*/
  left: 0;
  margin-left: 220px;
  position: relative;
  width: 80%;
  margin-top: 40px;
}
.sider-bar{
  top:40px;
  padding-top: 20px;
  width: 180px!important;
  margin-top: 100px;
  /*height: 100%;*/
  position: fixed;
  left: 0;
  z-index: 1001;
}
</style>
