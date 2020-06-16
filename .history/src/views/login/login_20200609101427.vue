<template>
 <div>
    <div class="homepage-hero-module">
    <div class="video-container">
      <div class="filter"></div>
      <video autoplay loop muted playsinline src="bg" class="fillWidth"></video>
      <div class="poster hidden">
        <img src="PATH_TO_JPEG" alt="">
      </div>
    </div>
  </div>
 </div>
</template>

<script>
import $ from 
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
   watch: {

   },
   computed: {

   },
   mounted: function() {
      window.onresize = () => {
        const windowWidth = document.body.clientWidth
        const windowHeight = document.body.clientHeight
        const windowAspectRatio = windowHeight / windowWidth
        let videoWidth
        let videoHeight
        if (windowAspectRatio < 0.5625) {
          videoWidth = windowWidth
          videoHeight = videoWidth * 0.5625
          this.fixStyle = {
            height: windowWidth * 0.5625 + 'px',
            width: windowWidth + 'px',
            'margin-bottom': (windowHeight - videoHeight) / 2 + 'px',
            'margin-left': 'initial'
          }
        } else {
          videoHeight = windowHeight
          videoWidth = videoHeight / 0.5625
          this.fixStyle = {
            height: windowHeight + 'px',
            width: windowHeight / 0.5625 + 'px',
            'margin-left': (windowWidth - videoWidth) / 2 + 'px',
            'margin-bottom': 'initial'
          }
        }
      }
      window.onresize()
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