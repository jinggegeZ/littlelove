<template>
 <div>
    <div class="box">
        <div class="box-head">
            <div><input type="text" placeholder="请输入商品名" class="box-ipt"></div>
        </div>
        <div class="box-nav"></div>
        <div class="box-foot"></div>
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
        border: 1px solid #dddddd;
        box-shadow: 0 1px 2px 0 #ddd;
    }
    .box-head {
        width: 100px;
        height: 10%;
    }
    .box-nav {
        width: 100%;
        height: 70%;
    }
    .box-foot {
        width: 200px;
        height: 10%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .box-ipt {
        height: 40px;
    }
</style>