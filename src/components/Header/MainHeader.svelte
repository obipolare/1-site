<script>
  import { link, location } from "svelte-spa-router";
  let canShow = false;
  // I did a toggle for the button of mobile
  const handleClickToggle = () => {
    canShow = !canShow;
  };
  console.log($location);
</script>

{#if $location !== "/social"}
  <header class="main-header">
    <nav class={`main-nav ${!canShow ? "bg-tranparent" : "bg-black"}`}>
      <div class="button-toggle">
        <button on:click={handleClickToggle} type="button" class="button"
          ><svg
            class="button__size"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
            ><title>Menu | Obipolare</title><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d={`${
                !canShow ? "M4 6h16M4 12h16M4 18h7" : "M6 18L18 6M6 6l12 12"
              }`}
            /></svg
          ></button
        >
      </div>
      <ul class={`main-menu ${!canShow && "hidden"}`}>
        <li class="main-menu__item">
          <a class="main-menu__link" href="/" use:link>Home</a>
        </li>
        <li class="main-menu__item">
          <a class="main-menu__link" href="/blog" use:link>Blog</a>
        </li>
        <li class="main-menu__item">
          <a class="main-menu__link" href="/about" use:link>About</a>
        </li>
      </ul>
    </nav>
  </header>
{/if}

<style>
  .main-header {
    width: 100%;
  }
  .main-nav {
    display: flex;
    width: 95%;
    flex-direction: column;
    justify-content: flex-end;
    margin-left: auto;
    margin-right: auto;
    border-radius: 0.4rem;
    background-color: transparent;
  }

  .button-toggle {
    align-items: center;
    justify-content: flex-end;
    padding: 0.4rem;
    display: none;
  }
  .button {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem;
    color: #9fa6b2;
    transition: 0.1s;
    border-radius: 0.6rem;
    background-color: transparent;
  }
  .button:hover {
    color: #6b7280;
  }
  .button:focus {
    outline: none;
    background-color: #fff;
    color: #6b7280;
  }
  .button__size {
    width: 2rem;
    height: 2rem;
  }
  .main-menu {
    flex-direction: row;
    justify-content: flex-end;
    display: flex;
    border-radius: 0.4rem;
    margin: 0;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 0.3rem;
  }

  .main-menu__item {
    display: flex;
  }
  .main-menu__link {
    flex-grow: 1;
    font-weight: bold;
    padding: 0.8rem 1.6rem;
    transition: 0.2s;
    color: white;
    border-radius: 0.4rem;
    font-size: 1.7rem;
    text-decoration: none;
  }
  .main-menu__link:hover {
    background-color: #fcd34d;
    color: #171939;
  }

  @media (max-width: 800px) {
    .bg-tranparent {
      background-color: transparent;
    }
    .bg-black {
      background-color: #222831;
    }
    .main-menu__link {
      padding: 1.6rem;
    }
    .main-menu {
      flex-direction: row;
      flex-direction: column;
      justify-content: flex-start;
      padding: 0.1rem;
    }
    .button-toggle {
      display: flex;
    }
    .hidden {
      display: none;
    }
  }
</style>
