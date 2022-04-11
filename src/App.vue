<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f7fafa;
  margin-top: 0;
  padding: 0;
}
/*.main-container{*/
/*  !*padding: 0 80px;*!*/
/*  left: 0;*/
/*  margin-left: 220px;*/
/*  position: relative;*/
/*  width: 80%;*/
/*  margin-top: 40px;*/
/*}*/
/*.sider-bar{*/
/*  top:40px;*/
/*  padding-top: 20px;*/
/*  width: 180px!important;*/
/*  margin-top: 100px;*/
/*  !*height: 100%;*!*/
/*  position: fixed;*/
/*  left: 0;*/
/*  z-index: 1001;*/
/*}*/
</style>
