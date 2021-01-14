import Vue from 'vue'
import App from './App.vue'

/**
 * Element-UI
 */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

Vue.config.productionTip = false
/* eslint-disable */
new Vue({
  render: h => h(App),
}).$mount('#app')
