<script setup>
import { ref } from "vue"

const count = ref(0)
</script>

<template>
  <div class="flex flex-col gap-4 items-center">
    Conditional Rendering with Vue

    <button @click="count++" class="btn">+1</button>

    <div v-if="count % 2 === 0">{{ count }} is even</div>
    <div v-else>{{ count }} is odd</div>
  </div>
</template>
