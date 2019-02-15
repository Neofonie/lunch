// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    names: [
      'Jenny',
      'John Doh',
      'Thomas',
      'Maha'
    ],
    result: [
      ['Jenny', 'Thomas'],
      ['Maha', 'John Doh'],
      ['Jenny', 'Thomas'],
      ['Maha', 'John Doh'],
      ['Jenny', 'Thomas'],
      ['Maha', 'John Doh'],
      ['Jenny', 'Thomas'],
      ['Maha', 'John Doh'],
      ['Jenny', 'Thomas'],
      ['Maha', 'John Doh'],
      ['Jenny', 'Thomas'],
      ['Maha', 'John Doh']
    ]
  },
  router,
  components: { App },
  template: '<App/>'
})
