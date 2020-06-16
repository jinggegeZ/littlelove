<template>
 <div>
   <homePage></homePage>
   <homePage1></homePage1>
   <Published></Published>
 </div>
</template>

<script>
import dayjs from 'dayjs';
import axios from 'axios';
import homePage from '../components/homePage/homePage'
import homePage1 from '../components/homePage1/homePage1'
import Published from '../components/Published/Published'
 export default {
   name: 'home',
   props: {
   },
   components: {
     homePage,
     Published,
     homePage1,
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
