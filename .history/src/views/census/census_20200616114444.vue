<template>
 <div>
    <div class="nav-box">
        <div class="nab1"> 
            <div class="nab11">
                <div class="nab11-1">
                    <div class="nab111">今日发布</div>
                    <div class="nab111 nab112">1</div>
                </div>
                <div class="nab16"><img src="../../../public/cen1 (1).png" alt="" width="55px" height="55px"></div>
            </div>
            <div class="nab12">
                <div class="nab11-1">
                    <div class="nab111">原创文章</div>
                    <div class="nab111 nab112">5</div>
                </div>
                <div class="nab16"><img src="../../../public/cen1 (2).png" alt="" width="55px" height="55px"></div>
            </div>
            <div class="nab13">
                <div class="nab11-1">
                    <div class="nab111">新留言</div>
                    <div class="nab111 nab112">0</div>
                </div>
                <div class="nab16"><img src="../../../public/cen3.png" alt="" width="55px" height="55px"></div>
            </div>
            <div class="nab14">
                <div class="nab11-1">
                    <div class="nab111">新消息</div>
                    <div class="nab111 nab112">0</div>
                </div>
                <div class="nab15"><img src="../../../public/cen4.png" alt="" width="55px" height="54px"></div>
            </div>
        </div>
        <div class="nab2">
            <div class="nab2-1">
                <ve-pie :data="chartData" style="height: 400px;width:400px"></ve-pie>
            </div>
            <div class="nab2-1">
                <ve-ring :data="chartData1" style="height: 400px;width:400px" :settings="chartSettings"></ve-ring>
            </div>
        </div>
        <div class="nab3">
            <ve-waterfall :data="chartData2"></ve-waterfall>
        </div>
    </div>
 </div>
</template>

<script>
import groupBy from 'lodash/groupBy'
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
          columns: ['类目', '数量'],
          rows: []
        },
        chartData1: {
          columns: ['日期', '访问用户'],
          rows: [
            { '日期': '1/1', '访问用户': 1393 },
            { '日期': '1/2', '访问用户': 3530 },
            { '日期': '1/3', '访问用户': 2923 },
            { '日期': '1/4', '访问用户': 1723 },
            { '日期': '1/5', '访问用户': 3792 },
            { '日期': '1/6', '访问用户': 4593 }
          ]
        },
        chartData2: {
          columns: ['时间', '数量'],
          rows: [
            { '时间': '2020-06-12', '数量': 1 },
            { '时间': '2020-06-11', '数量': 2 },
            { '时间': '2020-06-10', '数量': 3 },
            { '时间': '2020-06-12', '数量': 4 },
            { '时间': '2020-06-11', '数量': 5 },
            { '时间': '2020-06-09', '数量': 6 }
          ]
        }
     }
   },
   methods: {

   },
   mounted() {
       axios.get('/api/article/allArticle').then(res => {
           let obj = groupBy(res.data.data,'category')
           for(let i in obj){
               this.chartData.rows.push({
                  '数量': obj[i].length,
                  '分类' : i
               })
           }
       }).catch(err => {
           console.log(err)
       })
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped>
    .nab1 {
        width: 100%;
        display: flex;
        margin-bottom: 15px;
    }
    .nab11 {
        width: 25%;
        height: 55px;
        display: flex;
        background: rgb(124,202,191);
        position: relative;
        justify-content: center;
        align-items: center;
    }
    .nab12 {
        width: 25%;
        height: 55px;
        display: flex;
        background: rgb(232,138,135);
        position: relative;
        justify-content: center;
        align-items: center;
    }
    .nab14 {
        width: 25%;
        height: 55px;
        display: flex;
        background: rgb(159,206,193);
        position: relative;
        justify-content: center;
        align-items: center;
    }
    .nab13 {
        width: 25%;
        height: 55px;
        display: flex;
        background: rgb(131,117,163);
        position: relative;
        justify-content: center;
        align-items: center;
    }
    .nab15 {
        position: absolute;
        right: 5px;
        top: 1px;
    }
    .nab16 {
        position: absolute;
        right: 5px;
        top: -1px;
    }
    .nab111 {
        color: white;
    }
    .nab112 {
        display: flex;
        justify-content: center;
    }
    .nab2 {
        display: flex;
        justify-content: space-around;
    }
    .nab2-1 {
        width: 500px;
        height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>