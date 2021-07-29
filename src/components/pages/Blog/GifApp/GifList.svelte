<script>
  import GifListItem from "./GifListItem.svelte";

  export let category;
  let saveGifs = [];
  let loading = true;
  const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
      category
    )}&limit=12&api_key=Tgk3m9g3lF2HZVQztaVvytmkSJiGiTSF`;
    const res = await fetch(url);
    const { data } = await res.json();
    const gifs = data.map((el) => {
      return {
        title: el.title,
        url: el.images.original.url,
      };
    });
    saveGifs = gifs;
  };
  $: console.log(saveGifs);
  $: getGifs(category);
</script>

<section class="gif-container ">
  <!-- {#key category} -->
  {#each saveGifs as gif}
    <GifListItem {...gif} />
  {/each}
  <!-- {/key} -->
</section>

<style>
  .gif-container {
    column-count: 3;
    column-width: 200px;
    column-gap: 40px;
    max-width: 1500px;
    margin-left: auto;
    margin-right: auto;
    padding: 30px;
  }
</style>
