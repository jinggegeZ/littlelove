<template>
 <div>
    <div class="box">
            <div class="head"><el-button @click="comeback" type="primary">返回</el-button></div>
            <div class="m-head">
                    <div class="font1">标题</div>
                    <div class="font2">摘要：</div>
                    <div>发表于：</div>
            </div>
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

<style scoped>
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
    .m-head {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    .font1 {
        font-size: 20px;
        font-weight: 700;
        width: 100%;
        text-align: center;
        margin-bottom: 5px;
    }
    .font2 {
        width: 100%;
        font-style: 14px;
        font-weight: 700;
        text-align: center;
        margin-bottom: 5px;
    }
</style>