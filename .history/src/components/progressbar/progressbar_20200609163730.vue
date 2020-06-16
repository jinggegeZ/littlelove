<template>
 <div>
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
.progressbar {
    width: 100px;
}
</style>