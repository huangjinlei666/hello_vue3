<template>
    <h4>新闻ID:{{ id }}</h4>
    <h4>新闻标题:{{ title }}</h4>
    <h4>新闻内容:{{ content }}</h4>
</template>
<script lang="ts" setup name="Detail">
defineProps(['id','title','content'])
</script>