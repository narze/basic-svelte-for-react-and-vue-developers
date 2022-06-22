<script setup>
import { ref } from "vue"

const count = ref(0)
</script>

<template>
  <div class="flex flex-col gap-4">
    Count with Vue: {{ count }}

    <button class="border btn" @click="count++"> +1 </button>

    <button class="border btn" @click="count--"> -1 </button>
    
    <button class="border btn" @click="count = 0"> Reset </button>
  </div>
</template>
