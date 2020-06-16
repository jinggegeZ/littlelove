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
        <mavon-editor v-model="ruleForm.text" />
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
         text:'',
      ruleForm: {
        
      },
      value1: "",
      value2: "",
      value3: "",
      value4: "",
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
          value: "1"
        },
        {
          label: "2颗星",
          value: "2"
        },
        {
          label: "3颗星",
          value: "3"
        },
        {
          label: "4颗星",
          value: "4"
        },
        {
          label: "5颗星",
          value: "5"
        }
      ]
     }
   },
   methods: {
        see() {
        this.$refs.ruleForm.validate(valid => {
        if (valid) {
          axios
            .post("/api/article/create", {
              title: this.arr.title,
              abstract: this.arr.abstract,
              author: this.arr.author,
              category: this.ruleForm.category,
              source: this.ruleForm.source,
              star: this.ruleForm.star,
              date: this.ruleForm.date,
              text:this.text,
              id :this.id
            })
            .then(res => {
              if (res.data.code === 200) {
                this.$message.success("发布成功");
                this.$router.push("published");
              } else {
                this.$message.error(res.data.message);
              }
            })
            .catch(err => {
              console.log(err);
            });
        }
      });
    },
       comeback(){
           this.$router.push('published')
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
       this.id = this.$route.query._id;
       axios.post('/api/article/article',{
         _id: this.id
       }).then(res => {
         this.ruleForm = res.data.data
       }).catch(err => {
         console.log(err);
       })
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