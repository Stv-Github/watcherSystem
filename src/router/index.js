import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['../components/pages/home'], resolve),
      children: [
        {
            path:'/', //首页
            name:'dashBoard',
            component: resolve => require(['../components/pages/dashBoard'], resolve)
        },
        {
            path: '/userTable', //用户列表
            name: 'userTable',
            component: resolve => require(['../components/userTable/userTable'], resolve)
        },
        {
            path: '/articles', //发布管理
            name: 'articles',
            component: resolve => require(['../components/pages/articles'], resolve)
        },
        {
            path: '/baseform', //积分兑换
            name: 'baseform',
            component: resolve => require(['../components/pages/baseform'], resolve)
        },
        {
            path: '/newUsers',  //新增用户
            name: 'newUsers',
            component: resolve => require(['../components/pages/newUsers'], resolve)
        },
        {
            path: '/editUserInfo',  //编辑用户信息
            name: 'editUserInfo',
            component: resolve => require(['../components/pages/editUserInfo'], resolve)
        }
        
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['../components/pages/login'], resolve)
    }
  ]
})
