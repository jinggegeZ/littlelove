<template>
 <div class="box">
  <el-container>
  <el-header>
  <div class="head"></div>
  </el-header>
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
 
</style>