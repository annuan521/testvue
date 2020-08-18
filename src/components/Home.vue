 /* eslint-disable */ 
<template>
  <el-container>
    <el-header>
      <div class="header-wrap">
        <div class="header-left">
          <div class="img-wrap">
          <img src="../assets/pikaqiu.gif" alt="">
        </div>
        <div class="welcome">欢迎你！</div>
        </div>
        
        <el-menu
          :default-active="activeIndex"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1" @click="$router.push('/my')">我的简历</el-menu-item>
          <el-menu-item index="2" @click="$router.push('/study')">学海无涯</el-menu-item>
          <el-menu-item index="3" @click="$router.push('/follow')">我的收藏</el-menu-item>
        </el-menu>
        <div class="img-wrap">
          <!-- <img src="../assets/header.png" /> -->
        </div>
      </div>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header {
  padding: 0;
  background: #545c64;
  
}
.header-left{
  display: flex;
  align-items: center;
  
}
.welcome{
  font-size: 18px;
  color: #fff;
  margin-left: 14px;
}
.header-wrap{
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  align-items: center;
}
.img-wrap{
  height: 48px;
  width: 48px;

}
img{
  width: 100%;
  height: 100%;
  border-radius:25px;
}
.el-menu.el-menu--horizontal {

  border: 0;
}
.el-main{
  width: 80%;
  padding: 0;
  margin: 0 auto;
  padding: 0;
}
</style>
