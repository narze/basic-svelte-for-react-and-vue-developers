<script lang="js">
  import { tweened } from "svelte/motion"
  import { cubicOut } from "svelte/easing"

  const count = tweened(0, {
    easing: cubicOut,
    duration: 2000,
  })

  function add100() {
    count.set($count + 100)
  }
</script>

<div class="flex flex-col gap-4">
  {$count.toFixed(0)}

  <button class="border btn" on:click={add100}> +100 </button>
</div>
