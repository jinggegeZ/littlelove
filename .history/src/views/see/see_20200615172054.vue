<template>
 <div>
    <div class="box">
            <div class="head"><el-button @click="comeback" type="primary">返回</el-button></div>
            <div class="m-head">
                    <div class="font1">{{arr.title}}</div>
                    <div class="font2">摘要：</div>
                    <div>发表于：</div>
            </div>
            <div class="foot">
                <div class="f-box">
                    dasndadakndahdlaskndadasjd;lsmdajdpoasjd;adadadada
                </div>
            </div>
    </div>
 </div>
</template>

<script>
import axios from 'axios'
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {
       comeback(){
           this.$router.push('edit')
       },
       getData(){
           axios.post('/api/article/allArticle',{
               _id : this._id,
               arr = this.res.data.data
           }).then(res => {
               console.log(res.data);
           }).catch(err => {
               console.log(err);
           })
       }
   },
   mounted() {
       this._id = this.$route.query._id
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
    }
    .head {
        width: 100%;
        height: 50px;
        align-items: center;
        margin-left: 15px;
    }
    .m-head {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    .font1 {
        font-size: 20px;
        font-weight: 700;
        width: 100%;
        text-align: center;
        margin-bottom: 5px;
    }
    .font2 {
        width: 100%;
        font-style: 14px;
        font-weight: 700;
        text-align: center;
        margin-bottom: 5px;
    }
    .foot {
        width: 100%;
        height: 1000px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .f-box {
        box-shadow: 0 1px 2px 0 #ddd;
        background: white;
        width: 90%;
        height: 90%;
    }
</style>