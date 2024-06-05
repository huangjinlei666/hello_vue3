<template>
  <div class="Person">
    <h2>姓名:{{ person.name }}</h2>
    <h2>年龄:{{ person.age }}</h2>
    <h2>车:{{ person.car.c1 }},{{  person.car.c2 }}</h2>
    <button @click="changeName">点我修改姓名</button>
    <button @click="changeAge">点我修改年龄</button>
    <button @click="changeC1">点我修改C1</button>
    <button @click="changeC2">点我修改C2</button>
    <button @click="changeCar">点我修改car</button>
  </div>
</template>

<script lang="ts" setup name="person66666">
import { reactive, watch } from "vue";
let person = reactive({
  name: "张三",
  age: 18,
  car: { c1: "奔驰", c2: "宝马" },
});
function changeName() {
  person.name += "~";
}
function changeAge() {
  person.age += 1;
}
function changeC1() {
  person.car.c1 = "奥迪";
}
function changeC2() {
  person.car.c2 = "法拉利";
}
function changeCar() {
  person.car = { c1: "雅迪", c2: "小牛" };
}
//只监视姓名，和第一台车
watch([()=>person.name,()=>person.car.c1],(newValue,oldValue)=>{
  console.log('person的name或c1变化了',newValue,oldValue)
},{deep:true})
</script>

<style scoped>
.Person {
  background-color: skyblue;
  box-shadow: 0, 0, 10px;
  border-radius: 10px;
  padding: 20px;
}
button {
  margin: 0 5px;
}
li {
  font-size: 20px;
}
</style>
