<template>
  <div class="app">
    <h2>name为：{{ person.name }}</h2>
    <h2>age为：{{ person.age }}</h2>
    <h2>{{ car }}</h2>
    <h2>{{ car2 }}</h2>
    <button @click="person.age +=1">修改age</button>
    <button @click="car.price +=1">修改car1.price</button>
    <button @click="car2.price +=1">修改car2.price</button>
  </div>
</template>

<script setup lang="ts" name="App">
import { reactive, toRaw,markRaw } from "vue";
let person=reactive({
        name:"张三",
        age:19
})
let car=markRaw({brand:'奔驰',price:40})
let car2=reactive(car)
console.log('响应式person',person)
console.log('原始person',toRaw(person))
</script>

<style scoped>
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 10px;
}
button {
  margin: 0 5px;
}
</style>