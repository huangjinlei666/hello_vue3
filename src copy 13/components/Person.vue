<template>
  <div class="Person">
    <!-- <h2>{{a}}</h2> -->
    <ul>
      <li v-for="item in list" :key="item.id">{{ item.name }}--{{ item.age }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="person66666">
//define类型是宏函数，可以不用引入
import {defineProps,withDefaults} from 'vue'
import { Persons} from '@/types'
//接收a
// defineProps(['a'])
//接收a，同时将props保存起来
// let x= defineProps(['a','b','list'])
//接收+限制类型
// defineProps<{list:Persons}>()
//接收+限制类型+限制必要性+指定默认值
withDefaults(defineProps<{list?:Persons}>(),{
  list:()=>[{id:'001',name:'康师傅',age:40}]
})
// console.log(x)
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
