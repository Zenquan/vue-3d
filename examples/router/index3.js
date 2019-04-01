/*
  路由模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由组件懒加载
import Ch5281 from '../pages/ch5/Ch5281.vue'
import Ch5282 from '../pages/ch5/Ch5282.vue'
// 全局注册Vue-router组件
Vue.use(VueRouter)

// 配置路由表并导出
export default new VueRouter({
  //  去掉地址中的哈希#
  mode: 'history',
  routes: [{
      path: '/',
      redirect: '/Ch5281'
    },
    {
      path: '/Ch5281',
      component: Ch5281,
    },
    {
      path: '/Ch5282',
      component: Ch5282
    }
  ]
})