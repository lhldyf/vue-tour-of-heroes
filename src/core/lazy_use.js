import Vue from 'vue'
import VueStorage from 'vue-ls'

// base library
import '@/core/lazy_lib/components_use'

Vue.use(VueStorage, {
  namespace: 'pro__', // key prefix
  name: 'ls', // name variable Vue.[ls] or this.[$ls],
  storage: 'local' // storage name session, local, memory
})
