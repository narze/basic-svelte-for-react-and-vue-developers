<script lang="js">
  const todos = [
    { name: "Attend Svelte Meetup", done: true },
    { name: "Buy groceries", done: false },
    { name: "Cook dinner", done: false },
  ]
</script>

<div class="flex flex-col gap-4 items-center">
  Loops with Svelte

  <ul>
    {#each todos as todo}
      <li class="flex gap-2 items-center">
        <input type="checkbox" bind:checked={todo.done} class="checkbox" />
        {todo.name}
      </li>
    {/each}
  </ul>
</div>
