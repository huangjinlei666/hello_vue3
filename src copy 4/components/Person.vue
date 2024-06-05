<template>
  <div class="Person">
    姓：<input type="text" v-model="firstName"><br>
    名：<input type="text" v-model="lastName"><br>
    全名：<span>{{  fullName}}</span>
    全名：<span>{{  fullName}}</span>
    全名：<span>{{  fullName}}</span>
    <button @click="changeFullName">修改全名为li-si</button>
  </div>
</template>

<script lang="ts" setup name="person66666">
import {ref,computed} from 'vue'
let firstName=ref('zhang')
let lastName=ref('san')
//只读
// let fullName=computed(()=>{
//   //有缓存，
//   console.log(111)
//   return firstName.value.slice(0,1).toUpperCase()+firstName.value.slice(1)+lastName.value
// })
//可读可写
let fullName=computed({
  get(){
    return firstName.value.slice(0,1).toUpperCase()+firstName.value.slice(1)+lastName.value
  },
  set(value){
    console.log('修改',value)
    const [str1,str2]=value.split('-')
    firstName.value=str1
    lastName.value=str2
  }
})
function changeFullName(){
  fullName.value='li-si'
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
