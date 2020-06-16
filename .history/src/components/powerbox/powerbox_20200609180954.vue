<template>
 <div>
    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
    <div style="margin: 15px 0;"></div>
    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
    </el-checkbox-group>
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