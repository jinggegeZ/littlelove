<template>
  <div>
    <div class="h-head">
      <div class="h-box">
        <div>
          <img src="../../../public/parter.png" alt width="30px" />
        </div>
        <div>
          <div class="h-font">New Visits</div>
          <div class="h-font1">
            <countTo :startVal="startVal" :endVal="arr.visits" :duration="3000"></countTo>
          </div>
        </div>
      </div>
      <div class="h-box">
        <div>
          <img src="../../../public/message.png" alt width="30px" />
        </div>
        <div>
          <div class="h-font">New Messages</div>
          <div class="h-font1">
            <countTo :startVal="startVal" :endVal="arr.messages" :duration="3000"></countTo>
          </div>
        </div>
      </div>
      <div class="h-box">
        <div>
          <img src="../../../public/money.png" alt width="30px" />
        </div>
        <div>
          <div class="h-font">Purchases</div>
          <div class="h-font1">
            <countTo :startVal="startVal" :endVal="arr.purchases" :duration="3000"></countTo>
          </div>
        </div>
      </div>
      <div class="h-box">
        <div>
          <img src="../../../public/cart.png" alt width="30px" />
        </div>
        <div>
          <div class="h-font">Shoppongs</div>
          <div class="h-font1">
            <countTo :startVal="startVal" :endVal="arr.shopping" :duration="3000"></countTo>
          </div>
        </div>
      </div>
    </div>
    <div class="h-box">
    <ve-line :data="chartData"></ve-line>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import countTo from "vue-count-to";
export default {
  name: "",
  props: {},
  components: {
    countTo
  },
  data() {
    return {
      startVal: 0,
      endVal: 2017,

      chartData: {
        columns: ["date", "expected", "actual"],
        rows: []
      },
      arr: {},
      
    };
  },
  methods: {
    getData() {
      axios
        .get("/api/homeData")
        .then(res => {
          this.arr = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getData1() {
      axios
        .get("/api/homeChat")
        .then(res => {
          this.chartData.rows = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getData();
    this.getData1();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped>
</style>