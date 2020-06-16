<template>
 <div>
    <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column label="标题" >
      <template slot-scope="scope">
        <span>{{ scope.row.tableData.title }}</span>
      </template>
    </el-table-column>
    <el-table-column label="摘要" >
      <template slot-scope="scope">
        <span>{{ scope.row.tableData.title }}</span>
      </template>
    </el-table-column>
    <el-table-column label="作者" >
      <template slot-scope="scope">
        <span>{{ scope.row.tableData.auther }}</span>
      </template>
    </el-table-column>
    <el-table-column label="类目" >
      <template slot-scope="scope">
        <span>{{ scope.row.tableData.category }}</span>
      </template>
    </el-table-column>
    <el-table-column label="来源" >
      <template slot-scope="scope">
        <span>{{ scope.row.tableData.source }}</span>
      </template>
    </el-table-column>
    <el-table-column label="重要性" >
      <template slot-scope="scope">
      <el-rate v-model="scope.row.tableData.star"></el-rate>
      </template>
    </el-table-column>
    <el-table-column label="发布时间">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span>{{ scope.row.tableData.date }}</span>
      </template>
    </el-table-column>
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
       tableData: [{
          title:'',
          category:'',
          auther:'',
          category:'',
          source:'',
          star: '',
          date: ''
        }]
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
          this.tableData = this.res.data
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