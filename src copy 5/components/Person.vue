<template>
  <div class="Person">
    <h2>当前求和为：{{ sum}}</h2>
    <button @click="changeSum">点我sum+1</button>
  </div>
</template>

<script lang="ts" setup name="person66666">
import {ref,watch} from 'vue'
let sum=ref(0)
function changeSum(){
  sum.value +=1
}
const stopWatch= watch(sum,(newValue,oldValue)=>{
  console.log('sum变化了',newValue,oldValue)
  if(sum.value>5){
    stopWatch()
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
li{
  font-size: 20px;
}
</style>
