<template>
 <div>
      <div class="hn">
        <ve-ring :data="chartData"></ve-ring>
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
        columns: ["name", "data",],
        rows: []
      },
     }
   },
   methods: {
       getData() {
      axios
        .get("/api/ringChat")
        .then(res => {
          this.chartData.rows = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
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

<style scoped lang='scss'>

</style>