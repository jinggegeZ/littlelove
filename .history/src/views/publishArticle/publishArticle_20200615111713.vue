<template>
  <div>
    <div class="pbbox">
      <div class="pbhead">
        <el-button type="danger" @click="checked">查看</el-button>
        <el-button type="primary" @click="release">发布</el-button>
      </div>
    </div>

    <div>
      <el-form :model="ruleForm"  ref="reluForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="文章标题" prop="title" :rules="[{ required: true,}, { type: 'text',}]">
          <el-input type="text" v-model="ruleForm.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="文章摘要"
          prop="abstract"
          :rules="[{ required: true,}, { type: 'text',}]"
        >
          <el-input type="text" v-model="ruleForm.abstract" autocomplete="off"></el-input>
        </el-form-item>
        <div class="pbitem">
          <el-form-item label="作者" :rules="[{ required: true,}]" prop="author">
            <el-input type="text" v-model="ruleForm.author" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="类目" :rules="[{ required: true,}]">
            <el-select placeholder="请选择" v-model="ruleForm.category">
              <el-option
                v-for="(item) in leixing"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="来源" :rules="[{ required: true,}]" prop="source">
            <el-select placeholder="请选择" v-model="ruleForm.source">
              <el-option
                v-for="(item) in laiyuan"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="重要性" :rules="[{ required: true,}]" prop="star">
            <el-select placeholder="请选择" v-model="ruleForm.star">
              <el-option
                v-for="(item) in star"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="发布时间" :rules="[{ required: true,}]" prop="date">
            <el-date-picker v-model="ruleForm.date" type="datetime" placeholder="选择日期时间">
    </el-date-picker>
          </el-form-item>
        </div>
      </el-form>
    </div>

    <div>
      <mavon-editor />
    </div>
  </div>
</template>

<script>
export default {
  name: "publishArticle",
  props: {},
  components: {},
  data() {
    return {
      ruleForm:{
        title:"",
        abstract:"",
        author:"",
        category:"",
        source:"",
        star:"",
        date:"",
      },
      value1: "",
      value2: '',
      value3: "",
      value4:"",
      leixing: [
        {
          label: "vue",
          value: "vue"
        },
        {
          label: "React",
          value: "React"
        },
        {
          label: "Node.js",
          value: "Node.js"
        },
        {
          label: "性能优化",
          value: "性能优化"
        },
        {
          label: "JavaScript",
          value: "JavaScript"
        },
        {
          label: "小程序",
          value: "小程序"
        },
        {
          label: "工具类",
          value: "工具类"
        },
        {
          label: "其他",
          value: "其他"
        }
      ],
      laiyuan: [
        {
          label: "原创",
          value: "原创"
        },
        {
          label: "转载",
          value: "转载"
        },
        {
          label: "国外",
          value: "国外"
        }
      ],
      star: [
        {
          label: "1颗星",
          value: "1颗星"
        },
        {
          label: "2颗星",
          value: "2颗星"
        },
        {
          label: "3颗星",
          value: "3颗星"
        },
        {
          label: "4颗星",
          value: "4颗星"
        },
        {
          label: "5颗星",
          value: "5颗星"
        }
      ],
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    release(){
      this.$refs.numberValidateForm.validate(valid => {
        if(valid){
          axios.post('/api/article/create',{
            title: this.ruleForm.title,
            abstract: this.ruleForm.abstract,
            author: this.ruleForm.author,
            category:this.ruleForm.category,
            source:this.ruleForm.source,
            star: this.ruleForm.star,
            data: this.ruleForm.data,
          }).then(res => {
            if(res.data.code ===200 ){
              this.$message.success('发布成功');
              this.$router.push('')
            }else{
              this.$message.error(res.data.message);
            }
          }).catch(err => {
            console.log(err);
          })
        }
      })
    },
    checked(){
      this.$router.push('published')
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>