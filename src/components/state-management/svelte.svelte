<script lang="js">
  let count = 0
</script>

<div class="flex flex-col gap-4">
  Count with Svelte: {count}

  <button class="border btn" on:click={() => count++}> +1 </button>

  <button class="border btn" on:click={() => count--}> -1 </button>

  <button class="border btn" on:click={() => count = 0}> Reset </button>
</div>
