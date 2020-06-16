<template>
 <div>
    <div><img src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png" alt=""></div>
    <div class="progressbar">
        <el-progress :percentage="50"></el-progress>
        <el-progress :percentage="100" :format="format"></el-progress>
        <el-progress :percentage="100" status="success"></el-progress>
        <el-progress :percentage="100" status="warning"></el-progress>
        <el-progress :percentage="50" status="exception"></el-progress>
        </div>
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

     }
   },
   methods: {
    format(percentage) {
        return percentage === 100 ? '满' : `${percentage}%`;
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

<style scoped>

</style>