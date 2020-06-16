<template>
  <div>
    <div class="bcbox">
      <div class="bcbox1">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
            <div>您确定退出小爱后台系统吗</div>
            </div>
            <div><el-button @click="dialogVisible = true">离开</el-button></div>
            <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
            <span>请您再次确认是否离开</span>
            <span slot="footer" class="dialog-footer">
            <el-button type="success" @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false ">确 定</el-button>
            </span>
            </el-dialog>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
    arr:[
        {
        name:''
        }
    ],
        dialogVisible: false
    };
  },
  methods: {
     handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
          done()
          })
          .catch(_ => {
              console.log();
          });
      },
      
  },
  mounted() {
  },
  watch: {},
  computed: {}
};
</script>

<style scoped>
.bcbox {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.bcbox1 {
    margin-top: 200px;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.box-card {
  width: 480px;
}
</style>