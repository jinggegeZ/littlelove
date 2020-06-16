<template>
  <div>
    <div class="dv">
      <el-input v-model="search" size="mini" placeholder="请输入您想搜索的商品名称" />
    </div>
    <el-table
      :data="tableData.slice((currentPage - 1) * pagesize, currentPage*pagesize)"
      style="width: 100%"
    >
      <el-table-column label="姓名" width="300" prop="NAME"></el-table-column>
      <el-table-column label="商品编号" width="220" prop="GOODS_SERIAL_NUMBER"></el-table-column>
      <el-table-column label="原价" width="240" prop="ORI_PRICE"></el-table-column>
      <el-table-column label="现价" width="240" prop="PRESENT_PRICE"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            icon="el-icon-edit"
            @click="handleEdit(scope.row)"
          >修改</el-button>
          <el-button
            size="mini"
            type="danger"
            icon="el-icon-delete"
            @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="修改" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <el-form>
        <el-form-item label="名称" label-width="40px">
          <el-input v-model="obj.NAME" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="原价" label-width="40px">
          <el-input v-model="obj.ORI_PRICE" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="现价" label-width="40px">
          <el-input v-model="obj.PRESENT_PRICE" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40, 50 ,60 , 70]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length"
    ></el-pagination>
    <br />
    <div class="box">
      <div class="excel">
        <download-excel class="export-excel-wrapper" :data="tableData" name="goods.xls">
          <el-button type="primary" size="small">导出xls</el-button>
        </download-excel>
      </div>
      <div class="csv">
        <download-excel class="export-excel-wrapper" :data="tableData" type="csv" name="goods.xls">
          <el-button type="danger" size="small">导出csv</el-button>
        </download-excel>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "DeriveExcel",
  props: {},
  components: {},
  data() {
    return {
      tableData: [],
      currentPage: 1, //默认第几页
      pagesize: 10, //默认一页多少条
      search: "",
      dialogVisible: false,
      obj: {}
    };
  },
  methods: {
    handleDelete(index, row) {
      this.tableData.splice(index, 1);
    },
    handleEdit(row) {
      this.dialogVisible = true;
      this.obj = row;
    },
    handleClose(dialogVisible) {},
    getData() {
      axios
        .get("/api/tableData")
        .then(res => {
          this.tableData = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    }
  },
  mounted() {
    this.getData();
  },
  watch: {
    search(val) {
      axios
        .get("/api/tableData")
        .then(res => {
          this.tableData = res.data.data.filter(item => {
            return JSON.stringify(item).includes(val);
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  computed: {}
};
</script>

<style scoped lang='scss'>
.dv {
  width: 300px;
  margin: 10px 10px 10px;
}
.box {
  display: flex;
  width: 100%;
  height: 50px;
  margin-left: 60px;
  margin-top: 30px;
}
.csv {
  margin-left: 40px;
}
</style>