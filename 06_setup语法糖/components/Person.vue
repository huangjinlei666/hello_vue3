<template>
  <div class="Person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="alertTel">展示电话</button>
  </div>
</template>

<script lang="ts" setup name="person66666">
    let name='张三'
    let age=19
    let tel='13888888888'
    function changeName(){
      name='李四'
    }
    function changeAge(){
      age=30
    }
    function alertTel(){
      alert(tel)
    }
</script>

<style scoped>
    .Person{
        background-color: skyblue;
        box-shadow: 0,0,10px;
        border-radius: 10px;
        padding: 20px;
    }
    button{
      margin:0 5px
    }
</style>
