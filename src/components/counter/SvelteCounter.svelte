<script>
  let count = 0

  function add() {
    count += 1
  }

  function subtract() {
    count -= 1
  }
</script>

<div class="counter">
  <button class="border rounded px-2 py-1" on:click={subtract}>-</button>
  <pre>{count}</pre>
  <button class="border rounded px-2 py-1" on:click={add}>+</button>
</div>
