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
        <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
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
      let validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
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
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
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
            this.$message.success('登录成功')
             this.$router.push('/')
          } else {
            this.$message.error('用户名或者密码错误')
            return false;
          }
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
.continar {
    width:100%;
    height: 100%;
}
.box {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>