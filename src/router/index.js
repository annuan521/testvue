import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import My from '@/components/My'
import Study from '@/components/Study'
import Follow from '@/components/Follow'
import Result from '@/components/Result'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
      path: '/my',
      name: 'my',
      component: My
    },
    {
      path: '/study',
      name: 'study',
      component: Study
    }, {
      path: '/follow',
      name: 'follow',
      component: Follow
    },
    {
      path: '/result',
      name: 'result',
      component: Result
    }
      ]
    }, 
  ]
})
