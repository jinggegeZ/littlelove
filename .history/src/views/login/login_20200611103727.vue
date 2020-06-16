<template>
 <div class="continar">
    <div class="box">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="姓名" prop="username">
        <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
        <el-input type="password" v-model="ruleForm.code" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <div v-html="code" @click="getCode"></div>
        </el-form-item>
        <el-form-item>
    <el-button type="primary" @click="submitForm">登录</el-button>
    <el-button type="warning" @click="register">注册</el-button>
    
  </el-form-item>
</el-form>
    </div>
 </div>
</template>

<script>
import axios from 'axios'
 export default {
   name: 'login',
   props: {
   },
   components: {

   },
   data() {
      return {
        code:"",
        ruleForm: {
          password: '',
          code: '',
          username: ''
        },
        rules: {
          password: [
            {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          },
          {
            min: 6,
            max: 15,
            message: "密码在6-15位之间",
            trigger: "blur"
          }
          ],
          code: [
            {
            required: true,
            message: "验证码不能为空",
            trigger: "blur"
          }
          ],
          username: [
            { required: true,
              message:'用户名不能为空',
              trigger:'blur'
            },
            {
            min: 2,
            max: 10,
            message: "用户名在2-10位之间",
            trigger: "blur"
          }
          ]
        }
      };
    },
   methods: {
      register(){
        this.$router.push("/register")
      },
      submitForm() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          axios
            .post(`/api/user/login`, {
              username: this.ruleForm.username,
              password: this.ruleForm.password,
              code: this.ruleForm.code
            })
            .then(res => {
              if (res.data.code === 200) {
                localStorage.setItem("user", JSON.stringify(res.data.data[0]));
                this.$message.success("登录成功");
                this.$router.push('/');
              } else {
                this.$message.error(res.data.message);
                // username: "";
                // password: "";
              }
               
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          this.$message.error("填写有误,请检查");
          return false;
        }
      });
    },
    getCode(){
      axios.get('/api/captcha').then(res => {
        this.code = res.data
      }).catch(err => {
        console.log(err);
      })
    }
     
    },
   mounted() {
     this.getCode()
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
    background: url("../../../public/bg.jpg") no-repeat;
    background-size: 100% 100%;
}
.box {
    width: 400px;
    height: 500px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid #dddddd;
    background: rgba(255,255,255,0.2);
    box-shadow: 0 1px 2px 0 #ddd;
}
</style>