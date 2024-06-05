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
  </div>
</template>

<script lang="ts" setup name="person66666">
import { ref } from 'vue'
let car = ref({ brand: '奔驰', price: 100, })
let games = ref([
  { id: '001', name: 'LOL' },
  { id: '002', name: 'CF' },
  { id: '003', name: '吃鸡' },
])
function changePrice() {
  car.value.price += 10
}
function changeFirstName() {
  games.value[0].name = '王者荣耀'
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
