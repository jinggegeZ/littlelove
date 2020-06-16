<template>
  <div>
    <div class="container">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="display:flex;justify-content: center">欢迎来到小爱后台管理系统</span>
        </div>
        <div>
          <div style="width: 400px">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px">
              <el-form-item label="请输入用户名" prop="username">
                <el-input v-model="ruleForm.username"></el-input>
              </el-form-item>
              <el-form-item label="请输入密码" prop="password">
                <el-input v-model="ruleForm.password" show-password></el-input>
              </el-form-item>
              <div style="display:flex">
                <el-form-item label="请输入验证码" prop="code">
                  <el-input v-model="ruleForm.code"></el-input>
                </el-form-item>
                <span v-html="code" @click="getCode"></span>
              </div>
              <div style="display:flex;justify-content: center">
                <el-form-item>
                  <el-button type="primary" @click="register">立即注册</el-button>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="login">立即登录</el-button>
                </el-form-item>
              </div>
            </el-form>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  props: {},
  components: {},
  data() {
    return {
      code: "",
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur"
          },
          {
            min: 2,
            max: 10,
            message: "用户名在2-10位之间",
            trigger: "blur"
          }
        ],
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
        ]
      }
    };
  },
  methods: {
    register() {
      this.$router.push("/register");
    },
    login() {
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
                this.$message.success("登录成功");
                this.$router.push("/");
              } else {
                this.$message.error(res.data.message);
                // username: "";
                // password: "";
              }
               sessionStorage.setItem("user", JSON.stringify(res.data.data[0]));
            })
            .cath(err => {
              console.log(err);
            });
        } else {
          this.$message.error("填写有误,请检查");
          return false;
        }
      });
    },
    getCode() {
      axios
        .get("/api/captcha")
        .then(res => {
          this.code = res.data;
          // console.log(res.data);
        })
        .cath(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getCode();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.container {
  display: flex;
  justify-content: center;
  align-content: center;
}
.box-card {
  width: 600px;
  height: 400px;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
</style>