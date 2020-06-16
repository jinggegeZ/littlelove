<template>
  <div>
    <div class="pbbox">
      <div class="pbhead">
        <el-button type="danger">查看</el-button>
        <el-button type="primary">发布</el-button>
      </div>
    </div>

    <div>
      <el-form
        :model="numberValidateForm"
        ref="numberValidateForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item
          label="文章标题"
          prop="articleTitle"
          :rules="[{ required: true,}, { type: 'text',}]"
        >
          <el-input type="text" v-model="articleTitle" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="文章摘要"
          prop="articleSummary"
          :rules="[{ required: true,}, { type: 'text',}]"
        >
          <el-input type="text" v-model="articleSummary" autocomplete="off"></el-input>
        </el-form-item>
        <div class="pbitem">
          <el-form-item label="作者" :rules="[{ required: true,}]">
            <el-input type="text" v-model="articleSummary" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="类目" :rules="[{ required: true,}]">
            <el-select placeholder="请选择">
              <el-option
                v-for="(item) in leixing"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="来源" :rules="[{ required: true,}]">
            <el-select placeholder="请选择">
              <el-option
                v-for="(item) in laiyuan"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="重要性" :rules="[{ required: true,}]">
            <el-select placeholder="请选择">
              <el-option
                v-for="(item) in zhongyaoxing"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="发布时间" :rules="[{ required: true,}]">
            <el-input type="text" v-model="articleSummary" autocomplete="off"></el-input>
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
      value: "",
      numberValidateForm: {
        age: ""
      },
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
      zhongyaoxing: [
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
      articleTitle: "",
      articleSummary: "",
       options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
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
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>