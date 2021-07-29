<script>
  import { onMount } from "svelte";
  let gif = {};
  onMount(async () => {
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=Tgk3m9g3lF2HZVQztaVvytmkSJiGiTSF`
    );
    const { data } = await res.json();
    gif = data;
  });
</script>

<h1 class="main-title">This is About</h1>
<p class="main-paragraph">Imagine a world where world is not world!</p>
<p class="main-paragraph">please!, no os vayáis a ofender por los gifs 👋</p>
<figure class="gif">
  <img src={gif.image_url} alt={gif.title} />
</figure>
<hr />

<style>
  .main-title {
    font-size: 3rem;
    font-weight: 700;
  }
  .main-paragraph {
    font-size: 1.8rem;
    padding-left: 0.3rem;
  }
  .gif {
    display: flex;
    justify-content: center;
    padding-top: 1.6rem;
    padding-bottom: 1.6rem;
  }
</style>
