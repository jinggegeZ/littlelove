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
      <el-col :span="24">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>首页</span>
        </template>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">已发布</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">统计</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-setting"></i>
        <span slot="title">发表文章</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-setting"></i>
        <span slot="title">标签页</span>
      </el-menu-item>
      <el-menu-item index="7">
        <i class="el-icon-setting"></i>
        <span slot="title">导出excel</span>
      </el-menu-item>
      <el-menu-item index="8">
        <i class="el-icon-setting"></i>
        <span slot="title">图片上传l</span>
      </el-menu-item>
      <el-menu-item index="9">
        <i class="el-icon-setting"></i>
        <span slot="title">退出系统</span>
      </el-menu-item>
    </el-menu>
  </el-col>
    </el-aside>
    <el-main>
      
    </el-main>
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