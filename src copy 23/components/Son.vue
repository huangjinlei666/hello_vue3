<template>
    <div class="son">
        <h3>子组件</h3>
        <GrandSon></GrandSon>
    </div>
</template>

<script setup lang="ts" name="Son">
import GrandSon from './GrandSon.vue'
</script>

<style scoped>
    .son{
        height: 300px;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 0 10px;
        background-color: skyblue;
    }
</style>