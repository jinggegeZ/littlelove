<template>
  <div>
    <div class="bcbox">
      <div class="bcbox1">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
            <span>您确定退出小爱后台系统吗</span>
            <el-button type="text" @click="dialogVisible = true">离开</el-button>
            <!-- <el-button style="float: right; padding: 3px 0" type="text" @click="logout">确认离开</el-button> -->
            <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <span>请您再次确认是否离开</span>
            <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
</el-dialog>
            </div>
            <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
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
        ]
    };
  },
  methods: {
      logout(){
          localStorage.clear()
        //   this.$router.push('/login')
      }
  },
  mounted() {
      this.logout()
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