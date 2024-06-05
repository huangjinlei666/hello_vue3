import { createRouter,createWebHistory,createWebHashHistory } from "vue-router";
import Home from '@/views/Home.vue'
import News from '@/views/News.vue'
import About from '@/views/About.vue'
import Detail from '@/views/Detail.vue'
const router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            name:'zhuye',
            path:'/home',
            component:Home,
        },
        {
            name:'xinwen',
            path:'/news',
            component:News,
            children:[
                {
                    name:'xiangqing',
                    path:'detail',
                    component:Detail,
                }
            ]
        },
        {
            name:'guanyu',
            path:'/about',
            component:About,
        },
    ]
})

export default router