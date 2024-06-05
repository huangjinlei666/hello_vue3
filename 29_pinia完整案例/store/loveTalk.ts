import { defineStore } from 'pinia'
import axios from 'axios'
import { nanoid } from 'nanoid'
//store的选项式写法
/* export const useTalkStore = defineStore('talk', {
    actions: {
        async getATalk() {
            //解构赋值出result里的data，再从data中解构出content,并且重命名为title
            let { data: { content: title } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
            // console.log(result)
            let obj = { id: nanoid(), title }
            // console.log(obj)
            this.talkList.unshift(obj)
        }
    },
    state() {
        return {
            talkList: JSON.parse(localStorage.getItem('talkList') as string) || []
        }
    }
}) */

//store的组合式写法
import { reactive } from 'vue'
export const useTalkStore = defineStore('talk', () => {
    const talkList = reactive(JSON.parse(localStorage.getItem('talkList') as string) || [])
    async function getATalk() {
        //解构赋值出result里的data，再从data中解构出content,并且重命名为title
        let { data: { content: title } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
        // console.log(result)
        let obj = { id: nanoid(), title }
        // console.log(obj)
        talkList.unshift(obj)
    }
    return { talkList, getATalk }
}) 