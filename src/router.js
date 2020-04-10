//导入vue
import Vue from 'vue'
//导入路由模块
import Router from 'vue-router'
import Login from './views/Login'
import Home from './views/Home'
import bikeInfo from './views/bike/bikeInfo'
import userInfo from './views/user/userInfo'
import test from './views/test/Test'
import bikeUsage from './views/bike/bikeUsage'

Vue.use(Router)

export default new Router({
    routes: [
      {
        //定义路由链接路径
        path: '/test',
        name: 'Test',
        component: test,
        hidden: true,
      },
      {
        //定义路由链接路径
        path: '/',
        name: 'Login',
        component: Login,
        hidden: true,
      },
      {
        path: '/home',
        name: '用户管理',
        component: Home,
        iconCls:"el-icon-user",
        children: [
          ////子菜单一
          {
            path: '/user/userInfo',
            name: '用户信息',
            component: userInfo,
          }
        ]
      },
      {
        path: '/home',
        name: '车辆管理',
        component: Home,
        iconCls:"el-icon-bicycle",
        //用于在首页的左侧渲染菜单栏
        children: [
          //子菜单一
          {
            path: '/bike/bikeInfo',
            name: '车辆位置',
            component: bikeInfo,
          },
          {
            path: '/bike/bikeUsage',
            name: '车辆使用情况',
            component: bikeUsage,
          }
        ]
      }
    ]
  }
)

