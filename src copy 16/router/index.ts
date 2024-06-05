import { createRouter,createWebHistory } from "vue-router";
import Home from '@/views/Home.vue'
import News from '@/views/News.vue'
import About from '@/views/About.vue'
const router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/home',
            component:Home,
        },
        {
            path:'/news',
            component:News,
        },
        {
            path:'/about',
            component:About,
        },
    ]
})

export default router