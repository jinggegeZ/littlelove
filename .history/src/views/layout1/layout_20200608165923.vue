<template>
 <div class="box">
  <el-container>
  <el-header>
    <div class="head">
      <div>欢迎xx来到小爱系统</div>
      <div>早上好 ！亲爱的xx 上次登录时间2020年6月8日</div>
    </div>
  </el-header>
  <el-container>
    <el-aside width="200px">
      <div></div>
    </el-aside>
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
 
</style>