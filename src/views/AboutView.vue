<template>
  <div>
    <el-container id="box">
      <el-aside>
        <el-menu
          default-active="4-1"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1" style="background:red">北美洲</el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">南美洲</span>
            </template>
            <el-menu-item index="2-1">巴西</el-menu-item>
            <el-menu-item index="2-2">智利</el-menu-item>
            <el-menu-item index="2-3">秘鲁</el-menu-item>
            <el-menu-item index="2-4">玻利维亚</el-menu-item>
            <el-menu-item index="2-5">哥伦比亚</el-menu-item>
            <el-menu-item index="2-6">委内瑞拉</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
               <i class="el-icon-menu"></i>
               <span slot="title">欧洲</span>
            </template>
            <el-menu-item index="3-1">英国</el-menu-item>
            <el-menu-item index="3-2">爱尔兰</el-menu-item>
            <el-menu-item index="3-3">法国</el-menu-item>
            <el-menu-item index="3-4">德国</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">亚洲</template>
            <el-menu-item index="4-1">中国</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">非洲</template>
            <el-menu-item index="5-1">苏丹</el-menu-item>
            <el-menu-item index="5-2">埃及</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>header</el-header>
        <el-main>
          <span>{{this.$store.state.count}}</span>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  methods: {},
};
</script>
<style scoped>
#box{
  height:100vh;
}
.el-aside{
  height:100%;
  background:#545c64;
}
.el-header{
  background:#bdbdbd;
  line-height:60px;
}
.el-main{
  background:#eee;
}
/* .el-submenu>.el-menu-item{
} */
.el-menu > *:first-child {
  text-align: left;
}
</style>
