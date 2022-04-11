import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Layout from '@/views/Layout/Layout'


const constantRouterMap = [
    // {
    //     path: '/login',
    //     name: 'Login',
    //     component: hello
    // },
    {
        path: '/',
        component: Layout,
        redirect: '/Dashboard',
        children: [{
            path: 'Dashboard',
            name: 'Dashboard',
            component: () => import('@/views/Dashboard/index'),
            // meta: { title: '主页', icon: 'dashboard', requireAuth: true, roles: ['user', 'admin'] }//加权限
        }]
    },

    //404
    {
        path: '/404',
        component: () => import('@/views/404'),
        hidden: true
    },
    { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
    // mode: 'history', //后端支持可开
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
})

