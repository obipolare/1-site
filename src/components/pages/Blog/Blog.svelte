<script>
  import GifApp from "./GifApp/GifApp.svelte";
</script>

<section>
  <h1 class="main-title">This is the blog!</h1>
  <article>
    <p class="main-paragraph">I think colors are cool!</p>
    <h2 class="main-paragraph">
      This Page is uncomplete yet, but for the moment imma show u some funny
      gifs
    </h2>
  </article>
</section>

<GifApp />

<hr />

<style>
  .main-title {
    font-size: 3rem;
    font-weight: 700;
  }

  .main-paragraph {
    font-size: 1.8rem;
    padding-left: 0.8rem;
  }
</style>
