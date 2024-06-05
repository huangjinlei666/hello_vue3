<template>
    <div class="child1">
        <h2>1号子组件,哥哥</h2>
        <h3>{{ toy }}</h3>
        <button @click="emitter.emit('send-toy',toy)">把玩具给弟弟</button>
    </div>
</template>

<script setup lang="ts" name="child1">
import {ref} from 'vue'
import emitter from '@/utils/emitter';
let toy=ref('笔记本')
</script>

<style scoped>
    .child1{
        height: 150px;
        width: 200px;
        background-color: skyblue;
        border-radius: 10px;
        box-shadow: 0 0 10px;
    }
</style>