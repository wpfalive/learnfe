//index.js作为路由
import Vue from 'vue'
import Router from 'vue-router'
// 引入HelloWorld组件 @是/src的别名
// import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/Hello'
import About from '@/components/About'
import Coins from '@/components/Coins'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Params from "@/components/Params"
import Msg from '@/components/Msg'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', // 每次用户导航到/路由，就渲染Hello组件
      name: 'Hello',
      component: Hello,
      alias: '/home'
    },
    {
      path: '/about', 
      name: 'About',
      component: About,
      alias: '/wwwpf',
    },
    {
      path: '/coins/:id',
      name: "coins",
      component: Coins,
    },
    // {
    //   path: '/hi',
    //   component: Hi,
    //   children: [
    //     // {path: '/', component: Hi},
    //     {path: '/hi1', component: Hi1, name:'ttt1'},
    //     {path: '/hi2',component: Hi2, name: 'ttt2'}
    //   ],
    // },
    {
      path: '/hi',
      components: {
        default: Hi,
        left: Hi1,
        right: Hi2,
      },
    },
    {
      path: '/params/:newsId(\\d+)/:newsTitle',
      component: Params
    },
    {
      path: '/msg/:msgContent/:msgDate',
      component: Msg,
      beforeEnter: (to, from, next) => {
        console.log('我进入了params模板')
        console.log(to)
        console.log(from)
        next()
      }
    },
    {
      path: '/goback',
      redirect: '/',
    },
    {
      path: '*',
      component: Error
    }
  ]
})
