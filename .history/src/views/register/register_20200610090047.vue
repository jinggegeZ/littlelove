<template>
 <div class="continar">
    <div class="box">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="姓名" prop="username">
        <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
    <el-button type="primary" @click="submitForm">提交</el-button>
    
    
  </el-form-item>
</el-form>
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
   data() {
      let checkUsername = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('姓名不能为空'));
        }
        callback();
      };
      let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          username: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          username: [
            { validator: checkUsername, trigger: 'blur' }
          ]
        }
      };
    },
   methods: {
      submitForm() {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            this.$message.success('注册成功')
             this.$router.push('/')
          } else {
            this.$message.error('用户名或者密码错误')
            return false;
          }
        });
      },
      register(){
        this.$router.push("/register")
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
</style>