<template>
 <div>
    <div class="box">
        <div class="box-head">
            <div><input type="text" placeholder="请输入商品名" class="box-ipt"></div>
        </div>
        <div class="box-nav">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column label="名称" width="180">
                    <template slot-scope="scope">
                        <i class="el-icon-time"></i>
                        <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="商品编号" width="180">
                    <template slot-scope="scope">
                        <i class="el-icon-time"></i>
                        <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="原价" width="180">
                    <template slot-scope="scope">
                        <i class="el-icon-time"></i>
                        <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="姓名" width="180">
                    <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                    <p>姓名: {{ scope.row.name }}</p>
                    <p>住址: {{ scope.row.address }}</p>
                <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
                    </el-popover>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="box-foot">
            <div><el-button type="primary">导出xls</el-button></div>
            <div><el-button type="danger">导出csv</el-button></div>
        </div>
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
         tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },]
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