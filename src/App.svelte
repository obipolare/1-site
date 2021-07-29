<script>
  import Router from "svelte-spa-router";
  import MainHeader from "./components/Header/MainHeader.svelte";
  import MainFooter from "./components/Footer/MainFooter.svelte";
  import Home from "./components/pages/Home/Home.svelte";
  import About from "./components/pages/About/About.svelte";
  import Blog from "./components/pages/Blog/Blog.svelte";
  import Social from "./components/pages/Social/Social.svelte";
  import NotFound from "./components/NotFound/NotFound.svelte";

  const routes = {
    "/": Home,
    "/about": About,
    "/blog": Blog,
    "/social": Social,
    "*": NotFound,
  };
</script>

<MainHeader />
<main>
  <Router {routes} />
</main>
<MainFooter />

<style>
  main {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 640px) {
    main {
      width: 98%;
    }
  }
</style>
