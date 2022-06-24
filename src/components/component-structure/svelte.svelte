<script lang="js">
  import { onMount } from "svelte"

  // Lifecycle
  onMount(() => {
    console.log("Hello from Svelte!")
  })
</script>

<p>Hello, world!</p>

<style>
  p {
    color: red;
    font-family: "Comic Sans MS", cursive;
    font-size: 2em;
  }
</style>
