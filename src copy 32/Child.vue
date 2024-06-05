<template>
  <div class="child">
    <h2>我是child组件</h2>
    <h3>求和为：{{ sum }}</h3>
  </div>
</template>

<script setup lang="ts" name="Modal">
import { ref } from "vue";
import axios from 'axios'
let {data:{content}}=await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
let sum = ref(0);
console.log(content)
</script>

<style scoped>
.child {
  background-color: skyblue;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px;
}
</style>