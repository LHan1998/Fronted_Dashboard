<template>
  <div class="nav-container">
    <div class="logo">
      <p>NICLAB</p>
    </div>
    <div class="nav-right">
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
  }
}
</script>

<style scoped>
.nav-container{
  background: #545c64;
  height: 40px;
  position: fixed;
  z-index: 1001;
  top: 0;
  left: 0;
  width: 100%!important;
  margin: 0;
  padding: 0;
}
.logo{
  width: 180px;
  float: left;
  font-size: 25px;
  color: #45a1ff;
  background: #545c64;
  height: 100%;
  /*line-height: 25px;*/
}
.logo p{
  margin: 10px 0;
}
.nav-right{
  position: absolute;
  left: 180px;
  right: 0;
  height: 100%;
}
</style>