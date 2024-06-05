<template>
    <button @click="show=true">展示弹窗</button>
    <teleport to='body'>
        <div class="modal" v-show="show">
        <h2>我是弹窗标题</h2>
        <p>我是内容</p>
        <button @click="show=false">关闭弹窗</button>
    </div>
    </teleport>
</template>

<script setup lang="ts" name="Modal">
import {ref} from 'vue'
let show=ref(false)
</script>

<style scoped>
.modal{
    width: 200px;
    height: 150px;
    background-color: skyblue;
    padding: 5px;
    box-shadow: 0 0 5px;
    border-radius: 10px;
    text-align: center;
    position: fixed;
    left: 50%;
    margin-left: -100px;
    top: 20px;
}
</style>