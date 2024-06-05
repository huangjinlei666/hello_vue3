<template>
  <div class="Person">
    <h2>{{ name}}--{{  person.name}}</h2>
    <h2>{{ age}}--{{  person.age}}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
  </div>
</template>

<script lang="ts" setup name="person66666">
import {reactive,toRefs,toRef} from 'vue'
let person =reactive({
  name:"张三",
  age:18
})
//取出对象所有的属性，都变为响应式，person也变
let {name,age}=toRefs(person)
//取出对象中某一个属性，person中被取出的属性也变
let nianling=toRef(person,'age')
console.log(nianling.value)
function changeName(){
  name.value +='~'
}
function changeAge(){
  age.value +=1
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
li{
  font-size: 20px;
}
</style>
