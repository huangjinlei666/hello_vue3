<template>
    <div class="father">
        <h3>父组件</h3>
        <h4>银子：{{ money }}</h4>
        <h4>车：{{ car.name }},{{ car.price }}</h4>
        <Son></Son>
    </div>
</template>

<script setup lang="ts" name="Father">
import Son from './Son.vue'
import {ref,reactive,provide} from 'vue'
let money=ref(100)
let car=reactive({
    name:'奔驰',
    price:40
})
function updateMoney(value:number){
    money.value -=value
}
//向后代提供数据
provide('qian',{money,updateMoney})
provide('che',car)
</script>

<style scoped>
    .father{
        height: 500px;
        border-radius: 10px;
        padding: 10px;
        box-shadow: 0 0 10px;
        background-color: grey;
    }
</style>