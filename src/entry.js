/* global Vue */

/* weex initialized here, please do not move this line */

import test from './components/Role/Host/test.vue'

const router = require('./router')
const App = require('@/index.vue')
/* eslint-disable no-new */
new Vue(Vue.util.extend({
  el: '#root',
  router
}, App))
router.push('/')
test.el = '#app'
new Vue(test)
