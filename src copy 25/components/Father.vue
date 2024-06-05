<template>
  <div class="father">
    <h2>父组件</h2>
    <div class="content">
      <Category>
        <template v-slot:s2>
          <ul>
            <li v-for="item in games" :key="item.id">{{ item.name }}</li>
          </ul>
        </template>
        <template v-slot:s1>
          <h3>热门游戏</h3>
        </template>
      </Category>
      <Category >
        <template v-slot:s2>
            <img :src="imgUrl" alt="" />
        </template>
        <template v-slot:s1>
            <h3>今日图片</h3>
        </template>
      </Category>
      <Category>
        <!-- 简写# -->
        <template #s2>
            <img :src="imgUrl" alt="" />
        </template>
        <template #s1>
            <h3>影视推荐</h3>
        </template>
      </Category>
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
import Category from "./Category.vue";
import { ref, reactive } from "vue";
let games = reactive([
  { id: "001", name: "LOL" },
  { id: "002", name: "CF" },
  { id: "003", name: "CS" },
  { id: "004", name: "MC" },
]);
let imgUrl = ref("https://z1.ax1x.com/2023/11/19/piNxLo4.jpg");
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
h3 {
  background-color: orange;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
}
</style>