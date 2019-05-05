import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import index from '@/components/index'
import note from '@/components/note'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
      meta:{
        needLogin: false
      }
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      meta:{
        needLogin: true
      },
      children: [
        {
          path: '/note',
          name: 'note',
          component: note
        }
      ]
    }
  ]
})
