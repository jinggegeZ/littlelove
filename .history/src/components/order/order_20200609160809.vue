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
      prop="name"
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
         num: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, ]
     }
   },
   methods: {
       getData() {
      axios
        .get("/api/orderData")
        .then(res => {
          this.arr = res.data.data;
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