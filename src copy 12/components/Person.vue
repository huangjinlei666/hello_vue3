<template>
  <div class="Person">
    ???
  </div>
</template>

<script lang="ts" setup name="person66666">
import {type PersonInter,type Persons} from '@/types'
//定义一个对象
// let person:PersonInter={id:'wsegw4',name:'张三',age:20}

//定义一个数组，数组里每一项都符合PersonInter接口规范
// let personList:Array<PersonInter>=[//写法一
let personList:Persons=[//写法二
  {id:'wsegw1',nmae:'张三',age:50},
  {id:'wsegw2',name:'李四',age:30},
  {id:'wsegw3',name:'王五',age:20}
]
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
