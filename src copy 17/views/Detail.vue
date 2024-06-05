<template>
    <h4>新闻ID：{{ query.id }}</h4>
    <h4>新闻标题:{{ query.title }}</h4>
    <h4>新闻内容:{{ query.content }}</h4>
</template>
<script lang="ts" setup name="Detail">
import {useRoute} from 'vue-router'
import {toRef, toRefs} from 'vue'
const route=useRoute()
const {query}=toRefs(route)//解构赋值取出query，方便模板读取，toRefs不加会丢失响应式，解决响应式
// console.log('@',route)
</script>