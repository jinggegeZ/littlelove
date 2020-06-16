<template>
 <div>
    <div class="nav-box">
        <div class="nab1"> 
            <div class="nab11">
                <div class="nab11-1">
                    <div class="nab111">今日发布</div>
                    <div class="nab111 nab112">1</div>
                </div>
                <div class="nab16"><img src="../../../public/cen1 (1).png" alt="" width="55px" height="55px"></div>
            </div>
            <div class="nab12">
                <div class="nab11-1">
                    <div class="nab111">今日发布</div>
                    <div class="nab111 nab112">1</div>
                </div>
                <div class="nab16"><img src="../../../public/cen1 (2).png" alt="" width="55px" height="54px"></div>
            </div>
            <div class="nab13">
                <div class="nab11-1">
                    <div class="nab111">今日发布</div>
                    <div class="nab111 nab112">1</div>
                </div>
                <div class="nab16"><img src="../../../public/cen3.png" alt="" width="55px" height="55px"></div>
            </div>
            <div class="nab14">
                <div class="nab11-1">
                    <div class="nab111">今日发布</div>
                    <div class="nab111 nab112">1</div>
                </div>
                <div class="nab15"><img src="../../../public/cen4.png" alt="" width="55px" height="55px"></div>
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
        justify-content: center;
        align-items: center;
    }
    .nab12 {
        width: 25%;
        height: 55px;
        display: flex;
        background: rgb(232,138,135);
        position: relative;
        justify-content: center;
        align-items: center;
    }
    .nab14 {
        width: 25%;
        height: 55px;
        display: flex;
        background: rgb(159,206,193);
        position: relative;
        justify-content: center;
        align-items: center;
    }
    .nab13 {
        width: 25%;
        height: 55px;
        display: flex;
        background: rgb(131,117,163);
        position: relative;
        justify-content: center;
        align-items: center;
    }
    .nab15 {
        position: absolute;
        right: 5px;
        top: 1px;
    }
    .nab16 {
        position: absolute;
        right: 5px;
        top: -1px;
    }
    .nab111 {
        color: white;
    }
    .nab112 {
        display: flex;
        justify-content: center;
    }
</style>