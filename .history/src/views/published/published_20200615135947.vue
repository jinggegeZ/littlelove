<template>
 <div>
    <el-table
    :data="arr"
    style="width: 100%">
    <el-table-column label="标题" prop="title"></el-table-column>
    <el-table-column label="摘要" prop="abstract"></el-table-column>
    <el-table-column label="作者" prop="author"></el-table-column>
    <el-table-column label="类目" prop="category"></el-table-column>
    <el-table-column label="来源" prop="title"></el-table-column>
    <el-table-column label="重要性" prop="title"></el-table-column>
    <el-table-column label="发布时间" prop="title"></el-table-column>
    <el-table-column label="操作" width="280">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        <el-button size="mini" type="success" @click="handleDelete(scope.$index, scope.row)">查看</el-button>
      </template>
    </el-table-column>
  </el-table>
 </div>
</template>

<script>
import axios from 'axios'
 export default {
   name: 'published',
   props: {
   },
   components: {

   },
   data () {
     return {
       arr: [],
     }
   },
   methods: {
     handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      getData(){
        axios.get('/api/article/allArticle').then(res => {
          this.arr = res.data.data
          console.log(res.data.data);
        }).catch(err => {
          console.log(err);
        })
      }
   },
   mounted() {
     this.getData()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped>

</style>