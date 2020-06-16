<template>
 <div>
    <div class="h-head">
        <div class="h-box">
            <div><img src="../../../public/parter.png" alt="" width="30px"></div>
        <div>
        <div class="h-font">New Visits</div>
        <div class="h-font1">123456</div>
        </div>
        </div>
        <div class="h-box">
        <div><img src="../../../public/message.png" alt="" width="30px"></div>
        <div>
        <div class="h-font">New Messages</div>
        <div class="h-font1">2365</div>
        </div>
        </div>
        <div class="h-box">
        <div><img src="../../../public/money.png" alt="" width="30px"></div>
        <div>
        <div class="h-font">Purchases</div>
        <div class="h-font1">56562</div>
        </div>
        </div>
        <div class="h-box">
        <div><img src="../../../public/cart.png" alt="" width="30px"></div>
        <div >
        <div class="h-font">Shoppongs</div>
        <div class="h-font1">44941</div>
        </div>
        </div>
    </div>
    <div class="h-body">
    <ve-line :data="chartData"></ve-line>
    </div>
    <div class="h-nav">
        <div>
            <ve-radar :data="chartData"></ve-radar>
        </div>
        <div>
            <ve-ring :data="chartData" :settings="chartSettings"></ve-ring>
        </div>
        <div></div>
    </div>
 </div>
</template>

<script>
import axios from 'axios'

 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
       this.chartSettings = {
        roseType: 'radius'
      }
     return {
         chartData: {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
          ]
        },
        chartData: {
          columns: ['日期', '访问用户'],
          rows: [
            { '日期': '1/1', '访问用户': 1393 },
            { '日期': '1/2', '访问用户': 3530 },
            { '日期': '1/3', '访问用户': 2923 },
            { '日期': '1/4', '访问用户': 1723 },
            { '日期': '1/5', '访问用户': 3792 },
            { '日期': '1/6', '访问用户': 4593 }
          ]
        }
     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>