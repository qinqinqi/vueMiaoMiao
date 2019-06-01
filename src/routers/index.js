import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from './movie'
import cniemaRouter from './cniema'
import mineRouter from './mine'

Vue.use(Router)

export default new Router({
  mode: 'history',
  //用来实现锚链接 start
  // srcollBehavior(to,from,savedPosition){
  //   if(to.hash){
  //     return {
  //       selector:to.hash
  //     }
  //   }
  // },
  //用来实现锚链接 end
  base: process.env.BASE_URL,
  routes:[
    movieRouter,
    cniemaRouter,
    mineRouter,
    //当目录不存在时重定向到主页面
    {
      path:'*/',
      redirect:'/movie/NowPlaying'
    },
  ]
  // routes: [
  //   {
  //     path: '/',
  //     name: 'home',
  //     //全部加载
  //     component: Home
  //   },
  //   {
  //     path: '/about',
  //     name: 'about',
  //     //按需载入，懒加载
  //     component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  //   }
  // ]
})
