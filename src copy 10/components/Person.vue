<template>
  <div class="Person">
    <h2>需求：当水温超过60℃或水位超过50，给服务器发请求</h2>
    <h2>当前水温：{{  temp}}</h2>
    <h2>当前水位：{{  height}}</h2>
    <button @click="changeTemp">点我水温+10</button>
    <button @click="changeHeight">点我水位+10</button>
  </div>
</template>

<script lang="ts" setup name="person66666">
import {ref,watch,watchEffect} from 'vue'
let temp=ref(10)
let height=ref(0)
function changeTemp(){
  temp.value +=10
}
function changeHeight(){
  height.value +=10
}
//watch实现
// watch([temp,height],(value)=>{
//   let [newTemp,newHeight]=value
//   if(newTemp >=60 || newHeight >=50){
//     console.log('发送请求')
//   }
// })
//watchEffect实现
watchEffect(()=>{
  // console.log('@')//一上来会执行一次
  if(temp.value >=60 || height.value >=50){
    console.log('发送请求')
  }
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
li {
  font-size: 20px;
}
</style>
