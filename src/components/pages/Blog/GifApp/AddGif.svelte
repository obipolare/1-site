<script>
  import GifList from "./GifList.svelte";

  export let categories;
  let category = "";
  let error = false;
  const handleSubmit = (e) => {
    e.preventDefault();
    //Validate
    if (category.trim().length < 2) {
      return (error = true);
    }
    error = false;
    //Add to categories
    categories = [category, ...categories];
    category = "";
  };
</script>

<form on:submit={handleSubmit}>
  {#if error}
    <h5 class="error">
      There's a error! you cannot write only a letter, you have to write at
      least two letters
    </h5>
  {/if}
  <label for="category" class="label"
    >Or if you like other gif, you'll be able to search whatever you one!</label
  >
  <input
    type="text"
    bind:value={category}
    class="addGif-input"
    placeholder="You can search whatever gif you want here!"
  />
</form>
{#each categories as category}
  <GifList {category} />
{/each}

<!-- markup (zero or more items) goes here -->
<style>
  .label {
    padding-top: 1.6rem;
    padding-bottom: 1.6rem;
  }
  .addGif-input {
    display: flex;
    width: 100%;
    padding: 0.6rem 0.6rem;
    font-size: 1.7rem;
    background-color: transparent;
    border: 0.1rem solid gray;
    color: white;
  }
  .error {
    background-color: #e84545;
    padding: 0.8rem;
    border-radius: 0.4rem;
    font-weight: 600;
  }
</style>
