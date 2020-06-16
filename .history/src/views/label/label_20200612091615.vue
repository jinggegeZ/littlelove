<template>
 <div>
    <div><template>
      <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">1</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">2</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">3</el-tab-pane>
      </el-tabs>
    </template></div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
       activeName: 'second'
     }
   },
   methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>