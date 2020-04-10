<template>
  <div>
    <!--        <el-container>布局容器-->
    <el-container>
      <!--            顶部栏-->
      <el-header class="homeHeader">
        <div class="title">微人事</div>
      </el-header>
      <el-container>
        <!--                <el-aside>侧边栏容器-->
        <el-aside width="200px">
          <el-menu router unique-opened>
            <el-submenu index="1" >
              <template slot="title">
                <i class="el-icon-location" style="color: #409eff;margin-right: 5px"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item index="1-1" >选项1</el-menu-item>
              <el-menu-item index="1-2" >选项2</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <!--                            设置二级导航菜单的标题-->
              <template slot="title">
                <i style="color: #409eff;margin-right: 5px" ></i>
                <span>车辆管理</span>
              </template>
              <!--                             设置二级菜单的菜单项-->
              <el-menu-item index="2-1">
                选项一
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'testHome'
  }
</script>

<style>
  .homeHeader {
    background-color: #409eff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 15px;
    box-sizing: border-box;
  }

  .homeHeader .title {
    font-size: 30px;
    font-family: 华文行楷;
    color: #ffffff
  }

  .homeHeader .userInfo {
    cursor: pointer;
  }

  .el-dropdown-link img {
    width: 48px;
    height: 48px;
    border-radius: 24px;
    margin-left: 8px;
  }
</style>

