import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VCharts from 'v-charts'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import JsonExcel from 'vue-json-excel'

Vue.config.productionTip = false
Vue.use(VCharts)
Vue.use(ElementUI);
Vue.use(mavonEditor);
Vue.component('downloadExcel', JsonExcel)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')