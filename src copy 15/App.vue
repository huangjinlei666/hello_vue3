<template>
  <div class="app">
    <h2>Vue路由测试</h2>
    <!-- 导航区 -->
    <div class="navigate">
      <RouterLink to="/home">首页</RouterLink>
      <RouterLink to="/news">新闻</RouterLink>
      <RouterLink to="/about">关于</RouterLink>
    </div>
    <!-- 展示区 -->
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup name="App">
import {RouterView,RouterLink} from 'vue-router'
</script>

<style>
</style>