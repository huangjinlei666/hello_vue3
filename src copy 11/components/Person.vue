<template>
  <div class="Person">
    <h1>北京</h1>
    <h2 ref="title2">昌平</h2>
    <h3>尚硅谷</h3>
    <button @click="showLog">点我输出h2元素</button>
  </div>
</template>

<script lang="ts" setup name="person66666">
import {ref,defineExpose} from 'vue'
let title2=ref()//此处变量名要和ref打标识名字一致
let a=ref(0)
let b=ref(1)
let c=ref(2)
function showLog(){
  console.log(title2.value)
}
defineExpose({a,b})//子组件暴露什么，父组件打标识ref才能拿到什么
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
