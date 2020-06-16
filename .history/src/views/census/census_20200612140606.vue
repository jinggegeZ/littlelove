<template>
 <div>
    <div class="nav-box">
        <div class="nab1"> 
            <div class="nab11">
                <div></div>
                <div class="nab15"><img src="../../../public/cen1 (1).png" alt=""></div>
            </div>
            <div class="nab12">
                <div></div>
                <div class="nab15"><img src="../../../public/cen1 (2).png" alt=""></div>
            </div>
            <div class="nab13">
                <div></div>
                <div class="nab15"><img src="../../../public/cen3.png" alt=""></div>
            </div>
            <div class="nab14">
                <div></div>
                <div class="nab15"><img src="../../../public/cen4.png" alt=""></div>
            </div>
        </div>
        <div class="nab2">
            <div></div>
            <div></div>
        </div>
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
        margin-bottom: 15px;
    }
    .nab11 {
        width: 25%;
        height: 55px;
        display: flex;
        background: rgb(124,202,191);
        position: relative;
    }
    .nab12 {
        width: 25%;
        height: 55px;
        display: flex;
        background: rgb(232,138,135);
        position: relative;
    }
    .nab14 {
        width: 25%;
        height: 55px;
        display: flex;
        background: rgb(159,206,193);
        position: relative;
    }
    .nab13 {
        width: 25%;
        height: 55px;
        display: flex;
        background: rgb(131,117,163);
        position: relative;
    }
    .nab15 {
        position: absolute;
        right: 5px;
    }
</style>