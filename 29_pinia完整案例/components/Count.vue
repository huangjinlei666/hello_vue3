<template>
  <div class="count">
    <h2>当前求和为：{{ sum }},放大十倍后：{{ bigSum }}</h2>
    <h2>学校名：{{ school }},位置：{{ address }},大写学校名:{{ upperSchool }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<script setup lang="ts" name="Count">
import { ref ,toRefs} from "vue";
import {useCountStore} from '@/store/count'
import{storeToRefs} from 'pinia'
const countStore=useCountStore()
const {sum,school,address,bigSum,upperSchool}=storeToRefs(countStore)
//storeToRefs只关注store中的数据
// console.log('@@',storeToRefs(countStore))
// const {sum,school,address}=toRefs(countStore)
// console.log('@@',toRefs(countStore))
// console.log(countStore)
let n = ref(1);
function add() {
    //第一种修改方式
    // countStore.sum +=n.value
    // countStore.school ="黑马"
    // countStore.address ='南京'
    //第二种修改方式，多个
    // countStore.$patch({
    //     sum:888,
    //     school:'黑马',
    //     address:'南京'
    // })
    //第三种修改方式
    countStore.increment(n.value)
}
function minus() {
    countStore.decrement(n.value)
}
</script>

<style scoped>
.count {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
select,
button {
  margin: 0 5px;
  height: 25px;
}
</style>