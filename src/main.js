import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Find from '@/views/Find'
import My from '@/views/My'
import Part from '@/views/Part'

Vue.use(VueRouter)

import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex({
  
})


const routes = [
  {
    path: "/find",
    component: Find
  },
  {
    path: "/my",
    component: My
  },
  {
    path: "/part",
    component: Part
  }
]

const router = new VueRouter({
  routes
})



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
