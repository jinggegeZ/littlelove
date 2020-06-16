<template>
 <div>
  <div id="particles-js">
		<div class="login">
			<div class="login-top">
				登录
			</div>
			<div class="login-center clearfix">
				<div class="login-center-img"><img src="img/name.png"/></div>
				<div class="login-center-input">
					<input type="text" name="" value="" placeholder="请输入您的用户名" onfocus="this.placeholder=''" onblur="this.placeholder='请输入您的用户名'"/>
					<div class="login-center-input-text">用户名</div>
				</div>
			</div>
			<div class="login-center clearfix">
				<div class="login-center-img"><img src="img/password.png"/></div>
				<div class="login-center-input">
					<input type="password" name=""value="" placeholder="请输入您的密码" onfocus="this.placeholder=''" onblur="this.placeholder='请输入您的密码'"/>
					<div class="login-center-input-text">密码</div>
				</div>
			</div>
			<div class="login-button">
				登陆
			</div>
		</div>
		<div class="sk-rotating-plane"></div>
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
  html{
    width: 100%;
    height: 100%;
    overflow: hidden;
    font-style: sans-serif;
}
body{
    width: 100%;
    height: 100%;
    font-family: 'Open Sans',sans-serif;
    margin: 0;
}
#login{
    position: absolute;
    top: 50%;
    left:50%;
    margin: -150px 0 0 -150px;
    width: 300px;
    height: 300px;
}
#login h1{
    color: #fff;
    text-shadow:0 0 10px;
    letter-spacing: 1px;
    text-align: center;
}
h1{
    font-size: 2em;
    margin: 0.67em 0;
}
input{
    width: 300px;
    height: 40px;
    margin-bottom: 10px;
    outline: none;
    padding: 10px;
    font-size: 13px;
    color: #fff;
    text-shadow:1px 1px 1px;
    border-top: 1px solid #312E3D;
    border-left: 1px solid #312E3D;
    border-right: 1px solid #312E3D;
    border-bottom: 1px solid #56536A;
    border-radius: 4px;
    background-color: #2D2D3F;
}
.but{
    width: 300px;
    min-height: 20px;
    display: block;
    background-color: #4a77d4;
    border: 1px solid #3762bc;
    color: #fff;
    padding: 9px 14px;
    font-size: 15px;
    line-height: normal;
    border-radius: 5px;
    margin: 0;
}

</style>