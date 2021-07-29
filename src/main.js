import App from "./App.svelte";
import "./styles/modern-normalize.css";
import "./styles/global.css";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
