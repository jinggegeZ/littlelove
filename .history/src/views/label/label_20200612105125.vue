<template>
  <div class="box">
    <el-tabs v-model="activeName">
      <el-tab-pane label="未读消息" name="first">
        <div class="eltp">
          <div v-for="(item,index) in arr" :key="index">
            <div class="eltp1">
              <div>{{item.title}}</div>
              <div class="eltp2">
                <div>{{item.time}}</div>
                <div class="eltp3" >
                  <el-button @click="del">{{item.message}}</el-button>
                </div>
              </div>
            </div>
          </div>
          <div class="pri">
            <el-button type="primary" @click="all">全部标记为已读</el-button>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="已读消息" name="second">
        <div class="eltp">
          <div v-for="(item,index) in arr1" :key="index">
            <div class="eltp1">
              <div>{{item.title}}</div>
              <div class="eltp2">
                <div>{{item.time}}</div>
                <div class="eltp3">
                  <el-button @click="del1">{{item.message}}</el-button>
                </div>
              </div>
            </div>
          </div>
          <div class="pri">
            <el-button type="danger" >删除全部</el-button>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="回收站" name="third">
        <div class="eltp">
          <div v-for="(item,index) in arr2" :key="index">
            <div class="eltp1">
              <div>{{item.title}}</div>
              <div class="eltp2">
                <div>{{item.time}}</div>
                <div class="eltp3">
                  <el-button type="warning" @click="del2">{{item.message}}</el-button>
                </div>
              </div>
            </div>
          </div>
          <div class="pri">
            <el-button type="info">清空回收站</el-button>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      activeName: "first",
      arr: [
        {
          title: "[系统通知]，该系统将于今晚凌晨2点到5点进行系统维护升级",
          time: "2018-04-19 20:00:00",
          message: "标为已读"
        },
        {
          title: "今晚12点发大红包，先到先得2",
          time: "2018-04-19 21:00:00",
          message: "标为已读"
        },
        
      ],

      arr1: [
        {
          title: "[系统通知]，该系统将于今晚凌晨2点到5点进行系统维护升级",
          time: "2018-04-19 20:00:00",
          message: "删除"
        }
      ],

      arr2: [
        {
          title: "[系统通知]，该系统将于今晚凌晨2点到5点进行系统维护升级",
          time: "2018-04-19 20:00:00",
          message: "还原"
        }
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    del(item, index) {
      this.arr.splice(index, 1)
    },
    del1(item, index) {
      this.arr1.splice(index, 1)
    },
    del2(item, index) {
      this.arr2.splice(index, 1)
    },
    all(item,index){
      this.arr.splice(index)
    }
  },
  mounted() {
  
  },
  watch: {},
  computed: {}
};
</script>

<style scoped>
.eltp {
  width: 100%;
  border: 1px solid #dddddd;
  box-shadow: 0 1px 2px 0 #ddd;
  background: white;
  border-radius: 10px;
}
.eltp1 {
  height: 50px;
  margin-left: 10px;
  margin-right: 10px;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dddddd;
}
.eltp2 {
  display: flex;
}
.eltp3 {
  margin-left: 15px;
}
.pri {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
}
</style>