<template>
  <div class="father">
    <Child1></Child1>
    <Child2></Child2>
  </div>
</template>

<script setup lang="ts" name="App">
import Child1 from "@/components/Child1.vue";
import Child2 from "@/components/Child2.vue";
</script>

<style scoped>
.father {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 300px;
  width: auto;
  background-color: grey;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>