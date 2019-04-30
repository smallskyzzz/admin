<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted: function () {
    // 页面再次启动（关闭浏览器后）清除登录状态
    window.addEventListener('onunload',()=>{
      window.sessionStorage.removeItem('name')
    });
  }
}
</script>

<style>

</style>
