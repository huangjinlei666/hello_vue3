import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import Home from '@/views/Home.vue'
import News from '@/views/News.vue'
import About from '@/views/About.vue'
import Detail from '@/views/Detail.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            redirect:'/home'
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
        },
        {
            name: 'xinwen',
            path: '/news',
            component: News,
            children: [
                {
                    name: 'xiangqing',
                    path: 'detail/:id/:title/:content?',//参数后面加？代表可传可不传
                    component: Detail,
                    // 第一种写法，只能用于params
                    // props:true,
                    //第二种写法,适用query与params
                    props(route) {
                        return route.params
                    }
                }
            ]
        },
        {
            name: 'guanyu',
            path: '/about',
            component: About,
        },
    ]
})

export default router