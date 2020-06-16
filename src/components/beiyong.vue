<template>
  <div class="rab">
    <el-tabs v-model="activeName">
      <el-tab-pane :label="one" name="first">
        <div class="tab">
          <div v-if=" arr.length > 0">
            <div v-for="(item,index) in arr" :key="index">
              <div class="d-f j-c-s-b">
                <div class="m-t-20 tab2">{{item.name}}</div>
                <div class="d-f tab3">
                  <div class="m-t-20">{{item.time}}</div>
                  <el-button class="tab-item1" @click="clickq(item, index)">标为已读</el-button>
                </div>
              </div>
              <div class="tab1"></div>
            </div>
            <el-button type="primary" class="tab5" @click="clicka">全部标为已读</el-button>
          </div>
          <div v-else>暂无数据了！</div>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="two" name="second">
        <div class="tab">
        <div v-if=" ass.length > 0">
          <div v-for="(item,index) in ass" :key="index">
            <div class="d-f j-c-s-b">
              <div class="m-t-20 tab2">{{item.name}}</div>
              <div class="d-f tab3">
                <div class="m-t-20">{{item.time}}</div>

                <el-button class="tab-item1" @click="clicked(item, index)">删除</el-button>
                
              </div>
            </div>
            <div class="tab1"></div>
          </div>

          <el-button type="danger" class="tab5" @click="clickb">删除全部</el-button>
          </div>
          <div v-else>暂无数据了！</div>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="three" name="third">
        <div class="tab">
        <div v-if=" asr.length > 0">
          <div v-for="(item,index) in asr" :key="index">
            <div class="d-f j-c-s-b">
              <div class="m-t-20 tab2">{{item.name}}</div>
              <div class="d-f tab3">
                <div class="m-t-20">{{item.time}}</div>
                <el-button class="tab-item1" type="warning" @click="clickess(item, index)">还原</el-button>
              </div>
            </div>
            <div class="tab1"></div>
          </div>
          <el-button type="info" class="tab5" @click="clickc">清空回收站</el-button>
             </div>
          <div v-else>暂无数据了！</div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      activeName: "first",
      arr: [
        {
          name: "[系统通知]该系统将于今晚凌晨2点到5点进行升级维护",
          time: "2020-6-12 9:03"
        },
        {
          name: "今晚12点整发大红包,先到先得",
          time: "2020-6-12 9:03"
        }
      ],
      ass: [
        {
          name: "[系统通知]该系统将于今晚凌晨2点到5点进行升级维护",
          time: "2020-6-12 9:03"
        }
      ],
      asr: [
        {
          name: "[系统通知]您的优惠券已经过期",
          time: "2020-6-12 9:03"
        }
      ]
    };
  },
  components: {},
  methods: {
    clickq(item, index) {
      this.arr.splice(index, 1);
      this.ass.push(item);
    },
    clicked(item, index) {
      this.ass.splice(index, 1);
      this.asr.push(item);
    },
    clickess(item, index) {
      this.asr.splice(index, 1);
      this.arr.push(item);
    },
    clicka() {
      this.ass = this.ass.concat(this.arr);
      this.arr = [];
    },
    clickb() {
      this.asr = this.asr.concat(this.ass);
      this.ass = [];
    },
    clickc() {
      this.arr = this.ass.concat(this.arr);
      this.asr = [];
    }
  },
  mounted() {},
  watch: {},
  computed: {
    one() {
      return "未读消息" + "(" + this.arr.length + ")";
    },
    two() {
      return "已读消息" + "(" + this.ass.length + ")";
    },
    three() {
      return "回收箱" + "(" + this.asr.length + ")";
    }
  }
};
</script>

<style scoped lang='scss'>
.rab {
  height: 622px;
}
.tab {
  background: white;
  width: 1280px;
  height: 450px;
}
.tab2 {
  margin-left: 30px;
  margin-top: 20px;
}
.tab3 {
  margin-right: 50px;
  margin-top: 10px;
}

.tab1 {
  width: 1200px;
  height: 1px;
  margin-left: 30px;
  margin-top: 20px;
  background: rgb(151, 146, 146);
}
.tab5 {
  margin-left: 30px;
  margin-top: 30px;
}
.tab-item1 {
  margin-top: 10px;
  margin-left: 15px;
}
</style>