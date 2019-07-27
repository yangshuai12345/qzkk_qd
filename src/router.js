import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('./views/Register.vue')
    },
    {
      path: '/manage',
      name: 'Manage',
      component: () => import('./views/Manage.vue'),
      children: [{
        name: 'home',
        path: '',
        component: () => import('./views/Home.vue'),
        meta: [],
      },{
          path: '/userList',
          component: () => import('./views/UserList.vue'),
          meta: ['人员管理', '查看人员'],
      },{
        path: '/userVerify',
        component: () => import('./views/UserVerify.vue'),
        meta: ['人员管理', '注册审核'],
      },{
        path: '/goodList',
        component: () => import('./views/GoodList.vue'),
        meta: ['物资管理', '查看'],
      },{
        path: '/goodVerify',
        component: () => import('./views/GoodVerify.vue'),
        meta: ['物资管理', '物资审核'],
      },{
        path: '/notice',
        component: () => import('./views/Notice.vue'),
        meta: ['信息服务', '通知'],
      },{
        path: '/noticeDeliver',
        component: () => import('./views/NoticeDeliver.vue'),
        meta: ['信息服务', '发布通知'],
      },{
        path: '/noticeVerify',
        component: () => import('./views/NoticeVerify.vue'),
        meta: ['信息服务', '通知审核'],
      },{
        path: '/demo',
        component: () => import('./views/demo.vue'),
        meta: [],
      }]
    },

  ]
})
