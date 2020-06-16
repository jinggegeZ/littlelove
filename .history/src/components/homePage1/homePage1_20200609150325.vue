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
        columns: ["name", "sales","ministration","techology",""],
        rows: []
      },
     }
   },
   methods: {
       getData() {
      axios
        .get("/api/radarChat")
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