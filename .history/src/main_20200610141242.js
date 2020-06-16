import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VCharts from 'v-charts'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false
Vue.use(VCharts)
Vue.use(ElementUI);
Vue.use(mavonEditor);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
