import Vue from 'vue';
import App from './App.vue';
import { router } from './routes/index';


Vue.config.productionTip = false;


new Vue({
  render: h => h(App),
  router, // 원래는 router: router이다.
}).$mount('#app');
