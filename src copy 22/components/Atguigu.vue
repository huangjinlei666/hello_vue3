<template>
  <div>
    <input
      type="text"
      :value="modelValue"
      @input="emit('update:modelValue',(<HTMLInputElement>$event.target).value)"
    />
  </div>
</template>

<script setup lang="ts" name="Atguigu">
defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);
</script>

<style scoped>
input {
  border: 2px solid black;
  height: 30px;
  font-size: 20px;
  color: white;
  background-image: linear-gradient(45deg, red, yellow, green);
}
</style>