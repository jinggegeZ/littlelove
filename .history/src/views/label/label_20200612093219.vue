<template>
 <div>
    <div><template>
      <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="未读消息" name="first">
        <div class="eltp">
          <div class="eltp1">
            <div>[系统通知]，该系统将于今晚凌晨2点到5点进行系统维护升级</div>
            <div class="eltp2">
              <div>2018-04-19 20:00:00</div>
              <div><el-button>标为已读</el-button></div>
            </div>
          </div>
          <div class="eltp1">
            <div>今晚12点整发大红包，先到先得</div>
            <div class="eltp2">
              <div>2018-04-19 21:00:00</div>
              <div><el-button>标为已读</el-button></div>
            </div>
          </div>
        </div>
        <div></div>
      </el-tab-pane>
      <el-tab-pane label="已读消息" name="second">2</el-tab-pane>
      <el-tab-pane label="回收站" name="third">3</el-tab-pane>
      </el-tabs>
    </template></div>
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
       activeName: 'second'
     }
   },
   methods: {
      handleClick(tab, event) {
        console.log(tab, event);
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
  .eltp {
    width: 100%;
    border: 1px solid #dddddd;
    box-shadow: 0 1px 2px 0 #ddd;
    background: white;
    border-radius: 10px;
  }
  .eltp1 {
    height: 50px;
    margin-left: 10px;
    margin-right: 10px ;
    line-height: 50px;
    display: flex;
    justify-content: space-between;
    border-bottom: #dddddd;
  }
  .eltp2 {
    display: flex;
  }
</style>