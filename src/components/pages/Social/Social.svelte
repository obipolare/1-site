<script>
</script>

<section class="main-section">
  <figure class="main-figure">
    <img class="main-figure__img" src="./images/luck.jpg" alt="Luck voltia" />
  </figure>
  <h1 class="main-username">@obipolare 🍀</h1>
  <ul class="main-menu">
    <!-- <li class="main-menu__item">
      <a class="main-menu__link main-menu__link--web" href="/#"
        >📰 Visita mi Sitio WEB</a
      >
    </li> -->
    <li class="main-menu__item ">
      <a
        class="main-menu__link main-menu__link--youtube"
        target="_blank"
        href="https://www.youtube.com/channel/UCjBWKPHYM_azisD60cO87xA"
        >🔴 Youtube</a
      >
    </li>
    <li class="main-menu__item">
      <a
        class="main-menu__link main-menu__link--twitter"
        target="_blank"
        href="https://twitter.com/obipolare">🐦 Twitter</a
      >
    </li>
    <li class="main-menu__item">
      <a
        class="main-menu__link main-menu__link--insta"
        target="_blank"
        href="https://www.instagram.com/obipolare/">📸 Instagram</a
      >
    </li>
    <li class="main-menu__item">
      <a
        class="main-menu__link main-menu__link--twitch"
        target="_blank"
        href="https://www.twitch.tv/obipolare">💜 Twitch</a
      >
    </li>
    <li class="main-menu__item">
      <a
        class="main-menu__link main-menu__link--github"
        target="_blank"
        href="https://github.com/obipolare">🌑 Github</a
      >
    </li>
    <li class="main-menu__item">
      <a
        class="main-menu__link main-menu__link--telegram"
        target="_blank"
        href="https://t.me/Obipolare">☄️ Telegram</a
      >
    </li>
  </ul>
</section>

<style>
  :root {
    --web-hoverColor: #059669;
    --web-borderColor: #34d399;

    --youtube-hoverColor: #ef4444;
    --youtube-borderColor: #ef4444;

    --twitter-hoverColor: #3b82f6;
    --twitter-borderColor: #60a5fa;

    --insta-hoverColor: #ec4899;
    --insta-borderColor: #f472b6;

    --twitch-hoverColor: #7c3aed;
    --twitch-borderColor: #a78bfa;

    --telegram-hoverColor: #2563eb;
    --telegram-borderColor: #2563eb;

    --github-hoverColor: #374151;
    --github-borderColor: #9ca3af;
  }
  .main-section {
    display: grid;
    width: 58%;
    place-items: center;
    height: 100%;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    margin-left: auto;
    margin-right: auto;
  }
  .main-figure {
    display: flex;
    justify-content: center;
    margin-top: 0.8rem;
  }
  .main-figure__img {
    width: 9.6rem;
    border-radius: 100%;
  }
  .main-username {
    margin: 0.8rem;
    font-size: 1.8rem;
    font-weight: 700;
    text-align: center;
  }
  .main-menu {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(6, 1fr);
    row-gap: 1.6rem;
  }
  .main-menu__item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    grid-column: span 4;
    font-weight: 600;
    text-align: center;
    transition: 0.2s;
    border-radius: 0.4rem;
  }
  .main-menu__link {
    flex: 1;
    padding-top: 2.4rem;
    padding-bottom: 2.4rem;
    font-size: 1.8rem;
    transition: 0.2s;
  }
  .main-menu__link--web {
    border: 1px solid var(--web-borderColor);
  }
  .main-menu__link--web:hover {
    background-color: var(--web-hoverColor);
  }

  .main-menu__link--youtube {
    border: 1px solid var(--youtube-borderColor);
  }
  .main-menu__link--youtube:hover {
    background-color: var(--youtube-hoverColor);
  }

  .main-menu__link--twitter {
    border: 1px solid var(--twitter-borderColor);
  }
  .main-menu__link--twitter:hover {
    background-color: var(--twitter-hoverColor);
  }

  .main-menu__link--insta {
    border: 1px solid var(--insta-borderColor);
  }
  .main-menu__link--insta:hover {
    background-color: var(--insta-hoverColor);
  }

  .main-menu__link--twitch {
    border: 1px solid var(--twitch-borderColor);
  }
  .main-menu__link--twitch:hover {
    background-color: var(--twitch-hoverColor);
  }

  .main-menu__link--telegram {
    border: 1px solid var(--telegram-borderColor);
  }
  .main-menu__link--telegram:hover {
    background-color: var(--telegram-hoverColor);
  }
  .main-menu__link--github {
    border: 1px solid var(--github-borderColor);
  }
  .main-menu__link--github:hover {
    background-color: var(--github-hoverColor);
  }
  @media (max-width: 1024px) {
    /*lg */
    .main-section {
      width: 80%;
    }
  }
  @media (max-width: 460px) {
    /*lg */
    .main-section {
      width: 100%;
    }
    .main-menu {
      column-gap: 0.8rem;
    }
  }
</style>
