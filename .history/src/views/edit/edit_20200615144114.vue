<template>
 <div>
    <div class="box">
        <div class="head">
            <div><el-button type="success">返回</el-button></div>
            <div><el-button type="primary">编辑</el-button></div>
        </div>
        <div class="nav">
            <div>文章标题：<input type="text"></div>
            <div>文本摘要：<input type="text"></div>
            <div></div>
        </div>
    </div>
 </div>
</template>

<script>
 export default {
   name: 'edit',
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
    height: 100%;
    box-shadow: 0 1px 2px 0 #ddd;
}
.head {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 50px;
    align-items: center;
    margin-bottom: 15px;
}
</style>