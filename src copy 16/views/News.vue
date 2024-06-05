<template>
    <h2>我是news组件</h2>
</template>
<script lang="ts" setup name="News">
import { onMounted , onUnmounted } from 'vue'
    onMounted(()=>{
        console.log('news挂载了')
    })
    onUnmounted(()=>{
        console.log('news卸载了')
    })
</script>