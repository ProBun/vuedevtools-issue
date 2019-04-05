import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Bar from "./Bar";
import Foo from "./Foo";
import { sync } from 'vuex-router-sync';

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueRouter)


// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/foo', component: Foo, name: 'foo' },
  { path: '/bar', component: Bar, name: 'bar' },
]

const store = new Vuex.Store({
  state: {
    foo: 1
  },
  mutations: {
    increment(state) {
      state.foo++
    }
  }
})


// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  history: true,
  routes // short for `routes: routes`
})

sync(store, router)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
