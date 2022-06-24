<script lang="js">
  let value = "hello"
</script>

<div class="flex flex-col gap-4 items-center">
  Data binding with Svelte

  <input type="text" class="input input-bordered" bind:value />
  <!-- Shorthand: <input type="text" class="input input-bordered" bind:value /> -->

  Value: {value}
</div>
