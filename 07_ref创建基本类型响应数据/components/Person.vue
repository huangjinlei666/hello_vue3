<template>
  <div class="Person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="alertTel">展示电话</button>
  </div>
</template>

<script lang="ts" setup name="person66666">
import { ref } from "vue";
let name = ref("张三");
let age = ref(19);
let tel = "13888888888";
console.log(1,name)
console.log(2,age)
console.log(3,tel)
function changeName() {
  name.value = "李四";
}
function changeAge() {
  age.value += 1;
}
function alertTel() {
  alert(tel);
}
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
</style>
