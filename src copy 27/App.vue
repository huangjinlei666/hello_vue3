<template>
  <div class="app">
    <h2>求和为：{{ sum }}</h2>
    <h2>姓名为：{{ person.name }}</h2>
    <h2>年龄为：{{ person.age }}</h2>
    <h2>车信息为：{{ car }}</h2>
    <button @click="changeSum">修改sum</button>
    <button @click="changeName">修改name</button>
    <button @click="changeAge">修改age</button>
    <button @click="changePerson">修改整个人</button>
    <button @click="changeBrand">修改car的brand</button>
    <button @click="changePrice">修改car的价格</button>
    <button @click="changeColor">修改car的颜色</button>
  </div>
</template>

<script setup lang="ts" name="App">
import { ref, shallowRef, reactive, shallowReactive } from "vue";
let sum = shallowRef(0);
let person = shallowRef({
  name: "张三",
  age: 18,
});
let car = shallowReactive({
  brand: "奔驰",
  options: {
    price: 40,
    color: "red",
  },
});
function changeSum() {
  sum.value += 1;
}
function changeName() {
  person.value.name = "李四";
}
function changeAge() {
  person.value.age += 1;
}
function changePerson() {
  person.value = { name: "tony", age: 99 };
}
function changeBrand() {
  car.brand = "奥迪";
}
function changePrice() {
  car.options.price += 1;
}
function changeColor() {
  car.options.color = "blue";
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