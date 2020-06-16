<template>
 <div>
    <div class="h-head">
        <div class="h-box">
            <div><img src="../../../public/parter.png" alt="" width="30px"></div>
        <div>
        <div class="h-font">New Visits</div>
        <div class="h-font1"><countTo :startVal='startVal' :endVal='arr.visits' :duration='3000'></countTo></div>
        </div>
        </div>
        <div class="h-box">
        <div><img src="../../../public/message.png" alt="" width="30px"></div>
        <div>
        <div class="h-font">New Messages</div>
        <div class="h-font1"><countTo :startVal='startVal' :endVal='arr.messages' :duration='3000'></countTo></div>
        </div>
        </div>
        <div class="h-box">
        <div><img src="../../../public/money.png" alt="" width="30px"></div>
        <div>
        <div class="h-font">Purchases</div>
        <div class="h-font1"><countTo :startVal='startVal' :endVal='arr.purchases' :duration='3000'></countTo></div>
        </div>
        </div>
        <div class="h-box">
        <div><img src="../../../public/cart.png" alt="" width="30px"></div>
        <div >
        <div class="h-font">Shoppongs</div>
        <div class="h-font1"><countTo :startVal='startVal' :endVal='arr.shopping' :duration='3000'></countTo></div>
        
        </div>
        </div>
    </div>
    <div class="h-body"><ve-line :data="chartData"></ve-line></div>
    <div class="h-nav">
        <div class="hn">
            <ve-radar :data="chartData"></ve-radar>
        </div>
        <div class="hn">
            <ve-ring :data="chartData" :settings="chartSettings"></ve-ring>
        </div>
        <div class="hn">
            <ve-histogram :data="chartData"></ve-histogram>
        </div>
    </div>
    <div class="h-foot">
    <div class="hf1">
    <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
        <el-table-column
            prop="date"
            label="order_No"
            width="180">
            </el-table-column>
        <el-table-column
            prop="name"
            label="Price"
            width="180">
        </el-table-column>
        <el-table-column
            prop="address"
            label="Status">
    </el-table-column>
    </el-table>
    </div>
    <div></div>
    <div></div>
    </div>
 </div>
</template>

<script>
import axios from 'axios'
import countTo from 'vue-count-to';
 export default {
   name: '',
   props: {
   },
   components: {
      countTo
   },
   data () {
       this.chartSettings = {
        roseType: 'radius'
      }
     return {
        startVal: 0,
        endVal: 2017,
         chartData: {
          columns: ['date', 'expected', 'actual',],
          rows: []
        },
        chartData: {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 }

          ]
        },
        chartData: {
          columns: ['日期', '访问用户'],
          rows: [
            { '日期': '1/1', '访问用户': 1393 },
            { '日期': '1/2', '访问用户': 3530 },
            { '日期': '1/3', '访问用户': 2923 },
            { '日期': '1/4', '访问用户': 1723 }
            
          ]
        },
         chartData: {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 }
          ]
        },
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],

        arr: {},
        arr1:[],

        };
   },
   methods: {
     getData(){
       axios.get('/api/homeData').then(res => {
         this.arr = res.data.data;
       }).catch(err => {
         console.log(err)
       })
     },
     getData1(){
       axios.get('/api/homeChat').then(res => {
         this.arr1.rows = res.data.data
       }).catch(err => {
         console.log(err)
       })
     }
   },
   mounted() {
     this.getData()
     this.getData1()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped>

</style>