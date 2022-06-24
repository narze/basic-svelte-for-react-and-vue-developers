<script lang="js">
  import { writable } from "svelte/store"

  const count = writable(0)

  function add100() {
    count.set($count + 100)
  }
</script>

<div class="flex flex-col gap-4">
  {$count}

  <button class="border btn" on:click={add100}> +100 </button>
</div>
