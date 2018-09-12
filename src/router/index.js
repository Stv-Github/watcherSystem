import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'



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
      component: Home,
      children: [
        {
            path:'/', //首页
            name:'introduce',
            component: resolve => require(['../components/introduce/introduce'], resolve)
        },
        {
            path: '/userTable', //用户列表
            name: 'userTable',
            component: resolve => require(['../components/userTable/userTable'], resolve)
        },
        {
            path: '/articles', //发布管理
            name: 'articles',
            component: resolve => require(['../components/articles/articles'], resolve)
        },
        {
            path: '/baseform',
            name: 'baseform',
            component: resolve => require(['../components/baseform/baseform'], resolve)
        },
        {
            path: '/newUsers',  //新增用户
            name: 'newUsers',
            component: resolve => require(['../components/common/newUsers/newUsers'], resolve)
        },
        {
            path: '/editUserInfo',  //编辑用户信息
            name: 'editUserInfo',
            component: resolve => require(['../components/common/editUserInfo/editUserInfo'], resolve)
        }
        
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['../components/login/login'], resolve)
    }
  ]
})
