import { defineStore } from 'pinia'

export const useCountStore = defineStore('count', {
    actions: {
        //可以处理复杂逻辑，实现复用
        increment(value:number) {
            console.log('increment调用了', value)
            if (this.sum < 10) {
                this.sum += value
            }
        },
        decrement(value:number){
            console.log('decrement调用了',value)
            this.sum -=value
        }
    },
    state() {
        return {
            sum: 1,
            school: 'shangguigu',
            address: '北京昌平',
        }
    },
    getters:{
        //箭头函数写法
        bigSum:(state)=>state.sum*100,
        //普通函数写法，可以用this拿到数据，不用参数
        upperSchool():string{
            return this.school.toUpperCase()
        }
    }
})