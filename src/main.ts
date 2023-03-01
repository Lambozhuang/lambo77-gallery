import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'

declare global {
  interface Window {
    CUSDIS: any
  }
}

Vue.config.productionTip = false

Vue.use(VueLazyload, {
  preload: 1,
  attempt: 2,
})

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
