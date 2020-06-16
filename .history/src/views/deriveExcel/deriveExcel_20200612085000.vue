<template>
 <div>
    <div class="box">
        <div class="box-head">
            <div><input type="text" placeholder="请输入商品名" class="box-ipt"></div>
        </div>
        <div class="box-nav">
            <el-table :data="tableData" style="width: 100%"
            :default-sort="{prop:'data',order:'descending'}" >
            <el-table-column label="姓名" width="270" prop="NAME">
            </el-table-column>
            <el-table-column label="商品编号" width="220" prop="GOODS_SERIAL_NUMBER">
            </el-table-column>
            <el-table-column label="原价" width="270" prop="ORI_PRICE">
            </el-table-column>
            <el-table-column label="现价" width="270" prop="PRESENT_PRICE">
            </el-table-column>
            <el-table-column label="操作">
            <template slot-scope="scope">
          <el-button size="mini" @click="deleteRow(scope.$index, tableData)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(item,index)">删除</el-button>
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
        :total="tableData.length">
    </el-pagination>
        </div>
        <div class="box-foot">
            <div><el-button type="primary">导出xls</el-button></div>
            <div><el-button type="danger">导出csv</el-button></div>
        </div>
    </div>
 </div>
</template>

<script>
import axios from 'axios'
 export default {
   name: 'deriveExcel',
   props: {
   },
   components: {

   },
   data () {
     return {
         tableData: [],
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
          axios.get('/api/tableData').then(res => {
              this.tableData = res.data.data;
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
    .box {
        width: 100%;
        border: 1px solid #dddddd;
        box-shadow: 0 1px 2px 0 #ddd;
    }
    .box-head {
        width: 100px;
        height: 10%;
        margin-bottom: 15px;
    }
    .box-nav {
        width: 100%;
        height: 70%;
        margin-bottom: 15px;
    }
    .box-foot {
        width: 200px;
        height: 10%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .box-ipt {
        height: 30px;
        width: 200px;
    }
</style>