<template>
 <div>
    <div class="box">
       <div class="login">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
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
  .box {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size:100% 100% ;
    background:url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592209724&di=57fbea81587e47babcafd5e8a6684e1c&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F016942596081a6a8012193a3fc8cae.gif');
  }
  .login {
    width: 300px;
    height: 500px;
    background: black;
  }

</style>