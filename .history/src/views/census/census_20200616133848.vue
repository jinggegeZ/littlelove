<template>
 <div>
    <div class="nav-box">
        <div class="nab1"> 
            <div class="nab11">
                <div class="nab11-1">
                    <div class="nab111">今日发布</div>
                    <div class="nab111 nab112" v-if="item.date < dayjs()+12&&item.date > dayjs()-12">{{length++}}</div>
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
import dayjs from 'dayjs'
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
          columns: ['来源', '数量'],
          rows: []
        },
        chartData2: {
          columns: ['时间', '数量'],
          rows: []
        },
        date:''
     }
   },
   methods: {

   },
   mounted() {
       axios
       .get('/api/article/allArticle')
       .then(res => {
           
        let obj1 = groupBy(res.data.data,'category')
           for(let i in obj1){
               this.chartData.rows.push({
                  '数量': obj1[i].length,
                  '类目' : i
               })
           }
        let obj2 = groupBy(res.data.data,'source')
           for(let i in obj2){
               this.chartData1.rows.push({
                  '数量': obj2[i].length,
                  '来源' : i
               })
           }
        res.data.data.map(item => {
             item.date = dayjs(item.date).format("YYYY年MM月DD日");
          })
        let obj3 = groupBy(res.data.data,'date')
           for(let i in obj3){
               this.chartData2.rows.push({
                  '数量': obj3[i].length,
                  '时间' : i
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