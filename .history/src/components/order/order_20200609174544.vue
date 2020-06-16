<template>
 <div>
<div class="h-body">
    <el-table :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="num"
      label="Order_No"
      width="350">
    </el-table-column>
    <el-table-column
      prop="price"
      label="Price"
      width="150">
    </el-table-column>
    <el-table-column prop="status" label="Stauts">
    <template>
      <div class="pending">pengding</div>
      <div class="success">success</div>
    </template>
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
          status: ''
        }, ]
     }
   },
   methods: {
       getData() {
      axios
        .get("/api/orderData")
        .then(res => {
          this.tableData = res.data.data;
          let num = tableData.num
          let price = tableData.price
          let status = tableData.status
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

<style scoped>
.pending {
  width: 30px;
  height: 10px;
  border: 1px solid pink;
  color: red;
  border-radius: 5px;
  background: pink;
}
.success {
  width: 30px;
  height: 10px;
  border: 1px solid rgb(15, 240, 15);
  color: rgb(59, 212, 20);
  border-radius: 5px;
  background: pink;
}
</style>