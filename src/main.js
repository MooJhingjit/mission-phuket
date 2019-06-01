import Vue from 'vue'
import App from './App.vue'
import router from './router'
import helper from './libraries/vue.helpers'
import NProgress from 'vue-nprogress'
Vue.use(NProgress, {
  latencyThreshold: 50, // Number of ms before progressbar starts showing, default: 100
  router: true, // Show progressbar when navigating routes, default: true
  http: false // Show progressbar when doing Vue.http, default: true
})

const nprogress = new NProgress({ parent: '#myApp' })
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add(faUserSecret)

// Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.mixin(helper)
new Vue({
  nprogress,
  router,
  render: h => h(App),
}).$mount('#app')
