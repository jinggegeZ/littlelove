<template>
 <div>
    <div class="box">
        <div class="head">
            <div><el-button type="success">返回</el-button></div>
            <div><el-button type="primary">编辑</el-button></div>
        </div>
        <div class="nav">
            <div class="nav1">
                <div>文章标题：</div>
                <div class="ipt"><el-input v-model="title" placeholder="请输入内容"></el-input></div>
            </div>
            <div class="nav1">
                <div>文本摘要：</div>
                <div class="ipt"><el-input v-model="abstract" placeholder="请输入内容"></el-input></div>
            </div>
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
         abstract: '',
         title:'',
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
    margin-bottom: 50px;
}
.nav {
    width: 100%;
    height: 50px;
    align-items: center;
    margin-bottom: 15px;
}
.ipt {
    width: 80%;
    
}
.nav1 {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    margin-left: 25px;
}
</style>