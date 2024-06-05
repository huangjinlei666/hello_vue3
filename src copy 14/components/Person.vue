<template>
  <div class="Person">
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="changeSum">sum++</button>
    <hr>
    <button @click="addMsg">再来一句话</button>
    <p v-for="(item,index) in msgList" :key="index">{{ item}}</p>
  </div>
</template>

<script lang="ts" setup name="person66666">
import useSum from '@/hooks/useSum'
import useMsg from '@/hooks/useMsg'
const {sum,changeSum} = useSum()
const {addMsg,msgList} = useMsg()
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
