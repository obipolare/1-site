<script>
  export let url, title;
</script>

{#key url}
  <figure class="gif-item vov fade-in">
    <img src={url} alt={title} class="img" loading="lazy" />
  </figure>
{/key}

<!-- markup (zero or more items) goes here -->
<style>
  .gif-item {
    max-width: 100%;
    display: block;
    margin-bottom: 10px;
  }
  .img {
    border-radius: 0.3rem;
  }
</style>
