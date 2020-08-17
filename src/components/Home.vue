 /* eslint-disable */ 
<template>
  <div class="home-wrap">
<el-menu :default-active="activeIndex"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b"
  class="el-menu-demo"
   mode="horizontal"
    @select="handleSelect"
    >
  <el-menu-item index="1">我的简历</el-menu-item>
  <el-menu-item index="2">学海无涯</el-menu-item>
  <el-menu-item index="3">我的收藏</el-menu-item>
</el-menu>
<div class="line"></div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-wrap{
  background:#545c64;
  width: 100%;

}
.el-menu.el-menu--horizontal{
  margin-left: 30%
};

</style>
