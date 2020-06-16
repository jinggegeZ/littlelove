<template>
  <div class="box">
    <el-tabs v-model="activeName">
      <el-tab-pane label="one" name="first">
        <div class="eltp">
          <div v-if="arr.length > 0">
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
        <div v-else class="eltp1">暂无数据了？</div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="two" name="second">
        <div class="eltp">
        <div v-if="arr1.length > 0">
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
                <el-button type="danger" @click="all1">删除全部</el-button>
              </div>
          </div>
          <div v-else>暂无数据了！</div>
          </div>
      </el-tab-pane>
      <el-tab-pane label="three" name="third">
        <div class="eltp">
          <div v-if="arr2.length > 0">
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
              <el-button type="info" @click="all2">清空回收站</el-button>
            </div>
          </div>
          <div v-else class="eltp1">暂无数据了？</div>
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
          title: "今晚12点发大红包，先到先得",
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
          title: "[系统通知]，您的优惠券已过期· ",
          time: "2018-04-19 20:00:00",
          message: "还原"
        }
      ],
      arr3:[
        {
          title:'',
          time:'',
          message:'',
        }
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    del(item, index) {
      this.arr.splice(index, 1);
      this.arr1.push(item);
    },
    del1(item, index) {
      this.arr1.splice(index, 1);
      this.arr2.push(item);
    },
    del2(item, index) {
      this.arr2.splice(index, 1);
      this.arr.push(item)
    },
    all(item,index){
      this.arr = this.arr.concat(this.ass)
      this.ass = [];
    },
    all1(item,index){
      this.arr1 = this.arr1.concat(this.arr1);
      this.arr1 = [];
    },
    all2(item,index){
      this.arr2 = this.arr1.concat(this.arr2);
      this.arr1 = [];
    }
  },
  mounted() {
  
  },
  watch: {},
  computed: {
    one() {
      return "未读消息" + "(" + this.arr.length + ")";
    },
    two() {
      return "已读消息" + "(" + this.arr1.length + ")";
    },
    three() {
      return "回收箱" + "(" + this.arr2.length + ")";
    }
  }
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