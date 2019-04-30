<template>
  <div class="login">
    <div class="login-item">
      <el-row type="flex" justify="center">
        <el-col :sm="24" :md="8">
          <h2>登录</h2>
        </el-col>
      </el-row>
    </div>
    <div class="login-item">
      <el-row type="flex" justify="center">
        <el-col :sm="24" :md="8">
          <el-input v-model="name" placeholder="请输入用户名" prefix-icon="el-icon-user"></el-input>
        </el-col>
      </el-row>
    </div>
    <div class="login-item">
      <el-row type="flex" justify="center">
        <el-col :sm="24" :md="8">
          <el-input v-model="password" placeholder="请输入密码" prefix-icon="el-icon-s-open" show-password></el-input>
        </el-col>
      </el-row>
    </div>
    <div class="login-item">
      <el-row type="flex" justify="center">
        <el-col :sm="24" :md="8">
          <el-button type="primary" @click="login">登录</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import {login} from "../api/api";

export default {
  name: 'login',
  data () {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      login({
        name: this.name,
        password: this.password
      }).then((res) => {
        if(res.data.state){ // 登陆成功
          window.sessionStorage.name = this.name
          this.$router.push('/index')
        }else {
          alert('登录失败')
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.login{
  .login-item{
    margin-top: 50px;
    h2{
      text-align: center;
    }
    button{
      width: 100%;
    }
  }
}
</style>
