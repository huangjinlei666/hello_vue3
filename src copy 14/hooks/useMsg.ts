import { reactive } from 'vue'
import axios from 'axios'

export default function () {
    let msgList = reactive(['我是第一句话'])
    async function addMsg() {
        try {
            let res = await axios.get('https://chp.shadiao.pro/')
            msgList.push(res.data.message)
            // console.log(res)
        } catch (error) {
            alert(error)
        }
    }
    return {msgList,addMsg}
}