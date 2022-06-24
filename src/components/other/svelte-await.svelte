<script lang="js">
  let promise = rollDice()

  const handleClick = () => { promise = rollDice() }

  async function rollDice() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Math.ceil(Math.random() * 6))
      }, 1000)
    })
  }
</script>

<div class="flex flex-col gap-4">
  <button class="btn" on:click={handleClick}> Roll Dice 🎲 </button>

  {#await promise}
    <p>Rolling...</p>
  {:then number}
    <p>You got {number}</p>
  {/await}
</div>
