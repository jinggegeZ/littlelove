<template>
 <div class="continar">
    <div class="box">
        <div><a href="/login">欢迎来到小爱系统</a></div>
         <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <div>
          <el-form-item label="请输入用户名" prop="username">
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="请输入密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
          </el-form-item>
        </div>
        <el-form-item>
        <div style="display:flex">
        <el-button type="primary" @click="regForm" class="reg">立即注册</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')" class="submit">立即登录</el-button>
        </div>
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
          password: '',
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
          ],
          passWord: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          },
          {
            min: 6,
            max: 15,
            message: "密码在6-10位之间",
            trigger: "blur"
          }
        ]
        }
      };
    },
   methods: {
      submitForm() {
        this.$router.push("/login")
      },
      regForm() {
      axios
        .post("/api/user/register", {
          username: this.ruleForm.username,
          password: this.ruleForm.password
        })
        .then(res => {
          console.log(res.data);
          if (res.data.code === 200) {
            this.$message.success('登录成功')
             
            this.$router.push("/login");
          } else {
            this.$message.error(res.data.message)
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
     
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
a {
  text-decoration: none;
  color: black;
}
.continar {
    width:100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.box {
    width: 500px;
    height: 300px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border: 1px solid #dddddd;
    background: white;
    box-shadow: 0 1px 2px 0 #ddd;
    justify-content: center;
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