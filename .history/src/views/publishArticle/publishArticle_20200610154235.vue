<template>
 <div>
    <div class="pbbox">
      <div class="pbhead">
          <el-button type="danger">查看</el-button>
          <el-button type="primary">发布</el-button>
      </div>
    </div>

    <div>
    <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="文章标题" prop="articleTitle" :rules="[{ required: true,}, { type: 'text',}]">
      <el-input type="text" v-model="articleTitle" autocomplete="off"></el-input>
    </el-form-item>
      <el-form-item label="文章摘要" prop="articleSummary" :rules="[{ required: true,}, { type: 'text',}]">
      <el-input type="text" v-model="articleSummary" autocomplete="off"></el-input>
    </el-form-item>
    <div class="pbitem">
        <el-form-item label="作者" :rules="[{ required: true,}]">
          <el-input type="text" v-model="articleSummary" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="类目">
          <el-select>
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
      </el-form-item>
      <el-form-item label="来源">
          <el-select>
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
      </el-form-item>
      <el-form-item label="重要性">
          <el-select>
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
      </el-form-item>
        <el-form-item label="发布时间" :rules="[{ required: true,}]">
          <el-input type="text" v-model="articleSummary" autocomplete="off"></el-input>
        </el-form-item>
        
    </div>
    </el-form>
    </div>

      <div>
          <mavon-editor v-model="value"/>
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
   data () {
     return {
         value:'',
         numberValidateForm: {
          age: ''
        },
         
     }
   },
   methods: {
     submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
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

<style scoped lang='scss'>

</style>