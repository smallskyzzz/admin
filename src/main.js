// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(ElementUI)

// 路由守卫（访问路由前触发）
router.beforeEach((to, from, next) => {
  // sessionStorage有name记录（代表用户已经登录）
  if(window.sessionStorage.name){
    // console.log(window.sessionStorage)
    if(to.path === '/'){
      next({path: '/index'})
    }else{
      next()
    }
  }else{ // 无记录回调到login
    if(to.path === '/'){
      next()
    }else{
      next({path: '/'})
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
