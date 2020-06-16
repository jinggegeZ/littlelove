<template>
 <div class="continar">
    <div class="box">
     <div class="title">欢迎来到小爱后台管理系统</div>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="请输入用户名" prop="username">
        <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="请输入密码" prop="passWord">
        <el-input type="password" v-model="ruleForm.passWord" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
        <el-button type="primary" @click="regForm('ruleForm')" class="reg">立即注册</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')" class="submit">立即登录</el-button>
        </el-form-item>
</el-form>
    </div>
 </div>
</template>

<script>
import axios from 'axios'
 export default {
   name: 'register',
   props: {
   },
   components: {

   },
   data() {
      return {
        ruleForm: {
          checkPass: '',
          username: ''
        },
        rules: {
          username: [
            {
              required:true,
              message:"用户名不能为空",
              trigger:"blur"
            },
            {
              min:2,
              max:10,
              message:"用户名在2-10位之间",
              trigger:"blur"
            }
          ]
        }
      };
    },
   methods: {
      submitForm() {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            this.$message.success('登录成功')
             this.$router.push('/')
          } else {
            this.$message.error('用户名或者密码错误')
            return false;
          }
        });
      },
      register(){
        this.$router.push("/Register")
      }
     
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
.continar {
    width:100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.box {
    width: 400px;
    height: 500px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid #dddddd;
    background: white;
    box-shadow: 0 1px 2px 0 #ddd;
}
.title {
  height: 60px;
  border-bottom: 1px solid rgb(241, 243, 248);
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
.submit {
  margin-left: 60px;
  
}
.reg {
  margin-right: 60px;
}
</style>