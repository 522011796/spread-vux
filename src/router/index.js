import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['@/components/layout'],resolve),
      children:[
        {
          path: '/welcome',
          name: 'welcome',
          component: resolve => require(['@/components/welcome'],resolve)
        },
        {
          path: '/',
          //name: 'layout-tab',
          component: resolve => require(['@/components/layout-tab'],resolve),
          children:[
            {
              path: '/',
              name: 'recommendRoot',
              component: resolve => require(['@/page/topic/recommend'],resolve)
            },
            {
              path: '/recommend',
              name: 'recommend',
              component: resolve => require(['@/page/topic/recommend'],resolve)
            },
            {
              path: '/block',
              name: 'block',
              component: resolve => require(['@/page/topic/block'],resolve)
            }
          ]
        },
        {
          path: '/goods',
          name: 'goods',
          component: resolve => require(['@/page/goods/goods'],resolve)
        },
        {
          path: '/find',
          name: 'find',
          component: resolve => require(['@/page/find/find'],resolve)
        },
        {
          path: '/myinfo',
          name: 'myinfo',
          component: resolve => require(['@/page/myinfo/myinfo'],resolve)
        },
        {
          path: '/detail',
          name: 'detail',
          component: resolve => require(['@/page/community/detail'],resolve)
        },
        {
          path: '/blockDetail',
          name: 'blockDetail',
          component: resolve => require(['@/page/community/blockDetail'],resolve)
        }
      ]
    }
  ]
})
