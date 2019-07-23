import Vue from 'vue'
import App from './App.vue'
import router from './router';
import iView from 'iview';

import 'iview/dist/styles/iview.css';
import './assets/styles/index.less';

// import { checkLogin } from './store';

Vue.config.productionTip = false

// checkLogin();

Vue.use(iView);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
