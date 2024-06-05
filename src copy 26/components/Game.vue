<template>
  <div class="game">
    <h3>游戏列表</h3>
    <slot name="hhh" :youxi="games" x="哈哈"></slot>
  </div>
</template>

<script setup lang="ts" name="Game">
import { reactive } from "vue";
let games = reactive([
  { id: "001", name: "LOL" },
  { id: "002", name: "CF" },
  { id: "003", name: "CS" },
  { id: "004", name: "MC" },
]);
</script>

<style scoped>
.game {
  width: 200px;
  height: 300px;
  background-color: skyblue;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
h3 {
  background-color: orange;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
}
</style>