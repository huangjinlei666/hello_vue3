<template>
  <Person a="嘿嘿" b="哈哈" :list="personList" />
</template>

<script lang="ts" setup name="App">
import Person from "./components/Person.vue";
import {type Persons} from '@/types'
import {reactive} from 'vue'
let personList=reactive<Persons>([
  {id:'wsegw1',name:'张三',age:50},
  {id:'wsegw2',name:'李四',age:30},
  {id:'wsegw3',name:'王五',age:20,x:'haha'}
])
// console.log(personList)
</script>

<style>
</style>