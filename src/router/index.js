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
          name: 'home',
          component: resolve => require(['@/page/home'],resolve)
        },
        {
          path: '/note',
          name: 'note',
          component: resolve => require(['@/page/note'],resolve)
        },
        {
          path: '/hot',
          name: 'community',
          component: resolve => require(['@/components/community'],resolve),
          children:[
            {
              path: '/hot',
              name: 'hot',
              component: resolve => require(['@/page/community/hot'],resolve),
            },
            {
              path: '/block',
              name: 'block',
              component: resolve => require(['@/page/community/block'],resolve),
            }
          ]
        },
        {
          path: '/myinfo',
          name: 'myinfo',
          component: resolve => require(['@/page/myinfo/myInfo'],resolve)
        },
        {
          path: '/detail',
          name: 'detail',
          component: resolve => require(['@/page/community/detail'],resolve),
        },
        {
          path: '/blockDetail',
          name: 'blockDetail',
          component: resolve => require(['@/page/community/block-detail'],resolve),
        },
        {
          path: '/blockDetailContent',
          name: 'blockDetailContent',
          component: resolve => require(['@/page/community/block-detail-content'],resolve),
        },
        {
          path: '/myinfoDetail',
          name: 'myinfoDetail',
          component: resolve => require(['@/page/myinfo/myInfo-detail'],resolve),
        },
        {
          path: '/myinfoContent',
          name: 'myinfoContent',
          component: resolve => require(['@/page/myinfo/myInfo-content-list'],resolve),
        },
        {
          path: '/school',
          name: 'school',
          component: resolve => require(['@/page/study/school'],resolve),
        },
        {
          path: '/senecs',
          name: 'senecs',
          component: resolve => require(['@/page/study/senecs'],resolve),
        }
      ]
    }
  ]
})
