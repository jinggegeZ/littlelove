<template>
 <div>
    <div class="box">
        <div class="head">
            <div><el-button type="success">返回</div>
            <div><el-button type="primary">编辑</div>
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
    justify-content: center;
    width: 100%;
    height: 50px;
    align-items: center;
}
</style>