// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import router from './router'
// import test from './components/views/Test.vue'
// import test2 from './components/views/Test2.vue'
// import test3 from './components/views/Test3.vue'
import test4 from './components/views/Test4.vue'

Vue.config.productionTip = false

Vue.directive('focus', {
  inserted (domElem) {
    domElem.focus()
  }
}

)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { test4 },
  template: '<test4/>'
})
