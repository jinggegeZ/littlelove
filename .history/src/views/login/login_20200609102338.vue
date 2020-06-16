<template>
 <div>
    
 </div>
</template>

<script>
import $ from "jquery"
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
   mounted:{
     
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