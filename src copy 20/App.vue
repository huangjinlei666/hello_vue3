<template>
  <div class="app">
    <Header></Header>
    <!-- 导航区 -->
    <div class="navigate">
      <RouterLink to="/home">首页</RouterLink>
      <RouterLink :to="{name:'xinwen'}">新闻</RouterLink>
      <RouterLink :to="{path:'/about'}">关于</RouterLink>
    </div>
    <hr>
    <!-- 展示区 -->
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup name="App">
import Header from '@/components/Header.vue'
import {RouterView,RouterLink} from 'vue-router'
</script>

<style scoped>
</style>