<script setup>
import { ref } from "vue"

const todos = ref([
  { name: "Attend Svelte Meetup", done: true },
  { name: "Buy groceries", done: false },
  { name: "Cook dinner", done: false },
])
</script>

<template>
  <div class="flex flex-col gap-4 items-center">
    Loops with Vue

    <ul>
      <li v-for="todo in todos" class="flex gap-2 items-center">
        <input type="checkbox" v-model="todo.done" class="checkbox" />
        {{ todo.name }}
      </li>
    </ul>
  </div>
</template>
