<template>
 <div>
    <div>
      <div class="pbhead">
          <el-button type="success">成功按钮</el-button>
      </div>
    </div>

    <div></div>

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