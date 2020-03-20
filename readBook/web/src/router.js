import Vue from 'vue'
import Router from 'vue-router'
 
//组件模块
import HelloWorld from '@/components/HelloWorld'
import look from '@/view/look'
import add from '@/view/add'


 
Vue.use(Router)
 
export default new Router({
  routes: [
    { path: '/', name: 'HelloWorld', component: HelloWorld },
    { path: '/add', name: 'add', component: add },
    { path: '/look', name: 'look', component: look },
  ]
})
  