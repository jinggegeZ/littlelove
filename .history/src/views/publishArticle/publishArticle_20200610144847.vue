<template>
 <div>
    <div class="pbbox">
      <div class="pbhead">
          <el-button type="danger">查看</el-button>
          <el-button type="primary">发布</el-button>
      </div>
    </div>

    <div>
      
    </div>

      <div>
          <mavon-editor v-model="value"/>
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
         value:''
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