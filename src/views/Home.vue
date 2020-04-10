<template>
  <div>
    <!--    布局容器-->
    <el-container>
      <el-header class="homeHeader">
        <div class="title">校园共享单车</div>
        <div>
          <!--        定义下拉菜单-->
          <el-dropdown class="userInfo" @command="methodHandler">
            <span class="el-dropdown-link" style="margin-right: 5px">
              杨亚龙
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="userInfo">个人中心</el-dropdown-item>
              <el-dropdown-item command="setting">设置</el-dropdown-item>
              <!--              divided显示分割线-->
              <el-dropdown-item command="logout" divided>注销登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <!--          NavMenu 导航菜单-->
          <el-menu router unique-opened>
            <!--            一级菜单-->
            <el-submenu :index="index+''" v-for="(item,index) in this.$router.options.routes" v-if="!item.hidden"
                        :key="index">
              <!--                            设置一级导航菜单-->
              <template slot="title">
                <i :class="item.iconCls" style="color: #409eff;margin-right: 5px"></i>
                <span>{{item.name}}</span>
              </template>
              <!--                             设置二级导航菜单-->
              <el-menu-item style="padding-left: 53px" :index="child.path" v-for="(child,indexj) in item.children"
                            :key="indexj">
                {{child.name}}
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <!--          面包屑导航条-->
          <el-breadcrumb separator-class="el-icon-arrow-right" v-if="this.$router.currentRoute.path!='/home'">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{this.$router.currentRoute.name}}</el-breadcrumb-item>
          </el-breadcrumb>
          <!--          当前页面路径是/home时，显示div中的文字-->
          <div class="homeWelcome" v-if="this.$router.currentRoute.path=='/home'">
            欢迎来到上海第二工业大学共享单车管理平台
          </div>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script>
  export default {
    name: 'Home',
    methods: {
      methodHandler () {
        console.log('methodsHandler')
      },
      menuClick (index, indexPath) {
        console.log(index)
        console.log(indexPath)
      },
      logout () {

      },
      userInfo () {

      },
    }

  }
</script>

<style scoped>
  .homeWelcome {
    text-align: center;
    font-size: 30px;
    font-family: 华文行楷;
    color: #409eff;
    padding-top: 50px;
  }

  .homeHeader {
    background-color: white;
    border-bottom: 1px solid lightcyan;
    /*设置元素垂直居中*/
    display: flex;
    /*设置元素垂直居中*/
    align-items: center;
    /*在弹性盒对象的 <div> 元素中的各项周围留有空白*/
    justify-content: space-between;
  }

  .homeHeader .title {
    font-size: 14px;
    font-family: 华文行楷;
    color: #409eff;
  }

  .el-dropdown-link {
    display: flex;
    /*设置元素垂直居中*/
    align-items: center;
  }

  .homeHeader .userInfo {
    cursor: pointer;
  }

</style>
