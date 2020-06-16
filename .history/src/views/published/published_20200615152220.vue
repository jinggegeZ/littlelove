<template>
 <div>
    <el-table
    :data="arr.slice((currentPage - 1) * pageSize, currentPage*pageSize)"
    style="width: 100%">
    <el-table-column label="标题" prop="title"></el-table-column>
    <el-table-column label="摘要" prop="abstract"></el-table-column>
    <el-table-column label="作者" prop="author"></el-table-column>
    <el-table-column label="类目" prop="category"></el-table-column>
    <el-table-column label="来源" prop="source"></el-table-column>
    <el-table-column label="重要性" prop="star"></el-table-column>
    <el-table-column label="发布时间" prop="date"></el-table-column>
    <el-table-column label="操作" width="280">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        <el-button size="mini" type="success" @click="handleDelete(scope.$index, scope.row)">查看</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[20, 40, 60, 80]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="arr.length">
  </el-pagination>
 </div>
</template>

<script>
import axios from 'axios'
import dayjs from 'dayjs'
  export default {
   name: 'published',
   props: {
   },
   components: {

   },
   data () {
     return {
       arr: [],
       currentPage:1,
       pageSize:10,
     }
   },
   methods: {
     handleEdit(index, row) {
        console.log(index, row);
        this.$router.push('edit')
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      handleSizeChange(val) {
        this.pageSize = val
      },
      handleCurrentChange(val) {
         this.currentPage = val
      },
      getData(){
        axios.get('/api/article/allArticle').then(res => {
          this.arr = res.data.data
          this.arr.map(item => {
             this.time = dayjs(item.date).format("YYYY年MM月DD日HH时mm分ss秒");
          })
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