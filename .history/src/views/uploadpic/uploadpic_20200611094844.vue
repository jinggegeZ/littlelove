<template>
 <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
      <span>支持拖拽</span>
      </div>
      <div class="elui">Element UI自带的上传组件</div>
      <div>
          <el-upload
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
    </div>
      <div class="elu">支持裁剪</div>
      <div class="elui">VUE-img-</div>
</el-card>
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

.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
  }
  .elui {
    height: 50px;
    background: rgb(238,238,238);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 15px;
    padding-left: 25px;
  }
  .elu {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
     margin-bottom: 15px;
     font-size: 18px
  }
</style>