<script lang="js">
  let count = 0

  // Reactive Statement
  $: countDoubled = count * 2 // FIXME
</script>

<div class="flex flex-col gap-4">
  Compute with Svelte: {count} x 2 = {countDoubled}

  <button class="border btn" on:click={() => count++}> +1 </button>

  <button class="border btn" on:click={() => count--}> -1 </button>

  <button class="border btn" on:click={() => (count = 0)}> Reset </button>
</div>
