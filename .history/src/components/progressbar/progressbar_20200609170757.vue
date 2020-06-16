<template>
 <div>
    <div><img src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png" alt=""></div>
    <div class="progressbar" v-for(item,index) in arr :key="index">
        <el-progress :percentage="100" :format="format" status="success" :stroke-width='15'></el-progress>
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
         arr:[]
     }
   },
   methods: {
    format(percentage) {
        return percentage === 100 ? '满' : `${percentage}%`;
      },
      getData(){
          axios.get('/api/progress').then(res => {
              this.arr = res.data
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