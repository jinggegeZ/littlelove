<template>
 <div>
    <div class="box">
       <div class="homepage-hero-module">
    <div class="video-container">
      <div :style="fixStyle" class="filter"></div>
      <video :style="fixStyle" autoplay loop class="fillWidth" v-on:canplay="canplay">
        <source src="PATH_TO_MP4" type="video/mp4"/>
        浏览器不支持 video 标签，建议升级浏览器。
        <source src="PATH_TO_WEBM" type="video/webm"/>
        浏览器不支持 video 标签，建议升级浏览器。
      </video>
      <div class="poster hidden" v-if="!vedioCanPlay">
        <img :style="fixStyle" src="PATH_TO_JPEG" alt="">
      </div>
    </div>
  </div>
    </div>
 </div>
</template>

<script>

 export default {
   name: 'login',
   props: {
   },
   components: {

   },
   data () {
     return {
        vedioCanPlay: false,
        fixStyle: ''
     }
   },
   methods: {
     canplay() {
        this.vedioCanPlay = true
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
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  .login {
    width: 300px;
    height: 500px;
    background: black;
  }

</style>