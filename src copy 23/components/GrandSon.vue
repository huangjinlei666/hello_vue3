<template>
    <div class="grand-son">
        <h3>孙组件</h3>
        <h4>祖先提供的：{{ money }}</h4>
        <h4>{{ y.name }},{{ y.price }}</h4>
        <button @click="updateMoney(1)">花爷爷的钱</button>
    </div>
</template>

<script setup lang="ts" name="GrandSon">
import {inject} from 'vue'
let {money,updateMoney}=inject('qian',{money:0,updateMoney:(n:number)=>{}})
let y=inject('che',{name:'未知名称',price:0})
</script>

<style scoped>
    .grand-son{
        height: 200px;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 0 10px;
        background-color: orange;
    }
</style>