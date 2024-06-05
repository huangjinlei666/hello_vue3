<template>
  <h2>我是news组件</h2>
  <ul>
    <li v-for="item in newsList" :key="item.id">
      <RouterLink
        :to="{
          name:'xiangqing',
          params:{
            id:item.id,
            title:item.title,
            content:item.content
          }
        }"
        >{{ item.title }}</RouterLink
      >
    </li>
  </ul>
  <hr>
  <div>
    <router-view></router-view>
  </div>
</template>
<script lang="ts" setup name="News">
import { RouterView, RouterLink } from "vue-router";
import { reactive } from "vue";
const newsList = reactive([
  { id: "001", title: "新闻yi", content: "新闻yi内容" },
  { id: "002", title: "新闻er", content: "新闻er内容" },
  { id: "003", title: "新闻san", content: "新闻san内容" },
  { id: "004", title: "新闻si", content: "新闻si内容" },
]);
</script>