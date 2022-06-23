<script setup>
import { ref, computed } from "vue"

const count = ref(0)

const countDoubled = computed(() => count.value * 2)
</script>

<template>
  <div class="flex flex-col gap-4">
    Compute with Vue: {{ count }} x 2 = {{ countDoubled }}

    <button class="border btn" @click="count++">+1</button>

    <button class="border btn" @click="count--">-1</button>

    <button class="border btn" @click="count = 0">Reset</button>
  </div>
</template>
