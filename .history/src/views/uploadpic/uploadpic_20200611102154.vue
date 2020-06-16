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
      <div class="elui">VUE-img-crop-upload</div>
      <div>
        <div id="app">
       <el-button class="btn" @click="toggleShow" type="primary">设置头像</el-button>
       <my-upload  
       @crop-success="cropSuccess" 
       @crop-upload-success="cropUploadSuccess"
       @crop-upload-fail="cropUploadFail"
       v-model="show" 
      :width="200" 
      :height="200" 
      img-format="png" 
      :size="size"
      langType='zh'
      :noRotate='false'
      field="Avatar1"
      url="https://httpbin.org/post"></my-upload>    
       <img :src="imgDataUrl">
       </div>
      </div>
</el-card>
 </div>
</template>

<script>
import myUpload from 'vue-image-crop-upload';
 export default {
   name: '',
   props: {
   },
   components: {
     "my-upload": myUpload
   },
   data () {
     return {
       imgDataUrl: "",
        show: false,
        size:2.1
     }
   },
   methods: {
     toggleShow() {
            this.show = !this.show;
        },
        cropSuccess(imgDataUrl, field) {
            console.log('-------- crop success --------',imgDataUrl, field);
        },
        //上传成功回调
        cropUploadSuccess(jsonData, field){
            console.log('-------- upload success --------');
            this.imgDataUrl = jsonData.files.Avatar1;
            console.log(jsonData);
            console.log('field: ' + field);
        },
        //上传失败回调
        cropUploadFail(status, field){
            console.log('-------- upload fail --------');
            console.log('上传失败状态'+ status);
            console.log('field: ' + field);
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