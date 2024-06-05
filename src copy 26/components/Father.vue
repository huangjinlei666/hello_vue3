<template>
  <div class="father">
    <!-- 数据在孩子，但根据数据生成的结构由父亲决定 -->
    <h2>父组件</h2>
    <div class="content">
      <Game>
        <template v-slot:hhh="params">
          <!-- <span>{{ params }}</span> -->
            <h4 v-for="item in params.youxi" :key="item.id">{{ item.name }}</h4>
         
        </template>
      </Game>
      <Game>
        <template v-slot:hhh="params">
          <ul>
            <li v-for="item in params.youxi" :key="item.id">{{ item.name }}</li>
          </ul>
        </template>
      </Game>
      <Game>
        <template v-slot:hhh="{youxi}">
          <ol>
            <li v-for="item in youxi" :key="item.id">{{ item.name }}</li>
          </ol>
        </template>
      </Game>
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
import Game from "./Game.vue";
</script>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}
.content {
  display: flex;
  justify-content: space-evenly;
}
img,
video {
  width: 100%;
}
</style>