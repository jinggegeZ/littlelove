<template>
 <div>
   <homePage></homePage>
   <Published></Published>
 </div>
</template>

<script>
import dayjs from 'dayjs';
import axios from 'axios';
import homePage from '../components/homePage/homePage'
import Published from '../components/Published/Published'
 export default {
   name: 'home',
   props: {
   },
   components: {
     homePage,
     Published,
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
