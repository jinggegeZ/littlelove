<template>
 <div>
    div class="materialContainer">
        <div class="box">
            <div class="title">登录</div>
            <div class="input">
                <label for="name">用户名</label>
                <input type="text" name="name" id="name">
                <span class="spin"></span>
            </div>
            <div class="input">
                <label for="pass">密码</label>
                <input type="password" name="pass" id="pass">
                <span class="spin"></span>
            </div>
            <div class="button login">
                <button>
                    <span>登录</span>
                    <i class="fa fa-check"></i>
                </button>
            </div>
            <a href="javascript:" class="pass-forgot">忘记密码？</a>
        </div>

        <div class="overbox">
            <div class="material-button alt-2">
                <span class="shape"></span>
            </div>
            <div class="title">注册</div>
            <div class="input">
                <label for="regname">用户名</label>
                <input type="text" name="regname" id="regname">
                <span class="spin"></span>
            </div>
            <div class="input">
                <label for="regpass">密码</label>
                <input type="password" name="regpass" id="regpass">
                <span class="spin"></span>
            </div>
            <div class="input">
                <label for="reregpass">确认密码</label>
                <input type="password" name="reregpass" id="reregpass">
                <span class="spin"></span>
            </div>
            <div class="button">
                <button>
                    <span>注册</span>
                </button>
            </div>
        </div>

    </div>
    <script src="https://www.jq22.com/jquery/jquery-1.10.2.js"></script>
    <script src="js/index.js"></script>
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

<style scoped lang='scss'>

</style>