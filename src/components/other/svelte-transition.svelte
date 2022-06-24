<script lang="js">
  import { fade, fly } from "svelte/transition"
  let visible = false
</script>

<div class="flex flex-col gap-4">
  <label class="flex items-center gap-2">
    <input type="checkbox" class="checkbox" bind:checked={visible} /> Visible
  </label>

  {#if visible}
    <span transition:fade>Hello,</span>
    <span transition:fly={{ y: 200, delay: 300 }}>world!</span>
  {/if}
</div>
