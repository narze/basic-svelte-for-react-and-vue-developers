<script setup>
  import { onMounted } from "vue"

  // Lifecycle
  onMounted(() => {
    console.log(`Hello from Vue!`)
  })
</script>

<template>
  <p>Hello, world!</p>
</template>

<style>
  p {
    color: red;
    font-family: "Comic Sans MS", cursive;
    font-size: 2em;
  }
</style>
