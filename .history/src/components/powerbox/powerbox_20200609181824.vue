<template>
 <div>
    <div>  
        <div>
        <div class="bb-head">
            <div><el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox></div>
            <div>Todo list</div>
        </div>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
        <el-checkbox v-for="city in cities" :label="city" :key="city">
        <div>{{city}}</div>
        </el-checkbox>
        </el-checkbox-group>
        </div>
    </div>
 </div>
</template>

<script>
 const cityOptions = ['上海', '北京', '广州', '深圳'];
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
        checkAll: false,
        checkedCities: ['上海', '北京'],
        cities: cityOptions,
        isIndeterminate: true
     }
   },
   methods: {
       handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
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

<style scoped>
    .bb-head {
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid rgb(235,238,245);
        height: 50px;
        line-height: 50px;
    }
</style>