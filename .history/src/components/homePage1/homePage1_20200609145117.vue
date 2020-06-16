<template>
 <div>
      <div class="hn">
        <ve-radar :data="chartData"></ve-radar>
      </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {
       
   },
   data () {
     return {
         chartData: {
        columns: ["date", "expected", "actual"],
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

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>