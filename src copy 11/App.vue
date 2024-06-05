<template>
  <Person ref="ren" />
  <button @click="showRen">输出</button>
</template>

<script lang="ts" setup name="App">
import Person from "./components/Person.vue";
import {ref} from 'vue'
let ren=ref()
function showRen(){
  console.log(ren.value)
}
</script>

<style>
</style>