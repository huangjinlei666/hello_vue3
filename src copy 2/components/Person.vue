<template>
  <div class="Person">
    <h2>一辆{{car.brand}}车，价值:{{ car.price }}w</h2>
    <button @click="changePrice">修改价格</button>
    <button @click="changeCar">变更车的信息</button>
    <hr>
    <h2>当前求和为：{{ sum}}</h2>
    <button @click="changeSum">点我+1</button>
  </div>
</template>

<script lang="ts" setup name="person66666">
import {ref,reactive} from 'vue'
  let car=reactive({brand:'奔驰',price:100,})
  let sum=ref(0)
  function changePrice(){
    car.price +=10
  }
  function changeCar(){
    // car={brand:'雅迪',price:1}//页面不更新
    Object.assign(car,{brand:'雅迪',price:1})
  }
  function changeSum(){
    sum.value+=1
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
