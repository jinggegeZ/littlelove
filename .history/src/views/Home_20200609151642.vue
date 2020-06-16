<template>
 <div>
   <homePage></homePage>
   <div class="h-nav">
   <homePage1></homePage1>
   <homePage2></homePage2>
   <homepage3></homepage3>
   </div>
   <Published></Published>
 </div>
</template>

<script>
import dayjs from 'dayjs';
import axios from 'axios';
import homePage from '../components/homePage/homePage'
import homePage1 from '../components/homePage1/homePage1'
import homePage2 from '../components/homePage2/homePage2'
import homepage3 from '../components/homepage3/homepage3'
import Published from '../components/Published/Published'
 export default {
   name: 'home',
   props: {
   },
   components: {
     homePage,
     Published,
     homePage1,
     homePage2,
     homepage3,
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
   
</style>
