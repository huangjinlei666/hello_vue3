<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <Category title="热门游戏">
        <ul>
            <li v-for="item in games" :key="item.id">{{ item.name }}</li>
        </ul>
      </Category>
      <Category title="今日美食">
        <img :src="imgUrl" alt="">
      </Category>
      <Category title="影视推荐">
        <img :src="imgUrl" alt="">
      </Category>
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
import Category from "./Category.vue";
import {ref,reactive} from 'vue'
let games=reactive([
    {id:'001',name:'LOL'},
    {id:'002',name:'CF'},
    {id:'003',name:'CS'},
    {id:'004',name:'MC'},
])
let imgUrl=ref('https://z1.ax1x.com/2023/11/19/piNxLo4.jpg')
</script>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}
.content{
    display: flex;
    justify-content: space-evenly;
}
img,video{
    width: 100%;
}
</style>