<script lang="js">
  let count = 0
</script>

<div class="flex flex-col gap-4 items-center">
  Conditional Rendering with Svelte

  <button on:click={() => count++} class="btn"> +1 </button>

  {#if count % 2 == 0}
    <div>{count} is even</div>
  {:else}
    <div>{count} is odd</div>
  {/if}
</div>
