<template>
    <h4>新闻ID:{{ route.params.id }}</h4>
    <h4>新闻标题:{{ route.params.title }}</h4>
    <h4>新闻内容:{{ route.params.content }}</h4>
</template>
<script lang="ts" setup name="Detail">
import {useRoute} from 'vue-router'
const route=useRoute()
console.log(route)
</script>