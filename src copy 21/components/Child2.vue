<template>
    <div class="child2">
        <h2>2号子组件,弟弟</h2>
        <h3>哥哥给的玩具：{{ toy }}</h3>
    </div>
</template>

<script setup lang="ts" name="child1">
import {ref,onUnmounted} from 'vue'
import emitter from '@/utils/emitter';
let toy=ref('')
emitter.on('send-toy',(value:any)=>{
    toy.value=value
})
onUnmounted(()=>{
    emitter.off('send-toy')
})
</script>

<style scoped>
    .child2{
        height: 150px;
        width: 200px;
        background-color: skyblue;
        border-radius: 10px;
        box-shadow: 0 0 10px;
    }
</style>