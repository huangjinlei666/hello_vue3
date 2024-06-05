<template>
    <div class="talk">
        <button @click="getLoveTalk">点我添加一句话</button>
        <ul>
            <li v-for="item in talkList" :key="item.id">{{ item.title }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import {reactive} from 'vue'
import {useTalkStore} from '@/store/loveTalk'
import {storeToRefs} from 'pinia'
const talkStore=useTalkStore()
const {talkList} =storeToRefs(talkStore)
talkStore.$subscribe((mutate,state)=>{
    console.log("talkStore里的数据变化了",mutate,state)
    localStorage.setItem('talkList',JSON.stringify(state.talkList))
})
 function getLoveTalk(){
    talkStore.getATalk()
}
</script>

<style scoped>
    .talk{
        background-color: orange;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 0 10px;
    }
</style>