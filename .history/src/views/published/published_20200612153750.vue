<template>
 <div>
    <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column label="#" width="80">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.index }}</span>
      </template>
    </el-table-column>
    <el-table-column label="标题" >
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.title }}</span>
      </template>
    </el-table-column>
    <el-table-column label="作者" >
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.auther }}</span>
      </template>
    </el-table-column>
    <el-table-column label="类目" >
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.category }}</span>
      </template>
    </el-table-column>
    <el-table-column label="来源" >
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.source }}</span>
      </template>
    </el-table-column>
    <el-table-column label="重要性" >
      <template slot-scope="scope">
      <el-rate v-model="scope.row.star"></el-rate>
      </template>
    </el-table-column>
    <el-table-column label="发布时间">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
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
 export default {
   name: 'published',
   props: {
   },
   components: {

   },
   data () {
     return {
       tableData: [{
          index:'1',
          title:'叶静是猪猪',
          auther:'张爸爸',
          category:'vue',
          source:'转载',
          star: 2,
          date: '2020-06-20'
        }]
     }
   },
   methods: {
     handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
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

</style>