<template>
  <div class="app">
    <h2>{{ msg }}</h2>
    <input type="text" v-model="msg" />
  </div>
</template>

<script setup lang="ts" name="App">
import { ref, customRef } from "vue";
import useMsgRef from './useMsgRef'
// let msg=ref('你好')
let {msg}= useMsgRef('你好',2000)
</script>

<style scoped>
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 10px;
}
button {
  margin: 0 5px;
}
</style>