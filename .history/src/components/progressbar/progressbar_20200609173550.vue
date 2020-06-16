<template>
 <div>
    <div><img src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png" alt=""></div>
    <div class="progressbar" v-for="(item,index) in data" :key="index">
        <div>{{item.name}}</div>
        <el-progress v-if="item.prpgress*100 === 100" :percentage="item.progress*100"  :stroke-width='15' status="success"></el-progress>
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
     return {
         data:[
            
         ]
     }
   },
   methods: {
    format(percentage) {
        return percentage === 100 ? '满' : `${percentage}%`;
      },
      getData(){
          axios.get('/api/progress').then(res => {
              this.data = res.data.data 
          }).catch(err => {
              console.log(err);
          })
      }
   },
   mounted() {
       this.getData()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped>
    .el-progress el-progress--line is-success {
        line-height: 2;
    }
</style>