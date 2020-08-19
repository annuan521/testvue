 /* eslint-disable */ 
<template>

<div class="wrap">
<h2>{{winner}}赢了！</h2>
  <el-button type="primary" @click="reStart">重新开始</el-button>
</div>

</template>

<script>
 export default{
        data(){
            return{
                winner:'',
            }
        },
        methods: {
            reStart(){
                 this.$router.push({  //核心语句
        path:'/follow',   //跳转的路径
       
      })
            }
        },
        created(){  //生命周期里接收参数
            this.winner = this.$route.query.winner,  //接受参数关键代码
            console.log(this.id)  
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap{
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 100px;
}

</style>
