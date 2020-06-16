<template>
 <div>
    <div class="nav-box">
        <div class="nab1"> 
            <div class="nab11"></div>
            <div class="nab12"></div>
            <div class="nab13"></div>
            <div class="nab14"></div>
        </div>
        <div class="nab2"></div>
        <div class="nab3"></div>
    </div>
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
    .nab1 {
        width: 100%;
        display: flex;

    }
    .nab11 {
        width: 25%;
        height: 50px;
        display: flex;
        background: rgb(124,202,191);
    }
    .nab12 {
        width: 25%;
        height: 50px;
        display: flex;
        background: rgb(232,138,135);
    }
    .nab14 {
        width: 25%;
        height: 50px;
        display: flex;
        background: rgb(124,202,191);
    }
    .nab13 {
        width: 25%;
        height: 50px;
        display: flex;
        background: rgb(131,117,163);
    }
</style>