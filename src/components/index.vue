<template>
  <div class="main">
    <div class="nav">
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
      <el-menu :collapse="isCollapse">
        <router-link to="note">
          <el-menu-item index="1">
            <i class="el-icon-document"></i>
            <span slot="title">我的笔记</span>
          </el-menu-item>
        </router-link>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </div>
    <router-view class="content" ref="content"></router-view>
  </div>
</template>

<script>
    export default {
      name: "index",
      data() {
        return {
          isCollapse: true
        }
      }
    }
</script>

<style lang="less" scoped>
.main{
  display: flex;
  .nav{
    flex: 0 0 139px;
  }
  .content{
    flex: 1;
  }
}
</style>
