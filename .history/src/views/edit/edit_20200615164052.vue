<template>
 <div>
    <div class="box">
        <div class="head">
            <div><el-button @click="comeback" type="success">返回</el-button></div>
            <div><el-button @click="see" type="primary">查看</el-button></div>
        </div>
        <div class="nav-z">
            <div class="nav1">
                <div>文章标题：</div>
                <div class="ipt"><el-input v-model="title"></el-input></div>
            </div>
            <div class="nav1">
                <div>文本摘要：</div>
                <div class="ipt"><el-input v-model="abstract"></el-input></div>
            </div>
            <div class="nav2">  
                <div class="nav2-1">  
                    <div>作者</div>
                    <div><el-input v-model="author"></el-input></div>
                </div>
                <div class="nav2-1">  
                    <div>类目</div>
                    <div><el-input v-model="category"></el-input></div>
                </div>
                <div class="nav2-1">  
                    <div>来源</div>
                    <div><el-input v-model="source"></el-input></div>
                </div>
                <div class="nav2-1">  
                    <div>重要性</div>
                    <div><el-input v-model="star"></el-input></div>
                </div>
                <div class="nav2-1">  
                    <div>发布时间</div>
                    <div><el-input v-model="date"></el-input></div>
                </div>
            </div>
        </div>
        <div class="foot">
            <mavon-editor v-model="text" />
        </div>
    </div>
 </div>
</template>

<script>
 export default {
   name: 'edit',
   props: {
   },
   components: {

   },
   data () {
     return {
         abstract: '',
         title:'',
     }
   },
   methods: {
       comeback(){
           this.$router.push('published')
       },
       see(){
           this.$router.push('see')
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
.nav-z {
    width: 100%;
    height: 50px;
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