<template>
 <div>
    <div class="box">
        <div class="head">
            <div><el-button @click="comeback" type="success">返回</el-button></div>
            <div><el-button @click="see" type="primary">发布</el-button></div>
        </div>
        <div>
      <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="文章标题" prop="title" :rules="[{ required: true,},]">
          <el-input v-model="ruleForm.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="文章摘要" prop="abstract" :rules="[{ required: true,},]">
          <el-input v-model="ruleForm.abstract" autocomplete="off"></el-input>
        </el-form-item>
        <div class="pbitem">
          <el-form-item label="作者" :rules="[{ required: true,}]" prop="author">
            <el-input v-model="ruleForm.author" autocomplete="off"></el-input>
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
            <el-date-picker v-model="ruleForm.date" type="datetime" placeholder="选择日期时间"></el-date-picker>
          </el-form-item>
        </div>
      </el-form>
    </div>
        <div class="foot">
            <mavon-editor v-model="text" />
        </div>
    </div>
 </div>
</template>

<script>
import axios from 'axios'
 export default {
   name: 'edit',
   props: {
   },
   components: {

   },
   data () {
     return {
         id:'',
         arr:[],
     }
   },
   methods: {
       comeback(){
           this.$router.push('published')
       },
       see(){
           this.$router.push('see')
       },
       getData(){
           axios.post('/api/article/update',{
               _id : this.id,
           }).then(res => {
               this.arr = res.data.data
               console.log(res.data);
           }).catch(err => {
               console.log(err);
           })
       },
   },
   mounted() {
       this.id = this.$route.query._id
       this.getData()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped>
.box {
    width: 100%;
    height: 100%;
    box-shadow: 0 1px 2px 0 #ddd;
}
.head {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 50px;
    align-items: center;
    margin-bottom: 50px;
}
.nav {
    width: 100%;
    align-items: center;
    margin-bottom: 15px;
}
.ipt {
    width: 80%;
    
}
.nav1 {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    margin-left: 25px;
}
.nav2 {
    display: flex;
    align-items: center;
    justify-content: space-around;
    
}
.nav2-1 {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}
.foot {
    width: 100%;
    box-shadow: 0 1px 2px 0 #ddd;
}
</style>