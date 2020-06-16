<template>
 <div class="box">
  <el-container>
  <el-header>Header</el-header>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-main>Main</el-main>
  </el-container>
</el-container>
 </div>
</template>

<script>
import top from '../../components//top/top'
import side from '../../components/side/side'
 export default {
   name: 'layout',
   props: {
   },
   components: {
     top,
     side,
   },
   data () {
     return {

     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped>
  #app {
    height: 100%;
  }
  .box {
    height: 100%;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: black;
    color:white;
    text-align: center;
    line-height: 200px;
    height: 100%;
    display: fixed;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .el-container.is-vertical {
    height: 100%;
  }
</style>