<template>
 <div>
      <div class="hn">
        <ve-histogram :data="chartData"></ve-histogram>
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
         chartData: {
        columns: ["date", "expected","actual"],
        rows: []
      },
     }
   },
   methods: {
       getData() {
      axios
        .get("/api/homeChat")
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