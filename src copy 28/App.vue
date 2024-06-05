<template>
  <div class="app">
    <h2>求和sum1为：{{ sum1 }}</h2>
    <h2>求和sum2为：{{ sum2 }}</h2>
    <h2>car1：{{ car1 }}</h2>
    <h2>car2：{{ car2 }}</h2>
    <button @click="changeSum1">修改sum1</button>
    <button @click="changeSum2">修改sum2</button>
    <button @click="changeBrand1">修改car1的brand</button>
    <button @click="changePrice1">修改car1的价格</button>
    <button @click="changeColor1">修改car1的颜色</button>
    <button @click="changeBrand2">修改car2的brand</button>
    <button @click="changePrice2">修改car2的价格</button>
    <button @click="changeColor2">修改car2的颜色</button>
  </div>
</template>

<script setup lang="ts" name="App">
import { ref, reactive, readonly, shallowReadonly } from "vue";
let sum1 = ref(0);
let sum2 = readonly(sum1);
let car1 = reactive({
  brand: "奔驰",
  options: {
    price: 40,
    color: "red",
  },
});
let car2 = shallowReadonly(car1);
function changeSum1() {
  sum1.value += 1;
}
function changeSum2() {
  sum2.value += 1;
}
function changeBrand1() {
  car1.brand = "奥迪";
}
function changePrice1() {
  car1.options.price += 1;
}
function changeColor1() {
  car1.options.color = "blue";
}
function changeBrand2() {
  car2.brand = "奥迪";
}
function changePrice2() {
  car2.options.price += 1;
}
function changeColor2() {
  car2.options.color = "blue";
}
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