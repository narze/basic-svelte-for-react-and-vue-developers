<script setup>
import { ref } from "vue"

const value = ref("Hello")
</script>

<template>
  <div class="flex flex-col gap-4 items-center">
    Data binding with Vue

    <input type="text" class="input input-bordered" v-model="value" />

    Value: {{ value }}
  </div>
</template>
