<template>
 <div>
    <div class="box">
            <div class="head"><el-button @click="comeback" type="primary">返回</el-button></div>
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
       comeback(){
           this.$router.push('edit')
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
    .box {
        width: 100%;
        height: 100%;
    }
    .head {
        width: 100%;
        height: 50px;
        align-items: center;
        margin-left: 15px;
    }
</style>