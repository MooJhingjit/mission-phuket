import Vue from 'vue'
import App from './App.vue'
import router from './Router'
import helper from '@Libraries/vue.helpers'
import NProgress from 'vue-nprogress'
import VeeValidate from 'vee-validate'
import store from './Store/index'
import VueSweetalert2 from 'vue-sweetalert2'; // https://github.com/avil13/vue-sweetalert2
import Notifications from 'vue-notification' // https://www.npmjs.com/package/vue-notification

const options = {
  // confirmButtonColor: '#41b882',
  // cancelButtonColor: '#ff7674'
}
Vue.use(VueSweetalert2, options);
Vue.use(Notifications)
Vue.use(VeeValidate, {fieldsBagName: 'formFields'})
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
  store,
  render: h => h(App),
}).$mount('#app')
