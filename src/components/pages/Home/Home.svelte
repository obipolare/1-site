<script>
</script>

<h1 class="main-title">Welcome Home! 👋</h1>
<a class="miree" target="_blank" href="https://youtu.be/93qx0OrMHlQ"
  >A Song 🎵</a
>
<p class="main-paragraph">We've been waiting for you >:)</p>
<section class="slider">
  <scroll-container class="slider-container">
    <scroll-page id="video-1">
      <iframe
        width="560"
        height="315"
        class="video"
        src="https://www.youtube.com/embed/EvWKuubUTko"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </scroll-page>

    <scroll-page id="video-2">
      <iframe
        width="560"
        height="315"
        class="video"
        src="https://www.youtube.com/embed/dsK8SsfqdHE"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </scroll-page>
    <scroll-page id="video-3">
      <iframe
        width="560"
        height="315"
        class="video"
        src="https://www.youtube.com/embed/SavhHnWla6c"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </scroll-page>
  </scroll-container>
  <div class="slider-bullet-list">
    <a href="#video-1" class="slider-bullet" />
    <a href="#video-2" class="slider-bullet" />
    <a href="#video-3" class="slider-bullet" />
  </div>
</section>

<style>
  /*slider */
  .main-title {
    font-size: 3rem;
    font-weight: 700;
  }
  .main-paragraph {
    font-size: 1.8rem;
    padding-left: 0.3rem;
  }
  .miree {
    font-size: 2rem;
    color: #fff;
    transition: color 0.2s;
    padding-left: 0.3rem;
  }
  .miree:hover {
    color: orange;
  }
  .slider {
    width: 60%;
    margin: auto;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
  }
  .slider-container {
    display: block;
    overflow: hidden;
    scroll-behavior: smooth;
    white-space: nowrap;
    font-size: 0;
  }

  .video {
    margin: 0;
    display: inline-block;
    width: 100%;
    height: auto;
    aspect-ratio: 16/9;
  }
  .slider-bullet-list {
    text-align: center;
    margin-block-start: 10px;
    /* margin-top: 10px; */
  }

  .slider-bullet {
    display: inline-block;
    inline-size: 15px;
    block-size: 15px;
    background: white;
    border-radius: 50%;
  }
  @media (max-width: 880px) {
    .slider {
      width: 90%;
    }
  }
  @media (max-width: 640px) {
    .slider {
      width: 100%;
    }
  }
</style>
