<template>
  <div>
    <!-- v-model用在html标签上 -->
    <!-- <input type="text" v-model="username"> -->
    <!-- <input type="text" :value="username" @input="username=(<HTMLInputElement>$event.target).value"> -->
    <!-- v-model用在组件标签上 -->
    <Atguigu v-model="username"></Atguigu>
    <!-- <Atguigu :modelValue="username" @update:modelValue="username=$event"></Atguigu> -->
  </div>
</template>

<script setup lang="ts" name="App">
import Atguigu from "@/components/Atguigu.vue";
import { ref } from "vue";
let username = ref("zhangsan");
</script>