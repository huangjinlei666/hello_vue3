<template>
  <div class="Person">
    <h2>姓名:{{  person.name}}</h2>
    <h2>年龄:{{  person.age}}</h2>
    <button @click="changeName">点我修改姓名</button>
    <button @click="changeAge">点我修改年龄</button>
    <button @click="changePerson">点我修改整个人</button>
  </div>
</template>

<script lang="ts" setup name="person66666">
import {reactive,watch} from 'vue'
let person=reactive({
  name:'张三',
  age:18
})
function changeName(){
  person.name +='~'
}
function changeAge(){
  person.age +=1
}
function changePerson(){
  Object.assign(person,{name:'李四',age:99})
}
//watch监视reactive定义的对象类型响应式数据，默认开启深度监视，并且无法关闭深度监视
watch(person,(newValue,oldValue)=>{
  console.log('person变化了',newValue,oldValue)
})
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
li{
  font-size: 20px;
}
</style>
