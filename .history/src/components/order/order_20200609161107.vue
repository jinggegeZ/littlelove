<template>
 <div>
<div class="h-body">
    <el-table :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="num"
      label="Order_No"
      width="180">
    </el-table-column>
    <el-table-column
      prop="price"
      label="Price"
      width="180">
    </el-table-column>
    <el-table-column class="elitem" prop="address" label="Stauts">

    </el-table-column>
  </el-table>
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
       tableData: [{
         num: '',
          price: '',
          address: ''
        }, ]
     }
   },
   methods: {
       getData() {
      axios
        .get("/api/orderData")
        .then(res => {
          this.tableData = res.data.data;
          let num = 
        })
        .catch(err => {
          console.log(err);
        });
    },
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