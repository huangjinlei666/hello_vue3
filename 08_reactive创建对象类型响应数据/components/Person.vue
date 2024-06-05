<template>
  <div class="Person">
    <h2>一辆{{ car.brand }}车，价值:{{ car.price }}w</h2>
    <button @click="changePrice">修改价格</button>
    <hr>
    <h2>游戏列表</h2>
    <ul>
      <li v-for="game in games" :key="game.id">{{ game.name }}</li>
    </ul>
    <button @click="changeFirstName">修改第一个游戏名</button>
    <hr>
    <h2>对象的信息：{{ obj.a.b.c }}</h2>
    <button @click="changeObj">修改对象信息</button>
  </div>
</template>

<script lang="ts" setup name="person66666">
import { reactive } from 'vue'
let car = reactive({ brand: '奔驰', price: 100, })
let games = reactive([
  { id: '001', name: 'LOL' },
  { id: '002', name: 'CF' },
  { id: '003', name: '吃鸡' },
])
let obj = reactive({
  a: {
    b: {
      c: 666
    }
  }
})
function changePrice() {
  car.price += 10
}
function changeFirstName() {
  games[0].name = '王者荣耀'
}
function changeObj() {
  obj.a.b.c = 999
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

li {
  font-size: 20px;
}
</style>
